import { useState } from 'react';
import { login, saveLoggedInUser, setToken } from '../../service/authService';
import { useNavigate, NavLink } from 'react-router-dom';

const Login = () => {
  const [usernameOrEmail, setUsernameOrEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigator = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const user = { usernameOrEmail, password };
      const response = await login(user);
      const token = `Bearer ${response.data.jwtToken}`;
      const { role, name } = response.data;
      saveLoggedInUser(usernameOrEmail, role, name);
      setToken(token);
      navigator('/todos');
      window.location.reload(false);
    } catch (error) {
      console.log(error);
      alert(error.response?.data?.message);
    }
  };

  return (
    <div className="container">
      <br />
      <br />
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="card">
            <div className="card-header">
              <h2 className="text-center">Login</h2>
            </div>
            <div className="card-body">
              <form onSubmit={handleLogin}>
                <div className="row mb-3">
                  <label className="col-md-3 control-label">Username</label>
                  <div className="col-md-9">
                    <input
                      type="text"
                      name="username"
                      className="form-control"
                      placeholder="Enter username or email"
                      value={usernameOrEmail}
                      onChange={(e) => setUsernameOrEmail(e.target.value)}
                    />
                  </div>
                </div>
                <div className="row mb-3">
                  <label className="col-md-3 control-label">Password</label>
                  <div className="col-md-9">
                    <input
                      type="password"
                      name="password"
                      className="form-control"
                      placeholder="Enter password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                </div>
                <button type="submit" className="btn btn-primary">
                  Sign in
                </button>
                <span className="ms-1 text-muted">
                  <i>
                    <small>Not registered?</small>
                  </i>
                  <NavLink to="/register">
                    <i>
                      <small className="text-muted ms-1">Register here</small>
                    </i>
                  </NavLink>
                </span>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
