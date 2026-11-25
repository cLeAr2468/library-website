import { Link } from 'react-router-dom'
import { ArrowUpRight, Clock, Mail, MapPin, Phone } from 'lucide-react'
import logo from '../assets/logo.png'

function FacebookIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.46H15.2c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12Z" />
    </svg>
  )
}

const exploreLinks = [
  { to: '/mission-vision', label: 'Mission & Vision' },
  { to: '/service-hours', label: 'Service Hours' },
  { to: '/library-personnel', label: 'Library Personnel' },
  { to: '/policies-rules', label: 'Policies & Rules' },
]

const resourceLinks = [
  { href: 'https://nwssu.librarika.com/', label: 'OPAC Catalog', external: true },
  { to: '/database', label: 'Research Database' },
  { to: '/repository', label: 'Research Repository' },
  { to: '/book-borrowing', label: 'Book Borrowing' },
]

export default function Footer() {
  return (
    <footer className="bg-primary-dark text-white/90 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '28px 28px' }} />
      <div className="relative container-shell pt-16 pb-8 lg:pt-20">
        <div className="grid gap-12 lg:gap-8 md:grid-cols-2 lg:grid-cols-[1.2fr_0.7fr_0.7fr_1fr]">
          <div>
            <Link to="/" className="inline-flex items-center gap-3 mb-6">
              <span className="inline-flex items-center justify-center h-14 w-14 rounded-full bg-white p-1 shadow-sm shrink-0">
                <img src={logo} alt="NWSSU San Jorge Campus Library" className="h-full w-full object-contain" />
              </span>
              <div>
                <div className="font-display text-xl font-semibold text-white leading-tight">NWSSU-SJ Library</div>
                <div className="text-xs tracking-[0.16em] uppercase text-white/55 mt-0.5">San Jorge Campus</div>
              </div>
            </Link>
            <p className="text-sm leading-7 text-white/70 max-w-sm">
              A welcoming academic library supporting discovery, research, and lifelong learning for the Northwest Samar State University community.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href="https://www.facebook.com/NwSSU.sjclibrary"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center text-white/70 hover:text-accent hover:border-accent/50 hover:bg-white/5"
              >
                <FacebookIcon size={18} />
              </a>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=nwssulibrarysjcampus@gmail.com&su=Inquiry%20from%20NWSSU-SJ%20Library%20Website"
                target="_blank"
                rel="noreferrer"
                aria-label="Email"
                className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center text-white/70 hover:text-accent hover:border-accent/50 hover:bg-white/5"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold text-white mb-5">Explore</h3>
            <ul className="space-y-3">
              {exploreLinks.map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className="text-sm text-white/70 hover:text-accent inline-flex items-center gap-1.5 group">
                    <span className="w-0 group-hover:w-3 h-px bg-accent transition-all duration-200" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold text-white mb-5">Resources</h3>
            <ul className="space-y-3">
              {resourceLinks.map((item) => (
                <li key={item.label}>
                  {item.external ? (
                    <a href={item.href} target="_blank" rel="noreferrer" className="text-sm text-white/70 hover:text-accent inline-flex items-center gap-1.5 group">
                      <span className="w-0 group-hover:w-3 h-px bg-accent transition-all duration-200" />
                      {item.label}
                      <ArrowUpRight size={13} className="opacity-50" />
                    </a>
                  ) : (
                    <Link to={item.to} className="text-sm text-white/70 hover:text-accent inline-flex items-center gap-1.5 group">
                      <span className="w-0 group-hover:w-3 h-px bg-accent transition-all duration-200" />
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold text-white mb-5">Visit Us</h3>
            <ul className="space-y-4 text-sm text-white/70">
              <li className="flex gap-3">
                <MapPin size={18} className="text-accent shrink-0 mt-0.5" />
                <span className="leading-6">NWSSU San Jorge Campus<br />San Jorge, Samar, Philippines</span>
              </li>
              <li className="flex gap-3">
                <Clock size={18} className="text-accent shrink-0 mt-0.5" />
                <span className="leading-6">Monday – Friday<br />8:00 AM – 5:00 PM</span>
              </li>
              <li className="flex gap-3">
                <Mail size={18} className="text-accent shrink-0 mt-0.5" />
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=nwssulibrarysjcampus@gmail.com&su=Inquiry%20from%20NWSSU-SJ%20Library%20Website"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-accent break-all leading-6"
                >
                  nwssulibrarysjcampus@gmail.com
                </a>
              </li>
              <li className="flex gap-3">
                <Phone size={18} className="text-accent shrink-0 mt-0.5" />
                <span className="leading-6">Contact via Messenger or Email</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row gap-4 items-center justify-between text-xs text-white/45">
          <p>© {new Date().getFullYear()} NWSSU San Jorge Campus Library. All rights reserved.</p>
          <p className="tracking-wide">Designed for learning, research, and discovery.</p>
        </div>
      </div>
    </footer>
  )
}
