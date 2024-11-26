import Header from "./Components/Header";
import TodoList from "./Components/TodoList";
import './App.css'
import AddTodo from "./Components/AddTodo";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

export default function App() {
  return (
    <>
      <Header />
      <AddTodo />
      <TodoList />
      <ToastContainer />
    </>
  )

  
}
