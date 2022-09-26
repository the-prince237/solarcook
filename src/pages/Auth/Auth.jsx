import React, { useState } from 'react'
import { ImGoogle2, ImFacebook2 } from 'react-icons/im'

import { AuthWrapper, AuthForm, AltAuthTypes, AuthFooter, SwitchButton } from './style'
import { Title3, InputSet, InputBar, InputRadio, InputDate, GenderSet, SubmitForm } from '../../utils/style/Atoms'

const Auth = () => {

  const [formType, setFormType] = useState("login");
  // const [chooseEmail, setChooseEmail] = useState(true)

  const submithandler = (e) => {
    e.preventDefault();
    window.location.href="/";
  }

  return (
    <AuthWrapper className='section__margin'>
      <Title3>{formType === "signup" ? "Inscription" : formType === "login" ? "Connexion" : "Mot de passe Oublié"}</Title3>
      <AuthForm className='section__margin' onSubmit={submithandler}>
        { formType === "signup" &&
          <>
            <InputSet>
              <InputBar type="text" placeholder='Prénom' name='first-name' />
            </InputSet>
            <InputSet>
              <InputBar type="text" placeholder='Nom' name='last-name' />
            </InputSet>
          </> 
        }
        {/* <div>
          {chooseEmail ? <Input type="email" long name="email" /> : <Input type="number" long name="phone" /> }
        </div> */}
        <InputSet>
          <InputBar type="email" placeholder='email' long={true} name="email" />
        </InputSet>
        
        { formType === "signup" &&
          <InputSet>
            <InputBar type="tel" placeholder='phone' long={true} name="phone" />
          </InputSet>
        }
        { formType !== "forgotPass" &&
          <InputSet>
            <InputBar long={true} type="password" name='password' placeholder='mot de passe' />
          </InputSet>
        }
        { formType === "signup" &&
          <InputSet>
            <InputBar long={true} type="password" name="confirm-password" placeholder='Confirmez le mot de passe' /> 
          </InputSet>
        }
        { formType === "signup" && 
          <>
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
          </>
        }
        <SubmitForm type="submit">{formType === "forgotPass" ? "Envoyer Le Code" : formType === "signup" ? "Se Connecter" : "S'inscrire"}</SubmitForm>
        { formType !== "forgotPass" &&
          <>
            <div className='or'><span /> ou <span /></div>
            <AltAuthTypes>
              <ImGoogle2 className='alt-auth-type' />
              <ImFacebook2 className='alt-auth-type' />
            </AltAuthTypes>
          </>
        }
      </AuthForm>
      <AuthFooter>
        {formType === "login" ? <SwitchButton onClick={() => setFormType("forgotPass")}>mot de passe oublié </SwitchButton> : <div>déjà inscrit ?</div> }
        {formType === "login" ? <SwitchButton onClick={() => setFormType("signup")}>Inscription</SwitchButton> : <SwitchButton onClick={() => setFormType("login")}>Connexion</SwitchButton>}
      </AuthFooter>
    </AuthWrapper>
  )
}

export default Auth