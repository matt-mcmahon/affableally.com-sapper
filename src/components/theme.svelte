<slot>
  <p>
    Give child components access to theme-specific context.
  </p>
</slot>

<style>
  :global(:root) {
    --breakpoint: 600px;
    --footer-margin: 0 auto 0 auto;
  }

  /* Content-First Breakpoints */
  @media only screen and (max-width: 800px) {
    :root {
      --footer-margin: 0 auto 1rem auto;
    }
  }
</style>
