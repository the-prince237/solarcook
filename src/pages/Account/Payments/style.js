import styled from "styled-components";

export const PaymentNav = styled.nav`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  border-bottom: solid rgba(0, 0, 0, 0.2) 1px;
  width: 100%;
`

export const PaymentOption = styled.div`
  padding: 10px;
  color: gray;
  font-size: 12px;
  cursor: pointer;
  border-bottom: ${({mode, selectedMode}) => mode === selectedMode ? "solid 1px green" : ""};
  box-shadow: ${({mode, selectedMode}) => mode === selectedMode ? "3px 0px 5px rgba(0, 0, 0, 0.2), -3px 0px 5px rgba(0, 0, 0, 0.2)" : ""};
  border-right: solid 0.2px rgba(0, 0, 0, 0.2);
  :first-child{
    border-radius: 20px 0 0 0;
    box-shadow: ${({mode, selectedMode}) => mode === selectedMode ? "3px 0px 5px rgba(0, 0, 0, 0.2)" : ""};
  }
  :last-child{
    border-right: none;
  }
  :hover{
    background: rgba(0, 0, 0, 0.2);
    color: black;
  }
`

export const PaymentBody = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  & .mobile-options{
    display: flex;
    align-items: center;
    gap: 30px;
    margin-top: 15px;
  }
`

export const MobileOption = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  border-radius: 5px;
  box-shadow: ${({option, selectedOption}) => option === selectedOption ? "5px 5px 10px rgba(0, 100, 0, 0.6)" : ""} ;
  :hover{
    box-shadow:  ${({option, selectedOption}) => option === selectedOption ? "5px 5px 10px rgba(0, 100, 0, 0.6)" : "5px 5px 10px rgba(0, 0, 0, 0.6)"};
  }
  & img{
    border-radius: 5px;
    height: 100px;
  }
`