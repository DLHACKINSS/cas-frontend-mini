import { NotFoundPage } from 'app/components/NotFoundPage';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';
import { selectAccount } from '../Auth/selectors';
import Banner0 from './Banner0';
import Content0 from './Content0';
import Content3 from './Content3';
import Content4 from './Content4';
import Content5 from './Content5';
import {
  Banner01DataSource,
  Content00DataSource,
  Footer10DataSource,
  RouteLanding,
} from './data.source';
import Footer1 from './Footer1';
import './less/antMotionStyle.less';
import Nav0 from './Nav0';
import { useInjectReducer, useInjectSaga } from 'redux-injectors';
import { reducer, sliceKey } from '../Orders/slice';
import { ordersSaga } from '../Orders/saga';

export default function Landing() {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: ordersSaga });
  const account = useSelector(selectAccount);
  return (
    <div className="templates-wrapper">
      <Nav0 />
      <Switch>
        <Route exact path="/" component={LandingPage}></Route>
        {RouteLanding.map((item, idx) => {
          if ((item.login && account) || !item.login)
            return (
              <Route key={idx} path={item.path} component={item.component} />
            );
          else if (item.login && !account) {
            return <Redirect to="sign-in" />;
          }
        })}
        <Route component={NotFoundPage}></Route>
      </Switch>
      <Footer1 id="Footer1_0" key="Footer1_0" dataSource={Footer10DataSource} />
    </div>
  );
}

function LandingPage() {
  useEffect(() => {
    if (window.location.hash) window.location.href = window.location.hash;
  }, []);
  return (
    <>
      <Banner0 id="Banner0_1" key="Banner0_1" dataSource={Banner01DataSource} />
      <Content0
        id="Content0_0"
        key="Content0_0"
        dataSource={Content00DataSource}
      />
      <Content5 id="Content5_0" key="Content5_0" />
      <Content4 id="Content4_0" key="Content4_0" />
      <Content3 id="Content3_0" key="Content3_0" />
    </>
  );
}
