export const getAllLeagues = async () => {
  const response = await fetch(
    new Request('https://api.football-data.org/v2/competitions', {
      headers: {
        'X-Auth-Token': `${process.env.REACT_APP_API_KEY}`,
      },
    })
  )
  if (response.status === 200) {
    return response.json()
  }
  return null;
}

export const getSingleLeagueInfo = async id => {
  const response = await fetch(
    new Request(
      `https://api.football-data.org/v2/competitions/${id}/standings`,
      {
        headers: {
          'X-Auth-Token': `${process.env.REACT_APP_API_KEY}`,
        },
      }
    )
  )
  if (response.status === 200) {
    return response.json()
  }
  return null;
}

export const getMatchday = async (ids, date) => {
  const response = await fetch(
    new Request(
      `https://api.football-data.org/v2/matches?dateFrom=${date}&dateTo=${date}&competitions=${ids}`
    ),
    {
      headers: {
        'X-Auth-Token': `${process.env.REACT_APP_API_KEY}`,
      },
    }
  )
  if (response.status === 200) {
    return response.json()
  }
  return null;
}

export const getSingleLeagueStandings = async id => {
  const response = await fetch(
    new Request(
      `https://api.football-data.org/v2/competitions/${id}/standings`,
      {
        headers: {
          'X-Auth-Token': `${process.env.REACT_APP_API_KEY}`,
        },
      }
    )
  )
  if (response.status === 200) {
    return response.json()
  }
  return null;
}

export const getBestScorers = async code => {
  const response = await fetch(
    new Request(
      `http://api.football-data.org/v2/competitions/${code}/scorers`, {
        headers: {
          'X-Auth-Token': `${process.env.REACT_APP_API_KEY}`,
        },
      }
    )
  )
  if (response.status === 200) {
    return response.json()
  }
  return null
}