import React, {useState} from "react";
import Todo from "../../functional/todo";
import {TodoList} from './style';
import TodoForm from "../../functional/todoform";

const Todos = () => {
    const [todos, setTodos] = useState([
        {text: 'Learn more about React', isCompleted: false},
        {text: 'Meet for a lunchs', isCompleted: false},
        {text: 'Build a todo app', isCompleted: false}
    ]);

    const addTodo = text => {
        const newTodos = [...todos, {text}];
        setTodos(newTodos);
    }

    const completeTodo = index => {
        const newTodos = [...todos];
        newTodos[index].isCompleted = true;
        setTodos(newTodos);
    }

    const removeTodo = index => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    }

    return (
        <TodoList>
            {todos.map((todo, index) => (
                <Todo key={index} todo={todo} index={index} completeTodo={completeTodo} removeTodo={removeTodo}/>
            ))}
            <TodoForm addTodo={addTodo}/>
        </TodoList>
    )
}

export default Todos;