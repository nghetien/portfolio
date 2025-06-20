import { getSortedPosts } from '@/lib/posts';

import BlogContents from '@/contents/blog';
import HeaderImage from '@/contents/blog/HeaderImage';
import Page from '@/contents-layouts/Page';

import type { BlogContentsProps } from '@/contents/blog';
import type { GetStaticProps } from 'next';
import type { TPostFrontMatter } from '@/types';

type BlogProps = {
  posts: BlogContentsProps['posts'];
};

function Blog({ posts }: BlogProps) {
  return (
    <Page
      frontMatter={{
        title: 'Personal Blog',
        description: 'Software Engineer thoughts and stories.',
      }}
      headerImage={<HeaderImage />}
    >
      <BlogContents posts={posts} />
    </Page>
  );
}

export const getStaticProps: GetStaticProps<BlogProps> = async () => {
  const allPostsData = getSortedPosts<TPostFrontMatter>('blog');

  return {
    props: {
      posts: allPostsData,
    },
  };
};

export default Blog;

