import type { FC } from 'react'

import SectionTitle from './SectionTitle'

interface TeamMember {
  name: string
  role: string
  bio: string
  image: string
  specialties: string[]
  socials: { label: string; url: string }[]
}

const teamMembers: TeamMember[] = [
  {
    name: 'Arthur Nogueira',
    role: 'Barbeiro-chefe',
    bio: 'Especialista em cortes estruturados, transições degradê e tendências internacionais.',
    image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=640&q=80',
    specialties: ['Fades de alto padrão', 'Navalha quente', 'Consultoria masculina'],
    socials: [
      { label: 'Instagram', url: 'https://instagram.com/asarabella' },
      { label: 'LinkedIn', url: 'https://linkedin.com/company/asarabella' },
    ],
  },
  {
    name: 'Sofia Martins',
    role: 'Especialista em estilo',
    bio: 'Cuida da experiência do cliente com tratamentos spa, colorações e consultoria de imagem.',
    image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=640&q=80',
    specialties: ['Coloração masculina', 'Tratamentos spa', 'Imagem profissional'],
    socials: [
      { label: 'Instagram', url: 'https://instagram.com/asarabella' },
      { label: 'Pinterest', url: 'https://pinterest.com/asarabella' },
    ],
  },
  {
    name: 'Henrique Dias',
    role: 'Arquiteto de barbas',
    bio: 'Designer de barbas e bigodes com técnicas de visagismo e modelagem personalizada.',
    image: 'https://images.unsplash.com/photo-1525182008055-f88b95ff7980?auto=format&fit=crop&w=640&q=80',
    specialties: ['Design de barba', 'Produtos autorais', 'Mentoria de cuidado'],
    socials: [
      { label: 'Instagram', url: 'https://instagram.com/asarabella' },
      { label: 'YouTube', url: 'https://youtube.com/@asarabella' },
    ],
  },
]

const TeamSection: FC = () => (
  <section id="equipe" className="scroll-mt-24 bg-night/90 py-24">
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
            className="group flex h-full flex-col items-center gap-5 rounded-3xl border border-brand-gold/20 bg-night/70 p-8 text-center transition duration-300 hover:-translate-y-1 hover:border-brand-gold/60 hover:bg-night/60"
          >
            <div className="relative h-32 w-32 overflow-hidden rounded-full border border-brand-gold/50 bg-night/80 shadow-lg">
              <img
                src={member.image}
                alt={`Retrato profissional de ${member.name}`}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="font-display text-xl font-semibold text-white">{member.name}</h3>
              <span className="text-sm uppercase tracking-[0.25em] text-brand-gold">{member.role}</span>
              <p className="text-sm text-brand-sand/80">{member.bio}</p>
            </div>
            <ul className="flex flex-wrap justify-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-brand-sand/80">
              {member.specialties.map((specialty) => (
                <li
                  key={specialty}
                  className="rounded-full border border-brand-gold/30 bg-night/60 px-3 py-1"
                >
                  {specialty}
                </li>
              ))}
            </ul>
            <div className="mt-auto flex flex-wrap justify-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-brand-gold">
              {member.socials.map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${social.label} de ${member.name}`}
                  className="rounded-full border border-brand-gold/30 px-4 py-2 transition hover:border-brand-gold hover:bg-brand-gold hover:text-night"
                >
                  {social.label}
                </a>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
)

export default TeamSection
