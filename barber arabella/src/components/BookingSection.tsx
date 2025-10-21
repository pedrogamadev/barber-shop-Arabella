import { useState, type ChangeEvent, type FC, type FormEvent } from 'react'

import SectionTitle from './SectionTitle'

interface BookingFormData {
  name: string
  phone: string
  service: string
  datetime: string
  notes: string
}

const initialFormState: BookingFormData = {
  name: '',
  phone: '',
  service: 'Corte clássico',
  datetime: '',
  notes: '',
}

const services = ['Corte clássico', 'Barba assinatura', 'Color design', 'Combo experience']

const BookingSection: FC = () => {
  const [formData, setFormData] = useState<BookingFormData>(initialFormState)

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target
    setFormData((previous) => ({ ...previous, [name]: value }))
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const message = `Agendamento solicitado!\n\nNome: ${formData.name}\nTelefone: ${formData.phone}\nServiço: ${formData.service}\nData/Hora: ${formData.datetime}\nObservações: ${formData.notes || '—'}`
    window.alert(message)
    setFormData(initialFormState)
  }

  return (
    <section id="agendamento" className="scroll-mt-24 bg-night py-24">
      <div className="mx-auto grid max-w-6xl gap-16 px-6 lg:grid-cols-[0.9fr_1.1fr]">
        <SectionTitle
          subtitle="Agendamento"
          title="Reserve seu horário em segundos"
          align="left"
          description="Preencha os dados e finalize clicando em reservar. Nesta fase do protótipo, os dados são exibidos em um alerta para simular o fluxo."
        />
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-6 rounded-3xl border border-brand-gold/30 bg-charcoal-soft/80 p-8 shadow-lg"
        >
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <label className="flex flex-col gap-2 text-sm">
              <span className="uppercase tracking-[0.25em] text-neutral-300">Nome completo</span>
              <input
                required
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Seu nome"
                className="rounded-xl border border-white/10 bg-black/60 px-4 py-3 text-sm text-white outline-none transition focus:border-brand-gold/70 focus:ring-2 focus:ring-brand-gold/40"
              />
            </label>
            <label className="flex flex-col gap-2 text-sm">
              <span className="uppercase tracking-[0.25em] text-neutral-300">Telefone</span>
              <input
                required
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="(11) 99999-9999"
                className="rounded-xl border border-white/10 bg-black/60 px-4 py-3 text-sm text-white outline-none transition focus:border-brand-gold/70 focus:ring-2 focus:ring-brand-gold/40"
              />
            </label>
          </div>
          <label className="flex flex-col gap-2 text-sm">
            <span className="uppercase tracking-[0.25em] text-neutral-300">Serviço desejado</span>
            <select
              required
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="rounded-xl border border-white/10 bg-black/60 px-4 py-3 text-sm text-white outline-none transition focus:border-brand-gold/70 focus:ring-2 focus:ring-brand-gold/40"
            >
              {services.map((serviceOption) => (
                <option key={serviceOption} value={serviceOption}>
                  {serviceOption}
                </option>
              ))}
            </select>
          </label>
          <label className="flex flex-col gap-2 text-sm">
            <span className="uppercase tracking-[0.25em] text-neutral-300">Data e horário</span>
            <input
              required
              type="datetime-local"
              name="datetime"
              value={formData.datetime}
              onChange={handleChange}
              className="rounded-xl border border-white/10 bg-black/60 px-4 py-3 text-sm text-white outline-none transition focus:border-brand-gold/70 focus:ring-2 focus:ring-brand-gold/40"
            />
          </label>
          <label className="flex flex-col gap-2 text-sm">
            <span className="uppercase tracking-[0.25em] text-neutral-300">Observações</span>
            <textarea
              name="notes"
              value={formData.notes}
              onChange={handleChange}
              rows={4}
              placeholder="Preferências, referências ou necessidades específicas"
              className="rounded-xl border border-white/10 bg-black/60 px-4 py-3 text-sm text-white outline-none transition focus:border-brand-gold/70 focus:ring-2 focus:ring-brand-gold/40"
            />
          </label>
          <button
            type="submit"
            className="mt-4 inline-flex items-center justify-center rounded-full bg-brand-gold px-8 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-black transition hover:bg-brand-gold/90"
          >
            Enviar agendamento
          </button>
        </form>
      </div>
    </section>
  )
}

export default BookingSection
