import React, {FC, useContext} from 'react';
import './FetchedPosts.scss';
import Post from '../Post/Post';
import {ThemeContext} from '../../App';

interface FetchedPostsPropsInterface {
  posts: Array<any>
}

const FetchedPosts: FC<FetchedPostsPropsInterface> = ({posts}) => {
  const theme = useContext(ThemeContext);
  console.log('FetchedPosts theme', theme)
  if (!posts.length) {
    return (
      <>
        <div className="text-center">Постов нет</div>
        <button className="btn btn-primary">Загрузить</button>
      </>
    )
  }
  return (
    <div>
      {posts.map((post) => <Post key={post} post={post}/>)}
    </div>
  )
}

export default FetchedPosts
