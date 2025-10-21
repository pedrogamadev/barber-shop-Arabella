import { useEffect, useState, type FC } from 'react'

import SectionTitle from './SectionTitle'

interface Testimonial {
  quote: string
  author: string
  role: string
}

interface Stat {
  label: string
  value: number
  suffix?: string
}

const testimonials: Testimonial[] = [
  {
    quote: '“A experiência é impecável. Atendimento pontual, ambientação futurista e um corte que sempre rende elogios.”',
    author: 'Lucas Andrade',
    role: 'Product Manager @ Neon Labs',
  },
  {
    quote: '“Encontrar uma barbearia que entende lifestyle tech é raro. A Arabella entrega cuidado e autenticidade.”',
    author: 'Thiago Moreira',
    role: 'Lead Developer @ Orbit Studios',
  },
  {
    quote: '“Agendar pelo site é simples, e o ritual premium vale cada minuto. Já virei cliente fiel.”',
    author: 'Gabriel Souza',
    role: 'Founder @ Indie Games Co.',
  },
]

const stats: Stat[] = [
  { label: 'Clientes atendidos', value: 1800, suffix: '+' },
  { label: 'Avaliação média', value: 4.9 },
  { label: 'Anos de expertise', value: 12 },
]

const AnimatedCounter: FC<Stat> = ({ value, suffix }) => {
  const [displayValue, setDisplayValue] = useState(0)

  useEffect(() => {
    let animationFrame: number
    const duration = 1200
    const start = performance.now()

    const animate = (currentTime: number) => {
      const progress = Math.min((currentTime - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setDisplayValue(Math.round(value * eased))
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)

    return () => {
      cancelAnimationFrame(animationFrame)
    }
  }, [value])

  return (
    <span className="text-4xl font-semibold text-brand-gold">
      {displayValue}
      {suffix ?? ''}
    </span>
  )
}

const TestimonialsSection: FC = () => (
  <section id="depoimentos" className="scroll-mt-24 bg-night py-24">
    <div className="mx-auto flex max-w-6xl flex-col gap-16 px-6">
      <SectionTitle
        subtitle="Social proof"
        title="Quem já viveu a experiência Arabella"
        description="Depoimentos fictícios para demonstrar como apresentar a credibilidade da marca e a confiança dos clientes."
      />
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <blockquote
              key={testimonial.author}
              className="flex h-full flex-col gap-6 rounded-3xl border border-white/10 bg-white/5 p-7 text-left transition duration-300 hover:-translate-y-1 hover:border-brand-gold/70 hover:bg-brand-gold/10"
            >
              <p className="text-sm leading-relaxed text-neutral-200">{testimonial.quote}</p>
              <div className="flex flex-col gap-1 text-xs uppercase tracking-[0.3em] text-brand-gold">
                <span>{testimonial.author}</span>
                <span className="text-neutral-400">{testimonial.role}</span>
              </div>
            </blockquote>
          ))}
        </div>
        <div className="flex flex-col justify-center gap-8 rounded-3xl border border-white/10 bg-charcoal-soft/80 p-10">
          <h3 className="font-display text-2xl font-semibold text-white">Nossa performance</h3>
          <p className="text-sm text-neutral-300">
            Resultados baseados em dados fictícios para ilustrar indicadores que reforçam a confiança do visitante no momento de
            agendar.
          </p>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col gap-2">
                <AnimatedCounter {...stat} />
                <span className="text-xs uppercase tracking-[0.25em] text-neutral-400">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default TestimonialsSection
