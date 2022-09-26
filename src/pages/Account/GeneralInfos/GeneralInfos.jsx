import React from 'react'

import { Title3, InputSet, InputBar, InputRadio, InputDate, GenderSet, SubmitForm } from '../../../utils/style/Atoms'
import { AccountSectionWrapper, AccountSectionContent } from '../style'
import { Section } from './style'

const GeneralInfos = ({ sectionTitle, sectionId }) => {
  return (
    <AccountSectionWrapper id={sectionId}>
      <Title3>{sectionTitle}</Title3>
      <AccountSectionContent>
          <InputSet>
            <InputBar type="text" placeholder='Prénom' name='first-name' />
          </InputSet>
          <InputSet>
            <InputBar type="text" placeholder='Nom' name='last-name' />
          </InputSet>
        <InputSet>
          <InputBar type="text" name="address" id="" placeholder='addresse' />
        </InputSet>
        <InputSet>
          <InputBar type="email" placeholder='email' long={true} name="email" />
        </InputSet>
        <InputSet>
          <InputBar type="tel" placeholder='phone' long={true} name="phone" />
        </InputSet>
        <InputSet className="second-section">
          <label htmlFor="date-of-birth">Date de naissance</label>
          <InputDate type="date" />
        </InputSet>
        <InputSet className="second-section">
          <label htmlFor="gender">Genre</label>
          <GenderSet>
            <div>M <InputRadio type="radio" name="gender" id="" /></div>
            <div>F <InputRadio type="radio" name="gender" id="" /></div>
          </GenderSet>
        </InputSet>
      </AccountSectionContent>
    </AccountSectionWrapper>
  )
}

export default GeneralInfos