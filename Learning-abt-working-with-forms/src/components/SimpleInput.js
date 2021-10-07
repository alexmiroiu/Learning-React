import { useState } from 'react';

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState('');
  const [nameTouched, setNameTouched] = useState(false);
  const [enteredEmail, setEnteredEmail] = useState('');
  const [emailTouched, setEmailTouched] = useState(false);

  const nameIsValid = enteredName.trim() !== '';
  const nameInputIsInvalid = !nameIsValid && nameTouched;

  const emailIsValid = enteredEmail.includes('@') && enteredEmail.includes('.');
  const emailInputIsInvalid = !emailIsValid && emailTouched;
  let formIsValid = false;

    if(nameIsValid && emailIsValid) {
      formIsValid = true;
    }



  const nameInputChangeHandler = event => {
    setEnteredName(event.target.value);
  }

  const nameInputBlurHandler = event => {
    setNameTouched(true);
  }

  const emailInputChangeHandler = event => {
    setEnteredEmail(event.target.value);
  }

  const emailInputBlurHandler = event => {
    setEmailTouched(true);
  }
  
  const formSubmissionHandler = event => {
    event.preventDefault();
    setNameTouched(true);

    if (enteredName.trim() === '' || !enteredEmail.includes('@')) {
      return;
    }

    setEnteredEmail('');
    setEnteredName('');
    setNameTouched(false);
    setEmailTouched(false);
  }


  const nameInputClasses = nameInputIsInvalid ? 'form-control invalid' : 'form-control';
  const emailInputClasses = emailInputIsInvalid ? 'form-control invalid' : 'form-control';

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input value={enteredName} type='text' id='name' onChange={nameInputChangeHandler} onBlur={nameInputBlurHandler}/>
        {nameInputIsInvalid && <p className='error-text'>Name must not be empty</p>}
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
