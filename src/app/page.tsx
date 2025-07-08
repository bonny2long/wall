// src/app/page.tsx
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import Feed from '@/components/Feed';

export default function Home() {
  return (
    <div>
      <Header />
      <main className="max-w-7xl mx-auto grid grid-cols-12 gap-4 mt-4 px-4">
        <aside className="col-span-3">
          <Sidebar />
        </aside>
        <section className="col-span-6">
          <Feed />
        </section>
        <aside className="col-span-3 hidden lg:block">
          {/* Optional: Right sidebar for ads or friends */}
          <div className="bg-white rounded-lg p-4 shadow text-sm">
            <h2 className="font-semibold mb-2">Sponsored</h2>
            <p>Scuba diving vacations, hard drive imaging, etc...</p>
          </div>
        </aside>
      </main>
    </div>
  );
}
