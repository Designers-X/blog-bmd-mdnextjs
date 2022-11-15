import useSite from 'hooks/use-site';
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
  const { metadata = {} } = useSite();

  console.log("fashionbyidpost", fashionbyidpost);
  return (
    <Layout>
     
     

      <section className="latestPost">
        <div className="container">
          {fashionbyidpost.map((nodes, index1) => {
            const htmlStr = nodes.excerpt;
            const authorname = nodes.author.name;
            const featuredimage = nodes.featuredImage.sourceUrl;
            const postslug = `posts/${nodes.slug}`;
            return (
              <div className="row" key={index1}>
                <Link href={postslug}>TestLink</Link>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 m-auto ">
                  <div className="text-center">
                    <div className={styles.pLR96}>
                      {nodes.categories.map((ele, index) => {
                        return <div key={index}>{ele.name}</div>;
                      })}
                    <h2 className="">{nodes.title}</h2>
                      <div dangerouslySetInnerHTML={{ __html: htmlStr }}></div>
                      <div className={styles.ShoppingText}>{authorname}</div>
                    </div>
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
	  
      <section className="fashionCatPost">
        <div className="container text-center">
          <div className={styles.FashionNew}>
            <div>
              <h2 className={styles.fashionText}>
                <a href="#" className={styles.fashiHyperLink}>
                  Food & Wine
                </a>
              </h2>
            </div>
            <div className={styles.WhatNew}>Life&apos;s Simple Pleasures</div>
          </div>
        </div>
        {fruitandwinepost.map((nodes, index) => {
          const posttitle = nodes.title;
          const subtitle = nodes.excerpt;
          const featuredimage = nodes.featuredImage.sourceUrl;
          const authorname = nodes.author.name;
          return (
            <div className="container" key={index}>
              <div className="row">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                  <div>
                    <a href="#">
                      <img className="img-fluid" src={featuredimage} alt="fluid" />
                    </a>
                  </div>
                  <div className="text-center">
                    <a href="#" className={styles.TextHoverEffect}>
                      <span className={styles.fashionCompaigns}>{posttitle}</span>
                    </a>
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
        <div className="row ">
          <div className="text-center">
            <h6 className={styles.fashionText}>
              <a href="#" className={styles.fashiHyperLink}>
                Can&apos;t Miss Reads
              </a>
            </h6>
          </div>
          {cantmissreadspost.map((nodes, index) => {
            const posttitle = nodes.title;
            const featuredimage = nodes.featuredImage.sourceUrl;
            return (
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6" key={index}>
                <a href="#" className={styles.CardHoverEffect}>
                  <div className={styles.cardBorder}>
                    <div className="card">
                      <img src={featuredimage} className="card-img-top" alt="" />
                      <div className={styles.cardText}>
                        <p className="card-text">{posttitle}</p>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            );
          })}
        </div>
      </section>
      <section className="fashionCatPost">
        <div className="container text-center">
          <div className={styles.FashionNew}>
            <div>
              <h2 className={styles.fashionText}>
                <a href="#" className={styles.fashiHyperLink}>
                  Travel & Leisure
                </a>
              </h2>
            </div>
            <div className={styles.WhatNew}>Life Without Compromise</div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12">
              {travelandleisure2.map((nodes, index) => {
                const posttitle = nodes.title;
                const subtitle = nodes.excerpt;
                const featuredimage = nodes.featuredImage.sourceUrl;
                const authorname = nodes.author.name;
                return (
                  <div key={index}>
                    <div>
                      <a href="#">
                        <img className="img-fluid" src={featuredimage} alt="fluid" />
                      </a>
                    </div>
                    <div className="text-center">
                      <a href="#" className={styles.TextHoverEffect}>
                        <span className={styles.fashionCompaigns}>{posttitle}</span>
                      </a>
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
              <div>
                <div className={styles.ThreeDivHoverEffect}>
                  {travelandleisure3.map((nodes, index) => {
                    const posttitle = nodes.title;
                    const featuredimage = nodes.featuredImage.sourceUrl;
                    const authorname = nodes.author.name;
                    return (
                      <a href="#" className=" " key={index}>
                        <div className="d-flex mb-4">
                          <div className="">
                            <img className={styles.img195} src={featuredimage} alt="fluid" />
                          </div>
                          <div className="m-auto">
                            <div className={styles.gridGap}>
                              {posttitle}
                              <p className={styles.ByTextStyle}>By {authorname}</p>
                            </div>
                          </div>
                        </div>
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="fashionCatPost">
        <div className="container text-center">
          <div className={styles.FashionNew}>
            <div>
              <h2 className={styles.fashionText}>
                <a href="#" className={styles.fashiHyperLink}>
                  Fashion
                </a>
              </h2>
            </div>
            <div className={styles.WhatNew}>What&apos;s New</div>
          </div>
        </div>
        {feshionpost.map((nodes, index) => {
          const posttitle = nodes.title;
          const subtitle = nodes.excerpt;
          const featuredimage = nodes.featuredImage.sourceUrl;
          return (
            <div className="container text-center" key={index}>
              <div className={styles.videoHeight}>
                <div class="ratio ratio-16x9">
                  <img className="img-fluid" src={featuredimage} alt="fluid" />
                </div>
              </div>
              <div className="text-center">
                <a href="#" className={styles.TextHoverEffect}>
                  <span className={styles.fashionCompaigns}>{posttitle}</span>
                </a>
              </div>
              <div className={styles.winterComing}>
                <div className={styles.fashionCompaigns} dangerouslySetInnerHTML={{ __html: subtitle }} />
              </div>
            </div>
          );
        })}
      </section>
      <section className="fashionCatPost">
        <div className="container">
          {culturepost.map((nodes, index) => {
            const authorname = nodes.author.name;
            const featuredimage = nodes.featuredImage.sourceUrl;
            return (
              <div className="row" key={index}>
                <div className="container text-center">
                  <div className={styles.FashionNew}>
                    <div>
                      <h2 className={styles.fashionText}>
                        <a href="#" className={styles.fashiHyperLink}>
                          Culture
                        </a>
                      </h2>
                    </div>
                    <div className={styles.WhatNew}>CURATED COLLECTIONS & CONNECTIONS</div>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 m-auto ">
                  <div className="text-center">
                    <div className={styles.pLR96}>
                      <h2 className="">{nodes.title}</h2>
                      <div className={styles.ShoppingText}>{authorname}</div>
                    </div>
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
                <p className="text-center">{posttitle}</p>
              </div>
              <div className="text-center">
                <a href="#" className={styles.TextHoverEffect}>
                  <div className={styles.fashionCompaigns} dangerouslySetInnerHTML={{ __html: subtitle }} />
                </a>
              </div>
            </div>
          );
        })}
      </section>
      <section className="nowTrending">
        <div className="text-center">
          <h6 className={styles.fashionText}>
            <a href="#" className={styles.fashiHyperLink}>
              Now Trending
            </a>
          </h6>
        </div>
        <div className="container">
          {healthwellnesspost.map((nodes, index) => {
            const title = nodes.title;
            const subtitle = nodes.excerpt;
            const authorname = nodes.author.name;
            const featuredimage = nodes.featuredImage.sourceUrl;
            return (
              <div className="row" key={index}>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 m-auto ">
                  <div className="text-center">
                    <div className={styles.pLR96}>
                      <div className={styles.ShoppingText}>Shopping</div>
                      <h2 class="">
                        <span>{title}</span>
                      </h2>
                      <div dangerouslySetInnerHTML={{ __html: subtitle }}></div>
                      <div className={styles.ShoppingText}>{authorname}</div>
                    </div>
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
                <p className="text-center">{posttitle}</p>
              </div>
              <div className="text-center">
                <a href="#" className={styles.TextHoverEffect}>
                  <div className={styles.fashionCompaigns} dangerouslySetInnerHTML={{ __html: subtitle }} />
                </a>
              </div>
            </div>
          );
        })}
      </section>
      <hr />
      <section className="container text-center">
        <div className={styles.FashionNew}>
          <div>
            <h2 className={styles.fashionText}>
              <a href="#" className={styles.fashiHyperLink}>
                Travel & Leisure
              </a>
            </h2>
          </div>

          <div className={styles.WhatNew}>What’s New</div>
        </div>
        <div className="container text-center">
          <div className={styles.videoHeight}>
            <div class="ratio ratio-16x9">
              <img
                src="https://fast.wistia.com/embed/medias/tf3z4aj6wm/swatch"
                alt=""
                aria-hidden="true"
                onload="this.parentNode.style.opacity=1;"
              />
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
        <div className="row ">
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
