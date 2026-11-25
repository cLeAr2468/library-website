import { Clock, Copy, FileText, Printer } from 'lucide-react'
import PageHero from '../components/PageHero'
import SectionHeading from '../components/SectionHeading'

const services = [
  { icon: Printer, title: 'Printing Services', description: 'Print academic documents, assignments, and research materials with assistance from library staff.' },
  { icon: Copy, title: 'Photocopying', description: 'Photocopy permitted library materials and academic documents according to library guidelines.' },
  { icon: FileText, title: 'Document Assistance', description: 'Get help preparing files for printing or copying, including basic formatting guidance.' },
  { icon: Clock, title: 'Service Hours', description: 'Printing and photocopying services are available during regular LRC service hours.' },
]

export default function DigitalResources() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Printing & Photocopying"
        description="Convenient printing and photocopying services to support the academic needs of students and faculty."
      />

      <section className="section-padding bg-background">
        <div className="container-shell">
          <SectionHeading
            align="center"
            eyebrow="Available Services"
            title="Support for your everyday needs"
            description="Quick, reliable document services right inside the library."
          />
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((item) => {
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

          <div className="mt-10 surface-card p-7 sm:p-8">
            <h2 className="font-display text-2xl font-semibold text-text">Guidelines</h2>
            <ul className="mt-5 grid sm:grid-cols-2 gap-x-8 gap-y-3">
              {[
                'Printing and photocopying requests are processed during posted service hours.',
                'Users must comply with copyright and intellectual property policies.',
                'Fees, if applicable, are subject to library or institutional guidelines.',
                'Please prepare files and materials in advance to avoid delays.',
              ].map((item) => (
                <li key={item} className="flex gap-3 text-sm text-muted leading-7">
                  <span className="mt-[11px] w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}
