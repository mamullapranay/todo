import { useState } from "react";
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/todo/todoSlice';

function AddTodo() {
    const [input, setInput] = useState('');
    const dispatch = useDispatch();

    const addTodoHandler = (e) => {
        e.preventDefault();
        if (!input) return;
        dispatch(addTodo({ text: input }));
        setInput('');
    };

    return (
        <form onSubmit={addTodoHandler} className="space-x-3 mt-12">
            <input
                type="text"
                className="bg-blue-800 rounded-xl border border-blue-700 focus:border-green-500 focus:ring-2 focus:ring-green-900 text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                placeholder="Enter a Todo..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button
                type="submit"
                className="text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded-xl text-lg"
            >
                Add Todo
            </button>
        </form>
    );
}

export default AddTodo;
