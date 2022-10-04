import styled from "styled-components";

export const ProductPage = styled.div``

export const ProductWrapper = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
`

export const ProductFullImage = styled.img`
  width: 80%;
  max-width: 400px;
`

export const ProductFullContent = styled.div`
  display: flex;
  flex-direction: column;
  text-align: justify;
  align-items: center;
  max-width: 30%;
`

export const ContentHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Categories = styled.div`
  margin: 10px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: bolder;
  font-size: 12px;
  & >.sub-cat{
    background: var(--gradient-bar);
  };
  & > .cat, .sub-cat{
    padding: 3px 7px;
    border-radius: 5px;
  }
  & > .linker{
    width: 30px;
    height: 0.1px;
    border: gray 0.1px dashed;
  }
`

export const ProductStatus = styled.div`
  display: flex;
  align-items: end;
  font-weight: bold;
  & div{
    font-size: 12px;
    border: solid var(--color-bg) 2px;
    border-radius: 5px;
    padding: 5px 15px;
    margin: 10px;
  }
`

export const ContentBody = styled.div`
  & p{
    font-size: 15px;
    color: gray;
  }
  & h3{
    margin-bottom: 15px;
  }
  & span {
    color: gray;
    font-size: 13px;
  }
`

export const ContentFooter = styled.footer`
  width: 100%;
  display: flex;
  justify-content: start;
  align-items: center;
  margin: 10px 0;
  & > *{
    margin-right: 10px;
  }
  & .product__price{
    padding: 5px 10px;
    border-radius: 5px;
    font-size: 15px;
    font-weight: bold;
    color: white;
    background-color: green;
    text-shadow: 2px 2px 3px black;
    cursor: pointer;
    &:hover{
      text-shadow: 3px 3px 5px black;
      box-shadow: 3px 3px 5px gray;
    }
  }
  & .product__shop{
    display: flex;
    flex-direction: column;
    justify-content: baseline;
    align-items: start;
    position: relative;
    &:hover .product__shop{
      &-button{
        background-color: rgba(0, 0, 0, 0.3);
        box-shadow: 3px 3px 5px gray;
        color: rgb(0, 140, 0) 
      }
      &-options{
        transform: scale(1);
      }
    }
    &-button{
      cursor: pointer;
      color: green;
      background-color: rgba(0, 0, 0, 0.2);
      font-size: 1.5rem;
      padding: 3px 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 5px;
    }
    &-options{
      transform: scale(0);
      position: absolute;
      background-color: white;
      top: 30px;
      box-shadow: 3px 3px 5px gray;
      border-radius: 5px;
      & > *{
        display: block;
        background: none;
        padding: 10px 20px;
        font-size: 12px;
        font-weight: bold;
        :first-child{
          border-bottom: solid 1px rgba(0, 0, 0, 0.15);
        }
        :hover{
          box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.5);
        }
        :last-child:hover{
          box-shadow: 3px -3px 5px rgba(0, 0, 0, 0.5);
        }
      }
    }
  }
`