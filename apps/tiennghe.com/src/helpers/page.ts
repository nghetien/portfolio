import { getBaseUrl, getParams } from '@/helpers/url';

import type { TPageOgImage } from '@/types';

export const getPageOgImageUrl = ({
  caption,
  title,
  description,
}: TPageOgImage) => ({
  default: encodeURI(
    `${getBaseUrl()}/api/tn-page?${getParams({ caption, title, description })}`
  ),
});
