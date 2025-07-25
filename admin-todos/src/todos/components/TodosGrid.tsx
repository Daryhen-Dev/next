'use client'
import { Todo } from '@/generated/prisma'
import React from 'react'
import { TodoItem } from './TodoItem';

import * as todoApi from '../helpers/todos';
import { useRouter } from 'next/navigation';




interface Props {
    todos?: Todo[];
}

export const TodosGrid = ({todos = []}: Props) => {

  const router = useRouter()
  const toggleTodo = async (id: string, complete: boolean) => {
    const updatedTodo = await todoApi.updateTodo(id, complete);
    router.refresh()
  }

  return (
    <div className='grid grid-cols-1 sm:grid-cols-3 gap-2'>
        {
            todos.map(todo => (
                <TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} />
            ))
        }
    </div>
  )
}
