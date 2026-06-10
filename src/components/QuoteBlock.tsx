import type { ReactNode } from 'react'

type QuoteBlockProps = {
  children: ReactNode
  className?: string
}

export default function QuoteBlock({ children, className = '' }: QuoteBlockProps) {
  return (
    <blockquote className={`quote-block ${className}`.trim()}>
      {children}
    </blockquote>
  )
}
