<svelte:window on:load="{register}" />

<script>
  const register = () => {
    console.log(process.env.NODE_ENV)
    if (
      process.env.NODE_ENV === "production" &&
      navigator &&
      navigator.serviceWorker &&
      typeof navigator.serviceWorker.register === "function"
    ) {
      navigator.serviceWorker.register("/service-worker.js").catch(error => {
        console.info(`Unable to register a service worker!`)
        console.error(error)
      })
    }
  }
</script>
