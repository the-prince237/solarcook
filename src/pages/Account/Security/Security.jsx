import React from 'react'

import { SecurityBody, PassInput, SubmitInput } from './style'
import { Title3, Title4 } from '../../../utils/style/Atoms'
import { AccountSectionContent, AccountSectionWrapper } from '../style'


const Security = ({ sectionId, sectionTitle}) => {
  return (
    <AccountSectionWrapper id={sectionId}>
      <Title3>{sectionTitle}</Title3>
      <AccountSectionContent>
        <Title4>Modifier Votre Mot de Passe</Title4>
        <SecurityBody>
          <PassInput type="password" name="password" placeholder="Entrez votre mot de passe actuel" />
          <PassInput type="password" name="password" placeholder="Entrez Le nouveau mot de passe" />
          <PassInput type="password" name="password" placeholder="Confirmez votre nouveau mot de passe" />
          <SubmitInput>Valider</SubmitInput>
        </SecurityBody>
      </AccountSectionContent>
    </AccountSectionWrapper>
  )
}

export default Security