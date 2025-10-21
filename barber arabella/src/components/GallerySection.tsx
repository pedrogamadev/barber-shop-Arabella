import type { FC } from 'react'

import mustacheIcon from '../assets/mustache.png'
import SectionTitle from './SectionTitle'

const galleryItems = Array.from({ length: 6 }, (_, index) => ({
  id: index,
  src: mustacheIcon,
}))

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
              alt="Placeholder de estilo da barbearia"
              className="h-64 w-full scale-100 object-contain p-12 transition duration-500 group-hover:scale-105"
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
