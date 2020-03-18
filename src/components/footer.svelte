<footer>
  <div>
    <img src="{logo}" alt="Affable Ally Logo" />
    <div class="credits">
      <p class="inline">
        The
        <i>Affable Ally Podcast</i>
        is produced by Matthew McMahon.
      </p>
      <p class="inline">
        Website design by
        <a href="https://affable.dev">Matthew McMahon</a>
        .
      </p>
      <p class="block">Copyright © 2019 Matthew McMahon, All Rights Reserved</p>
    </div>
  </div>
  <FooterNav {segment} />
</footer>

<script>
  import FooterNav from "./footer-navigation.svelte"
  import { logo } from "../images"
  export let segment
</script>

<style>
  footer {
    border-top: 1px solid var(--white5);
    color: var(--white);
    background-color: var(--black8);
    align-items: center;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap-reverse;
    flex: 0 0 max-content;
    font-size: 0.8rem;
    padding: 1rem 1ch;
  }

  footer > div {
    margin: var(--footer-margin);
    display: flex;
  }

  .credits {
    opacity: 0.25;
  }

  .credits:hover {
    opacity: 1;
  }

  .inline,
  .block {
    margin: 0;
    padding: 0;
    font-size: inherit;
    line-height: 1rem;
    white-space: nowrap;
  }

  a {
    color: var(--accent2);
    text-decoration: underline;
  }

  a:hover {
    color: var(--accent1);
  }

  img {
    flex: 0 0 content;
    align-self: center;
    justify-self: center;
    max-height: 3rem;
    width: auto;
    margin-right: 1ch;
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
