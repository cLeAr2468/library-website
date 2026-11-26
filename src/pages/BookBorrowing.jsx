import { AlertTriangle, ArrowUpRight, BookCheck, ClipboardList, RotateCcw } from 'lucide-react'

const steps = [
  {
    icon: ClipboardList,
    title: 'Check Availability',
    text: 'Search for the book through OPAC or ask library staff for assistance.',
  },
  {
    icon: BookCheck,
    title: 'Borrow the Book',
    text: 'Present your valid ID and have the material recorded by library personnel.',
  },
  {
    icon: RotateCcw,
    title: 'Return on Time',
    text: 'Return the book on or before the due date to keep your account in good standing.',
  },
]

const guidelines = [
  'Present a valid school ID or library account.',
  'Borrowing periods and limits may vary by user type and material.',
  'Reference books and special collections may be for room use only.',
  'Inspect materials before borrowing and report existing damage.',
]

const reminders = [
  'Return materials on time to avoid overdue penalties.',
  'Lost or damaged materials must be reported immediately.',
  'Borrowing privileges may be suspended for unresolved account issues.',
]

export default function BookBorrowing() {
  return (
    <>
      {/* Hero */}
      <section className="no-reveal relative overflow-hidden bg-white border-b border-border">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(35,78,62,0.03)_0%,transparent_45%,rgba(229,168,75,0.08)_100%)]" />
        <div className="relative container-shell py-8 sm:py-10 lg:py-14">
          <div className="grid lg:grid-cols-[1fr_320px] gap-10 items-end">
            <div>
              <p className="eyebrow mb-6 animate-fade-up">Library Services</p>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.05] text-primary-dark animate-fade-up" style={{ animationDelay: '80ms' }}>
                Book Borrowing
                <span className="block text-primary/35">&amp; Returning</span>
              </h1>
              <p className="mt-6 max-w-2xl text-muted leading-8 text-base sm:text-lg animate-fade-up" style={{ animationDelay: '160ms' }}>
                A simple guide to borrowing and returning library materials at the NWSSU San Jorge Campus Library.
              </p>
            </div>
            <div className="animate-fade-up hidden lg:block" style={{ animationDelay: '240ms' }}>
              <div className="relative rounded-2xl overflow-hidden shadow-[0_20px_50px_-20px_rgba(35,78,62,0.12)] bg-[#F3EFE6] border border-border/60">
                <img
                  src="/illustrations/borrowing.svg"
                  alt="Illustration of book borrowing process"
                  className="w-full h-56 object-contain p-4"
                />
                <a
                  href="https://nwssu.librarika.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="absolute bottom-4 left-4 right-4 inline-flex items-center justify-between gap-4 p-4 rounded-xl bg-white/95 backdrop-blur text-text hover:bg-white transition-colors border border-border/60"
                >
                  <div>
                    <p className="text-sm font-semibold text-primary-dark">Check availability in OPAC</p>
                    <p className="text-xs text-muted mt-0.5">Search the catalog first</p>
                  </div>
                  <ArrowUpRight size={18} className="text-accent shrink-0" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="section-padding bg-background">
        <div className="container-shell">
          <div className="max-w-2xl mb-12">
            <p className="eyebrow mb-4">How It Works</p>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-text leading-tight">Borrowing made simple.</h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <article key={step.title} className="relative bg-white border border-border rounded-2xl p-7 sm:p-8">
                  <div className="flex items-center justify-between mb-8">
                    <span className="font-display text-5xl text-primary/[0.08] leading-none">{String(index + 1).padStart(2, '0')}</span>
                    <div className="w-11 h-11 rounded-xl bg-primary/[0.06] text-primary flex items-center justify-center">
                      <Icon size={22} strokeWidth={1.75} />
                    </div>
                  </div>
                  <h3 className="font-display text-2xl font-semibold text-text leading-snug">{step.title}</h3>
                  <p className="mt-3 text-sm text-muted leading-7">{step.text}</p>
                </article>
              )
            })}
          </div>

          <div className="mt-12 grid lg:grid-cols-[1.2fr_0.8fr] gap-6">
            <div className="bg-white border border-border rounded-2xl p-7 sm:p-8 lg:p-10">
              <p className="text-xs font-bold tracking-[0.2em] uppercase text-secondary mb-3">Borrowing Guidelines</p>
              <h2 className="font-display text-2xl sm:text-3xl font-semibold text-text">Before you borrow</h2>
              <ul className="mt-6 space-y-0 divide-y divide-border border-y border-border">
                {guidelines.map((item) => (
                  <li key={item} className="flex gap-4 py-4 text-sm text-muted leading-7">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-secondary shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl bg-[#F3EFE6] border border-accent/15 p-7 sm:p-8 lg:p-10">
              <div className="w-11 h-11 rounded-xl bg-accent/15 text-accent flex items-center justify-center mb-5">
                <AlertTriangle size={22} />
              </div>
              <p className="text-xs font-bold tracking-[0.2em] uppercase text-secondary mb-3">Reminders</p>
              <h2 className="font-display text-2xl sm:text-3xl font-semibold text-text">Keep your account in good standing</h2>
              <ul className="mt-6 space-y-4">
                {reminders.map((item) => (
                  <li key={item} className="flex gap-3 text-sm text-text/80 leading-7">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
