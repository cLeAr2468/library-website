import { ArrowUpRight, Building2, Globe, Handshake } from 'lucide-react'

const linkages = [
  {
    icon: Building2,
    title: 'Academic Institutions',
    description: 'Partnerships with schools, colleges, and universities for resource sharing, research collaboration, and academic support.',
  },
  {
    icon: Globe,
    title: 'Online Resource Providers',
    description: 'Access to digital databases, e-journals, and online platforms that expand the library’s research capabilities.',
  },
  {
    icon: Handshake,
    title: 'Community & Institutional Partners',
    description: 'Collaboration with local organizations and agencies to strengthen information access and community learning initiatives.',
  },
]

export default function Linkages() {
  return (
    <>
      {/* Hero */}
      <section className="no-reveal relative overflow-hidden bg-[#F3EFE6]">
        <div className="absolute right-0 top-0 h-full w-1/2 hidden lg:block">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(35,78,62,0.08),transparent_55%)]" />
          <svg className="absolute inset-0 w-full h-full text-primary/[0.07]" viewBox="0 0 600 600" fill="none" aria-hidden="true">
            <circle cx="300" cy="300" r="120" stroke="currentColor" strokeWidth="1.5" />
            <circle cx="300" cy="300" r="220" stroke="currentColor" strokeWidth="1.5" />
            <circle cx="300" cy="300" r="60" stroke="currentColor" strokeWidth="1.5" />
            <line x1="300" y1="80" x2="300" y2="520" stroke="currentColor" strokeWidth="1.5" />
            <line x1="80" y1="300" x2="520" y2="300" stroke="currentColor" strokeWidth="1.5" />
            <circle cx="300" cy="80" r="7" fill="#E5A84B" />
            <circle cx="520" cy="300" r="7" fill="#234E3E" />
            <circle cx="300" cy="520" r="7" fill="#3B7157" />
          </svg>
        </div>
        <div className="relative container-shell py-8 sm:py-10 lg:py-14">
          <div className="max-w-2xl">
            <p className="eyebrow mb-6 animate-fade-up">Our Network</p>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight leading-[0.95] text-primary-dark animate-fade-up" style={{ animationDelay: '80ms' }}>
              Linkages
              <span className="block text-primary/35">&amp; Partnerships</span>
            </h1>
            <p className="mt-7 max-w-xl text-muted leading-8 text-base sm:text-lg animate-fade-up" style={{ animationDelay: '160ms' }}>
              Partnerships that enhance access to information, research, and learning opportunities for the NWSSU-SJ community.
            </p>
          </div>
        </div>
      </section>

      {/* Partnerships */}
      <section className="section-padding bg-background">
        <div className="container-shell">
          <div className="max-w-2xl mb-12">
            <p className="eyebrow mb-4">Collaboration</p>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-text leading-tight">Stronger through shared purpose.</h2>
            <p className="mt-4 text-muted leading-8">We build meaningful partnerships to broaden resources and opportunities for our students and faculty.</p>
          </div>

          {/*
          <div className="space-y-4">
            {linkages.map((item, index) => {
              const Icon = item.icon
              return (
                <article key={item.title} className="group bg-white border border-border rounded-2xl p-7 sm:p-8 lg:p-10 flex flex-col sm:flex-row gap-6 sm:gap-8 hover:border-secondary/25 hover:shadow-[0_20px_40px_-20px_rgba(35,78,62,0.12)] transition-all duration-300">
                  <div className="flex sm:flex-col items-center sm:items-start gap-4 sm:gap-6 sm:w-28 shrink-0">
                    <span className="font-display text-3xl text-primary/15 leading-none">{String(index + 1).padStart(2, '0')}</span>
                    <div className="w-12 h-12 rounded-2xl bg-primary/[0.06] text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                      <Icon size={22} strokeWidth={1.75} />
                    </div>
                  </div>
                  <div className="flex-1 pt-1">
                    <h3 className="font-display text-2xl sm:text-3xl font-semibold text-text leading-tight">{item.title}</h3>
                    <p className="mt-3 text-muted leading-8 max-w-3xl">{item.description}</p>
                  </div>
                </article>
              )
            })}
          </div>
          */}

          <div className="bg-white border border-border rounded-2xl p-12 sm:p-16 text-center">
            <p className="font-display text-3xl sm:text-4xl font-semibold text-primary-dark">Coming Soon</p>
            <p className="mt-3 text-muted">Collaboration details will be available soon.</p>
          </div>

          <div className="mt-12 rounded-[2rem] bg-primary text-white p-8 sm:p-10 lg:p-12 flex flex-col lg:flex-row lg:items-center gap-8 justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-72 h-72 bg-accent/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
            <div className="relative max-w-2xl">
              <p className="eyebrow text-accent before:bg-accent/70 mb-4">Work with us</p>
              <h2 className="font-display text-3xl sm:text-4xl font-semibold leading-tight">Partner with NWSSU-SJ Library</h2>
              <p className="mt-4 text-white/75 leading-8">
                NWSSU-SJ Library welcomes partnerships that support academic excellence, research development, and resource sharing.
              </p>
            </div>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=nwssulibrarysjcampus@gmail.com&su=Inquiry%20from%20NWSSU-SJ%20Library%20Website"
              target="_blank"
              rel="noreferrer"
              className="relative inline-flex items-center gap-2 bg-accent text-primary-dark px-7 py-4 rounded-full font-semibold hover:bg-[#F0B85C] shrink-0"
            >
              Contact Library <ArrowUpRight size={17} />
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
