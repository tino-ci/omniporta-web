import React, { useEffect, useState } from 'react'

interface TypewriterProps {
  text: string
  duration?: number // 毫秒，默认1000ms
}

const Typewriter: React.FC<TypewriterProps> = ({ text, duration = 1000 }) => {
  const [displayed, setDisplayed] = useState('')

  useEffect(() => {
    let i = 0
    const len = text.length
    const interval = duration / len
    setDisplayed('')
    const timer = setInterval(() => {
      i++
      setDisplayed(text.slice(0, i))
      if (i >= len) clearInterval(timer)
    }, interval)
    return () => clearInterval(timer)
  }, [text, duration])

  return <span>{displayed}</span>
}

export default Typewriter
