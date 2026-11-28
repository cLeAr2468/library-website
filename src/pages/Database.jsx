import { useState } from 'react'
import { ArrowUpRight, BookOpen, Database as DatabaseIcon, Globe, Search } from 'lucide-react'

const sectionThemes = {
  subscribed: {
    iconWrap: 'bg-primary/10 text-primary',
    cardBorder: 'border-primary/10 hover:border-primary/30',
    cardGlow: 'hover:shadow-[0_20px_50px_-20px_rgba(35,78,62,0.2)]',
    accentLine: 'from-primary to-secondary',
    link: 'group-hover:text-primary',
    arrow: 'text-primary/40 group-hover:text-primary',
    visit: 'bg-primary text-white hover:bg-primary-dark',
    guide: 'border-primary/20 bg-primary/5 text-primary hover:bg-primary hover:text-white',
  },
  openAccess: {
    iconWrap: 'bg-[#1D6F8A]/10 text-[#1D6F8A]',
    cardBorder: 'border-[#1D6F8A]/10 hover:border-[#1D6F8A]/30',
    cardGlow: 'hover:shadow-[0_20px_50px_-20px_rgba(29,111,138,0.2)]',
    accentLine: 'from-[#1D6F8A] to-[#4BA3C3]',
    link: 'group-hover:text-[#1D6F8A]',
    arrow: 'text-[#1D6F8A]/40 group-hover:text-[#1D6F8A]',
    visit: 'bg-[#1D6F8A] text-white hover:bg-[#175A70]',
    guide: 'border-[#1D6F8A]/20 bg-[#1D6F8A]/5 text-[#1D6F8A] hover:bg-[#1D6F8A] hover:text-white',
  },
}

const logoFor = (url) => `https://www.google.com/s2/favicons?sz=128&domain_url=${encodeURIComponent(url)}`

function DatabaseLogo({ src, alt, className = '' }) {
  const [failed, setFailed] = useState(false)

  if (!src || failed) {
    return <DatabaseIcon size={28} className="text-current" />
  }

  return (
    <img
      src={src}
      alt={alt}
      className={`h-full w-full object-contain ${className}`.trim()}
      loading="lazy"
      onError={() => setFailed(true)}
      referrerPolicy="no-referrer"
    />
  )
}

const databaseSections = [
  {
    key: 'subscribed',
    title: 'Subscribed Databases',
    description: 'Premium academic databases available through the library subscription.',
    icon: DatabaseIcon,
    items: [
      {
        title: 'PROQUEST',
        url: 'https://www.proquest.com/',
        guideUrl: 'https://drive.google.com/file/d/1kTPMvvXmIiK3Weiivcq31MZll6vtG8Fv/view?usp=sharing',
        logo: logoFor('https://www.proquest.com/'),
      },
      {
        title: 'Philippine E-Journals (PEJ)',
        url: 'https://ejournals.ph/',
        guideUrl: 'https://drive.google.com/file/d/1LNmJkoDo0MWfReHakdcUe2xeaNRWaz_H/view?usp=sharing',
        logo: logoFor('https://ejournals.ph/'),
      },
    ],
  },
  {
    key: 'openAccess',
    title: 'Open Access Database for Ebooks & Ejournals',
    description: 'Free digital resources and scholarly collections accessible to everyone.',
    icon: Globe,
    items: [
      { title: 'DOST-STARBOOKS', url: 'https://starbooks.ph/', logo: logoFor('https://starbooks.ph/') },
      { title: 'NLP E-Resources Portal', url: 'https://eportal.nlp.gov.ph/', logo: logoFor('https://eportal.nlp.gov.ph/') },
      { title: 'PCAARRD eLibrary', url: 'https://elibrary.pcaarrd.dost.gov.ph/home', logo: logoFor('https://elibrary.pcaarrd.dost.gov.ph/home') },
      { title: 'DOAB', url: 'https://directory.doabooks.org/', logo: logoFor('https://directory.doabooks.org/') },
      { title: 'Taylor & Francis', url: 'https://www.taylorfrancis.com/', logo: logoFor('https://www.taylorfrancis.com/') },
      { title: 'Springer Nature', url: 'https://link.springer.com/', logo: logoFor('https://link.springer.com/') },
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
          <div className="mb-10 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <p className="eyebrow mb-4">Digital Collection</p>
              <h2 className="font-display text-3xl sm:text-4xl font-semibold text-text leading-tight">Research at your fingertips.</h2>
              <p className="mt-4 text-muted leading-8">Trusted academic databases and digital references, curated to support your scholarly work.</p>
            </div>
            <a
              href="https://nwssu.librarika.com/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 self-start rounded-full bg-primary-dark px-5 py-3 text-sm font-semibold text-white hover:bg-primary"
            >
              <Search size={16} className="text-accent" />
              Open OPAC
              <ArrowUpRight size={15} />
            </a>
          </div>

          <div className="space-y-12">
            {databaseSections.map((section) => {
              const theme = sectionThemes[section.key]
              const SectionIcon = section.icon

              return (
                <div key={section.key}>
                  <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                      <h3 className="font-display text-2xl sm:text-3xl font-semibold text-text leading-tight">{section.title}</h3>
                      <p className="mt-2 text-sm sm:text-base text-muted leading-7 max-w-3xl">{section.description}</p>
                    </div>
                    <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-muted/70 shrink-0">
                      <SectionIcon size={14} />
                      {section.items.length} {section.items.length === 1 ? 'Resource' : 'Resources'}
                    </div>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
                    {section.items.map((item) => (
                      <article
                        key={item.title}
                        className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border bg-white p-5 sm:p-6 transition-all duration-300 hover:-translate-y-1 ${theme.cardBorder} ${theme.cardGlow}`}
                      >
                        <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${theme.accentLine}`} />

                        <div className="flex items-start gap-4">
                          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-border/60 bg-background p-2.5 shadow-sm">
                            <DatabaseLogo src={item.logo} alt={`${item.title} logo`} />
                          </div>
                          <div className="min-w-0 flex-1">
                            <a
                              href={item.url}
                              target="_blank"
                              rel="noreferrer"
                              className={`inline-flex items-start gap-2 font-display text-xl font-semibold text-text transition-colors leading-snug ${theme.link}`}
                            >
                              <span className="break-words">{item.title}</span>
                              <ArrowUpRight size={17} className={`shrink-0 mt-0.5 transition-colors ${theme.arrow}`} />
                            </a>
                            <p className="mt-2 text-xs text-muted truncate" title={item.url}>{item.url}</p>
                          </div>
                        </div>

                        <div className="mt-auto pt-5 flex flex-row items-center gap-2">
                          <a
                            href={item.url}
                            target="_blank"
                            rel="noreferrer"
                            className={`inline-flex flex-1 items-center justify-center gap-1.5 whitespace-nowrap rounded-full px-3.5 py-2 text-xs font-semibold transition-colors sm:flex-none ${theme.visit}`}
                          >
                            Visit Database
                            <ArrowUpRight size={14} />
                          </a>
                          {item.guideUrl && (
                            <a
                              href={item.guideUrl}
                              target="_blank"
                              rel="noreferrer"
                              className={`inline-flex flex-1 items-center justify-center gap-1.5 whitespace-nowrap rounded-full border px-3.5 py-2 text-xs font-semibold transition-colors sm:flex-none ${theme.guide}`}
                            >
                              <BookOpen size={14} />
                              User Guide
                            </a>
                          )}
                        </div>
                      </article>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}