import { Link } from 'react-router-dom'
import colors from './colors'
import styled, { keyframes } from 'styled-components'
import breakPoints from './breakPoints'

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`

export const Loader = styled.div`
  padding: 10px;
  border: 6px solid ${colors.primary};
  border-bottom-color: transparent;
  border-radius: 22px;
  animation: ${rotate} 1s infinite linear;
  height: 0;
  width: 0;
`

export const StyledLink = styled(Link)`
  padding: 10px 15px;
  color: ${({ $theme }) => ($theme === 'light' ? '#8186a0' : '#ffffff')};
  text-decoration: none;
  font-size: 18px;
  text-align: center;
  ${(props) =>
    props.$isFullLink &&
    `color: white; 
    border-radius: 30px; 
    background-color: ${colors.primary};`}
`

export const Title1 = styled.h1`
  font-size: 48px;
  @media ${breakPoints.xl}{
    font-size: 36px;
  }
`

export const Title2 = styled.h1`
  font-size: 36px;
  @media ${breakPoints.xl}{
    font-size: 24px;
  }
`

export const Title3 = styled.h1`
  font-size: 24px;
  @media ${breakPoints.xl}{
    font-size: 18px;
  }
`

export const Title4 = styled.h1`
  font-size: 18px;
`
export const InputSet = styled.div`
  width: 200px;
  display: flex;
  flex-direction: column;
  align-items: start;
  & label{
    font-weight: bolder;
    font-size: 12px;
    text-decoration: underline;
    color: rgba(0, 0, 0, 0.4);
    margin-bottom: 5px;
  }
`

export const InputBar = styled.input`
  box-shadow: 0 0 5px gray;
  width: 100%;
  height: 30px;
  border-radius: 25px;
`

export const InputRadio = styled.input`
  width: 30px;
`

export const InputDate = styled.input`
  background-color: var(--color-bg);
  color: white;
  font-size: 12px;
  padding: 10px 15px;
  border-radius: 5px;
  cursor: pointer;
  &:hover{
    background-color: var(--color-footer);
  }
`

export const GenderSet = styled.div`
  margin-top: 5px;
  display: flex;
  width: 200px;
  justify-content: space-between;
  & div{
    color: var(--color-footer);
    font-weight: bold;
    border: solid var(--color-bg) 1px;
    padding: 0 15px;
    border-radius: 5px;
    font-size: 12px;
  }
`

export const SubmitForm = styled.button`
  margin-top: 15px;
  background: rgb(180, 0, 0);
  color: white;
  padding: 10px 25px;
  width: 200px;
  border-radius: 20px;
  font-weight: bolder;
  &:hover{
    background: rgb(225, 0, 0);
  }
`
