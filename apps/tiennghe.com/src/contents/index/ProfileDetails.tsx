import clsx from 'clsx';
import Link from 'next/link';
import { ChevronRightIcon } from '@/components/Icons';

function ProfileDetails() {
  return (
    <div>
      <section className={clsx('mb-12', 'lg:mb-24')}>
        <header className={clsx('mb-8')}>
          <div className={clsx('content-wrapper')}>
            <p
              className={clsx(
                'mb-4 text-3xl font-black text-slate-700',
                'lg:text-4xl',
                'dark:text-slate-200'
              )}
            >
              Projects I&#39;ve worked on
            </p>
            <p className={clsx('text-slate-600', 'dark:text-slate-400')}>
              I have worked on a variety of projects, ranging from web
              applications to mobile apps, and even some open-source
              contributions. If you&#39;re interested in about my work, you can
              check out my projects.
            </p>
            <div className={clsx('mt-4', 'md:mt-6')}>
              <Link href="/projects" className={clsx('button button--soft')}>
                View My Projects
                <ChevronRightIcon className="mt-0.5 h-3 w-3" />
              </Link>
            </div>
          </div>
        </header>
      </section>
      <section className={clsx('mb-12', 'lg:mb-24')}>
        <header className={clsx('mb-8')}>
          <div className={clsx('content-wrapper')}>
            <p
              className={clsx(
                'mb-4 text-3xl font-black text-slate-700',
                'lg:text-4xl',
                'dark:text-slate-200'
              )}
            >
              Work Experience
            </p>
            <p className={clsx('text-slate-600', 'dark:text-slate-400')}>
              I have a diverse background in software development, having worked
              with various technologies and frameworks. My experience includes
              both front-end and back-end development, mobile app, as well as
              project management and team leadership.
            </p>
            <div className={clsx('mt-4', 'md:mt-6')}>
              <Link href="work/experience" className={clsx('button button--soft')}>
                View My Experience
                <ChevronRightIcon className="mt-0.5 h-3 w-3" />
              </Link>
            </div>
          </div>
        </header>
      </section>
      <section className={clsx('mb-12', 'lg:mb-24')}>
        <header className={clsx('mb-8')}>
          <div className={clsx('content-wrapper')}>
            <p
              className={clsx(
                'mb-4 text-3xl font-black text-slate-700',
                'lg:text-4xl',
                'dark:text-slate-200'
              )}
            >
              My Blogs
            </p>
            <p className={clsx('text-slate-600', 'dark:text-slate-400')}>
              I enjoy sharing my knowledge and experiences through writing. My
              blogs cover a wide range of topics, including software development,
              technology trends, and personal growth. If you&#39;re interested in
              reading my blogs, you can find them on my blog page.
            </p>
            <div className={clsx('mt-4', 'md:mt-6')}>
              <Link href="/blog" className={clsx('button button--soft')}>
                Read My Blogs
                <ChevronRightIcon className="mt-0.5 h-3 w-3" />
              </Link>
            </div>
          </div>
        </header>
      </section>
    </div>
  );
}

export default ProfileDetails;
