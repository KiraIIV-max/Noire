import { gsap } from 'gsap'
import { useEffect, useRef } from 'react'
import { menuHighlights } from '../data/siteData'

function MenuPage() {
  const pageRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray('.menu-card-reveal').forEach((element, index) => {
        gsap.fromTo(
          element,
          { autoAlpha: 0, y: 26 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.75,
            ease: 'power2.out',
            delay: index * 0.1,
            scrollTrigger: {
              trigger: element,
              start: 'top 88%',
            },
          },
        )
      })
    }, pageRef)

    return () => ctx.revert()
  }, [])

  return (
    <main ref={pageRef} className="page section">
      <div className="section-copy reveal-up">
        <span className="eyebrow">Menu</span>
        <h2>Curated for the everyday ritual.</h2>
      </div>

      <div className="menu-panel">
        {menuHighlights.map((category, index) => (
          <div key={category.label} className="menu-card menu-card-reveal" style={{ animationDelay: `${index * 0.1}s` }}>
            <span className="menu-label">{category.label}</span>
            <img className="menu-category-image" src={category.image} alt={`${category.label} selection`} />
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
    </main>
  )
}

export default MenuPage
