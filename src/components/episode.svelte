{#await component}
<p>Loading Espisode {season}.{episode} ...</p>
{:then ep}
<svelte:component this="{ep}" />
{:catch error}
<p>Something went wrong: {error.message}</p>
{/await}

<script>
  export let season
  export let episode

  const path =
    `@/pages/episodes/` +
    `${season}`.padStart(2, "0") +
    `/` +
    `${episode}`.padStart(4, "0") +
    `/index.md`

  const component = import(path)

  console.log(`import(${path})`)
</script>
