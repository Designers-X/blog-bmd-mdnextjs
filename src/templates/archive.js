import { Helmet } from 'react-helmet';

import { WebpageJsonLd } from 'lib/json-ld';
import { helmetSettingsFromMetadata } from 'lib/site';
import useSite from 'hooks/use-site';

import Layout from 'components/Layout';
import Header from 'components/Header';
import Section from 'components/Section';
import Container from 'components/Container';
import SectionTitle from 'components/SectionTitle';
import PostCard from 'components/PostCard';
import Pagination from 'components/Pagination/Pagination';

import styles from 'styles/templates/Archive.module.scss';

const DEFAULT_POST_OPTIONS = {};

export default function TemplateArchive({
  title = 'Archive',
  Title,
  posts,
  postOptions = DEFAULT_POST_OPTIONS,
  slug,
  metadata,
  pagination,
}) {
  const { metadata: siteMetadata = {} } = useSite();

  if (process.env.WORDPRESS_PLUGIN_SEO !== true) {
    metadata.title = `${title} - ${siteMetadata.title}`;
    metadata.og.title = metadata.title;
    metadata.twitter.title = metadata.title;
  }

  const helmetSettings = helmetSettingsFromMetadata(metadata);

  return (
    <Layout>
      <Helmet {...helmetSettings} />

      <WebpageJsonLd title={title} description={metadata.description} siteTitle={siteMetadata.title} slug={slug} />
      <main className={styles.FashionPage}>
        <header className={styles.HeroImage}>
          <div className={styles.HeaderHeroImg}>
            <img className={styles.imgfluid_w100} src="/img/fashionHero01.jpg" />
          </div>
          <div className={styles.FashionPadding}>
            <h1 className={styles.HeroFashion}>Fashion</h1>
          </div>
        </header>
        <section>
          <div className={styles.containerfluid_boxGrayTop}></div>
        </section>

        <section>
          <div className={styles.container_marginT5_marginB5}>
            <div className="">
              <img className={styles.imgfluid_w100} src="/img/after-hero.jpg" />
            </div>
            <a href="#" className={styles.SongAssociation}>
              <div className={styles.GouldingSings_paddingT5}>The Launch: October`s Hottest Fashion Drops</div>
            </a>
          </div>
        </section>

        <section>
          <div className={styles.container_marginT5}>
            <div className={styles.FashionNew_textCenter}>
              <h2 className={styles.fashiontext}>
                <span>
                  <a href="" className={styles.textCapital}>
                    {' '}
                    Fashion Trends
                  </a>
                </span>
              </h2>
            </div>
          </div>
        </section>

        <section>
          <div className={styles.container_paddinTB_TrendsFashion}>
            <div className={styles.inlineflex}>
              <div className={styles.width70}>
                <div className={styles.InRow}>
                  <div className={styles.cardTrending}>
                    <a href="">
                      <img className={styles.HeightWidth282} src="/img/trend01.jpg" alt="" />
                      <div>
                        <p className={styles.TrendingTextStyle}>All the Best Fall/Winter 2022 Fashion Campaigns</p>
                      </div>
                    </a>
                  </div>
                  <div className={styles.cardTrending}>
                    <a href="">
                      <img className={styles.HeightWidth282} src="/img/all-the-best.jpg" alt="" />
                      <div>
                        <p className={styles.TrendingTextStyle}>All the Best Resort 2023 Fashion Campaigns</p>
                      </div>
                    </a>
                  </div>
                  <div className={styles.cardTrending}>
                    <a href="">
                      <img className={styles.HeightWidth282} src="/img/now-trending-02.jpg" alt="" />
                      <div>
                        <p className={styles.TrendingTextStyle}>Breaking Down Winter`s Biggest Jewelry Trends</p>
                      </div>
                    </a>
                  </div>
                  <div className={styles.cardTrending}>
                    <a href="">
                      <img className={styles.HeightWidth282} src="/img/now-trending-01.jpg" alt="" />
                      <div>
                        <p className={styles.TrendingTextStyle}>Ralph Lauren Does West Coast Glamour to a Tee</p>
                      </div>
                    </a>
                  </div>
                </div>
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
                  <a href="" className={styles.textCapital}>
                    {' '}
                    shopping
                  </a>
                </span>
              </h2>
            </div>
          </div>
        </section>
        <section>
          <div className={styles.container_marginT5_marginB5}>
            <div className={styles.PointsHoursLives}>
              <div className={styles.width33}>
                <div className={styles.rightBeauty}>
                  <a href="#">
                    <div className={styles.inlineflex}>
                      <div className="">
                        <img className={styles.img195} src="/img/StylePoint-01.jpg" />
                      </div>
                      <span className={styles.marginAuto}>
                        Alyssa Hardy on Her New Book <p className={styles.ByTextStyle}>By V??ronique Hyland</p>
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
                        Where Were the Political Statements at NYFW?{' '}
                        <p className={styles.ByTextStyle}>By V??ronique Hyland</p>
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
                        <p className={styles.ByTextStyle}>By V??ronique Hyland</p>
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
                        <p className={styles.ByTextStyle}>By V??ronique Hyland</p>
                      </span>
                    </div>
                  </a>
                </div>
              </div>
              <div className={styles.width33}>
                <div className={styles.rightBeauty}>
                  <a href="#">
                    <div className={styles.inlineflex}>
                      <div className="">
                        <img className={styles.img195} src="/img/StylePoint-01.jpg" />
                      </div>
                      <span className={styles.marginAuto}>
                        Alyssa Hardy on Her New Book <p className={styles.ByTextStyle}>By V??ronique Hyland</p>
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
                        Where Were the Political Statements at NYFW?{' '}
                        <p className={styles.ByTextStyle}>By V??ronique Hyland</p>
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
                        <p className={styles.ByTextStyle}>By V??ronique Hyland</p>
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
                        <p className={styles.ByTextStyle}>By V??ronique Hyland</p>
                      </span>
                    </div>
                  </a>
                </div>
              </div>
              <div className={styles.width33}>
                <div className={styles.rightBeauty}>
                  <a href="#">
                    <div className={styles.inlineflex}>
                      <div className="">
                        <img className={styles.img195} src="/img/StylePoint-01.jpg" />
                      </div>
                      <span className={styles.marginAuto}>
                        Alyssa Hardy on Her New Book <p className={styles.ByTextStyle}>By V??ronique Hyland</p>
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
                        Where Were the Political Statements at NYFW?{' '}
                        <p className={styles.ByTextStyle}>By V??ronique Hyland</p>
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
                        Alyssa Hardy on Her New Book <p className={styles.ByTextStyle}>By V??ronique Hyland</p>
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
                        <p className={styles.ByTextStyle}>By V??ronique Hyland</p>
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
                  <a href="" className={styles.textCapital}>
                    {' '}
                    Street Style
                  </a>
                </span>
              </h2>
            </div>
          </div>
        </section>
        <section>
          <div className={styles.container_marginT5_marginB5}>
            <div className="">
              <img className={styles.imgfluid_w100} src="/img/streetStyle.jpg" />
            </div>
            <a href="#" className={styles.SongAssociation}>
              <div className={styles.GouldingSings_paddingT5}>
                The Best Street Style Looks From the Paris Fashion Week Shows
              </div>
            </a>
          </div>
        </section>

        <section>
          <div className={styles.container}>
            <div className={styles.FashionNew_textCenter}>
              <h2 className={styles.fashiontext}>
                <span>
                  <a href="" className={styles.textCapital}>
                    {' '}
                    Celebrity Style{' '}
                  </a>
                </span>
              </h2>
            </div>
          </div>
        </section>
        <section>
          <div className={styles.container_paddinTB_TrendsFashion}>
            <div className={styles.inlineflex}>
              <div className={styles.width70}>
                <div className={styles.PointsHoursLives}>
                  <div className={styles.width33}>
                    <div className={styles.rightBeauty}>
                      <a href="#">
                        <div className={styles.inlineflex}>
                          <div className="">
                            <img className={styles.img195} src="/img/StylePoint-01.jpg" />
                          </div>
                          <span className={styles.marginAuto}>
                            Alyssa Hardy on Her New Book <p className={styles.ByTextStyle}>By V??ronique Hyland</p>
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
                            Where Were the Political Statements at NYFW?{' '}
                            <p className={styles.ByTextStyle}>By V??ronique Hyland</p>
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
                            <p className={styles.ByTextStyle}>By V??ronique Hyland</p>
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
                            <p className={styles.ByTextStyle}>By V??ronique Hyland</p>
                          </span>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className={styles.width33}>
                    <div className={styles.rightBeauty}>
                      <a href="#">
                        <div className={styles.inlineflex}>
                          <div className="">
                            <img className={styles.img195} src="/img/StylePoint-01.jpg" />
                          </div>
                          <span className={styles.marginAuto}>
                            Alyssa Hardy on Her New Book <p className={styles.ByTextStyle}>By V??ronique Hyland</p>
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
                            Where Were the Political Statements at NYFW?{' '}
                            <p className={styles.ByTextStyle}>By V??ronique Hyland</p>
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
                            <p className={styles.ByTextStyle}>By V??ronique Hyland</p>
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
                            <p className={styles.ByTextStyle}>By V??ronique Hyland</p>
                          </span>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
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
                  <a href="" className={styles.textCapital}>
                    {' '}
                    Personal Style
                  </a>
                </span>
              </h2>
            </div>
          </div>
        </section>

        <section>
          <div className={styles.container_marginT5_marginB5}>
            <div className={styles.PointsHoursLives}>
              <div className={styles.width33}>
                <div className={styles.rightBeauty}>
                  <a href="#">
                    <div className={styles.inlineflex}>
                      <div className="">
                        <img className={styles.img195} src="/img/StylePoint-01.jpg" />
                      </div>
                      <span className={styles.marginAuto}>
                        Alyssa Hardy on Her New Book <p className={styles.ByTextStyle}>By V??ronique Hyland</p>
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
                        Where Were the Political Statements at NYFW?{' '}
                        <p className={styles.ByTextStyle}>By V??ronique Hyland</p>
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
                        <p className={styles.ByTextStyle}>By V??ronique Hyland</p>
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
                        <p className={styles.ByTextStyle}>By V??ronique Hyland</p>
                      </span>
                    </div>
                  </a>
                </div>
              </div>
              <div className={styles.width33}>
                <div className={styles.rightBeauty}>
                  <a href="#">
                    <div className={styles.inlineflex}>
                      <div className="">
                        <img className={styles.img195} src="/img/StylePoint-01.jpg" />
                      </div>
                      <span className={styles.marginAuto}>
                        Alyssa Hardy on Her New Book <p className={styles.ByTextStyle}>By V??ronique Hyland</p>
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
                        Where Were the Political Statements at NYFW?{' '}
                        <p className={styles.ByTextStyle}>By V??ronique Hyland</p>
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
                        <p className={styles.ByTextStyle}>By V??ronique Hyland</p>
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
                        <p className={styles.ByTextStyle}>By V??ronique Hyland</p>
                      </span>
                    </div>
                  </a>
                </div>
              </div>
              <div className={styles.width33}>
                <div className={styles.rightBeauty}>
                  <a href="#">
                    <div className={styles.inlineflex}>
                      <div className="">
                        <img className={styles.img195} src="/img/StylePoint-01.jpg" />
                      </div>
                      <span className={styles.marginAuto}>
                        Alyssa Hardy on Her New Book <p className={styles.ByTextStyle}>By V??ronique Hyland</p>
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
                        Where Were the Political Statements at NYFW?{' '}
                        <p className={styles.ByTextStyle}>By V??ronique Hyland</p>
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
                        Alyssa Hardy on Her New Book <p className={styles.ByTextStyle}>By V??ronique Hyland</p>
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
                        <p className={styles.ByTextStyle}>By V??ronique Hyland</p>
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
                  <a href="" className={styles.textCapital}>
                    {' '}
                    Accessories{' '}
                  </a>
                </span>
              </h2>
            </div>
          </div>
        </section>
        <section>
          <div className={styles.container_marginT5_marginB5}>
            <div className="">
              <img className={styles.imgfluid_w100} src="/img/accessories.jpg" />
            </div>
            <a href="#" className={styles.SongAssociation}>
              <div className={styles.GouldingSings_paddingT5}>
                Ready for a Fall of Parties? It`s Time to Stock Up on Hostess Gifts
              </div>
            </a>
          </div>
        </section>
      </main>
      <Header>
        <Container>
          <h1>{Title || title}</h1>
          {metadata.description && (
            <p
              className={styles.archiveDescription}
              dangerouslySetInnerHTML={{
                __html: metadata.description,
              }}
            />
          )}
        </Container>
      </Header>

      <Section>
        <Container>
          <SectionTitle>Posts</SectionTitle>
          {Array.isArray(posts) && (
            <>
              <ul className={styles.posts}>
                {posts.map((post) => {
                  return (
                    <li key={post.slug}>
                      <PostCard post={post} options={postOptions} />
                    </li>
                  );
                })}
              </ul>
              {pagination && (
                <Pagination
                  currentPage={pagination?.currentPage}
                  pagesCount={pagination?.pagesCount}
                  basePath={pagination?.basePath}
                />
              )}
            </>
          )}
        </Container>
      </Section>
    </Layout>
  );
}
