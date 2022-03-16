import styled from 'styled-components'

export const MatchdayWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: auto;
  font-size: 16px;
`

export const MatchdayNavigation = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: auto;
  padding: 0px 30px;
  margin-bottom: 28px;
`

export const NavButtons = styled.button`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border: none;
  border-radius: 10px;
  background: linear-gradient(225.57deg, #4361EE -1.01%, #8E43EE 100%);
  cursor: pointer;
`

export const ButtonLeft = styled(NavButtons)`
  &:before {
    content: '\f060';
    display: block;
    position: absolute;
    font-family: 'Font Awesome 5 Free';
    font-weight: 900;
    color: #fff;
  }
`

export const ButtonRight = styled(NavButtons)`
  &:before {
    display: block;
    content: '\f061';
    position: absolute;
    font-family: 'Font Awesome 5 Free';
    font-weight: 900;
    color: #fff;
  }
`

export const DateApp = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 94px;
  font-weight: 600;
  color: #A9A9A9;
`

export const SingleLeagueWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 5px 0px 10px 0px;
  width: 368px;
  height: 150px;
  border-radius: 15px;
  background-color: #fff;
  -webkit-box-shadow: 0px 0px 15px 0px rgba(210, 210, 210, 1);
  -moz-box-shadow: 0px 0px 15px 0px rgba(210, 210, 210, 1);
  box-shadow: 0px 0px 15px 0px rgba(210, 210, 210, 1);
`

export const LeagueTitle = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex: 1;
  width: 100%;
  height: auto;
  padding: 10px 5px 10px 15px;
  border-radius: 15px 15px 0 0;
  color: #4361EE;
`

export const CountryFlag = styled.img`
  width: 30px;
  height: auto;
  margin-right: 5px;
`

export const TeamWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 2;
  width: 100%;
  min-height: 60px;
`

export const SingleTeam = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0px 15px;
  flex: 1;
`

export const AwayTeam = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0px 15px;
  flex: 1;
`

export const MatchInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: auto;
  width: auto;
  padding: 5px 0;
  flex: 1;
`

export const Score = styled.div`
  display: flex;
  justify-content: space-between;
  width: 30px;
  margin: 0 15px 0 15px;
`
