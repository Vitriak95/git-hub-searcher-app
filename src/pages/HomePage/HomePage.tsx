import React, {ChangeEvent, FC, useEffect, useState} from 'react';
import {Input} from '../../components/Input/Input';
import JSON_DATA from '../../MOCK_DATA.json';
import './HomePage.scss';
import {Link} from 'react-router-dom';
import {BaseApiUrl} from '../../common/variables';
import {UserInterface} from '../../common/types';

export const HomePage: FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [userData, setUserData] = useState<UserInterface[]>([]);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetchAllUsersData();
  }, []);

  console.log('userData', userData);
  console.log('error', error);
  console.log('isLoaded', isLoaded);

  const fetchAllUsersData = () => {
    fetch(`${BaseApiUrl}/users?per_page=100`)
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        throw new Error('Something went wrong');
      })
      .then((result: UserInterface[]) => {
        setIsLoaded(true);
        setUserData(result)
      })
      .catch(error => {
        setIsLoaded(false);
        setError(error.message);
      })
  }

  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value)
  }

  return (
    <div className="home-page container">
      HomePage

      <Input
        id="searchAuthor"
        label="Search for users"
        onChange={handleInput}
      />

      {/*<input*/}
      {/*  type="text"*/}
      {/*  placeholder="Search for users"*/}
      {/*  onChange={(e) => {*/}
      {/*    setSearchTerm(e.target.value)*/}
      {/*  }}*/}
      {/*/>*/}

      {isLoaded && userData.filter((el: any) => el.login.includes(searchTerm)).map((user: any) => {
        return (
          <div className="user-item" key={user.id}>
            <div className="avatar">
              <img src={user.avatar_url} alt={user.login} />
            </div>
            <div className="login-user">

              <Link to={`/${user.login}`}>{user.login}</Link>
            </div>

          </div>
        )
      })}

      {error && <div className="error">{error}</div>}

      {/*{JSON_DATA.filter((el) => el.first_name.includes(searchTerm)).map((val, key) => {*/}
      {/*  return (*/}
      {/*    <div className="user" key={key}>*/}
      {/*      <p>{val.first_name}</p>*/}
      {/*    </div>*/}
      {/*  )*/}
      {/*})}*/}
    </div>
  )
}
