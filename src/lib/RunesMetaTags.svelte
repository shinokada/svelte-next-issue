<script lang="ts">
  interface MetaProps {
    title?: string;
    robots?: boolean;
    description?: string;
    keywords?: string;
  }
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

