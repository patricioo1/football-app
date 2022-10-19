import {
  LeagueName,
  CurrentSeason,
  Standings,
} from '../../redux/allleagues/reducers/singleLeagueInfo/singleLeagueInfo'

export type AllLeaguesType = {
  id: number
  name: string
  code: string
  area: {
    name: string
    ensignUrl: string
    countryCode: string
  }
}

export type Score = {
  homeTeam: number
  awayTeam: number
}

export type TeamName = {
  name: string
}

export type MatchdayProperties = {
  id: number
  homeTeam: TeamName
  awayTeam: TeamName
  status: string
  matchScore: Score
  competition: {
    name: string
    area: {
      name: string
      ensignUrl: string
    }
  }
}

export type SelectedLeagueType = {
  code: string
  id: number
  name: string
  area: {
    ensignUrl: string
    name: string
  }
  currentSeason: {
    currentMatchday: string
  }
}

export type LeagueInfo = {
  competition: LeagueName
  season: CurrentSeason
  standings: Standings[]
}

export type BestScorer = {
  numberOfGoals: number
  player: {
    dateOfBirth: string
    id: number
    name: string
    nationality: string
    position: string
  }
  team: {
    id: number
    name: string
  }
}

export type AppError = Error
