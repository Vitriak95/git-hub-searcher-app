import React, {FC, useEffect} from 'react';
import {useTypedSelector} from '../../store/hooks/useTypedSelector';
import {useDispatch} from 'react-redux';
import {fetchUsers} from '../../store/action-creators/user';
import {bindActionCreators} from 'redux';
import {useActions} from '../../store/hooks/useActions';

const UserList: FC = () => {
  const {users, error, loading} = useTypedSelector(state => state.user);
  console.log('UserList state', users, error, loading);

  const {fetchUsers} = useActions();

  useEffect(() => {
    fetchUsers();
  }, [])

  if (loading) {
    return <h1>Идет загрузка...</h1>
  }
  if (error) {
    return  <h1>{error}</h1>
  }
  return (
    <div>
      {users.map(user => <div key={user.id}>{user.name}</div>)}
    </div>
  )
}

export default UserList;
