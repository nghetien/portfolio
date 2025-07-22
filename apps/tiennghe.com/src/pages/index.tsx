import Head from '@/components/meta/Head';

import { getBaseUrl } from '@/helpers/url';

import IndexContents from '@/contents/index';

function Index() {
  return (
    <>
      <Head
        title="Tiến Nghê · Software Engineer"
        description="I'm Tiến Nghê, a software engineer who loves improving life through technology."
        ogImage={`${getBaseUrl()}/assets/images/tn-image.png`}
        overrideTitle
      />
      <IndexContents />
    </>
  );
}

export default Index;
