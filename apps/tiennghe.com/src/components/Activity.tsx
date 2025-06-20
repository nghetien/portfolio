import clsx from 'clsx';
import { m } from 'framer-motion';

const animation = {
  hide: { y: -48, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      ease: 'easeOut',
      duration: 0.12,
    },
  },
};

interface ActivityProps {
  onItemClick?: () => void;
}

function Activity({ onItemClick = () => {} }: ActivityProps) {
  return (
    <m.div
      initial="hide"
      animate="show"
      transition={{
        delayChildren: 0.12,
        staggerChildren: 0.06,
      }}
      className={clsx('flex flex-1 flex-col gap-2')}
    >
      <m.div variants={animation} className={clsx('px-2 text-xl font-bold')}>
        Recent Activities
      </m.div>
      <div
        className={clsx(
          'scrollbar-hide flex flex-1 basis-0 flex-col gap-2 overflow-y-auto p-2 pb-4',
          'sm:pb-8'
        )}
      >
        ...
      </div>
    </m.div>
  );
}

export default Activity;
