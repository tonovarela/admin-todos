//'use client';
import { getUserSessionServer } from "@/app/auth/actions/action";
import prisma from "@/lib/prisma";
import { NewTodo, TodosGrid } from "@/todos";
import { redirect } from "next/navigation";

export const metadata ={
  title: "Rest Todos Page",
  description: "Rest Todos Page Description",
}
export default async function RestTodosPage() {
   const user = await getUserSessionServer();  
   if (!user){  
    redirect("api/auth/signin");
   }
  const todos = await prisma.todo.findMany({
    where: {
      userId: user?.id,
    },
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