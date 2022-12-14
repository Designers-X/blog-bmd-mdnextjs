import Link from 'next/link';
import {
  getFashionPosts,
  getFeshionPostById,
  getFruitAndWinePosts,
  getCantMissReadsPosts,
  getSectionElevenData,
  getCulturePosts,
  getTravelandLeisureById1,
  getHealthWellnessPosts,
  getArtHistoryPosts,
  getTravelandLeisureById2,
  getTravelandLeisureById3,
  getTravelandLeisureById4,
} from 'lib/posts';
import Layout from 'components/Layout';
import Header from 'components/Header';
import styles from 'styles/pages/Home.module.scss';
export default function Home({
  fruitandwinepost,
  cantmissreadspost,
  feshionpost,
  sectionEleven,
  culturepost,
  travelandleisure1,
  travelandleisure2,
  travelandleisure3,
  travelandleisure4,
  healthwellnesspost,
  arthistorypost,
  fashionbyidpost,
}) {
  return (
    <Layout>
      <Header></Header>
      <section className={styles.section1}>
        <div className="container">
          {fashionbyidpost.map((nodes, index1) => {
            const htmlStr = nodes.excerpt;
            const interviewedBy = nodes.interviewedBy;
            const writtenBy = nodes.writtenBy;
            const featuredimage = nodes.featuredImage?.sourceUrl;
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
                              <span>{nodes.pageTitle || nodes.title}</span>
                            </h2>
                            <div dangerouslySetInnerHTML={{ __html: nodes.pageSubtitle || htmlStr }}></div>
                            <div className={styles.AuthorText}>
                              {nodes.writtenBy && (
                                <p>
                                  Written By: <span>{writtenBy}</span>
                                </p>
                              )}
                              {nodes.interviewedBy && (
                                <p>
                                  Interviewed By: <span>{interviewedBy}</span>
                                </p>
                              )}
                            </div>
                          </div>
                        </div>
                      </a>
                    </Link>
                  </div>
                </div>
                {featuredimage && (
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                    <Link href={postslug}>
                      <a href="">
                        <img className="img-fluid" src={featuredimage} alt="fluid" />
                      </a>
                    </Link>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
      <section className={styles.section2}>
        <div className="container text-center">
          {fruitandwinepost.map((nodes, index1) => {
            return (
              <div className={styles.FashionNew} key={index1}>
                {nodes.categories.map((ele, index) => {
                  const categoryslug = '/categories/' + ele.slug;
                  return (
                    <div key={index}>
                      <h2 className={styles.fashionText}>
                        <Link href={categoryslug}>
                          <a href="#" className={styles.fashiHyperLink}>
                            {ele.name}
                          </a>
                        </Link>
                      </h2>
                      <div className={styles.WhatNew}> {ele.description}</div>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
        {fruitandwinepost.map((nodes, index) => {
          const posttitle = nodes.title;
          const subtitle = nodes.excerpt;
          const featuredimage = nodes.featuredImage?.sourceUrl;
          const writtenBy = nodes.writtenBy;
          const interviewedBy = nodes.interviewedBy;
          const postslug = 'posts/' + nodes.slug;
          return (
            <div className="container" key={index}>
              <div className="row">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                  {featuredimage && (
                    <div className={styles.imgResponsive}>
                      <Link href={postslug}>
                        <a href="#">
                          <img className="img-fluid" src={featuredimage} alt="fluid" />
                        </a>
                      </Link>
                    </div>
                  )}
                  <div className="text-center">
                    <Link href={postslug}>
                      <a href="#" className={styles.TextHoverEffect}>
                        <span className={styles.fashionCompaigns}>{nodes.pageTitle || posttitle}</span>
                      </a>
                    </Link>
                  </div>
                  <div className={styles.winterComing}>
                    <div className="text-center" dangerouslySetInnerHTML={{ __html: nodes.pageSubtitle || subtitle }} />
                  </div>
                  <div className={styles.AuthorText}>
                    {nodes.writtenBy && (
                      <p>
                        Written By: <span>{writtenBy}</span>
                      </p>
                    )}
                    {nodes.interviewedBy && (
                      <p>
                        Interviewed By: <span>{interviewedBy}</span>
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </section>
      <section className={styles.section3}>
        <div className="container">
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
              const featuredimage = nodes.featuredImage?.sourceUrl;
              const postslug = 'posts/' + nodes.slug;
              return (
                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6" key={index}>
                  <Link href={postslug}>
                    <a href="#" className={styles.CardHoverEffect}>
                      <div className={styles.cardBorder}>
                        <div className="card">
                          {featuredimage && <img src={featuredimage} className={styles.topRoundImg250} alt="Fluid" />}
                          <div className={styles.cardText}>
                            <p className="card-text">{nodes.pageTitle || posttitle}</p>
                          </div>
                        </div>
                      </div>
                    </a>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section className={styles.section4}>
        <div className="container text-center">
          {travelandleisure2.map((nodes, index1) => {
            return (
              <div className={styles.FashionNew} key={index1}>
                {nodes.categories.map((ele, index) => {
                  const categoryslug = '/categories/' + ele.slug;
                  return (
                    <div key={index}>
                      <h2 className={styles.fashionText}>
                        <Link href={categoryslug}>
                          <a href="#" className={styles.fashiHyperLink}>
                            {ele.name}
                          </a>
                        </Link>
                      </h2>
                      <div className={styles.WhatNew}>{ele.description}</div>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12">
              {travelandleisure2.map((nodes, index) => {
                const posttitle = nodes.title;
                const featuredimage = nodes.featuredImage?.sourceUrl;
                const writtenBy = nodes.writtenBy;
                const interviewedBy = nodes.interviewedBy;
                const postslug = 'posts/' + nodes.slug;
                return (
                  <div key={index}>
                    {featuredimage && (
                      <div className={styles.imgResponsive}>
                        <Link href={postslug}>
                          <a href="#">
                            <img className="img-fluid" src={featuredimage} alt="fluid" />
                          </a>
                        </Link>
                      </div>
                    )}
                    <div className="text-center">
                      <Link href={postslug}>
                        <div className={styles.ahover}>
                          <a href="#" className={styles.TextHoverEffect}>
                            <span className={styles.fashionCompaigns}>{nodes.pageTitle || posttitle}</span>
                          </a>
                        </div>
                      </Link>
                    </div>
                    <div className={styles.AuthorText}>
                      {writtenBy && (
                        <p>
                          Written By: <span>{writtenBy}</span>
                        </p>
                      )}
                      {interviewedBy && (
                        <p>
                          Interviewed By: <span>{interviewedBy}</span>
                        </p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12">
              <div className={styles.ThreeDivHoverEffect}>
                {travelandleisure3.map((nodes, index) => {
                  const posttitle = nodes.title;
                  const featuredimage = nodes.featuredImage?.sourceUrl;
                  const writtenBy = nodes.writtenBy;
                  const postslug = 'posts/' + nodes.slug;
                  return (
                    <Link href={postslug} key={index}>
                      <a href="#" className=" ">
                        <div className=" mb-2">
                          <div className={styles.inlineBox}>
                            {featuredimage && (
                              <div className="">
                                <img className={styles.img120} src={featuredimage} alt="fluid" />
                              </div>
                            )}
                            <div className="m-auto">
                              <div className={styles.gridGap}>
                                {nodes.pageTitle || posttitle}
                                {writtenBy && <p className={styles.ByTextStyle}>By {writtenBy}</p>}
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
      <section className={styles.section5}>
        <div className="container text-center">
          {feshionpost.map((nodes, index) => {
            return (
              <div key={index}>
                <div className={styles.FashionNew}>
                  {nodes.categories.map((ele, index1) => {
                    const categoryslug = '/categories/' + ele.slug;
                    return (
                      <div key={index1}>
                        <h2 className={styles.fashionText}>
                          <Link href={categoryslug}>
                            <a href="#" className={styles.fashiHyperLink}>
                              {ele.name}
                            </a>
                          </Link>
                        </h2>
                        <div className={styles.WhatNew}>{ele.description}</div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        {feshionpost.map((nodes, index) => {
          const posttitle = nodes.title;
          const subtitle = nodes.excerpt;
          const featuredimage = nodes.featuredImage?.sourceUrl;
          const postslug = 'posts/' + nodes.slug;
          return (
            <div className="container text-center" key={index}>
              {featuredimage && (
                <div className={styles.imgResponsive}>
                  <Link href={postslug}>
                    <div class="ratio ratio-16x9">
                      <img className="img-fluid" src={featuredimage} alt="fluid" />
                    </div>
                  </Link>
                </div>
              )}
              <div className="text-center">
                <Link href={postslug}>
                  <div className={styles.ahover}>
                    <a href="#" className={styles.TextHoverEffect}>
                      <span className={styles.fashionCompaigns}>{nodes.pageTitle || posttitle}</span>
                    </a>
                  </div>
                </Link>
              </div>
              <div className={styles.winterComing}>
                <div dangerouslySetInnerHTML={{ __html: nodes.pageSubtitle || subtitle }} />
              </div>
            </div>
          );
        })}
      </section>
      <section className={styles.section6}>
        <div className="container">
          {culturepost.map((nodes, index) => {
            const writtenBy = nodes.writtenBy;
            const posttitle = nodes.title;
            const featuredimage = nodes.featuredImage?.sourceUrl;
            const postslug = 'posts/' + nodes.slug;
            return (
              <div className="row" key={index}>
                <div className="container text-center">
                  {nodes.categories.map((ele, index1) => {
                    return (
                      <div className={styles.FashionNew} key={index1}>
                        <h2 className={styles.fashionText}>
                          <a href="#" className={styles.fashiHyperLink}>
                            {ele.name}
                          </a>
                        </h2>
                        <div className={styles.WhatNew}>{ele.description}</div>
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
                              <span>{nodes.pageTitle || posttitle}</span>
                            </h2>
                            {writtenBy && (
                              <div className={styles.Author}>
                                <p className={styles.ByTextStyle}>By {writtenBy}</p>
                              </div>
                            )}
                          </div>
                        </div>
                      </a>
                    </Link>
                  </div>
                </div>
                {featuredimage && (
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                    <Link href={postslug}>
                      <a href="">
                        <img className="img-fluid" src={featuredimage} alt="fluid" />
                      </a>
                    </Link>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
      <section className={styles.section7}>
        {travelandleisure1.map((nodes, index) => {
          const posttitle = nodes.title;
          const subtitle = nodes.excerpt;
          return (
            <div className="container text-center" key={index}>
              <div className={styles.videoHeight}>
                {nodes.wistiaVideoScriptId && (
                  <div class="ratio ratio-16x9">
                    <iframe
                      src={`//fast.wistia.net/embed/iframe/${nodes.wistiaVideoScriptId}?videoFoam=true`}
                      allowtransparency="true"
                      frameborder="0"
                      scrolling="no"
                      class="wistia_embed"
                      name="wistia_embed"
                      autoPlay
                      allowfullscreen
                      mozallowfullscreen
                      webkitallowfullscreen
                      oallowfullscreen
                      msallowfullscreen
                    ></iframe>
                  </div>
                )}
              </div>
              <div className={styles.AddressLeBlanc}>
                <div className={styles.underlinetext}>
                  <span className="text-center">{nodes.pageTitle || posttitle}</span>
                </div>
              </div>
              <div className="text-center">
                <div className={styles.ahover}>
                  <a href="#" className={styles.TextHoverEffect}>
                    <div
                      className={styles.fashionCompaigns}
                      dangerouslySetInnerHTML={{ __html: nodes.pageSubtitle || subtitle }}
                    />
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </section>
      <section className={styles.section8}>
        <div className="container">
          {healthwellnesspost.map((nodes, index) => {
            const posttitle = nodes.title;
            const subtitle = nodes.excerpt;
            const writtenBy = nodes.writtenBy;
            const featuredimage = nodes.featuredImage?.sourceUrl;
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
                                <Link href={categoryslug} key={index1}>
                                  <div className={styles.ShoppingText}>{ele.name}</div>
                                </Link>
                              );
                            })}
                            <h2 class="">
                              <span>{nodes.pageTitle || posttitle}</span>
                            </h2>
                            <div dangerouslySetInnerHTML={{ __html: nodes.pageSubtitle || subtitle }}></div>
                            {writtenBy && (
                              <div className={styles.Author}>
                                <p className={styles.ByTextStyle}>By {writtenBy}</p>
                              </div>
                            )}
                          </div>
                        </div>
                      </a>
                    </Link>
                  </div>
                </div>
                {featuredimage && (
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                    <img className="img-fluid" src={featuredimage} alt="fluid" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
      <section className={styles.section9}>
        {arthistorypost.map((nodes, index) => {
          console.log({ nodes });
          const posttitle = nodes.title;
          const postslug = 'posts/' + nodes.slug;
          const subtitle = nodes.excerpt;
          return (
            <div className="container text-center" key={index}>
              <div className="container text-center">
                {index == 0 &&
                  nodes.categories.map((ele, index1) => {
                    return (
                      <div className={styles.FashionNew} key={index1}>
                        <div>
                          <h2 className={styles.fashionText}>
                            <a href="#" className={styles.fashiHyperLink}>
                              {ele.name}
                            </a>
                          </h2>
                        </div>
                      </div>
                    );
                  })}
              </div>
              <div className={styles.videoHeight}>
                {nodes.wistiaVideoScriptId && (
                  <div class="ratio ratio-16x9">
                    <iframe
                      src={`//fast.wistia.net/embed/iframe/${nodes.wistiaVideoScriptId}?videoFoam=true`}
                      allowtransparency="true"
                      frameborder="0"
                      scrolling="no"
                      class="wistia_embed"
                      name="wistia_embed"
                      autoPlay
                      allowfullscreen
                      mozallowfullscreen
                      webkitallowfullscreen
                      oallowfullscreen
                      msallowfullscreen
                    ></iframe>
                  </div>
                )}
              </div>
              <Link href={postslug}>
                <div className={styles.ahover}>
                  <a href="#" className={styles.TextHoverEffect}>
                    <div className={styles.AddressLeBlanc}>
                      <div className={styles.underlinetext}>
                        <span className="text-center">{nodes.pageTitle || posttitle}</span>
                      </div>
                    </div>
                  </a>
                </div>
              </Link>
              <div className="text-center">
                <Link href={postslug}>
                  <div className={styles.ahover}>
                    <a href="#" className={styles.TextHoverEffect}>
                      <div
                        className={styles.fashionCompaigns}
                        dangerouslySetInnerHTML={{ __html: nodes.pageSubtitle || subtitle }}
                      />
                    </a>
                  </div>
                </Link>
              </div>
            </div>
          );
        })}
      </section>
      <section className={styles.section10}>
        {travelandleisure4.map((nodes, index) => {
          const posttitle = nodes.title;
          const postslug = 'posts/' + nodes.slug;
          const subtitle = nodes.excerpt;
          return (
            <div className="container text-center" key={index}>
              <div className="container text-center">
                {nodes.categories.map((ele, index1) => {
                  return (
                    <div className={styles.FashionNew} key={index1}>
                      <div>
                        <h2 className={styles.fashionText}>
                          <a href="#" className={styles.fashiHyperLink}>
                            {ele.name}
                          </a>
                        </h2>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className={styles.videoHeight}>
                {/* {nodes.wistiaVideoScriptId && (
                  <div class="ratio ratio-16x9">
                    <iframe
                      src={`//fast.wistia.net/embed/iframe/${nodes.wistiaVideoScriptId}?videoFoam=true`}
                      allowtransparency="true"
                      frameborder="0"
                      scrolling="no"
                      class="wistia_embed"
                      name="wistia_embed"
                      autoPlay
                      allowfullscreen
                      mozallowfullscreen
                      webkitallowfullscreen
                      oallowfullscreen
                      msallowfullscreen
                    ></iframe>
                  </div>
                )} */}
              </div>
              <Link href={postslug}>
                <div className={styles.ahover}>
                  <a href="#" className={styles.TextHoverEffect}>
                    <div className={styles.AddressLeBlanc}>
                      <div className={styles.underlinetext}>
                        <span className="text-center">{nodes.pageTitle || posttitle}</span>
                      </div>
                    </div>
                  </a>
                </div>
              </Link>
              <div className="text-center">
                <Link href={postslug}>
                  <div className={styles.ahover}>
                    <a href="#" className={styles.TextHoverEffect}>
                      <div
                        className={styles.fashionCompaigns}
                        dangerouslySetInnerHTML={{ __html: nodes.pageSubtitle || subtitle }}
                      />
                    </a>
                  </div>
                </Link>
              </div>
            </div>
          );
        })}
      </section>
      <section className={styles.section11}>
        <div className="container">
          <div className="row">
            {sectionEleven.map((nodes, index) => {
              const posttitle = nodes.title;
              const featuredimage = nodes.featuredImage?.sourceUrl;
              const postslug = 'posts/' + nodes.slug;
              return (
                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6" key={index}>
                  <Link href={postslug}>
                    <a href="#" className={styles.CardHoverEffect}>
                      <div className={styles.cardBorder}>
                        <div className="card">
                          {featuredimage && <img src={featuredimage} className={styles.topRoundImg250} alt="Fluid" />}
                          <div className={styles.cardText}>
                            <p className="card-text">{nodes.pageTitle || posttitle}</p>
                          </div>
                        </div>
                      </div>
                    </a>
                  </Link>
                </div>
              );
            })}
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

  const { sectionEleven } = await getSectionElevenData({
    queryIncludes: 'sectionElevenQuery',
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

  const { travelandleisure4 } = await getTravelandLeisureById4({
    queryIncludes: 'travelandleisurebyid4',
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
      sectionEleven,
      culturepost,
      travelandleisure1,
      travelandleisure2,
      travelandleisure3,
      travelandleisure4,
      healthwellnesspost,
      arthistorypost,
    },
  };
}
