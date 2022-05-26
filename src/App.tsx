import React from 'react';
import {Header} from './components/Header/Header';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {HomePage} from './pages/HomePage/HomePage';
import {UserDetailsPage} from './pages/UserDetailsPage/UserDetailsPage';
import {PostPage} from './pages/PostsPage/PostPage';


export const ThemeContext = React.createContext('light');

function App() {
  return (
    <div>
      <ThemeContext.Provider value={'dark'}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={ <HomePage />} />
            <Route path="/posts" element={ <PostPage />} />
            <Route path="/user/:user" element={ <UserDetailsPage />}/>
          </Routes>
        </BrowserRouter>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
