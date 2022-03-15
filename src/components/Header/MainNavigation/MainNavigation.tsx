import React from 'react';
import { useNavigate } from 'react-router'
import { Nav } from './styled'

const MainNavigation = () => {
  const navigate = useNavigate()

  return (
    <Nav>
      <button type='button' onClick={() => navigate('/leagues')}>
        Leagues
      </button>
      <button type='button' onClick={() => navigate('/')}>
        Matches
      </button>
    </Nav>
  )
}

export default MainNavigation
