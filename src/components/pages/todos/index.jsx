import React, {useState} from "react";
import Todo from "../../functional/todo";
import {TodoList} from './style';
import TodoForm from "../../functional/todoform";

const Todos = () => {
    const [todos, setTodos] = useState([
        {text: 'Learn more about React'},
        {text: 'Meet for a lunchs'},
        {text: 'Build a todo app'}
    ]);

    const addTodo = text => {
        const newTodos = [...todos, {text}];
        setTodos(newTodos);
    }

    return (
        <TodoList>
            {todos.map((todo, index) => (
                <Todo key={index} todo={todo} index={index} />
            ))}
            <TodoForm addTodo={addTodo}/>
        </TodoList>
    )
}

export default Todos;