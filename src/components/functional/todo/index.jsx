import React from "react";
import { TodoItem, Button } from "./style";

const Todo = ({todo, completeTodo, removeTodo, index}) => {
    return (
        <TodoItem isCompleted={todo.isCompleted}>
            <div className="left">
            {todo.text}
            </div>
            <div className="right">
            <Button onClick={() => completeTodo(index)}>Complete</Button>
            <Button onClick={() => removeTodo(index)}>x</Button>
            </div>
        </TodoItem>
    )
}

export default Todo;