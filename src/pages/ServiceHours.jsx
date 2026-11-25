import { Calendar, Clock, Info } from 'lucide-react'
import PageHero from '../components/PageHero'
import SectionHeading from '../components/SectionHeading'

const hours = [
  { day: 'Monday – Friday', time: '8:00 AM – 5:00 PM', note: 'Regular service hours', open: true },
  { day: 'Saturday – Sunday & Holidays', time: 'Closed', note: 'Except for special announcements', open: false },
]

export default function ServiceHours() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Service Hours"
        description="Plan your visit to the Learning Resource Center. Our hours are designed to support students, faculty, and researchers."
      />

      <section className="section-padding bg-background">
        <div className="container-shell max-w-5xl">
          <SectionHeading
            align="center"
            eyebrow="Schedule"
            title="When we're open"
            description="We're here throughout the week to support your academic and research needs."
          />

          <div className="mt-12 surface-card overflow-hidden">
            <div className="px-6 sm:px-8 py-5 border-b border-border flex items-center gap-3 bg-primary/[0.02]">
              <div className="w-10 h-10 rounded-xl bg-primary/[0.07] text-primary flex items-center justify-center">
                <Clock size={20} />
              </div>
              <h2 className="font-display text-xl font-semibold text-text">Regular Schedule</h2>
            </div>
            <div className="divide-y divide-border">
              {hours.map((item) => (
                <div key={item.day} className="px-6 sm:px-8 py-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                  <div>
                    <div className="font-semibold text-text flex items-center gap-2.5">
                      <Calendar size={17} className="text-secondary" />
                      {item.day}
                    </div>
                    <p className="text-sm text-muted mt-1.5 ml-[27px]">{item.note}</p>
                  </div>
                  <div className={`inline-flex items-center self-start sm:self-auto px-4 py-2 rounded-full text-sm font-semibold ${item.open ? 'bg-primary/[0.07] text-primary' : 'bg-border/60 text-muted'}`}>
                    {item.time}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 flex gap-4 p-5 rounded-2xl bg-accent/10 border border-accent/20">
            <Info size={20} className="text-accent shrink-0 mt-0.5" />
            <p className="text-sm text-text/80 leading-7">
              Service hours may change during holidays, university events, or special announcements. Please follow our official Facebook page for updates.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
