import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

const renderRoutes = (
  routes,
  isAuthorized,
  extraProps = {},
  switchProps = {},
  authPath = '/login'
) =>
  routes ? (
    <Switch {...switchProps}>
      {routes.map((route, i) => (
        <Route
          key={route.key || i}
          path={route.path}
          exact={route.exact}
          strict={route.strict}
          render={props => {
            if (!route.requireAuth || isAuthorized || route.path === authPath) {
              return <route.component {...props} {...extraProps} route={route} />;
            }
            return (
              <Redirect
                to={{
                  pathname: authPath,
                  search: `?targetUrl=${encodeURIComponent(props.pathname)}`,
                  state: { from: props.location }
                }}
              />
            );
          }}
        />
      ))}
    </Switch>
  ) : null;

export default renderRoutes;
