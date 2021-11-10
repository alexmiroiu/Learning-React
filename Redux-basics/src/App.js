import { Fragment } from 'react';
import Counter from './components/Counter';
import Header from './components/Header';
import Auth from './components/Auth';
import UserProfile from './components/UserProfile';

import { useSelector } from 'react-redux';

function App() {

  const authenticated = useSelector(state => state.auth.isAuthenticated); 
  console.log(authenticated)

  return (
    <Fragment>
      <Header />
      {!authenticated && <Auth />}
      {authenticated && <UserProfile />}
      <Counter />

    </Fragment>
  );
}

export default App;
