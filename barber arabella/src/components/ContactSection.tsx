import type { FC } from 'react'

import SectionTitle from './SectionTitle'

const ContactSection: FC = () => (
  <section id="contato" className="scroll-mt-24 bg-charcoal-soft py-24">
    <div className="mx-auto grid max-w-6xl gap-16 px-6 lg:grid-cols-[1.1fr_0.9fr]">
      <SectionTitle
        subtitle="Contato"
        title="Venha viver o ritual Arabella"
        align="left"
        description="Estamos localizados em uma área nobre da cidade, com fácil acesso e estacionamento conveniado."
      />
      <div className="grid grid-cols-1 gap-8 text-sm text-neutral-200 sm:grid-cols-2">
        <div className="space-y-4 rounded-3xl border border-white/10 bg-black/40 p-8">
          <h3 className="font-display text-lg font-semibold text-white">Informações</h3>
          <p className="text-neutral-300">
            Rua da Inovação, 404 &bull; Vila Digital &bull; São Paulo/SP<br />
            Atendimento de terça a sábado, das 10h às 21h.
          </p>
          <ul className="space-y-3 text-sm">
            <li>
              <span className="text-neutral-400">Telefone</span>
              <br />
              <a href="tel:+551199999999" className="text-white transition hover:text-brand-gold">
                +55 (11) 99999-9999
              </a>
            </li>
            <li>
              <span className="text-neutral-400">E-mail</span>
              <br />
              <a href="mailto:contato@asarabella.dev" className="text-white transition hover:text-brand-gold">
                contato@asarabella.dev
              </a>
            </li>
          </ul>
        </div>
        <div className="space-y-4 rounded-3xl border border-white/10 bg-black/40 p-8">
          <h3 className="font-display text-lg font-semibold text-white">Conecte-se</h3>
          <p className="text-neutral-300">
            Acompanhe bastidores, playlists e eventos exclusivos nas nossas redes.
          </p>
          <div className="flex flex-wrap gap-3">
            {['Instagram', 'TikTok', 'YouTube', 'Spotify'].map((network) => (
              <a
                key={network}
                href="#"
                className="rounded-full border border-white/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white transition hover:border-brand-gold hover:text-brand-gold"
              >
                {network}
              </a>
            ))}
          </div>
          <div className="rounded-2xl border border-white/10 bg-black/60 p-4 text-xs uppercase tracking-[0.25em] text-neutral-400">
            <p>Mapa em breve • Integre com o Google Maps ou MapBox na versão final.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default ContactSection
