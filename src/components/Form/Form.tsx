import style from './Form.module.css';
import { useState, useEffect } from 'react';

type InputStatus = {
  warning?: boolean;
  message?: string;
};

function Form() {
  const [inputValue, setInputValue] = useState({
    firstName: '',
    lastName: '',
    emailAddress: '',
    password: ''
  });

  const [placeholder, setPlaceholder] = useState({
    firstName: 'First Name',
    lastName: 'Last Name',
    emailAddress: 'Email Address',
    password: 'Password'
  });

  const [firstNameStatus, setFirstNameStatus] = useState<InputStatus>({});
  const [lastNameStatus, setLastNameStatus] = useState<InputStatus>({});
  const [emailStatus, setEmailStatus] = useState<InputStatus>({});
  const [passwordStatus, setPasswordStatus] = useState<InputStatus>({});
  const [formValid, setFormValid] = useState(false);

  const FORM_PATTERNS = {
    firstName: /^[a-z]{2,20}$/i,
    lastName: /^[a-z]{2,20}$/i,
    email: /^([\w.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/i,
    password: /^[\w!";#$%&'()*+,-.\/:<=>?@\[\]^`{|}~]{6,30}$/
  };

  useEffect(() => firstNameStatus.warning ||
                  lastNameStatus.warning ||
                  emailStatus.warning ||
                  passwordStatus.warning ?
                    setFormValid(false) : setFormValid(true), [
                      firstNameStatus.warning,
                      firstNameStatus.message,
                      lastNameStatus.warning,
                      lastNameStatus.message,
                      emailStatus.warning,
                      emailStatus.message,
                      passwordStatus.warning,
                      passwordStatus.message
                    ]);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setInputValue({
      firstName: '',
      lastName: '',
      emailAddress: '',
      password: ''
    });

    setPlaceholder({
      firstName: 'First Name',
      lastName: 'Last Name',
      emailAddress: 'Email Address',
      password: 'Password'
    });

    alert('Done!');
  }

  function blurHandler(event: React.FocusEvent<HTMLInputElement>) {
    switch(event.target.name) {
      case 'firstName':
        if (event.target.value.length < 1) {
          setFirstNameStatus({
            warning: true,
            message: 'First Name cannot be empty'
          });
        }
        setPlaceholder(prevStat => ({...prevStat, firstName: ''}));
        break;
      case 'lastName':
        if (event.target.value.length < 1) {
          setLastNameStatus({
            warning: true,
            message: 'Last Name cannot be empty'
          });
        }
        setPlaceholder(prevStat => ({...prevStat, lastName: ''}));
        break;
      case 'emailAddress':
        if (event.target.value.length < 1) {
          setEmailStatus({
            warning: true,
            message: 'Email Address cannot be empty'
          });
        }
        setPlaceholder(prevStat => ({...prevStat, emailAddress: ''}));
        break;
      case 'password':
        if (event.target.value.length < 1) {
          setPasswordStatus({
            warning: true,
            message: 'Password cannot be empty'
          });
        }
        setPlaceholder(prevStat => ({...prevStat, password: ''}));
    }
  }

  function firstNameHandler(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.target.value;

    setInputValue(prevState => ({...prevState, firstName: value}));

    if (!FORM_PATTERNS.firstName.test(value)) {
      const noFirstName = value.length < 1 ?
                        'First Name cannot be empty' : '';
      const notFirstName = value.match(/[\W\d]+/) ?
                        'Please enter valid characters (A-Z)' : '';
      const shortFirstName = value.length === 1 ?
                        'First Name is too short' : '';
      const longFirstName = value.length > 16 ?
                        'First Name is too long' : '';

      setFirstNameStatus({
        warning: true,
        message: notFirstName || noFirstName || shortFirstName || longFirstName
      });

      setPlaceholder(prevStat => ({...prevStat, firstName: ''}));
    } else {
      setFirstNameStatus({
        warning: false,
        message: ''
      });
    }
  }

  function lastNameHandler(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.target.value;

    setInputValue(prevState => ({...prevState, lastName: value}));

    if (!FORM_PATTERNS.lastName.test(value)) {
      const noLastName = value.length < 1 ?
                        'Last Name cannot be empty' : '';
      const notLastName = value.match(/[\W\d]+/) ?
                        'Please enter valid characters (A-Z)' : '';
      const shortLastName = value.length === 1 ?
                        'Last Name is too short' : '';
      const longLastName = value.length > 16 ?
                        'Last Name is too long' : '';

      setLastNameStatus({
        warning: true,
        message: notLastName || noLastName || shortLastName || longLastName
      });

      setPlaceholder(prevStat => ({...prevStat, lastName: ''}));
    } else {
      setLastNameStatus({
        warning: false,
        message: ''
      });
    }
  }

  function emailHandler(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.target.value;

    setInputValue(prevState => ({...prevState, emailAddress: value}));

    if (!FORM_PATTERNS.email.test(value)) {
      const noEmail = value.length < 1 ?
                       'Email Address cannot be empty' : '';

      setEmailStatus({
        warning: true,
        message: noEmail || 'Looks like this is not an email'
      });

      setPlaceholder(prevStat => ({...prevStat, emailAddress: ''}));
    } else {
      setEmailStatus({
        warning: false,
        message: ''
      });
    }
  }

  function passwordHandler(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.target.value;

    setInputValue(prevState => ({...prevState, password: value}));

    if (!FORM_PATTERNS.password.test(value)) {
      const noPassword = value.length < 1 ?
                       'Password cannot be empty' : '';
      const shortPassword = value.length < 6 ?
                       'Password cannot be shorter than 6 characters' : '';
      const longPassword = value.length > 30 ?
                       'Password cannot be longer than 30 characters' : '';
      const invalidPassword = value.length > 6 ?
                       'Looks like you are using invalid characters' : '';

      setPasswordStatus({
        warning: true,
        message: noPassword || shortPassword || longPassword || invalidPassword
      });

      setPlaceholder(prevStat => ({...prevStat, password: ''}));
    } else {
      setPasswordStatus({
        warning: false,
        message: ''
      });
    }
  }

  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <div className={`${style.form__wrapper} ${firstNameStatus.warning ? style.warning : ''}`}>
        <input className={`${style.form__input} ${firstNameStatus.warning ? style.warning : ''}`}
               type='text' name='firstName' value={inputValue.firstName} placeholder={placeholder.firstName}
               onChange={firstNameHandler} onBlur={blurHandler} />
        {firstNameStatus.warning && <span className={style.form__iconWarning}></span>}
        {(firstNameStatus.warning && firstNameStatus.message) && <p className={style.form__warningMessage}>
          {firstNameStatus.message}
        </p>}
      </div>

      <div className={`${style.form__wrapper} ${lastNameStatus.warning ? style.warning : ''}`}>
        <input className={`${style.form__input} ${lastNameStatus.warning ? style.warning : ''}`}
               type='text' name='lastName' value={inputValue.lastName} placeholder={placeholder.lastName}
               onChange={lastNameHandler} onBlur={blurHandler} />
        {lastNameStatus.warning && <span className={style.form__iconWarning}></span>}
        {(lastNameStatus.warning && lastNameStatus.message) && <p className={style.form__warningMessage}>
          {lastNameStatus.message}
        </p>}
      </div>

      <div className={`${style.form__wrapper} ${emailStatus.warning ? style.warning : ''}`}>
        <input className={`${style.form__input} ${emailStatus.warning ? style.warning : ''}`}
               type='email' name='emailAddress' value={inputValue.emailAddress} placeholder={placeholder.emailAddress}
               onChange={emailHandler} onBlur={blurHandler} />
        {emailStatus.warning && <span className={style.form__iconWarning}></span>}
        {(emailStatus.warning && emailStatus.message) && <p className={style.form__warningMessage}>
          {emailStatus.message}
        </p>}
      </div>

      <div className={`${style.form__wrapper} ${passwordStatus.warning ? style.warning : ''}`}>
        <input className={`${style.form__input} ${passwordStatus.warning ? style.warning : ''}`}
               type='password' name='password' value={inputValue.password} placeholder={placeholder.password}
               onChange={passwordHandler} onBlur={blurHandler} />
        {passwordStatus.warning && <span className={style.form__iconWarning}></span>}
        {(passwordStatus.warning && passwordStatus.message) && <p className={style.form__warningMessage}>
          {passwordStatus.message}
        </p>}
      </div>

      <button className={`${style.form__button} ${!formValid ? style.disabled : ''}`} type='submit'
              disabled={!formValid}>Claim your free trial</button>
      <p className={style.form__text}>
        By clicking the button, you are agreeing to our <a className={style.form__link} href="#">Terms and Services</a>
      </p>
    </form>
  );
}

export default Form;
