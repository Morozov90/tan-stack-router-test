import {createFileRoute} from "@tanstack/react-router";

type PageParams = {
    page: number;
}

async function getToDo(id: number): Promise<{ title: string }> {
    const data = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);

    return data.json();
}
export const Route = createFileRoute('/todo/$todoid')({
    component: ToDoItem,
    loader: ({params}) => getToDo(Number(params.todoid)),
    validateSearch: (search: Record<string, unknown>): PageParams => {
        return {
            page: Number(search?.page ?? 1),
        }
    },
    errorComponent: ({error}) => <h1>Not Found {error}</h1>,
})
function ToDoItem() {
    const { todoid } = Route.useParams()
    const { page } = Route.useSearch()
    const data = Route.useLoaderData();
    return <div>
        <h1>To Do Item {todoid}</h1>
        <h1>Page {page}</h1>
        <h1>{data?.title}</h1>
    </div>
}