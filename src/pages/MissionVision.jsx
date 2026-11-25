import {
  BookOpen,
  Compass,
  Eye,
  GraduationCap,
  Landmark,
  Library,
  ShieldCheck,
  Sparkles,
  Target,
} from 'lucide-react'
import PageHero from '../components/PageHero'
import SectionHeading from '../components/SectionHeading'

const coreValues = [
  { name: 'Resilience', description: 'Strength and adaptability in the face of challenges.' },
  { name: 'Integrity', description: 'Honesty, accountability, and ethical action.' },
  { name: 'Service', description: 'Commitment to communities and the common good.' },
  { name: 'Excellence', description: 'Pursuing the highest quality in all endeavors.' },
]

const strategicPillars = [
  {
    name: 'HINGYAP',
    keyword: 'Learn',
    focus: 'Distinctive, future-ready education and student success',
    icon: GraduationCap,
  },
  {
    name: 'ANDAM',
    keyword: 'Anticipate + Enable',
    focus: 'People, culture and institutional capability',
    icon: Sparkles,
  },
  {
    name: 'NATON',
    keyword: 'Connect',
    focus: 'Engaged communities, strategic partnerships and global connectivity',
    icon: Compass,
  },
  {
    name: 'DUNGOG',
    keyword: 'Discover + Impact',
    focus: 'Research, innovation and Source-to-Sea impact',
    icon: Target,
  },
  {
    name: 'UNGOD',
    keyword: 'Steward',
    focus: 'Anticipatory governance and sustainable institutional stewardship',
    icon: ShieldCheck,
  },
  {
    name: 'MARIG-ON',
    keyword: 'Transform',
    focus: 'Smart, resilient and sustainable university systems',
    icon: Landmark,
  },
]

const libraryObjectives = [
  'To develop and maintain a relevant, adequate, diverse, and up-to-date collection of print and electronic information resources that supports the University\'s academic programs, instruction, research, extension, and production activities.',
  'To provide accessible, innovative, inclusive, and responsive library services and conducive learning environments that promote academic excellence, information literacy, independent learning, and lifelong learning among students, faculty, and other stakeholders.',
  'To strengthen the professional competencies, technological capabilities, ethical practices, and service commitment of library personnel through continuing professional development, training, and capacity-building initiatives.',
  'To enhance research and knowledge development by providing access to scholarly databases, digital resources, research assistance, and information services that support knowledge creation, innovation, and dissemination.',
  'To establish and strengthen linkages and collaborative partnerships with academic institutions, libraries, government agencies, and community organizations to promote resource sharing, information exchange, and community engagement.',
  'To preserve, organize, and promote local knowledge, cultural heritage, and relevant information resources that contribute to the appreciation of Samar\'s identity, history, environment, and sustainable development.',
  'To ensure effective library administration, transparent resource management, compliance with applicable standards and institutional policies, and continuous improvement in the delivery of quality library services.',
  'To advance library modernization and digital transformation through the development of an integrated library management system, digital repositories, online services, and appropriate information technologies.',
  'To maintain and improve safe, accessible, inclusive, environmentally responsible, and sustainable library facilities that respond to the evolving learning, research, and information needs of the academic community.',
]

