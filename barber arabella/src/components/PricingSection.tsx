import type { FC } from 'react'

import SectionTitle from './SectionTitle'

interface PricingItem {
  title: string
  price: string
  description: string
  features: string[]
  highlight?: boolean
}

const pricing: PricingItem[] = [
  {
    title: 'Corte Clássico Premium',
    price: 'R$ 95',
    description: 'Corte completo com ritual de finalização e styling.',
    features: ['Consultoria rápida de imagem', 'Finalização com produtos premium', 'Bebida cortesia'],
  },
  {
    title: 'Barba de Assinatura',
    price: 'R$ 75',
    description: 'Barba modelada com navalha quente e óleos essenciais.',
    features: ['Toalha aromática', 'Hidratação nutritiva', 'Linha completa Arabella Oils'],
  },
  {
    title: 'Combo Experiência Arabella',
    price: 'R$ 189',
    description: 'Corte + barba + detox facial com tempo estendido no lounge.',
    features: ['Massagem craniana relaxante', 'Drink autoral', 'Acesso à barbearia smart lounge'],
    highlight: true,
  },
]

const PricingSection: FC = () => (
  <section id="precos" className="scroll-mt-24 bg-charcoal-soft/80 py-24">
    <div className="mx-auto flex max-w-6xl flex-col gap-16 px-6">
      <SectionTitle
        subtitle="Investimento"
        title="Planos transparentes para personalizar sua experiência"
        description="Valores base para apresentação. Ajuste os pacotes conforme a estratégia da sua barbearia."
      />
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {pricing.map((item) => (
          <article
            key={item.title}
            className={`flex h-full flex-col gap-6 rounded-3xl border bg-night/70 p-8 text-left transition duration-300 ${
              item.highlight
                ? 'border-brand-gold/80 bg-brand-gold/20 text-night shadow-glow'
                : 'border-brand-gold/20 hover:-translate-y-1 hover:border-brand-gold/60 hover:bg-night/60'
            }`}
          >
            <div>
              <h3 className={`font-display text-2xl font-semibold ${item.highlight ? 'text-night' : 'text-white'}`}>{item.title}</h3>
              <p className={`mt-2 text-sm ${item.highlight ? 'text-night/80' : 'text-brand-sand/80'}`}>{item.description}</p>
            </div>
            <div>
              <span className={`text-3xl font-semibold ${item.highlight ? 'text-night' : 'text-brand-gold'}`}>{item.price}</span>
              <span className={`ml-2 text-xs uppercase tracking-[0.3em] ${item.highlight ? 'text-night/70' : 'text-brand-sand/70'}`}>
                por sessão
              </span>
            </div>
            <ul className={`space-y-3 text-sm ${item.highlight ? 'text-night/80' : 'text-brand-sand/80'}`}>
              {item.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-brand-gold/70" aria-hidden="true" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <a
              href="#contato"
              className={`mt-auto inline-flex items-center justify-center rounded-full border px-6 py-2 text-xs font-semibold uppercase tracking-[0.3em] transition ${
                item.highlight
                  ? 'border-transparent bg-night text-brand-gold hover:bg-night/90'
                  : 'border-brand-gold/40 text-brand-gold hover:border-brand-gold hover:bg-night/60 hover:text-white'
              }`}
            >
              Fale com a equipe
            </a>
          </article>
        ))}
      </div>
    </div>
  </section>
)

export default PricingSection
