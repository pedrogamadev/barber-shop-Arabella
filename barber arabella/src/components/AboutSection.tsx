import type { FC } from 'react'

import mustacheIcon from '../assets/mustache.png'
import SectionTitle from './SectionTitle'

const AboutSection: FC = () => (
  <section id="sobre" className="scroll-mt-24 bg-charcoal-soft py-24">
    <div className="mx-auto grid max-w-6xl items-center gap-16 px-6 md:grid-cols-[1.1fr_0.9fr]">
      <SectionTitle
        subtitle="Sobre nós"
        title="Barbearia conceito para quem vive tecnologia e estilo"
        align="left"
        description=
          "Na As’ Arabella .Dev unimos a arte clássica do grooming com inovação digital. Nossos barbeiros interpretam seu estilo, analisam tendências e criam um ritual exclusivo com cortes, barbas e tratamentos de alta performance."
      />
      <div className="relative flex justify-center md:justify-end">
        <div className="relative flex h-60 w-60 items-center justify-center overflow-hidden rounded-full border border-brand-gold/30 bg-black/40 shadow-glow">
          <img src={mustacheIcon} alt="Ícone de bigode estilizado" className="h-32 w-32 object-contain" />
        </div>
        <div className="absolute -left-6 -top-6 hidden h-20 w-20 rounded-3xl border border-brand-gold/40 bg-brand-gold/10 blur-lg md:block" />
        <div className="absolute -bottom-10 -right-10 hidden h-24 w-24 rounded-full border border-brand-gold/20 bg-brand-gold/5 blur-xl md:block" />
      </div>
    </div>
  </section>
)

export default AboutSection
