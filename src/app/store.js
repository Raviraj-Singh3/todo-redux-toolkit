import {configureStore} from '@reduxjs/toolkit';
import todoReducer from '../Components/todo/todoSlice'

export default configureStore({
    reducer: {
        todo: todoReducer,
    }
})