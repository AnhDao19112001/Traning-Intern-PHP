import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './component/todos/Home'; 
import Intro from './component/layout/Intro';
import Filter from './component/todos/Fillter';
import Archive from './component/todos/Archive';
import CreateTodoApp from './component/todos/CreateTodoApp';
import UpdateTodoApp from './component/todos/UpdateTodoApp';
import DetailTodoApp from './component/todos/DetailTodoApp';
import Login from './component/user/Login';
import Register from './component/user/Register';
import 'bootstrap/dist/css/bootstrap.css'

function App() {
  return (
    <Routes>
      <Route path= {`/home`} element={<Home/>} />
      <Route path= {`/`} element={<Intro />} />
      <Route path= {`/fillter`} element={<Filter/>} />
      <Route path= {`/archive`} element={<Archive/>} />
      <Route path= {`/create-todo`} element={<CreateTodoApp/>} />
      <Route path= {`/update/:id`} element={<UpdateTodoApp/>} />
      <Route path= {`/get-by-id/:id`} element={<DetailTodoApp/>} />
      <Route path= {`/login`} element={<Login/>} />
      <Route path= {`/register`} element={<Register/>} />
    </Routes>
  );
}

export default App;
