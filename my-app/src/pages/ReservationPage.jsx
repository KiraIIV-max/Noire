import { useState } from 'react'
import { hours } from '../data/siteData'

function ReservationPage() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event) {
    event.preventDefault()
    setSubmitted(true)
    event.currentTarget.reset()
  }

  return (
    <main className="page section reservation-layout">
      <div className="section-copy">
        <span className="eyebrow">Reservation</span>
        <h2>Save your table.</h2>
        <p>
          We welcome walk-ins throughout the day, but reservations are recommended for weekend
          brunch and evening gatherings.
        </p>

        <div className="schedule-card">
          <h3 className="schedule-heading">Opening hours</h3>
          <ul className="schedule-list">
            {hours.map(({ day, time }) => (
              <li key={day}>
                <strong>{day}</strong>
                <span>{time}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="form-panel">
        <form onSubmit={handleSubmit}>
          <div className="form-grid">
            <div className="field">
              <label htmlFor="name">Name</label>
              <input id="name" name="name" type="text" placeholder="Your name" required />
            </div>
            <div className="field">
              <label htmlFor="phone">Phone</label>
              <input id="phone" name="phone" type="tel" placeholder="(555) 000-0000" required pattern="[0-9+() .-]{7,}" />
            </div>
            <div className="field">
              <label htmlFor="date">Date</label>
              <input id="date" name="date" type="date" min={new Date().toISOString().split('T')[0]} required />
            </div>
            <div className="field">
              <label htmlFor="time">Time</label>
              <select id="time" name="time" required defaultValue="">
                <option value="" disabled>Select a time</option>
                <option>7:30 PM</option>
                <option>8:00 PM</option>
                <option>8:30 PM</option>
                <option>9:00 PM</option>
              </select>
            </div>
            <div className="field full">
              <label htmlFor="guests">Guests</label>
              <input id="guests" name="guests" type="number" min="1" max="12" defaultValue="2" required />
            </div>
            <div className="field full">
              <label htmlFor="notes">Notes</label>
              <textarea id="notes" name="notes" rows="5" placeholder="Allergies, celebration, or seating preference" />
            </div>
          </div>

          <button className="button button-primary" type="submit">
            Request reservation
          </button>
          {submitted && <p className="form-success" role="status">Thank you. Your reservation request has been received.</p>}
        </form>
      </div>
    </main>
  )
}

export default ReservationPage
