'use client'
import React, { memo } from 'react'
import { ICON_TYPE } from './index'

const X: React.FC<Partial<ICON_TYPE>> = props => {
  const { color = '#fff', className = '', width = 32, height = 32, onClick } = props
  return (
    <svg
      className={className}
      onClick={onClick}
      width={width}
      height={height}
      viewBox='0 0 32 32'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g opacity='0.6'>
        <path
          d='M13.5995 8.802C13.4184 8.53493 13.1167 8.375 12.794 8.375H9.14783C8.83544 8.375 8.65025 8.72438 8.8256 8.9829L18.4897 23.2312C18.6708 23.4983 18.9725 23.6582 19.2952 23.6582H22.9414C23.2538 23.6582 23.439 23.3088 23.2636 23.0503L13.5995 8.802Z'
          stroke='black'
          strokeWidth='1.5'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M14.4499 17.4333L8.66895 24'
          stroke='black'
          strokeWidth='1.5'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M22.7571 8L17.3203 14.1756'
          stroke='black'
          strokeWidth='1.5'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </g>
    </svg>
  )
}

export default memo(X)
