import React from 'react';
import {Header} from './components/Header/Header';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {HomePage} from './pages/HomePage/HomePage';
import {UserDetailsPage} from './pages/UserDetailsPage/UserDetailsPage';

function App() {
  return (
    <div>
      <Header />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <HomePage />} />
          <Route path="/:user" element={ <UserDetailsPage />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
