import { FunctionComponent } from 'react'
import { BaseButton } from '@/components/global'
import styles from './index.module.scss'

const Content = () => {
  return (
    <div className={styles.app}>
      {/* 背景图 */}
      <div className={styles['video-bg']}>
        <img src='/images/part1/part1-bg.png' alt='background' className={styles['part1-banner']} />
      </div>

      {/* 正文内容 */}
      <div className={styles['part1-content']}>
        <h1 className={styles['part1-title']}>
          <span className='text-transparent !bg-clip-text [background:linear-gradient(89.97deg,_#498efb,_#bc54ef_27.67%,_#ff4c87_51.92%,_#ffd174_60.39%,_#fff27c_74.73%,_#ffb31c_96.1%),_#000] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] '>
            Omniporta Alpha Launch
          </span>
        </h1>
        <p className={styles['part1-sub-title']}>Join the Test, Earn Points, and Unlock Future Benefits</p>
        <p className={styles['part1-desc']}>
          Alpha Launch is here! Participate in tasks, activities and provide feedback to earn points for future airdrops
          and benefits.
        </p>
        <div className='flex justify-center items-center pc:mt-[32px] phone:mt-[20px]'>
          <BaseButton
            className='relative pc:h-[48px] pc:text-[16px] pc:w-[226px] phone:text-[14px] phone:h-[42px] phone:w-[180px] rounded-full '
            onClick={() => {
              window.open('https://omniporta.com/download/omniporta.apk', '_blank')
            }}
            text='Download Omniporta'
          ></BaseButton>
        </div>
      </div>
    </div>
  )
}

export default Content as FunctionComponent
