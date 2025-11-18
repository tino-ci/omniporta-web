import React, { memo, useEffect, useRef, useState } from 'react'

import style from './index.module.scss'

import { useIsMobile } from '@hooks/index'
import useEmblaCarousel, { UseEmblaCarouselType } from 'embla-carousel-react'
import AutoScroll from 'embla-carousel-auto-scroll'

interface Props {}

const Index: React.FC<Props> = props => {
  const isMobile = useIsMobile()
  const emblaRef = useRef<HTMLDivElement>(null)
  const autoScrollRef = useRef(
    AutoScroll({
      speed: 1, // 每帧滚动像素数（1 = 慢，2 = 快）
      stopOnInteraction: false,
      playOnInit: true,
      direction: 'forward',
      startDelay: 0
    })
  )
  const [isInitialized, setIsInitialized] = useState(false)

  // Preload images
  useEffect(() => {
    logoList.forEach(logo => {
      const img = new Image()
      img.src = logo.src
      img.onerror = () => console.error(`Failed to load image: ${logo.src}`)
    })
  }, [])

  // Initialize Embla Carousel
  const [viewportRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: 'start',
      dragFree: true,
      containScroll: 'trimSnaps'
    },
    [autoScrollRef.current]
  ) as UseEmblaCarouselType

  // Handle initialization
  useEffect(() => {
    if (!emblaRef.current) {
      return
    }

    if (!emblaApi) {
      return
    }

    if (!isInitialized && autoScrollRef.current) {
      try {
        if (!autoScrollRef.current.isPlaying()) {
          autoScrollRef.current.play()
          setIsInitialized(true)
        }
      } catch (error) {
        console.error('Failed to start auto scroll:', error)
      }
    }

    return () => {
      if (autoScrollRef.current) {
        try {
          autoScrollRef.current.stop()
        } catch (error) {
          console.error('Failed to stop auto scroll:', error)
        }
      }
    }
  }, [emblaApi, isInitialized])
  const logoList = [
    {
      src: '/images/part1/logoIcon-1.png',
      width: isMobile ? 80 : 80,
      height: isMobile ? 24 : 24
    },
    {
      src: '/images/part1/logoIcon-2.png',
      width: isMobile ? 34 : 34,
      height: isMobile ? 24 : 24
    },
    {
      src: '/images/part1/logoIcon-3.png',
      width: isMobile ? 98 : 98,
      height: isMobile ? 24 : 24
    },
    {
      src: '/images/part1/logoIcon-4.png',
      width: isMobile ? 66 : 66,
      height: isMobile ? 24 : 24
    },
    {
      src: '/images/part1/logoIcon-5.png',
      width: isMobile ? 77 : 77,
      height: isMobile ? 24 : 24
    },
    {
      src: '/images/part1/logoIcon-6.png',
      width: isMobile ? 63 : 63,
      height: isMobile ? 24 : 24
    },
    {
      src: '/images/part1/logoIcon-7.png',
      width: isMobile ? 77 : 77,
      height: isMobile ? 24 : 24
    },
    {
      src: '/images/part1/logoIcon-8.png',
      width: isMobile ? 52 : 52,
      height: isMobile ? 24 : 24
    }
  ]

  const {} = props
  return (
    <>
      <div className={`${style['app-view']}`}>
        <div className={style['app']}>
          <div className={` ${style['animate-view']} wow animate__animated animate__fadeInUp`}>
            <div className={style['embla']} ref={viewportRef}>
              <div className={style['animate-marquee']}>
                {logoList.map((logo, idx) => (
                  <div key={idx} className='flex-none leading-[24px] mx-[28px] '>
                    <img
                      src={logo.src}
                      width={logo.width}
                      height={logo.height}
                      alt={`logo-${idx}`}
                      draggable={false}
                      loading='eager'
                    />
                  </div>
                ))}
                {logoList.map((logo, idx) => (
                  <div key={idx} className='flex-none leading-[24px] mx-[28px] '>
                    <img
                      src={logo.src}
                      width={logo.width}
                      height={logo.height}
                      alt={`logo-${idx}`}
                      draggable={false}
                      loading='eager'
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default memo(Index)
