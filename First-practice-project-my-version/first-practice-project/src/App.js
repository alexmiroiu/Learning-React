import './App.css';
import {useState} from 'react';
import AddUser from './components/AddingUsers/AddUser';
import UserList from './components/UserList/UserList';
import ErrorModal from './components/errorModal/errorModal';


function App() {
  const [userList, setUserList] = useState([]);
  const [errorStatus, setErrorStatus] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const addUser = (userData) => {
    if(userData.name.length === 0) {
      setErrorStatus(true);
      setErrorMessage('Please enter a valid name');
      console.log(errorMessage)
      return;
    }

    if(userData.age <= 0) {
      setErrorStatus(true);
      setErrorMessage('Please enter a valid age');
      return;
    }
    if(userData.age <= 10) {
      setErrorStatus(true);
      setErrorMessage('You are not allowed to register');
      return;
    }

    setUserList((prevData) => {
      const currentUsers = [...prevData];
      currentUsers.push(userData);
      console.log(currentUsers);
      return currentUsers;
    })
  }

  const clearErrorMessage = () => {
    setErrorMessage('');
    setErrorStatus(false);
  }

  return (
    <div className="content-wrapper">
      {errorStatus && <ErrorModal message={errorMessage} clearError={clearErrorMessage}></ErrorModal>}
      <AddUser saveUser={addUser}/>
      <UserList items={userList}/>
    </div>
  );
}

export default App;
