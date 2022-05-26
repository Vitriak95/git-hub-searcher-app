import React, {FC} from 'react';
import './Posts.scss';
import Post from '../Post/Post';

interface PostPropsInterface {
  posts: Array<any>
}

const Posts: FC<PostPropsInterface> = ({posts}) => {
  if (!posts.length) {
    return <div className="text-center">Постов нет</div>
  }
  return (
    <div>
      {posts.map((post) => <Post key={post} post={post}/>)}
    </div>
  )
}

export default Posts
