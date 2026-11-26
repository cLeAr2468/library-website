import { ClipboardList, Clock, FileSearch, ScanLine, ShieldCheck } from 'lucide-react'

const processSteps = [
  {
    icon: FileSearch,
    title: 'Search the OPAC',
    description: 'Search the OPAC for the book title you want to request.',
  },
  {
    icon: ClipboardList,
    title: 'Request through Library E-ASK',
    description: 'Request for book scanning through Library E-ASK.',
    link: {
      label: 'Open Library E-ASK Form',
      href: 'https://forms.gle/dHsVyRaKKAcsw8yg8',
    },
  },
  {
    icon: ScanLine,
    title: 'Notify the Library',
    description: 'Notify the library for your request through the Facebook Page.',
    link: {
      label: 'Visit Facebook Page',
      href: 'https://www.facebook.com/NwSSU.sjclibrary',
    },
  },
  {
    icon: Clock,
    title: 'Processing Time',
    description: 'Requests will be processed within 3-5 working days.',
  },
]

const scanningPolicy = [
  'For books (only 1 chapter is allowed to be scanned)',
  'For journals & magazine (only 1 article is allowed to be scanned)',
  'For Thesis & dissertation (only title page & introduction is allowed to be scanned)',
]

export default function DigitalResources() {
  return (
    <>
      {/* Hero */}
      <section className="no-reveal bg-primary-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(229,168,75,0.16),transparent_30%),radial-gradient(circle_at_10%_80%,rgba(59,113,87,0.25),transparent_35%)]" />
        <div className="relative container-shell py-8 sm:py-10 lg:py-14">
          <div className="grid lg:grid-cols-[1fr_420px] gap-10 lg:gap-14 items-center">
            <div className="max-w-3xl">
              <p className="eyebrow text-accent before:bg-accent/70 mb-6 animate-fade-up">Library Services</p>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.05] animate-fade-up" style={{ animationDelay: '80ms' }}>
                Scanning
                <span className="block text-white/45">Service</span>
              </h1>
              <p className="mt-6 max-w-2xl text-white/75 leading-8 text-base sm:text-lg animate-fade-up" style={{ animationDelay: '160ms' }}>
                Request scanned materials from the library through a simple process, with clear policies to support responsible use of resources.
              </p>
            </div>
            <div className="relative hidden lg:block animate-fade-up" style={{ animationDelay: '240ms' }}>
              <div className="relative rounded-[1.75rem] overflow-hidden border border-white/10 shadow-[0_24px_60px_-20px_rgba(0,0,0,0.35)] bg-white/[0.06] backdrop-blur-sm">
                <img
                  src="/illustrations/documents.svg"
                  alt="Illustration of scanning and document services"
                  className="w-full h-[360px] object-contain p-6"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-accent text-primary-dark rounded-xl px-4 py-3 shadow-lg">
                <p className="text-xs font-bold tracking-[0.14em] uppercase">3-5 Working Days</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process + Policy */}
      <section className="section-padding bg-background">
        <div className="container-shell">
          <div className="grid lg:grid-cols-[1fr_380px] gap-8 lg:gap-10 items-start">
            <div>
              <p className="eyebrow mb-4">Process</p>
              <h2 className="font-display text-3xl sm:text-4xl font-semibold text-text leading-tight mb-10">How to request a scanning service.</h2>

              <div className="grid sm:grid-cols-2 gap-5">
                {processSteps.map((item, index) => {
                  const Icon = item.icon
                  return (
                    <article key={item.title} className="bg-white border border-border rounded-2xl p-6 sm:p-7 hover:border-secondary/25 transition-colors">
                      <div className="flex items-center justify-between mb-5">
                        <div className="w-12 h-12 rounded-xl bg-primary/[0.07] text-primary flex items-center justify-center">
                          <Icon size={23} strokeWidth={1.75} />
                        </div>
                        <span className="font-display text-2xl text-primary/20">{String(index + 1).padStart(2, '0')}</span>
                      </div>
                      <h3 className="font-display text-xl font-semibold text-text">{item.title}</h3>
                      <p className="mt-2 text-sm text-muted leading-7">{item.description}</p>
                      {item.link ? (
                        <a
                          href={item.link.href}
                          target="_blank"
                          rel="noreferrer"
                          className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-secondary"
                        >
                          {item.link.label}
                        </a>
                      ) : null}
                    </article>
                  )
                })}
              </div>
            </div>

            <aside className="lg:sticky lg:top-28">
              <div className="bg-white border border-border rounded-2xl p-7 sm:p-8">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-accent/15 text-primary flex items-center justify-center">
                    <ShieldCheck size={20} />
                  </div>
                  <p className="text-xs font-bold tracking-[0.2em] uppercase text-secondary">Scanning Policy</p>
                </div>
                <h2 className="font-display text-2xl font-semibold text-text">Before you request</h2>
                <ul className="mt-6 space-y-5">
                  {scanningPolicy.map((item, i) => (
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
                  <span className="font-semibold text-primary">Note:</span> Requests will be processed within 3-5 working days.
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  )
}