import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './component/Home'; 
import 'bootstrap/dist/css/bootstrap.css'
import CreateTodoApp from './component/CreateTodoApp';
import UpdateTodoApp from './component/UpdateTodoApp';
import DetailTodoApp from './component/DetailTodoApp';
import Login from './component/Login';
import Register from './component/Register';
import Filter from './component/Fillter';
import Archive from './component/Archive';
import Intro from './component/Intro';
function App() {
  return (
    <Routes>
      <Route path= {`/home`} element={<Home/>} />
      <Route path= {`/`} element={<Intro/>} />
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
