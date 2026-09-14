function AboutPage() {
  return (
    <main className="page section">
      <div className="story-layout">
        <div className="image-stack">
          <div className="story-photo primary" />
          <div className="story-photo secondary" />
        </div>

        <div className="section-copy">
          <span className="eyebrow">About NOIRÉ</span>
          <h2>Neighborhood premium, built with warmth.</h2>
          <p>
            NOIRÉ began with a simple idea: coffee and food can be refined without ever losing
            the feeling of belonging. We source coffees with character, partner with local makers,
            and design every detail around clarity, comfort, and ease.
          </p>
          <p>
            Our space is intentionally calm — a place to pause, meet, and linger. From the first
            pour to the last bite, we strive to make each guest feel welcomed as if they were part
            of the neighborhood itself.
          </p>
        </div>
      </div>

      <div className="info-grid">
        <div className="info-card">
          <h3>Premium</h3>
          <p>Slow coffee, quality ingredients, and elevated details without pretension.</p>
        </div>
        <div className="info-card">
          <h3>Warm</h3>
          <p>Soft materials, candlelight, and a room that always feels inviting.</p>
        </div>
        <div className="info-card">
          <h3>Community</h3>
          <p>Built for morning rituals, midday resets, and long conversations after sunset.</p>
        </div>
      </div>
    </main>
  )
}

export default AboutPage
