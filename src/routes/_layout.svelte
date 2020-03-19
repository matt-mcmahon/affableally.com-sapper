<ScreenReader />
<header id="top">
  <AppLogo />
  <HeaderNav {segment} />
</header>
<main id="main">
  <article>
    <slot />
  </article>
</main>
<AppFooter {segment} />

<script>
  import AppLogo from "src/components/header-logo.svelte"
  import AppFooter from "src/components/footer.svelte"
  import HeaderNav from "src/components/header-navigation.svelte"
  import FooterNav from "src/components/footer-navigation.svelte"
  import ScreenReader from "src/components/a11y/screen-reader.svelte"
  export let segment
  console.info(`segment is ${segment}`)
</script>

<style>
  :global(#sapper) {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    height: 100vh;
  }
  main {
    background-color: var(--black5);
    color: var(--white9);
    padding: 0.25em;
    flex: 1 1 auto;
  }
  article {
    width: 800px;
    max-width: 80vw;
    margin: 0 auto;
  }
  header {
    background-color: var(--black8);
    color: var(--white8);
  }
</style>
