export default function PageHero({ eyebrow, title, description, children }) {
  return (
    <section className="no-reveal relative overflow-hidden bg-primary-dark text-white">
      <div className="absolute inset-0 bg-[url('/bg.png')] bg-cover bg-center" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#18362B]/95 via-[#234E3E]/88 to-[#3B7157]/70" />
      <div className="absolute inset-0 opacity-25 bg-[radial-gradient(circle_at_80%_10%,_#E5A84B,_transparent_35%),radial-gradient(circle_at_20%_80%,_#3B7157,_transparent_40%)]" />
      <div className="relative container-shell py-20 sm:py-24 lg:py-32">
        {eyebrow && (
          <p className="inline-flex items-center gap-3 text-accent font-semibold tracking-[0.24em] uppercase text-xs sm:text-sm mb-5 animate-fade-up">
            <span className="w-10 h-px bg-accent/70" />
            {eyebrow}
          </p>
        )}
        <h1
          className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight max-w-4xl leading-[1.08] animate-fade-up"
          style={{ animationDelay: '80ms' }}
        >
          {title}
        </h1>
        {description && (
          <p
            className="mt-6 text-base sm:text-lg text-white/85 max-w-2xl leading-8 animate-fade-up"
            style={{ animationDelay: '160ms' }}
          >
            {description}
          </p>
        )}
        {children && (
          <div className="mt-8 animate-fade-up" style={{ animationDelay: '240ms' }}>
            {children}
          </div>
        )}
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  )
}
