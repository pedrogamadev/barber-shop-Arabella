import { useState, type FC } from 'react'

const navItems = [
  { label: 'Início', href: '#inicio' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Galeria', href: '#galeria' },
  { label: 'Equipe', href: '#equipe' },
  { label: 'Preços', href: '#precos' },
  { label: 'Depoimentos', href: '#depoimentos' },
  { label: 'Contato', href: '#contato' },
]

const Header: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleToggleMenu = () => {
    setIsMenuOpen((previous) => !previous)
  }

  const handleCloseMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/60 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#inicio"
          className="font-display text-xl font-semibold uppercase tracking-[0.4em] text-brand-gold transition hover:text-brand-gold/80"
        >
          As’ Arabella <span className="text-white">.Dev</span>
        </a>

        <nav className="hidden items-center gap-8 text-xs font-semibold uppercase tracking-[0.35em] text-neutral-200 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="transition-colors duration-300 hover:text-brand-gold"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#agendamento"
            className="rounded-full bg-brand-gold px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-black transition hover:bg-brand-gold/90"
          >
            Agendar
          </a>
        </nav>

        <button
          type="button"
          aria-label="Abrir navegação"
          aria-expanded={isMenuOpen}
          onClick={handleToggleMenu}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-white transition hover:border-brand-gold hover:text-brand-gold md:hidden"
        >
          <span className="relative h-3.5 w-4"> 
            <span
              className={`absolute left-0 top-0 h-0.5 w-full rounded-full bg-current transition duration-300 ${
                isMenuOpen ? 'translate-y-1.5 rotate-45' : ''
              }`}
            />
            <span
              className={`absolute left-0 top-1.5 h-0.5 w-full rounded-full bg-current transition duration-300 ${
                isMenuOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`absolute left-0 top-3 h-0.5 w-full rounded-full bg-current transition duration-300 ${
                isMenuOpen ? '-translate-y-1.5 -rotate-45' : ''
              }`}
            />
          </span>
        </button>
      </div>

      <nav
        className={`md:hidden ${
          isMenuOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        } transition-opacity duration-300`}
      >
        <div className="mx-6 mb-6 flex flex-col gap-3 rounded-2xl border border-white/10 bg-charcoal/95 p-6 text-sm font-semibold uppercase tracking-[0.25em] text-neutral-200 shadow-lg">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-lg px-3 py-2 transition-colors hover:bg-white/5 hover:text-brand-gold"
              onClick={handleCloseMenu}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#agendamento"
            className="rounded-lg bg-brand-gold px-3 py-2 text-center text-black hover:bg-brand-gold/90"
            onClick={handleCloseMenu}
          >
            Agendar Corte
          </a>
        </div>
      </nav>
    </header>
  )
}

export default Header
