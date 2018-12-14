import React from 'react';
import { NavigationDrawer } from 'react-md';
import { withRouter, Route, Switch } from 'react-router-dom';

import 'styles/components/App.scss';
import 'styles/components/common/_NavLink.scss';
import SideNavItems from 'constants/SideNav';
import NavLink from 'components/common/NavLink';

import Inbox from 'components/Inbox';
import Drafts from 'components/Drafts';
import Starred from 'components/Starred';
import Trash from 'components/Trash';

/* eslint-disable react/prop-types */
const App = ({ location }) => (
  <NavigationDrawer
    toolbarTitle="react-md with create-react-app v2"
    drawerTitle="Side Navigation"
    navItems={SideNavItems.map(({ to, ...rest }) => <NavLink {...rest} key={to} to={to} />)}
    mobileDrawerType={NavigationDrawer.DrawerTypes.TEMPORARY_MINI}
    tabletDrawerType={NavigationDrawer.DrawerTypes.PERSISTENT_MINI}
    desktopDrawerType={NavigationDrawer.DrawerTypes.PERSISTENT_MINI}
    contentId="app-content"
    contentClassName="md-grid"
  >
    <Switch key={location.pathname}>
      <Route path={SideNavItems[0].to} exact component={Inbox} />
      <Route path={SideNavItems[1].to} component={Drafts} />
      <Route path={SideNavItems[2].to} component={Starred} />
      <Route path={SideNavItems[3].to} component={Trash} />
    </Switch>
  </NavigationDrawer>
);

export default withRouter(App);
