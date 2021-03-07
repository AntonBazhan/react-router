import { createUseStyles } from 'react-jss';
import TodoItem from './TodoItem';

const useStyles = createUseStyles({
  todosList: {
    display: 'flex',
    justifyContent: 'space-between',

    '& ul': {
      display: 'flex',
      flexDirection: 'column',
      flex: 1,
      padding: 0,
      margin: 0,
      listStyle: 'none',
    },
  },
});

const TodosList = ({ todos, filter, onToggle }) => {
  const classes = useStyles();

  return (
    <div className={classes.todosList}>
      <ul>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            filter={filter}
            onToggle={onToggle}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodosList;
