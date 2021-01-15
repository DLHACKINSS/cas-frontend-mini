import { Breadcrumb, ConfigProvider, Layout } from 'antd';
import enEN from 'antd/lib/locale/en_US';
import { dashboardRoutes } from 'app/routes/route.dashboard';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useSelector } from 'react-redux';
import { Redirect, Route, Switch, useRouteMatch } from 'react-router-dom';
import { selectAccount } from '../Auth/selectors';
import AppBar from './AppBar';
import SiderBar from './SiderBar';
import './styles.less';

const { Header, Content, Footer, Sider } = Layout;

export default function Dashboard() {
  const [collapsed, setCollapsed] = useState(false);
  const match = useRouteMatch();

  const account = useSelector(selectAccount);

  //Switch Route in Dashboard
  const switchRoutes = (
    <Switch>
      {dashboardRoutes.map(prop =>
        prop.children.map((chil, key) => (
          <Route
            key={key}
            path={`${match.url}${prop.path}${chil.path}`}
            render={() => (
              <>
                <Breadcrumb style={{ margin: '16px 0 0 16px' }}>
                  <Breadcrumb.Item>{prop.name}</Breadcrumb.Item>
                  <Breadcrumb.Item>{chil.name}</Breadcrumb.Item>
                </Breadcrumb>
                <div
                  className="site-layout-background"
                  style={{ padding: 24, minHeight: 360 }}
                >
                  {chil.component}
                </div>
              </>
            )}
          />
        )),
      )}
    </Switch>
  );

  //Handle collapse sider left
  const onCollapse = collapsed => setCollapsed(collapsed);

  return !account ? (
    <Redirect to="/sign-in" />
  ) : (
    <ConfigProvider locale={enEN}>
      <Helmet>
        <title>Dashboard</title>
        <meta name="description" content="Dashboard" />
      </Helmet>
      <Layout style={{ minHeight: '100vh' }}>
        <Sider
          className="sider"
          collapsible
          collapsed={collapsed}
          onCollapse={onCollapse}
          collapsedWidth={90}
        >
          <SiderBar />
        </Sider>

        <Layout
          className="site-layout"
          style={{ marginLeft: collapsed ? 90 : 200 }}
        >
          <Header className="header" style={{ padding: 0 }}>
            <AppBar />
          </Header>
          <Content>{switchRoutes}</Content>
          <Footer style={{ textAlign: 'center' }}>
            Copyright © 2020 TNHH MTV viễn thông quốc tế FPT
          </Footer>
        </Layout>
      </Layout>
    </ConfigProvider>
  );
}
