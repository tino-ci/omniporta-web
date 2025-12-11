'use client'
import { FunctionComponent, useRef, useEffect, useState } from 'react'
import styles from './index.module.scss'

const RULES = [
  {
    number: '1',
    gradient: 'linear-gradient(180deg, #ffbb46, #ff5e5e)',
    title: 'Period',
    desc: 'From December 9, 2025, 00:00 (UTC) to January 9, 2026, 23:59 (UTC).'
  },
  {
    number: '2',
    gradient: 'linear-gradient(180deg, #2ae3b5, #4880ff)',
    title: 'Eligibility',
    desc: 'Participants must successfully register and download the Omniporta Alpha Version wallet.'
  },
  {
    number: '3',
    gradient: 'linear-gradient(180deg, #5ef7ff, #4649ff)',
    title: 'Rules',
    desc: 'Points are earned by completing designated tasks and will be automatically credited to your account. Points are non-transferable, non-tradable, and cannot be refunded.'
  },
  {
    number: '4',
    gradient: 'linear-gradient(180deg, #c586ff, #1f31fe)',
    title: 'Interpretation',
    desc: 'Omniporta reserves the right to interpret the rules of thisevent and the final disposition of points.'
  }
]

const Part4 = () => {
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

        // 线从第一个数字中心开始，到最后一个数字中心 + 10px 结束
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
        <div className={styles.title}>Activity Rules</div>

        <div className={styles.card} ref={cardRef}>
          <div className={styles['card-line']} style={{ top: lineStyle.top, height: lineStyle.height }} />
          <div className={styles.rules}>
            {RULES.map((rule, index) => (
              <div key={index} className={styles['rule-item']}>
                <div
                  ref={index === 0 ? firstNumberRef : index === RULES.length - 1 ? lastNumberRef : null}
                  className={styles['rule-number']}
                  style={{ background: rule.gradient }}
                >
                  {rule.number}
                </div>
                <div className={styles['rule-content']}>
                  <div className={styles['rule-title']}>{rule.title}</div>
                  <div className={styles['rule-desc']}>{rule.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Part4 as FunctionComponent
