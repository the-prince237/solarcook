import styled from "styled-components";
import breakPoints from "../../utils/style/breakPoints";

export const HeroWrapper = styled.div`
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  border-radius: 20px;
  display: flex;
  justify-content: space-between;
  & >.image {
    & > img{
      width: 250px;
      @media ${breakPoints.lg}{
        width: 200px;
      }
      @media screen and (max-width: 850px){
        display: none;
      }
    }
  }
  & .paragraph {
    font-weight: normal;
  }
`