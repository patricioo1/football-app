import styled from 'styled-components'

export const MatchdayWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: auto;
`

export const MatchdayNavigation = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: auto;
  padding: 10px 10px;
`

export const NavButtons = styled.button`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  border: none;
  border-radius: 3px;
  background-color: #7da3bd;
  cursor: pointer;
  &:hover {
    background-color: #5c829b;
  }
`

export const ButtonLeft = styled(NavButtons)`
  &:before {
    content: '\f060';
    display: block;
    position: absolute;
    font-family: 'Font Awesome 5 Free';
    font-weight: 900;
  }
`

export const ButtonRight = styled(NavButtons)`
  &:before {
    display: block;
    content: '\f061';
    position: absolute;
    font-family: 'Font Awesome 5 Free';
    font-weight: 900;
  }
`

export const SingleLeagueWrapper = styled.div`
  margin-top: 5px;
  width: 95%;
  height: auto;
  font-size: 0.8em;
  border-radius: 3px;
  background-color: #fff;
  -webkit-box-shadow: 0px 0px 15px 0px rgba(210, 210, 210, 1);
  -moz-box-shadow: 0px 0px 15px 0px rgba(210, 210, 210, 1);
  box-shadow: 0px 0px 15px 0px rgba(210, 210, 210, 1);
`

export const LeagueTitle = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 25px;
  padding: 0 5px 0 5px;
  border-radius: 3px 3px 0 0;
  background-color: #7da3bd;
`

export const CountryFlag = styled.img`
  width: 20px;
  height: auto;
  margin-right: 5px;
`

export const TeamWrapper = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  min-height: 50px;
`

export const TeamTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 5px 0 5px 5px;
  flex-grow: 1;
`

export const MatchInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: auto;
  padding: 0 5px 0 5px;
  font-size: 0.9em;
`

export const Score = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 5px 0 5px 5px;
  width: 30px;
`
