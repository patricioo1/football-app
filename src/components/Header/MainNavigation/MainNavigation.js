import React from 'react'
import { Nav } from './styled';
import { useNavigate } from 'react-router';

const MainNavigation = () => {
  const navigate = useNavigate();

    return (
      <Nav>
          <p onClick={() => navigate('/leagues')}>Leagues</p>
          <p onClick={() => navigate('/')}>Matches</p>
      </Nav>
    );
};

export default MainNavigation;