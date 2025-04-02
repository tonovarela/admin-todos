import { Todo } from "@prisma/client";

export const updateTodo = async (id: string, complete: boolean):Promise<Todo> => {    
    const body = JSON.stringify({ complete });
    const todo = await fetch(`/api/todos/${id}`, {
        method: "PUT",
        headers: {"Content-Type": "application/json"},
        body,
    }).then((res) => res.json());   
   console.log(todo);
   return todo as Todo;
    
}