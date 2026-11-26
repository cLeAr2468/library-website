import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight,
  ArrowUpRight,
  BookMarked,
  BookOpen,
  Clock,
  GraduationCap,
  Laptop,
  Library,
  Mail,
  MapPin,
  Search,
  Sparkles,
  Users,
} from 'lucide-react'
import SectionHeading from '../components/SectionHeading'

const categories = [
  { icon: BookOpen, name: 'Literature & Fiction', count: '1,240+ titles' },
  { icon: GraduationCap, name: 'Academic Research', count: '860+ resources' },
  { icon: Laptop, name: 'Technology & IT', count: '540+ titles' },
  { icon: Library, name: 'History & Culture', count: '720+ titles' },
  { icon: Sparkles, name: 'Science & Innovation', count: '630+ titles' },
  { icon: Users, name: 'Education & Teaching', count: '950+ titles' },
]

const featuredBooks = [
  {
    title: 'Bachelor of Science in Agriculture',
    cover: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=800&q=80',
    href: 'https://drive.google.com/drive/folders/163dh62icirL8OgKpMJEvOMWKvYEtR9kD?usp=sharing',
    tag: 'New Books',
  },
  {
    title: 'Bachelor of Elementary Education',
    cover: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80',
    href: 'https://drive.google.com/drive/folders/19bItM9aH7IMyze0UHo3gHI-d5Q5lgm5s?usp=sharing',
    tag: 'New Books',
  },
  {
    title: 'Bachelor of Science in Agricultural Biotechnology Engineering',
    cover: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=800&q=80',
    href: 'https://drive.google.com/drive/folders/17MTLzHfVtd9oucrCRBTvctUy3AL9mKae?usp=sharing',
    tag: 'New Books',
  },
  {
    title: 'Bachelor of Science in Criminology',
    cover: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800&q=80',
    href: 'https://drive.google.com/drive/folders/1-bcTlKmI3F5w96HebBnjynE8Jsez97aR?usp=sharing',
    tag: 'New Books',
  },
  {
    title: 'Bachelor of Science in Forestry',
    cover: 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=800&q=80',
    href: 'https://drive.google.com/drive/folders/1BtoCnBS6qSI3IQ1KX7OGcNCr216j56Ic?usp=sharing',
    tag: 'New Books',
  },
  {
    title: 'Bachelor of Science in Information Technology',
    cover: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80',
    href: 'https://drive.google.com/drive/folders/12o8rkhzxcbGWikBDNBaLDj7BZEADMeqF?usp=sharing',
    tag: 'New Books',
  },
  {
    title: 'Bachelor of Technology and Livelihood Education',
    cover: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80',
    href: 'https://drive.google.com/drive/folders/1oFsgDAnbuxaMciP9aPJxIoKCHnTdWUZp?usp=sharing',
    tag: 'New Books',
  },
  {
    title: 'General Education Curriculum (GEC)',
    cover: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=800&q=80',
    href: 'https://drive.google.com/drive/folders/1FXDbKN4niq7tMmiWjpq8oZzwGc7cgl05?usp=sharing',
    tag: 'New Books',
  },
]

const recommended = [
  {
    title: 'Digital Literacy for Modern Learners',
    author: 'Patricia Mendoza',
    description: 'A practical guide to navigating information, research tools, and digital scholarship.',
    cover: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'The Community Archive',
    author: 'NWSSU Research Collective',
    description: 'Local stories and academic contributions preserving culture and knowledge in Samar.',
    cover: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'Foundations of Academic Writing',
    author: 'Dr. Helen Cruz',
    description: 'Essential techniques for clear, confident, and well-structured scholarly writing.',
    cover: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=600&q=80',
  },
]

const services = [
  {
    icon: BookMarked,
    title: 'Book Borrowing',
    description: 'Simple borrowing and returning processes with helpful guidance from our library staff.',
    to: '/book-borrowing',
  },
  {
    icon: Search,
    title: 'OPAC Catalog',
    description: 'Search our collection quickly and find the resources you need for study and research.',
    href: 'https://nwssu.librarika.com/',
  },
  {
    icon: Laptop,
    title: 'Digital Resources',
    description: 'Access research databases, e-resources, and digital tools that support academic work.',
    to: '/database',
  },
  {
    icon: Users,
    title: 'Research Assistance',
    description: 'Get personalized support from librarians for citations, research, and information discovery.',
    href: 'https://www.facebook.com/NwSSU.sjclibrary',
  },
]

