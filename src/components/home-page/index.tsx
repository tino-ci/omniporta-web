'use client'
import React, { memo } from 'react'
import useWow from './hooks/api/useWow'
import style from './index.module.scss'
import Part1 from './part1'

import Part5 from './part5'
import Part6 from './part6'
import Part7 from './part7'
import Part8 from './part8'

interface Props {}

const Index: React.FC<Props> = props => {
  const {} = props
  useWow()
  return (
    <div className={style.app}>
      <Part1 />
      <Part5 />
      <Part6 />
      <Part7 />
      <Part8 />
    </div>
  )
}

export default memo(Index)
