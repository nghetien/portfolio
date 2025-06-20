import clsx from 'clsx';
import { m } from 'framer-motion';

const animation = {
  hide: { pathLength: 0.3 },
  show: (i) => {
    const delay = 0.6 + i * 0.1;
    return {
      pathLength: 1,
      transition: {
        pathLength: { delay, duration: 1 },
      },
    };
  },
};

interface HeaderImageAnimationProps {
  onAnimationComplete?: () => void;
}

function HeaderImageAnimation({
  onAnimationComplete = () => {},
}: HeaderImageAnimationProps) {
  return (
    <m.svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 400 390"
      fill="none"
      initial="hide"
      animate="show"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={clsx(
        'stroke-accent-500 h-[526px] w-[457px] opacity-60',
        'dark:opacity-40'
      )}
      onAnimationComplete={onAnimationComplete}
    >
      <m.path
        variants={animation}
        custom={1}
        d="m183 0 l-9 5 l-10 3 l-9 5 l-9 5 l-10 4 l-6 9 l-8 7 l-6 9 l-7 8 l-6 9 l-7 9 l-5 9 l1 11 l1 10 l2 10 l1 10 l2 10 l-1 11 l3 10 l-1 10 l-6 9 l0 11 l0 11 l1 10 l5 9 l7 9 l9 7 l10 -1 l7 8 l5 10 l2 10 l1 10 l1 10 l0 11 l-1 10 l-8 7 l-5 9 l-9 5 l-8 7 l-10 1 l-9 5 l-10 3 l-10 2 l-10 2 l-10 2 l-10 2 l-10 3 l-10 3 l-10 3 l-10 4 l-1 0 l93 -26 l5 -4 l20 -6 l9 -7 l5 -9 l8 -8 l0 -23 l-1 -10 l-1 -11 l-5 -11 l-5 -10 l-13 -2 l-9 -5 l-7 -9 l-5 -9 l-1 -5 l0 -30 l8 -10 l-3 -11 l-1 -17 l-1 -8 l-1 -10 l-2 -10 l-2 -12 l0 -13 l2 -4 l6 -10 l7 -8 l8 -10 l5 -7 l9 -9 l8 -11 l22 -12"
      />
      <m.path
        variants={animation}
        custom={2}
        d="m192 0 l7 8 l-6 -8"
      />
      <m.path
        variants={animation}
        custom={3}
        d="m212 0 l-1 1"
      />
      <m.path
        variants={animation}
        custom={4}
        d="m222 0 l7 8 l10 3 l9 6 l10 4 l8 7 l9 7 l8 7 l8 8 l6 9 l5 9 l4 10 l2 10 l1 10 l-1 10 l-3 10 l-1 10 l-1 10 l1 11 l9 7 l2 10 l1 10 l0 11 l-4 10 l-5 9 l-7 9 l-10 3 l-8 8 l-2 10 l-4 10 l-3 10 l-2 10 l-1 10 l0 11 l-2 10 l0 11 l1 10 l4 10 l8 7 l10 3 l10 2 l10 3 l10 3 l10 2 l10 2 l10 3 l10 4 l9 5 l9 5 l9 5 l9 6 l-9 -7 l-10 -5 l-11 -6 l-9 -5 l-12 -4 l-11 -3 l-11 -3 l-13 -3 l-12 -3 l-11 -3 l-13 -3 l-5 -12 l-2 -4 l0 -21 l1 -12 l1 -13 l1 -11 l3 -12 l4 -10 l4 -13 l2 -8 l23 -13 l5 -11 l3 -13 l-1 -16 l-2 -12 l-10 -4 l0 -2 l1 -11 l1 -11 l2 -10 l2 -9 l0 -14 l-2 -12 l-4 -10 l-5 -9 l-7 -10 l-5 -9 l-7 -8 l3 4 l-9 -5 l-9 -7 l-9 -7 l-10 -3 l-8 -7 l-11 -1 l-1 -7"
      />
      <m.path
        variants={animation}
        custom={5}
        d="m306 126 l2 0"
      />
    </m.svg>
  );
}

export default HeaderImageAnimation;
