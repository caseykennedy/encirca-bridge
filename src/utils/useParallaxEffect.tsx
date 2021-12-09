// useParallaxEffect

import { useEffect, useState, useCallback } from 'react'

// ___________________________________________________________________

const isBrowser = typeof window !== 'undefined'

const useParallaxEffect = (speed = 2) => {
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const setFromEvent = useCallback(
    (e: any) => {
      const xAxis = (window.innerWidth - e.clientX * speed) / 90
      const yAxis = (window.innerHeight - e.clientY * speed) / 90
      setPosition({ x: xAxis, y: yAxis })
    },
    [speed],
  )

  useEffect(() => {
    window.addEventListener('mousemove', setFromEvent)
    return () => {
      window.removeEventListener('mousemove', setFromEvent)
    }
  }, [setFromEvent])

  return position
}

export default useParallaxEffect
