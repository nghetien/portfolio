import clsx from 'clsx';
import Link from 'next/link';

import {
  ExternalLink,
  GitHubIcon,
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  TikTokIcon,
} from '@/components/Icons';

import dayjs from '@/utils/dayjs';

interface FooterLinkProps {
  title: string;
  href: string;
  label?: 'new' | 'soon';
  isInternal?: boolean;
}

function FooterLink({
  title,
  href,
  label = undefined,
  isInternal = true,
}: FooterLinkProps) {
  if (label === 'soon') {
    return (
      <span className={clsx('footer-link footer-link--soon')}>
        {title}
        <span className={clsx('footer-link__label')}>{label}</span>
      </span>
    );
  }

  if (isInternal) {
    return (
      <Link href={href} className={clsx('footer-link')}>
        {title}
        {label && <span className={clsx('footer-link__label')}>{label}</span>}
      </Link>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer nofollow"
      className={clsx('footer-link')}
    >
      {title}
      <ExternalLink className={clsx('h-3.5 w-3.5')} />
      {label && <span className={clsx('footer-link__label')}>{label}</span>}
    </a>
  );
}

interface FooterGroupProps {
  title: string;
  links: Array<FooterLinkProps>;
}

function FooterGroup({ title, links }: FooterGroupProps) {
  return (
    <div className={clsx('flex-1')}>
      <div
        className={clsx(
          'mb-2 px-2 text-[13px] text-slate-600',
          'dark:text-slate-400'
        )}
      >
        {title}
      </div>
      <ul className={clsx('flex flex-col')}>
        {links.map(({ title: linkTitle, href, label, isInternal }) => (
          <li key={href}>
            <FooterLink
              title={linkTitle}
              href={href}
              label={label}
              isInternal={isInternal}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

function FooterDescription() {
  return (
    <div className={clsx('max-w-[348px]')}>
      <div
        className={clsx(
          'mb-3 text-[13px] text-slate-600',
          'dark:text-slate-400'
        )}
      >
        About Me
      </div>
      <p className={clsx('mb-4 font-normal leading-relaxed')}>
        I&apos;m Tiến Nghê, a <strong>software engineer</strong> who loves
        improving life through technology.
      </p>
      <ul className={clsx('-ml-2 flex gap-1')}>
        <li>
          <a
            href="https://www.linkedin.com/in/tien-nghe-801a39193"
            target="_blank"
            rel="noreferrer nofollow"
            className={clsx('flex h-9 w-9 items-center justify-center')}
            aria-label="My LinkedIn profile"
            title="My LinkedIn profile"
          >
            <LinkedInIcon className={clsx('h-5 w-5')} />
          </a>
        </li>
        <li>
          <a
            href="https://www.github.com/nghetien"
            target="_blank"
            rel="noreferrer nofollow"
            className={clsx('flex h-9 w-9 items-center justify-center')}
            aria-label="My GitHub profile"
            title="My GitHub profile"
          >
            <GitHubIcon className={clsx('h-5 w-5')} />
          </a>
        </li>
        <li>
          <a
            href="https://www.facebook.com/nghe.quyet.tien.2024"
            target="_blank"
            rel="noreferrer nofollow"
            className={clsx('flex h-9 w-9 items-center justify-center')}
            aria-label="My Facebook profile"
            title="My Facebook profile"
          >
            <FacebookIcon className={clsx('h-5 w-5')} />
          </a>
        </li>
        <li>
          <a
            href="	https://www.tiktok.com/@tien_nq"
            target="_blank"
            rel="noreferrer nofollow"
            className={clsx('flex h-9 w-9 items-center justify-center')}
            aria-label="My TikTok profile"
            title="My TikTok profile"
          >
            <TikTokIcon className={clsx('h-5 w-5')} />
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/nghe.tien"
            target="_blank"
            rel="noreferrer nofollow"
            className={clsx('flex h-9 w-9 items-center justify-center')}
            aria-label="My Intagram profile"
            title="My Intagram profile"
          >
            <InstagramIcon className={clsx('h-5 w-5')} />
          </a>
        </li>
      </ul>
    </div>
  );
}

function Footer() {
  return (
    <footer
      className={clsx(
        'background-grid background-grid--fade-in border-divider-light mt-24 pt-16 text-sm text-slate-900',
        'dark:border-divider-dark dark:text-slate-200'
      )}
    >
      <div className={clsx('content-wrapper')}>
        <div className={clsx('py-10 font-semibold')}>
          <div className={clsx('flex flex-col-reverse gap-16', 'lg:flex-row')}>
            <div className={clsx('flex-1')}>
              <FooterDescription />
            </div>
            <div
              className={clsx(
                '-mx-2 flex flex-1 flex-col gap-8',
                'sm:flex-row sm:gap-16 lg:mx-0'
              )}
            >
              <div className={clsx('flex', 'sm:gap-16')}>
                <FooterGroup
                  title="Work"
                  links={[
                    { title: 'Contact', href: '/work/contact' },
                    { title: 'Experience', href: '/work/experience' },
                    {
                      title: 'Services',
                      href: '/work/services',
                      label: 'soon',
                    },
                    {
                      title: 'Skills and Tools',
                      href: '/work/skills-and-tools',
                    },
                    { title: 'Studio', href: '/work/studio' },
                  ]}
                />
                <FooterGroup
                  title="Learn"
                  links={[
                    {
                      title: 'Projects',
                      href: '/projects',
                    },
                    {
                      title: 'Personal Blog',
                      href: '/blog',
                    },
                    {
                      title: 'T.I.L',
                      href: '/today-i-am-learning',
                      label: 'new',
                    },
                  ]}
                />
              </div>
            </div>
          </div>
        </div>
        <div
          className={clsx(
            'border-divider-light flex justify-between border-t py-6 text-xs',
            'dark:border-divider-dark'
          )}
        >
          <div className={clsx('font-semibold')}>
            &copy; {dayjs().format('YYYY')}, Tiến Nghê
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
