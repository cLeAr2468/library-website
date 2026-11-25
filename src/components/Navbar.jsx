import { useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import {
  BookOpen,
  ChevronDown,
  Clock,
  Database,
  FileText,
  FolderOpen,
  Gavel,
  Globe,
  Headphones,
  Home,
  Link2,
  Mail,
  Menu,
  MessageCircle,
  Printer,
  Target,
  Users,
  X,
} from 'lucide-react'
import logo from '../assets/logo.png'

const aboutLinks = [
  { to: '/mission-vision', label: 'Mission & Vision', icon: Target },
  { to: '/service-hours', label: 'Service Hours', icon: Clock },
  { to: '/library-personnel', label: 'Library Personnel', icon: Users },
  { to: '/policies-rules', label: 'Policies & Rules', icon: Gavel },
  { to: '/citizens-charter', label: "Citizen's Charter", icon: FileText },
  { to: '/linkages', label: 'Linkages', icon: Link2 },
]

const serviceLinks = [
  { to: '/book-borrowing', label: 'Book Borrowing & Returning', icon: BookOpen },
  { href: 'https://nwssu.edu.ph/', label: 'Online Knowledge Concierge', icon: Headphones, external: true },
  { to: '/digital-resources', label: 'Printing & Photocopying', icon: Printer },
]

const resourceLinks = [
  { href: 'https://nwssu.librarika.com/', label: 'OPAC', icon: Globe, external: true },
  { to: '/database', label: 'Research Database', icon: Database },
  { to: '/repository', label: 'Research Repository', icon: FolderOpen },
]

const askLibrarianLinks = [
  { href: 'https://www.facebook.com/NwSSU.sjclibrary', label: 'Messenger', icon: MessageCircle, external: true },
  {
    href: 'https://mail.google.com/mail/?view=cm&fs=1&to=nwssulibrarysjcampus@gmail.com&su=Inquiry%20from%20NWSSU-SJ%20Library%20Website',
    label: 'Email',
    icon: Mail,
    external: true,
  },
]

function NavItem({ item, onClick }) {
  const Icon = item.icon
  const cls =
    'flex items-center gap-3 px-4 py-2.5 text-sm text-text hover:bg-primary/[0.06] hover:text-primary rounded-lg mx-2 transition-colors'
  if (item.external) {
    return (
      <a href={item.href} target="_blank" rel="noreferrer" className={cls} onClick={onClick}>
        <Icon size={16} className="text-secondary shrink-0" />
        <span>{item.label}</span>
      </a>
    )
  }
  return (
    <NavLink
      to={item.to}
      onClick={onClick}
      className={({ isActive }) =>
        `${cls} ${isActive ? 'bg-primary/[0.06] text-primary font-medium' : ''}`
      }
    >
      <Icon size={16} className="text-secondary shrink-0" />
      <span>{item.label}</span>
    </NavLink>
  )
}

function DesktopDropdown({ label, items }) {
  return (
    <div className="relative group">
      <button
        type="button"
        className="inline-flex items-center gap-1.5 px-1 py-2 text-sm font-medium text-text/80 hover:text-primary transition-colors"
        aria-haspopup="menu"
      >
        {label}
        <ChevronDown size={15} className="text-muted transition-transform duration-200 group-hover:rotate-180 group-focus-within:rotate-180" />
      </button>
      <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-focus-within:opacity-100 group-focus-within:visible transition-all duration-200 z-50">
        <div className="w-64 bg-white rounded-2xl shadow-[0_20px_50px_-15px_rgba(35,78,62,0.18)] border border-border/70 py-2">
          {items.map((item) => (
            <NavItem key={item.label} item={item} />
          ))}
        </div>
      </div>
    </div>
  )
}

function MobileSection({ label, items, open, onToggle, onNavigate }) {
  return (
    <div className="border-b border-border/60 last:border-b-0">
      <button
        type="button"
        className="flex items-center justify-between w-full px-1 py-3.5 text-sm font-medium text-text"
        onClick={onToggle}
        aria-expanded={open}
      >
        <span>{label}</span>
        <ChevronDown size={16} className={`text-muted transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && (
        <div className="pb-3 space-y-0.5">
          {items.map((item) => (
            <NavItem key={item.label} item={item} onClick={onNavigate} />
          ))}
        </div>
      )}
    </div>
  )
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileSections, setMobileSections] = useState({})
  const location = useLocation()
  const [prevPath, setPrevPath] = useState(location.pathname)

  if (prevPath !== location.pathname) {
    setPrevPath(location.pathname)
    setMobileOpen(false)
    setMobileSections({})
  }

  const toggle = (key) => setMobileSections((c) => ({ ...c, [key]: !c[key] }))
  const closeMobile = () => setMobileOpen(false)

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="absolute inset-0 bg-[#F8F7F2]/90 backdrop-blur-xl border-b border-border/60" />
      <div className="relative container-shell">
        <div className="flex items-center justify-between h-[76px] lg:h-[88px]">
          <Link to="/" className="flex items-center gap-3 group shrink-0">
            <img
              src={logo}
              alt="NWSSU San Jorge Campus Library logo"
              className="h-11 w-11 lg:h-12 lg:w-12 object-contain"
            />
            <div className="leading-tight">
              <div className="font-display text-lg lg:text-[1.35rem] font-semibold text-primary tracking-tight">
                NWSSU-SJ Library
              </div>
              <div className="text-[11px] lg:text-xs tracking-[0.14em] uppercase text-muted font-medium">
                San Jorge Campus
              </div>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-7" aria-label="Main navigation">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `inline-flex items-center gap-2 px-1 py-2 text-sm font-medium transition-colors ${
                  isActive ? 'text-primary' : 'text-text/80 hover:text-primary'
                }`
              }
            >
              <Home size={16} />
              Home
            </NavLink>
            <DesktopDropdown label="About" items={aboutLinks} />
            <DesktopDropdown label="Services" items={serviceLinks} />
            <DesktopDropdown label="Online Resources" items={resourceLinks} />
            <DesktopDropdown label="Ask Librarian" items={askLibrarianLinks} />
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <a
              href="https://nwssu.librarika.com/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-white px-5 py-2.75 rounded-full text-sm font-semibold hover:bg-primary-dark shadow-sm hover:shadow-md"
            >
              <Globe size={16} />
              Search OPAC
            </a>
          </div>

          <button
            type="button"
            className="lg:hidden inline-flex items-center justify-center w-11 h-11 rounded-xl text-primary hover:bg-primary/[0.06]"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden relative border-t border-border/60 bg-[#F8F7F2]/98 backdrop-blur-xl" id="mobile-nav">
          <div className="container-shell py-4 max-h-[calc(100vh-76px)] overflow-y-auto">
            <NavLink
              to="/"
              end
              onClick={closeMobile}
              className={({ isActive }) =>
                `flex items-center gap-3 px-1 py-3.5 text-sm font-medium border-b border-border/60 ${
                  isActive ? 'text-primary' : 'text-text'
                }`
              }
            >
              <Home size={16} className="text-secondary" /> Home
            </NavLink>
            <MobileSection label="About" items={aboutLinks} open={!!mobileSections.about} onToggle={() => toggle('about')} onNavigate={closeMobile} />
            <MobileSection label="Services" items={serviceLinks} open={!!mobileSections.services} onToggle={() => toggle('services')} onNavigate={closeMobile} />
            <MobileSection label="Online Resources" items={resourceLinks} open={!!mobileSections.resources} onToggle={() => toggle('resources')} onNavigate={closeMobile} />
            <MobileSection label="Ask Librarian" items={askLibrarianLinks} open={!!mobileSections.ask} onToggle={() => toggle('ask')} onNavigate={closeMobile} />
            <a
              href="https://nwssu.librarika.com/"
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex w-full items-center justify-center gap-2 bg-primary text-white px-5 py-3 rounded-full text-sm font-semibold hover:bg-primary-dark"
            >
              <Globe size={16} /> Search OPAC
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
