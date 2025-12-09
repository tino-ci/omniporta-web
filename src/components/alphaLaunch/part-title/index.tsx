import React, { memo } from 'react'
import { useIsMobile } from '@hooks/index'
import styles from './index.module.scss'
import useWow from '../hooks/api/useWow'
interface Props {
  title?: string
  description?: string
  style?: React.CSSProperties
  isBg?: boolean // 是否有背景
  fontColor?: string
  pt?: string
}

const Index: React.FC<Props> = props => {
  useWow()
  const { title, description, style = {}, isBg = false, fontColor = '#000', pt = '100px' } = props
  const isMobile = useIsMobile()
  return (
    <div className={`${styles.app} wow animate__animated animate__fadeIn`} style={style}>
      <h2
        className='wow animate__animated animate__zoomIn'
        style={{ color: fontColor }}
        dangerouslySetInnerHTML={{ __html: title || '' }}
      ></h2>
      {description ? (
        <p
          className={`${styles['description']} wow animate__animated animate__fadeInUp`}
          dangerouslySetInnerHTML={{ __html: description || '' }}
        ></p>
      ) : null}
    </div>
  )
}

export default memo(Index)
