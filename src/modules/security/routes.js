import lazy from '../../utils/lazy';

export default [
  {
    path: '/login',
    exact: true,
    component: lazy('modules/security/pages/LoginAndRegister')
  }
];
