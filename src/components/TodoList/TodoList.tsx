import React, {FC, useEffect} from 'react';
import {useTypedSelector} from '../../store/hooks/useTypedSelector';
import {useActions} from '../../store/hooks/useActions';

export const TodoList: FC = () => {
  const {page, loading, error, todos, limit} = useTypedSelector(state => state.todo)
  const {fetchTodos, setTodoPage} = useActions();
  const pages = [1, 2, 3, 4, 5]; // захардкодим количество страниц

  useEffect(() => {
    fetchTodos(page, limit);
  }, [page])

  if (loading) {
    return <h1>Идет загрузка...</h1>
  }
  if (error) {
    return  <h1>{error}</h1>
  }

  return (
    <div>
      {todos.map(todo => (
        <div key={todo.id}>
          {todo.id} - {todo.title}
        </div>
      ))}

      {pages.map(p => (
        <div
          onClick={() => setTodoPage(p)}
          style={{border: p === page ? '2px solid green' : '1px solid grey', padding: 10, display: 'inline-block'}}
          key={p}>
          <span className="number">{p}</span>
        </div>
      ))}
    </div>
  )
}
