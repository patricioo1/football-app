import React from 'react';
import Logo from '../../images/default-monochrome.svg';
import { HeaderWrapper, LogoWrapper, DateApp } from './styled';
import MainNavigation from './MainNavigation/MainNavigation';

const Header = () => {

    return (
      <HeaderWrapper>
        <LogoWrapper>
          <img src={Logo} alt="Logo" />
        </LogoWrapper>
        <DateApp>
          <span>{new Date().toLocaleDateString()}, {new Date().toLocaleString('en-EN', {weekday: 'long'})}</span>
        </DateApp>
        <MainNavigation />
      </HeaderWrapper>
    );
};

export default Header;