import React from 'react';
import { useNavigate } from 'react-router'
import * as s from './styled'

const MainNavigation: React.FC = () => {
  const navigate = useNavigate()

  return (
    <s.Nav>
      <s.NavButton type='button' onClick={() => navigate('/leagues')}>
        Leagues
      </s.NavButton>
      <s.NavButton type='button' onClick={() => navigate('/')}>
        Matches
      </s.NavButton>
    </s.Nav>
  )
}

export default MainNavigation
