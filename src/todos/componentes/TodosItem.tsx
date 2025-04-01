import { Todo } from '@prisma/client';
import styles from './TodosItem.module.css';
import { IoCheckboxOutline, IoSquareOutline } from 'react-icons/io5';

interface Props {
  todo: Todo;
}

export const TodosItem = ({ todo }: Props) => {
  return (
    <div className={todo.complete ? styles.todoDone : styles.todoPending}>
      <div className="flex flex-col sm:flex-row justify-start items-center gap-4 ">
        <div className={` flex p-2 rounded-md cursor-pointer hover:bg-opacity-60 bg-blue-100 
          ${todo.complete ? 'bg-blue-100' : 'bg-red-100'} `}>          
          {
            todo.complete ?
              <IoCheckboxOutline size={30} className='text-blue-400' /> :
              <IoSquareOutline size={30} className='text-gray-400' />
          }
          
          <div className='text-center sm:text-left'>
            {todo.description}
          </div>
        </div>

      </div>
    </div>

  )
}