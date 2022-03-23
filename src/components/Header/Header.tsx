import React from 'react';
import Logo from '../../images/default-monochrome.svg'
import CalendarIcon from '../../images/calendarIcon.svg'
import * as s from './styled'

const Header: React.FC = () => (
    <s.HeaderWrapper>
      <s.LogoWrapper>
        <s.Logo src={Logo} alt="Logo" />
      </s.LogoWrapper>
      <s.CalendarWrapper>
        <s.CalendarIcon src={CalendarIcon} alt="Calendar" />
      </s.CalendarWrapper>
    </s.HeaderWrapper>
  )

export default Header
