interface MetaProps {
  title?: string;
  robots?: boolean;
  description?: string;
  keywords?: string;
}
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
