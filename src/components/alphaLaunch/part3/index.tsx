import { FunctionComponent } from 'react'
import styles from './index.module.scss'
import BaseSocial from '@/components/global/base-social'
import { useIsMobile } from '@/hooks'

const Part3 = () => {
  const isMobile = useIsMobile()
  return (
    <div className={styles.app}>
      <div className={styles.container}>
        {/* 标题 */}
        <div className={styles.title}>About the Points</div>

        {/* 卡片区域 */}
        <div className={styles.cards}>
          {/* 左侧两个卡片 */}
          <div className={styles['left-cards']}>
            {/* Task Levels */}
            <div className={styles['card-task']}>
              <img src='/images/part3/icon-task.png' alt='' className={styles['card-icon']} />
              <div className={styles['card-content']}>
                <div className={styles['card-title']}>Task Levels</div>
                <div className={styles['card-desc']}>
                  Tasks are divided into different levels.
                  <br />
                  The higher the difficulty, the more points you can earn upon completion.
                </div>
              </div>
            </div>

            {/* Points Value */}
            <div className={styles['card-points']}>
              <img src='/images/part3/icon-points.png' alt='' className={styles['card-icon']} />
              <div className={styles['card-content']}>
                <div className={styles['card-title']}>Points Value</div>
                <div className={styles['card-desc']}>
                  All accumulated points will determine your weight for future airdrops and ecosystem benefits.
                </div>
              </div>
            </div>
          </div>

          {/* Details & Updates */}
          <div className={styles['card-details']}>
            <img src='/images/part3/icon-details.png' alt='' className={styles['card-icon']} />
            <div className={styles['card-content']}>
              <div className={styles['card-title']}>Details & Updates</div>
              <div className={styles['card-desc']}>
                For more task details, leaderboard updates, and other announcements, please stay tuned to the official
                community channels.
              </div>
            </div>
            <div className={styles['social-icons']}>
              <BaseSocial
                classNames='grid grid-cols-3 gap-x-[24px] phone:gap-x-[16px]'
                iconColor={'#FFFFFF'}
                iconWidth={isMobile ? 24 : 48}
                iconHeight={isMobile ? 24 : 48}
              />

              {/* <img src='/images/part3/social-1.png' alt='' className={styles['social-icon']} />
              <img src='/images/part3/social-2.png' alt='' className={styles['social-icon']} />
              <img src='/images/part3/social-3.png' alt='' className={styles['social-icon']} /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Part3 as FunctionComponent
