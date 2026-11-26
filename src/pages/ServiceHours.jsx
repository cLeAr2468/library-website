import { ArrowUpRight, CalendarDays, Clock3, Info, MapPin } from 'lucide-react'

const schedule = [
  {
    day: 'Monday – Friday',
    time: '8:00 AM – 5:00 PM',
    note: 'Regular service hours',
    open: true,
  },
  {
    day: 'Saturday – Sunday & Holidays',
    time: 'Closed',
    note: 'Except for special announcements',
    open: false,
  },
]

const visitNotes = [
  {
    icon: Clock3,
    title: 'Best time to visit',
    detail: 'Mornings are usually calmer for focused reading, research, and borrowing.',
  },
  {
    icon: MapPin,
    title: 'Location',
    detail: 'NWSSU San Jorge Campus, San Jorge, Samar, Philippines.',
  },
  {
    icon: CalendarDays,
    title: 'Plan ahead',
    detail: 'Hours may change during holidays, campus events, or official announcements.',
  },
]

export default function ServiceHours() {
  return (
    <>
      {/* Hero */}
      <section className="no-reveal relative overflow-hidden bg-primary-dark text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(229,168,75,0.22),transparent_28%),radial-gradient(circle_at_85%_70%,rgba(59,113,87,0.35),transparent_35%)]" />
        <div className="relative container-shell py-20 sm:py-24 lg:py-28">
          <div className="grid lg:grid-cols-[1fr_auto] gap-10 lg:gap-16 items-end">
            <div>
              <p className="eyebrow text-accent before:bg-accent/70 mb-6 animate-fade-up">Plan Your Visit</p>
              <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight leading-[0.95] animate-fade-up" style={{ animationDelay: '80ms' }}>
                Service
                <span className="block text-white/45">Hours</span>
              </h1>
              <p className="mt-7 max-w-xl text-white/75 leading-8 text-base sm:text-lg animate-fade-up" style={{ animationDelay: '160ms' }}>
                Know when the Learning Resource Center is open and plan your visit with confidence.
              </p>
            </div>
            <div className="animate-fade-up hidden lg:block" style={{ animationDelay: '240ms' }}>
              <div className="relative rounded-2xl overflow-hidden min-w-[320px] shadow-[0_24px_60px_-20px_rgba(0,0,0,0.35)] border border-white/10 bg-white/[0.06]">
                <img
                  src="/illustrations/schedule.svg"
                  alt="Illustration of library schedule and hours"
                  className="w-full h-64 object-contain p-4"
                />
                <div className="absolute bottom-4 left-4 right-4 rounded-xl bg-primary-dark/80 backdrop-blur-sm border border-white/10 px-4 py-3">
                  <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-white/55 mb-1">Weekdays</p>
                  <div className="font-display text-2xl font-semibold text-accent">8:00 AM – 5:00 PM</div>
                  <p className="text-xs text-white/70 mt-0.5">Monday to Friday</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule board */}
      <section className="section-padding bg-background">
        <div className="container-shell">
          <div className="grid lg:grid-cols-[1fr_340px] gap-8 lg:gap-10 items-start">
            <div>
              <div className="flex items-end justify-between gap-6 mb-8">
                <div>
                  <p className="eyebrow mb-3">Weekly Schedule</p>
                  <h2 className="font-display text-3xl sm:text-4xl font-semibold text-text">When we're open</h2>
                </div>
                <span className="hidden sm:inline-flex items-center gap-2 text-xs font-semibold tracking-wide text-primary bg-primary/[0.06] px-4 py-2 rounded-full">
                  <span className="w-2 h-2 rounded-full bg-success" /> Regular hours
                </span>
              </div>

              <div className="bg-white border border-border rounded-2xl overflow-hidden">
                {schedule.map((item, idx) => (
                  <div
                    key={item.day}
                    className={`px-6 sm:px-8 py-7 sm:py-8 flex flex-col sm:flex-row sm:items-center gap-5 ${idx !== 0 ? 'border-t border-border' : ''}`}
                  >
                    <div className="flex items-center gap-4 sm:w-64 shrink-0">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${item.open ? 'bg-primary/[0.07] text-primary' : 'bg-border/50 text-muted'}`}>
                        <CalendarDays size={22} strokeWidth={1.75} />
                      </div>
                      <div>
                        <p className="font-semibold text-text">{item.day}</p>
                        <p className="text-xs text-muted mt-0.5">{item.note}</p>
                      </div>
                    </div>
                    <div className="sm:ml-auto flex items-center gap-4">
                      <div className={`font-display text-2xl sm:text-3xl font-semibold ${item.open ? 'text-primary-dark' : 'text-muted'}`}>
                        {item.time}
                      </div>
                      <span className={`px-3 py-1.5 rounded-full text-[11px] font-bold tracking-[0.14em] uppercase ${item.open ? 'bg-success/10 text-success' : 'bg-border/60 text-muted'}`}>
                        {item.open ? 'Open' : 'Closed'}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex gap-4 p-5 sm:p-6 rounded-2xl bg-[#F3EFE6] border border-accent/15">
                <Info size={20} className="text-accent shrink-0 mt-0.5" />
                <p className="text-sm text-text/75 leading-7">
                  Service hours may change during holidays, university events, or special announcements. Please follow our official Facebook page for updates.
                </p>
              </div>
            </div>

            <aside className="space-y-4">
              <div className="bg-white border border-border rounded-2xl p-6">
                <h3 className="font-display text-lg font-semibold text-text mb-5">Before you go</h3>
                <div className="space-y-5">
                  {visitNotes.map((note) => {
                    const Icon = note.icon
                    return (
                      <div key={note.title} className="flex gap-3.5">
                        <div className="w-9 h-9 rounded-lg bg-primary/[0.06] text-primary flex items-center justify-center shrink-0">
                          <Icon size={17} />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-text">{note.title}</p>
                          <p className="text-sm text-muted leading-6 mt-0.5">{note.detail}</p>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
              <a
                href="https://www.facebook.com/NwSSU.sjclibrary"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between gap-4 p-5 rounded-2xl bg-primary text-white hover:bg-primary-dark transition-colors"
              >
                <div>
                  <p className="font-semibold text-sm">Get schedule updates</p>
                  <p className="text-xs text-white/65 mt-0.5">Follow us on Facebook</p>
                </div>
                <ArrowUpRight size={18} className="text-accent shrink-0" />
              </a>
            </aside>
          </div>
        </div>
      </section>
    </>
  )
}
