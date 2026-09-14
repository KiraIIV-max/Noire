import { gsap } from 'gsap'
import { useEffect, useRef } from 'react'
import { galleryImages } from '../data/siteData'

function GalleryPage() {
  const pageRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray('.gallery-card-reveal').forEach((element, index) => {
        gsap.fromTo(
          element,
          { autoAlpha: 0, y: 30, scale: 0.96 },
          {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            ease: 'power2.out',
            delay: index * 0.08,
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
        <span className="eyebrow">Gallery</span>
        <h2>Scenes from the rhythm of the room.</h2>
      </div>

      <div className="gallery-grid">
        {galleryImages.map((label, index) => (
          <div className="gallery-card gallery-card-reveal" key={label} style={{ animationDelay: `${index * 0.08}s` }}>
            <span className="gallery-tag">{label}</span>
          </div>
        ))}
      </div>
    </main>
  )
}

export default GalleryPage
