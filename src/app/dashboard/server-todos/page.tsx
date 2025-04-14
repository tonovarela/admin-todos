//'use client';
import { getUserSessionServer } from "@/app/auth/actions/action";
import prisma from "@/lib/prisma";
import { NewTodo, TodosGrid } from "@/todos";
import { redirect } from "next/navigation";



export const metadata ={
  title: "ServerTodos Page",
  description: "Rest Todos Page Description",
}

export default async function ServerTodosPage() {

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
  console.log(todos);
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