import React from 'react';
import UserList from './components/UserList/UserList';
import {TodoList} from './components/TodoList/TodoList';
// https://www.youtube.com/watch?v=ETWABFYv0GM&t=10s
function App() {
  return (
    <div>
      <UserList />
      <hr/>
      <TodoList />
    </div>
  );
}

export default App;
