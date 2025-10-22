import { useEffect, useRef, useState, type FC } from 'react'

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
    role: 'Gerente de Produto na Neon Labs',
  },
  {
    quote: '“Encontrar uma barbearia que entende lifestyle tech é raro. A Arabella entrega cuidado e autenticidade.”',
    author: 'Thiago Moreira',
    role: 'Líder de Desenvolvimento na Orbit Studios',
  },
  {
    quote: '“O atendimento digital facilita minha rotina, e o ritual premium vale cada minuto. Já virei cliente fiel.”',
    author: 'Gabriel Souza',
    role: 'Fundador na Indie Games Co.',
  },
]

const stats: Stat[] = [
  { label: 'Clientes atendidos', value: 1800, suffix: '+' },
  { label: 'Avaliação média', value: 4.9 },
  { label: 'Anos de expertise', value: 12 },
]

interface AnimatedCounterProps extends Stat {
  isActive: boolean
}

const AnimatedCounter: FC<AnimatedCounterProps> = ({ value, suffix, isActive }) => {
  const [displayValue, setDisplayValue] = useState(0)

  useEffect(() => {
    if (!isActive) {
      setDisplayValue(0)
      return
    }

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
  }, [isActive, value])

  return (
    <span className="text-4xl font-semibold text-brand-gold">
      {displayValue}
      {suffix ?? ''}
    </span>
  )
}

const TestimonialsSection: FC = () => {
  const sectionRef = useRef<HTMLElement | null>(null)
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    const element = sectionRef.current
    if (!element) {
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsActive(true)
            observer.disconnect()
          }
        })
      },
      { threshold: 0.3 }
    )

    observer.observe(element)

    return () => {
      observer.disconnect()
    }
  }, [])

  return (
    <section ref={sectionRef} id="depoimentos" className="scroll-mt-24 bg-night/90 py-24">
      <div className="mx-auto flex max-w-6xl flex-col gap-16 px-6">
        <SectionTitle
          subtitle="Prova social"
          title="Quem já viveu a experiência Arabella"
          description="Depoimentos fictícios para demonstrar como apresentar a credibilidade da marca e a confiança dos clientes."
        />
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <blockquote
                key={testimonial.author}
                className="flex h-full flex-col gap-6 rounded-3xl border border-brand-gold/20 bg-night/70 p-7 text-left transition duration-300 hover:-translate-y-1 hover:border-brand-gold/60 hover:bg-night/60"
              >
                <p className="text-sm leading-relaxed text-brand-sand/80">{testimonial.quote}</p>
                <div className="flex flex-col gap-1 text-xs uppercase tracking-[0.3em] text-brand-gold">
                  <span>{testimonial.author}</span>
                  <span className="text-brand-sand/70">{testimonial.role}</span>
                </div>
              </blockquote>
            ))}
          </div>
          <div className="flex flex-col justify-center gap-8 rounded-3xl border border-brand-gold/20 bg-charcoal-soft/80 p-10">
            <h3 className="font-display text-2xl font-semibold text-white">Nossa performance</h3>
            <p className="text-sm text-brand-sand/80">
              Resultados baseados em dados fictícios para ilustrar indicadores que reforçam a confiança do visitante na hora de
              escolher a barbearia.
            </p>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
              {stats.map((stat) => (
                <div key={stat.label} className="flex flex-col gap-2">
                  <AnimatedCounter {...stat} isActive={isActive} />
                  <span className="text-xs uppercase tracking-[0.25em] text-brand-sand/70">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection
