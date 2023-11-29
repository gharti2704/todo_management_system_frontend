import { useState } from 'react';
import { registerUser } from '../../service/authService';

const Register = () => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nameError, setNameError] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const isValidEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const isValidPassword = (password) => {
    const re =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return re.test(password);
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    let isValid = true;

    if (name.trim() === '') {
      setNameError('Name is required');
      isValid = false;
    } else {
      setNameError('');
    }

    if (username.trim() === '') {
      setUsernameError('Username is required');
      isValid = false;
    } else {
      setUsernameError('');
    }

    if (email.trim() === '' || !isValidEmail(email)) {
      setEmailError('Valid email is required');
      isValid = false;
    } else {
      setEmailError('');
    }

    if (password.trim() === '' || !isValidPassword(password)) {
      setPasswordError(
        'Valid password must be at least 8 characters long, contain at least one uppercase letter, one number, and one special character'
      );
      isValid = false;
    } else {
      setPasswordError('');
    }

    if (isValid) {
      try {
        const user = { name, username, email, password };
        const response = await registerUser(user);
        alert(response.data);
      } catch (error) {
        error.response.data?.message?.includes('email')
          ? setEmailError(error.response.data?.message)
          : setUsernameError(error.response.data?.message);
        alert(error.response.data?.message);
        console.log(error);
      }
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
                      name="name"
                      className={`form-control ${
                        nameError ? 'is-invalid' : ''
                      }`}
                      placeholder="Enter name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                    {nameError && (
                      <div className="invalid-feedback">{nameError}</div>
                    )}
                  </div>
                </div>
                <div className="row mb-3">
                  <label className="col-md-3 control-label">Username</label>
                  <div className="col-md-9">
                    <input
                      type="text"
                      name="username"
                      className={`form-control ${
                        usernameError ? 'is-invalid' : ''
                      }`}
                      placeholder="Enter username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                    {usernameError && (
                      <div className="invalid-feedback">{usernameError}</div>
                    )}
                  </div>
                </div>
                <div className="row mb-3">
                  <label className="col-md-3 control-label">Email</label>
                  <div className="col-md-9">
                    <input
                      type="text"
                      name="email"
                      className={`form-control ${
                        emailError ? 'is-invalid' : ''
                      }`}
                      placeholder="Enter email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    {emailError && (
                      <div className="invalid-feedback">{emailError}</div>
                    )}
                  </div>
                </div>
                <div className="row mb-3">
                  <label className="col-md-3 control-label">Password</label>
                  <div className="col-md-9">
                    <input
                      type="password"
                      name="password"
                      className={`form-control ${
                        passwordError ? 'is-invalid' : ''
                      }`}
                      placeholder="Enter password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    {passwordError && (
                      <div className="invalid-feedback">{passwordError}</div>
                    )}
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-9 offset-md-3">
                    <button type="submit" className="btn btn-primary">
                      Register
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
