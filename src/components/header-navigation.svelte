<nav>
  <ul>
    {#each links as { aria, href, rel, label }}
      <li>
        <a aria-current="{aria}" {href} {rel}>
          <span>{label}</span>
        </a>
      </li>
    {/each}
  </ul>
</nav>

<script>
  import { getNavLinks } from "src/routes/_routes.mjs"
  export let segment
  const links = getNavLinks(segment)
</script>

<style>
  nav {
    background-color: var(--color3);
    padding: 0.25em;
    margin: 0;
    border-bottom: 1px solid var(--white3);
    border-top: 1px solid var(--white3);
  }

  ul {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li {
    font-weight: bold;
    flex: 1;
    display: flex;
  }

  a {
    flex: 1 1 auto;
    margin: 0 auto;
    padding: 0.2em;
    text-align: center;
    text-decoration: none;
  }

  a span {
    display: inline-block;
    margin: 0 auto;
    padding: 0 2ch;
    border-bottom: 0.25em solid transparent;
    color: var(--white9);
  }

  a:hover span {
    border-bottom: 0.25em solid var(--white4);
  }

  [aria-current] span {
    border-bottom: 0.25em solid var(--white9);
  }
</style>
