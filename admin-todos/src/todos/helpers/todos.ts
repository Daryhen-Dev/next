import { Todo } from '@/generated/prisma';




export const updateTodo = async (id: string, complete: boolean): Promise<Todo> => {
    const body = {
        complete
    }
    const todo = await fetch(`/api/todos/${id}`, {
        method: 'PUT',
        body: JSON.stringify(body),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => res.json())
    console.log('Updated todo:', todo)
    return todo
}

export const createTodo = async (description: string): Promise<Todo> => {
    const body = {
        description
    }
    const todo = await fetch(`/api/todos`, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => res.json())
    return todo
}

export const deleteCompletedTodos = async (): Promise<boolean> => {

    const todo = await fetch(`/api/todos`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => res.json())

    return true
}