const membershipPerks = [
  'Borrow physical books and learning materials',
  'Access digital resources and research databases',
  'Reserve study spaces and attend library events',
  'Receive personalized research assistance',
]

function BookCard({ book }) {
  const Wrapper = book.href ? 'a' : 'article'
  const wrapperProps = book.href ? { href: book.href, target: '_blank', rel: 'noreferrer' } : {}

  return (
    <Wrapper {...wrapperProps} className="group block overflow-hidden rounded-2xl border border-border bg-white hover:border-secondary/25 hover:shadow-[0_20px_45px_-20px_rgba(35,78,62,0.18)] hover:-translate-y-1 transition-all duration-300">
      <div className="relative aspect-[16/10] overflow-hidden bg-[#EAE7DF]">
        <img
          src={book.cover}
          alt={`${book.title} cover`}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/35 via-transparent to-transparent opacity-70" />
        {book.tag ? (
          <div className="absolute top-2.5 left-2.5">
            <span className="inline-flex items-center rounded-full bg-white/95 backdrop-blur px-2 py-0.5 text-[10px] font-semibold tracking-[0.12em] uppercase text-primary shadow-sm">
              {book.tag}
            </span>
          </div>
        ) : null}
        {book.href ? (
          <div className="absolute top-2.5 right-2.5 w-8 h-8 rounded-full bg-white/90 backdrop-blur text-primary flex items-center justify-center shadow-sm opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
            <ArrowUpRight size={15} />
          </div>
        ) : null}
      </div>
      <div className="p-3.5">
        {book.category ? <p className="text-xs font-semibold tracking-[0.14em] uppercase text-secondary mb-2">{book.category}</p> : null}
        <h3 className="font-display text-sm sm:text-base font-semibold text-text leading-snug group-hover:text-primary transition-colors min-h-[2.75rem]">
          {book.title}
        </h3>
        {book.author ? <p className="mt-1.5 text-sm text-muted">{book.author}</p> : null}
        {book.href ? (
          <div className="mt-3 inline-flex items-center gap-1.5 text-[11px] font-semibold tracking-wide uppercase text-secondary">
            View Resources <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
          </div>
        ) : null}
      </div>
    </Wrapper>
  )
}

