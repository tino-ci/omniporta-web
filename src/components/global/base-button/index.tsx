'use client'
import React, { memo } from 'react'

import style from './index.module.scss'

interface Props {
  onClick: () => void
  text: string
  className?: string
  children?: React.ReactNode
}

const Index: React.FC<Props> = props => {
  const { onClick, text = '', className = '', children } = props
  return (
    <div className={`${style['app']} cursor-pointer ${className} `} data-wow-delay='0.6s' onClick={onClick}>
      <span>{text}</span>
      {children}
    </div>
  )
}

export default memo(Index)
