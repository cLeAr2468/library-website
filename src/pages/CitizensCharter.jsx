import { FileText } from 'lucide-react'
import PageHero from '../components/PageHero'
import SectionHeading from '../components/SectionHeading'

const services = [
  {
    service: 'Book Borrowing',
    client: 'Students, Faculty, Staff',
    requirements: 'Valid ID / Library Account',
    steps: 'Present ID → Request book → Librarian records loan → Receive book',
    time: '3–5 minutes',
  },
  {
    service: 'Book Returning',
    client: 'Borrowers',
    requirements: 'Borrowed book/material',
    steps: 'Present book → Librarian checks condition → Loan cleared',
    time: '2–3 minutes',
  },
  {
    service: 'Reference & Research Assistance',
    client: 'Students, Faculty, Researchers',
    requirements: 'Research query/topic',
    steps: 'Approach librarian → State information need → Receive assistance/resources',
    time: '5–15 minutes',
  },
  {
    service: 'Printing & Photocopying',
    client: 'Library users',
    requirements: 'File/material to copy, payment',
    steps: 'Submit request/file → Staff processes → Pay fee → Receive output',
    time: '3–10 minutes',
  },
]

export default function CitizensCharter() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Citizen's Charter"
        description="Key library services, requirements, steps, and processing times — presented clearly for the NWSSU-SJ community."
      />

      <section className="section-padding bg-background">
        <div className="container-shell">
          <SectionHeading
            align="center"
            eyebrow="Service Standards"
            title="Transparent, reliable service"
            description="Our Citizen's Charter outlines what to expect when using library services."
          />

          <div className="mt-12 surface-card overflow-hidden">
            <div className="px-6 sm:px-8 py-5 border-b border-border flex items-center gap-3 bg-primary/[0.02]">
              <div className="w-10 h-10 rounded-xl bg-primary/[0.07] text-primary flex items-center justify-center">
                <FileText size={20} />
              </div>
              <h2 className="font-display text-xl font-semibold text-text">LRC Service Charter</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm min-w-[720px]">
                <thead>
                  <tr className="bg-primary/[0.04] text-primary">
                    <th className="text-left px-6 py-4 font-semibold">Service</th>
                    <th className="text-left px-6 py-4 font-semibold">Client</th>
                    <th className="text-left px-6 py-4 font-semibold">Requirements</th>
                    <th className="text-left px-6 py-4 font-semibold">Steps</th>
                    <th className="text-left px-6 py-4 font-semibold">Time</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {services.map((item) => (
                    <tr key={item.service} className="align-top hover:bg-background/60">
                      <td className="px-6 py-4 font-semibold text-text">{item.service}</td>
                      <td className="px-6 py-4 text-muted leading-6">{item.client}</td>
                      <td className="px-6 py-4 text-muted leading-6">{item.requirements}</td>
                      <td className="px-6 py-4 text-muted leading-6">{item.steps}</td>
                      <td className="px-6 py-4">
                        <span className="inline-flex px-3 py-1 rounded-full bg-accent/15 text-primary-dark text-xs font-semibold whitespace-nowrap">{item.time}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <p className="mt-5 text-sm text-muted leading-7">
            * Processing times are estimates and may vary depending on request volume and the nature of the service.
          </p>
        </div>
      </section>
    </>
  )
}
