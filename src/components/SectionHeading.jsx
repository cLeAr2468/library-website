export default function SectionHeading({ eyebrow, title, description, align = 'left', light = false }) {
  const center = align === 'center'
  return (
    <div className={`${center ? 'text-center max-w-2xl mx-auto' : 'max-w-2xl'}`}>
      {eyebrow && (
        <p className={`eyebrow mb-4 ${center ? 'justify-center before:hidden after:content-[""] after:w-8 after:h-px after:bg-accent' : ''} ${light ? 'text-accent before:bg-accent/70 after:bg-accent/70' : ''}`}>
          {eyebrow}
        </p>
      )}
      <h2 className={`font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-semibold leading-[1.15] tracking-tight ${light ? 'text-white' : 'text-text'}`}>
        {title}
      </h2>
      {description && (
        <p className={`mt-4 text-base sm:text-lg leading-8 ${light ? 'text-white/75' : 'text-muted'}`}>
          {description}
        </p>
      )}
    </div>
  )
}
