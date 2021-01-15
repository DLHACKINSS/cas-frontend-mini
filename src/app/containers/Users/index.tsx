import React from 'react';
import { usersSaga } from './saga';
import { reducer, sliceKey } from './slice';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import OverviewUsers from './OverviewUsers';
import UserDetail from './UserDetail';

export default function Users() {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: usersSaga });
  const match = useRouteMatch();
  return (
    <div>
      <Switch>
        <Route exact path={`${match.url}/:username`} component={UserDetail} />
        <Route path={match.url} component={OverviewUsers} />
      </Switch>
    </div>
  );
}
