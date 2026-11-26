import { Mail, User } from 'lucide-react'

const personnel = [
  {
    name: 'Esterlyn C. Platino, RL, MLIS',
    role: 'Campus Librarian',
    image: '/images/personnel/esterlyn-platino.jpg',
    description: 'Leads library services, collections, and programs that support learning and research at the campus.',
    lead: true,
  },
  {
    name: 'Lyne Viannie L. Sinajonon, RL',
    role: 'School Librarian',
    image: '/images/personnel/lyne-sinajonon.jpg',
    description: 'Supports library operations and assists students and faculty with library resources and services.',
  },
  {
    name: 'Jeff V. Tupaz, LPT',
    role: 'Library Support Staff',
    image: '/images/personnel/jeff-tupaz.jpg',
    description: 'Provides support in daily library activities and assists users with their library needs.',
  },
  {
    name: 'Darylle B. Polbos, LPT',
    role: 'Library Support Staff',
    image: '/images/personnel/darylle-polbos.jpg',
    description: 'Assists in maintaining library services and supporting students and faculty in the Learning Resource Center.',
  },
]

function Avatar({ person, size = 'md' }) {
  const dims = size === 'lg' ? 'w-32 h-32 sm:w-36 sm:h-36' : 'w-20 h-20'
  return (
    <div className={`${dims} rounded-full overflow-hidden bg-gradient-to-br from-primary to-secondary relative shrink-0 ring-4 ring-white shadow-[0_12px_30px_-12px_rgba(35,78,62,0.35)]`}>
      {person.image ? (
        <img
          src={person.image}
          alt={person.name}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.currentTarget.style.display = 'none'
            const fallback = e.currentTarget.parentElement?.querySelector('[data-fallback]')
            if (fallback) fallback.style.display = 'flex'
          }}
        />
      ) : null}
      <div data-fallback className={`absolute inset-0 items-center justify-center text-white/85 ${person.image ? 'hidden' : 'flex'}`}>
        <User size={size === 'lg' ? 48 : 30} strokeWidth={1.4} />
      </div>
    </div>
  )
}

export default function LibraryPersonnel() {
  const [lead, ...team] = personnel

  return (
    <>
      {/* Hero */}
      <section className="no-reveal relative overflow-hidden bg-background">
        <div className="absolute top-0 right-0 w-[40rem] h-[40rem] -translate-y-1/3 translate-x-1/4 rounded-full bg-primary/[0.04]" />
        <div className="relative container-shell pt-8 pb-8 sm:pt-10 sm:pb-10 lg:pt-14 lg:pb-12">
          <div className="grid lg:grid-cols-[1fr_420px] gap-10 lg:gap-14 items-center">
            <div>
              <p className="eyebrow mb-6 animate-fade-up">Our People</p>
              <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight leading-[0.96] text-primary-dark animate-fade-up" style={{ animationDelay: '80ms' }}>
                Library
                <span className="block text-primary/35">Personnel</span>
              </h1>
              <p className="mt-7 max-w-xl text-base sm:text-lg leading-8 text-muted animate-fade-up" style={{ animationDelay: '160ms' }}>
                The dedicated team behind NWSSU San Jorge Campus Library — supporting learning, research, and every visit to the Learning Resource Center.
              </p>
            </div>
            <div className="relative hidden lg:block animate-fade-up" style={{ animationDelay: '240ms' }}>
              <div className="absolute -inset-4 rounded-[2rem] border border-primary/10" />
              <div className="relative rounded-[1.75rem] overflow-hidden shadow-[0_24px_60px_-20px_rgba(35,78,62,0.15)] bg-[#F3EFE6] border border-border/60">
                <img
                  src="/illustrations/team.svg"
                  alt="Illustration of library team members"
                  className="w-full h-[420px] object-contain p-6"
                />
              </div>
              <div className="absolute -bottom-5 -left-5 bg-white rounded-2xl border border-border shadow-lg px-5 py-4">
                <p className="font-display text-2xl font-semibold text-primary">Dedicated</p>
                <p className="text-xs tracking-wide uppercase text-muted mt-0.5">to your learning</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lead + team */}
      <section className="section-padding bg-white">
        <div className="container-shell">
          {/* Lead spotlight */}
          <div className="grid lg:grid-cols-[auto_1fr] gap-8 lg:gap-12 items-center p-8 sm:p-10 lg:p-12 rounded-[2rem] bg-[#F3EFE6] border border-accent/10">
            <Avatar person={lead} size="lg" />
            <div>
              <p className="text-xs font-bold tracking-[0.2em] uppercase text-secondary mb-3">Library Leadership</p>
              <h2 className="font-display text-3xl sm:text-4xl font-semibold text-text leading-tight">{lead.name}</h2>
              <p className="mt-2 text-primary font-medium">{lead.role}</p>
              <p className="mt-4 text-muted leading-8 max-w-2xl">{lead.description}</p>
            </div>
          </div>

          {/* Team directory */}
          <div className="mt-14">
            <div className="flex items-end justify-between gap-6 mb-8 pb-6 border-b border-border">
              <div>
                <p className="eyebrow mb-3">The Team</p>
                <h2 className="font-display text-2xl sm:text-3xl font-semibold text-text">Supporting your library experience</h2>
              </div>
              <span className="hidden sm:block text-sm text-muted">{team.length} members</span>
            </div>

            <div className="divide-y divide-border border-b border-border">
              {team.map((person, index) => (
                <article key={`${person.role}-${index}`} className="py-7 sm:py-8 flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-7">
                  <Avatar person={person} />
                  <div className="flex-1 min-w-0">
                    <h3 className="font-display text-2xl font-semibold text-text">{person.name}</h3>
                    <p className="text-secondary font-medium text-sm mt-1">{person.role}</p>
                    <p className="mt-2 text-sm text-muted leading-7 max-w-2xl">{person.description}</p>
                  </div>
                  <div className="hidden lg:block text-6xl font-display text-primary/[0.06] select-none pr-4">
                    {String(index + 2).padStart(2, '0')}
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="mt-14 grid md:grid-cols-[1fr_auto] gap-6 items-center p-7 sm:p-8 rounded-2xl bg-primary-dark text-white">
            <div className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-xl bg-white/10 text-accent flex items-center justify-center shrink-0">
                <Mail size={20} />
              </div>
              <div>
                <h3 className="font-display text-xl font-semibold">Need to reach our team?</h3>
                <p className="mt-1 text-sm text-white/70 leading-7">Contact the Learning Resource Center for inquiries, assistance, or appointments.</p>
              </div>
            </div>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=nwssulibrarysjcampus@gmail.com&su=Inquiry%20from%20NWSSU-SJ%20Library%20Website"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-accent text-primary-dark px-6 py-3.5 rounded-full font-semibold hover:bg-[#F0B85C] shrink-0 text-sm"
            >
              Email the Library
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
