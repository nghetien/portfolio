import clsx from 'clsx';

import ProjectPreview from '@/contents/projects/ProjectPreview';

import type { TProjectFrontMatter } from '@/types';
import { EPostPinStatus } from '@/types';
import Image from '@/components/mdx/Image';


export type ProjectContentsProps = {
  posts: Array<{
    slug: string;
    frontMatter: TProjectFrontMatter;
  }>;
};

export type TProjectPreview = TProjectFrontMatter & {
  slug: string;
};

function ProjectsContents({ posts }: ProjectContentsProps) {
  let pinnedPost: TProjectPreview;
  const postsPreview: Array<TProjectPreview> = [];

  posts.forEach(({ slug, frontMatter }) => {

    const preview: TProjectPreview = {
      slug,
      ...frontMatter,
    };

    const { pinToTop } = preview

    if (pinToTop === EPostPinStatus.PINED) {
      pinnedPost = preview;
    }
    postsPreview.push(preview);
  });

  return (
    <div className={clsx('content-wrapper')}>
      <div
        className={clsx(
          'flex flex-col gap-8',
          'md:flex-row md:gap-8 lg:gap-24'
        )}
      >
        <div className={clsx('flex-1')}>
          {pinnedPost && (
            <div
              className={clsx(
                'mb-8 flex items-start gap-4',
                'md:mb-12 md:gap-6'
              )}
            >
              <div className={clsx('flex-1')}>
                <ProjectPreview
                  pinned
                  slug={pinnedPost.slug}
                  category={pinnedPost.category}
                  title={pinnedPost.title}
                  description={pinnedPost.description}
                  date={pinnedPost.date}
                  company={pinnedPost.company}
                  lang={pinnedPost.lang}
                  tags={pinnedPost.tags}
                  pinToTop={pinnedPost.pinToTop}
                  landingPage={pinnedPost.landingPage}
                />
              </div>
            </div>
          )}

          {postsPreview.map(
            ({
               slug,
               category,
               title,
               description,
               date,
               company,
               lang,
               tags,
               thumbnail,
              landingPage,
             }) => (
              <div
                key={slug}
                className={clsx(
                  'flex items-start',
                  'gap-4',
                  'md:mb-4 md:gap-2',
                  'lg:gap-12',
                )}
              >
                <Image
                  src={thumbnail}
                  alt={title}
                  width={240}
                  height={240}
                  className={clsx(
                    'border-0',
                    'max-w-[120px]',
                    'md:max-w-[240px]',
                    'rounded-lg object-cover',
                  )}
                />
                <div className={clsx('flex-1')}>
                  <ProjectPreview
                    slug={slug}
                    category={category}
                    title={title}
                    description={description}
                    date={date}
                    company={company}
                    lang={lang}
                    tags={tags}
                    landingPage={landingPage}
                  />
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectsContents;
