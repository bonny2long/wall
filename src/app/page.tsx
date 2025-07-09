import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import Feed from '@/components/Feed';
import Rightbar from '@/components/Rightbar'

export default function Home() {
  return (
    <div className="bg-[#e9ebee] min-h-screen">
      <Header />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-4 px-4 pt-6">
        <aside className="lg:col-span-3 hidden lg:block">
          <Sidebar />
        </aside>

        <section className="lg:col-span-6">
          <Feed />
        </section>

        <aside className="lg:col-span-3 hidden lg:block">
          <Rightbar />
        </aside>
      </div>
    </div>
  );
}
