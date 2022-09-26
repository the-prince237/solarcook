import styled from "styled-components";

export const CheckoutWrapper = styled.div`
  margin-top: 50px;
  position: relative;
`

export const CheckInfos = styled.nav`
  display: flex;
  flex-direction: column;
  position: fixed;
  left: 0;
  width: 250px;
  background-color: white;
  height: calc(100vh - 50px);
  align-items: start;
  box-shadow: 5px 0 5px rgba(0, 0, 0, 0.3);
`

export const CheckOrder = styled.nav`
  position: absolute;
  left: 250px;
  
`