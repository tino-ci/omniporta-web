'use client'
import React, { memo } from 'react'

import { motion } from 'motion/react'
import { SOCIAL_MEDIA_URL } from '@/constants'
import { DiscordIcon, Email, Facebook, TgIcon, XIcon } from '../svg-icon'

interface Props {
  onClick?: () => void
  text?: string
  classNames?: string
  iconWidth?: any
  iconHeight?: any
  iconColor?: string
}

const Index: React.FC<Props> = props => {
  const { onClick, text = '', classNames = '', iconWidth = 32, iconHeight = 32, iconColor } = props
  const socialList = [
    {
      href: SOCIAL_MEDIA_URL.X,
      target: '_blank',
      icon: <XIcon color={iconColor} width={iconWidth} height={iconHeight} />
    },
    // {
    //   href: SOCIAL_MEDIA_URL.FACEBOOK,
    //   target: '_blank',
    //   icon: <Facebook color={iconColor} width={iconWidth} height={iconHeight} />
    // }
    {
      href: SOCIAL_MEDIA_URL.TG,
      target: '_blank',
      icon: <TgIcon color={iconColor} width={iconWidth} height={iconHeight} />
    },
    {
      href: SOCIAL_MEDIA_URL.DISCORD,
      target: '_blank',
      icon: <DiscordIcon color={iconColor} width={iconWidth} height={iconHeight} />
    }
    // {
    //   href: SOCIAL_MEDIA_URL.EMAIL,
    //   target: '_blank',
    //   icon: <Email color={iconColor} width={iconWidth} height={iconHeight} />
    // }
  ]
  const initialStyle = {
    scale: 1,
    opacity: 1
  }
  const hoverStyle = {
    scale: 1.1,
    opacity: 0.7
  }
  const transition: any = {
    duration: 0.3,
    ease: 'easeInOut'
  }
  return (
    <div className={classNames}>
      {socialList.map((item, index) => (
        <motion.a
          key={index}
          initial={initialStyle}
          whileHover={hoverStyle}
          transition={transition}
          href={item.href}
          target={item.target}
        >
          {item.icon}
        </motion.a>
      ))}
    </div>
  )
}

export default memo(Index)
