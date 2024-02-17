
import {createLazyFileRoute} from "@tanstack/react-router";

export const Route = createLazyFileRoute('/about')({
    component: AboutLazy,
})
function AboutLazy() {
    return <h1>Hello World</h1>;
}