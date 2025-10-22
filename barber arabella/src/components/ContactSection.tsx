import type { FC } from 'react'

import SectionTitle from './SectionTitle'

const ContactSection: FC = () => (
  <section id="contato" className="scroll-mt-24 bg-charcoal-soft/80 py-24">
    <div className="mx-auto grid max-w-6xl gap-16 px-6 lg:grid-cols-[1.1fr_0.9fr]">
      <SectionTitle
        subtitle="Contato"
        title="Venha viver o ritual Arabella"
        align="left"
        description="Estamos localizados em uma área nobre da cidade, com fácil acesso e estacionamento conveniado."
      />
      <div className="grid grid-cols-1 gap-8 text-sm text-brand-sand/80 sm:grid-cols-2">
        <div className="space-y-4 rounded-3xl border border-brand-gold/20 bg-night/70 p-8">
          <h3 className="font-display text-lg font-semibold text-white">Informações</h3>
          <p className="text-brand-sand/80">
            Rua da Inovação, 404 &bull; Vila Digital &bull; São Paulo/SP<br />
            Atendimento de terça a sábado, das 10h às 21h.
          </p>
          <ul className="space-y-3 text-sm">
            <li>
              <span className="text-brand-sand/70">Telefone</span>
              <br />
              <a href="tel:+551199999999" className="text-white transition hover:text-brand-gold">
                +55 (11) 99999-9999
              </a>
            </li>
            <li>
              <span className="text-brand-sand/70">E-mail</span>
              <br />
              <a href="mailto:contato@asarabella.dev" className="text-white transition hover:text-brand-gold">
                contato@asarabella.dev
              </a>
            </li>
          </ul>
        </div>
        <div className="space-y-4 rounded-3xl border border-brand-gold/20 bg-night/70 p-8">
          <h3 className="font-display text-lg font-semibold text-white">Conecte-se</h3>
          <p className="text-brand-sand/80">
            Acompanhe bastidores, playlists e eventos exclusivos nas nossas redes.
          </p>
          <div className="flex flex-wrap gap-3">
            {['Instagram', 'TikTok', 'YouTube', 'Spotify'].map((network) => (
              <a
                key={network}
                href="#"
                className="rounded-full border border-brand-gold/30 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white transition hover:border-brand-gold hover:text-brand-gold"
              >
                {network}
              </a>
            ))}
          </div>
          <div className="overflow-hidden rounded-2xl border border-brand-gold/20 bg-night/80">
            <iframe
              title="Localização da As’ Arabella Barbearia"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3969.0837608645747!2d-35.18684062260683!3d-5.843818742454717!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7b2ffb3a3f9af63%3A0x4edb346e2eb5b31a!2sPinheiros%20-%20Via%20Costeira!5e0!3m2!1spt-BR!2sbr!4v1761134472699!5m2!1spt-BR!2sbr"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              className="h-60 w-full border-0 md:h-72"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default ContactSection
