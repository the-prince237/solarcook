import React, { useState } from 'react'
import { useContext } from 'react';
import { CartContext } from '../../utils/context';

import CheckOrder from './CheckOrder';

import products from '../../data/products';

import { CheckoutWrapper, CheckInfos, CheckOrderWrapper, ValidateButton } from './style'
import { Title3, Title4 } from '../../utils/style/Atoms';

const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

const formValid = ({ formErrors, ...rest }) => {
  let valid = true;

  Object.values(formErrors).forEach(val => {
    val.length > 0 && (valid = false);
  });

  Object.values(rest).forEach(val => {
    val.length <= 0 && (valid = false);
  });

  return valid;
}

const Checkout = () => {

  const [order, setOrder] = useState({subTotal: '', discount: '', deliveryCharge: 1000, grandTotal: '', customer: "", paymentmethod: '', items: [] })
  const [form, setForm] = useState({email: "", deliveryAddress:"", number:"", formErrors: { email:"", address: "", number: ""}});

  const url = new URL(window.location);
  const toCheckout = url.searchParams.get("toCheckout");
  const productId = url.searchParams.get("productId");
  const { image, name, category, price } = products.filter((prod) => prod.id = productId).length > 0 && products.filter((prod) => prod.id = productId)[0];

  const { cart } = useContext(CartContext)

  const handleChange = (e) => {
    const {name, value} = e.target;
    setForm((form) => ({ ...form, [name]: value }))

    switch(name) {
      case "deliveryAddress":
        setForm((form) => (
          { ...form, formErrors: {...form.formErrors, address: value.length === 0 ? "adresse invalide" : "" }}
        ))
        break;
      case "email" :
        setForm((form) => (
          { ...form, formErrors: { ...form.formErrors, email: emailRegex.test(value) ? "" : "adresse e-mail invalide" }}
        ))
        break;
      case "number" :
        setForm((form) => (
          { ...form, formErrors: { ...form.formErrors, number: value.trim().length === 9 ? "" : "Numéro invalide" }}
        ))
        break;
      default:
        break;
    }
    console.log(form.formErrors);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setOrder({subTotal: cart.total, discount: "", deliveryCharge: 1000, grandTotal: cart.netTotal, customer: "", paymentmethod: 'À la livraison', items: cart.items})
    console.log({form})
    console.log({order})
  }

  return (
    <CheckoutWrapper>
      <CheckOrderWrapper>
        <CheckOrder toCheckout={toCheckout} image={image} name={name} category={category} price={price} cartList={cart.items} />
      </CheckOrderWrapper>
      <div className='order-total'><Title3>Prix Total :</Title3><Title4>{cart.netTotal} Frcfa</Title4><p>{cart.total-cart.netTotal} Fcfa économisés</p></div>
      <CheckInfos onSubmit={handleSubmit}>
        <Title3>Informations de commande</Title3>
        <div className='form'>
          <span className='input-set'>
            <input placeholder="Addresse de livraison" type="text" name="deliveryAddress" id="" value={form.deliveryAddress}  onChange={handleChange} />
            <p>{form.formErrors.address}</p>
          </span>
          <span className='input-set'>
            <input placeholder="Addresse email" type="text" name="email" value={form.email} onChange={handleChange} />
            <p>{form.formErrors.email}</p>
          </span>
          <span className='input-set'>
            <input placeholder="Numéro de téléphone" type="number" name="number" id="" value={form.tel} onChange={handleChange} />
            <p>{form.formErrors.number}</p>
          </span>
        </div>
        <ValidateButton type='submit'>
          Valider La Commande
        </ValidateButton>
      </CheckInfos>
    </CheckoutWrapper>
  )
}

export default Checkout