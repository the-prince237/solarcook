import React from 'react'
import { useEffect } from 'react'
import { useContext } from 'react'

import { GeneralInfos, Payments, Security } from './'
import { CartContext } from '../../utils/context'

import { Title2 } from '../../utils/style/Atoms'
import { AccountWrapper, AccountAside, AccountBody, AccountNav, AccountContent } from './style'

const Account = () => {

  const { cart, toggleCart } = useContext(CartContext)

  useEffect(() => {
    toggleCart("open");
  }, [cart.isOn])

  return (
    <AccountWrapper>
      <AccountAside>
        <div id='account-aside__top'>
          <Title2 className='gradient__text'>Salut Durin !</Title2>
          <p>Heureux de vous revoir :) !</p>
        </div>
        <AccountNav>
          <h3>Aller À</h3>
          <a href='#general-infos'>Général</a>
          <a href='#payments'>Payements</a>
          <a href='#security'>Sécurité</a>
        </AccountNav>
      </AccountAside>
      <AccountBody className='section__padding'>
        <GeneralInfos sectionId="general-infos" sectionTitle="Informations Générales" />
        <Payments sectionId="payments" sectionTitle="Payements" />
        <Security sectionId="security" sectionTitle="Sécurité" />
      </AccountBody>
    </AccountWrapper>
  )
}

export default Account