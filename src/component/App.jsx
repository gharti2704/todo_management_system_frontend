import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
import ListTodos from './todo/ListTodos';
import AddTodo from './todo/AddTodo';
import Register from './auth/Register';
import Login from './auth/Login';
import AuthenticatedRoute from './AuthenticatedRoute';
import { isUserLoggedIn } from '../service/authService';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route
            path="/"
            exact
            Component={isUserLoggedIn() ? ListTodos : Login}
          />
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
