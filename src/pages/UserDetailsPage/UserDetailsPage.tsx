import React, {ChangeEvent, useEffect, useState} from 'react';
import './UserDetailsPage.scss';
import {useParams} from 'react-router-dom';
import {BaseApiUrl} from '../../common/variables';
import {UserDetailsInterface, UsersReposInterface} from '../../common/types';
import {convertIsoStringToDate} from '../../common/utils';
import {Input} from '../../components/Input/Input';

export const UserDetailsPage = () => {
  const {user} = useParams();
  console.log('params user', user);

  const [searchTerm, setSearchTerm] = useState('');

  const [userData, setUserData] = useState<UserDetailsInterface | null>(null);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  const [userRepos, setUserRepos] = useState<UsersReposInterface[] | null>(null);
  const [errorUserRepos, setErrorUserRepos] = useState(null);
  const [isLoadedRepos, setIsLoadedRepos] = useState<boolean>(false);

  console.log('UserDetailsPage userData', userData);
  console.log('UserDetailsPage error', error);
  console.log('UserDetailsPage isLoaded', isLoaded);

  console.log('UserDetailsPage userRepos', userRepos)

  useEffect(() => {
    if (user) {
      fetchUserDataByName(user);
      fetchUserRepos(user);
    }
  }, [])

  const fetchUserDataByName = (userName: string) => {
    fetch(`${BaseApiUrl}/users/${userName}`)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw new Error('fetchUserDataByName: Something went wrong');
      })
      .then((result) => {
        setIsLoaded(true);
        setUserData(result)
      })
      .catch((error) => {
        setIsLoaded(false);
        setError(error);
      })
  }

  const fetchUserRepos = (userName: string) => {
    fetch(`${BaseApiUrl}/users/${userName}/repos?per_page=100`)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw new Error('fetchUserRepos: Something went wrong');
      })
      .then((result) => {
        setIsLoadedRepos(true);
        setUserRepos(result)
      })
      .catch((error) => {
        setIsLoadedRepos(false);
        setErrorUserRepos(error);
      })
  }

  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value)
  }

  return (
    <div className="container">
      <div className="user-profile">
        <div className="avatar">
          <img src={userData?.avatar_url} alt={userData?.login} />
        </div>
        <div>
          <div className="detail-item"><strong>UserName:</strong> {userData?.login}</div>
          <div className="detail-item"><strong>Name:</strong> {userData?.name}</div>
          <div className="detail-item"><strong>Location:</strong> {userData?.location}</div>
          <div className="detail-item"><strong>JoinDate:</strong> {userData?.created_at ? convertIsoStringToDate(userData?.created_at) : '-'}</div>
          <div className="detail-item"><strong>Followers:</strong> {userData?.followers}</div>
          <div className="detail-item"><strong>Following:</strong> {userData?.following}</div>
        </div>
      </div>

      <div className="user-repos">
        <Input id="repo" label="Find repositories" onChange={handleInput} />

        {userRepos && userRepos.filter(repo => repo.full_name.includes(searchTerm)).map(repo => {
          return (
            <div key={repo.id}>
              <div><a href={repo.html_url} target="_blank">{repo.full_name}</a></div>
              <div>Forks: {repo.forks_count}</div>
              <div>Stars: {repo.stargazers_count}</div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
