'use client'
import { Todo } from "@prisma/client";
import { TodosItem } from "./TodosItem";
import * as todosApi from '@/todos/helpers/todos';

import { useRouter } from "next/navigation";
import { toogleTodo } from "../actions/todo.actions";
interface Props {
  todos?: Todo[];
}
export const TodosGrid = ({ todos=[] }: Props) => {  
  //const router = useRouter();
  // const toogleTodo = async(id:string,complete:boolean)=>{
  //      const updateTodo = await todosApi.updateTodo(id,complete);       
  //      console.log('updateTodo',updateTodo);
  //      router.refresh();
  //      return updateTodo;
  // }  
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">  
     {
      todos.map((todo) => (
        <TodosItem key={todo.id} todo={todo} updateTodo={toogleTodo} />
      ))
     }
    </div>
  )
}
