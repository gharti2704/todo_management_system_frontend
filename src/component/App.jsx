import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
import ListTodos from './todo/ListTodos';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" exact Component={ListTodos} />
          <Route path="/todos" exact Component={ListTodos} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
