import { updateTodo } from './todosAPI';
import { toast } from 'react-toastify';

const withTodoItem = (Component) => ({ todo, filter, onToggle }) => {
  const handleToggle = (id) => {
    updateTodo(id, { completed: todo.completed })
      .then(() => onToggle(todo))
      .catch((error) => toast(error.message, { type: 'error' }));
  };

  return <Component todo={todo} filter={filter} onToggle={handleToggle} />;
};

export default withTodoItem;
