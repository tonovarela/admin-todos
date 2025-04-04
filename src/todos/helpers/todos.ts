import { Todo } from "@prisma/client";


const sleep = (seconds:number) :Promise<boolean>=>{
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, seconds * 1000);  
});

}


export const updateTodo = async (id: string, complete: boolean):Promise<Todo> => {    
    await sleep(5);
    const body = JSON.stringify({ complete });
    const todo = await fetch(`/api/todos/${id}`, {
        method: "PUT",
        headers: {"Content-Type": "application/json"},
        body,
    }).then((res) => res.json());      
   return todo as Todo;
    
}



export const createTodo = async (description:string):Promise<Todo> => {    
    const body = JSON.stringify({ description });
    const todo = await fetch(`/api/todos`, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body,
    }).then((res) => res.json());      
   return todo as Todo;
    
}

export const deleteCompleted = async ():Promise<void> => {
    await fetch(`/api/todos`, {
        method: "DELETE",
        headers: {"Content-Type": "application/json"},
    }).then((res) => res.json());      
}