'use client'
import React, { memo } from 'react'
import { ICON_TYPE } from './index'

const X: React.FC<Partial<ICON_TYPE>> = props => {
  const { color = '#000', className = '', width = 32, height = 32, onClick } = props
  return (
    <svg
      className={className}
      onClick={onClick}
      width={width}
      height={height}
      viewBox='0 0 48 48'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M33.2019 9.2312H38.1087L27.3887 21.4836L40 38.1562H30.1254L22.3913 28.0443L13.5417 38.1562H8.6319L20.0981 25.051L8 9.2312H18.1252L25.1162 18.4739L33.2019 9.2312ZM31.4797 35.2192H34.1987L16.6478 12.0139H13.7301L31.4797 35.2192Z'
        fill={color}
      />
    </svg>
  )
}

export default memo(X)
