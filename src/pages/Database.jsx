import { ArrowUpRight, Database as DatabaseIcon, Search } from 'lucide-react'

const databaseSections = [
  {
    title: 'Subscribed Databases',
    items: [
      { title: 'PROQUEST', url: 'https://www.proquest.com/' },
      { title: 'Philippine E-Journals (PEJ)', url: 'https://ejournals.ph/' },
    ],
  },
  {
    title: 'Open Access Database for Ebooks & Ejournals',
    items: [
      { title: 'DOST-STARBOOKS', url: 'https://starbooks.ph/' },
      { title: 'NLP E-Resources Portal', url: 'https://eportal.nlp.gov.ph/' },
      { title: 'PCAARRD eLibrary', url: 'https://elibrary.pcaarrd.dost.gov.ph/home' },
      { title: 'DOAB', url: 'https://directory.doabooks.org/' },
      { title: 'Taylor & Francis', url: 'https://www.taylorfrancis.com/' },
      { title: 'Springer Nature', url: 'https://link.springer.com/' },
    ],
  },
]

export default function Database() {
  return (
    <>
      {/* Hero */}
      <section className="no-reveal relative overflow-hidden bg-[#F3EFE6]">
        <div className="absolute inset-0 opacity-[0.35]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(35,78,62,0.12) 1px, transparent 0)', backgroundSize: '24px 24px' }} />
        <div className="relative container-shell py-8 sm:py-10 lg:py-14">
          <div className="grid lg:grid-cols-[1fr_400px] gap-10 lg:gap-14 items-center">
            <div className="max-w-3xl">
              <p className="eyebrow mb-6 animate-fade-up">Online Resources</p>
              <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight leading-[0.95] text-primary-dark animate-fade-up" style={{ animationDelay: '80ms' }}>
                Research
                <span className="block text-primary/35">Database</span>
              </h1>
              <p className="mt-7 max-w-2xl text-muted leading-8 text-base sm:text-lg animate-fade-up" style={{ animationDelay: '160ms' }}>
                Explore online databases and digital academic resources that support research, instruction, and learning.
              </p>
            </div>
            <div className="relative hidden lg:block animate-fade-up" style={{ animationDelay: '240ms' }}>
              <div className="rounded-[1.75rem] overflow-hidden shadow-[0_24px_60px_-20px_rgba(35,78,62,0.12)] border border-border/60 bg-white">
                <img
                  src="/illustrations/research.svg"
                  alt="Illustration of research and digital resources"
                  className="w-full h-[380px] object-contain p-6"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-primary-dark text-white rounded-xl px-5 py-4 shadow-lg">
                <p className="font-display text-xl font-semibold text-accent">Curated</p>
                <p className="text-xs text-white/65 tracking-wide uppercase mt-0.5">for research</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Directory */}
      <section className="section-padding bg-background">
        <div className="container-shell">
          <div className="grid lg:grid-cols-[320px_1fr] gap-10 lg:gap-14 items-start">
            <div className="lg:sticky lg:top-28">
              <p className="eyebrow mb-4">Digital Collection</p>
              <h2 className="font-display text-3xl sm:text-4xl font-semibold text-text leading-tight">Research at your fingertips.</h2>
              <p className="mt-4 text-muted leading-8">Trusted academic databases and digital references, curated to support your scholarly work.</p>

              <div className="mt-8 p-6 rounded-2xl bg-primary-dark text-white">
                <div className="flex items-center gap-3 mb-3 text-accent">
                  <Search size={20} />
                  <span className="font-semibold">Need a specific title?</span>
                </div>
                <p className="text-sm text-white/70 leading-7">Use OPAC to search the library catalog, or ask our librarians for research assistance.</p>
                <a
                  href="https://nwssu.librarika.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex items-center gap-2 bg-accent text-primary-dark px-5 py-3 rounded-full text-sm font-semibold hover:bg-[#F0B85C]"
                >
                  Open OPAC <ArrowUpRight size={15} />
                </a>
              </div>
            </div>

            <div className="space-y-8">
              {databaseSections.map((section) => (
                <div key={section.title}>
                  <h3 className="font-display text-xl sm:text-2xl font-semibold text-text mb-4">{section.title}</h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {section.items.map((item, index) => (
                      <article key={item.title} className="bg-white border border-border rounded-xl p-5 hover:border-secondary/25 transition-colors">
                        <div className="flex items-start gap-3">
                          <span className="font-display text-lg text-primary/20 pt-0.5 shrink-0">{String(index + 1).padStart(2, '0')}</span>
                          <div className="min-w-0 flex-1">
                            <a
                              href={item.url}
                              target="_blank"
                              rel="noreferrer"
                              className="group inline-flex items-start gap-1.5 font-display text-lg font-semibold text-text hover:text-primary transition-colors leading-snug"
                            >
                              <span className="break-words">{item.title}</span>
                              <ArrowUpRight size={16} className="shrink-0 mt-0.5 text-primary/50 group-hover:text-primary transition-colors" />
                            </a>
                            <p className="mt-1.5 text-xs text-muted truncate" title={item.url}>{item.url}</p>
                          </div>
                        </div>
                      </article>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}