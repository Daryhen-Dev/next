import prisma from "@/lib/prisma"
import { NewTodo, TodosGrid } from "@/todos"

export const metadata = {
  title: 'listado de todos',
  description: 'SEO Title'
}


export default async function ServerTodosPage() {

  const todos= await prisma.todo.findMany({orderBy: {description: 'asc'}})

  return (
    <>
    <span className="text-3xl mb-10">Server actions</span>
      <div className="w-full px-3 mx-5 mb-5">
        <NewTodo />
      </div>
      <TodosGrid todos={todos} />
    </>
  )
}
