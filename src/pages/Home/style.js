import styled from "styled-components";

export const HomeWrapper = styled.div`
  margin-top: 100px;
  max-width: 100%;
`

export const Categories = styled.div`
  position: fixed;
  top: 50px;
  background: green;
  box-shadow: inset 0 0 3px rgba(0, 0, 0, 0.6);
  padding: 10px 25px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  flex-wrap: no-wrap;
  width: 100%;
  max-width: 100%;
  color: white;
  cursor: pointer;
  z-index: 500;
  overflow: scroll;
  .category-link{
    padding: 0 20px; 
    border-right: solid 1px white;
    :last-child{
      border-right: none;
    }
  }
`

export const HomeProducts = styled.div`

`