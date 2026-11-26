import { Clock, Copy, FileText, Printer } from 'lucide-react'

const services = [
  {
    icon: Printer,
    title: 'Printing Services',
    description: 'Print academic documents, assignments, and research materials with assistance from library staff.',
  },
  {
    icon: Copy,
    title: 'Photocopying',
    description: 'Photocopy permitted library materials and academic documents according to library guidelines.',
  },
  {
    icon: FileText,
    title: 'Document Assistance',
    description: 'Get help preparing files for printing or copying, including basic formatting guidance.',
  },
  {
    icon: Clock,
    title: 'Service Hours',
    description: 'Printing and photocopying services are available during regular LRC service hours.',
  },
]

const guidelines = [
  'Printing and photocopying requests are processed during posted service hours.',
  'Users must comply with copyright and intellectual property policies.',
  'Fees, if applicable, are subject to library or institutional guidelines.',
  'Please prepare files and materials in advance to avoid delays.',
]

export default function DigitalResources() {
  return (
    <>
      {/* Hero */}
      <section className="no-reveal bg-primary-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(229,168,75,0.16),transparent_30%),radial-gradient(circle_at_10%_80%,rgba(59,113,87,0.25),transparent_35%)]" />
        <div className="relative container-shell py-20 sm:py-24 lg:py-28">
          <div className="grid lg:grid-cols-[1fr_420px] gap-10 lg:gap-14 items-center">
            <div className="max-w-3xl">
              <p className="eyebrow text-accent before:bg-accent/70 mb-6 animate-fade-up">Library Services</p>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.05] animate-fade-up" style={{ animationDelay: '80ms' }}>
                Printing &amp;
                <span className="block text-white/45">Photocopying</span>
              </h1>
              <p className="mt-6 max-w-2xl text-white/75 leading-8 text-base sm:text-lg animate-fade-up" style={{ animationDelay: '160ms' }}>
                Convenient printing and photocopying services to support the academic needs of students and faculty.
              </p>
            </div>
            <div className="relative hidden lg:block animate-fade-up" style={{ animationDelay: '240ms' }}>
              <div className="relative rounded-[1.75rem] overflow-hidden border border-white/10 shadow-[0_24px_60px_-20px_rgba(0,0,0,0.35)] bg-white/[0.06] backdrop-blur-sm">
                <img
                  src="/illustrations/documents.svg"
                  alt="Illustration of printing and document services"
                  className="w-full h-[360px] object-contain p-6"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-accent text-primary-dark rounded-xl px-4 py-3 shadow-lg">
                <p className="text-xs font-bold tracking-[0.14em] uppercase">Fast &amp; Reliable</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services + Guidelines */}
      <section className="section-padding bg-background">
        <div className="container-shell">
          <div className="grid lg:grid-cols-[1fr_380px] gap-8 lg:gap-10 items-start">
            <div>
              <p className="eyebrow mb-4">Available Services</p>
              <h2 className="font-display text-3xl sm:text-4xl font-semibold text-text leading-tight mb-10">Practical support, right inside the library.</h2>

              <div className="grid sm:grid-cols-2 gap-5">
                {services.map((item) => {
                  const Icon = item.icon
                  return (
                    <article key={item.title} className="bg-white border border-border rounded-2xl p-6 sm:p-7 hover:border-secondary/25 transition-colors">
                      <div className="w-12 h-12 rounded-xl bg-primary/[0.07] text-primary flex items-center justify-center mb-5">
                        <Icon size={23} strokeWidth={1.75} />
                      </div>
                      <h3 className="font-display text-xl font-semibold text-text">{item.title}</h3>
                      <p className="mt-2 text-sm text-muted leading-7">{item.description}</p>
                    </article>
                  )
                })}
              </div>
            </div>

            <aside className="lg:sticky lg:top-28">
              <div className="bg-white border border-border rounded-2xl p-7 sm:p-8">
                <p className="text-xs font-bold tracking-[0.2em] uppercase text-secondary mb-3">Guidelines</p>
                <h2 className="font-display text-2xl font-semibold text-text">Before you request</h2>
                <ul className="mt-6 space-y-5">
                  {guidelines.map((item, i) => (
                    <li key={item} className="flex gap-4">
                      <span className="w-7 h-7 rounded-full bg-accent/15 text-primary text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                        {i + 1}
                      </span>
                      <span className="text-sm text-muted leading-7">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-4 p-5 rounded-2xl bg-[#F3EFE6] border border-accent/10">
                <p className="text-sm text-text/80 leading-7">
                  <span className="font-semibold text-primary">Need help?</span> Library staff can assist with basic printing and photocopying requests during service hours.
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  )
}
