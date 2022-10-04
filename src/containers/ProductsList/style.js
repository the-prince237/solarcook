import { Link } from "react-router-dom";
import styled from "styled-components";

export const ProductsListWrapper = styled.div`
  & .chevron{
   font-size: 1.5rem;
   display: flex;
   justify-content: center;
   align-items: center;
   transform: ${({isOpened}) => isOpened ? "rotate(180deg)" : "rotate(0deg)"}
  }
  & .list-wrapper{
    transform: ${({isOpened}) => isOpened ? "scaley(1)" : "scaley(0)"};
    max-height: ${({isOpened}) => !isOpened && "0"};
  }
`

export const ListTitle = styled.div`
  width: 100%;
  margin-bottom: 20px;
  color: rgba(0, 0, 0, 0.8);
  text-shadow: 3px 3px 5px rgba(0, 0, 0, 0.5);
  font-size: 15px;
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.5);
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  :hover{
    box-shadow: 5px 5px 8px rgba(0, 0, 0, 0.5);
  }
`

export const ListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 25px;
  justify-content: space-evenly;
  ${({isOpened}) => !isOpened & "max-height: 0"};
`

export const ProductPrevWrapper = styled.div`
  width: 150px;
  height: 180px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 3px 3px 3px 0;
  transition: 500ms;
  &:hover #sup-infos{
    opacity: 1;
  }
`
export const SupInfos = styled.div`
  width: 100%;
  height: 150px;
  position: relative;
  transition: 800ms;
`

export const ProductImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  background: rgba(0, 0,0, 0.2);
  border-radius: 3px;
`

export const ProductInfos = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0;
  border-radius: 3px;
`

export const Note = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 5px;
  font-size: 2rem;
`

export const Bar = styled.div`
  width: 45%;
  height: 1px;
  background: white;
  margin-bottom: 5px;
`

export const Command = styled.div`
 display: flex;
 margin: 10px;
 width: 100%;
 justify-content: space-evenly;
 align-items: center;
`

export const CommandButton = styled(Link)`
  cursor: pointer;
  &:hover{
    background: white;
    border:none;
    color: black;
  }
`

export const ProductPrice = styled.p`

`

export const SubInfos = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  margin-top: 7px;
`

export const ProductLink = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

export const ProductName = styled.h1`
  width: 100%;
  font-size: 12px;
  font-weight: bolder;
  text-shadow: 5px 5px 5px rgba(0, 0, 0, 0.3) 
`

export const ProductCategory = styled.p`
  color: gray;
`

export const CartButton = styled.button`
  width: 25px;
  height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 25px;
  font-size: 1.5em;
  font-weight: bolder;
  color: white;
  background-color:  rgba(4, 12, 24, 1);
  &:hover{
    background-color: rgba(0, 40, 83, 1);
  }
`