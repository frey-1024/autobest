import React from 'react';
import Loadable from 'react-loadable';
import LoadingBar from '@/components/LoadingBar';

export default url =>
  Loadable({
    loader: () => import(`@/${url}.js`),
    loading(props) {
      if (props.error) {
        throw props.error;
      }
      return <LoadingBar />;
    }
  });
