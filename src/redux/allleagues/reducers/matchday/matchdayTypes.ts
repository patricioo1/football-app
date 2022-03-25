type Score = {
    homeTeam: number,
    awayTeam: number
}

type TeamName = {
    name: string
}

export type MatchdayProperties = {
    id: number,
    homeTeam: TeamName,
    awayTeam: TeamName,
    status: string,
    matchScore: Score
    competition: {
      name: string
      area: {
        name: string,
        ensignUrl: string
      }
    }
  }