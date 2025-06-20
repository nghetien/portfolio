import { PropsWithChildren } from 'react';

import WithTableOfContents from '@/components/layouts/WithTableOfContents';
import Head from '@/components/meta/Head';
import SkipNavigation from '@/components/navigations/SkipNavigation';
import PageHeader from '@/components/PageHeader';

import { getPostOgImageUrl, getPostStructuredData } from '@/helpers/post';

import PostFooter from '@/contents-layouts/Post/PostFooter';
import PostMeta from '@/contents-layouts/Post/PostMeta';

import type { TProjectFrontMatter, TProjectOgImage, TTableOfContents } from '@/types';

interface ProjectLayoutProps {
  frontMatter: TProjectFrontMatter;
  tableOfContents: TTableOfContents;
}

function ProjectLayout({
                         frontMatter: { title, description, caption, category, date, company, lang, tags },
                         tableOfContents,
                         children = null,
}: PropsWithChildren<ProjectLayoutProps>) {
  // get og image urls
  const postOgImages = getPostOgImageUrl<TProjectOgImage>({
    category: caption || category,
    title,
    date,
    company,
    lang,
    tags,
  });

  // get structured data
  const structuredData = getPostStructuredData({
    title,
    dateModified: date,
    datePublished: date,
    images: [postOgImages['1/1'], postOgImages['4/3'], postOgImages['16/9']],
  });

  return (
    <>
      <Head
        title={title}
        description={description}
        ogImage={postOgImages.default}
        structuredData={structuredData}
      />
      <SkipNavigation />
      <PageHeader title={title} description={description} caption={caption} />
      <PostMeta date={date} lang={lang} />
      <WithTableOfContents tableOfContents={tableOfContents}>
        {children}
        <PostFooter redirect='projects' tags={tags} category={category} />
      </WithTableOfContents>
    </>
  );
}

export default ProjectLayout;
