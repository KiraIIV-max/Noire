import { Phone } from 'lucide-react'

function ContactPage() {
  return (
    <main className="page section contact-layout">
      <div className="contact-card">
        <span className="eyebrow">Contact</span>
        <h2>Let’s meet over coffee.</h2>
        <h3>Address</h3>
        <strong>18 Mercer Street, New York, NY</strong>
        <h3>Phone</h3>
        <strong>
          <Phone size={16} /> (212) 555-0148
        </strong>
        <h3>Email</h3>
        <strong>hello@noire.cafe</strong>
        <div className="contact-links">
          <a href="tel:+12125550148">Call us</a>
          <a href="mailto:hello@noire.cafe">Email us</a>
          <a href="https://maps.google.com/?q=18+Mercer+Street+New+York" target="_blank" rel="noreferrer">Open map</a>
        </div>
      </div>

      <div className="map-box">
        <span className="mini-label">Find us in the city</span>
      </div>
    </main>
  )
}

export default ContactPage
