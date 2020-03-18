<figure>
  <a href="/">
    <img alt="Logo" src="{logoWide}" class="wide big" />
    <img alt="Logo" src="{logoNarrow}" class="narrow" />
  </a>
  <figcaption class="screen-reader">
    The logo for the Affable Ally Podcast is a smiling caricature of the host.
  </figcaption>
</figure>

<script>
  import { logoWide, logoNarrow } from "../images"
</script>

<style>
  figure {
    align-items: stretch;
    display: flex;
    flex-direction: column;
    flex: 0 0 max-content;
    justify-content: space-between;
    margin: 0;
    padding: 0;
    text-align: center;
  }

  .narrow {
    display: none;
  }

  .wide {
    display: block;
    width: 80vw;
    height: auto;
    margin: 0 auto;
  }

  @media (max-width: 600px) and (orientation: portrait) {
    .big {
      display: none;
    }
    .narrow {
      display: block;
      width: 100%;
      height: 100%;
    }
  }
</style>
