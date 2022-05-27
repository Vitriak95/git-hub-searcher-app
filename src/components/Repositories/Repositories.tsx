import React, {ChangeEvent, FC, useEffect, useState} from 'react';
import './Repositories.scss';
import {Input} from '../Input/Input';
import {useParams} from 'react-router-dom';
import {useActions} from '../../store/hooks/useActions';
import {useTypedSelector} from '../../store/hooks/useTypedSelector';
import {getUserRepositories} from '../../store/selectors';
import {UserInterface} from '../../common/types';

interface RepositoriesPropsInterface {
}

export const Repositories: FC<RepositoriesPropsInterface> = () => {
  const {user} = useParams();

  const {fetchUserRepositories} = useActions();
  const {data, loading, error} = useTypedSelector(getUserRepositories)

  useEffect(() => {
    if (user) {
      fetchUserRepositories(user);
    }
  }, [])

  const [searchTerm, setSearchTerm] = useState('');

  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value)
  }

  const filterRepositories = (el: any) => el.full_name.toLowerCase().includes(searchTerm.toLowerCase());

  return (
    <div className="user-repos">
      <Input id="repo" label="Find repositories" onChange={handleInput} />

      {data && data.filter(filterRepositories).map((repo: any) => {
        return (
          <div key={repo.id}>
            <div><a href={repo.html_url} target="_blank">{repo.full_name}</a></div>
            <div>Forks: {repo.forks_count}</div>
            <div>Stars: {repo.stargazers_count}</div>
          </div>
        )
      })}
    </div>
  )
}
