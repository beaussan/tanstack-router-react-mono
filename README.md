# TanStackRouterReactMono

<a alt="Nx logo" href="https://nx.dev" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="45"></a>

This project is a monorepo containing TanStack router with feature and data libraries.


The issue with TanStack router is that it needs to be setup with typescript types augmentations. But that means that if you do that in the final app, the links in the libraries will not be type safe. So to make that work, we need a separate library to contains the router, without components and then stitch it together with the app.

This can be done using the following files:
- `libs/data/router` is the router library
- `libs/data/posts` is the posts data fetching library
- `libs/feature/posts` is the posts ui library
- `apps/tanstack-router-react-mono` is the app

With this approach, we can use the query options from the data library in the router, and in the feature library without causing circular dependencies.

And given the router lib re exposes the router components, when we import them in the feature library they are type safe given they are linked to the typescript augmentations.

And finally, in the app, we can create a map of route to component (`apps/tanstack-router-react-mono/src/routerMap.tsx`) that is used to stitch the router together with the components. We could enforce lazy loading here also.

Then, in the main file, we updates the routes with the route map we bulit `apps/tanstack-router-react-mono/src/main.tsx`, and we now have a fully type safe router!

Here is what it looks like in the monorepo:

![image](/assets/graph.png)


## Run tasks

To run the dev server for your app, use:

```sh
npx nx serve tanstack-router-react-mono
```

To create a production bundle:

```sh
npx nx build tanstack-router-react-mono
```

To see all available targets to run for a project, run:

```sh
npx nx show project tanstack-router-react-mono
```