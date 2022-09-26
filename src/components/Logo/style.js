import styled from "styled-components";
import { Link } from "react-router-dom";

export const LogoWrapper = styled(Link)`
  border: solid 2px black;
  width: 40px;
  height: 40px;
  font-size: 26px;
  font-weight: bolder;
  border-radius: 0 0 15px 0;
  box-shadow: 3px 3px 2px gray;
  &:hover{
    background-color: black;
    border: none;
  }
`