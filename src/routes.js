import lazy from './utils/lazy';
// import testRoutes from '@/modules/test/routes';
import securityRoutes from '@/modules/security/routes';
export default [
  {
    component: lazy('App'),
    routes: [...securityRoutes]
  }
];
