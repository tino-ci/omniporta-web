'use client'
import React, { memo } from 'react'
import { ICON_TYPE } from './index'

const Email: React.FC<Partial<ICON_TYPE>> = props => {
  const { color = '#fff', className = '', width = 28, height = 28, onClick } = props
  return (
    <svg
      className={className}
      onClick={onClick}
      width={width}
      height={height}
      viewBox='0 0 28 28'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M23 4C24.6569 4 26 5.34315 26 7V21C26 22.6569 24.6569 24 23 24H5C3.34315 24 2 22.6569 2 21V7C2 5.34315 3.34315 4 5 4H23ZM21.6494 10.625C21.4423 10.2663 20.9837 10.1435 20.625 10.3506L14.625 13.8145C14.2382 14.0377 13.7618 14.0377 13.375 13.8145L7.375 10.3506C7.0163 10.1435 6.55771 10.2663 6.35059 10.625C6.14349 10.9837 6.26632 11.4423 6.625 11.6494L12.625 15.1133C13.4759 15.6045 14.5241 15.6045 15.375 15.1133L21.375 11.6494C21.7337 11.4423 21.8565 10.9837 21.6494 10.625Z'
        fill={color}
      />
    </svg>
  )
}

export default memo(Email)
