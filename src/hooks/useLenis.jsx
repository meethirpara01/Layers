import { useEffect } from 'react'
import Lenis from '@studio-freight/lenis'
import { useLocation } from 'react-router-dom'

export const useLenis = () => {
  const location = useLocation()

  useEffect(() => {
    const lenis = new Lenis({
      smooth: true,
      lerp: 0.1,
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)

    // cleanup on unmount
    return () => {
      lenis.destroy()
    }
  }, [])

  // scroll to top when route changes
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location])
}
