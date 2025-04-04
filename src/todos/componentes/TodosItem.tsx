'use client';
import { startTransition, useOptimistic } from 'react';

import { Todo } from '@prisma/client';
import styles from './TodosItem.module.css';
import { IoCheckboxOutline, IoSquareOutline } from 'react-icons/io5';
import { toogleTodo } from '../actions/todo.actions';
import { start } from 'repl';



interface Props {
  todo: Todo,
   //updateTodo: (id: string, complete: boolean) => Promise<Todo>;
}

export const TodosItem = ({ todo}: Props) => {
  const  [todoOptimistic,toogleTodoOptimistic] = useOptimistic(todo,(state,newCompleteValue:boolean)=>({...state,complete:newCompleteValue}));

  const onToogleTodo = async() => {    
    try {
      startTransition(()=>toogleTodoOptimistic(!todoOptimistic.complete))  ;
      await toogleTodo(todoOptimistic.id, !todoOptimistic.complete);
    }
    catch (error) { 
      startTransition(()=>toogleTodoOptimistic(!todoOptimistic.complete))  ;
    }
    
  }


  return (
    <div className={todo.complete ? styles.todoDone : styles.todoPending}>
      <div 
      onClick={onToogleTodo}
      className="flex flex-col sm:flex-row justify-start items-center gap-4 ">
        <div className={` flex p-2 rounded-md cursor-pointer hover:bg-opacity-60 bg-blue-100 
          ${todoOptimistic.complete ? 'bg-blue-100' : 'bg-red-100'} `}>          
          {
            todoOptimistic.complete ?
              <IoCheckboxOutline size={30} className='text-blue-400' /> :
              <IoSquareOutline size={30} className='text-gray-400' />
          }          
          <div className='text-center sm:text-left'>
            {todoOptimistic.description}
          </div>
        </div>

      </div>
    </div>

  )
}