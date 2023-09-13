import { useState } from "react"

export default function Todo({todoData, isFinished,changeFinished,onEdit}) {
  const [finished, setFinshed] = useState(isFinished);
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todoData)
  return (
    <div>
      <input type="checkbox" 
      checked={finished}
      onChange={(e)=>{
        setFinshed(e.target.checked);
        changeFinished(e.target.checked)
      }}
      />
      
      {(isEditing)? <input type="text" value={editText} onChange={e=> setEditText(e.target.value)
      }/> : todoData}
      {console.log(editText)}
      <button 
      onClick={()=>{
        setIsEditing(!isEditing);
        onEdit(editText);
      }}>{(!isEditing)? 'Edit' : 'Save'}</button>
      {/* edit pe input - inside input todo text. save button - onClick-> onchange- value */}
      <button>Delete</button>
    </div>
  )
}
