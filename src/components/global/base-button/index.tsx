'use client'
import React, { memo } from 'react'

import style from './index.module.scss'

interface Props {
  onClick: () => void
  text: string
  className?: string
  children?: React.ReactNode
  icon?: React.ReactNode
  platformIcon?: 'ios' | 'android' | 'both'
}

const Index: React.FC<Props> = props => {
  const { onClick, text = '', className = '', children, icon, platformIcon } = props
  
  const renderPlatformIcon = () => {
    if (!platformIcon) return icon
    
    return (
      <div className='flex items-center gap-1'>
        {(platformIcon === 'ios' || platformIcon === 'both') && (
          <img src='/images/iphone-icon.png' alt='iOS' className='w-[32px] h-[32px] phone:w-[24px] phone:h-[24px]' />
        )}
        {(platformIcon === 'android' || platformIcon === 'both') && (
          <img src='/images/android-icon.png' alt='Android' className='w-[32px] h-[32px] phone:w-[24px] phone:h-[24px]' />
        )}
      </div>
    )
  }
  
  return (
    <div className={`${style['app']} cursor-pointer ${className} `} data-wow-delay='0.6s' onClick={onClick}>
      <span className='flex items-center justify-center gap-2'>
        {renderPlatformIcon()}
        {text}
      </span>
      {children}
    </div>
  )
}

export default memo(Index)
