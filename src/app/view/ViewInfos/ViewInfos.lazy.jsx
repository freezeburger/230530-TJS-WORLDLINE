import React, { lazy, Suspense } from 'react';

const LazyViewInfos = lazy(() => import('./ViewInfos'));

const ViewInfos = props => (
  <Suspense fallback={null}>
    <LazyViewInfos {...props} />
  </Suspense>
);

export default ViewInfos;
