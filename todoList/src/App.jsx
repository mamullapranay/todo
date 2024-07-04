import { Provider } from "react-redux"
import { store } from "./app/store"
import AddTodo from "./components/AddTodo"
import Todos from "./components/Todos"
import './App.css'

function App() {
  return (
    <Provider store={store}>
      <div className="text-center text-black text-3xl font-bold">Manage Your Todos</div>
      <AddTodo/>
      <Todos/>
    </Provider>
  )
}

export default App
