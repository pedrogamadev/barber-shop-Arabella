import type { FC, ReactNode } from 'react'

interface SectionTitleProps {
  subtitle: string
  title: string
  description?: ReactNode
  align?: 'left' | 'center'
}

const alignmentClasses: Record<NonNullable<SectionTitleProps['align']>, string> = {
  center: 'items-center text-center mx-auto',
  left: 'items-start text-left',
}

export const SectionTitle: FC<SectionTitleProps> = ({ subtitle, title, description, align = 'center' }) => {
  const alignment = alignmentClasses[align]

  return (
    <div className={`flex w-full max-w-3xl flex-col gap-4 ${alignment}`}>
      <span className="text-xs font-semibold uppercase tracking-[0.35em] text-brand-gold">{subtitle}</span>
      <h2 className="font-display text-3xl font-semibold leading-tight text-white sm:text-4xl">{title}</h2>
      {description ? <p className="text-base text-neutral-300">{description}</p> : null}
    </div>
  )
}

export default SectionTitle
