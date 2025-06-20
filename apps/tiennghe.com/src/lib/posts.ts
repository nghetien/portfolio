import frontMatter from 'front-matter';
import fs from 'fs';
import path from 'path';

import type { TPostFrontMatter, TProjectFrontMatter } from '@/types';

const postsDirectory = path.join(process.cwd(), 'src/pages/blog');
const projectsDirectory = path.join(process.cwd(), 'src/pages/projects');

const getDirectory = (type_post: string) => {
  switch (type_post) {
    case 'blog':
      return postsDirectory;
    case 'projects':
      return projectsDirectory;
    default:
      throw new Error(`Unknown type_post: ${type_post}`);
  }
}

export const getPostSlugs = (type_post: string) => {
  const fileNames = fs.readdirSync(getDirectory(type_post));

  return fileNames.map((fileName) => fileName.replace(/\.mdx$/, ''));
};

export const getPostFrontMatter = (type_post: string, slug: string): (TPostFrontMatter | TProjectFrontMatter) => {
  // read markdown file as string
  const fullPath = path.join(getDirectory(type_post), `${slug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // use front-matter to parse the post metadata section
  const { attributes } = frontMatter<TPostFrontMatter | TProjectFrontMatter>(fileContents);

  return attributes;
};

export const getSortedPosts = <T extends TPostFrontMatter | TProjectFrontMatter>(type_post: string) => {
  const slugs = getPostSlugs(type_post);

  const allPostsData = slugs.map((slug) => {
    const data = getPostFrontMatter(type_post, slug);

    return {
      slug,
      frontMatter: data as T,
    };
  });

  // sort posts by date
  return allPostsData.sort(
    ({ frontMatter: { date: a } }, { frontMatter: { date: b } }) => {
      if (a < b) {
        return 1;
      }
      if (a > b) {
        return -1;
      }
      return 0;
    }
  );
};
