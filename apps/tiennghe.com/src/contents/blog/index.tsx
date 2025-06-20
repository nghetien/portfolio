import clsx from 'clsx';

import PostPreview from '@/contents/blog/PostPreview';

import type { TPostFrontMatter } from '@/types';
import { EPostPinStatus } from '@/types';
import Image from '@/components/mdx/Image';

export type BlogContentsProps = {
  posts: Array<{
    slug: string;
    frontMatter: TPostFrontMatter;
  }>;
};

export type TPostPreview = TPostFrontMatter & {
  slug: string;
};

function BlogContents({ posts }: BlogContentsProps) {
  let pinnedPost: TPostPreview;
  const postsPreview: Array<TPostPreview> = [];

  posts.forEach(({ slug, frontMatter }) => {

    const preview: TPostPreview = {
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
                <PostPreview
                  pinned
                  slug={pinnedPost.slug}
                  category={pinnedPost.category}
                  title={pinnedPost.title}
                  description={pinnedPost.description}
                  date={pinnedPost.date}
                  lang={pinnedPost.lang}
                  tags={pinnedPost.tags}
                  pinToTop={pinnedPost.pinToTop}
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
              lang,
              tags,
              thumbnail,
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
                  width={160}
                  height={160}
                  className={clsx(
                    'rounded-lg object-cover',
                  )}
                  />
                <div className={clsx('flex-1')}>
                  <PostPreview
                    slug={slug}
                    category={category}
                    title={title}
                    description={description}
                    date={date}
                    lang={lang}
                    tags={tags}
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

export default BlogContents;
