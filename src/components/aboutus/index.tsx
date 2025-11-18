'use client'
import React, { memo } from 'react'
import style from './index.module.scss'
interface Props {}

const Index: React.FC<Props> = props => {
  const {} = props

  return (
    <div className={style.app}>
      <div className='my-[100px]  pc:max-w-contentMaxWidth pc:mx-auto phone:mx-[20px] whitespace-pre-wrap'>{`🚀 `}</div>
    </div>
  )
}

export default memo(Index)
