<footer>
  <img class="logo" src="{logo}" alt="Affable Ally Logo" />
  <ul class="credits">
    <li class="inline">
      The
      <i>Affable Ally Podcast</i>
      is produced by Matthew McMahon.
    </li>
    <li class="inline">
      Website design by
      <a href="https://affable.dev">Matthew McMahon</a>
      .
    </li>
  </ul>
  <p class="copyright">Copyright © 2019 Matthew McMahon, All Rights Reserved</p>
  <div class="nav">
    <FooterNav {segment} />
  </div>
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
    padding: 1rem 1ch;
    /* align-items: center; */
    /* display: flex; */
    /* flex-direction: row; */
    /* flex-wrap: wrap-reverse; */
    /* flex: 0 0 max-content; */
    display: grid;
    grid-template: "logo credits nav" "logo copyright nav";
  }

  footer > div {
    margin: var(--footer-margin);
    display: flex;
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
    opacity: 0.25;
    margin: 0;
    padding: 0;
    font-size: inherit;
    line-height: 1rem;
    white-space: nowrap;
  }

  .credits:hover,
  .copyright:hover {
    opacity: 1;
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
    .inline {
      display: inline;
    }
    .inline,
    .block {
      white-space: normal;
    }
    .block {
      margin-top: 0.25rem;
    }
  }
</style>
