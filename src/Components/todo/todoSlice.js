import { createSlice} from '@reduxjs/toolkit';

const initialState = {
    todo: []
}
export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action)=>{
            let todoText = action.payload.todoText
            state.todo.push({id: state.todo.length + 1, todoData: todoText, finished: false});
        },
        editTodo: (state, action)=> {
            let payloadTodo = action.payload.todo;
            let todoText = action.payload.todoText;
            state.todo = state.todo.map(t => {
                if(t.id == payloadTodo.id){
                    t.todoData = todoText
                }
                return t;
            });
        }
        
    }
})
export const {addTodo, editTodo} = todoSlice.actions;

export default todoSlice.reducer;