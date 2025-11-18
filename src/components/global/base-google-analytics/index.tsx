'use client'
import React, { memo, useState, useEffect } from 'react'
import { GoogleAnalytics } from '@next/third-parties/google'

interface Props {}

const Index: React.FC<Props> = props => {
  const {} = props
  const [isProd, setIsProd] = useState(false)
  useEffect(() => {
    const { origin } = window.location
    if (origin === process.env.NEXT_PUBLIC_BASE_URL) {
      setIsProd(true)
    } else {
      setIsProd(false)
    }
  }, [])
  return isProd && <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID as string} />
}

export default memo(Index)
