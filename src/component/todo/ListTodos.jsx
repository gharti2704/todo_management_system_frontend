import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ListTodos = () => {
  const [todos, setTodos] = useState([]);
  const navigate = useNavigate();

  const addTodo = () => {
    navigate('/add-todo');
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get('http://localhost:8080/api/todos');
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
      <button className="btn btn-primary mb-2" onClick={addTodo}>
        Add a todo
      </button>
      <div>
        <table className="table table-bordered table-striped">
          <thead>
            <tr>
              <th>Title</th>
              <th>Description</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {todos.map((todo) => (
              <tr key={todo.id}>
                <td>{todo.title}</td>
                <td>{todo.description}</td>
                <td>{todo.completed ? 'Completed' : 'Not Completed'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListTodos;
