import { useState, useRef } from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  inputForm: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "10px",
    paddingLeft: "10px",
    paddingRight: "10px",
  },
});

const InputForm = ({ users, setCurrentUser, onAddTodo, onDoSearch }) => {
  const classes = useStyles();
  const [newTodo, setNewTodo] = useState("");
  const [search, setSearch] = useState("");
  const inputRef = useRef();

  const handleUserChange = (e) => {
    setCurrentUser(e.target.value);
  };

  const handleAddTodo = (e) => {
    e.preventDefault();

    onAddTodo(newTodo);
    setNewTodo("");
    inputRef.current.focus();
  };

  const handleChangeTodo = (e) => {
    setNewTodo(e.target.value);
  };

  const handleChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmitSearch = (e) => {
    e.preventDefault();

    onDoSearch(search);
    setSearch("");
  };

  return (
    <div className={classes.inputForm}>
      <select name="users" onChange={handleUserChange}>
        {users.map(({ id, name }) => (
          <option value={id} key={id}>
            {name}
          </option>
        ))}
      </select>

      <form onSubmit={handleAddTodo}>
        <input
          type="text"
          value={newTodo}
          placeholder="type new todo here"
          ref={inputRef}
          onChange={handleChangeTodo}
        />
        <button type="submit">Add</button>
      </form>

      <form onSubmit={handleSubmitSearch}>
        <input type="text" value={search} onChange={handleChangeSearch} />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default InputForm;
