import { Helmet } from 'react-helmet';
import { WebpageJsonLd } from 'lib/json-ld';
import { helmetSettingsFromMetadata } from 'lib/site';
import useSite from 'hooks/use-site';
import Layout from 'components/Layout';
import Section from 'components/Section';
import PostCard from 'components/PostCard';
import Pagination from 'components/Pagination/Pagination';
import styles from 'styles/templates/Archive.module.scss';

const DEFAULT_POST_OPTIONS = {};

export default function TemplateArchive({
  title = 'Archive',
  posts,
  postOptions = DEFAULT_POST_OPTIONS,
  slug,
  metadata,
  pagination,
  category,
}) {
  const { metadata: siteMetadata = {} } = useSite();

  if (process.env.WORDPRESS_PLUGIN_SEO !== true) {
    metadata.title = `${title} - ${siteMetadata.title}`;
    metadata.og.title = metadata.title;
    metadata.twitter.title = metadata.title;
  }
  const helmetSettings = helmetSettingsFromMetadata(metadata);
  return (
    <Layout newsLetterShow={true}>
      <Helmet {...helmetSettings} />
      <WebpageJsonLd title={title} description={metadata.description} siteTitle={siteMetadata.title} slug={slug} />
      <main className={styles.FashionPage}>
        <>
        {category?.s1CategoryBanner?.node?.sourceUrl && (
          <>
            {category.categoryBannerArticleLink?.node?.slug ? (
              <a href={`/posts/${category.categoryBannerArticleLink?.node?.slug}`}>
                <div className={styles.HeroImage}>
                  <div
                    className={styles.MasterHead}
                    style={{ backgroundImage: `url(${category?.s1CategoryBanner?.node?.sourceUrl})` }}
                  >
                    {/* {category.s1CategoryBanner?.node?.sourceUrl &&<img alt="altText" className={styles.imgfluid_w100} src={category.s1CategoryBanner?.node?.sourceUrl} />} */}
                  </div>
                  <div className={styles.FashionPadding}>
                    <h1 className={styles.MasterTitle}>{title}</h1>
                  </div>
                </div>
              </a>
            ) : (
              <div className={styles.HeroImage}>
                <div
                  className={styles.MasterHead}
                  style={{ backgroundImage: `url(${category?.s1CategoryBanner?.node?.sourceUrl})` }}
                >
                  {/* {category.s1CategoryBanner?.node?.sourceUrl &&<img alt="altText" className={styles.imgfluid_w100} src={category.s1CategoryBanner?.node?.sourceUrl} />} */}
                </div>
                <div className={styles.FashionPadding}>
                  <h1 className={styles.MasterTitle}>{title}</h1>
                </div>
              </div>
            )}
            <section className="mt-4 mb-4">
              <div className={styles.boxBlackTop}></div>
            </section>
          </>
        )}
      </main>
      <section className="mt-4">
        <div dangerouslySetInnerHTML={{ __html: category?.s1CustomPageReference?.node?.content }} />
      </section>
      {!category?.s1CustomPageReference?.node?.content && (
        <Section>
          {/* <Container> */}
          <div className="wp-block-columns">
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
            {/* </Container> */}
          </div>
        </Section>
      )}
    </Layout>
  );
}
