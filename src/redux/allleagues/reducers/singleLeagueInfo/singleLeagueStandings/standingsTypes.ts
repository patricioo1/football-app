export type LeagueName = {
    name: string
}

export type CurrentSeason = {
    currentMatchday: number,
    endDate: string,
    startDate: string
}

export type SingleTeam = {
    crestUrl: string,
    id: number,
    name: string
}

export type SinglePosition = {
    draw: number,
    goalDifference: number,
    goalsAgainst: number,
    goalsFor: number,
    lost: number,
    playedGames: number,
    points: number,
    position: number,
    team: SingleTeam,
    won: number
}

export type Standings = {
    table: SinglePosition[]
}