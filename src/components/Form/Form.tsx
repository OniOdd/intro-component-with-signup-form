import style from './Form.module.css';
import InputField from '../InputField/InputField.tsx';
import { useState } from 'react';

type Inputs = {
  firstName?: string;
  lastName?: string;
  emailAddress?: string;
  password?: string;
  value?: string;
};

function Form() {
  const [inputValue, setInputValue] = useState<Inputs>({});

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const name = event.target.name;
    const value = event.target.value;

    setInputValue(i => ({...i, [name]: value}));
  }

  return (
    <form className={style.form}>
      <InputField className={style.form__input} type='text' name='firstName'
                  value={inputValue.firstName || ''} placeholder='First Name'
                  onChange={handleChange} />

      <InputField className={style.form__input} type='text' name='lastName'
                  value={inputValue.lastName || ''} placeholder='Last Name'
                  onChange={handleChange} />

      <InputField className={style.form__input} type='email' name='emailAddress'
                  value={inputValue.emailAddress || ''} placeholder='Email Address'
                  onChange={handleChange} />

      <InputField className={style.form__input} type='password' name='password'
                  value={inputValue.password || ''} placeholder='Password'
                  onChange={handleChange} />

      <button className={style.form__button} type='submit'>Claim your free trial</button>
      <p className={style.form__text}>
        By clicking the button, you are agreeing to our <a className={style.form__link} href="#">Terms and Services</a>
      </p>
    </form>
  );
}

export default Form;
