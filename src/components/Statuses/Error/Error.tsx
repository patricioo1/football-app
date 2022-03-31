import React from 'react'
import * as s from './styled'

const Error: React.FC = ({ children }) => (
  <s.ErrorWrapper>
    {children}
  </s.ErrorWrapper>
)

export default Error
