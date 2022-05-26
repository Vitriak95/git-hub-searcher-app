import React, {FC} from 'react';
import './Post.scss';
import {PostInterface} from '../../common/types';

interface PostPropsInterface {
  post: PostInterface;
}

const Post: FC<PostPropsInterface> = ({post}) => {
  return (<div className="card">
    <div className="card-body">
      <h5 className="card-title">Title {post.title}</h5>
    </div>
  </div>)
}

export default Post
