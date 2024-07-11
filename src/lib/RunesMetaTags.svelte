<script lang="ts">
  import type { MetaProps } from './types.ts';
  let { title, description, keywords }: MetaProps = $props();
  console.log(title, description, keywords)
</script>

<svelte:head>
  {#if title}
    <title>{title}</title>
  {/if}

  {#if description}
    <meta name="description" content={description} />
  {/if}

  {#if keywords}
    <meta name="keywords" content={keywords} />
  {/if}

</svelte:head>

