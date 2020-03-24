# Angular Router

Order matters. First match wins strategy.

## debug

enableTracing option set to true as the second argument to the `RouterModule.forRoot()` method. `RouterModule.forRoot(routes, {enableTracing: true})`

## router outlet

use `<router-outlet></router-outlet>` in the template to mark where route components will be rendered

## router links

`routerLink`

### routerLinkActive

Assign css classes that will be added when the route is active. This cascades down from parent to children in the path. To override this behavior, use routerLinkActiveOptions="{exact: true}"

## parameters

### path

No leading slashes in path. You can use both relative and absolute paths. use `**` for wildcards.

#### route parameter

Appends to end of a path. example `:id`. the value of the parameter would resolve to the url. So if the id for the hero route was 42 the url would be `/hero/42`

### data

store data associated with a specific route. It's accessible within each activated route. Store items like page titles, breadcrumbs, and other static data. (use resolve guard for dynamic data)

### redirectTo

If path criteria is met, redirects to the provided url

### pathMatch

I think path matches if it can find the string in the url? pathMatch means it has to match exactly to proceed.

## Router State

After the end of each successful lifecycle, the router builds a tree of `ActivatedRoute` objects that represent the current state of the router. The current RouterState can be accessed anywhere in the application using the Router service and the routerState property. There are methods in each ActivatedRoute to traverse up and down the tree.

## Router Events

The router emits the following lifecycle events. events can be filtered to listen to only specific event types.

### Router Lifecycle Events

NavigationStart
RouteConfigLoadStart
RouteConfigLoadEnd
RoutesRecognized
GuardsCheckStart
ChildActivationStart
ActivationStart
GuardsCheckEnd
ResolveStart
ResolveEnd
ActivationEnd
ChildActivationEnd
NavigationEnd
Scroll

## Router Module

Use forRoot method in the application root module to pass in routes. For all others, use forChild method to pass in routes.

## Module import order matters

Like order within Routes array, the order that router modules are imported effects order of evaluation.

## Routable Animations

animation states can be assigned within a routes data object under `animation` and the specifics of the transitions can be defined within a separate animations.ts
file that defines each state transition.

to use routable animations, the RouterOutlet will need to be wrapped inside an element and bound with `@routeAnimation`

## Child Route Config

within children, paths that start with `/` refer to the app root, but without it extends the parent path.

## Secondary Route

Named router outlets allow for multiple outlets

## Route Guards

Prevents users from navigating to unauthorized paths and allows them to be rerouted to a login area. Allows fetching data before displaying target component. Allows for saving pending changes before leaving a component and to ask for confirmation before leaving.

## Lazy Loading

loadChildren to lazy load modules as needed in the router





