import React from 'react'
import { SingleLeagueNavigation } from './styled';

const SingleLeagueNav = ({children}) => {

    return (
      <SingleLeagueNavigation>
          {children}
      </SingleLeagueNavigation>
    );
};

export default SingleLeagueNav;