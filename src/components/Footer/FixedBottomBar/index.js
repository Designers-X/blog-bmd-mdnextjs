import Link from 'next/link';
import styles from './index.module.scss';

const FixedBottomBar = () => {
  return (
    <section className={styles.container}>
      <Link href="/package/travel-experience">
        <a>
          <span>Signature Experiences</span>
        </a>
      </Link>
      <span className={styles.border}></span>
      <Link href="/shop">
        <a>
          <span>Shop MDiterranean</span>
        </a>
      </Link>
    </section>
  );
};
export default FixedBottomBar;
