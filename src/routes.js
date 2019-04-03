import lazy from './utils/lazy';
import securityRoutes from '@/modules/security/routes';
export default [
  {
    component: lazy('App'),
    routes: [...securityRoutes]
  }
];
