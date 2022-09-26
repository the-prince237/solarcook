import React from 'react'
import { useState } from 'react'

import { Title3, Title4 } from '../../../utils/style/Atoms'
import { AccountSectionContent, AccountSectionWrapper } from '../style'
import { PaymentNav, PaymentOption, PaymentBody, MobileOption } from './style'

const Payments = ({ sectionId, sectionTitle }) => {

  const [mode, setMode] = useState("mobile");
  const [mobileOption, setMobileOption] = useState("")

  return (
    <AccountSectionWrapper id={sectionId}>
      <Title3>{sectionTitle}</Title3>
      <AccountSectionContent>
        <PaymentNav>
          <PaymentOption onClick={() => setMode("mobile")} mode="mobile" selectedMode={mode}>
            Mobile
          </PaymentOption>
          <PaymentOption onClick={() => setMode("bank")} mode="bank" selectedMode={mode}>
            Carte Bancaire
          </PaymentOption>
          <PaymentOption onClick={() => setMode("paypal")} mode="paypal" selectedMode={mode}>
            Paypal
          </PaymentOption>
        </PaymentNav>
        <PaymentBody>
          {mode === "mobile" &&
          <>
            <Title4>Choisissez Votre Fournisseur Mobile</Title4>
            <div className='mobile-options'>
              <MobileOption option="om" selectedOption={mobileOption} onClick={() => setMobileOption("om")} ><img src="./images/omLogo.png" alt="" /><span>Orange Money</span></MobileOption>
              <MobileOption option="momo" selectedOption={mobileOption} onClick={() => setMobileOption("momo")} ><img src="./images/momoLogo.png" alt="" /><span>Mobile Money</span></MobileOption>
            </div>
          </>
          }
          {mode === "bank" &&
          <>
            <Title4>Sorry, Not Available Yet !</Title4>
          </>
          }
          {mode === "paypal" &&
          <>
            <Title4>Sorry, Not Available Yet !</Title4>
          </>
          }
        </PaymentBody>
      </AccountSectionContent>
    </AccountSectionWrapper>
  )
}

export default Payments