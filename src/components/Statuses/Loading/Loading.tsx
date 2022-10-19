import { SpinnerCircular } from 'spinners-react'
import * as s from './styled'

const Loading = () => (
    <s.LoadingWrapper>
      <SpinnerCircular style={{ width: '70px', color: '#4361EE' }} />
    </s.LoadingWrapper>
  )

export default Loading
