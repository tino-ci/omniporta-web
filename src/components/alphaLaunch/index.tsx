'use client'
import React, { memo } from 'react'

import style from './index.module.scss'
import Part1 from './part1'
import Part2 from './part2'
import Part3 from './part3'
import Part4 from './part4'
import Part5 from './part5'
import useWow from '../home-page/hooks/api/useWow'

interface Props {}

const Index: React.FC<Props> = props => {
  const {} = props
  useWow()
  return (
    <div className={style.app}>
      <Part1 />
      <Part2 />
      <Part3 />
      <Part4 />
      <Part5 />
    </div>
  )
}

export default memo(Index)
