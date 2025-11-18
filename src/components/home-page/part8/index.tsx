import React, { memo } from 'react'
import { PATH_KEY } from '@constants/index'
import { useIsMobile } from '@hooks/index'
import PartTitle from '../part-title'
import style from './index.module.scss'
import { Protection1, Protection2, Protection3, Protection4 } from '@components/global/svg-icon'

interface Props {}

const Index: React.FC<Props> = props => {
  const isMobile = useIsMobile()

  const Cards = [
    {
      id: 1,
      title: 'Full Visibility',
      description: 'See everything from potential fees to risks on transactions before you approve.',
      icon: Protection1,
      isMain: true,
      bgImage: '/images/part8/card-bg-1.png'
    },
    {
      id: 2,
      title: 'Self-custody',
      description: 'This means only you controls your funds, we never have access.',
      icon: Protection2,
      isMain: false,
      bgImage: '/images/part8/card-bg-2.png'
    },
    {
      id: 3,
      title: 'Audit',
      description: 'Independently reviewed by leading blockchain security auditors.',
      icon: Protection3,
      isMain: false,
      bgImage: '/images/part8/card-bg-3.png'
    },
    {
      id: 4,
      title: '24/7 Support',
      description: 'Our support team is available 24/7 for assistance and incident updates.',
      icon: Protection4,
      isMain: false,
      bgImage: '/images/part8/card-bg-4.png'
    }
  ]

  const {} = props
  return (
    <>
      <div className={style['app']} id={PATH_KEY.SUPPORT}>
        <PartTitle
          style={{ textAlign: 'center', maxWidth: isMobile ? '365px' : '900px', margin: '0 auto' }}
          title={`Security as a Priority`}
          description={`Non-Custodial Keys, Smart Guardrails, Independent Audits and 24/7 Expert Support.`}
        />
        <div className={`${style['feature-cards']} wow animate__animated animate__fadeInUp`}>
          {Cards.map((item, index) => (
            <div key={item.id} className={style['card']}>
              <div className={style['card-content']}>
                <div className={style['card-icon']}>
                  {!isMobile ? (
                    <item.icon width={24} height={24} />
                  ) : (
                    <item.icon
                      width={index === 0 ? 24 : 18}
                      height={index === 0 ? 24 : 18}
                      color={index === 0 ? '#FF638E' : '#000'}
                    />
                  )}
                </div>
                <div className={style['card-title']}>{item.title}</div>
                <div className={style['card-description']}>{item.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default memo(Index)
