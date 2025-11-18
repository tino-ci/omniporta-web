'use client'

import React, { useEffect, useRef } from 'react'
import Lottie, { type LottieRefCurrentProps } from 'lottie-react'
import rotationAnimation from './animations/bg-rotation-dark.json'

const Index = () => {
  const lottieRef = useRef<LottieRefCurrentProps | null>(null)

  useEffect(() => {
    lottieRef.current?.setSpeed(0.25)
  }, [])

  return (
    <div>
      <Lottie
        loop={true}
        autoplay={true}
        lottieRef={lottieRef}
        style={{ width: '100%', height: '100%' }}
        animationData={rotationAnimation}
      />
    </div>
  )
}

export default Index
