import {
  ArrowRight,
  Clock3,
  Coffee,
  MapPin,
  Sparkles,
  Star,
  Users,
} from 'lucide-react'
import { gsap } from 'gsap'
import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { featureList, menuHighlights, testimonials } from '../data/siteData'

const iconMap = {
  Coffee,
  Sparkles,
  Users,
  Star,
}

function HomePage() {
  const pageRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray('.reveal-up').forEach((element, index) => {
        gsap.fromTo(
          element,
          { autoAlpha: 0, y: 30 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.75,
            ease: 'power2.out',
            delay: index * 0.08,
            scrollTrigger: {
              trigger: element,
              start: 'top 85%',
            },
          },
        )
      })
    }, pageRef)

    return () => ctx.revert()
  }, [])

  return (
    <main ref={pageRef}>
      <section className="section section-cream hero">
        <div className="page hero-grid">
          <div className="hero-copy reveal-up">
            <span className="eyebrow">Neighborhood Premium</span>
            <h1>Coffee made slowly.</h1>
            <p>
              A warm, modern café where carefully roasted coffee, seasonal plates,
              and meaningful conversations come together in a space designed to feel
              like home.
            </p>

            <div className="hero-actions">
              <Link className="button button-primary" to="/menu">
                View menu <ArrowRight size={16} />
              </Link>
              <Link className="button button-secondary" to="/about">
                Our story
              </Link>
            </div>

            <div className="hero-meta">
              <span className="meta-pill">
                <Clock3 size={14} /> Open daily
              </span>
              <span className="meta-pill">
                <MapPin size={14} /> 18 Mercer Street
              </span>
            </div>
          </div>

          <div className="hero-visual reveal-up" aria-label="Coffee bar and café photography">
            <div className="image-card large" />
            <div className="image-card small" />
            <div className="caption-box">
              <strong>Signature</strong>
              <span>Golden Hour Latte</span>
            </div>
          </div>
        </div>

        <div className="page feature-band">
          {featureList.map(({ icon, title, text }, index) => {
            const Icon = iconMap[icon]

            return (
              <div className="feature-item reveal-up" key={title} style={{ animationDelay: `${index * 0.08}s` }}>
                <div className="icon-wrap">
                  <Icon size={18} />
                </div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            )
          })}
        </div>
      </section>

      <section className="section section-cream reveal-up">
        <div className="page story-layout">
          <div className="image-stack">
            <div className="story-photo primary" />
            <div className="story-photo secondary" />
          </div>

          <div className="section-copy">
            <span className="eyebrow">Our philosophy</span>
            <h2>Crafted to feel effortless.</h2>
            <p>
              NOIRÉ blends premium hospitality with a neighborhood pulse. We keep the
              mood calm, the details considered, and each plate intentional — so every visit
              feels elevated without ever feeling formal.
            </p>
            <ul className="check-list">
              <li>
                <span className="checkmark">✓</span> Thoughtful coffee sourcing and house roasting
              </li>
              <li>
                <span className="checkmark">✓</span> Fresh food built around seasonal ingredients
              </li>
              <li>
                <span className="checkmark">✓</span> A welcoming mood for morning rituals and late chats
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section section-dark reveal-up">
        <div className="page split-layout">
          <div className="section-copy">
            <span className="eyebrow">Signature menu</span>
            <h2 className="display-title">The ritual, in one glance.</h2>
            <p className="muted">
              Thoughtful favorites that balance comfort, texture, and a touch of indulgence.
            </p>
          </div>

          <div className="dark-panel">
            <div className="quote-card">
              <p className="quote-text">“Quiet luxury for your daily ritual.”</p>
              <span className="label">Small moments, beautifully served</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-cream reveal-up">
        <div className="page">
          <div className="section-copy">
            <span className="eyebrow">Featured favorites</span>
            <h2>Made for slow mornings.</h2>
          </div>

          <div className="menu-panel">
            {menuHighlights.map((category) => (
              <div key={category.label} className="menu-card reveal-up">
                <span className="menu-label">{category.label}</span>
                {category.items.map((item) => (
                  <div key={item.name} className="menu-item">
                    <img className="menu-item-image" src={item.image} alt={item.name} />
                    <div>
                      <h4>{item.name}</h4>
                      <p>{item.detail}</p>
                    </div>
                    <div className="price">{item.price}</div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-dark reveal-up">
        <div className="page">
          <div className="section-copy">
            <span className="eyebrow">Guest notes</span>
            <h2 className="display-title">Good words from our table.</h2>
          </div>
          <div className="testimonial-grid">
            {testimonials.map(({ quote, author }) => (
              <figure className="testimonial-card" key={author}>
                <blockquote>“{quote}”</blockquote>
                <figcaption>{author}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-cream reveal-up">
        <div className="page">
          <div className="section-copy">
            <span className="eyebrow">Visit us</span>
            <h2>Warm light, good coffee, real conversations.</h2>
          </div>

          <div className="info-grid">
            <div className="info-card reveal-up">
              <h3>Location</h3>
              <p>18 Mercer Street, New York, NY</p>
            </div>
            <div className="info-card reveal-up">
              <h3>Hours</h3>
              <p>Open daily from 7:30 AM.</p>
            </div>
            <div className="info-card reveal-up">
              <h3>Reservations</h3>
              <p>Walk-ins welcome, but booking is recommended on weekends.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default HomePage
