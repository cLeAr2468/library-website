import { AlertTriangle, BookCheck, ClipboardList, RotateCcw } from 'lucide-react'
import PageHero from '../components/PageHero'
import SectionHeading from '../components/SectionHeading'

const steps = [
  { icon: ClipboardList, title: 'Check Availability', text: 'Search for the book through OPAC or ask library staff for assistance.' },
  { icon: BookCheck, title: 'Borrow the Book', text: 'Present your valid ID and have the material recorded by library personnel.' },
  { icon: RotateCcw, title: 'Return on Time', text: 'Return the book on or before the due date to keep your account in good standing.' },
]

export default function BookBorrowing() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Book Borrowing & Returning"
        description="A simple guide to borrowing and returning library materials at the NWSSU San Jorge Campus Library."
      />

      <section className="section-padding bg-background">
        <div className="container-shell">
          <SectionHeading
            align="center"
            eyebrow="How It Works"
            title="Borrowing made simple"
            description="Follow these easy steps to access the materials you need for your studies and research."
          />
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <article key={step.title} className="surface-card-hover p-7 relative">
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-primary text-white flex items-center justify-center font-display text-lg font-semibold">
                      {index + 1}
                    </div>
                    <Icon className="text-accent" size={24} strokeWidth={1.75} />
                  </div>
                  <h2 className="font-display text-xl font-semibold text-text">{step.title}</h2>
                  <p className="mt-3 text-sm text-muted leading-7">{step.text}</p>
                </article>
              )
            })}
          </div>

          <div className="mt-10 grid md:grid-cols-2 gap-6">
            <div className="surface-card p-7 sm:p-8">
              <h2 className="font-display text-2xl font-semibold text-text">Borrowing Guidelines</h2>
              <ul className="mt-5 space-y-3">
                {[
                  'Present a valid school ID or library account.',
                  'Borrowing periods and limits may vary by user type and material.',
                  'Reference books and special collections may be for room use only.',
                  'Inspect materials before borrowing and report existing damage.',
                ].map((item) => (
                  <li key={item} className="flex gap-3 text-sm text-muted leading-7">
                    <span className="mt-[11px] w-1.5 h-1.5 rounded-full bg-secondary shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-[1.25rem] bg-accent/10 border border-accent/20 p-7 sm:p-8">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-accent/20 text-accent flex items-center justify-center">
                  <AlertTriangle size={20} />
                </div>
                <h2 className="font-display text-2xl font-semibold text-text">Reminders</h2>
              </div>
              <ul className="space-y-3">
                {[
                  'Return materials on time to avoid overdue penalties.',
                  'Lost or damaged materials must be reported immediately.',
                  'Borrowing privileges may be suspended for unresolved account issues.',
                ].map((item) => (
                  <li key={item} className="flex gap-3 text-sm text-text/80 leading-7">
                    <span className="mt-[11px] w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
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
