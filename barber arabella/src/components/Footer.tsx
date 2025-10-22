import type { FC } from 'react'

const Footer: FC = () => (
  <footer className="border-t border-white/10 bg-black/80 py-10">
    <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 text-center text-xs uppercase tracking-[0.3em] text-neutral-500 sm:flex-row sm:text-left">
      <p className="font-display text-sm uppercase tracking-[0.35em] text-brand-gold">
        As’ Arabella <span className="text-white">.Dev</span>
      </p>
      <p className="text-neutral-400">© {new Date().getFullYear()} As’ Arabella .Dev. Todos os direitos reservados.</p>
      <div className="flex gap-4 text-neutral-400">
        <a href="#sobre" className="transition hover:text-brand-gold">
          Sobre
        </a>
        <a href="#servicos" className="transition hover:text-brand-gold">
          Serviços
        </a>
        <a href="#contato" className="transition hover:text-brand-gold">
          Contato
        </a>
      </div>
    </div>
  </footer>
)

export default Footer
