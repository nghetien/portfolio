export type TTableOfContentsItem = {
  title: string;
  depth: number;
  slug: string;
};

export type TTableOfContents = Array<TTableOfContentsItem>;

export type TBaseFrontMatter = {
  title: string;
  description: string;
  caption?: string;
};

export type TPageFrontMatter = TBaseFrontMatter;

export type TPageOgImage = Partial<
  Pick<TPageFrontMatter, 'caption' | 'title' | 'description'>
>;

export enum EPostPinStatus {
  PINED = 'PINED',
}

export type TPostFrontMatter = TBaseFrontMatter & {
  date: string;
  lang: 'vi' | 'en';
  tags: Array<string>;
  category: string;
  thumbnail?: string;
  pinToTop?: EPostPinStatus;
};

export type TPostOgImage = Partial<
  Pick<TPostFrontMatter, 'category' | 'title' | 'date' | 'lang' | 'tags'>
> & {
  aspectRatio?: '16/9' | '4/3' | '1/1';
};

export type TProjectFrontMatter = TBaseFrontMatter & {
  date?: string;
  company: string;
  lang: 'vi' | 'en';
  tags: Array<string>;
  category: string;
  thumbnail?: string;
  pinToTop?: EPostPinStatus;
  landingPage?: string;
};

export type TProjectOgImage = Partial<
  Pick<TProjectFrontMatter, 'category' | 'title' | 'date' | 'company' | 'lang' | 'tags' | 'landingPage'>
> & {
  aspectRatio?: '16/9' | '4/3' | '1/1';
}

export type TContentMeta = {
  meta: {
    views: number;
    shares: number;
  };
};
