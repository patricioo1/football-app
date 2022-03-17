export type LeagueProperties = {
    name: string,
    code: string,
    area: {
      name: string,
      ensignUrl: string
      countryCode: string
    },
    id: number,
    currentSeason: {
      startDate: string,
      endDate: string
    }
  }