import type { FC } from 'react'

import SectionTitle from './SectionTitle'

const galleryItems = [
  {
    id: 0,
    src: 'https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&w=880&q=80',
    alt: 'Barbeiro aparando a barba de um cliente com toalha aquecida',
  },
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=880&q=80',
    alt: 'Profissional finalizando o corte de cabelo de um cliente sorridente',
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1490111718993-d98654ce6cf7?auto=format&fit=crop&w=880&q=80',
    alt: 'Cliente recebendo tratamento com espuma durante o barbear',
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1573497491208-6b1acb260507?auto=format&fit=crop&w=880&q=80',
    alt: 'Detalhe de máquina de barbear criando degradê moderno',
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=880&q=80',
    alt: 'Barbeiro estilizando cabelo com secador e escova',
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1500835556837-99ac94a94552?auto=format&fit=crop&w=880&q=80',
    alt: 'Cliente apreciando o resultado do corte em frente ao espelho',
  },
]

const GallerySection: FC = () => (
  <section id="galeria" className="scroll-mt-24 bg-charcoal-soft py-24">
    <div className="mx-auto flex max-w-6xl flex-col gap-16 px-6">
      <SectionTitle
        subtitle="Portfólio"
        title="Um olhar sobre nossos rituais"
        description="Imagens conceituais para apresentar o clima sofisticado do espaço. Personalize com fotos reais da sua barbearia quando estiver pronto."
      />
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {galleryItems.map((item) => (
          <figure
            key={item.id}
            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-black/40 shadow-lg"
          >
            <img
              src={item.src}
              alt={item.alt}
              className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <figcaption className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-black/70 px-5 py-3 text-xs uppercase tracking-[0.3em] text-neutral-200">
              <span>Estúdio criativo</span>
              <span className="text-brand-gold">Arabella</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  </section>
)

export default GallerySection
