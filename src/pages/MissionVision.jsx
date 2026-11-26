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
  "To develop and maintain a relevant, adequate, diverse, and up-to-date collection of print and electronic information resources that supports the University's academic programs, instruction, research, extension, and production activities.",
  'To provide accessible, innovative, inclusive, and responsive library services and conducive learning environments that promote academic excellence, information literacy, independent learning, and lifelong learning among students, faculty, and other stakeholders.',
  'To strengthen the professional competencies, technological capabilities, ethical practices, and service commitment of library personnel through continuing professional development, training, and capacity-building initiatives.',
  'To enhance research and knowledge development by providing access to scholarly databases, digital resources, research assistance, and information services that support knowledge creation, innovation, and dissemination.',
  'To establish and strengthen linkages and collaborative partnerships with academic institutions, libraries, government agencies, and community organizations to promote resource sharing, information exchange, and community engagement.',
  "To preserve, organize, and promote local knowledge, cultural heritage, and relevant information resources that contribute to the appreciation of Samar's identity, history, environment, and sustainable development.",
  'To ensure effective library administration, transparent resource management, compliance with applicable standards and institutional policies, and continuous improvement in the delivery of quality library services.',
  'To advance library modernization and digital transformation through the development of an integrated library management system, digital repositories, online services, and appropriate information technologies.',
  'To maintain and improve safe, accessible, inclusive, environmentally responsible, and sustainable library facilities that respond to the evolving learning, research, and information needs of the academic community.',
]

