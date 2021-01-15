import 'antd/dist/antd.less';
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useInjectReducer, useInjectSaga } from 'redux-injectors';
import { NotFoundPage } from './components/NotFoundPage/Loadable';
import { ForgotPassword, SignIn, SignUp } from './containers/Auth/Loadable';
import { authSaga } from './containers/Auth/saga';
import { selectAccount } from './containers/Auth/selectors';
import { actions, reducer, sliceKey } from './containers/Auth/slice';
import { Dashboard } from './containers/Dashboard/Loadable';
import { Landing } from './containers/Home/Loadable';

export function App() {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: authSaga });

  const dispatch = useDispatch();
  const { i18n } = useTranslation();

  const account = useSelector(selectAccount);

  const currentAccount = localStorage.account
    ? JSON.parse(localStorage.account)
    : null;

  useEffect(() => {
    if (!account) {
      dispatch(actions.setAccount(currentAccount));
    }
  }, [account, dispatch]);

  return (
    <BrowserRouter>
      <Helmet
        titleTemplate="%s - FPT Virtual Datacenter"
        defaultTitle="FPT Virtual Datacenter"
        htmlAttributes={{ lang: i18n.language }}
      >
        <meta name="description" content="FPT Virtual Datacenter" />
      </Helmet>

      <Switch>
        <Route path="/sign-in" component={SignIn} />
        <Route path="/sign-up" component={SignUp} />
        <Route path="/forgot-password" component={ForgotPassword} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/" component={Landing} />
        <Route component={NotFoundPage} />
      </Switch>
    </BrowserRouter>
  );
}
