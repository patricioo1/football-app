import React from 'react'
import { ContentWrapper } from './styled';
import Leagues from './Leagues/Leagues';
import { Routes, Route } from 'react-router-dom';
import SingleLeagueProperties from './Leagues/SingleLeagueProperties/SingleLeagueProperties';
import Matchday from './Matchday/Matchday';

const Main = () => {

  return (
    <>
      <ContentWrapper>
        <Routes>
            <Route path='/leagues' element={<Leagues />} />
            <Route exact path='/' element={<Matchday />} />
            <Route path='/league/:id' element={<SingleLeagueProperties />} />
        </Routes>
      </ContentWrapper>
    </>
    );
};

export default Main;