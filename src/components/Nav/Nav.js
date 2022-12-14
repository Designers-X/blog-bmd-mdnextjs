import React from 'react';
import Link from 'next/link';

import useSite from 'hooks/use-site';
import { findMenuByLocation, MENU_LOCATION_NAVIGATION_DEFAULT } from 'lib/menus';

import Section from 'components/Section';
import styles from './Nav.module.scss';
import NavListItem from 'components/NavListItem';
import Leftsidebar from 'components/Leftsidebar';

const Nav = () => {
  const { menus } = useSite();
  const navigationLocation = process.env.WORDPRESS_MENU_LOCATION_NAVIGATION || MENU_LOCATION_NAVIGATION_DEFAULT;
  const navigation = findMenuByLocation(menus, navigationLocation);

  return (
    <nav className={styles.nav}>
      <div className={styles.sidebarcontainer}>
        <Section className={styles.navSection}>
          <Leftsidebar />
          <p className={styles.navName}>
            <Link href="/">
              <a>
                <img src="/the_MDiterranean_life_logo.png" width={180} />
              </a>
            </Link>
          </p>
          <div className={styles.sidebarcontainer}>
            <div className={styles.topnav}>
              {navigation?.map((listItem) => {
                return <NavListItem key={listItem.id} item={listItem} />;
              })}
              <div className={styles.topnavright}>
                <a href="#search">Subscribe</a>
                <a href="#about">Sign in</a>
              </div>
            </div>
          </div>
        </Section>
      </div>
    </nav>
  );
};

export default Nav;