export default function Home() {
  const [query, setQuery] = useState('')

  const handleSearch = (e) => {
    e.preventDefault()
    const q = query.trim()
    const url = q
      ? `https://nwssu.librarika.com/search?q=${encodeURIComponent(q)}`
      : 'https://nwssu.librarika.com/'
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  return (
    <>
      {/* HERO */}
      <section className="no-reveal relative overflow-hidden bg-primary-dark text-white min-h-[92vh] flex items-center -mt-[76px] lg:-mt-[88px]">
        <div className="absolute inset-0">
          <img
            src="/illustrations/hero-library.svg"
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#18362B]/90 via-[#234E3E]/75 to-[#234E3E]/35" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#18362B]/55 via-transparent to-[#18362B]/20" />
        </div>

        <div className="relative container-shell pb-24 pt-32 lg:pb-28 lg:pt-40">
          <div className="max-w-3xl">
            <p className="inline-flex items-center gap-3 text-accent font-semibold tracking-[0.24em] uppercase text-xs sm:text-sm mb-6 animate-fade-up">
              <span className="w-10 h-px bg-accent/70" />
              NWSSU San Jorge Campus Library
            </p>
            <h1
              className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.05] tracking-tight animate-fade-up"
              style={{ animationDelay: '80ms' }}
            >
              Where curiosity finds its <span className="text-accent italic">quiet place.</span>
            </h1>
            <p
              className="mt-7 text-base sm:text-lg text-white/85 max-w-xl leading-8 animate-fade-up"
              style={{ animationDelay: '160ms' }}
            >
              Discover a modern academic library crafted for learning, research, and inspiration — supporting the NWSSU community with curated collections and thoughtful services.
            </p>
            <div className="mt-10 flex flex-wrap gap-4 animate-fade-up" style={{ animationDelay: '240ms' }}>
              <a
                href="https://nwssu.librarika.com/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2.5 bg-accent text-primary-dark px-7 py-3.5 rounded-full font-semibold hover:bg-[#F0B85C] shadow-lg shadow-accent/20"
              >
                Explore the Catalog <ArrowRight size={18} />
              </a>
              <Link
                to="/service-hours"
                className="inline-flex items-center gap-2.5 border border-white/30 text-white px-7 py-3.5 rounded-full font-semibold hover:bg-white/10 hover:border-white/50"
              >
                Plan Your Visit
              </Link>
            </div>
          </div>
            </div>
      </section>

      {/* SEARCH & DISCOVERY */}
      <section className="no-reveal relative -mt-10 z-10 pb-4">
        <div className="container-shell">
          <form
            onSubmit={handleSearch}
            className="bg-white rounded-2xl sm:rounded-full shadow-[0_20px_60px_-15px_rgba(35,78,62,0.15)] border border-border/70 p-2 sm:p-2.5 flex flex-col sm:flex-row gap-2"
          >
            <div className="flex-1 flex items-center gap-3 px-4">
              <Search size={20} className="text-muted shrink-0" />
              <label htmlFor="catalog-search" className="sr-only">Search books, authors, or topics</label>
              <input
                id="catalog-search"
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search books, authors, or topics..."
                className="w-full py-3 bg-transparent text-text placeholder:text-muted/70 outline-none text-sm sm:text-base"
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 bg-primary text-white px-7 py-3.5 rounded-full font-semibold hover:bg-primary-dark shrink-0"
            >
              Search Catalog <ArrowRight size={17} />
            </button>
          </form>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-2 text-sm">
            <span className="text-muted mr-1">Popular:</span>
            {['Research Methods', 'Literature', 'Education', 'Technology'].map((term) => (
              <button
                key={term}
                type="button"
                onClick={() => {
                  setQuery(term)
                  window.open(`https://nwssu.librarika.com/search?q=${encodeURIComponent(term)}`, '_blank', 'noopener,noreferrer')
                }}
                className="px-4 py-1.5 rounded-full border border-border bg-white text-text/75 hover:border-secondary/40 hover:text-primary hover:bg-primary/[0.03]"
              >
                {term}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED BOOKS */}
      <section className="section-padding bg-background">
        <div className="container-shell">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
            <SectionHeading
              eyebrow="New Books Alert"
              title="Newly added course resources"
              description="Explore newly added books and learning materials by program. Click a course to view available resources."
            />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {featuredBooks.map((book) => (
              <BookCard key={book.title} book={book} />
            ))}
          </div>
        </div>
      </section>

      {/* POPULAR CATEGORIES */}
      <section className="section-padding bg-white">
        <div className="container-shell">
          <SectionHeading
            align="center"
            eyebrow="Browse by Category"
            title="Find your next great read"
            description="Explore our collections by subject and discover resources tailored to your interests and academic needs."
          />
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {categories.map((cat) => {
              const Icon = cat.icon
              return (
                <div
                  key={cat.name}
                  className="group flex items-center gap-5 p-6 rounded-2xl border border-border bg-background/40 hover:bg-white hover:border-secondary/25 hover:shadow-[0_16px_40px_-20px_rgba(35,78,62,0.2)] hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-14 h-14 rounded-2xl bg-primary/[0.07] text-primary flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <Icon size={26} strokeWidth={1.75} />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-text leading-snug">{cat.name}</h3>
                    <p className="text-sm text-muted mt-1">{cat.count}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* RECOMMENDED READING */}
      <section className="section-padding bg-background">
        <div className="container-shell">
          <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-12 lg:gap-16 items-start">
            <div className="lg:sticky lg:top-28">
              <SectionHeading
                eyebrow="Librarian's Picks"
                title="Recommended for you"
                description="Thoughtfully selected reads from our librarians — blending academic value with stories that inspire."
              />
              <div className="mt-8 p-6 rounded-2xl bg-primary/[0.04] border border-primary/10">
                <div className="flex items-center gap-3 text-primary font-semibold mb-2">
                  <Sparkles size={18} className="text-accent" />
                  Curated with care
                </div>
                <p className="text-sm text-muted leading-7">
                  Our recommendations are updated regularly by the NWSSU-SJ library team to reflect student needs and new arrivals.
                </p>
              </div>
            </div>
            <div className="space-y-5">
              {recommended.map((book) => (
                <article key={book.title} className="group surface-card-hover p-4 sm:p-5 flex flex-col sm:flex-row gap-5">
                  <div className="w-full sm:w-36 h-48 sm:h-44 rounded-xl overflow-hidden bg-[#EAE7DF] shrink-0">
                    <img src={book.cover} alt={book.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" loading="lazy" />
                  </div>
                  <div className="flex flex-col justify-center py-1">
                    <p className="text-xs font-semibold tracking-[0.14em] uppercase text-secondary mb-2">Recommended</p>
                    <h3 className="font-display text-2xl font-semibold text-text leading-snug">{book.title}</h3>
                    <p className="text-sm text-muted mt-1">by {book.author}</p>
                    <p className="mt-3 text-sm text-muted leading-7">{book.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* LIBRARY SERVICES */}
      <section className="section-padding bg-primary-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} />
        <div className="relative container-shell">
          <SectionHeading
            align="center"
            light
            eyebrow="What We Offer"
            title="Services designed around you"
            description="From borrowing books to research support, our services are here to make your academic journey smoother."
          />
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => {
              const Icon = service.icon
              const Wrapper = service.href ? 'a' : Link
              const props = service.href
                ? { href: service.href, target: '_blank', rel: 'noreferrer' }
                : { to: service.to }
              return (
                <Wrapper
                  key={service.title}
                  {...props}
                  className="group rounded-2xl border border-white/10 bg-white/[0.04] p-7 hover:bg-white/[0.08] hover:border-accent/30 hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-13 h-13 w-[52px] h-[52px] rounded-2xl bg-accent/15 text-accent flex items-center justify-center mb-5 group-hover:bg-accent group-hover:text-primary-dark transition-colors duration-300">
                    <Icon size={24} strokeWidth={1.75} />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-white mb-2">{service.title}</h3>
                  <p className="text-sm text-white/65 leading-7">{service.description}</p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
                    Learn more <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
                  </span>
                </Wrapper>
              )
            })}
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="section-padding bg-background">
        <div className="container-shell">
          <div className="relative rounded-[2rem] overflow-hidden bg-primary px-6 sm:px-10 lg:px-16 py-14 lg:py-16">
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_20%_20%,_#E5A84B,_transparent_35%),radial-gradient(circle_at_80%_80%,_#3B7157,_transparent_40%)]" />
            <div className="relative grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <p className="eyebrow text-accent before:bg-accent/70 mb-4">Stay Connected</p>
                <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-semibold text-white leading-tight">
                  Get library news &amp; updates
                </h2>
                <p className="mt-4 text-white/75 leading-8 max-w-md">
                  Subscribe to receive announcements about new arrivals, events, and library services — delivered to your inbox.
                </p>
              </div>
              <div>
                <form
                  className="flex flex-col sm:flex-row gap-3"
                  onSubmit={(e) => {
                    e.preventDefault()
                    const form = e.currentTarget
                    const email = new FormData(form).get('email')
                    if (email) {
                      window.location.href = `mailto:nwssulibrarysjcampus@gmail.com?subject=${encodeURIComponent('Newsletter Subscription')}&body=${encodeURIComponent(`Please subscribe this email to library updates: ${email}`)}`
                      form.reset()
                    }
                  }}
                >
                  <label htmlFor="newsletter-email" className="sr-only">Email address</label>
                  <div className="flex-1 relative">
                    <Mail size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted" />
                    <input
                      id="newsletter-email"
                      name="email"
                      type="email"
                      required
                      placeholder="Enter your email address"
                      className="w-full pl-11 pr-4 py-4 rounded-full bg-white text-text placeholder:text-muted/70 outline-none focus:ring-2 focus:ring-accent"
                    />
                  </div>
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 bg-accent text-primary-dark px-7 py-4 rounded-full font-semibold hover:bg-[#F0B85C] shrink-0"
                  >
                    Subscribe <ArrowRight size={17} />
                  </button>
                </form>
                <p className="mt-3 text-xs text-white/50 pl-1">We respect your privacy. Unsubscribe anytime.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
