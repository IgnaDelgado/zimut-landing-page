export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-black">
      <div className="section-wrapper flex flex-col gap-3 py-8 text-xs text-white/50 md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} ZIMUT. All rights reserved.</p>
        <p>Software clarity, guided with care.</p>
      </div>
    </footer>
  );
}
