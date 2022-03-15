import React from 'react'
import { SpinnerCircular } from 'spinners-react'
import { LoadingWrapper } from './styled'

const Loading = () => (
    <LoadingWrapper>
      <SpinnerCircular style={{ width: '70px', color: 'black' }} />
    </LoadingWrapper>
  )

export default Loading
