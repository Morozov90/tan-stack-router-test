/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as IndexImport } from './routes/index'
import { Route as TodoTodoidImport } from './routes/todo/$todoid'

// Create Virtual Routes

const AboutLazyImport = createFileRoute('/about')()
const TodoIndexLazyImport = createFileRoute('/todo/')()

// Create/Update Routes

const AboutLazyRoute = AboutLazyImport.update({
  path: '/about',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/about.lazy').then((d) => d.Route))

const IndexRoute = IndexImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const TodoIndexLazyRoute = TodoIndexLazyImport.update({
  path: '/todo/',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/todo/index.lazy').then((d) => d.Route))

const TodoTodoidRoute = TodoTodoidImport.update({
  path: '/todo/$todoid',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/about': {
      preLoaderRoute: typeof AboutLazyImport
      parentRoute: typeof rootRoute
    }
    '/todo/$todoid': {
      preLoaderRoute: typeof TodoTodoidImport
      parentRoute: typeof rootRoute
    }
    '/todo/': {
      preLoaderRoute: typeof TodoIndexLazyImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren([
  IndexRoute,
  AboutLazyRoute,
  TodoTodoidRoute,
  TodoIndexLazyRoute,
])

/* prettier-ignore-end */