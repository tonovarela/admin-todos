//'use client';
import prisma from "@/lib/prisma";
import { NewTodo, TodosGrid } from "@/todos";

//import { useEffect } from "react";
export const metadata ={
  title: "Rest Todos Page",
  description: "Rest Todos Page Description",
}
export default async function RestTodosPage() {
  const todos = await prisma.todo.findMany({
    orderBy: { description: "desc" }
  });
  return (
    <>      
      <div className="w-full px-3 mx-5 mb-5">
      <NewTodo/>
      </div>
      
      <TodosGrid todos={todos}/>
      
    </>
  );
}