'use client'
import React, { memo, useState, useEffect } from 'react'
import Link from 'next/link'
import clsx from 'clsx'
import { BaseButton, Logo } from '@components/global'
import { useIsMobile, useHideOnScroll, useHeaderColorBasedOnSections } from '@hooks/index'
import { NAV_LIST, SOCIAL_MEDIA_URL, PATH_KEY, type NAV_TYPE, copyrightText } from '@constants/common'

import style from './index.module.scss'

import BaseSocial from '../base-social'
import { CloseIcon, MenuIcon } from '../svg-icon'
import Drawer from '@mui/material/Drawer'
import { usePathname } from 'next/navigation'
import { motion } from 'motion/react'

interface Props {}

const Index: React.FC<Props> = props => {
  const {} = props
  const isLightText = useHeaderColorBasedOnSections([PATH_KEY.KEY_FEATURES])
  const isMobile = useIsMobile()
  const [activeKey, setActiveKey] = useState<string>('')
  const { visible, faded } = useHideOnScroll({ triggerOffset: 80, restoreDelay: 400 })
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // 获取初始activeKey
  const getInitialActiveKey = () => {
    const hash = getHash()
    // 先检查是否有hash匹配的nav item（如 /#Features）
    if (hash) {
      const navItemWithHash = NAV_LIST.find(item => item.path === pathname + hash)
      if (navItemWithHash) {
        return navItemWithHash.key
      }
    }
    // 再检查pathname匹配的nav item
    const navItem = NAV_LIST.find(item => item.path === pathname)
    if (navItem) {
      return navItem.key
    }
    // 默认返回home
    if (pathname === '/') {
      return PATH_KEY.HOME
    }
    return ''
  }

  useEffect(() => {
    const key = getInitialActiveKey()
    setActiveKey(key)

    // 如果有hash，延迟滚动到锚点位置
    const hash = getHash()
    if (hash && pathname === '/') {
      const hashKey = hash.slice(1)
      setTimeout(() => {
        const targetElement = document.getElementById(hashKey)
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      }, 100)
    }
  }, [pathname])

  // 监听hash变化，处理同页面内的锚点跳转
  useEffect(() => {
    const handleHashChange = () => {
      if (pathname === '/') {
        const hash = getHash()
        const hashKey = hash.slice(1)
        if (hashKey) {
          setActiveKey(hashKey)
          // 同页面内锚点跳转，立即滚动
          const targetElement = document.getElementById(hashKey)
          if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' })
          }
        } else {
          setActiveKey(PATH_KEY.HOME)
        }
      }
    }

    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [pathname])
  const getHash = () => {
    if (typeof window !== 'undefined') {
      const currentHash = window.location.hash

      return currentHash
    }
    return ''
  }
  const handleDrawer = (bool: boolean) => {
    setOpen(bool)
  }

  const itemClass = (key: string) =>
    clsx({
      [style['nav-item']]: true,
      [style['nav-active']]: activeKey === key
    })
  const handleToSocail = (url: string) => {
    if (!url) return
    window.open(url, '_blank')
  }
  const handleToPage = (item: NAV_TYPE) => {
    if (item.external) {
      window.open(item.path, '_blank')
      return
    }
    setActiveKey(item.key)
    handleDrawer(false)
    // scrollToId(item.key);
  }

  const appClass = clsx(style['app'], {
    // [style['app-hidden']]: !visible,
    [style.faded]: faded,
    [style['light-text']]: isLightText
  })
  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  }

  return (
    <header className={appClass}>
      <div className={style['app-view']}>
        <Logo
          color={isLightText ? '#fff' : '#fff'}
          width={mounted && isMobile ? '124px' : '209px'}
          height={mounted && isMobile ? '24px' : '40px'}
        />
        <nav className={`phone:hidden inline-flex grid-cols-${NAV_LIST.length} pc:gap-x-[32px] `}>
          {NAV_LIST.map((item: NAV_TYPE) => (
            <Link
              key={item.key}
              target={item?.external ? '_blank' : '_self'}
              href={item.path}
              className={itemClass(item.key)}
              onClick={() => handleToPage(item)}
            >
              {item.name}
            </Link>
          ))}
        </nav>
        {/* PC端 */}
        <div className='pc:flex phone:hidden items-center justify-end gap-x-[24px] pc:w-[209px]'>
          <BaseSocial classNames='grid grid-cols-3 gap-x-[24px]' />
        </div>
        {/* 移动端 */}
        <div className='phone:flex pc:hidden items-center justify-end gap-x-[24px]'>
          <BaseSocial classNames='grid grid-cols-3 gap-x-[14px] ' iconHeight={24} iconWidth={24} />
          <MenuIcon onClick={() => handleDrawer(true)} />
        </div>
      </div>
      <Drawer
        sx={{
          width: '100%',
          height: '100%',
          flexShrink: 0,

          '& .MuiDrawer-paper': {
            width: '100%',
            height: '100%',
            overflow: 'hidden',
            boxSizing: 'border-box',

            backgroundColor: '#fff',
            backdropFilter: 'blur(6px)'
          }
        }}
        open={open}
        onClose={() => handleDrawer(false)}
      >
        <div className={`relative h-[100vh]`}>
          <div className={`px-[16px] py-[12px] flex items-center justify-between h-[60px]`}>
            <Logo color={'#fff'} width={'124px'} height={'24px'} />
            <CloseIcon onClick={() => handleDrawer(false)} />
          </div>
          <div className='mt-[12px] flex flex-col gap-[24px]'>
            {NAV_LIST.map((item: NAV_TYPE) => (
              <Link
                key={item.key}
                target={item?.external ? '_blank' : '_self'}
                href={item.path}
                className={`${itemClass(item.key)}  h-[40px] leading-[40px]`}
                onClick={() => handleToPage(item)}
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className='absolute bottom-[24px] w-full'>
            {/* <BaseSocial classNames='flex items-center justify-center gap-x-[24px]' iconColor={'#FFFFFF4D'} /> */}
            {/* <BaseButton
              className={`animate__animated animate__fadeIn `}
              data-wow-delay='0.6s'
              onClick={() => {}}
              text={'Download App'.toUpperCase()}
            /> */}
            <div className='mt-[24px] text-[#00000066] text-center'>{copyrightText}</div>
          </div>
        </div>
      </Drawer>
    </header>
  )
}

export default memo(Index)
