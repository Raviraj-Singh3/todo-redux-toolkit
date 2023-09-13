import { useState } from "react"

export default function AddTodo({ addTodo }) {


  const [inputText, setInputText] = useState('')
  return (
    <div>
      <input type="text"
        value={inputText}
        placeholder="add your todo..."
        onChange={(e) => setInputText(e.target.value)} />
      <button onClick={()=>
        {addTodo({ todoText: inputText }); setInputText('')}}
       >
        Add todo
      </button>
    </div>
  )
}
