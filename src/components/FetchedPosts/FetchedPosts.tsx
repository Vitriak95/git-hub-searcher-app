import React, {FC, useContext} from 'react';
import './FetchedPosts.scss';
import Post from '../Post/Post';
import {ThemeContext} from '../../App';
import {PostInterface} from '../../common/types';

interface FetchedPostsPropsInterface {
  posts: Array<PostInterface>
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
      {posts.map((post) => <Post key={post.id} post={post}/>)}
    </div>
  )
}

export default FetchedPosts
