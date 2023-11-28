import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
import ListTodos from './todo/ListTodos';
import AddTodo from './todo/AddTodo';
import Register from './auth/Register';
import Login from './auth/Login';
import { isUserLoggedIn } from '../service/authService';
import PropTypes from 'prop-types';

function App() {
  const AuthenticatedRoute = ({ children }) =>
    isUserLoggedIn() ? children : <Navigate to="/" />;

  AuthenticatedRoute.propTypes = {
    children: PropTypes.element.isRequired,
  };

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" exact Component={Login} />
          <Route path="/register" exact Component={Register} />
          <Route path="/login" exact Component={Login} />

          <Route
            path="/todos"
            element={
              <AuthenticatedRoute>
                <ListTodos />
              </AuthenticatedRoute>
            }
          />

          <Route
            path="/add-todo"
            element={
              <AuthenticatedRoute>
                <AddTodo />
              </AuthenticatedRoute>
            }
          />

          <Route
            path="/update-todo/:id"
            element={
              <AuthenticatedRoute>
                <AddTodo />
              </AuthenticatedRoute>
            }
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
