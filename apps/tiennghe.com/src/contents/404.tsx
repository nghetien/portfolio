import clsx from 'clsx';
import Link from 'next/link';

function Error404Contents() {
  return (
    <div
      className={clsx(
        'background-grid flex h-full items-center justify-center'
      )}
    >
      <div
        className={clsx(
          'content-wrapper text-center text-slate-600',
          'dark:text-slate-400'
        )}
      >
        <h1 className={clsx('py-12 text-center')}>
          <div className={clsx('mb-3 text-8xl font-extrabold')}>404</div>
          <div className={clsx('text-2xl')}> Page Not Found </div>
        </h1>
        <Link
          href="/"
          className={clsx(
            'text-accent-600 rounded-xl px-4 py-2 text-xl',
            'dark:text-accent-400'
          )}
        >
          Back to homepage
        </Link>
      </div>
    </div>
  );
}

export default Error404Contents;
