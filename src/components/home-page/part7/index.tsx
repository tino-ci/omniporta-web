import React, { memo, useState } from 'react'
import { PATH_KEY } from '@constants/index'
import { useIsMobile } from '@hooks/index'
import PartTitle from '../part-title'
import style from './index.module.scss'

import { motion } from 'motion/react'
import Typewriter from '../typewriter'
import { Assets1, Assets2, Assets3, Assets4 } from '@components/global/svg-icon'
interface Props {}

const Index: React.FC<Props> = props => {
  const isMobile = useIsMobile()
  const [activeIndex, setActiveIndex] = useState<number>(0)
  const featureCards = [
    {
      title: 'Airdrops',
      description: 'Get connected to ecosystem rewards instantly & explore new airdrop opportunities.',
      classes: `${isMobile ? 'animate__fadeInUp' : 'animate__fadeInLeft'} wow animate__animated`,
      delay: isMobile ? '0.2s' : '0.4s',
      icon: Assets1,
      img: '/images/part7/item-bg.png'
    },
    {
      title: 'Stake',
      description:
        'Earn steady, low-risk yield in a few taps, with your wallet handling the execution and optimisation.',
      classes: `${isMobile ? 'animate__fadeInUp' : 'animate__fadeInLeft'} wow animate__animated`,
      delay: isMobile ? '0.2s' : '0.3s',
      icon: Assets2,
      img: '/images/part7/item-bg.png'
    },
    {
      title: 'Swap',
      description: 'Trade tokens fast at ultra-low fees, without switching chains or juggling multiple wallets.',
      classes: `${isMobile ? 'animate__fadeInUp' : 'animate__fadeInLeft'} wow animate__animated`,
      delay: isMobile ? '0.2s' : '0.2s',
      icon: Assets3,
      img: '/images/part7/item-bg.png'
    },
    {
      title: 'Launchpad',
      // description: 'Officially verified, fair launches to help you discover high-potential projects early.',
      description: 'Access verified launches with transparent requirements, clear allocations, and project timelines.',
      classes: `${isMobile ? 'animate__fadeInUp' : 'animate__fadeInLeft'} wow animate__animated`,
      delay: isMobile ? '0.2s' : '0.1s',
      icon: Assets4,
      img: '/images/part7/item-bg.png'
    }
  ]

  const {} = props

  return (
    <>
      <div className={``}>
        <div className={style['app']}>
          <PartTitle
            style={{ textAlign: 'center', maxWidth: isMobile ? '325px' : '900px', margin: '0 auto' }}
            title={`Unlock the Full Power of Your Assets`}
            description={`Airdrops to token launches, you can track, earn rewards and level-up your domain.`}
          />
          <div className={`${style['list-view']} `}>
            {featureCards.map((item, index) => {
              return (
                <div
                  key={index}
                  className={`${item.classes} ${style['item']} ${index === activeIndex ? style['active'] : ''}`}
                  data-wow-delay={item.delay}
                  onMouseEnter={() => {
                    if (!isMobile) {
                      setActiveIndex(index)
                    }
                  }} // 仅鼠标移入时切换激活
                  // 鼠标离开不处理：保持当前激活项
                  style={{
                    width: isMobile ? '100%' : index === activeIndex ? 392 : 185,
                    height: !isMobile ? '318px' : index === activeIndex ? '220px' : '120px',
                    transition: 'width 300ms ease',
                    flexShrink: 0 // 防止被压缩
                  }}
                >
                  {index === activeIndex && (
                    <motion.img
                      className={style['item-img']}
                      src={item.img}
                      alt=''
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                  {isMobile && (
                    <div className={style['item-icon-mobile']}>
                      {index === activeIndex ? (
                        <item.icon width={48} height={48} color='#fff' />
                      ) : (
                        <item.icon width={200} height={200} color='#CDD1E099' />
                      )}
                    </div>
                  )}
                  {!isMobile && (
                    <div className={style['item-icon']}>
                      {index === activeIndex ? <item.icon width={120} height={120} /> : <item.icon color='#000' />}
                    </div>
                  )}

                  <div className={style['item-content']}>
                    <div className={style['item-content-position']}>
                      <div className={style['item-content-title']}>{item.title}</div>
                      <div className={style['item-content-description']}>
                        {/* {item.description} */}
                        {isMobile ? (
                          item.description
                        ) : index === activeIndex ? (
                          <Typewriter text={item.description} />
                        ) : (
                          item.description
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}

export default memo(Index)
