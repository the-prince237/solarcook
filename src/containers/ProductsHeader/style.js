import styled from "styled-components";

export const ProductsHeaderWrapper = styled.header`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  position: relative;
  top: 50px;
  padding: 10px 25px;
  & > #products-header__left{
    & p{
      color: silver;
      font-weight: 600;
    }
  }
  
`