'use client'
import { FunctionComponent, useRef, useEffect, useState } from 'react'
import styles from './index.module.scss'

const STEPS = [
  {
    number: '1',
    gradient: 'linear-gradient(180deg, #ffbb46, #ff5e5e)',
    title: 'Register and Download',
    desc: 'Visit the Omniporta official website to register and download the Omniporta Alpha Version wallet.'
  },
  {
    number: '2',
    gradient: 'linear-gradient(180deg, #2ae3b5, #4880ff)',
    title: 'Complete Tasks',
    desc: 'After logging in, go to the Activity Center to claim tasks. Complete them to earn points automatically.'
  },
  {
    number: '3',
    gradient: 'linear-gradient(180deg, #5e9cff, #8446ff)',
    title: 'Accumulate points',
    desc: 'Your total points will determine your eligibility and weight for future airdrops and ecosystem benefits which accumulate automatically. The more points you earn, the greater the rewards you can unlock.'
  }
]

const Part2 = () => {
  const cardRef = useRef<HTMLDivElement>(null)
  const firstNumberRef = useRef<HTMLDivElement>(null)
  const lastNumberRef = useRef<HTMLDivElement>(null)
  const [lineStyle, setLineStyle] = useState({ top: 0, height: 0 })

  useEffect(() => {
    const updateLinePosition = () => {
      if (cardRef.current && firstNumberRef.current && lastNumberRef.current) {
        const cardRect = cardRef.current.getBoundingClientRect()
        const firstRect = firstNumberRef.current.getBoundingClientRect()
        const lastRect = lastNumberRef.current.getBoundingClientRect()

        const top = firstRect.top - cardRect.top + firstRect.height / 2
        const bottom = lastRect.top - cardRect.top + lastRect.height / 2 + 10
        setLineStyle({ top, height: bottom - top })
      }
    }

    updateLinePosition()
    window.addEventListener('resize', updateLinePosition)
    return () => window.removeEventListener('resize', updateLinePosition)
  }, [])

  return (
    <div className={styles.app}>
      <div className={styles.container}>
        {/* 上方两个卡片 */}
        <div className={styles['top-cards']}>
          {/* What You Need to Do */}
          <div className={styles['card-need']}>
            <div className={styles['card-title']}>What You Need to Do</div>
            <div className={styles['card-desc']}>
              Register an Omniporta Alpha Version wallet and complete a series of tasks.
            </div>
          </div>

          {/* What You Can Get */}
          <div className={styles['card-get']}>
            <div className={styles['card-title']}>What You Can Get</div>
            <div className={styles['card-desc']}>
              Earn points instantly for every task you complete.
              <br className='pc:block phone:hidden' />
              All points will be accumulated and will help unlock future airdrop eligibility and ecosystem benefits.
            </div>
          </div>
        </div>

        {/* How to Participate */}
        <div className={styles['card-participate']} ref={cardRef}>
          <div className='absolute pc:right-[-130px] pc:top-[47px] right-[-37px] top-[10px] pc:w-[390px] pc:h-[390px] w-[156px] h-[156px]'>
            <img className='w-full h-full' src='/images/part2/web01_icon_bg.png' />
          </div>
          <div className={styles['participate-title']}>How to Participate</div>
          <div className={styles['participate-line']} style={{ top: lineStyle.top, height: lineStyle.height }} />
          <div className={styles['steps']}>
            {STEPS.map((step, index) => (
              <div key={index} className={styles['step-item']}>
                <div
                  ref={index === 0 ? firstNumberRef : index === STEPS.length - 1 ? lastNumberRef : null}
                  className={styles['step-number']}
                  style={{ background: step.gradient }}
                >
                  {step.number}
                </div>
                <div className={styles['step-content']}>
                  <div className={styles['step-title']}>{step.title}</div>
                  <div className={styles['step-desc']}>{step.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Part2 as FunctionComponent
