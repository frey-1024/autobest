import lazy from './utils/lazy';
import TestRoutes from '@/modules/test/routes';

export default [
  {
    component: lazy('App'),
    routes: [...TestRoutes]
  }
];
