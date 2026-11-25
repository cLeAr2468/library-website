import { Archive, ArrowUpRight, FileText, GraduationCap, Search } from 'lucide-react'
import PageHero from '../components/PageHero'
import SectionHeading from '../components/SectionHeading'

const collections = [
  { icon: GraduationCap, title: 'Theses & Dissertations', description: 'Academic works produced by NWSSU-SJ students and graduate researchers.' },
  { icon: FileText, title: 'Capstone Projects', description: 'Student projects showcasing applied research and practical solutions.' },
  { icon: Archive, title: 'Institutional Research', description: 'Research outputs and publications from the NWSSU academic community.' },
]

export default function Repository() {
  return (
    <>
      <PageHero
        eyebrow="Online Resources"
        title="Research Repository"
        description="Discover the research output of the NWSSU community — theses, capstone projects, and institutional studies."
      />

      <section className="section-padding bg-background">
        <div className="container-shell">
          <SectionHeading
            align="center"
            eyebrow="Collections"
            title="Knowledge created here"
            description="A growing archive of scholarly work from the NWSSU San Jorge Campus community."
          />
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {collections.map((item) => {
              const Icon = item.icon
              return (
                <article key={item.title} className="surface-card-hover p-7">
                  <div className="w-12 h-12 rounded-2xl bg-primary/[0.07] text-primary flex items-center justify-center mb-5">
                    <Icon size={24} strokeWidth={1.75} />
                  </div>
                  <h2 className="font-display text-xl font-semibold text-text">{item.title}</h2>
                  <p className="mt-3 text-sm text-muted leading-7">{item.description}</p>
                </article>
              )
            })}
          </div>

          <div className="mt-10 surface-card p-7 sm:p-8 flex flex-col sm:flex-row gap-6">
            <div className="w-14 h-14 rounded-2xl bg-accent/15 text-accent flex items-center justify-center shrink-0">
              <Search size={26} strokeWidth={1.75} />
            </div>
            <div>
              <h2 className="font-display text-2xl font-semibold text-text">Accessing Repository Materials</h2>
              <p className="mt-3 text-muted leading-7 max-w-3xl">
                Some repository materials may be available for on-site viewing or through authorized access. For assistance locating theses, capstone projects, or research documents, please contact the Learning Resource Center staff.
              </p>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=nwssulibrarysjcampus@gmail.com&su=Inquiry%20from%20NWSSU-SJ%20Library%20Website"
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex items-center gap-2 bg-primary text-white px-6 py-3.5 rounded-full font-semibold hover:bg-primary-dark"
              >
                Request Assistance <ArrowUpRight size={17} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
