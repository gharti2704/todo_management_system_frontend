import { useState } from 'react';
import { registerUser } from '../service/authService';

const Register = () => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const user = { name, username, email, password };
      await registerUser(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="container">
      <br />
      <br />
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <div className="card">
            <div className="card-header">
              <h2 className="text-center">Register</h2>
            </div>
            <div className="card-body">
              <form onSubmit={handleRegister}>
                <div className="row mb-3">
                  <label className="col-md-3 control-label">Name</label>
                  <div className="col-md-9">
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      placeholder="Enter name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                </div>
                <div className="row mb-3">
                  <label className="col-md-3 control-label">Username</label>
                  <div className="col-md-9">
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      placeholder="Enter username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </div>
                </div>
                <div className="row mb-3">
                  <label className="col-md-3 control-label">Email</label>
                  <div className="col-md-9">
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      placeholder="Enter email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>
                <div className="row mb-3">
                  <label className="col-md-3 control-label">Password</label>
                  <div className="col-md-9">
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      placeholder="Enter password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                </div>
                <button type="submit" className="btn btn-primary">
                  Register
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
