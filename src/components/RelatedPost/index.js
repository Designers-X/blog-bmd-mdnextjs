import React from 'react';
import styles from './styles.module.scss';
const RelatedPost = ({ array }) => {
  if (!array || !array.length) return null;
  return (
    <section className={styles.container}>
      <h1 className={styles.sectionTitle}>RELATED POST</h1>
      {/* {array.map((post, index) => {
        return (
          <li key={index}>
            <a href={`/posts/${post.slug}`}>{post.title}</a>
          </li>
        );
      })} */}
      <div className={styles.holder}>
        {array.map((post, index) => {
          return (
            <>
              <div className={styles.dflex} key={index}>
                <div className={styles.imgHolder}>
                  {post.featuredImage?.node && (
                    <img src={post.featuredImage.node.sourceUrl} alt={post.featuredImage.node.altText} />
                  )}
                </div>
                <div className={styles.textHolder}>
                  {post.writtenBy && <p className={styles.authorLabel}>WRITTEN BY {post.writtenBy}</p>}
                  <h2 className={styles.postTitle}>{post.title}</h2>
                  <div
                    className={styles.descText}
                    dangerouslySetInnerHTML={{
                      __html: post.excerpt,
                    }}
                  />
                  <div className={styles.btnHolder}>
                    <a href={`/posts/${post.slug}`}>Read More</a>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </section>
  );
};
export default RelatedPost;
