import { AlertCircle, Ban, BookX, IdCard, ShieldAlert, Volume2 } from 'lucide-react'
import PageHero from '../components/PageHero'
import SectionHeading from '../components/SectionHeading'

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
      <PageHero
        eyebrow="About Us"
        title="Library Rules & Regulations"
        description="Guidelines designed to maintain a respectful, safe, and productive learning environment for the entire NWSSU-SJ community."
      />

      <section className="section-padding bg-background">
        <div className="container-shell">
          <SectionHeading
            align="center"
            eyebrow="General Rules"
            title="A shared space, shared responsibility"
            description="The Code of Discipline in the Academic Manual and Students' Handbook shall be enforced inside the library. In addition, the following specific rules shall be applicable."
          />

          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {quickReminders.map((item) => {
              const Icon = item.icon
              return (
                <div key={item.label} className="flex items-center gap-3 p-4 rounded-2xl bg-white border border-border">
                  <div className="w-10 h-10 rounded-xl bg-primary/[0.07] text-primary flex items-center justify-center shrink-0">
                    <Icon size={19} strokeWidth={1.75} />
                  </div>
                  <span className="text-sm font-medium text-text leading-snug">{item.label}</span>
                </div>
              )
            })}
          </div>

          <div className="mt-10 surface-card overflow-hidden">
            <div className="px-6 sm:px-8 py-5 border-b border-border bg-primary/[0.02]">
              <h2 className="font-display text-xl sm:text-2xl font-semibold text-text">General Library Rules</h2>
              <p className="text-sm text-muted mt-1">Please read and observe the following rules when using the library.</p>
            </div>
            <div className="divide-y divide-border">
              {generalRules.map((rule, index) => (
                <div key={rule.title} className="px-6 sm:px-8 py-6 flex gap-4 sm:gap-5 hover:bg-background/40 transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-primary text-white flex items-center justify-center font-display font-semibold shrink-0 mt-0.5">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="font-semibold text-text text-base sm:text-[1.05rem]">{rule.title}</h3>
                    <p className="mt-2 text-sm text-muted leading-7">{rule.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 grid md:grid-cols-[1fr_auto] gap-6">
            <div className="rounded-2xl bg-accent/10 border border-accent/20 p-6 sm:p-7 flex gap-4">
              <div className="w-11 h-11 rounded-xl bg-accent/20 text-accent flex items-center justify-center shrink-0">
                <ShieldAlert size={22} />
              </div>
              <div>
                <h3 className="font-display text-xl font-semibold text-text">Note to Library Users</h3>
                <p className="mt-2 text-sm text-text/80 leading-7">
                  Students who habitually break the rules will be punished accordingly.
                </p>
                <div className="mt-4 flex flex-wrap gap-3">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-accent/25 text-sm">
                    <span className="font-semibold text-primary">1st Offense:</span>
                    <span className="text-muted">Reprimand</span>
                  </div>
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-accent/25 text-sm">
                    <span className="font-semibold text-primary">2nd Offense:</span>
                    <span className="text-muted">Suspension of library privileges for not more than two weeks</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl bg-white border border-border p-6 sm:p-7 flex gap-4 md:max-w-xs">
              <AlertCircle size={20} className="text-secondary shrink-0 mt-0.5" />
              <p className="text-sm text-muted leading-7">
                These rules are enforced to ensure a conducive learning environment for all library users.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
