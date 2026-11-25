import { ArrowUpRight, Database as DatabaseIcon, Lock, Search } from 'lucide-react'
import PageHero from '../components/PageHero'
import SectionHeading from '../components/SectionHeading'

const databases = [
  {
    title: 'Online Journals',
    description: 'Access scholarly journals and articles for academic research and coursework.',
    access: 'Available through library-supported platforms.',
  },
  {
    title: 'E-Books & References',
    description: 'Digital books and reference materials to support learning across disciplines.',
    access: 'Accessible on campus or as provided by subscription.',
  },
  {
    title: 'Institutional Resources',
    description: 'Curated academic resources selected by NWSSU-SJ Library to support programs and research.',
    access: 'Contact library staff for access details.',
  },
]

export default function Database() {
  return (
    <>
      <PageHero
        eyebrow="Online Resources"
        title="Research Database"
        description="Explore online databases and digital academic resources that support research, instruction, and learning."
      />

      <section className="section-padding bg-background">
        <div className="container-shell">
          <SectionHeading
            align="center"
            eyebrow="Digital Collection"
            title="Research at your fingertips"
            description="Trusted academic databases and digital references, curated to support your scholarly work."
          />
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {databases.map((item) => (
              <article key={item.title} className="surface-card-hover p-7">
                <div className="w-12 h-12 rounded-2xl bg-primary/[0.07] text-primary flex items-center justify-center mb-5">
                  <DatabaseIcon size={24} strokeWidth={1.75} />
                </div>
                <h2 className="font-display text-xl font-semibold text-text">{item.title}</h2>
                <p className="mt-3 text-sm text-muted leading-7">{item.description}</p>
                <p className="mt-5 inline-flex items-center gap-2 text-xs font-medium text-secondary bg-secondary/[0.08] px-3 py-2 rounded-full">
                  <Lock size={13} /> {item.access}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-10 relative overflow-hidden rounded-[2rem] bg-primary px-8 sm:px-10 py-10 text-white flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_80%_0%,_#E5A84B,_transparent_35%)]" />
            <div className="relative">
              <h2 className="font-display text-2xl sm:text-3xl font-semibold flex items-center gap-3">
                <Search size={26} className="text-accent" /> Looking for a specific title?
              </h2>
              <p className="mt-3 text-white/80 leading-7 max-w-xl">Use the OPAC to search the library catalog, or ask our librarians for research assistance.</p>
            </div>
            <a
              href="https://nwssu.librarika.com/"
              target="_blank"
              rel="noreferrer"
              className="relative inline-flex items-center gap-2 bg-accent text-primary-dark px-7 py-3.5 rounded-full font-semibold hover:bg-[#F0B85C] shrink-0"
            >
              Open OPAC <ArrowUpRight size={17} />
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
