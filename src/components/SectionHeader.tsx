type SectionHeaderProps = {
  title: string
}

export default function SectionHeader({ title }: SectionHeaderProps) {
  return (
    <div className="section__header">
      <span className="section__ornament" aria-hidden="true">✦</span>
      <h2 className="section__title">{title}</h2>
      <span className="section__line" aria-hidden="true" />
    </div>
  )
}
