import React, {ChangeEvent, FC, FormEvent, useState} from 'react';
import './PostForm.scss';
import {connect} from 'react-redux';
import {createPostAC} from '../../store/action-creators';
import {PostInterface} from '../../common/types';

interface PostFormPropsInterface {
  createPostAC: any; // createPostAC interface ??
}

const PostForm: FC<PostFormPropsInterface> = ({createPostAC}) => {
  const [title, setTitle] = useState<string>('');

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newPost: PostInterface = {
      title: title,
      id: Date.now().toString()
    }
    console.log('newPost', newPost);

    createPostAC(newPost)

    setTitle('');
  }

  const inputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="form-group">
        <label htmlFor="title" className="form-label">Заголовок поста</label>
        <input
          type="text"
          className="form-control"
          id="title"
          placeholder=""
          value={title}
          onChange={inputChangeHandler}
        />
      </div>
      <button type="submit" className="btn btn-success">Создать</button>
    </form>
  )
}

const mapDispatchToProps = {
  createPostAC: createPostAC
}

export default connect(null, mapDispatchToProps)(PostForm)
