<nav>
  <ul>
    {#each links as { aria, href, label, rel }}
      <li>
        <a aria-current="{aria}" {href} {rel}>
          <span>{label}</span>
        </a>
      </li>
    {/each}
    <li>
      <a href="#top">
        <span>Top</span>
      </a>
    </li>
  </ul>
</nav>

<script>
  import { getNavLinks } from "src/routes/_routes.mjs"
  export let segment
  const links = getNavLinks(segment)
</script>

<style>
  nav {
    padding: 0;
    margin: var(--footer-margin);
  }

  ul {
    display: flex;
    flex-flow: row wrap;
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li {
    flex: 1 1;
    margin: 0;
    padding: 0.25em;
    text-align: center;
  }

  a {
    color: inherit;
    padding: 0 0.5em;
    text-decoration: none;
    border-bottom: 0.25em solid transparent;
  }

  a:hover {
    border-bottom: 0.25em solid var(--white5);
  }

  a[aria-current] {
    border-bottom: 0.25em solid var(--white);
  }
</style>
