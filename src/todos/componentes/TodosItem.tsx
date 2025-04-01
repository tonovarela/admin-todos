import { Todo } from '@prisma/client';
import styles from './TodosItem.module.css';

interface Props {
  todo: Todo;
}

export const TodosItem = ({todo}:Props) => {
  return (    
    <div className={styles.todoPending}>
      {todo.description}
    </div>
        
  )
}