<script>
  import { RunesMetaTags, Runatics } from '$lib';
  let { children, data } = $props();
  const analyticsId = "ABCDEFG";
  let metaTags = $state(
    data.layoutMetaTags
  );
</script>

<RunesMetaTags {...metaTags}/>
<Runatics {analyticsId} />
{@render children()}
