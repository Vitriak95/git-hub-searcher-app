import React, {ChangeEvent, FormEvent, useState} from 'react';
import './PostForm.scss';

const PostForm = () => {
  const [title, setTitle] = useState<string>('');

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newPost = {
      title: title,
      id: Date.now().toString()
    }
    console.log('newPost', newPost);

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

export default PostForm
