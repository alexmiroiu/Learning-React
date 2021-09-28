import './App.css';
import AddUser from './components/AddingUsers/AddUser';
import UserList from './components/UserList/UserList';

function App() {
  return (
    <div className="content-wrapper">
      <AddUser />
      <UserList />
    </div>
  );
}

export default App;
