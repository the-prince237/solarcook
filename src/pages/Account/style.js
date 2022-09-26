import styled from "styled-components";

export const AccountWrapper = styled.div`
  position: relative;
  top: 50px;
  width: 100%;
`

export const AccountAside = styled.header`
  display: flex;
  flex-direction: column;
  position: fixed;
  left: 0;
  width: 250px;
  background-color: white;
  height: calc(100vh - 50px);
  align-items: start;
  box-shadow: 5px 0 5px rgba(0, 0, 0, 0.7);
  & > #account-aside__top{
    padding: 10px 25px;
    margin-bottom: 20px;
    border-bottom: solid 1px rgba(0, 0, 0, 0.2);
    width: 100%;
    & p{
      color: gray;
      font-weight: 600;
    }
  }
`

export const AccountNav = styled.nav`
  display: flex;
  padding: 0 25px;
  flex-direction: column;
  & h3{
    margin-bottom: 5px;
  }
  & a{
    width: 100px;
    border-radius: 5px;
    box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.2);
    margin-bottom: 10px;
    padding: 10px;
    text-align: left;
    font-weight: 600;
    transition: 100;
    &:hover{
      box-shadow: 7px 7px 10px rgba(0, 0, 0, 0.2);
    }
  }
`

export const AccountBody = styled.section`
  display: flex;
  flex-direction: column;
  align-items: start;
  width: calc(100vw - 550px);
  position: absolute;
  left: 250px;
  gap: 30px;
`

export const AccountContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  align-items: start;
  justify-content: space-between;
`

export const AccountSectionWrapper = styled.section`
  width: 100%;
  border-radius: 5px;
  padding-top: 50px;
`

export const AccountSectionContent = styled.form`
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  min-height: 20px;
  border-radius: 20px;
  padding: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  position: relative;
  margin-top: 10px;
`

