import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
import ListTodos from './todo/ListTodos';
import AddTodo from './todo/AddTodo';
import Register from './auth/Register';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" exact Component={ListTodos} />
          <Route path="/todos" exact Component={ListTodos} />
          <Route path="/add-todo" exact Component={AddTodo} />
          <Route path="/update-todo/:id" exact Component={AddTodo} />
          <Route path="/register" exact Component={Register} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
