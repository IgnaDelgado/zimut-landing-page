export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-black">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-6 text-xs text-white/50 md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} Guidelight Labs. All rights reserved.</p>
        <p>Steadfast software, human-first guidance.</p>
      </div>
    </footer>
  );
}
