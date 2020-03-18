const is = (segment, value) => {
  console.log(`is("${segment}", "${value}")? ${segment === value}`)
  return segment === value ? "page" : undefined
}

export const getNavLinks = segment => [
  {
    aria: is(segment, undefined),
    href: "/",
    label: "Home",
  },
  {
    aria: is(segment, "about"),
    href: "/about",
    label: "About",
  },
  {
    aria: is(segment, "episodes"),
    href: "/episodes",
    label: "Episodes",
  },
  {
    aria: is(segment, "people"),
    href: "/people",
    label: "People",
  },
  {
    aria: is(segment, "blog"),
    href: "/blog",
    label: "Blog",
    rel: "prefetch",
  },
]
