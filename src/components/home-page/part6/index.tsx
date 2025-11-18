import React, { memo } from 'react'
import { PATH_KEY } from '@constants/index'
import { useIsMobile } from '@hooks/index'
import PartTitle from '../part-title'
import style from './index.module.scss'
import { Game, Ticket, Bag, Card } from '@components/global/svg-icon'

interface Props {}

const Index: React.FC<Props> = props => {
  const isMobile = useIsMobile()

  const cardsData = [
    {
      id: 1,
      title: 'Entertainment',
      description: 'On-chain payments for streaming, gaming and subscriptions without the hassle of sign-ups.',
      icon: Game,
      bgColor: 'bg-gradient-to-br from-orange-100 to-yellow-100',
      iconBg: 'bg-orange-500',
      bgImg: '/images/part6/card-bg-1.png'
    },
    {
      id: 2,
      title: 'Web3 Life',
      description: 'Any Payment. Zero Friction.',
      icon: null,
      bgColor: 'bg-gradient-to-br from-orange-400 to-red-500',
      iconBg: '',
      isCenter: true,
      bgImg: '/images/part6/card-bg-2.png'
    },
    {
      id: 3,
      title: 'Travel',
      description: 'Settle bookings on-chain with a single transaction, avoiding middlemen and unnecessary fees.',
      icon: Ticket,
      bgColor: 'bg-gradient-to-br from-blue-100 to-cyan-100',
      iconBg: 'bg-blue-500',
      bgImg: '/images/part6/card-bg-3.png'
    },
    {
      id: 4,
      title: 'Shopping',
      description:
        'Shop globally with low costs, on-chain receipts that unlock perks and proof of purchase wherever you go.',
      icon: Bag,
      bgColor: 'bg-gradient-to-br from-purple-100 to-pink-100',
      iconBg: 'bg-purple-500',
      bgImg: '/images/part6/card-bg-4.png'
    },
    {
      id: 5,
      title: 'Dining',
      description: 'Instant crypto settlement at partner merchants, ensuring maximum speed and data privacy.',
      icon: Card,
      bgColor: 'bg-gradient-to-br from-blue-100 to-indigo-100',
      iconBg: 'bg-blue-600',
      bgImg: '/images/part6/card-bg-5.png'
    }
  ]

  const {} = props
  return (
    <>
      <div className={style['app']} id={PATH_KEY.KEY_FEATURES}>
        <PartTitle
          style={{ textAlign: 'center', maxWidth: isMobile ? '365px' : '900px', margin: '0 auto' }}
          title={`Seamless Payments Across Web3`}
          description={`Use Your Domain to Pay Instantly: Experience Fast, Low-Fee, Borderless Transactions Everywhere.`}
        />
        <div className={`${style['cards']} wow animate__animated animate__fadeInUp`}>
          {cardsData.map(card => (
            <div
              key={card.id}
              className={`${style['card']} ${card.isCenter ? style['card-center'] : style['card-normal']}`}
              style={card.bgImg ? { backgroundImage: `url(${card.bgImg})` } : {}}
            >
              {card.isCenter ? (
                <div className={style['center-content']}>
                  <h2 className={style['center-title']}>{card.title}</h2>
                  <p className={style['center-description']}>{card.description}</p>
                </div>
              ) : (
                <>
                  <div className={style['card-icon']}>{card.icon && <card.icon />}</div>
                  <div className={style['card-content']}>
                    <div className={style['card-view']}>
                      <h3 className={style['card-title']}>{card.title}</h3>
                      <p className={style['card-description']}>{card.description}</p>
                    </div>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default memo(Index)
