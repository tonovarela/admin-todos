'use client'
import { Todo } from "@prisma/client";
import { TodosItem } from "./TodosItem";
import * as api from '@/todos/helpers/todos';
interface Props {
  todos?: Todo[];
}
export const TodosGrid = ({ todos=[] }: Props) => {  
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">  
     {
      todos.map((todo) => (
        <TodosItem key={todo.id} todo={todo} updateTodo={api.updateTodo} />
      ))
     }
    </div>
  )
}
