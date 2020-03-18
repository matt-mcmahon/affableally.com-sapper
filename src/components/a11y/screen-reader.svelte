<svelte:options immutable="{true}" />
<div class="screen-reader">
  <a class="screen-reader-focusable" href="{target}">
    Skip to the main content
  </a>
</div>

<script>
  import { onMount } from "svelte"
  export let target

  onMount(() => {
    const main = document.querySelector(target)
    if (main != null) {
      main.classList.add(".tabindex")
    }
  })
</script>

<style>
  /**
   * Visually hide an element, but leave it available for screen readers
   * @link https://github.com/h5bp/html5-boilerplate/blob/master/dist/css/main.css
   * @link http://snook.ca/archives/html_and_css/hiding-content-for-accessibility
   */
  :global(.screen-reader) {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    white-space: nowrap;
    width: 1px;
  }

  /**
   * Extends the .screen-reader class to allow the element to be focusable when
   * navigated to via the keyboard:
   * @link https://github.com/h5bp/html5-boilerplate/blob/master/dist/css/main.css
   * @link https://www.drupal.org/node/897638
   */
  :global(.screen-reader-focusable:active),
  :global(.screen-reader-focusable:focus) {
    clip: auto;
    height: auto;
    margin: 0;
    overflow: visible;
    position: static;
    white-space: normal;
    width: auto;
  }

  /**
   * @workaround Remove focus from <main> element when using tabindex="-1" hack
   * for skipnav link
   * @link https://code.google.com/p/chromium/issues/detail?id=37721
   */
  :global(#main:focus) {
    outline: none;
  }
</style>
