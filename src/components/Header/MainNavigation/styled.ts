import styled from 'styled-components'

export const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 28px 30px 32px 30px;
  @media (max-width: 360px) {
    padding: 28px 20px 32px 20px
  }
`

export const NavButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 154px;
  height: 40px;
  color: #4361EE;
  background-color: rgba(67, 97, 238, .3);
  cursor: pointer;
  font-weight: 600;
  border: none;
  border-radius: 10px;
`
