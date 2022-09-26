import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 50px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 25px;
  position: fixed;
  top: 0;
  background-color: rgba(250, 250, 250, 0.9);
  z-index: 1000;
`

export const Navigator = styled.nav`
  & > ul {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    font-size: 15px;
    & > li{
      margin-left: 5px;
      &:hover{
        background-color: rgba(0, 0, 0, 0.08);
        border-radius: 5px;
        color: var(--color-footer);
      }
    }
    & .nav-link{
      display: flex;
      padding: 7.5px;
      cursor: pointer;
      align-items: center;
      position: relative;
      & span{
        margin-left: 5px;
      }
    }
    & .nav-icon{
      font-size: 1rem;
    }
    & .cartItems-count{
      color: green;
      font-weight: bold;
      font-size: 12px;
      background-color: rgba(0, 0, 0, 0.2);
      width: 15px;
      height: 15px;
      text-align: center;
      border-radius: 15px;
      position: absolute;
      top: 0;
      right: 0;
    }
  }
  
`

export const FloatingSubNavSet = styled.li`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: end;
  cursor: pointer;
  &:hover div {
    transform: scale(1);
  }
`

export const AccountBtn = styled.div`
  cursor: pointer;
`

export const FloatingSubNav = styled.div`
  position: absolute;
  transform: scale(0);
  transition: 300ms;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 70px;
  & .floating-subnav__links{
    border-radius: 5px;
    background: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.5);
    & > *{
      display: flex;
      gap: 5px;
      width: 100%;
      padding: 10px 15px;
      :first-child{
        border-bottom: solid 1px rgba(0, 0, 0, 0.15);
      }
      :hover{
        color: var(--color-footer);
        box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.5);
      }
      :last-child:hover{
        box-shadow: 3px -3px 5px rgba(0, 0, 0, 0.5);
        color: red;
    }
  }
`
export const SubNavSeparator = styled.div`
  height: 40px;
  width: 10px;
`