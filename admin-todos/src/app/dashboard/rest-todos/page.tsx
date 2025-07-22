import prisma from "@/lib/prisma"
import { NewTodo, TodosGrid } from "@/todos"

export const metadata = {
  title: 'listado de todos',
  description: 'SEO Title'
}


export default async function RestTodosPage() {

  // useEffect(() => {
  //   fetch('/api/todos').then( resp => resp.json()).then(console.log)
  // }, [])
  const todos= await prisma.todo.findMany({orderBy: {description: 'asc'}})

  return (
    <div>
      <div className="w-full px-3 mx-5 mb-5">
        <NewTodo />
      </div>
      <TodosGrid todos={todos} />
    </div>
  )
}
