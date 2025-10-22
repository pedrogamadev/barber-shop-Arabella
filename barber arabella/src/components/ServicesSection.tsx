import type { FC } from 'react'

import SectionTitle from './SectionTitle'

const services = [
  {
    title: 'Corte clássico',
    description: 'Linhas precisas, finalização impecável e consultoria de estilo em cada visita.',
    icon: '✂️',
  },
  {
    title: 'Barba assinatura',
    description: 'Desenho personalizado, toalha quente, óleos essenciais e acabamento com navalha.',
    icon: '🪒',
  },
  {
    title: 'Coloração criativa',
    description: 'Cobertura de fios brancos, pigmentação criativa e técnicas de luzes discretas.',
    icon: '🎨',
  },
  {
    title: 'Tratamentos e spa',
    description: 'Cronograma de hidratação, detox capilar e massagens relaxantes para renovar o visual.',
    icon: '💆',
  },
]

const ServicesSection: FC = () => (
  <section id="servicos" className="scroll-mt-24 bg-night/90 py-24">
    <div className="mx-auto flex max-w-6xl flex-col gap-16 px-6">
      <SectionTitle
        subtitle="Serviços"
        title="Especialidades que traduzem sua identidade"
        description="Planos sob medida para executivos, criadores, gamers e quem quer transformar o autocuidado em ritual."
      />
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {services.map((service) => (
          <div
            key={service.title}
            className="group rounded-3xl border border-brand-gold/20 bg-night/70 p-8 text-left transition duration-300 hover:-translate-y-1 hover:border-brand-gold/60 hover:bg-night/60"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-gold/20 text-2xl text-night">
              <span aria-hidden="true">{service.icon}</span>
            </div>
            <h3 className="mt-6 font-display text-xl font-semibold text-white">{service.title}</h3>
            <p className="mt-3 text-sm text-brand-sand/80">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
)

export default ServicesSection
