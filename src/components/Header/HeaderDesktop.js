import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';
import { Grid } from '@material-ui/core';

import Logo from './logo';
import styles from './header.module.css';

const HeaderDesktop  = ({ siteTitle, pages }) => (
  <Grid
    component="header"
    item
    xs={12}
    md={3}
    className={classNames(styles.nav, 'fixed', 'vh100', 'w25', 'p25', 'flex', 'flex-col', 'justify-center')}
  >
    <div className={styles.logoContainer}>
      <Logo />
    </div>
    <h1 style={{ margin: 0 }}>
      <Link
        to='/'
        className={styles.mainLink}
      >
        {siteTitle}
      </Link>
    </h1>
    {pages.map(({ label, path }) => (
      <Link
        key={`Nav${label}`}
        to={path}
        className={styles.navLink}
      >
        {label}
      </Link>
    ))}
  </Grid>
);

HeaderDesktop.propTypes = {
  siteTitle: PropTypes.string,
  pages: PropTypes.array.isRequired,
}

HeaderDesktop.defaultProps = {
  siteTitle: '',
}

export default HeaderDesktop;
