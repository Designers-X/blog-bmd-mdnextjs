import styles from './Footer.module.scss';
import Link from 'next/link';

const Footer = () => {
  return (
    <>
      <footer>
        <div className={styles.footerSpicl}>
          <div className={styles.middelSection}>
            <div className={styles.InRow}>

              <Link href="" className={styles.LogoSection}>
                <img src="/img/the_MDiterranean_life_logo-white.png" alt="logo" />
              </Link>
            </div>
            <div class="row">
              <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 p-0">
                <ul className={styles.footerCustomMenu}>
                  <li>
                    <Link href="/subscribe">
                      <a>Subscribe</a>
                    </Link>{' '}
                    <span>|</span>
                  </li>
                  <li>
                    <Link href="/contact-us">
                      <a>Contact Us</a>
                    </Link>{' '}
                    <span>|</span>
                  </li>
                  <li>
                    <a href="/privacy-policy">Privacy Policy</a>
                    <Link href="/subscribe">Subscribe</Link> <span>|</span>{' '}
                  </li>
                  <li>
                    <Link href="/contact-us">Contact Us</Link> <span>|</span>{' '}
                  </li>
                  <li>
                    <Link href="/privacy-policy">Privacy Policy</Link>
                  </li>
                </ul>
              </div>
              <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 p-0">
                <ul className={styles.contactSocialIcons}>
                  <li>
                    <Link href={''}>
                      <a>
                        <svg
                          style={{ color: '#fff' }}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 448 512"
                          width="25"
                          height="25"
                        >
                          <path
                            d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z"
                            fill="white"
                          ></path>
                        </svg>
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href={''}>
                      <a>
                        <svg
                          style={{ color: '#fff' }}
                          xmlns="http://www.w3.org/2000/svg"
                          width="25"
                          height="25"
                          viewBox="0 0 24 24"
                        >
                          <path
                            d="M15.233 5.488c-.843-.038-1.097-.046-3.233-.046s-2.389.008-3.232.046c-2.17.099-3.181 1.127-3.279 3.279-.039.844-.048 1.097-.048 3.233s.009 2.389.047 3.233c.099 2.148 1.106 3.18 3.279 3.279.843.038 1.097.047 3.233.047 2.137 0 2.39-.008 3.233-.046 2.17-.099 3.18-1.129 3.279-3.279.038-.844.046-1.097.046-3.233s-.008-2.389-.046-3.232c-.099-2.153-1.111-3.182-3.279-3.281zm-3.233 10.62c-2.269 0-4.108-1.839-4.108-4.108 0-2.269 1.84-4.108 4.108-4.108s4.108 1.839 4.108 4.108c0 2.269-1.839 4.108-4.108 4.108zm4.271-7.418c-.53 0-.96-.43-.96-.96s.43-.96.96-.96.96.43.96.96-.43.96-.96.96zm-1.604 3.31c0 1.473-1.194 2.667-2.667 2.667s-2.667-1.194-2.667-2.667c0-1.473 1.194-2.667 2.667-2.667s2.667 1.194 2.667 2.667zm4.333-12h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm.952 15.298c-.132 2.909-1.751 4.521-4.653 4.654-.854.039-1.126.048-3.299.048s-2.444-.009-3.298-.048c-2.908-.133-4.52-1.748-4.654-4.654-.039-.853-.048-1.125-.048-3.298 0-2.172.009-2.445.048-3.298.134-2.908 1.748-4.521 4.654-4.653.854-.04 1.125-.049 3.298-.049s2.445.009 3.299.048c2.908.133 4.523 1.751 4.653 4.653.039.854.048 1.127.048 3.299 0 2.173-.009 2.445-.048 3.298z"
                            fill="white"
                          />
                        </svg>
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href={''}>
                      <a>
                        <svg
                          style={{ color: '#fff' }}
                          xmlns="http://www.w3.org/2000/svg"
                          width="25"
                          height="25"
                          viewBox="0 0 24 24"
                        >
                          <path
                            d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-.139 9.237c.209 4.617-3.234 9.765-9.33 9.765-1.854 0-3.579-.543-5.032-1.475 1.742.205 3.48-.278 4.86-1.359-1.437-.027-2.649-.976-3.066-2.28.515.098 1.021.069 1.482-.056-1.579-.317-2.668-1.739-2.633-3.26.442.246.949.394 1.486.411-1.461-.977-1.875-2.907-1.016-4.383 1.619 1.986 4.038 3.293 6.766 3.43-.479-2.053 1.08-4.03 3.199-4.03.943 0 1.797.398 2.395 1.037.748-.147 1.451-.42 2.086-.796-.246.767-.766 1.41-1.443 1.816.664-.08 1.297-.256 1.885-.517-.439.656-.996 1.234-1.639 1.697z"
                            fill="white"
                          />
                        </svg>
                      </a>
                    <Link href="#">
                      <svg
                        style={{ color: '#fff' }}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                        width="25"
                        height="25"
                      >
                        <path
                          d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z"
                          fill="white"
                        ></path>
                      </svg>
                  </li>
                  <li>
                    <a href="#">
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <svg
                        style={{ color: '#fff' }}
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="25"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M15.233 5.488c-.843-.038-1.097-.046-3.233-.046s-2.389.008-3.232.046c-2.17.099-3.181 1.127-3.279 3.279-.039.844-.048 1.097-.048 3.233s.009 2.389.047 3.233c.099 2.148 1.106 3.18 3.279 3.279.843.038 1.097.047 3.233.047 2.137 0 2.39-.008 3.233-.046 2.17-.099 3.18-1.129 3.279-3.279.038-.844.046-1.097.046-3.233s-.008-2.389-.046-3.232c-.099-2.153-1.111-3.182-3.279-3.281zm-3.233 10.62c-2.269 0-4.108-1.839-4.108-4.108 0-2.269 1.84-4.108 4.108-4.108s4.108 1.839 4.108 4.108c0 2.269-1.839 4.108-4.108 4.108zm4.271-7.418c-.53 0-.96-.43-.96-.96s.43-.96.96-.96.96.43.96.96-.43.96-.96.96zm-1.604 3.31c0 1.473-1.194 2.667-2.667 2.667s-2.667-1.194-2.667-2.667c0-1.473 1.194-2.667 2.667-2.667s2.667 1.194 2.667 2.667zm4.333-12h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm.952 15.298c-.132 2.909-1.751 4.521-4.653 4.654-.854.039-1.126.048-3.299.048s-2.444-.009-3.298-.048c-2.908-.133-4.52-1.748-4.654-4.654-.039-.853-.048-1.125-.048-3.298 0-2.172.009-2.445.048-3.298.134-2.908 1.748-4.521 4.654-4.653.854-.04 1.125-.049 3.298-.049s2.445.009 3.299.048c2.908.133 4.523 1.751 4.653 4.653.039.854.048 1.127.048 3.299 0 2.173-.009 2.445-.048 3.298z"
                          fill="white"
                        />
                      </svg>
                  </li>
                  <li>
                    <a href="#">
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <svg
                        style={{ color: '#fff' }}
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="25"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-.139 9.237c.209 4.617-3.234 9.765-9.33 9.765-1.854 0-3.579-.543-5.032-1.475 1.742.205 3.48-.278 4.86-1.359-1.437-.027-2.649-.976-3.066-2.28.515.098 1.021.069 1.482-.056-1.579-.317-2.668-1.739-2.633-3.26.442.246.949.394 1.486.411-1.461-.977-1.875-2.907-1.016-4.383 1.619 1.986 4.038 3.293 6.766 3.43-.479-2.053 1.08-4.03 3.199-4.03.943 0 1.797.398 2.395 1.037.748-.147 1.451-.42 2.086-.796-.246.767-.766 1.41-1.443 1.816.664-.08 1.297-.256 1.885-.517-.439.656-.996 1.234-1.639 1.697z"
                          fill="white"
                        />
                      </svg>
                    </a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {false && (
              <>
                <nav>
                  <div className={styles.footerMenu}>
                    <Link href={''}>
                      <a className={styles.NewsLetter}>Newsletter</a>
                    </Link>
                    <Link href={''}>
                      <a className={styles.NewsLetter}>Contact Us</a>
                    </Link>
                    <Link href={''}>
                      <a className={styles.NewsLetter}>Media Kit</a>
                    </Link>
                    <Link href={''}>
                      <a className={styles.NewsLetter}>Press Room</a>
                    </Link>
                    <Link href={''}>
                      <a className={styles.NewsLetter}>Site Map</a>
                    </Link>
                    <Link href={''}>
                      <a className={styles.NewsLetter}>Community Guidelines</a>
                    </Link>
                    <Link href={''}>
                      <a className={styles.NewsLetter}>Advertise Online</a>
                    </Link>
                    <Link href={''}>
                      <a className={styles.NewsLetter}>Customer Service</a>
                    </Link>
                    <Link href={''}>
                      <a className={styles.NewsLetter}>Subscribe</a>
                    </Link>
                    <Link href={''}>
                      <a className={styles.NewsLetter}>Give a Gift</a>
                    </Link>
                    <Link href={''}>
                      <a className={styles.NewsLetter}>Events & Promotions</a>
                    </Link>
                    <Link href={''}>
                      <a className={styles.NewsLetter}>Other Hearst Subscriptions</a>
                    </Link>
                    <Link href={''}>
                      <a className={styles.NewsLetter}>Giveaways</a>
                    <Link href="" className={styles.NewsLetter}>
                      {' '}
                      Newsletter
                    </Link>
                    <Link href="" className={styles.NewsLetter}>
                      {' '}
                      Contact Us
                    </Link>
                    <Link href="" className={styles.NewsLetter}>
                      {' '}
                      Media Kit
                    </Link>
                    <Link href="" className={styles.NewsLetter}>
                      {' '}
                      Press Room
                    </Link>
                    <Link href="" className={styles.NewsLetter}>
                      {' '}
                      Site Map
                    </Link>
                    <Link href="" className={styles.NewsLetter}>
                      {' '}
                      Community Guidelines
                    </Link>
                    <Link href="" className={styles.NewsLetter}>
                      {' '}
                      Advertise Online
                    </Link>
                    <Link href="" className={styles.NewsLetter}>
                      {' '}
                      Customer Service
                    </Link>
                    <Link href="" className={styles.NewsLetter}>
                      {' '}
                      Subscribe
                    </Link>
                    <Link href="" className={styles.NewsLetter}>
                      {' '}
                      Give a Gift
                    </Link>
                    <Link href="" className={styles.NewsLetter}>
                      {' '}
                      Events & Promotions
                    </Link>
                    <Link href="" className={styles.NewsLetter}>
                      {' '}
                      Other Hearst Subscriptions
                    </Link>
                    <Link href="" className={styles.NewsLetter}>
                      {' '}
                      Giveaways
                    </Link>
                  </div>
                </nav>
                <img src="img/Hearst-logo.png" alt="Hearst-logo" />
                <p className={styles.DigitalTextFooter}>A Part of Hearst Digital Media</p>
                <p className={styles.DigitalTextFooter}>
                  Every item on this page was chosen by an ELLE editor. We may earn commission on some of the items you
                  choose to buy.
                </p>
                <p className={styles.DigitalTextFooter}>©Hearst Magazine Media, Inc. All Rights Reserved.</p>
                <div className={styles.footerLegalMenu}>
                  <Link href={''}></Link>
                  <a>Privacy Notice/Notice at Collection</a>
                  <Link href={''}></Link>
                  <a>Your California Privacy Rights</a>
                  <Link href={''}></Link>
                  <a>Interest-Based Ads</a>
                  <Link href={''}></Link>
                  <a>Terms of Use</a>
                  <Link href={''}></Link>
                  <a>Site Map</a>
                </div>
                <div className={styles.footerButton}>
                  <Link href={''}></Link>
                  <a className={styles.lastBtn}>Do Not Sell My Personal Information</a>
                  <Link href="">Privacy Notice/Notice at Collection</Link>
                  <Link href="">Your California Privacy Rights</Link>
                  <Link href="">Interest-Based Ads</Link>
                  <Link href="">Terms of Use</Link>
                  <Link href="">Site Map</Link>
                </div>
                <div className={styles.footerButton}>
                  <Link href="" className={styles.lastBtn}>
                    Do Not Sell My Personal Information
                  </Link>
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
