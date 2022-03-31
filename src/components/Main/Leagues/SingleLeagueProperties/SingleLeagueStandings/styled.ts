import styled from 'styled-components'

type Props = {
  points: number
}

export const StandingsWrapper = styled.div`
  width: 100%;
  height: auto;
  min-height: 50vh;
`

export const LeagueName = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  padding: 0 5px 0 5px;
  width: 100%;
  height: 80px;
`
export const LeagueTitle = styled.p`
  width: 100%;
`
export const LeagueTableProperties = styled.div`
  display: flex;
  height: auto;
  width: 100%;
  color: #4361EE;
`

export const LeagueTablePropertiesSt = styled.div`
  display: flex;
  flex: 2;
`

export const TeamPoints = styled.span`
  display: flex;
  justify-content: center;
  flex: 1;
  color: ${(props: Props) => props.points ? '#25d422' : 'black'}
`

export const LeagueTablePropertiesNd = styled.div`
  display: flex;
  justify-content: space-between;
  flex: 1;
`

export const SingleLeagueProperties = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 40px;
  padding: 5px 5px 0 5px;
`

export const SingleTeamName = styled.div`
  display: flex;
  flex: 2;
`

export const SingleTeamStats = styled.div`
  display: flex;
  justify-content: space-between;
  flex: 1;
`

export const TeamPosition = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 5px;
  background-color: rgba(67,97,238,.3);
  width: 20px;
  border-radius: 4px;
`