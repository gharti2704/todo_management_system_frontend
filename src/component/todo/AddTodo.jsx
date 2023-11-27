import { useState } from 'react';
import axios from 'axios';
import './AddTodo.css';

const AddTodo = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [completed, setCompleted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8080/api/todos/create', {
        title,
        description,
        completed,
      });
    } catch (error) {
      console.log(error.message);
    }
    setTitle('');
    setDescription('');
    setCompleted(false);
  };

  return (
    <div className="container">
      <br />
      <br />
      <div className="row">
        <div className="card col-md-10 offset-md-1 offset-md-1 bg-light">
          <h2 className="text-center mt-3">Add Todo</h2>
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <div className="form-group mb-2">
                <label className="form-label">Title:</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div className="form-group mb-3">
                <label className="form-label">Description:</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
              <div className="form-group mb-3">
                <label className="form-check-label">Completed</label>
                <div className="select-wrapper">
                  <select
                    className="form-control"
                    value={completed}
                    onChange={(e) => setCompleted(e.target.value)}
                  >
                    <option value="false">False</option>
                    <option value="true">True</option>
                  </select>
                </div>
              </div>
              <button type="submit" className="btn btn-primary">
                Add
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddTodo;
