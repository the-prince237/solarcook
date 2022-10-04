import React, { useState } from 'react'
import { ImGoogle2, ImFacebook2 } from 'react-icons/im'

import { AuthWrapper, AuthForm, AltAuthTypes, AuthFooter, SwitchButton } from './style'
import { Title3, InputSet, InputBar, InputRadio, InputDate, GenderSet, SubmitForm } from '../../utils/style/Atoms'
import { getUserRegister, getUserLogin, authenticate } from '../../api/services/getUserLogin';
import { NotificationManager } from 'react-notifications';

const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

const formValid = ({ formErrors, ...rest }) => {
  let valid = true;

  Object.values(formErrors).forEach(val => {
    val.length > 0 && (valid = false);
  });

  Object.values(rest).forEach(val => {
    val === null && (valid = false);
  });

  return valid;
}

const Auth = () => {

  const [formType, setFormType] = useState("login");
  // const [chooseEmail, setChooseEmail] = useState(true)
  const initialFormState = {
    firstName: "", lastName: "", email: "", telephone: "", password: "", confirmPassword: "", birthDate: "", gender: "", address: "", formErrors: { firstName: "", email: "", password: "", confirmPassword: "" }
  } 
  const [form, setForm] = useState(initialFormState);

  const switchFormType = (goto) => {
    setFormType(goto);
    setForm(initialFormState)
  }

  const handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;

    setForm((form) => ({ ...form, [name]: value }));

    switch (name) {
      case "firstName" :
        setForm((form) => (
          {...form, formErrors: { ...formErrors, firstName: value.length < 3 ? "3 characteres minimum requis" : ""}}
        ))
        break;
      case "email" :
        setForm((form) => (
          { ...form, formErrors: { ...formErrors, email: emailRegex.test(value) ? "" : "adresse e-mail invalide" }}
        ))
        break;
      case "password":
        formErrors.password =
          value.length < 6 ? "6 characteres minimums requis" : "";
        break;
      case "confirmPassword":
        formErrors.confirmPassword = 
          value === form.password ? "" : "les champs de mots de passe doivent être identiques"
        break;
      default:
        break;
    }
    console.log(form.formErrors)
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    let { firstName, lastName, email, telephone, password, address } = form;
    let registerData = { firstName: firstName, lastName: lastName, email: email, phone: telephone, password: password, address: address };
    let loginData = { email: email, password: password }
    console.log({form});
    if(formValid(form)) {
      if(formType === "login") {
        let user = await getUserLogin(loginData);
        if(user) {
          NotificationManager.success("success", "Login");
          await authenticate(user.token, email);
        } else {
          NotificationManager.error("Please check your email and password", "Input Error")
        }
      } else if (formType === "signup") {
        getUserRegister(registerData);
      }
     
    } else {
      alert("Please check your register")
    }
  }

  let { firstName, lastName, email, telephone, password, confirmPassword, address, formErrors } = form;
  return (
    <AuthWrapper className='section__margin'>
      <Title3>{formType === "signup" ? "Inscription" : formType === "login" ? "Connexion" : "Mot de passe Oublié"}</Title3>
      <AuthForm className='section__margin' onSubmit={handleSubmit}>
        { formType === "signup" &&
          <>
            <InputSet>
              <InputBar type="text" placeholder='Prénom' name='firstName' value={firstName} onChange={handleChange} />
              <p>{formErrors.firstName}</p>
            </InputSet>
            <InputSet>
              <InputBar type="text" placeholder='Nom' name='lastName' value={lastName} onChange={handleChange} />
            </InputSet>
          </> 
        }
        {/* <div>
          {chooseEmail ? <Input type="email" long name="email" /> : <Input type="number" long name="phone" /> }
        </div> */}
        <InputSet>
          <InputBar type="email" placeholder='email' long={true} name="email" value={email} onChange={handleChange}  />
              <p>{formErrors.email}</p>
        </InputSet>
        
        { formType === "signup" &&
          <InputSet>
            <InputBar type="tel" placeholder='phone' long={true} name="telephone" value={telephone} onChange={handleChange} />
          </InputSet>
        }
        { formType !== "forgotPass" &&
          <InputSet>
            <InputBar long={true} type="password" name='password' placeholder='mot de passe' value={password} onChange={handleChange} />
              <p>{formErrors.password}</p>
          </InputSet>
        }
        { formType === "signup" &&
          <InputSet>
            <InputBar long={true} type="password" name="confirmPassword" placeholder='Confirmez le mot de passe' value={confirmPassword} onChange={handleChange} /> 
              <p>{formErrors.confirmPassword}</p>
          </InputSet>
        }
        { formType === "signup" && 
          <>
            <InputSet className="second-section">
              <label htmlFor="date-of-birth">Addresse</label>
              <InputBar type="input" placeholder='Votre addresse' name='address' value={address} onChange={handleChange}/>
            </InputSet>
          </>
        }
        <SubmitForm type="submit">{formType === "forgotPass" ? "Envoyer Le Code" : formType === "signup" ? "S'inscrire" : "Se connecter"}</SubmitForm>
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
        {formType === "login" ? <SwitchButton onClick={() => switchFormType("forgotPass")}>mot de passe oublié </SwitchButton> : <div>déjà inscrit ?</div> }
        {formType === "login" ? <SwitchButton onClick={() => switchFormType("signup")}>Inscription</SwitchButton> : <SwitchButton onClick={() => switchFormType("login")}>Connexion</SwitchButton>}
      </AuthFooter>
    </AuthWrapper>
  )
}

export default Auth