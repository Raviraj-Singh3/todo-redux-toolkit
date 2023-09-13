import AddTodo from "./Components/todo/AddTodo"
import TodoList from "./Components/todo/TodoList"
import { addTodo, editTodo } from './Components/todo/todoSlice'
import { bindActionCreators } from "@reduxjs/toolkit"
import { useDispatch } from "react-redux"
function App() {

  const dispatch = useDispatch();
  const actions = bindActionCreators({addTodo, editTodo}, dispatch)

  return (
    <>
      <AddTodo addTodo={actions.addTodo}
        />
      <TodoList editTodo={actions.editTodo}/>
    </>
  )
}

export default App
