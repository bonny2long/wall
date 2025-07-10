'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabaseClient';
import Post from './Post';



type Message = {
  id: string;
  body: string;
  created_at: string;
  image_url?: string;
};

export default function Feed() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState(false); // New state for loading

  useEffect(() => {
    const fetchPosts = async () => {
      const { data, error } = await supabase
        .from('posts')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error loading posts:', error.message);
      } else {
        setMessages(data || []);
      }
    };

    fetchPosts();
  }, []);

  const handleShare = async () => {
    const trimmed = input.trim();
    if (!trimmed && !imageFile) return;

    setIsLoading(true); // Set loading to true when sharing starts
    let imageUrl = '';

    try {
      if (imageFile) {
        const fileExt = imageFile.name.split('.').pop();
        const fileName = `${Date.now()}.${fileExt}`;
        const filePath = `${fileName}`;

        const { error: uploadError } = await supabase.storage
          .from('post-images')
          .upload(filePath, imageFile);

        if (uploadError) {
          console.error('Upload error:', uploadError.message);
          setIsLoading(false); // Stop loading on error
          return;
        }

        const { data } = supabase.storage
          .from('post-images')
          .getPublicUrl(filePath);

        imageUrl = data.publicUrl;
      }

      const { data: newPost, error: insertError } = await supabase
        .from('posts')
        .insert([{ body: trimmed, image_url: imageUrl }])
        .select(); // Add .select() to get the newly inserted data

      if (insertError) {
        console.error('Post insert error:', insertError.message);
        return;
      }

      // Add the new post to the beginning of the messages array for immediate display
      // Assumes newPost is an array, take the first element
      if (newPost && newPost.length > 0) {
        setMessages((prevMessages) => [newPost[0], ...prevMessages]);
      }

      setInput('');
      setImageFile(null);
    } catch (error) {
      console.error('An unexpected error occurred:', error);
    } finally {
      setIsLoading(false); // Always stop loading when done or on error
    }
  };

  // Function to handle post deletion (will be passed to Post component)
  const handleDeletePost = async (id: string) => {
    if (!window.confirm('Are you sure you want to delete this post?')) {
      return; // User cancelled
    }

    // Optional: Add a local loading state for individual post deletion if desired
    // For now, we'll just optimistically remove or re-fetch after deletion.
    
    // First, try to get the image URL to delete the image from storage as well
    const { data: postData, error: fetchError } = await supabase
        .from('posts')
        .select('image_url')
        .eq('id', id)
        .single();

    if (fetchError) {
        console.error('Error fetching post to get image URL:', fetchError.message);
        // Continue with post deletion even if image URL fetch fails
    }

    const { error: deleteError } = await supabase
      .from('posts')
      .delete()
      .eq('id', id);

    if (deleteError) {
      console.error('Error deleting post:', deleteError.message);
    } else {
      // Remove the deleted post from the local state
      setMessages((prevMessages) => prevMessages.filter((msg) => msg.id !== id));
      console.log('Post deleted successfully!');

      // If there was an image, delete it from storage
      if (postData?.image_url) {
          const imagePath = postData.image_url.split('/').pop(); // Extract file name from URL
          if (imagePath) {
              const { error: storageDeleteError } = await supabase.storage
                  .from('post-images') // Make sure this matches your bucket name
                  .remove([imagePath]);

              if (storageDeleteError) {
                  console.error('Error deleting image from storage:', storageDeleteError.message);
              } else {
                  console.log('Image deleted from storage successfully!');
              }
          }
      }
    }
  };

  return (
    <div className="space-y-4">
      {/* Post Form */}
      <div className="bg-white p-4 rounded shadow space-y-2">
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="What's on your mind?"
          className="w-full border rounded p-2 text-sm"
          maxLength={280}
          disabled={isLoading} // Disable input while loading
        />

        <input
          type="file"
          accept="image/*"
          onChange={(e) => setImageFile(e.target.files?.[0] || null)}
          className="text-sm text-gray-600"
          disabled={isLoading} // Disable input while loading
        />

        <div className="flex justify-between text-xs text-gray-500">
          <span>{280 - input.length} characters left</span>
          <button
            onClick={handleShare}
            className="bg-blue-600 text-white px-3 py-1 rounded text-sm disabled:opacity-50 flex items-center justify-center" // Add flex for centering
            disabled={(!input.trim() && !imageFile) || isLoading} // Disable button while loading
          >
            {isLoading ? (
              <>
                <span className="spinner"></span> {/* Simple CSS spinner */}
                <span>Sharing...</span>
              </>
            ) : (
              'Share'
            )}
          </button>
        </div>
      </div>

      {/* Feed Posts */}
      {messages.map((msg) => (
        <Post
          key={msg.id}
          id={msg.id}
          name="Bonny Makaniankhondo"
          content={msg.body}
          timestamp={new Date(msg.created_at).toLocaleString()}
          imageUrl={msg.image_url}
          onDelete={handleDeletePost} // Pass the delete function
        />
      ))}
    </div>
  );
}