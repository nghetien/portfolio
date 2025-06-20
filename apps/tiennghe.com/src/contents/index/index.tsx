import clsx from 'clsx';

import ProfileDetails from '@/contents/index/ProfileDetails';
import Header from '@/contents/index/Header';
import Quote from '@/contents/index/Quote';

function QuoteSection() {
  return (
    <div className={clsx('content-wrapper')}>
      <div className={clsx('flex items-center justify-center py-8')}>
        <Quote />
      </div>
    </div>
  );
}

function IndexContents() {
  return (
    <>
      <Header />
      <div className={clsx('-mt-12 mb-12', 'md:mb-24 md:mt-0')}>
        <QuoteSection />
      </div>
      <ProfileDetails />
    </>
  );
}

export default IndexContents;
