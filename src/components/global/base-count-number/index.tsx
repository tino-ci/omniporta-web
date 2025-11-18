/**
 * @description 数字滚动
 *
 */
import React, { memo } from 'react'
import CountUp from 'react-countup'

type Props = {
  start: number
  end: number | string
  duration?: number
  decimal?: ','
  children?: React.ReactNode
  decimals?: number
}

const Index: React.FC<Props> = props => {
  const { start = 0, end = 0, duration = 2, decimal, children, decimals = 0 } = props
  return (
    <>
      <CountUp start={start} end={end as number} duration={duration} decimal={decimal} decimals={decimals} />
      {children}
    </>
  )
}

export default memo(Index)
