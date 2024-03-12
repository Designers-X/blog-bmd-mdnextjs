import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './index.module.scss';

const FixedBottomBar = () => {
  const router = useRouter();
  console.log('Current Path:', router.pathname);

  return (
    <section className={styles.container}>
      <Link href="/package/travel-experience">
        <a className={router.pathname === '/package/[[...package]]' ? styles.active : ''}>
          <span>
            <img src="/package/travelIcon.svg" />
          </span>
        </a>
      </Link>

      <Link href="/shop">
        <a className={router.pathname === '/shop' ? styles.active : ''}>
          <span>
            <img src="/package/NotificationIcon.svg" />
          </span>
        </a>
      </Link>

      <Link href="/shop/ferragamo-shoe">
        <a className={router.pathname === '/shop/ferragamo-shoe' ? styles.active : ''}>
          <span>
            <img src="/package/AddCartIcon.svg" />
          </span>
        </a>
      </Link>

      <Link href="/shop/cart">
        <a className={router.pathname === '/shop/cart' ? styles.active : ''}>
          <span>
            <img src="/package/RealEstateIcon.svg" />
          </span>
        </a>
      </Link>
    </section>
  );
};

export default FixedBottomBar;
