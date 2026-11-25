import { ArrowUpRight, Building2, Globe, Handshake } from 'lucide-react'
import PageHero from '../components/PageHero'
import SectionHeading from '../components/SectionHeading'

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
      <PageHero
        eyebrow="About Us"
        title="Linkages"
        description="Partnerships that enhance access to information, research, and learning opportunities for the NWSSU-SJ community."
      />

      <section className="section-padding bg-background">
        <div className="container-shell">
          <SectionHeading
            align="center"
            eyebrow="Our Network"
            title="Stronger through collaboration"
            description="We build meaningful partnerships to broaden resources and opportunities for our students and faculty."
          />
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {linkages.map((item) => {
              const Icon = item.icon
              return (
                <article key={item.title} className="surface-card-hover p-7">
                  <div className="w-13 h-13 w-[52px] h-[52px] rounded-2xl bg-primary/[0.07] text-primary flex items-center justify-center mb-5">
                    <Icon size={24} strokeWidth={1.75} />
                  </div>
                  <h2 className="font-display text-xl font-semibold text-text">{item.title}</h2>
                  <p className="mt-3 text-sm text-muted leading-7">{item.description}</p>
                </article>
              )
            })}
          </div>

          <div className="mt-10 relative overflow-hidden rounded-[2rem] bg-primary px-8 sm:px-10 py-10 text-white flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_80%_0%,_#E5A84B,_transparent_35%)]" />
            <div className="relative max-w-2xl">
              <h2 className="font-display text-2xl sm:text-3xl font-semibold">Partner with us</h2>
              <p className="mt-3 text-white/80 leading-7">
                NWSSU-SJ Library welcomes partnerships that support academic excellence, research development, and resource sharing.
              </p>
            </div>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=nwssulibrarysjcampus@gmail.com&su=Inquiry%20from%20NWSSU-SJ%20Library%20Website"
              target="_blank"
              rel="noreferrer"
              className="relative inline-flex items-center gap-2 bg-accent text-primary-dark px-7 py-3.5 rounded-full font-semibold hover:bg-[#F0B85C] shrink-0"
            >
              Contact Library <ArrowUpRight size={17} />
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
