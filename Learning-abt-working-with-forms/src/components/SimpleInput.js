import { useState } from 'react';
import useInput from '../hooks/use-input';

const SimpleInput = (props) => {
  const { value: enteredName,
          hasError: nameInputHasError,
          isValid: enteredNameIsValid,
          valueChangeHandler: nameChangedHandler,
          inputBlurHandler: nameBlurHandler,
          reset: resetNameInput } = useInput(value => value.trim() !== '');


  const [enteredEmail, setEnteredEmail] = useState('');
  const [emailTouched, setEmailTouched] = useState(false);

  const emailIsValid = enteredEmail.includes('@') && enteredEmail.includes('.');
  const emailInputIsInvalid = !emailIsValid && emailTouched;

  let formIsValid = false;

    if(enteredNameIsValid && emailIsValid) {
      formIsValid = true;
    }

  const emailInputChangeHandler = event => {
    setEnteredEmail(event.target.value);
  }

  const emailInputBlurHandler = event => {
    setEmailTouched(true);
  }
  
  const formSubmissionHandler = event => {
    event.preventDefault();

    if (enteredName.trim() === '' || !enteredEmail.includes('@')) {
      return;
    }
    resetNameInput()

    setEnteredEmail('');
    setEmailTouched(false);
  }


  const nameInputClasses = nameInputHasError ? 'form-control invalid' : 'form-control';
  const emailInputClasses = emailInputIsInvalid ? 'form-control invalid' : 'form-control';

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input value={enteredName} type='text' id='name' onChange={nameChangedHandler} onBlur={nameBlurHandler}/>
        {nameInputHasError && <p className='error-text'>Name must not be empty</p>}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor='email'>Enter your email here</label>
        <input value={enteredEmail} type='text' id='email' onChange={emailInputChangeHandler} onBlur={emailInputBlurHandler}/>
        {emailInputIsInvalid && <p className='error-text'>Enter a valid email adress</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
