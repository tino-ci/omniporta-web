'use client'

import { memo } from 'react'
import { PhotoProvider, PhotoView } from 'react-photo-view'
import Image from 'next/image'

import 'react-photo-view/dist/react-photo-view.css'
import { IconButton } from '@mui/material'

interface Props {
  images: string | string[]
  width?: string | number
  height?: string | number
  className?: string
  native?: boolean
  photoView?: boolean
}

const Index: React.FC<Props> = props => {
  const { images, width = '100%', height = '100%', className = '', native = false, photoView = true } = props

  const renderImageElement = (src: string, key?: string | number) => {
    // if (native) {
    //   return (
    //     <img
    //       key={key}
    //       src={src}
    //       alt=''
    //       className={className}
    //       style={{ cursor: 'pointer', objectFit: 'cover', width: width, height: height }}
    //     />
    //   )
    // }
    return (
      <img
        key={key}
        src={src}
        alt=''
        className={className}
        style={{ cursor: 'pointer', objectFit: 'cover', width: width, height: height }}
      />
      // <Image
      //   key={key}
      //   src={src}
      //   alt=''
      //   className={className}
      //   width={width}
      //   height={height}
      //   style={{ cursor: 'pointer', objectFit: 'cover', width: width, height: height }}
      // />
    )
  }

  if (!photoView) {
    if (Array.isArray(images)) {
      return (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
          {images.map((src, index) => renderImageElement(src, index))}
        </div>
      )
    }
    return renderImageElement(images)
  }

  return (
    <PhotoProvider
      maskOpacity={0.8}
      toolbarRender={({ onScale, scale, rotate, onRotate }) => {
        return (
          <>
            <IconButton className=' text-[#fff]' onClick={() => onScale(scale + 1)}>
              <img className='w-[22px] h-[22px]' src='/images/plus-circle.png' alt='' />
            </IconButton>
            <IconButton className=' text-[#fff]' onClick={() => onScale(scale - 1)}>
              <img className='w-[22px] h-[22px]' src='/images/minus-circle.png' alt='' />
            </IconButton>
            <IconButton className=' text-[#fff]' onClick={() => onRotate(rotate + 90)}>
              <img className='w-[22px] h-[22px]' src='/images/rotate-right.png' alt='' />
            </IconButton>
          </>
        )
      }}
    >
      {Array.isArray(images) ? (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
          {images.map((src, index) => (
            <PhotoView key={index} src={src}>
              {renderImageElement(src)}
            </PhotoView>
          ))}
        </div>
      ) : (
        <PhotoView src={images}>{renderImageElement(images)}</PhotoView>
      )}
    </PhotoProvider>
  )
}

export default memo(Index)
