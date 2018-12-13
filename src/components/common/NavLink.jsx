import React from 'react';
import PropTypes from 'prop-types';
import { Link as RouterLink, Route } from 'react-router-dom';
import { FontIcon, ListItem } from 'react-md';

const NavLink = ({
  text, to, icon, exact
}) => (
  <Route path={to} exact={exact}>
    {({ match }) => {
      let leftIcon;
      if (icon) {
        leftIcon = <FontIcon>{icon}</FontIcon>;
      }

      return (
        <ListItem
          component={RouterLink}
          active={!!match}
          to={to}
          primaryText={text}
          leftIcon={leftIcon}
        />
      );
    }}
  </Route>
);

NavLink.propTypes = {
  text: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  exact: PropTypes.bool
};

NavLink.defaultProps = {
  exact: false
};

export default NavLink;
