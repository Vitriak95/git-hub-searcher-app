import React, {FC} from 'react';
import {Link} from 'react-router-dom';
import {UserInterface} from '../../common/types';
import './User.scss';

interface UserPropsInterface {
  user: UserInterface
}

export const User: FC<UserPropsInterface> = ({user}) => {
  return (
    <div className="user-item" key={user.id}>
      <div className="avatar">
        <img src={user.avatar_url} alt={user.login} />
      </div>
      <div className="login-user">
        <Link to={`/user/${user.login}`}>{user.login}</Link>
      </div>
      <div className="repos">Repos: ##</div>
    </div>
  )
}
