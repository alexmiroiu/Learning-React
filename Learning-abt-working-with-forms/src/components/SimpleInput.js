import { useState } from 'react';

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState('');
  const [nameTouched, setNameTouched] = useState(false);

  const nameIsValid = enteredName.trim() !== '';
  const nameInputIsInvalid = !nameIsValid && nameTouched;

  let formIsValid = false;

    if(nameIsValid) {
      formIsValid = true;
    }



  const nameInputChangeHandler = event => {
    setEnteredName(event.target.value);
  }

  const nameInputBlurHandler = event => {
    setNameTouched(true);
  }
  
  const formSubmissionHandler = event => {
    event.preventDefault();
    setNameTouched(true);

    if (enteredName.trim() === '') {
      return;
    }

    setEnteredName('');
    setNameTouched(false);
  }


  const nameInputClasses = nameInputIsInvalid ? 'form-control invalid' : 'form-control'

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input value={enteredName} type='text' id='name' onChange={nameInputChangeHandler} onBlur={nameInputBlurHandler}/>
        {nameInputIsInvalid && <p className='error-text'>Name must not be empty</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
