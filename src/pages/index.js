import useSite from 'hooks/use-site';
import { getPaginatedPosts } from 'lib/posts';
import { WebsiteJsonLd } from 'lib/json-ld';

import Layout from 'components/Layout';
import Header from 'components/Header';
import Section from 'components/Section';
import Container from 'components/Container';
import PostCard from 'components/PostCard';
import Pagination from 'components/Pagination';

import styles from 'styles/pages/Home.module.scss';

export default function Home({ posts, pagination }) {
  const { metadata = {} } = useSite();
  const { title, description } = metadata;

  return (
    <Layout>
      <WebsiteJsonLd siteTitle={title} />
      <Header>
        <h1
          dangerouslySetInnerHTML={{
            __html: title,
          }}
        />

        <p
          className={styles.description}
          dangerouslySetInnerHTML={{
            __html: description,
          }}
        />
      </Header>
      <main>
        <section>
          <div className={styles.containerfluid_boxGrayTop}></div>
        </section>
        <section>
          <div className={styles.container}>
            <div className={styles.dflex}>
              <div className={styles.width50}>
                <div className={styles.ShoppingSec}>
                  <div className={styles.ShoppingText}>Shopping</div>
                  <h2 className="">
                    <span className={styles.OutFits}>13 Chic Sweater Vest Outfits to Inspire You This Fall</span>
                  </h2>
                  <div>
                    <p>Straight from your favorite celebrities and street style stars.</p>
                  </div>
                  <div className={styles.ShoppingText}>By Sam Peters</div>
                </div>
              </div>
              <div className={styles.width50}>
                <img className={styles.imgfluid} src="/img/sweater-vests-outfit.jpg" />
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className={styles.container}>
            <div className={styles.FashionNew_textCenter}>
              <h2 className={styles.fashiontext}>
                <span>
                  <a href=""> Fashion </a>
                </span>
                <div className={styles.WhatNew}>What`s New</div>
              </h2>
            </div>
          </div>
        </section>
        <section>
          <div className={styles.container}>
            <div className={styles.inlineflex}>
              <div className={styles.width70}>
                <a className={styles.AllTheBest} href="#">
                  <img className={styles.imgfluid} src="/img/all-the-best.jpg" />
                  <div className={styles.BestResortText}>
                    <span className={styles.fashionCompaigns}>All the Best Resort 2023 Fashion Campaigns</span>
                    <div className={styles.winterComing}>
                      <p>Winter is coming...</p>
                    </div>
                    <div className={styles.AddressLeBlanc}>
                      <p>By Kevin LeBlanc and Claire Stern</p>
                    </div>
                  </div>
                </a>
              </div>
              <div className={styles.width30}>
                <div className={styles.rightBeauty}>
                  <a href="#">
                    <div className={styles.inlineflex}>
                      <span className={styles.marginAuto}>
                        {' '}
                        Take a Look at the World`s Most Luxurious Island Properties{' '}
                        <p className={styles.ByTextStyle}>Advertisement</p>
                      </span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className={styles.container}>
            <div className={styles.FashionNew_textCenter}>
              <h2 className={styles.fashiontext}>
                <span>
                  <a href=""> SHOP `TIL YOU DROP </a>
                </span>
              </h2>
            </div>
          </div>
        </section>
        <section>
          <div className={styles.container_textcenter}>
            <div className={styles.inlineflex_gridgap}>
              <div className={styles.card}>
                <a href="">
                  <img src="img/product-01.jpg" alt="" style={{ width: 260 }} />
                  <p>15 Must-Buy Finds From Nordstrom`s Fall Sale Event</p>
                </a>
              </div>
              <div className={styles.card}>
                <a href="">
                  <img src="/img/product-02.jpg" alt="" style={{ width: 260 }} />
                  <p>The 18 Coolest Clogs to Shop Now</p>
                </a>
              </div>
              <div className={styles.card}>
                <a href="">
                  <img src="img/product-03.jpg" alt="" style={{ width: 260 }} />
                  <p>The 25 Best Fall Hats to Wear Well Into Winter</p>
                </a>
              </div>
              <div className={styles.card}>
                <a href="">
                  <img src="/img/product-04.jpg" alt="" style={{ width: 260 }} />
                  <p className={styles.CreatedBy}>Created By Elle For</p>
                  <p>9 Fall Jackets From Amazon</p>
                </a>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className={styles.container}>
            <div className={styles.FashionNew_textCenter}>
              <h2 className={styles.fashiontext}>
                <span>
                  <a href=""> Beauty </a>
                </span>
                <div className={styles.WhatNew}>fresh Finds</div>
              </h2>
            </div>
          </div>
        </section>
        <section>
          <div className={styles.container}>
            <div className={styles.inlineflex}>
              <div className={styles.width70}>
                <a className={styles.AllTheBest} href="#">
                  <img className={styles.imgfluid} src="/img/beauty.jpg" />
                  <div className={styles.BestResortText}>
                    <span className={styles.fashionCompaigns}>The 10 Best Curling Irons for Every Hair Type</span>
                    <div className={styles.AddressLeBlanc}>
                      <p>By Tatjana Freund</p>
                    </div>
                  </div>
                </a>
              </div>
              <div className={styles.width30}>
                <div className={styles.rightBeauty}>
                  <a href="#">
                    <div className={styles.inlineflex}>
                      <div className="">
                        <img className={styles.imgfluid_img225} src="/img/beautyRight01.jpg" />
                      </div>
                      <span className={styles.marginAuto}>
                        The 11 Best Colorful Mascaras to Shop Now <p className="ByTextStyle">By Tatjana Freund</p>
                      </span>
                    </div>
                  </a>
                </div>
                <div className={styles.rightBeauty}>
                  <a href="#">
                    <div className={styles.inlineflex}>
                      <div className="">
                        <img className={styles.imgfluid_img225} src="/img/beautyRight02.jpg" />
                      </div>
                      <span className={styles.marginAuto}>
                        Finding Beauty in Breast Cancer Survivors` Scars{' '}
                        <p className="ByTextStyle">By Rose Minutaglio</p>
                      </span>
                    </div>
                  </a>
                </div>
                <div className={styles.rightBeauty}>
                  <a href="#">
                    <div className={styles.inlineflex}>
                      <div className="">
                        <img className={styles.imgfluid_img225} src="/img/beautyRight03.jpg" />
                      </div>
                      <span className={styles.marginAuto}>
                        It`s My Hair and I`ll Do Whatever I Want To It <p className="ByTextStyle">By Nerisha Penrose</p>
                      </span>
                    </div>
                  </a>
                </div>
                <div className={styles.rightBeauty}>
                  <a href="#">
                    <div className={styles.inlineflex}>
                      <div className="">
                        <img className={styles.imgfluid_img225} src="/img/beautyRight04.jpg" />
                      </div>
                      <span className={styles.marginAuto}>
                        <p className={styles.PresentedBy}>By Nerisha Penrose</p> How to Get Taylor Swift`s `Bejeweled`
                        Look <p className="ByTextStyle">By Nerisha Penrose</p>
                      </span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className={styles.container}>
            <div className={styles.FashionNew_textCenter}>
              <h2 className={styles.fashiontext}>
                <span>
                  <a href=""> Culture </a>
                </span>
                <div className={styles.WhatNew}>Books, Movies, TV & More</div>
              </h2>
            </div>
          </div>
        </section>
        <section>
          <div className={styles.container}>
            <div className={styles.inlineflex}>
              <div className={styles.width70}>
                <a className={styles.AllTheBest} href="#">
                  <img className={styles.imgfluid} src="/img/culture.jpg" />
                  <div className={styles.BestResortText}>
                    <span className={styles.fashionCompaigns}>
                      Shonda Rhimes and Betsy Beers on Michelle Obama, <i> Little Women</i>, and the Books They
                      Recommend{' '}
                    </span>
                  </div>
                </a>
                <section>
                  <div className={styles.textCenter_CultureCard_marginT5_marginB5}>
                    <div className={styles.inlineflex_gridgap}>
                      <div className={styles.card}>
                        <a href="">
                          <img className={styles.HeightWidth360} src="/img/culture-product-01.jpeg" alt="" />
                          <div>
                            <p>Regina Hall`s Most Iconic Movie Roles</p>
                          </div>
                        </a>
                      </div>
                      <div className={styles.card}>
                        <a href="">
                          <img className={styles.HeightWidth360} src="/img/culture-product-02.jpg" alt="" />
                          <div>
                            <p>Carly Rae Jepsen`s Lonely Hearts Club Playlist</p>
                          </div>
                        </a>
                      </div>
                      <div className={styles.card}>
                        <a href="">
                          <img className={styles.HeightWidth360} src="/img/culture-product-03.png" alt="" />
                          <p>The 23 Best Vampire Shows and Films </p>
                        </a>
                      </div>
                      <div className={styles.card}>
                        <a href="">
                          <img className={styles.HeightWidth360} src="/img/culture-product-04.jpg" alt="" />
                          <p>I`m in My Costume Era</p>
                        </a>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
              <div className={styles.width30}>
                <div className={styles.rightBeauty}>
                  <a href="#">
                    <div className={styles.inlineflex}>
                      <span className={styles.marginAuto}>
                        {' '}
                        Take a Look at the World`s Most Luxurious Island Properties{' '}
                        <p className="ByTextStyle">Advertisement</p>
                      </span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className={styles.container}>
            <div className={styles.FashionNew_textCenter}>
              <h2 className={styles.fashiontext}>
                <span>
                  <a href=""> NEWS & POLITICS </a>
                </span>
                <div className={styles.WhatNew}>Power & Influence</div>
              </h2>
            </div>
          </div>
        </section>
        <section>
          <div className={styles.container}>
            <div className={styles.dflex}>
              <div className={styles.width50}>
                <div className={styles.ShoppingSec}>
                  <a href="">
                    <h2 className="">
                      <span className={styles.OutFits}>
                        Michelle Obama, Amal Clooney, and Melinda French Gates on the Dire Need to Support Girls`
                        Education
                      </span>
                    </h2>
                  </a>
                  <div className={styles.ShoppingText}>By Madison Feller</div>
                </div>
              </div>
              <div className={styles.width50}>
                <img className={styles.imgfluid} src="/img/news-polities.jpg" />
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className={styles.container_marginT5_marginB5}>
            <div className={styles.PointsHoursLives}>
              <div className={styles.width33}>
                <div className={styles.StylePoints}>
                  <h2 className={styles.PointsStyle}>
                    <a href=""> Style Points</a>
                  </h2>
                </div>
                <div className={styles.rightBeauty}>
                  <a href="#">
                    <div className={styles.inlineflex}>
                      <div className="">
                        <img className={styles.img195} src="/img/StylePoint-01.jpg" />
                      </div>
                      <span className={styles.marginAuto}>
                        Alyssa Hardy on Her New Book <p className="ByTextStyle">By Véronique Hyland</p>
                      </span>
                    </div>
                  </a>
                </div>
                <div className={styles.rightBeauty}>
                  <a href="#">
                    <div className={styles.inlineflex}>
                      <div className="">
                        <img className={styles.img195} src="/img/StylePoint-02.jpg" />
                      </div>
                      <span className={styles.marginAuto}>
                        Where Were the Political Statements at NYFW? <p className="ByTextStyle">By Véronique Hyland</p>
                      </span>
                    </div>
                  </a>
                </div>
                <div className={styles.rightBeauty}>
                  <a href="#">
                    <div className={styles.inlineflex}>
                      <div className="">
                        <img className={styles.img195} src="/img/StylePoint-03.jpg" />
                      </div>
                      <span className={styles.marginAuto}>
                        Gianluca Russo on The Power of Being Plus Size{' '}
                        <p className="ByTextStyle">By Véronique Hyland</p>
                      </span>
                    </div>
                  </a>
                </div>
                <div className={styles.rightBeauty}>
                  <a href="#">
                    <div className={styles.inlineflex}>
                      <div className="">
                        <img className={styles.img195} src="/img/StylePoint-03.jpg" />
                      </div>
                      <span className={styles.marginAuto}>
                        Gianluca Russo on The Power of Being Plus Size{' '}
                        <p className="ByTextStyle">By Véronique Hyland</p>
                      </span>
                    </div>
                  </a>
                </div>
              </div>
              <div className={styles.width33}>
                <div className={styles.StylePoints}>
                  <h2 className={styles.PointsStyle}>
                    <a href=""> Office Hours</a>
                  </h2>
                </div>
                <div className={styles.rightBeauty}>
                  <a href="#">
                    <div className={styles.inlineflex}>
                      <div className="">
                        <img className={styles.img195} src="/img/StylePoint-01.jpg" />
                      </div>
                      <span className={styles.marginAuto}>
                        Alyssa Hardy on Her New Book <p className="ByTextStyle">By Véronique Hyland</p>
                      </span>
                    </div>
                  </a>
                </div>
                <div className={styles.rightBeauty}>
                  <a href="#">
                    <div className={styles.inlineflex}>
                      <div className="">
                        <img className={styles.img195} src="/img/StylePoint-02.jpg" />
                      </div>
                      <span className={styles.marginAuto}>
                        Where Were the Political Statements at NYFW? <p className="ByTextStyle">By Véronique Hyland</p>
                      </span>
                    </div>
                  </a>
                </div>
                <div className={styles.rightBeauty}>
                  <a href="#">
                    <div className={styles.inlineflex}>
                      <div className="">
                        <img className={styles.img195} src="/img/StylePoint-03.jpg" />
                      </div>
                      <span className={styles.marginAuto}>
                        Gianluca Russo on The Power of Being Plus Size{' '}
                        <p className="ByTextStyle">By Véronique Hyland</p>
                      </span>
                    </div>
                  </a>
                </div>
                <div className={styles.rightBeauty}>
                  <a href="#">
                    <div className={styles.inlineflex}>
                      <div className="">
                        <img className={styles.img195} src="/img/StylePoint-03.jpg" />
                      </div>
                      <span className={styles.marginAuto}>
                        Gianluca Russo on The Power of Being Plus Size{' '}
                        <p className="ByTextStyle">By Véronique Hyland</p>
                      </span>
                    </div>
                  </a>
                </div>
              </div>
              <div className={styles.width33}>
                <div className={styles.StylePoints}>
                  <h2 className={styles.PointsStyle}>
                    <a href=""> Clothes of Our Lives </a>
                  </h2>
                </div>
                <div className={styles.rightBeauty}>
                  <a href="#">
                    <div className={styles.inlineflex}>
                      <div className="">
                        <img className={styles.img195} src="/img/StylePoint-01.jpg" />
                      </div>
                      <span className={styles.marginAuto}>
                        Alyssa Hardy on Her New Book <p className="ByTextStyle">By Véronique Hyland</p>
                      </span>
                    </div>
                  </a>
                </div>
                <div className={styles.rightBeauty}>
                  <a href="#">
                    <div className={styles.inlineflex}>
                      <div className="">
                        <img className={styles.img195} src="/img/StylePoint-02.jpg" />
                      </div>
                      <span className={styles.marginAuto}>
                        Where Were the Political Statements at NYFW? <p className="ByTextStyle">By Véronique Hyland</p>
                      </span>
                    </div>
                  </a>
                </div>
                <div className={styles.rightBeauty}>
                  <a href="#">
                    <div className={styles.inlineflex}>
                      <div className="">
                        <img className={styles.img195} src="/img/StylePoint-01.jpg" />
                      </div>
                      <span className={styles.marginAuto}>
                        Alyssa Hardy on Her New Book <p className="ByTextStyle">By Véronique Hyland</p>
                      </span>
                    </div>
                  </a>
                </div>
                <div className={styles.rightBeauty}>
                  <a href="#">
                    <div className={styles.inlineflex}>
                      <div className="">
                        <img className={styles.img195} src="/img/StylePoint-03.jpg" />
                      </div>
                      <span className={styles.marginAuto}>
                        Gianluca Russo on The Power of Being Plus Size{' '}
                        <p className="ByTextStyle">By Véronique Hyland</p>
                      </span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className={styles.container}>
            <video className={styles.VideoSection} width="100%" controls>
              <source src="/mov_bbb.mp4" type="video/mp4" />
              <source src="/mov_bbb.ogg" type="video/ogg" />
            </video>
          </div>
        </section>
        <section>
          <div className={styles.container}>
            <a href="#" className={styles.SongAssociation}>
              <div className={styles.ShoppingText}>SONG ASSOCIATION</div>
              <div className={styles.GouldingSings}>
                Ellie Goulding Sings Selena Gomez, Mariah Carey, Beyoncé, and More for Song Association
              </div>
            </a>
          </div>
        </section>
        <section>
          <div className={styles.container}>
            <div className={styles.FashionNew_textCenter}>
              <h2 className={styles.fashiontext}>
                <span className={styles.NowTrending}> Now Trending </span>
              </h2>
            </div>
          </div>
        </section>
        <section>
          <div className={styles.container_marginT5_marginB5}>
            <div className={styles.InRow}>
              <div className={styles.cardTrending}>
                <a href="">
                  <img className={styles.HeightWidth282} src="/img/now-trending-01.jpg" alt="" />
                  <div>
                    <p className={styles.TrendingTextStyle}>A New Rihanna Song Is Finally Here</p>
                  </div>
                </a>
              </div>
              <div className={styles.cardTrending}>
                <a href="">
                  <img className={styles.HeightWidth282} src="/img/now-trending-02.jpg" alt="" />
                  <div>
                    <p className={styles.TrendingTextStyle}>Who Is the Real `Good Nurse,` Amy Loughren?</p>
                  </div>
                </a>
              </div>
              <div className={styles.cardTrending}>
                <a href="">
                  <img className={styles.HeightWidth282} src="/img/now-trending-02.jpg" alt="" />
                  <div>
                    <p className={styles.TrendingTextStyle}>Who Is the Real `Good Nurse,` Amy Loughren?</p>
                  </div>
                </a>
              </div>
              <div className={styles.cardTrending}>
                <a href="">
                  <img className={styles.HeightWidth282} src="/img/now-trending-01.jpg" alt="" />
                  <div>
                    <p className={styles.TrendingTextStyle}>A New Rihanna Song Is Finally Here</p>
                  </div>
                </a>
              </div>
              <div className={styles.cardTrending}>
                <a href="">
                  <img className={styles.HeightWidth282} src="/img/now-trending-03.jpg" alt="" />
                  <p className={styles.TrendingTextStyle}>People Swear This Is Hailey Bieber`s Nail Dupe</p>
                </a>
              </div>
              <div className={styles.cardTrending}>
                <a href="">
                  <img className={styles.HeightWidth282} src="/img/now-trending-02.jpg" alt="" />
                  <div>
                    <p className={styles.TrendingTextStyle}>Who Is the Real `Good Nurse,` Amy Loughren?</p>
                  </div>
                </a>
              </div>
              <div className={styles.cardTrending}>
                <a href="">
                  <img className={styles.HeightWidth282} src="/img/now-trending-01.jpg" alt="" />
                  <div>
                    <p className={styles.TrendingTextStyle}>A New Rihanna Song Is Finally Here</p>
                  </div>
                </a>
              </div>
              <div className={styles.cardTrending}>
                <a href="">
                  <img className={styles.HeightWidth282} src="/img/now-trending-01.jpg" alt="" />
                  <div>
                    <p className={styles.TrendingTextStyle}>A New Rihanna Song Is Finally Here</p>
                  </div>
                </a>
              </div>
              <div className={styles.cardTrending}>
                <a href="">
                  <img className={styles.HeightWidth282} src="/img/now-trending-04.jpg" alt="" />
                  <p className={styles.TrendingTextStyle}>15 Products for a Sleek, Smooth Blowout</p>
                </a>
              </div>
              <div className={styles.cardTrending}>
                <a href="">
                  <img className={styles.HeightWidth282} src="/img/now-trending-01.jpg" alt="" />
                  <div>
                    <p className={styles.TrendingTextStyle}>A New Rihanna Song Is Finally Here</p>
                  </div>
                </a>
              </div>
              <div className={styles.cardTrending}>
                <a href="">
                  <img className={styles.HeightWidth282} src="/img/now-trending-04.jpg" alt="" />
                  <p className={styles.TrendingTextStyle}>15 Products for a Sleek, Smooth Blowout</p>
                </a>
              </div>
              <div className={styles.cardTrending}>
                <a href="">
                  <img className={styles.HeightWidth282} src="/img/now-trending-02.jpg" alt="" />
                  <div>
                    <p className={styles.TrendingTextStyle}>Who Is the Real `Good Nurse,` Amy Loughren?</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Section>
        <Container>
          <h2 className="sr-only">Posts</h2>
          <ul className={styles.posts}>
            {posts.map((post) => {
              return (
                <li key={post.slug}>
                  <PostCard post={post} />
                </li>
              );
            })}
          </ul>
          {pagination && (
            <Pagination
              addCanonical={false}
              currentPage={pagination?.currentPage}
              pagesCount={pagination?.pagesCount}
              basePath={pagination?.basePath}
            />
          )}
        </Container>
      </Section>
    </Layout>
  );
}

export async function getStaticProps() {
  const { posts, pagination } = await getPaginatedPosts({
    queryIncludes: 'archive',
  });
  return {
    props: {
      posts,
      pagination: {
        ...pagination,
        basePath: '/posts',
      },
    },
  };
}
