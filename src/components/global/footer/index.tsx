'use client'
import React, { memo } from 'react'
import { Logo } from '@components/global'

import { copyrightText, NAV_LIST, SOCIAL_MEDIA_URL } from '@constants/index'
import Link from 'next/link'
import style from './index.module.scss'

import BaseSocial from '../base-social'
import { usePathname } from 'next/navigation'
import { useIsMobile } from '@/hooks'
interface Props {}

const Index: React.FC<Props> = props => {
  const {} = props
  const handleToSocail = (url: string) => {
    if (!url) return
    window.open(url, '_blank')
  }
  const isMobile = useIsMobile()
  const pathname = usePathname()

  const isAirdrop = pathname === '/airdrop'
  const filterList = ['airdrop', 'agripod']
  const indexNav = NAV_LIST.filter(item => !filterList.includes(item.key))
  const pageNav = NAV_LIST.filter(item => filterList.includes(item.key))
  return (
    <footer className={style['app']}>
      <div className={`${style['app-inner']} `}>
        <div className={style['logo-social']}>
          {/* <Logo width={isMobile ? 166 : 250} height={isMobile ? 32 : 48} color={'#00DA95'} /> */}
          <Logo width={167} height={33} color={'#000'} />
          <div className={`pt-[24px] text-[#000] flex justify-start items-center`}>Follow us on:</div>
          <BaseSocial classNames='mt-[16px] inline-flex gap-x-[32px]' iconColor={'#FFFFFFCC'} />
        </div>
        {/* <div className={style['nav-list']}>
          {indexNav.map(item => (
            <Link key={item.key} href={item.path} target={item.external ? '_blank' : '_self'}>
              {item.name}
            </Link>
          ))}
        </div>
        <div className={style['nav-list']}>
          {pageNav.map(item => (
            <Link key={item.key} href={item.path}>
              {item.name}
            </Link>
          ))}
        </div> */}
      </div>
      <div className={`${style['copyright']}`}>{copyrightText}</div>
    </footer>
  )
}

export default memo(Index)