function StatementCard({ icon: Icon, label, title, children, accent = false }) {
  return (
    <article className="surface-card-hover p-7 sm:p-8 h-full">
      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${accent ? 'bg-accent/15 text-accent' : 'bg-primary/[0.07] text-primary'}`}>
        <Icon size={28} strokeWidth={1.75} />
      </div>
      <p className="text-xs font-bold tracking-[0.2em] uppercase text-secondary mb-2">{label}</p>
      <h3 className="font-display text-2xl sm:text-[1.7rem] font-semibold text-text leading-snug">{title}</h3>
      <div className="mt-4 text-muted leading-8">{children}</div>
    </article>
  )
}

export default function MissionVision() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Mission & Vision"
        description="The guiding purpose and aspirations of Northwest Samar State University and the San Jorge Campus Library."
      />

      {/* UNIVERSITY SECTION */}
      <section className="section-padding bg-background">
        <div className="container-shell">
          <div className="flex items-center gap-3 mb-4">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/[0.07] text-primary text-xs font-bold tracking-[0.18em] uppercase">
              <GraduationCap size={15} /> University
            </span>
          </div>
          <SectionHeading
            title="Northwest Samar State University"
            description="Shaping graduates, advancing knowledge, and fostering stewardship with the communities of Samar — from its upland watersheds to its coasts."
          />

          <div className="mt-12 grid md:grid-cols-2 gap-6 lg:gap-8">
            <StatementCard icon={Eye} label="University Vision" title="Source-to-Sea University" accent>
              <p>
                Northwest Samar State University is the Source-to-Sea University, shaping graduates, advancing knowledge, and fostering stewardship with the communities of Samar, from its upland watersheds to its coasts, to keep Samar island resilient, sustainable, and irreplaceable for generations to come.
              </p>
            </StatementCard>
            <StatementCard icon={Target} label="University Mission" title="Transforming Learners, Advancing Samar">
              <p>
                Northwest Samar State University transforms learners into future-ready, culturally-rooted graduates; generates and applies knowledge through research and innovation; extends services in partnership with communities to strengthen livelihoods and industries; and advances Samar’s development.
              </p>
            </StatementCard>
          </div>
        </div>
      </section>

      {/* CORE VALUES & QUALITY POLICY */}
      <section className="section-padding bg-white">
        <div className="container-shell">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14">
            <div>
              <SectionHeading
                eyebrow="What We Stand For"
                title="Core Values"
                description="The principles that guide our conduct, decisions, and commitment to the community."
              />
              <div className="mt-8 grid sm:grid-cols-2 gap-4">
                {coreValues.map((value, i) => (
                  <div key={value.name} className="p-5 rounded-2xl border border-border bg-background/50 hover:border-secondary/25 hover:bg-white transition-colors">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="w-8 h-8 rounded-full bg-primary/[0.07] text-primary flex items-center justify-center text-xs font-bold font-display">
                        {i + 1}
                      </span>
                      <h3 className="font-display text-lg font-semibold text-text">{value.name}</h3>
                    </div>
                    <p className="text-sm text-muted leading-6 pl-11">{value.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-primary rounded-[2rem] p-8 sm:p-10 text-white relative overflow-hidden flex flex-col justify-center">
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              <div className="relative">
                <p className="eyebrow text-accent before:bg-accent/70 mb-4">Quality Policy</p>
                <h3 className="font-display text-2xl sm:text-3xl font-semibold leading-tight">Committed to quality and excellence</h3>
                <p className="mt-5 text-white/80 leading-8">
                  Northwest Samar State University is committed to provide excellent, relevant, and quality instruction, research, extension, and production by adhering to regulatory statutory requirements and pledging to improve its Quality Management System, thereby satisfying clients and producing world-class professionals.
                </p>
                <div className="mt-8 pt-6 border-t border-white/15 flex items-center gap-3 text-sm text-white/65">
                  <ShieldCheck size={18} className="text-accent" />
                  Quality Management System commitment
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STRATEGIC PILLARS */}
      <section className="section-padding bg-background">
        <div className="container-shell">
          <SectionHeading
            align="center"
            eyebrow="Strategic Direction"
            title="Strategic Pillars"
            description="Six pillars that guide the university's pursuit of transformative, sustainable, and impactful development."
          />
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {strategicPillars.map((pillar) => {
              const Icon = pillar.icon
              return (
                <article key={pillar.name} className="surface-card-hover p-7">
                  <div className="flex items-start justify-between gap-4 mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-primary/[0.07] text-primary flex items-center justify-center shrink-0">
                      <Icon size={24} strokeWidth={1.75} />
                    </div>
                    <span className="text-[11px] font-bold tracking-[0.16em] uppercase text-accent bg-accent/10 px-3 py-1.5 rounded-full">
                      {pillar.keyword}
                    </span>
                  </div>
                  <h3 className="font-display text-2xl font-semibold text-text">{pillar.name}</h3>
                  <p className="mt-3 text-sm text-muted leading-7">{pillar.focus}</p>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      {/* LIBRARY SECTION */}
      <section className="section-padding bg-white">
        <div className="container-shell">
          <div className="flex items-center gap-3 mb-4">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/15 text-primary-dark text-xs font-bold tracking-[0.18em] uppercase">
              <Library size={15} /> SJ Campus Library
            </span>
          </div>
          <SectionHeading
            title="San Jorge Campus Library"
            description="A dynamic, inclusive, and technology-driven learning and knowledge hub for the NWSSU-SJ community."
          />

          <div className="mt-12 grid md:grid-cols-2 gap-6 lg:gap-8">
            <StatementCard icon={Eye} label="Library Vision" title="A Dynamic Knowledge Hub" accent>
              <p>
                A dynamic, inclusive, and technology-driven learning and knowledge hub that empowers future-ready learners, advances research and innovation, and fosters knowledge stewardship in building a resilient, sustainable, and globally connected Samar.
              </p>
            </StatementCard>
            <StatementCard icon={BookOpen} label="Library Mission" title="Empowering Through Knowledge">
              <p>
                The NwSSU San Jorge Campus Library is committed to providing excellent, relevant, and accessible information resources, innovative library services, and conducive learning spaces that support quality instruction, research, extension, and production. It empowers learners and educators through information literacy, digital transformation, and lifelong learning; preserves and promotes knowledge and cultural heritage; and fosters partnerships and knowledge stewardship in advancing the development of Samar and its communities.
              </p>
            </StatementCard>
          </div>
        </div>
      </section>

      {/* LIBRARY OBJECTIVES */}
      <section className="section-padding bg-background">
        <div className="container-shell">
          <SectionHeading
            align="center"
            eyebrow="Library Objectives"
            title="Our commitment in action"
            description="Nine objectives that guide how we serve, support, and grow with the NWSSU San Jorge Campus community."
          />
          <div className="mt-12 grid md:grid-cols-2 xl:grid-cols-3 gap-5">
            {libraryObjectives.map((objective, index) => (
              <article key={index} className="surface-card-hover p-6 flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary text-white flex items-center justify-center font-display font-semibold shrink-0">
                  {index + 1}
                </div>
                <p className="text-sm text-muted leading-7 pt-1.5">{objective}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
