export default function NavbarPage({navLinks, activeSection}) {
    
    return (
        <>
        <nav className="max-w-7xl mx-auto flex items-center justify-between bg-[var(--secondary-color)]/60 border border-white/5 rounded-2xl px-8 py-5">
          <div className="text-xl font-bold tracking-wide">
            <span className="text-white">Rome</span>
            <span className="text-[var(--primary-color)]">.</span>
          </div>
          <ul className="hidden md:flex items-center gap-10 text-sm tracking-wider text-gray-200">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className={`relative pb-1 transition-colors ${
                    activeSection === link.id
                      ? "text-[var(--primary-color)]"
                      : "hover:text-[var(--primary-color)]"
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute left-0 -bottom-0.5 h-[2px] bg-[var(--primary-color)] transition-all duration-300 ${
                      activeSection === link.id ? "w-full" : "w-0"
                    }`}
                  />
                </a>
              </li>
            ))}
          </ul>
        </nav>
        </>
    ) 
}