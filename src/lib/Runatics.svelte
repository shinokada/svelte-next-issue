<script lang="ts">
  interface Props {
    analyticsId: string;
  }
  let { analyticsId }: Props = $props();

  $effect(() => {
    const script = document.createElement('script');
    script.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag() { dataLayer.push(arguments); }
      gtag('js', new Date());
      gtag('config', '${analyticsId}');
      `;
    document.head.appendChild(script);
  });
</script>

<svelte:head>
  <script async src="https://www.googletagmanager.com/gtag/js?id={analyticsId}"></script>
</svelte:head>
