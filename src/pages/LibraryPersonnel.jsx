import { Mail, User } from 'lucide-react'
import PageHero from '../components/PageHero'
import SectionHeading from '../components/SectionHeading'

const personnel = [
  {
    name: 'Esterlyn C. Platino',
    role: 'Head, Learning Resource Center',
    image: '/images/personnel/head.jpg',
    description: 'Oversees library operations, services, collections, and strategic development.',
  },
  {
    name: 'Librarian',
    role: 'Technical Services Librarian',
    image: '/images/personnel/librarian-1.jpg',
    description: 'Manages cataloging, acquisitions, and organization of library resources.',
  },
  {
    name: 'Librarian',
    role: 'Reader Services Librarian',
    image: '/images/personnel/librarian-2.jpg',
    description: 'Assists users with borrowing, reference inquiries, and research support.',
  },
  {
    name: 'Library Staff',
    role: 'Library Assistant',
    image: '/images/personnel/staff.jpg',
    description: 'Supports daily library operations, circulation, and user assistance.',
  },
]

function PersonnelAvatar({ person }) {
  return (
    <div className="w-28 h-28 rounded-full mx-auto overflow-hidden border-4 border-white shadow-[0_8px_24px_-8px_rgba(35,78,62,0.2)] bg-gradient-to-br from-primary to-secondary relative">
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
      <div data-fallback className={`absolute inset-0 items-center justify-center text-white/90 ${person.image ? 'hidden' : 'flex'}`}>
        <User size={40} strokeWidth={1.5} />
      </div>
    </div>
  )
}

export default function LibraryPersonnel() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Library Personnel"
        description="Meet the dedicated team behind the NWSSU San Jorge Campus Library, committed to supporting your learning and research."
      />

      <section className="section-padding bg-background">
        <div className="container-shell">
          <SectionHeading
            align="center"
            eyebrow="Our Team"
            title="The people behind the library"
            description="A dedicated team working to make knowledge accessible and your library experience welcoming."
          />
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {personnel.map((person, index) => (
              <article key={`${person.role}-${index}`} className="surface-card-hover p-7 text-center">
                <PersonnelAvatar person={person} />
                <h3 className="mt-5 font-display text-xl font-semibold text-text">{person.name}</h3>
                <p className="text-secondary text-sm font-medium mt-1">{person.role}</p>
                <p className="mt-3 text-sm text-muted leading-7">{person.description}</p>
              </article>
            ))}
          </div>

          <div className="mt-12 text-center p-8 rounded-2xl bg-white border border-border">
            <Mail size={24} className="text-accent mx-auto mb-3" />
            <h3 className="font-display text-xl font-semibold text-text">Need to reach our team?</h3>
            <p className="mt-2 text-muted text-sm leading-7">
              Contact the Learning Resource Center for inquiries, assistance, or appointments.
            </p>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=nwssulibrarysjcampus@gmail.com&su=Inquiry%20from%20NWSSU-SJ%20Library%20Website"
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-primary font-semibold text-sm hover:text-secondary"
            >
              nwssulibrarysjcampus@gmail.com
            </a>
          </div>
        </div>
        
      </section>
    </>
  )
}
