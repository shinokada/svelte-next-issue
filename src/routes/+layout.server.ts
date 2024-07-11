import type { MetaProps } from '$lib';
import { ANALYTICS_ID } from '$env/static/private';
export const load = ({ url }) => {

  const layoutMetaTags: MetaProps = {
    title: 'Runes meta',
    description: 'Testing',
    keywords: 'runes, meta, tags'
  };
  return {
    layoutMetaTags,
    ANALYTICS_ID
  };
};
