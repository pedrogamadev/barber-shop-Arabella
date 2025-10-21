import type { FC } from 'react'

import heroImage from '../assets/hero.avif'

const Hero: FC = () => (
  <section
    id="inicio"
    className="relative flex min-h-screen items-center justify-center overflow-hidden bg-night text-white"
  >
    <img
      src={heroImage}
      alt="Ferramentas de barbearia douradas sobre fundo escuro"
      className="absolute inset-0 h-full w-full object-cover brightness-[0.55]"
    />
    <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/80 to-black" aria-hidden="true" />
    <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center gap-8 px-6 text-center">
      <span className="text-xs font-semibold uppercase tracking-[0.35em] text-brand-gold">Barbearia Boutique</span>
      <h1 className="font-display text-4xl font-semibold leading-tight sm:text-6xl">
        As’ Arabella <span className="text-brand-gold">.Dev</span>
      </h1>
      <p className="max-w-2xl text-lg text-neutral-300 sm:text-xl">
        Estilo que diferencia você. Experiências personalizadas, técnicas clássicas e o toque futurista da nossa equipe de
        especialistas em grooming masculino.
      </p>
      <div className="flex flex-col items-center gap-6 sm:flex-row">
        <a
          href="#agendamento"
          className="inline-flex items-center justify-center rounded-full bg-brand-gold px-8 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-black transition duration-300 hover:bg-brand-gold/90 hover:shadow-glow"
        >
          Agendar Corte
        </a>
        <a
          href="#servicos"
          className="text-sm font-semibold uppercase tracking-[0.3em] text-neutral-200 transition-colors duration-300 hover:text-brand-gold"
        >
          Conheça os serviços
        </a>
      </div>
      <div className="grid w-full grid-cols-1 gap-6 text-left text-xs uppercase tracking-[0.3em] text-neutral-400 sm:grid-cols-3">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
          <p className="font-semibold text-white">Tecnologia &amp; Tradição</p>
          <span className="mt-2 block text-[0.7rem] normal-case text-neutral-300">
            Consultoria de imagem e grooming com ferramentas premium e diagnóstico digital.
          </span>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
          <p className="font-semibold text-white">Ambiente Exclusivo</p>
          <span className="mt-2 block text-[0.7rem] normal-case text-neutral-300">
            Lounge reservado, carta de bebidas selecionadas e playlists assinadas por DJs convidados.
          </span>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
          <p className="font-semibold text-white">Profissionais Autênticos</p>
          <span className="mt-2 block text-[0.7rem] normal-case text-neutral-300">
            Barbeiros especialistas em cortes autorais e barbas esculpidas sob medida.
          </span>
        </div>
      </div>
    </div>
  </section>
)

export default Hero
