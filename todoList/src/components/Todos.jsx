
import { useSelector } from "react-redux";
import EachTodo from "./EachTodo";

function Todos() {

    const todos = useSelector(state => state.todos)

    return(
        <>
            <ul className="list-none">
                {todos.map((todo) => (
                    <EachTodo key={todo.id} todo={todo}/>
                ))}
            </ul>
        </>
    )
}

export default Todos