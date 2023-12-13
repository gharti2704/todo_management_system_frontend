import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  getTodos,
  deleteTodo,
  completeTodo,
  uncompleteTodo,
} from '../../service/todoService';
import { isAdminUser } from '../../service/authService';

const ListTodos = () => {
  const [todos, setTodos] = useState([]);
  const navigate = useNavigate();

  const addTodo = () => {
    navigate('/add-todo');
  };

  const updateTodo = (id) => {
    navigate(`/update-todo/${id}`);
  };

  const deleteTodoById = async (id) => {
    await deleteTodo(id)
      .then(() => {
        const newTodos = todos.filter((todo) => todo.id !== id);
        setTodos(newTodos);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const markTodoAsComplete = async (id) => {
    try {
      await completeTodo(id);
      const newTodos = await getTodos();
      setTodos(newTodos.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  const markTodoAsUncomplete = async (id) => {
    try {
      await uncompleteTodo(id);
      const newTodos = await getTodos();
      setTodos(newTodos.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getTodos();
        setTodos(result.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="container">
      <h2 className="text-center">Todos:</h2>
      {isAdminUser() && (
        <button className="btn btn-primary mb-2" onClick={addTodo}>
          Add a todo
        </button>
      )}
      <div>
        <table className="table table-bordered table-striped">
          <thead>
            <tr className="text-center">
              <th>Title</th>
              <th>Description</th>
              <th>Assignee</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {todos.map((todo) => (
              <tr key={todo?.id}>
                <td>{todo?.title}</td>
                <td>{todo?.description}</td>
                <td>{todo?.userName}</td>
                <td>{todo?.completed ? 'Completed' : 'Not Completed'}</td>
                <td className="d-flex justify-content-center">
                  {isAdminUser() && (
                    <>
                      <button
                        className="btn btn-info text-center"
                        onClick={() => updateTodo(todo.id)}
                      >
                        Update
                      </button>
                      <button
                        className="btn btn-danger text-center ms-1"
                        onClick={() => deleteTodoById(todo.id)}
                      >
                        delete
                      </button>
                    </>
                  )}
                  <button
                    className="btn btn-success text-center ms-1"
                    onClick={() => markTodoAsComplete(todo.id)}
                  >
                    complete
                  </button>
                  <button
                    className="btn btn-info text-center ms-1"
                    onClick={() => markTodoAsUncomplete(todo.id)}
                  >
                    uncomplete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListTodos;
