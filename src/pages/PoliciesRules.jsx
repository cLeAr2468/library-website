import { AlertCircle, Ban, BookX, IdCard, ShieldAlert, Volume2 } from 'lucide-react'

const generalRules = [
  {
    title: 'Valid School ID Required',
    text: 'Only students with validated school ID are allowed to avail of library services.',
  },
  {
    title: 'No Misrepresentation',
    text: 'Using another’s ID to enter the library or to take out library materials is a misrepresentation and a form of dishonesty and shall be dealt with accordingly.',
  },
  {
    title: 'Observe Silence',
    text: 'Idle conversation, loud laughter, and other unnecessary conversation must be avoided. Talking out of necessity must be done in a subdued tone.',
  },
  {
    title: 'Prohibited Activities',
    text: 'Eating, smoking, gambling, and vandalism are not allowed in the library.',
  },
  {
    title: 'Bag Depository Policy',
    text: 'No bags except purses/small handbags. Bags beyond a certain size shall be deposited at the bag depository check-in counter before proceeding to the different sections of the library. Deposited bags shall, however, be retrieved before the library closes for the day.',
  },
  {
    title: 'Cleanliness and Order',
    text: 'The library should be kept clean and orderly. Chairs must be pushed back under the table before leaving the library.',
  },
  {
    title: 'No Seat Reservation',
    text: 'No seat reservation or lying down on the sofas. Personal belongings left unattended for 15 minutes or more may be removed by the library staff to make room for other users.',
  },
  {
    title: 'Care for Library Property',
    text: 'No writing on books, tearing of pages, and any mutilation or defacement of library materials, equipment, or facilities. Mutilation/defacement of library property including computer equipment shall be considered vandalism and shall be subjected to disciplinary action.',
  },
  {
    title: 'Proper Authorization Required',
    text: 'No bringing out of library books, materials, and equipment without proper authorization. Books for general circulation shall be checked out at the circulation counter where the due date is stamped on a form attached to the book. Other materials and equipment shall need a borrower’s authorization form or a gate pass properly signed by a member of the library staff on duty. Unauthorized withdrawal of library property shall be considered stealing.',
  },
  {
    title: 'Handling Books in Reading Area',
    text: 'Books in the reading area should not be returned to the shelves but instead, these should be left on the table after reading to avoid their being misplaced. Exception: books belonging to a set of volumes, such as encyclopedias, should be returned to their proper shelves.',
  },
  {
    title: 'Exit Inspection',
    text: 'Before leaving the library, all borrowers shall be responsible enough to ensure that the library books and materials they are bringing out shall have been properly checked out or with a corresponding authorization form. They shall be expected to present these for inspection by the library personnel on duty at the exit area without their attention having to be called.',
  },
]

const quickReminders = [
  { icon: IdCard, label: 'Bring your validated ID' },
  { icon: Volume2, label: 'Keep the library quiet' },
  { icon: Ban, label: 'No food, smoking, or vandalism' },
  { icon: BookX, label: 'Handle materials with care' },
]

