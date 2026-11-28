import { ArrowUpRight, Clock, Search } from 'lucide-react'

// const collections = [
//   {
//     icon: GraduationCap,
//     title: 'Theses & Dissertations',
//     description: 'Academic works produced by NWSSU-SJ students and graduate researchers.',
//   },
//   {
//     icon: FileText,
//     title: 'Capstone Projects',
//     description: 'Student projects showcasing applied research and practical solutions.',
//   },
//   {
//     icon: Archive,
//     title: 'Institutional Research',
//     description: 'Research outputs and publications from the NWSSU academic community.',
//   },
// ]

export default function Repository() {
  return (
    <>
      {/* Hero */}
      <section className="no-reveal relative overflow-hidden bg-white border-b border-border">
        <div className="absolute -right-24 -top-24 w-[28rem] h-[28rem] rounded-full border border-primary/[0.07]" />
        <div className="absolute -right-8 -top-8 w-[18rem] h-[18rem] rounded-full border border-primary/[0.07]" />
        <div className="relative container-shell py-8 sm:py-10 lg:py-14">
          <div className="grid lg:grid-cols-[1fr_420px] gap-10 lg:gap-14 items-center">
            <div className="max-w-3xl">
              <p className="eyebrow mb-6 animate-fade-up">Online Resources</p>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.05] text-primary-dark animate-fade-up" style={{ animationDelay: '80ms' }}>
                Research
                <span className="block text-primary/35">Repository</span>
              </h1>
              <p className="mt-6 max-w-2xl text-muted leading-8 text-base sm:text-lg animate-fade-up" style={{ animationDelay: '160ms' }}>
                Discover the research output of the NWSSU community — theses, capstone projects, and institutional studies.
              </p>
            </div>
            <div className="relative hidden lg:block animate-fade-up" style={{ animationDelay: '240ms' }}>
              <div className="relative rounded-[1.75rem] overflow-hidden shadow-[0_24px_60px_-20px_rgba(35,78,62,0.12)] bg-[#F3EFE6] border border-border/60">
                <img
                  src="/illustrations/archive.svg"
                  alt="Illustration of research archive and collections"
                  className="w-full h-[360px] object-contain p-6"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white border border-border rounded-xl px-5 py-4 shadow-lg">
                <p className="font-display text-xl font-semibold text-primary">Scholarly Work</p>
                <p className="text-xs text-muted tracking-wide uppercase mt-0.5">from the community</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Collections */}
      <section className="section-padding bg-background">
        <div className="container-shell">
          <div className="grid lg:grid-cols-[1fr_1fr] gap-12 lg:gap-16 items-start">
            <div>
              <p className="eyebrow mb-4">Collections</p>
              <h2 className="font-display text-3xl sm:text-4xl font-semibold text-text leading-tight">Knowledge created here.</h2>
              <p className="mt-4 text-muted leading-8 max-w-lg">
                A growing archive of scholarly work from the NWSSU San Jorge Campus community, preserving research that informs learning and local development.
              </p>

              <div className="mt-10 rounded-2xl bg-primary-dark text-white p-7 sm:p-8">
                <div className="w-12 h-12 rounded-xl bg-accent/15 text-accent flex items-center justify-center mb-5">
                  <Search size={22} strokeWidth={1.75} />
                </div>
                <h3 className="font-display text-2xl font-semibold">Accessing Repository Materials</h3>
                <p className="mt-3 text-white/75 leading-7 text-sm sm:text-base">
                  Some repository materials may be available for on-site viewing or through authorized access. For assistance locating theses, capstone projects, or research documents, please contact the Learning Resource Center staff.
                </p>
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=nwssulibrarysjcampus@gmail.com&su=Inquiry%20from%20NWSSU-SJ%20Library%20Website"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex items-center gap-2 bg-accent text-primary-dark px-6 py-3.5 rounded-full font-semibold hover:bg-[#F0B85C] text-sm"
                >
                  Request Assistance <ArrowUpRight size={16} />
                </a>
              </div>
            </div>

            <div className="space-y-0 border border-border rounded-2xl overflow-hidden bg-white">
              <div className="flex min-h-[320px] flex-col items-center justify-center p-8 sm:p-10 text-center">
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/[0.06] text-primary">
                  <Clock size={26} strokeWidth={1.75} />
                </div>
                <p className="text-[11px] font-bold tracking-[0.18em] uppercase text-secondary mb-2">Repository Files</p>
                <h3 className="font-display text-3xl font-semibold text-text">Coming Soon</h3>
                <p className="mt-3 max-w-sm text-sm text-muted leading-7">
                  Repository collections and files are being prepared. Please check back soon or contact the Learning Resource Center for assistance.
                </p>
              </div>
              {/* {collections.map((item, index) => {
                const Icon = item.icon
                return (
                  <article key={item.title} className={`p-7 sm:p-8 flex gap-5 ${index !== 0 ? 'border-t border-border' : ''}`}>
                    <div className="w-12 h-12 rounded-xl bg-primary/[0.06] text-primary flex items-center justify-center shrink-0">
                      <Icon size={22} strokeWidth={1.75} />
                    </div>
                    <div>
                      <p className="text-[11px] font-bold tracking-[0.18em] uppercase text-secondary mb-2">Collection {String(index + 1).padStart(2, '0')}</p>
                      <h3 className="font-display text-2xl font-semibold text-text leading-snug">{item.title}</h3>
                      <p className="mt-2 text-sm text-muted leading-7">{item.description}</p>
                    </div>
                  </article>
                )
              })} */}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
