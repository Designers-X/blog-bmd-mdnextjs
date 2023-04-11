import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <>
      <footer>
        <div className={styles.footerSpicl}>
          <div className={styles.middelSection}>
            <div className={styles.InRow}>
              <a href="" className={styles.LogoSection}>
                <img src="/img/the_MDiterranean_life_logo-white.png" alt="logo" />
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
            {false && (
              <>
                <img src="img/Hearst-logo.png" alt="Hearst-logo" />
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
              </>
            )}
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
