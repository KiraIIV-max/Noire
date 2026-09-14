import { Link, NavLink } from 'react-router-dom'
import { navItems } from '../data/siteData'

function SiteHeader() {
  return (
    <header className="topbar">
      <Link className="brand" to="/" aria-label="NOIRÉ home">
        <span className="brand-mark">N</span>
        <span className="brand-copy">
          <span className="brand-name">NOIRÉ</span>
          <span className="brand-tagline">Coffee · Food · Moments</span>
        </span>
      </Link>

      <nav className="main-nav" aria-label="Main navigation">
        {navItems.map(({ label, to }) => (
          <NavLink
            key={to}
            to={to}
            end={to === '/'}
            className={({ isActive }) => ['nav-link', isActive ? 'active' : ''].join(' ')}
          >
            {label}
          </NavLink>
        ))}
      </nav>

      <Link className="button button-primary" to="/reservation">
        Book a table
      </Link>
    </header>
  )
}

export default SiteHeader
