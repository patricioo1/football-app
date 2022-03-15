import styled from 'styled-components'

export const LeaguesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: auto;
  background-color: #f3f6f8;
  font-weight: 600;
`

export const SingleLeague = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 95%;
  height: 45px;
  margin-top: 5px;
  padding-left: 10px;
  padding-right: 5px;
  border-radius: 3px;
  background-color: #fff;
  -webkit-box-shadow: 0px 0px 15px 0px rgba(210, 210, 210, 1);
  -moz-box-shadow: 0px 0px 15px 0px rgba(210, 210, 210, 1);
  box-shadow: 0px 0px 15px 0px rgba(210, 210, 210, 1);
  &:hover {
    background-color: #799499;
    cursor: pointer;
  }
`

export const CountryFlag = styled.img`
  width: 10%;
  height: auto;
  border-radius: 3px;
`
