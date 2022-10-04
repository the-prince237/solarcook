import styled from "styled-components"

export const FilterWrapper = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  gap: 10px;
`

export const ChooseCategory = styled.div`
  box-shadow: 0px 0px 3px gray;
  border-radius: 10px;
  width: 100%;
  padding: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  :hover .categories-options{
    transform: scale(1);
  }
`

export const ChoosenCategories = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 5px;
  align-items: center;
  cursor: pointer;
  width: 90%;
  position: relative;
  > div {
    width: 100%;
    display: flex;
    overflow: auto;
    padding: 5px;
    gap: 5px;
    border-radius: 5px;
    > div{
      box-shadow: 0 0 3px gray;
      color: gray;
      font-weight: bold;
      font-size: 10px;
      padding: 3px;
      border-radius: 5px;
      display: flex;
      flex-wrap: no-wrap;
      align-items: center;
      gap: 3px;
    }
    > .close-icon{
      font-size: 12px;
      :hover{
        color: red;
        cursor: pointer;
      }
    }
  }
  > .close-icon{
    color: green;
    font-size: 18px;
    position: absolute;
    right: 0;
    background: white;
    height: 100%;
    padding: 3px;
    display: flex;
    align-items: center;
  }
`

export const CategoriesOptions = styled.div`
  transform: scale(0);
  position: absolute;
  top: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: no-wrap;
  overflow: hidden;
  align-items: center;
  width: 200px;
  background: white;
  box-shadow: 0px 0px 3px gray;
  border-radius: 5px;
  text-align: center;
  z-index: 100;
`

export const Category = styled.div`
  width: 100%;
  padding: 10px;
  border-bottom: solid 1px rgba(0, 0, 0, 0.2);
  font-weight: bold;
  color: rgba(0, 0, 0, 0.6);
  cursor: pointer;
  :last-child{
    border-bottom: unset;
  }
`