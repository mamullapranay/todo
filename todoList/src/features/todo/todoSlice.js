import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos : []
}

// Load todos from localStorage if available
const persistedTodos = localStorage.getItem("todos");
if (persistedTodos) {
    initialState.todos = JSON.parse(persistedTodos);
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const newTodo = {
                id: nanoid(),
                text: action.payload.text
            }
            state.todos.push(newTodo)
            localStorage.setItem("todos", JSON.stringify(state.todos))
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload.id)
            localStorage.setItem("todos", JSON.stringify(state.todos))
        },
        updateTodo: (state, action) => {
            const { id, text } = action.payload;
            const todo = state.todos.find(todo => todo.id === id);
            if (todo) {
              todo.text = text;
            }
            localStorage.setItem("todos", JSON.stringify(state.todos))
        }
    }
})

export const { addTodo, removeTodo, updateTodo } = todoSlice.actions

export default todoSlice.reducer