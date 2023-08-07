import React from "react";
import styles from './styles.module.scss';
const RelatedPost = ({array})=>{
    if(!array || !array.length) return null
    return(
        <section className={styles.container}>
            <h2 className={styles.sectionTitle}>RELATED POST</h2>
            {array.map((post)=>{
                return(
                    <li><a href={`/posts/${post.slug}`}>{post.title}</a></li>
                )
            })}
          {/* {array.map((post) => {
            return (
              <>
                <div className="d-flex">
                  {post.featuredImage?.node && (
                    <div>
                      <img src={post.featuredImage.node.sourceUrl} alt={post.featuredImage.node.altText} />
                    </div>
                  )}
                  <div className="ml-4">
                    <p>WRITTEN BY {post.author?.node.name}</p>
                    <h1>{post.title}</h1>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: post.excerpt,
                      }}
                    />
                    <a href={`/posts/${post.slug}`}>Read More</a>
                  </div>
                </div>
              </>
            );
          })} */}
        </section>
    )
}
export default RelatedPost