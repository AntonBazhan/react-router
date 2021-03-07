import { createUseStyles } from 'react-jss';
import withTodoItem from './withTodoItem';

const useStyles = createUseStyles({
  todoItem: {
    display: 'flex',
    justifyContent: 'space-between',

    '& b': {
      backgroundColor: 'yellow',
    },
  },
});

const TodoItem = ({ todo, filter, onToggle }) => {
  const classes = useStyles();
  const { id, title, completed } = todo;

  const markup = { __html: title.replaceAll(filter, `<b>${filter}</b>`) };

  const handleToggleTodo = () => onToggle(id);

  return (
    <li className={classes.todoItem}>
      <span dangerouslySetInnerHTML={markup} />

      <div>
        {completed ? 'done' : 'in progress'}
        <button onClick={handleToggleTodo}>x</button>
      </div>
    </li>
  );
};

export default withTodoItem(TodoItem);