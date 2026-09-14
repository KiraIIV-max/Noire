import { Link } from 'react-router-dom'

function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="brand" aria-label="NOIRÉ footer brand">
          <span className="brand-mark">N</span>
          <span className="brand-copy">
            <span className="brand-name">NOIRÉ</span>
          </span>
        </div>

        <div className="footer-links">
          <Link to="/menu">Menu</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/reservation">Reservation</Link>
        </div>
        <div className="footer-contact-links">
          <a href="tel:+12125550148">Call us</a>
          <a href="mailto:hello@noire.cafe">Email</a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a>
          <a href="https://facebook.com" target="_blank" rel="noreferrer">Facebook</a>
        </div>
      </div>
    </footer>
  )
}

export default SiteFooter
