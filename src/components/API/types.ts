export type LeagueType = {
    id: number,
    name: string,
    code: string
    area: {
      name: string,
      ensignUrl: string,
      countryCode: string
    }
  }

  export type AppError = Error