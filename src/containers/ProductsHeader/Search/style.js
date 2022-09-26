import styled from "styled-components";

export const SearchWrapper = styled.form`
  display: flex;
  align-items: center;
  & > *{
    height: 40px;
    margin-left: 10px;
    border-radius: 3px;
  }
  & > input{
    width: 300px;
  }
  & > button{
    width: 40px;
    background-color: red;
    color:white;
    font-size: 18px;
    font-weight: bold;
  }
`