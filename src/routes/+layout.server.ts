import type { MetaProps } from '$lib';
import { ANALYTICS_ID } from '$env/static/private';
export const load = ({ url }) => {

  const layoutMetaTags: MetaProps = {
    title: 'My title',
    description: 'My description',
    keywords: 'My keywords'
  };
  return {
    layoutMetaTags,
    ANALYTICS_ID
  };
};
