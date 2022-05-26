import React, {FC} from 'react';
import {connect} from 'react-redux'; // для доступа к store
import './Posts.scss';
import Post from '../Post/Post';
import {PostsReducerStateInterface} from '../../store/reducers/postsReducer';
import {GlobalStateInterface} from '../../store/reducers/rootReducer';
import {PostInterface} from '../../common/types';

interface PostPropsInterface {
  syncPosts: PostInterface[]
}

const Posts: FC<PostPropsInterface> = ({syncPosts}) => {
  if (!syncPosts.length) {
    return <div className="text-center">Постов нет</div>
  }
  return (
    <div>
      {syncPosts.map((post: any) => <Post key={post} post={post}/>)}
    </div>
  )
}

const mapStateToProps = (state: GlobalStateInterface, ownProps: PostPropsInterface) => {
  console.log('state', state)
  return {
    syncPosts: state.posts.posts // получаем из Store посты, которые будут доступны по переменной syncPosts
  }
}

export default connect(mapStateToProps, null)(Posts)
