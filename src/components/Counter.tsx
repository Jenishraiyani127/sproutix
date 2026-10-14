import { animate, useInView } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

interface CounterProps {
  value: number
  suffix?: string
  decimals?: number
}

/** Counts up from 0 once it scrolls into view. */
export function Counter({ value, suffix = '', decimals = 0 }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!inView) return
    const controls = animate(0, value, { duration: 1.8, ease: 'easeOut', onUpdate: setDisplay })
    return () => controls.stop()
  }, [inView, value])

  return (
    <span ref={ref}>
      {display.toFixed(decimals)}
      {suffix}
    </span>
  )
}
