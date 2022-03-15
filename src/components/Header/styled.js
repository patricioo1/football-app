import styled from 'styled-components'

export const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  background-color: lightgray;
  padding: 10px 10px 0px 10px;
`

export const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 150px;
  img {
    width: 100%;
    height: auto;
  }
`

export const DateApp = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 150px;
  font-size: 0.8em;
  text-align: center;
  font-weight: 600;
  span {
    text-transform: capitalize;
  }
`
