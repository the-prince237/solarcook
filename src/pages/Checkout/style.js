import styled from "styled-components";

export const CheckoutWrapper = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  .order-total{
    display: flex;
    align-items: baseline;
    gap: 20px;
    p{
      color: green;
      font-weight: bold;
    }
  }
`

export const CheckInfos = styled.form`
  .form{
    display: flex;
    margin: 20px 0;
  }
  .input-set{
    display: flex;
    flex-direction: column;
    p{
      color: red;
    }
  }
  input{
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
    margin: 5px;
    padding: 10px 20px;
    border-radius: 15px;
  }
`

export const CheckOrderWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin: auto;
  justify-content: space-evenly;
`

export const OrderItem = styled.div`
  margin: 5px;
  .product-quantity{
    font-weight: bolder;
    color: white;
    background: green;
    font-size: 12px;
    border-radius: 15px;
    padding: 5px;
  }
  .product-price{
    font-weight: bolder;
    color: green;
    border: solid 1px green;
    font-size: 12px;
    border-radius: 15px;
    padding: 5px;
    margin-top: 5px;
  }
`

export const ValidateButton = styled.button`
  padding: 10px 25px;
  border-radius: 15px;
  font-weight: bold;
  background: rgba(0, 0, 0, 0.2);
  font-size: 12px;
  :hover{
    background: green;
    color: white;
  }
`