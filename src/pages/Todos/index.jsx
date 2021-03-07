import { useState, useEffect } from "react";
import InputForm from "./InputForm";
import TodosList from "./TodosList";
import { ToastContainer, toast } from "react-toastify";
import { getUsers, getTodos, createTodo } from "./todosAPI";
import "react-toastify/dist/ReactToastify.css";

const Todos = () => {
  const [filter, setFilter] = useState("");
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState();
  const [todos, setTodos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getUsers()
      .then((data) => {
        setUsers(data);
        setCurrentUser(data[0]?.id);
      })
      // .then(() => toast('Users loaded', { type: 'success' }))
      .catch((error) => toast(error.message, { type: "error" }));
  }, []);

  useEffect(() => {
    if (!currentUser) return;

    setIsLoading(true);

    getTodos(currentUser)
      .then((data) => setTodos(data))
      .then(() => toast("Todos loaded", { type: "success" }))
      .catch((error) => toast(error.message, { type: "error" }))
      .finally(() => setIsLoading(false));
  }, [currentUser]);

  const handleAddTodo = (title) => {
    setIsLoading(true);

    createTodo({
      title,
      userId: currentUser,
      completed: false,
    })
      .then((newTodo) => setTodos((prevState) => [newTodo, ...prevState]))
      .then(() => toast("Todo saved", { type: "success" }))
      .catch((error) => toast(error.message, { type: "error" }))
      .finally(() => setIsLoading(false));
  };

  const handleToggleTodo = (updatedTodo) => {
    setTodos((prevState) =>
      prevState.map((todo) =>
        todo.id === updatedTodo.id
          ? {
              ...todo,
              completed: !todo.completed,
            }
          : todo
      )
    );
  };

  return (
    <div className="todos-component">
      <h1>Todos</h1>

      <InputForm
        users={users}
        setCurrentUser={setCurrentUser}
        onAddTodo={handleAddTodo}
        onDoSearch={setFilter}
      />

      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <TodosList todos={todos} filter={filter} onToggle={handleToggleTodo} />
      )}

      <ToastContainer />
    </div>
  );
};

export default Todos;
