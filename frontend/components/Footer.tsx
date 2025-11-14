export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-black">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-6 text-xs text-white/50 md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} ZIMUT. All rights reserved.</p>
        <p>Software clarity, guided with care.</p>

      </div>
    </footer>
  );
}
