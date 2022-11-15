import Link from 'next/link';
import {
  getFashionPosts,
  getFeshionPostById,
  getFruitAndWinePosts,
  getCantMissReadsPosts,
  getCulturePosts,
  getTravelandLeisureById1,
  getHealthWellnessPosts,
  getArtHistoryPosts,
  getTravelandLeisureById2,
  getTravelandLeisureById3,
} from 'lib/posts';
import Layout from 'components/Layout';
import Header from 'components/Header';
import styles from 'styles/pages/Home.module.scss';
export default function Home({
  fruitandwinepost,
  cantmissreadspost,
  feshionpost,
  culturepost,
  travelandleisure1,
  travelandleisure2,
  travelandleisure3,
  healthwellnesspost,
  arthistorypost,
  fashionbyidpost,
}) {
  console.log('postPathBySlug', fashionbyidpost);
  return (
    <Layout>
      <Header></Header>
      <section className="latestPost">
        <div className="container">
          {fashionbyidpost.map((nodes, index1) => {
            const htmlStr = nodes.excerpt;
            const authorname = nodes.author.name;
            const featuredimage = nodes.featuredImage.sourceUrl;
            const postslug = 'posts/' + nodes.slug;
            return (
              <div className="row" key={index1}>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 m-auto ">
                  <div className={styles.textStleShop}>
                    <Link href={postslug}>
                      <a className={styles.Atag} href="">
                        <div className="text-center">
                          <div className={styles.pLR96}>
                            {nodes.categories.map((ele, index) => {
                              return (
                                <div className={styles.ShoppingText} key={index}>
                                  {ele.name}
                                </div>
                              );
                            })}
                            <h2 className="">
                              <span>{nodes.title}</span>
                            </h2>
                            <div dangerouslySetInnerHTML={{ __html: htmlStr }}></div>
                            <div className={styles.ShoppingText}>{authorname}</div>
                          </div>
                        </div>
                      </a>
                    </Link>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                  <Link href={postslug}>
                    <a href="">
                      <img className="img-fluid" src={featuredimage} alt="fluid" />
                    </a>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>
      <section className="fashionCatPost">
        <div className="container text-center">
          {fruitandwinepost.map((nodes, index1) => {
            return (
              <div className={styles.FashionNew} key={index1}>
                <div>
                  <h2 className={styles.fashionText}>
                    {nodes.categories.map((ele, index) => {
                      const categoryslug = '/categories/' + ele.slug;
                      return (
                        <div key={index}>
                          <Link href={categoryslug}>
                            <a href="#" className={styles.fashiHyperLink}>
                              {ele.name}
                            </a>
                          </Link>
                        </div>
                      );
                    })}
                  </h2>
                </div>
                <div className={styles.WhatNew}>Life&apos;s Simple Pleasures</div>
              </div>
            );
          })}
        </div>
        {fruitandwinepost.map((nodes, index) => {
          const posttitle = nodes.title;
          const subtitle = nodes.excerpt;
          const featuredimage = nodes.featuredImage.sourceUrl;
          const authorname = nodes.author.name;
          const postslug = 'posts/' + nodes.slug;
          return (
            <div className="container" key={index}>
              <div className="row">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                  <div>
                    <Link href={postslug}>
                      <a href="#">
                        <img className="img-fluid" src={featuredimage} alt="fluid" />
                      </a>
                    </Link>
                  </div>
                  <div className="text-center">
                    <Link href={postslug}>
                      <a href="#" className={styles.TextHoverEffect}>
                        <span className={styles.fashionCompaigns}>{posttitle}</span>
                      </a>
                    </Link>
                  </div>
                  <div className={styles.winterComing}>
                    <div className="text-center" dangerouslySetInnerHTML={{ __html: subtitle }} />
                  </div>
                  <div className={styles.AddressLeBlanc}>
                    <p className="text-center">{authorname}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </section>
      <section className="shopTilYouDrop container">
        <div className="row">
          <div className="text-center">
            <div className={styles.FashionNew}>
              <h6 className={styles.fashionText}>
                <a href="#" className={styles.fashiHyperLink}>
                  Can&apos;t Miss Reads
                </a>
              </h6>
            </div>
          </div>
          {cantmissreadspost.map((nodes, index) => {
            const posttitle = nodes.title;
            const featuredimage = nodes.featuredImage.sourceUrl;
            const postslug = 'posts/' + nodes.slug;
            return (
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6" key={index}>
                <Link href={postslug}>
                  <a href="#" className={styles.CardHoverEffect}>
                    <div className={styles.cardBorder}>
                      <div className="card">
                        <img src={featuredimage} className="card-img-top HW280" alt="" />
                        <div className={styles.cardText}>
                          <p className="card-text">{posttitle}</p>
                        </div>
                      </div>
                    </div>
                  </a>
                </Link>
              </div>
            );
          })}
        </div>
      </section>
      <section className="fashionCatPost">
        <div className="container text-center">
          {travelandleisure2.map((nodes, index1) => {
            return (
              <div className={styles.FashionNew} key={index1}>
                <div>
                  {nodes.categories.map((ele, index) => {
                    const categoryslug = '/categories/' + ele.slug;
                    return (
                      <h2 className={styles.fashionText} key={index}>
                        <Link href={categoryslug}>
                          <a href="#" className={styles.fashiHyperLink}>
                            {ele.name}
                          </a>
                        </Link>
                      </h2>
                    );
                  })}
                </div>
                <div className={styles.WhatNew}>Life Without Compromise</div>
              </div>
            );
          })}
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12">
              {travelandleisure2.map((nodes, index) => {
                const posttitle = nodes.title;
                const subtitle = nodes.excerpt;
                const featuredimage = nodes.featuredImage.sourceUrl;
                const authorname = nodes.author.name;
                const postslug = 'posts/' + nodes.slug;
                return (
                  <div key={index}>
                    <div>
                      <Link href={postslug}>
                        <a href="#">
                          <img className="img-fluid" src={featuredimage} alt="fluid" />
                        </a>
                      </Link>
                    </div>
                    <div className="text-center">
                      <Link href={postslug}>
                        <div className={styles.ahover}>
                          <a href="#" className={styles.TextHoverEffect}>
                            <span className={styles.fashionCompaigns}>{posttitle}</span>
                          </a>
                        </div>
                      </Link>
                    </div>
                    <div className={styles.winterComing}>
                      <div className="text-center" dangerouslySetInnerHTML={{ __html: subtitle }} />
                    </div>
                    <div className={styles.AddressLeBlanc}>
                      <p className="text-center">{authorname}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12">
              <div className={styles.ThreeDivHoverEffect}>
                {travelandleisure3.map((nodes, index) => {
                  const posttitle = nodes.title;
                  const featuredimage = nodes.featuredImage.sourceUrl;
                  const authorname = nodes.author.name;
                  const postslug = 'posts/' + nodes.slug;
                  return (
                    <Link href={postslug}>
                      <a href="#" className=" " key={index}>
                        <div className=" mb-2">
                          <div className={styles.inlineBox}>
                            <div className="">
                              <img className={styles.img120} src={featuredimage} alt="fluid" />
                            </div>
                            <div className="m-auto">
                              <div className={styles.gridGap}>
                                {posttitle}
                                <p className={styles.ByTextStyle}>By {authorname}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </a>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="fashionCatPost">
        <div className="container text-center">
          {feshionpost.map((nodes, index) => {
            return (
              <div key={index}>
                <div className={styles.FashionNew}>
                  {nodes.categories.map((ele, index1) => {
                    const categoryslug = '/categories/' + ele.slug;
                    return (
                      <div key={index1}>
                        <Link href={categoryslug}>
                          <h2 className={styles.fashionText}>
                            <a href="#" className={styles.fashiHyperLink}>
                              {ele.name}
                            </a>
                          </h2>
                        </Link>
                      </div>
                    );
                  })}
                  <div className={styles.WhatNew}>What&apos;s New</div>
                </div>
              </div>
            );
          })}
        </div>
        {feshionpost.map((nodes, index) => {
          const posttitle = nodes.title;
          const subtitle = nodes.excerpt;
          const featuredimage = nodes.featuredImage.sourceUrl;
          const postslug = 'posts/' + nodes.slug;
          return (
            <div className="container text-center" key={index}>
              <div className={styles.videoHeight}>
                <Link href={postslug}>
                  <div class="ratio ratio-16x9">
                    <img className="img-fluid" src={featuredimage} alt="fluid" />
                  </div>
                </Link>
              </div>
              <div className="text-center">
                <Link href={postslug}>
                  <div className={styles.ahover}>
                    <a href="#" className={styles.TextHoverEffect}>
                      <span className={styles.fashionCompaigns}>{posttitle}</span>
                    </a>
                  </div>
                </Link>
              </div>
              <div className={styles.winterComing}>
                <div dangerouslySetInnerHTML={{ __html: subtitle }} />
              </div>
            </div>
          );
        })}
      </section>
      <section className="fashionCatPost">
        <div className="container">
          {culturepost.map((nodes, index) => {
            const authorname = nodes.author.name;
            const posttitle = nodes.title;
            const featuredimage = nodes.featuredImage.sourceUrl;
            const postslug = 'posts/' + nodes.slug;
            return (
              <div className="row" key={index}>
                <div className="container text-center">
                  {nodes.categories.map((ele, index1) => {
                    const categoryslug = '/categories/' + ele.slug;
                    return (
                      <div className={styles.FashionNew} key={index1}>
                        <div>
                          <h2 className={styles.fashionText}>
                            <a href="#" className={styles.fashiHyperLink}>
                              {ele.name}
                            </a>
                          </h2>
                        </div>

                        <div className={styles.WhatNew}>CURATED COLLECTIONS & CONNECTIONS</div>
                      </div>
                    );
                  })}
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 m-auto ">
                  <div className={styles.textStleShop}>
                    <Link href={postslug}>
                      <a href="" className={styles.Atag}>
                        <div className="text-center">
                          <div className={styles.pLR96}>
                            <h2 className="">
                              <span>{posttitle}</span>
                            </h2>
                            <div className={styles.ShoppingText}>{authorname}</div>
                          </div>
                        </div>
                      </a>
                    </Link>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                  <Link href={postslug}>
                    <a href="">
                      <img className="img-fluid" src={featuredimage} alt="fluid" />
                    </a>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>
      <section className="videosection mt-5">
        {travelandleisure1.map((nodes, index) => {
          const posttitle = nodes.title;
          const subtitle = nodes.excerpt;
          return (
            <div className="container text-center" key={index}>
              <div className={styles.videoHeight}>
                <div class="ratio ratio-16x9">
                  <iframe
                    src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0"
                    title="YouTube video"
                    allowfullscreen
                  ></iframe>
                </div>
              </div>
              <div className={styles.AddressLeBlanc}>
                <div className={styles.underlinetext}>
                  <span className="text-center">{posttitle}</span>
                </div>
              </div>
              <div className="text-center">
                <div className={styles.ahover}>
                  <a href="#" className={styles.TextHoverEffect}>
                    <div className={styles.fashionCompaigns} dangerouslySetInnerHTML={{ __html: subtitle }} />
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </section>
      <section className="nowTrending">
        <div className="container text-center">
          <div className={styles.FashionNew}>
            <h6 className={styles.fashionText}>
              <a href="#" className={styles.fashiHyperLink}>
                Now Trending
              </a>
            </h6>
          </div>
        </div>
        <div className="container">
          {healthwellnesspost.map((nodes, index) => {
            const posttitle = nodes.title;
            const subtitle = nodes.excerpt;
            const authorname = nodes.author.name;
            const featuredimage = nodes.featuredImage.sourceUrl;
            const postslug = 'posts/' + nodes.slug;
            return (
              <div className="row" key={index}>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 m-auto ">
                  <div className={styles.textStleShop}>
                    <Link href={postslug}>
                      <a className={styles.Atag} href="">
                        <div className="text-center">
                          <div className={styles.pLR96}>
                            {nodes.categories.map((ele, index1) => {
                              const categoryslug = '/categories/' + ele.slug;
                              return (
                                <Link href={categoryslug}>
                                  <div className={styles.ShoppingText} key={index1}>
                                    {ele.name}
                                  </div>
                                </Link>
                              );
                            })}
                            <h2 class="">
                              <span>{posttitle}</span>
                            </h2>
                            <div dangerouslySetInnerHTML={{ __html: subtitle }}></div>
                            <div className={styles.ShoppingText}>{authorname}</div>
                          </div>
                        </div>
                      </a>
                    </Link>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                  <img className="img-fluid" src={featuredimage} alt="fluid" />
                </div>
              </div>
            );
          })}
        </div>
      </section>
      <section className="videosection mt-5">
        {arthistorypost.map((nodes, index) => {
          const posttitle = nodes.title;
          const postslug = 'posts/' + nodes.slug;
          const subtitle = nodes.excerpt;
          return (
            <div className="container text-center" key={index}>
              <div className={styles.videoHeight}>
                <div class="ratio ratio-16x9">
                  <iframe
                    src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0"
                    title="YouTube video"
                    allowfullscreen
                  ></iframe>
                </div>
              </div>
              <Link href={postslug}>
                <div className={styles.ahover}>
                  <a href="#" className={styles.TextHoverEffect}>
                    <div className={styles.AddressLeBlanc}>
                      <div className={styles.underlinetext}>
                        <span className="text-center">{posttitle}</span>
                      </div>
                    </div>
                  </a>
                </div>
              </Link>
              <div className="text-center">
                <Link href={postslug}>
                  <div className={styles.ahover}>
                    <a href="#" className={styles.TextHoverEffect}>
                      <div className={styles.fashionCompaigns} dangerouslySetInnerHTML={{ __html: subtitle }} />
                    </a>
                  </div>
                </Link>
              </div>
            </div>
          );
        })}
      </section>
      <section className="container text-center">
        <div className={styles.FashionNew}>
          <div>
            <h2 className={styles.fashionText}>
              <a href="#" className={styles.fashiHyperLink}>
                Travel & Leisure
              </a>
            </h2>
          </div>
          <div className={styles.WhatNew}>What&apos;s New</div>
        </div>
        <div className="container text-center">
          <div className={styles.videoHeight}>
            <div class="ratio ratio-16x9">
              <iframe
                src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0"
                title="YouTube video"
                allowfullscreen
              ></iframe>
            </div>
          </div>
          <div className={styles.AddressLeBlanc}>
            <p className="text-center">Grand Hotel Victoria, Sorrento</p>
          </div>
          <div className="text-center">
            <a href="#" className={styles.TextHoverEffect}>
              <span className={styles.fashionCompaigns}>A song, and a 5 star hotel, for the ages</span>
            </a>
          </div>
        </div>
        <div className="row">
          <div className="text-center">
            <h6 className={styles.fashionText}></h6>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const { feshionpost } = await getFashionPosts({
    queryIncludes: 'fashion',
  });

  const { fashionbyidpost } = await getFeshionPostById({
    queryIncludes: 'fashionbyid',
  });

  const { fruitandwinepost } = await getFruitAndWinePosts({
    queryIncludes: 'fruitandwine',
  });

  const { cantmissreadspost } = await getCantMissReadsPosts({
    queryIncludes: 'cantmissreads',
  });
  const { culturepost } = await getCulturePosts({
    queryIncludes: 'culture',
  });

  const { travelandleisure1 } = await getTravelandLeisureById1({
    queryIncludes: 'travelandleisurebyid1',
  });

  const { travelandleisure2 } = await getTravelandLeisureById2({
    queryIncludes: 'travelandleisurebyid2',
  });

  const { travelandleisure3 } = await getTravelandLeisureById3({
    queryIncludes: 'travelandleisurebyid3',
  });

  const { healthwellnesspost } = await getHealthWellnessPosts({
    queryIncludes: 'healthwellness',
  });

  const { arthistorypost } = await getArtHistoryPosts({
    queryIncludes: 'artandhistory',
  });

  return {
    props: {
      feshionpost,
      fashionbyidpost,
      fruitandwinepost,
      cantmissreadspost,
      culturepost,
      travelandleisure1,
      travelandleisure2,
      travelandleisure3,
      healthwellnesspost,
      arthistorypost,
    },
  };
}
