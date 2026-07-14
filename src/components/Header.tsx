const navItems = [
  { href: "#about", label: "소개" },
  { href: "#projects", label: "프로젝트" },
  { href: "#skills", label: "스킬" },
  { href: "#contact", label: "연락처" },
];

export default function Header() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-black/[.08] bg-white/80 backdrop-blur-sm dark:border-white/[.12] dark:bg-black/80">
      <div className="mx-auto flex h-16 max-w-4xl items-center justify-between px-6">
        <a href="#about" className="text-sm font-semibold tracking-tight">
          ziny Corporation
        </a>
        <nav className="flex gap-6 text-sm text-zinc-600 dark:text-zinc-400">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-zinc-950 dark:hover:text-zinc-50"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
