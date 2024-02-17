import {createFileRoute, Link} from "@tanstack/react-router";

export const Route = createFileRoute('/')({
  component: Index,
})
function Index() {
  return <div>
    <h1>Hello World</h1>
    <Link to="/about">About</Link>
  </div>;
}