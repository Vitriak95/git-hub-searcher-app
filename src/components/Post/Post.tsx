import React, {FC} from 'react';
import './Post.scss';

interface PostPropsInterface {
  post: any;
}

const Post: FC<PostPropsInterface> = ({post}) => {
  return (<div className="card">
    <div className="card-body">
      <h5 className="card-title">Title {post}</h5>
    </div>
  </div>)
}

export default Post
