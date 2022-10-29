import Link from 'next/link';

import useSite from 'hooks/use-site';
import { postPathBySlug } from 'lib/posts';
import { categoryPathBySlug } from 'lib/categories';

import Section from 'components/Section';
import Container from 'components/Container';

import styles from './Footer.module.scss';

const Footer = () => {
  const { metadata = {}, recentPosts = [], categories = [] } = useSite();
  const { title } = metadata;

  const hasRecentPosts = Array.isArray(recentPosts) && recentPosts.length > 0;
  const hasRecentCategories = Array.isArray(categories) && categories.length > 0;
  const hasMenu = hasRecentPosts || hasRecentCategories;

  return (
    <>
      <footer className={styles.footer}>
        {hasMenu && (
          <Section className={styles.footerMenu}>
            <Container>
              <ul className={styles.footerMenuColumns}>
                {hasRecentPosts && (
                  <li>
                    <Link href="/posts/">
                      <a className={styles.footerMenuTitle}>
                        <strong>Recent Posts</strong>
                      </a>
                    </Link>
                    <ul className={styles.footerMenuItems}>
                      {recentPosts.map((post) => {
                        const { id, slug, title } = post;
                        return (
                          <li key={id}>
                            <Link href={postPathBySlug(slug)}>
                              <a>{title}</a>
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </li>
                )}
                {hasRecentCategories && (
                  <li>
                    <Link href="/categories/">
                      <a className={styles.footerMenuTitle}>
                        <strong>Categories</strong>
                      </a>
                    </Link>
                    <ul className={styles.footerMenuItems}>
                      {categories.map((category) => {
                        const { id, slug, name } = category;
                        return (
                          <li key={id}>
                            <Link href={categoryPathBySlug(slug)}>
                              <a>{name}</a>
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </li>
                )}
                <li>
                  <p className={styles.footerMenuTitle}>
                    <strong>More</strong>
                  </p>
                  <ul className={styles.footerMenuItems}>
                    <li>
                      <a href="/feed.xml">RSS</a>
                    </li>
                    <li>
                      <a href="/sitemap.xml">Sitemap</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </Container>
          </Section>
        )}

        <Section className={styles.footerLegal}>
          <Container>
            <p>
              &copy; {new Date().getFullYear()} {title}
            </p>
          </Container>
        </Section>
      </footer>

      <footer>
        <div className={styles.footerSpicl}>
          <div className={styles.middelSection}>
            <div className={styles.InRow}>
              <a href="" className={styles.LogoSection}>
                <img src="img/the_MDiterranean_life_logo-white.png" />
              </a>
              <div className={styles.SocialIcon}>
                <i className="fa fa-twitter fa-2x paddingIcon" aria-hidden="true"></i>

                <i className="fa fa-youtube-play fa-2x paddingIcon" aria-hidden="true"></i>

                <i className="fa fa-facebook fa-2x paddingIcon" aria-hidden="true"></i>

                <i className="fa fa-instagram fa-2x paddingIcon" aria-hidden="true"></i>

                <i className="fa fa-pinterest-p fa-2x paddingIcon" aria-hidden="true"></i>
              </div>
            </div>
            <nav>
              <div className={styles.footerMenu}>
                <a href="" className={styles.NewsLetter}>
                  {' '}
                  Newsletter
                </a>
                <a href="" className={styles.NewsLetter}>
                  {' '}
                  Contact Us
                </a>
                <a href="" className={styles.NewsLetter}>
                  {' '}
                  Media Kit
                </a>
                <a href="" className={styles.NewsLetter}>
                  {' '}
                  Press Room
                </a>
                <a href="" className={styles.NewsLetter}>
                  {' '}
                  Site Map
                </a>
                <a href="" className={styles.NewsLetter}>
                  {' '}
                  Community Guidelines
                </a>
                <a href="" className={styles.NewsLetter}>
                  {' '}
                  Advertise Online
                </a>
                <a href="" className={styles.NewsLetter}>
                  {' '}
                  Customer Service
                </a>
                <a href="" className={styles.NewsLetter}>
                  {' '}
                  Subscribe
                </a>
                <a href="" className={styles.NewsLetter}>
                  {' '}
                  Give a Gift
                </a>
                <a href="" className={styles.NewsLetter}>
                  {' '}
                  Events & Promotions
                </a>
                <a href="" className={styles.NewsLetter}>
                  {' '}
                  Other Hearst Subscriptions
                </a>
                <a href="" className={styles.NewsLetter}>
                  {' '}
                  Giveaways
                </a>
              </div>
            </nav>
            <img src="img/Hearst-logo.png" />
            <p className={styles.DigitalTextFooter}>A Part of Hearst Digital Media</p>
            <p className={styles.DigitalTextFooter}>
              Every item on this page was chosen by an ELLE editor. We may earn commission on some of the items you
              choose to buy.
            </p>
            <p className={styles.DigitalTextFooter}>©Hearst Magazine Media, Inc. All Rights Reserved.</p>
            <div className={styles.footerLegalMenu}>
              <a href="">Privacy Notice/Notice at Collection</a>
              <a href="">Your California Privacy Rights</a>
              <a href="">Interest-Based Ads</a>
              <a href="">Terms of Use</a>
              <a href="">Site Map</a>
            </div>
            <div className={styles.footerButton}>
              <a href="" className={styles.lastBtn}>
                Do Not Sell My Personal Information
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
