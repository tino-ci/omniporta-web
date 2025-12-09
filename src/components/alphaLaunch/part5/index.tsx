'use client'
import { FunctionComponent, useState } from 'react'
import styles from './index.module.scss'

const FAQ_LIST = [
  {
    question: 'Q1: Where is the Alpha version available to download for iOS and Android?',
    answer:
      'The Omniporta Alpha app is currently available only on Android. We are working hard to bring it to iOS soon.'
  },
  {
    question: 'Q2: How to Earn Omniporta Points?',
    answer:
      'The only way to earn points is by completing designated tasks in the "Activity Center" within the Omniporta Alpha Version Wallet. Points will be credited automatically and in real time upon task completion.'
  },
  {
    question: 'Q3: What Are Omniporta Points Used For?',
    answer:
      'Points serve as a record of your contributions during this period. All points will be accumulated and will determine your core eligibility and weight for future token airdrops.'
  },
  {
    question: 'Q4: How Are Tasks Verified as Completed?',
    answer: 'The system will automatically verify task completion.'
  },
  {
    question: 'Q5: Are There Extra Rewards?',
    answer:
      'Yes. We have weekly and overall points leaderboards. Top-ranking users can receive additional rewards from Omniporta points, the USDT prize pool or earn exclusive NFTs. Detailed rules and updates will be announced in the official community channels.'
  },
  {
    question: 'Q6: How to Report Issues?',
    answer:
      'You are welcome to provide feedback through our official Discord or Telegram communities by contacting an admin or using the help.'
  }
]

const Part5 = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className={styles.app}>
      <div className={styles.container}>
        <div className={styles.title}>FAQ</div>

        <div className={styles['faq-list']}>
          {FAQ_LIST.map((item, index) => (
            <div
              key={index}
              className={`${styles['faq-item']} ${openIndex === index ? styles.active : ''}`}
              onClick={() => toggleItem(index)}
            >
              <div className={styles['faq-header']}>
                <div className={styles['faq-question']}>{item.question}</div>
                <img
                  src={openIndex === index ? '/images/part5/minus-circle.png' : '/images/part5/plus-circle.png'}
                  alt=''
                  className={styles['faq-icon']}
                />
              </div>
              {openIndex === index && <div className={styles['faq-answer']}>{item.answer}</div>}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Part5 as FunctionComponent
