import styled from "styled-components";

export const SecurityBody = styled.div`
  display: flex; 
  flex-direction: column;
  align-items: center;
  width: 100%;
`
export const PassInput = styled.input`
  margin: 10px;
  box-shadow: 0 0 5px gray;
  padding: 10px;
  width: 80%;
  border-radius: 10px;
  font-weight: bold;
  font-size: 12px;
  :focus{
    box-shadow: 0 0 20px gray;
  }
`
export const SubmitInput = styled.button`
  background: red;
  color: white;
  font-weight: bold;
  padding: 10px 25px;
  border-radius: 5px;
  font-size: 12px;
  :hover{
    background: rgba(150, 0, 0);
  }
`