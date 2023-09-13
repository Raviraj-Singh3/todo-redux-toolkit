import { useSelector } from "react-redux"
import Todo from "./Todo"

export default function TodoList({editTodo}) {

    const list = useSelector((state)=> state.todo);
    const data = list.todo;
    function onEdit(todo, todoText){
        editTodo({todo, todoText})
    }
  return (
    <div>

        {data.map((e)=> <Todo 
                        key={e.id} 
                        id={e.id}
                        todoData={e.todoData}
                        isFinished={e.finished}
                        onEdit={(todoText)=> onEdit(e, todoText)}
                        
                        />)}

    </div>
  )
}
