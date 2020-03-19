<footer>
  <img class="logo" src="{logo}" alt="Affable Ally Logo" />
  <ul class="credits">
    <li class="line">
      the
      <i>Affable Ally Podcast</i>
      is produced by Matthew McMahon
    </li>
    <li class="line">
      with website design by
      <a href="https://affable.dev">Matthew McMahon</a>
    </li>
  </ul>
  <p class="copyright line">
    Copyright © 2019 Matthew McMahon, All Rights Reserved
  </p>
  <nav class="nav">
    <FooterNav {segment} />
  </nav>
</footer>

<script>
  import FooterNav from "./footer-navigation.svelte"
  import { logo } from "../images"
  export let segment
</script>

<style>
  footer {
    border-top: 1px solid var(--white5);
    background-color: var(--black8);
    color: var(--white);
    font-size: 0.8rem;
    padding: 1rem;
    display: grid;
    grid-template-areas:
      "logo credits nav"
      "logo copyright nav";
    grid-template-columns: min-content 1fr 1fr;
    column-gap: 0.5rem;
    align-items: center;
  }

  li {
    display: block;
    text-align: inherit;
  }

  .logo,
  .credits li,
  .nav {
    margin: var(--footer-margin);
  }

  .credits li,
  .copyright {
    opacity: 0.25;
  }

  .credits li:hover,
  .copyright:hover {
    opacity: 1;
  }

  .logo {
    grid-area: logo;
    flex: 0 0 content;
    align-self: center;
    justify-self: center;
    max-height: 3rem;
    width: auto;
    margin-right: 1ch;
  }

  .credits {
    grid-area: credits;
  }

  .credits,
  .copyright {
    margin: 0;
    padding: 0;
    font-size: inherit;
    line-height: 1rem;
    white-space: nowrap;
  }

  .nav {
    grid-area: nav;
  }

  .copyright {
    grid-area: copyright;
  }

  a {
    color: var(--accent2);
    text-decoration: underline;
  }

  a:hover {
    color: var(--accent1);
  }

  @media only screen and (max-width: 800px) {
    footer {
      grid-template-areas:
        "logo credits   nav"
        "logo copyright nav";
      grid-template-columns: min-content 3fr min-content;
    }

    .credits li {
      display: inline;
    }

    .credits,
    .copyright {
      margin: 0;
      padding: 0;
      font-size: inherit;
      line-height: 1rem;
      white-space: normal;
      text-align: end;
    }
    li {
      text-align: start;
    }
    .credits li {
      text-align: end;
    }
  }
</style>
