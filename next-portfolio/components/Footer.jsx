

// components/Footer.tsx

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-white px-8 py-12">
      <div className="max-w-5xl mx-auto flex justify-between items-start flex-wrap gap-8">
        <div>
          <p className="text-xl font-medium">Location</p>
          <p className="text-white-400 mt-1">Bangalore — India</p>
        </div>
        <div className="flex flex-col gap-3">
          <a href="https://linkedin.com" className="p-2 border border-gray-600 rounded hover:border-gray-300 transition">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
              <rect x="2" y="9" width="4" height="12"/>
              <circle cx="4" cy="4" r="2"/>
            </svg>
          </a>
          <a href="https://github.com" className="p-2 border border-gray-600 rounded hover:border-gray-300 transition">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
            </svg>
          </a>
        </div>
      </div>
      <hr className="border-gray-700 max-w-5xl mx-auto my-6" />
      <p className="text-center text-gray-500 text-sm">© 2026 Avantika Rawat. All rights reserved.</p>
    </footer>
  );
}