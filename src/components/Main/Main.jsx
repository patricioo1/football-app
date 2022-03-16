import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { ContentWrapper } from './styled'
import Leagues from './Leagues/Leagues'
import SingleLeagueProperties from './Leagues/SingleLeagueProperties/SingleLeagueProperties'
import Matchday from './Matchday/Matchday'
import MainNavigation from '../Header/MainNavigation/MainNavigation'

const Main = () => (
  <ContentWrapper>
    <MainNavigation />
    <Routes>
      <Route path="/leagues" element={<Leagues />} />
      <Route exact path="/" element={<Matchday />} />
      <Route path="/league/:id" element={<SingleLeagueProperties />} />
    </Routes>
  </ContentWrapper>
)

export default Main
