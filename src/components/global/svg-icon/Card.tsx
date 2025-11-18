'use client'
import React, { memo } from 'react'

interface Props {
  width?: number
  height?: number
}

const Index: React.FC<Partial<Props>> = props => {
  const { width = 48, height = 48 } = props
  return (
    <svg width={width} height={height} viewBox='0 0 48 48' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M9.42753 31.5116C9.64685 31.7547 10.0239 31.7541 10.2554 31.5227L32.5977 9.18612C32.8291 8.95461 32.8301 8.57808 32.5896 8.35598C31.0061 6.89433 29.1056 5.8125 26.8768 5.8125H26.8748C24.8986 5.8125 23.0272 6.6425 21.462 8.20962L9.27102 20.3849C5.91149 23.7647 6.46953 28.2329 9.42753 31.5116Z'
        fill='url(#paint0_linear_1_229)'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M27.7379 31.1641L24.1452 34.743C23.8567 35.0296 23.4772 35.1738 23.0998 35.1738C22.7184 35.1738 22.3389 35.0296 22.0504 34.7391C21.4714 34.1581 21.4734 33.2194 22.0544 32.6423L25.6451 29.0654C26.2261 28.4884 27.1648 28.4884 27.7419 29.0674C28.3189 29.6484 28.3169 30.5871 27.7379 31.1641ZM41.1029 39.7981H30.2083C29.6801 39.7981 29.4157 39.1596 29.789 38.7861L40.9171 27.6544C42.5534 26.026 43.3775 24.0716 43.3024 22.0025C43.2312 20.0007 42.3222 18.066 40.6741 16.4119L35.5342 11.2812C35.3026 11.05 34.9275 11.0502 34.6961 11.2815L12.3514 33.6206C12.1199 33.852 12.1198 34.2272 12.3502 34.4596C13.7684 35.8912 15.1667 37.3546 16.6165 38.7553C17.0048 39.1306 16.7418 39.7981 16.2018 39.7981H6.74875C5.9306 39.7981 5.2666 40.4621 5.2666 41.2803C5.2666 42.0984 5.9306 42.7624 6.74875 42.7624H41.1029C41.921 42.7624 42.585 42.0984 42.585 41.2803C42.585 40.4621 41.921 39.7981 41.1029 39.7981Z'
        fill='url(#paint1_linear_1_229)'
      />
      <defs>
        <linearGradient
          id='paint0_linear_1_229'
          x1='19.8716'
          y1='5.8125'
          x2='19.8716'
          y2='31.6951'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#54E0FF' />
          <stop offset='1' stopColor='#0076FF' />
        </linearGradient>
        <linearGradient
          id='paint1_linear_1_229'
          x1='24.2868'
          y1='11.1079'
          x2='24.2868'
          y2='42.7624'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#54E0FF' />
          <stop offset='1' stopColor='#0076FF' />
        </linearGradient>
      </defs>
    </svg>
  )
}

export default memo(Index)
