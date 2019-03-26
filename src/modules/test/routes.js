import lazy from '../../utils/lazy';

export default [
  {
    path: '/test',
    exact: true,
    component: lazy('modules/test/pages/Test')
  }
];
