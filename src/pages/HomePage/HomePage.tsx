import React, {ChangeEvent, FC, useEffect, useState} from 'react';
import {Input} from '../../components/Input/Input';
import {useActions} from '../../store/hooks/useActions';
import {useTypedSelector} from '../../store/hooks/useTypedSelector';
import {getAllUsers} from '../../store/selectors';
import {User} from '../../components/User/User';
import {UserInterface} from '../../common/types';

import './HomePage.scss';

export const HomePage: FC = () => {
  const {fetchUsers} = useActions();
  const {data: usersData, loading, error} = useTypedSelector(getAllUsers);

  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value)
  }

  const filterUsers = (el: UserInterface) => el.login.toLowerCase().includes(searchTerm.toLowerCase());

  return (
    <div className="home-page container">
      <Input
        id="searchAuthor"
        label="Search for users"
        onChange={handleInput}
      />

      {loading && <div>Loading...</div>}
      {error && <div className="error">{error}</div>}

      {usersData && usersData.filter(filterUsers).map((user: UserInterface) => {
        return <User key={user.id} user={user} />
      })}
    </div>
  )
}
