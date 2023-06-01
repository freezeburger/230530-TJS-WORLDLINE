import React, { lazy, Suspense } from 'react';

const LazyViewSplash = lazy(() => import('./ViewSplash'));

const ViewSplash = props => (
  <Suspense fallback={null}>
    <LazyViewSplash {...props} />
  </Suspense>
);

export default ViewSplash;
