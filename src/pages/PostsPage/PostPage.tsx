import React, {useContext} from 'react';
import './PostPage.scss';
import PostForm from '../../components/PostForm/PostForm';
import FetchedPosts from '../../components/FetchedPosts/FetchedPosts';
import Posts from '../../components/Posts/Posts';

export const PostPage = () => {
  return (
    <div className="post-page">
      <div className="container">
        <h1>PostPage</h1>

        <div>
          <PostForm />
        </div>
        <div className="two-column">
          <div className="column">
            <h2>Синхронные посты</h2>
            <Posts posts={[1, 2, 3]} />
          </div>
          <div className="column">
            <h2>Асинхронные посты</h2>
            <FetchedPosts posts={[]}/>
          </div>
        </div>
      </div>
    </div>
  )
}
