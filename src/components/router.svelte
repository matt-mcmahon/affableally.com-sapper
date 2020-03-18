<svelte:window
  on:popstate="{handlePopState}"
  on:click="{handleClick}"
  on:load="{handleLoad}"
/>

<svelte:component this="{layout}">
  {#if component != null}
  <svelte:component this="{component}" />
  {/if}
</svelte:component>

<script context="module">
  const findInOr = (routes, notFound) => location => {
    const found = routes.find(route => route.url.pathname === location.pathname)
    return !found ? notFound : found
  }

  const isSameDocument = (location, pageLocation = document.location) =>
    location.origin === pageLocation.origin &&
    location.path === pageLocation.path

  const findA = target =>
    target == null
      ? null
      : target.tagName === "A"
      ? target
      : findA(target.parentNode)

  const genNav = routes =>
    routes
      .filter(({ navLinkIndex }) => navLinkIndex >= 0)
      .sort(({ navLinkIndex: a }, { navLinkIndex: b }) => a - b)
      .map(({ url, label, active }) => ({ url, label, active }))

  const init = ({ defaultLayout, routes }) => {
    let route404

    const rs = routes.reduce((routes, route) => {
      const {
        component,
        is404 = false,
        label,
        layout = defaultLayout,
        navLinkIndex = -1,
        pathname,
      } = route

      if (is404) {
        route404 = route
      }

      const url = new URL(pathname, document.location.origin)
      const active =
        url.origin === document.location.origin &&
        url.pathname === document.location.pathname

      const newRoute = {
        url,
        label,
        layout,
        component,
        navLinkIndex,
        is404,
        get active() {
          return (
            url.origin === document.location.origin &&
            url.pathname === document.location.pathname
          )
        },
      }

      return [...routes, newRoute]
    }, [])

    return {
      route404,
      rs,
    }
  }
</script>

<script>
  import { setContext } from "svelte"
  import { writable } from "svelte/store"

  export let routes
  export let layout

  let component

  const { route404, rs } = init({
    defaultLayout: layout,
    ...routes,
  })

  const navLinks = writable(genNav(rs))

  setContext("navLinks", navLinks)

  const findInRoutes = findInOr(rs, route404)

  const handleLoad = event => {
    updateRoute()
  }

  const updateRoute = (location = document.location) => {
    const route = findInRoutes(location)
    $navLinks = genNav(rs)
    component = route.component
  }

  const handlePopState = event => {
    updateRoute(document.location)
  }

  const handleClick = event => {
    const anchor = findA(event.target)
    if (anchor) {
      const location = new URL(anchor)
      if (
        location.origin === document.location.origin &&
        location.pathname !== document.location.pathname
      ) {
        event.preventDefault()
        history.pushState(null, null, location.href)
        updateRoute(location)
      }
    }
  }
</script>
