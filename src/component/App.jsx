import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
import ListTodos from './todo/ListTodos';
import AddTodo from './todo/AddTodo';

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
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
