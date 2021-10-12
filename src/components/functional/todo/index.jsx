import React from "react";
import { TodoItem } from "./style";

const Todo = ({todo}) => {
    return (
        <TodoItem>
            {todo.text}
        </TodoItem>
    )
}

export default Todo;