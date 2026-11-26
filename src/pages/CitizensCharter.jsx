import { ArrowRight, Clock, FileCheck2, Users } from 'lucide-react'

const services = [
  {
    service: 'Book Borrowing',
    client: 'Students, Faculty, Staff',
    requirements: 'Valid ID / Library Account',
    steps: ['Present ID', 'Request book', 'Librarian records loan', 'Receive book'],
    time: '3–5 minutes',
  },
  {
    service: 'Book Returning',
    client: 'Borrowers',
    requirements: 'Borrowed book/material',
    steps: ['Present book', 'Librarian checks condition', 'Loan cleared'],
    time: '2–3 minutes',
  },
  {
    service: 'Reference & Research Assistance',
    client: 'Students, Faculty, Researchers',
    requirements: 'Research query/topic',
    steps: ['Approach librarian', 'State information need', 'Receive assistance/resources'],
    time: '5–15 minutes',
  },
  {
    service: 'Printing & Photocopying',
    client: 'Library users',
    requirements: 'File/material to copy, payment',
    steps: ['Submit request/file', 'Staff processes', 'Pay fee', 'Receive output'],
    time: '3–10 minutes',
  },
]

export default function CitizensCharter() {
  return (
    <>
      {/* Hero */}
      <section className="no-reveal relative overflow-hidden bg-primary-dark text-white">
        <div className="absolute inset-0 opacity-[0.07]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)', backgroundSize: '56px 56px' }} />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-accent/30" />
        <div className="relative container-shell py-8 sm:py-10 lg:py-14">
          <p className="eyebrow text-accent before:bg-accent/70 mb-6 animate-fade-up">Service Standards</p>
          <div className="grid lg:grid-cols-[1fr_auto] gap-8 items-end">
            <div>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.05] animate-fade-up" style={{ animationDelay: '80ms' }}>
                Citizen's Charter
              </h1>
              <p className="mt-6 max-w-2xl text-white/75 leading-8 text-base sm:text-lg animate-fade-up" style={{ animationDelay: '160ms' }}>
                Clear service standards for the NWSSU-SJ community — what to prepare, what happens, and how long it takes.
              </p>
            </div>
            <div className="animate-fade-up hidden lg:block" style={{ animationDelay: '240ms' }}>
              <div className="relative rounded-2xl overflow-hidden w-[300px] border border-white/10 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.35)] bg-white/[0.06]">
                <img
                  src="/illustrations/service.svg"
                  alt="Illustration of library service process"
                  className="w-full h-48 object-contain p-3"
                />
                <div className="absolute bottom-3 left-3 right-3 flex gap-5 rounded-xl bg-primary-dark/80 backdrop-blur-sm border border-white/10 px-4 py-3">
                  <div>
                    <div className="font-display text-xl font-semibold text-accent">{services.length}</div>
                    <div className="text-[10px] tracking-wide uppercase text-white/70">Key services</div>
                  </div>
                  <div>
                    <div className="font-display text-xl font-semibold text-accent">Clear</div>
                    <div className="text-[10px] tracking-wide uppercase text-white/70">Process steps</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding bg-background">
        <div className="container-shell">
          <div className="max-w-2xl mb-12">
            <p className="eyebrow mb-4">LRC Service Charter</p>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-text leading-tight">Transparent, reliable service.</h2>
            <p className="mt-4 text-muted leading-8">Our Citizen's Charter outlines what to expect when using library services.</p>
          </div>

          <div className="space-y-6">
            {services.map((item, index) => (
              <article key={item.service} className="bg-white border border-border rounded-2xl overflow-hidden">
                <div className="p-6 sm:p-8 lg:p-10">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-5 mb-8">
                    <div className="flex items-start gap-4">
                      <span className="font-display text-3xl text-primary/20 leading-none pt-1">{String(index + 1).padStart(2, '0')}</span>
                      <div>
                        <h3 className="font-display text-2xl sm:text-3xl font-semibold text-text leading-tight">{item.service}</h3>
                        <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted">
                          <span className="inline-flex items-center gap-2"><Users size={15} className="text-secondary" /> {item.client}</span>
                          <span className="inline-flex items-center gap-2"><FileCheck2 size={15} className="text-secondary" /> {item.requirements}</span>
                        </div>
                      </div>
                    </div>
                    <span className="inline-flex items-center gap-2 self-start px-4 py-2 rounded-full bg-accent/10 text-primary-dark text-sm font-semibold shrink-0">
                      <Clock size={15} className="text-accent" /> {item.time}
                    </span>
                  </div>

                  <div>
                    <p className="text-xs font-bold tracking-[0.18em] uppercase text-muted mb-4">Process</p>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
                      {item.steps.map((step, stepIndex) => (
                        <div key={step} className="relative flex items-start gap-3 p-4 rounded-xl bg-background border border-border/70">
                          <span className="w-6 h-6 rounded-full bg-primary text-white text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                            {stepIndex + 1}
                          </span>
                          <span className="text-sm text-text leading-6">{step}</span>
                          {stepIndex < item.steps.length - 1 && (
                            <ArrowRight size={14} className="hidden lg:block absolute -right-[18px] top-1/2 -translate-y-1/2 text-border z-10" />
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <p className="mt-6 text-sm text-muted leading-7">
            * Processing times are estimates and may vary depending on request volume and the nature of the service.
          </p>
        </div>
      </section>
    </>
  )
}
