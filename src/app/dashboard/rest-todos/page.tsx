//'use client';
import prisma from "@/lib/prisma";
import { TodosGrid } from "@/todos";
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
      <h1>Page RestTodos</h1>
      { /* TODO: Formulario para agregar */}
      <TodosGrid todos={todos}/>
      
    </>
  );
}