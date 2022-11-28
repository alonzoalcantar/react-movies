import { useState } from 'react';
import Navbar from './Navbar';
import SignInPage from './SignInPage';

import './App.css';

function App() {

  const [user, setUser] = useState(null);

  return (
    <div className="App">
      {user ? (
        <>
        <Navbar
        user = {user} />
        </>
      ) : (
        <SignInPage
        setUser={setUser} />
       )}

    </div>
  );
}

export default App;
