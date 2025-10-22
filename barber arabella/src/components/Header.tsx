import { useState, type FC } from 'react'

import logo from '../assets/mustache.png'

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
    <header className="fixed inset-x-0 top-0 z-50 border-b border-brand-gold/20 bg-night/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#inicio"
          className="flex items-center"
        >
          <img
            src={logo}
            alt="Logotipo As’ Arabella .Dev"
            className="h-12 w-12 rounded-full border border-brand-gold/50 object-cover shadow-glow"
          />
          <span className="sr-only">As’ Arabella .Dev</span>
        </a>

        <nav className="hidden items-center gap-8 text-xs font-semibold uppercase tracking-[0.35em] text-brand-sand/80 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="transition-colors duration-300 hover:text-brand-gold"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          aria-label="Abrir navegação"
          aria-expanded={isMenuOpen}
          onClick={handleToggleMenu}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-brand-gold/30 text-white transition hover:border-brand-gold hover:text-brand-gold md:hidden"
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
        <div className="mx-6 mb-6 flex flex-col gap-3 rounded-2xl border border-brand-gold/20 bg-night/95 p-6 text-sm font-semibold uppercase tracking-[0.25em] text-brand-sand/80 shadow-lg">
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
        </div>
      </nav>
    </header>
  )
}

export default Header