export default function MissionVision() {
  return (
    <>
      {/* Editorial hero */}
      <section className="no-reveal relative overflow-hidden bg-[#F3EFE6] text-text">
        <div className="absolute inset-0 opacity-[0.45]" style={{ backgroundImage: 'linear-gradient(90deg, rgba(35,78,62,0.05) 1px, transparent 1px), linear-gradient(rgba(35,78,62,0.05) 1px, transparent 1px)', backgroundSize: '44px 44px' }} />
        <div className="absolute -top-24 right-0 w-[32rem] h-[32rem] rounded-full bg-accent/15 blur-3xl" />
        <div className="relative container-shell pt-20 pb-16 sm:pt-24 sm:pb-20 lg:pt-28 lg:pb-24">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-end">
            <div>
              <p className="eyebrow mb-6 animate-fade-up">About the Institution</p>
              <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-semibold leading-[0.95] tracking-tight text-primary-dark animate-fade-up" style={{ animationDelay: '80ms' }}>
                Mission
                <span className="block text-primary/35">&amp; Vision</span>
              </h1>
              <p className="mt-8 max-w-xl text-base sm:text-lg leading-8 text-muted animate-fade-up" style={{ animationDelay: '160ms' }}>
                The purpose, direction, and values that guide Northwest Samar State University and the San Jorge Campus Library in serving learners, research, and community.
              </p>
            </div>
            <div className="animate-fade-up" style={{ animationDelay: '240ms' }}>
              <div className="border-l-2 border-accent pl-6 sm:pl-8 py-2">
                <p className="font-display text-2xl sm:text-3xl leading-snug text-primary-dark">
                  "From its upland watersheds to its coasts — shaping a resilient, sustainable, and irreplaceable Samar."
                </p>
                <p className="mt-4 text-xs font-bold tracking-[0.22em] uppercase text-secondary">NWSSU Vision</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* University statements */}
      <section className="section-padding bg-background">
        <div className="container-shell">
          <div className="grid lg:grid-cols-[280px_1fr] gap-10 lg:gap-16">
            <div>
              <span className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] uppercase text-secondary">
                <GraduationCap size={15} /> University
              </span>
              <h2 className="mt-4 font-display text-3xl sm:text-4xl font-semibold leading-tight text-text">Northwest Samar State University</h2>
              <p className="mt-4 text-sm leading-7 text-muted">Shaping graduates, advancing knowledge, and fostering stewardship with the communities of Samar.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-px bg-border border border-border rounded-2xl overflow-hidden">
              <article className="bg-white p-8 sm:p-10">
                <div className="flex items-center gap-3 text-accent mb-6">
                  <Eye size={20} strokeWidth={1.75} />
                  <span className="text-xs font-bold tracking-[0.2em] uppercase">Vision</span>
                </div>
                <h3 className="font-display text-3xl font-semibold text-text leading-tight">Source-to-Sea University</h3>
                <p className="mt-5 text-muted leading-8">
                  Northwest Samar State University is the Source-to-Sea University, shaping graduates, advancing knowledge, and fostering stewardship with the communities of Samar, from its upland watersheds to its coasts, to keep Samar island resilient, sustainable, and irreplaceable for generations to come.
                </p>
              </article>
              <article className="bg-primary-dark text-white p-8 sm:p-10">
                <div className="flex items-center gap-3 text-accent mb-6">
                  <Target size={20} strokeWidth={1.75} />
                  <span className="text-xs font-bold tracking-[0.2em] uppercase">Mission</span>
                </div>
                <h3 className="font-display text-3xl font-semibold leading-tight">Transforming Learners, Advancing Samar</h3>
                <p className="mt-5 text-white/75 leading-8">
                  Northwest Samar State University transforms learners into future-ready, culturally-rooted graduates; generates and applies knowledge through research and innovation; extends services in partnership with communities to strengthen livelihoods and industries; and advances Samar’s development.
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>

      {/* Values + Quality */}
      <section className="section-padding bg-white">
        <div className="container-shell">
          <div className="grid lg:grid-cols-[1fr_1fr] gap-14 lg:gap-20">
            <div>
              <p className="eyebrow mb-4">Core Values</p>
              <h2 className="font-display text-3xl sm:text-4xl font-semibold text-text leading-tight">Principles we carry into every service.</h2>
              <div className="mt-10 space-y-0 divide-y divide-border border-y border-border">
                {coreValues.map((value, i) => (
                  <div key={value.name} className="py-5 sm:py-6 flex gap-5 sm:gap-6">
                    <span className="font-display text-2xl text-accent/80 w-8 shrink-0">{String(i + 1).padStart(2, '0')}</span>
                    <div>
                      <h3 className="font-display text-xl font-semibold text-text">{value.name}</h3>
                      <p className="mt-1 text-sm text-muted leading-7">{value.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:pt-8">
              <div className="rounded-[2rem] bg-[#F3EFE6] p-8 sm:p-10 lg:p-12 relative overflow-hidden">
                <div className="absolute top-6 right-8 font-display text-[8rem] leading-none text-primary/[0.05] select-none">Q</div>
                <p className="eyebrow mb-4">Quality Policy</p>
                <h3 className="font-display text-2xl sm:text-3xl font-semibold text-primary-dark leading-tight relative">Committed to quality and excellence</h3>
                <p className="mt-6 text-muted leading-8 relative">
                  Northwest Samar State University is committed to provide excellent, relevant, and quality instruction, research, extension, and production by adhering to regulatory statutory requirements and pledging to improve its Quality Management System, thereby satisfying clients and producing world-class professionals.
                </p>
                <div className="mt-8 flex items-center gap-3 text-sm font-medium text-primary relative">
                  <ShieldCheck size={18} className="text-accent" />
                  Quality Management System commitment
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic pillars */}
      <section className="section-padding bg-primary-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '28px 28px' }} />
        <div className="relative container-shell">
          <div className="max-w-2xl">
            <p className="eyebrow text-accent before:bg-accent/70 mb-4">Strategic Direction</p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight">Six pillars guiding the university forward.</h2>
            <p className="mt-5 text-white/70 leading-8">A framework for transformative, sustainable, and impactful development across Samar and beyond.</p>
          </div>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 border border-white/10 rounded-2xl overflow-hidden">
            {strategicPillars.map((pillar) => {
              const Icon = pillar.icon
              return (
                <article key={pillar.name} className="bg-primary-dark/60 p-7 sm:p-8 hover:bg-white/[0.04] transition-colors">
                  <div className="flex items-center justify-between gap-4 mb-8">
                    <Icon size={22} className="text-accent" strokeWidth={1.75} />
                    <span className="text-[11px] font-bold tracking-[0.18em] uppercase text-white/45">{pillar.keyword}</span>
                  </div>
                  <h3 className="font-display text-2xl font-semibold">{pillar.name}</h3>
                  <p className="mt-3 text-sm text-white/65 leading-7">{pillar.focus}</p>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      {/* Library statements */}
      <section className="section-padding bg-background">
        <div className="container-shell">
          <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-12 lg:gap-16 items-start">
            <div className="lg:sticky lg:top-28">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/15 text-primary-dark text-xs font-bold tracking-[0.18em] uppercase mb-5">
                <Library size={14} /> SJ Campus Library
              </span>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-text leading-[1.1]">A library built for discovery and growth.</h2>
              <p className="mt-5 text-muted leading-8 max-w-md">Our vision and mission define how we support students, faculty, and researchers at NWSSU San Jorge Campus.</p>
            </div>
            <div className="space-y-6">
              <article className="bg-white border border-border rounded-2xl p-8 sm:p-10">
                <div className="flex items-center gap-3 mb-5">
                  <span className="w-10 h-10 rounded-full bg-accent/15 text-accent flex items-center justify-center"><Eye size={18} /></span>
                  <p className="text-xs font-bold tracking-[0.2em] uppercase text-secondary">Library Vision</p>
                </div>
                <h3 className="font-display text-2xl sm:text-3xl font-semibold text-text leading-tight">A Dynamic Knowledge Hub</h3>
                <p className="mt-5 text-muted leading-8">
                  A dynamic, inclusive, and technology-driven learning and knowledge hub that empowers future-ready learners, advances research and innovation, and fosters knowledge stewardship in building a resilient, sustainable, and globally connected Samar.
                </p>
              </article>
              <article className="bg-primary text-white rounded-2xl p-8 sm:p-10">
                <div className="flex items-center gap-3 mb-5">
                  <span className="w-10 h-10 rounded-full bg-white/10 text-accent flex items-center justify-center"><BookOpen size={18} /></span>
                  <p className="text-xs font-bold tracking-[0.2em] uppercase text-accent/90">Library Mission</p>
                </div>
                <h3 className="font-display text-2xl sm:text-3xl font-semibold leading-tight">Empowering Through Knowledge</h3>
                <p className="mt-5 text-white/80 leading-8">
                  The NwSSU San Jorge Campus Library is committed to providing excellent, relevant, and accessible information resources, innovative library services, and conducive learning spaces that support quality instruction, research, extension, and production. It empowers learners and educators through information literacy, digital transformation, and lifelong learning; preserves and promotes knowledge and cultural heritage; and fosters partnerships and knowledge stewardship in advancing the development of Samar and its communities.
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>

      {/* Objectives */}
      <section className="section-padding bg-white">
        <div className="container-shell">
          <div className="max-w-2xl mb-12">
            <p className="eyebrow mb-4">Library Objectives</p>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-text leading-tight">Nine commitments that shape how we serve.</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-0 border-t border-border">
            {libraryObjectives.map((objective, index) => (
              <article key={index} className="flex gap-5 py-6 border-b border-border">
                <span className="font-display text-2xl text-primary/30 leading-none pt-1 w-8 shrink-0">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <p className="text-sm sm:text-[15px] text-muted leading-7">{objective}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
