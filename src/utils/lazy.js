import Loadable from 'react-loadable';
import LoadingSpinner from '@/components/LoadingSpinner';

export const lazy = url =>
  Loadable({
    loader: () => import(url),
    loading: LoadingSpinner
  });
