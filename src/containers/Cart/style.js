import styled from "styled-components";

export const CartWrapper = styled.aside`
  position: fixed;
  top: 50px;
  right: 0;
  width: 300px;
  max-width: ${({isOn}) => isOn ? "100vw" : "0"};
  background: var(--color-footer);
  height: calc(100vh - 50px);
  z-index: 500;
  color: white;
  display: flex;
  flex-direction: column;
`

export const CartHeader = styled.header`
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.5);
  padding: 10px;
  position: absolute;
  width: 100%;
  top: 0;
  background: var(--color-footer);
`

export const CartBody = styled.div`
  margin-top: 50px;
  margin-bottom: 55px;
  overflow: auto;
  width: 100%;
`

export const CartFooter = styled.footer`
  background-color: green;
  position: absolute;
  width: 100%;
  max-height: 50px;
  padding: 15px;
  bottom: 0;
  box-shadow: 0 -10px 10px rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: space-evenly;
`