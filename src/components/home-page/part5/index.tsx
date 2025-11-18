import React, { memo } from 'react'
import { PATH_KEY } from '@constants/index'
import { useIsMobile } from '@hooks/index'
import PartTitle from '../part-title'
import style from './index.module.scss'

interface Props {}

const Index: React.FC<Props> = props => {
  const isMobile = useIsMobile()

  const featureCards = [
    {
      id: 'asset-list',
      title: 'Native Multi-chain Support',
      description:
        'Your wallet is tied to a unique domain that becomes your digital identity, making it effortless to move between chains, apps, and experiences.',
      type: 'main',
      gradient: 'from-purple-400 via-pink-400 to-orange-400',
      backgroundImage: '4.png'
    },
    {
      id: 'send-receive',
      title: 'Identity Capital',
      description: 'Using the wallet builds identity capital: real on-chain history, behaviour, and reputation.',
      type: 'secondary',
      icon: '/images/part5/assets2-bg.svg'
    },
    {
      id: 'nft-collection',
      title: 'Rewards & Opportunities',
      description: 'Your identity capital gets you more rewarded accurately and personalise opportunities.',
      type: 'secondary',
      icon: '/images/part5/assets3-bg.svg'
    },
    {
      id: 'records-notifications',
      title: 'Activity & Alerts',
      description: 'Track your activities with clear, auditable transaction history & real time alerts.',
      type: 'large',
      icon: '/images/part5/assets4-bg.svg'
    }
  ]

  const {} = props
  return (
    <>
      <div className={style['app']}>
        <PartTitle
          style={{ textAlign: 'center', maxWidth: isMobile ? '365px' : '900px', margin: '0 auto' }}
          title={`The Wallet That Builds Identity Capital`}
        />
        <div className={style['feature-cards']}>
          {featureCards.map(card => (
            <div key={card.id} className={`${style[`card-${card.type}`]} wow animate__animated animate__fadeInUp`}>
              {card.type === 'main' ? (
                <div className={style['main-card']}>
                  <div className={style['main-card-content']}>
                    <div className={style['icon-group']}>
                      <img className={style['icon-img']} src='/images/part5/assets1.svg' alt='' />
                    </div>
                    <h3 className={style['card-title']}>{card.title}</h3>
                    <p className={style['card-description']}>{card.description}</p>
                  </div>
                  <div className={style['main-card-bg']}></div>
                </div>
              ) : card.type === 'large' ? (
                <div className={style['large-card']}>
                  <div className={style['card-content']}>
                    <h3 className={style['card-title']}>{card.title}</h3>
                    <p className={style['card-description']}>{card.description}</p>
                  </div>
                  <div className={style['card-bg']}>
                    <img src={card.icon} alt='' />
                  </div>
                </div>
              ) : (
                <div className={style['secondary-card']}>
                  <div className={style['card-content']}>
                    <h3 className={style['card-title']}>{card.title}</h3>
                    <p className={style['card-description']}>{card.description}</p>
                  </div>
                  <div className={style['card-bg']}>
                    <img src={card.icon} alt='' />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default memo(Index)
