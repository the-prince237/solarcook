import styled from "styled-components";

export const HeroWrapper = styled.div`
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  border-radius: 20px;
  display: flex;
  justify-content: space-between;
  & >.image {
    & > img{
      width: 250px;
    }
  }
  & p {
    font-size: 24px;
  }
`