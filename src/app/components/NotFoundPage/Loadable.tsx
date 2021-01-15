/**
 * Asynchronously loads the component for NotFoundPage
 */

import { Row, Spin } from 'antd';
import { lazyLoad } from 'utils/loadable';
import React from 'react';

export const NotFoundPage = lazyLoad(
  () => import('./index'),
  module => module.NotFoundPage,
  {
    fallback: (
      <Row justify="center" align="middle" style={{ height: '100vh' }}>
        <Spin size="large" />
      </Row>
    ),
  },
);
