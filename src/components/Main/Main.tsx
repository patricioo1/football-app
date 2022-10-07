import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { ContentWrapper } from './styled'
import Leagues from './Leagues/Leagues'
import SingleLeagueProperties from './Leagues/SingleLeagueProperties/SingleLeagueProperties'
import Matchday from './Matchday/Matchday'
import SingleScorerInfo from './Leagues/SingleLeagueProperties/SingleLeagueBestScorers/SingleScorerInfo/SingleScorerInfo'
import MainNavigation from '../Header/MainNavigation/MainNavigation'


const Main: React.FC = () => (
  <ContentWrapper>
    <MainNavigation />
    <Routes>
      <Route path="/leagues" element={<Leagues />} />
      <Route path="/" element={<Matchday />} />
      <Route path="/league/:id" element={<SingleLeagueProperties />} />
      <Route path="/league/:id/best-scorers/:id" element={<SingleScorerInfo />} />
    </Routes>
  </ContentWrapper>
)

export default Main
