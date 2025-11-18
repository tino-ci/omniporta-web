import React, { memo } from 'react'

interface Props {}

const Loading: React.FC<Props> = props => {
  const {} = props
  return <div>loading...</div>
}

export default memo(Loading)
