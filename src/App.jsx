import { useState } from 'react';
import {Route, Routes} from 'react-router-dom'

import Navbar from './Navbar';
import SignInPage from './SignInPage';
import MoviesListPage from './MoviesListPage';
import MoviesDetailsPage from './MovieDetailPage';
import ActorsListPage from './ActorListPage';

import './App.css';

function App() {

  const [user, setUser] = useState(null);

  return (
    <div className="App">
      {user ? (

        <>

        <Navbar
        user = {user} />

        <Routes>
          
          <Route 
          path = '/' 
          element = {<MoviesListPage />} />

          <Route
          path = '/movies/:movieName'
          element = {<MoviesDetailsPage />} />

          <Route
           path = '/actors' 
           element = {<ActorsListPage  />} />
        </Routes>
        </>
      ) : (
        <SignInPage
        setUser={setUser} />
       )}

    </div>
  );
}

export default App;
