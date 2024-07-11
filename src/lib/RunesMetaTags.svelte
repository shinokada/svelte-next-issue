<script lang="ts">
  interface Props{
    title?: string
  } 
  let { title }: Props = $props();
</script>

<svelte:head>
  {#if title}
    <title>{title}</title>
  {/if}
</svelte:head>
