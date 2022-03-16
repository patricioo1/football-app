import React from 'react';
import Logo from '../../images/default-monochrome.svg'
import { HeaderWrapper, LogoWrapper } from './styled'

const Header = () => (
    <HeaderWrapper>
      <LogoWrapper>
        <img src={Logo} alt="Logo" />
      </LogoWrapper>
    </HeaderWrapper>
  )

export default Header
