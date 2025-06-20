import { getSortedPosts } from '@/lib/posts';

import ProjectsContents from '@/contents/projects';
import HeaderImage from '@/contents/projects/HeaderImage';
import Page from '@/contents-layouts/Page';

import type { GetStaticProps } from 'next';
import type { ProjectContentsProps } from '@/contents/projects';
import type { TProjectFrontMatter } from '@/types';

type ProjectProps = {
  posts: ProjectContentsProps['posts'];
};

function Projects({ posts }: ProjectProps) {
  return (
    <Page
      frontMatter={{
        title: 'Projects',
        description: 'Showcase of my projects and contributions.',
      }}
      headerImage={<HeaderImage />}
    >
      <ProjectsContents posts={posts}/>
    </Page>
  );
}

export const getStaticProps: GetStaticProps<ProjectProps> = async () => {
  const allPostsData = getSortedPosts<TProjectFrontMatter>('projects');

  return {
    props: {
      posts: allPostsData,
    },
  };
};

export default Projects;
