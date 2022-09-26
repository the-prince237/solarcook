import styled from "styled-components";

export const AuthWrapper = styled.div`
  min-height: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const AuthForm = styled.form`
  width: 300px;
  margin: auto;
  margin-top: 5px;
  box-shadow: 0 0 5px gray;
  min-height: 150px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 0;
  & input{
    margin: 7.5px 0;
  }; 
  & .second-section{
    margin-top: 15px;
  }
  & .or{
    color: rgba(0, 0, 0, 0.4);
    width: 200px;
    margin: 20px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    & span{
      display: block;
      width: 40%;
      height: 1px;
      background: rgba(0, 0, 0, 0.2);
    }
  }
`

export const AltAuthTypes = styled.div`
  width: 200px;
  display: flex;
  justify-content: space-evenly;
  & .alt-auth-type{
    font-size: 36px;
    border-radius: 100px;
    color: var(--color-footer);
    cursor: pointer;
  }
`

export const AuthFooter = styled.footer`
  width: 300px;
  margin: auto;
  margin-top: 15px;
  display: flex;
  color: gray;
  justify-content: space-evenly;
`

export const SwitchButton = styled.div`
  cursor: pointer;
  font-weight: bold;
  &:hover{
    text-decoration: underline;
  }
`