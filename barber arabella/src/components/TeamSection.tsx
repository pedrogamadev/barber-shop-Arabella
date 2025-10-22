import type { FC } from 'react'

import SectionTitle from './SectionTitle'

const teamMembers = [
  {
    name: 'Arthur Nogueira',
    role: 'Master Barber',
    bio: 'Especialista em cortes estruturados, transições degradê e tendências internacionais.',
    image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=640&q=80',
  },
  {
    name: 'Sofia Martins',
    role: 'Stylist & Grooming Coach',
    bio: 'Cuida da experiência do cliente com tratamentos spa, colorações e consultoria de imagem.',
    image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=640&q=80',
  },
  {
    name: 'Henrique Dias',
    role: 'Beard Architect',
    bio: 'Designer de barbas e bigodes com técnicas de visagismo e modelagem personalizada.',
    image: 'https://images.unsplash.com/photo-1525182008055-f88b95ff7980?auto=format&fit=crop&w=640&q=80',
  },
]

const TeamSection: FC = () => (
  <section id="equipe" className="scroll-mt-24 bg-night py-24">
    <div className="mx-auto flex max-w-6xl flex-col gap-16 px-6">
      <SectionTitle
        subtitle="Equipe"
        title="Profissionais que entendem a sua vibe"
        description="Nosso squad reúne experts que viajam o mundo em busca de técnicas, produtos e tendências que traduzimos para o seu dia a dia."
      />
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {teamMembers.map((member) => (
          <article
            key={member.name}
            className="group flex h-full flex-col items-center gap-5 rounded-3xl border border-white/10 bg-white/5 p-8 text-center transition duration-300 hover:-translate-y-1 hover:border-brand-gold/70 hover:bg-brand-gold/10"
          >
            <div className="relative h-32 w-32 overflow-hidden rounded-full border border-brand-gold/40 bg-black/70 shadow-lg">
              <img
                src={member.image}
                alt={`Retrato profissional de ${member.name}`}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="font-display text-xl font-semibold text-white">{member.name}</h3>
              <span className="text-sm uppercase tracking-[0.25em] text-brand-gold">{member.role}</span>
              <p className="text-sm text-neutral-300">{member.bio}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
)

export default TeamSection
