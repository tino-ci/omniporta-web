import React, { memo, useState, useRef, useEffect, useCallback } from 'react'
import style from './index.module.scss'
import { PATH_KEY } from '@constants/index'

import { motion } from 'motion/react'

import { useRouter } from 'next/navigation'
import CarouselLogo from '../carousel-logo'
import { BaseButton } from '@/components/global'
import { useIsMobile } from '@/hooks'
const Index: React.FC = () => {
  const router = useRouter()
  const isMobile = useIsMobile()
  const [isVisible, setIsVisible] = useState(false)
  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  }

  return (
    <div className={style.app} id={PATH_KEY.HOME}>
      {/* 视频背景 */}
      <div className={style['video-bg']}>
        <img className={style['part1-banner']} src='/images/part1/part1-banner.png' alt='' />
        <div className={style['video-linear-mask']}></div>
      </div>

      {/* 页面正文 */}

      <motion.div
        initial='hidden'
        whileInView='visible'
        variants={variants}
        viewport={{ once: false, amount: 0.1 }}
        transition={{ duration: 0.5 }}
        onViewportEnter={() => {
          setIsVisible(true)
        }}
        onViewportLeave={() => {
          setIsVisible(false)
        }}
        className={`${style['part1-content']}`}
      >
        <h1
          className={`${style['part1-title']} ${isVisible ? 'animate__animated animate__fadeInDown' : 'hidden'} `}
          data-wow-delay='0.2s'
        >
          The AI Smart Wallet Powered by Your Identity
        </h1>
        <p
          className={`${style['part1-sub-title']} ${isVisible ? 'animate__animated animate__fadeInUp' : 'hidden'} `}
          data-wow-delay='0.4s'
        >
          Omniporta - The AI-Powered DID Wallet
        </p>
        <p
          className={`${style['part1-desc']} ${isVisible ? 'animate__animated animate__fadeInUp' : 'hidden'} `}
          data-wow-delay='0.4s'
        >
          Your actions become identity capital earning you better access, opportunities, and rewards across every
          ecosystem.
        </p>
        <div className='flex justify-center items-center mt-[72px] phone:mt-[44px]'>
          <BaseButton
            className={`relative pc:h-[65px] pc:text-[24px] pc:w-[340px] phone:text-[12px] phone:h-[40px] phone:w-[150px] rounded-[12px] text-[rgba(255,255,255,0.6)] ${isVisible ? 'animate__animated animate__fadeInUp' : 'hidden'} `}
            data-wow-delay='0.6s'
            onClick={() => {}}
            text={'Download Omniporta'}
          >
            <span
              className={`absolute top-[-13px] right-0 z-[1] text-[rgba(0,0,0,0.8)] font-[500] text-[12px] px-[12px] py-[6px] phone:px-[6px] phone:py-[3px] phone:text-[10px] bg-[rgba(243,246,249,0.7)] rounded-[10px] rounded-bl-[2px]`}
            >
              Coming Soon
            </span>
          </BaseButton>
        </div>
        <div
          className={`flex justify-center items-center text-[16px] phone:text-[12px] mt-[20px] phone:mt-[10px] ${isVisible ? 'animate__animated animate__fadeInUp' : 'hidden'}`}
        >
          Trusted by 100,000+ users
        </div>
      </motion.div>
      {/* <div className={style['carousel-logo-container']}>
        <CarouselLogo />
      </div> */}
    </div>
  )
}

export default memo(Index)
