import { useRef, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import AuthContext from '../../store/auth-context';
import classes from './ProfileForm.module.css';

const ProfileForm = () => {
  const newPasswordRef = useRef();
  const authCtx = useContext(AuthContext)
  const history = useHistory();

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredPassword = newPasswordRef.current.value;
    // validare aici

    fetch('https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyAhj9Pp8L2c--uRS91F1wVRyFsbS8V90do', {
      method: 'POST',
      body: JSON.stringify({
        idToken: authCtx.token,
        password: enteredPassword,
        returnSecureToken: false
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => {
      history.replace('/')
    });
  }

  return (
    <form className={classes.form}>
      <div className={classes.control}>
        <label htmlFor='new-password'>New Password</label>
        <input type='password' id='new-password' minLength="7" ref={newPasswordRef}/>
      </div>
      <div className={classes.action}>
        <button onClick={submitHandler}>Change Password</button>
      </div>
    </form>
  );
}

export default ProfileForm;
