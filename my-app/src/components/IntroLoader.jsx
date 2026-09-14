import { gsap } from 'gsap'
import { useEffect, useRef, useState } from 'react'

function IntroLoader() {
  const loaderRef = useRef(null)
  const markRef = useRef(null)
  const lineRef = useRef(null)
  const copyRef = useRef(null)
  const [isVisible, setIsVisible] = useState(
    () => typeof window === 'undefined' || !window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  )

  useEffect(() => {
    const loader = loaderRef.current
    const mark = markRef.current
    const line = lineRef.current
    const copy = copyRef.current

    if (!loader || !mark || !line || !copy) {
      return undefined
    }

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (prefersReducedMotion) {
      return undefined
    }

    const timeline = gsap.timeline({
      onComplete: () => setIsVisible(false),
    })

    timeline
      .fromTo(mark, { scale: 0.65, autoAlpha: 0 }, { scale: 1, autoAlpha: 1, duration: 0.8, ease: 'power3.out' })
      .fromTo(copy, { y: 18, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.55, ease: 'power2.out' }, '-=0.35')
      .fromTo(line, { scaleX: 0 }, { scaleX: 1, duration: 0.7, ease: 'power2.inOut' }, '-=0.35')
      .to(copy, { y: -10, autoAlpha: 0, duration: 0.35, ease: 'power2.in' }, '+=0.35')
      .to(mark, { scale: 1.12, autoAlpha: 0, duration: 0.45, ease: 'power2.in' }, '<')
      .to(loader, { clipPath: 'inset(0 0 100% 0)', duration: 0.85, ease: 'power4.inOut' }, '-=0.1')

    return () => timeline.kill()
  }, [])

  if (!isVisible) {
    return null
  }

  return (
    <div ref={loaderRef} className="intro-loader" aria-label="Loading NOIRÉ" role="status">
      <div className="intro-loader-inner">
        <div ref={markRef} className="intro-mark">N</div>
        <div ref={copyRef} className="intro-copy">
          <span>NOIRÉ</span>
          <small>Coffee · Food · Moments</small>
        </div>
        <span ref={lineRef} className="intro-line" />
      </div>
    </div>
  )
}

export default IntroLoader
