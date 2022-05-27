import React, {useEffect} from 'react';
import './UserDetailsPage.scss';
import {useParams} from 'react-router-dom';
import {convertIsoStringToDate} from '../../common/utils';
import {useActions} from '../../store/hooks/useActions';
import {useTypedSelector} from '../../store/hooks/useTypedSelector';
import {getProfileUserData} from '../../store/selectors';
import {Repositories} from '../../components/Repositories/Repositories';

export const UserDetailsPage = () => {
  const {user} = useParams();
  // console.log('params user', user);

  const {fetchProfileUserData} = useActions();
  const {data, loading, error} = useTypedSelector(getProfileUserData)

  useEffect(() => {
    if (user) {
      fetchProfileUserData(user);
    }
  }, [])

  return (
    <div className="container">
      {loading && <div>Loading...</div>}
      {error && <div className="error">{error}</div>}
      {data && <div className="user-profile">
        <div className="avatar">
          <img src={data?.avatar_url} alt={data?.login} />
        </div>
        <div>
          <div className="detail-item"><strong>UserName:</strong> {data?.login}</div>
          <div className="detail-item"><strong>Name:</strong> {data?.name}</div>
          <div className="detail-item"><strong>Location:</strong> {data?.location}</div>
          <div className="detail-item"><strong>JoinDate:</strong> {data?.created_at ? convertIsoStringToDate(data?.created_at) : '-'}</div>
          <div className="detail-item"><strong>Followers:</strong> {data?.followers}</div>
          <div className="detail-item"><strong>Following:</strong> {data?.following}</div>
        </div>
      </div> }

      <Repositories />
    </div>
  )
}