export default function PoliciesRules() {
  return (
    <>
      {/* Hero */}
      <section className="no-reveal relative bg-white border-b border-border">
        <div className="container-shell pt-20 pb-14 sm:pt-24 sm:pb-16 lg:pt-28">
          <div className="grid lg:grid-cols-[1fr_360px] gap-10 items-end">
            <div>
              <p className="eyebrow mb-6 animate-fade-up">Library Conduct</p>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.05] text-primary-dark animate-fade-up" style={{ animationDelay: '80ms' }}>
                Rules &amp; Regulations
              </h1>
              <p className="mt-6 max-w-2xl text-muted leading-8 text-base sm:text-lg animate-fade-up" style={{ animationDelay: '160ms' }}>
                Guidelines designed to maintain a respectful, safe, and productive learning environment for the entire NWSSU-SJ community.
              </p>
            </div>
            <div className="animate-fade-up lg:pb-1" style={{ animationDelay: '240ms' }}>
              <div className="relative rounded-2xl overflow-hidden mb-4 hidden lg:block bg-[#F3EFE6] border border-border/60">
                <img
                  src="/illustrations/rules.svg"
                  alt="Illustration of library rules and guidelines"
                  className="w-full h-44 object-contain p-3"
                />
              </div>
              <div className="p-5 rounded-2xl bg-background border border-border">
                <p className="text-xs font-bold tracking-[0.18em] uppercase text-secondary mb-2">Policy basis</p>
                <p className="text-sm text-muted leading-7">
                  The Code of Discipline in the Academic Manual and Students' Handbook shall be enforced inside the library, together with the rules below.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-shell">
          <div className="grid lg:grid-cols-[260px_1fr] gap-10 lg:gap-14">
            {/* Sidebar */}
            <aside className="lg:sticky lg:top-28 self-start">
              <p className="text-xs font-bold tracking-[0.2em] uppercase text-muted mb-4">Quick reminders</p>
              <div className="space-y-3">
                {quickReminders.map((item) => {
                  const Icon = item.icon
                  return (
                    <div key={item.label} className="flex items-center gap-3 p-4 rounded-xl bg-white border border-border">
                      <Icon size={18} className="text-primary shrink-0" strokeWidth={1.75} />
                      <span className="text-sm font-medium text-text leading-snug">{item.label}</span>
                    </div>
                  )
                })}
              </div>
              <div className="mt-6 p-4 rounded-xl bg-accent/10 border border-accent/20 flex gap-3">
                <AlertCircle size={18} className="text-accent shrink-0 mt-0.5" />
                <p className="text-xs text-text/75 leading-6">These rules are enforced to ensure a conducive learning environment for all library users.</p>
              </div>
            </aside>

            {/* Rules */}
            <div>
              <div className="mb-8">
                <p className="eyebrow mb-3">General Rules</p>
                <h2 className="font-display text-3xl sm:text-4xl font-semibold text-text leading-tight">A shared space, shared responsibility.</h2>
              </div>

              <div className="bg-white border border-border rounded-2xl overflow-hidden">
                {generalRules.map((rule, index) => (
                  <div key={rule.title} className={`px-6 sm:px-8 py-6 sm:py-7 flex gap-5 ${index !== 0 ? 'border-t border-border' : ''}`}>
                    <div className="font-display text-lg text-primary/35 w-7 shrink-0 pt-0.5">
                      {String(index + 1).padStart(2, '0')}
                    </div>
                    <div>
                      <h3 className="font-semibold text-text text-base sm:text-[1.05rem] leading-snug">{rule.title}</h3>
                      <p className="mt-2 text-sm text-muted leading-7">{rule.text}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-2xl bg-primary-dark text-white p-7 sm:p-8">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-accent/15 text-accent flex items-center justify-center shrink-0">
                    <ShieldAlert size={22} />
                  </div>
                  <div>
                    <h3 className="font-display text-2xl font-semibold">Note to Library Users</h3>
                    <p className="mt-2 text-white/75 leading-7 text-sm sm:text-base">
                      Students who habitually break the rules will be punished accordingly.
                    </p>
                    <div className="mt-5 grid sm:grid-cols-2 gap-3">
                      <div className="rounded-xl bg-white/[0.06] border border-white/10 px-5 py-4">
                        <p className="text-accent text-xs font-bold tracking-[0.16em] uppercase mb-1">1st Offense</p>
                        <p className="text-sm text-white/85">Reprimand</p>
                      </div>
                      <div className="rounded-xl bg-white/[0.06] border border-white/10 px-5 py-4">
                        <p className="text-accent text-xs font-bold tracking-[0.16em] uppercase mb-1">2nd Offense</p>
                        <p className="text-sm text-white/85">Suspension of library privileges for not more than two weeks</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
