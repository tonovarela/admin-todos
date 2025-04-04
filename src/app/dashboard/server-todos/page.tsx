//'use client';
import prisma from "@/lib/prisma";
import { NewTodo, TodosGrid } from "@/todos";


export const metadata ={
  title: "ServerTodos Page",
  description: "Rest Todos Page Description",
}

export default async function ServerTodosPage() {
  
  const todos = await prisma.todo.findMany({
    orderBy: { description: "desc" }
  });
  console.log("contruido");
  return (
    <>      
    <h1 className="text-xl mb-2 ">Server Actions</h1>
      <div className="w-full px-3 mx-5 mb-5">
      <NewTodo/>
      </div>      
      <TodosGrid todos={todos}/>
      
    </>
  );
}