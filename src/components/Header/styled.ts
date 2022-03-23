import styled from 'styled-components'

export const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  height: auto;
  min-height: 90px;
  width: 100%;
  padding: 15px 39px 15px 17px;
  border-bottom: 2px solid rgba(196, 196, 196, .2);
`

export const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 57px;
  width: 150px;
  margin-left: 17px;
`
export const Logo = styled.img`
  width: 100%;
  height: auto;
`

export const CalendarWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background-color: #fff;
  cursor: pointer;
`

export const CalendarIcon = styled.img`
  width: 27px;
  height: 27px;
`
