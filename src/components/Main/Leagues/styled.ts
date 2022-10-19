import styled from 'styled-components'

export const SingleLeague = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;
  flex-wrap: wrap;
  width: 368px;
  height: 90px;
  margin-top: 10px;
  padding: 10px;
  border-radius: 10px;
  background-color: #fff;
  -webkit-box-shadow: 0px 0px 15px 0px rgba(210, 210, 210, 1);
  -moz-box-shadow: 0px 0px 15px 0px rgba(210, 210, 210, 1);
  box-shadow: 0px 0px 15px 0px rgba(210, 210, 210, 1);
  @media (max-width: 360px) {
    width: 340px;
  }
`

export const CountryFlag = styled.img`
  width: 40px;
  height: auto;
  padding: 5px;
`
export const CountryCode = styled.div`
  width: 100%;
  height: auto;
  padding: 5px 0;
`
