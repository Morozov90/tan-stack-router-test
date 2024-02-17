
import {createLazyFileRoute, Link} from "@tanstack/react-router";

export const Route = createLazyFileRoute('/todo/')({
    component: ToDoIndex,
})
function ToDoIndex() {
    return <div>
        <h1>Index to do</h1>
        <Link to="/todo/$todoid" params={{ todoid: '1'}}>To Do 1</Link>
        <Link to="/todo/$todoid" params={{ todoid: '2'}}>To Do 2</Link>
    </div>;
}