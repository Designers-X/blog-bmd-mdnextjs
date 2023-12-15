import { StarGroup, LocationIcon } from 'components/svgIcons';
import styles from './index.module.scss';

const PackCard = ({ element, index = null }) => {
  return (
    <div key={index} className={styles.cardContainer}>
      <div className={styles.ContainerCenter}>
        <div className={styles.imgHolder}>
          <div className={styles.mobHead}>
            <div className={styles.ratingContainer}>
              <StarGroup star={element?.star} width={12} height={12} color={'#FFBF42'} />
              &nbsp;
              <div className={styles.ratingTitleHolder}>{element.ratings}</div>
            </div>

            <div className={styles.tagContainer}>
              {element.tag.length > 0 &&
                element.tag.map((tag, index) => {
                  return (
                    <div key={index} className={styles.tagHolder}>
                      {tag}
                    </div>
                  );
                })}
            </div>
          </div>
          <img src={element.image.src} alt={element.image.alt} className={styles.imgSectionHolder} />
        </div>

        <div className={styles.contentHolderFlex}>
          <div className={styles.infoCardHolder}>
            <div className={styles.infoCard}>
              <div>
                <div className={styles.ratingContainer}>
                  <StarGroup star={element?.star} width={12} height={12} color={'#FFBF42'} />
                  &nbsp;
                  <div className={styles.ratingTitleHolder}>{element.ratings}</div>
                </div>
                <div className={styles.HeadingHolder}>{element.heading}</div>
              </div>
              <div className={styles.locationContainer}>
                <LocationIcon />
                &nbsp;<p className={styles.locationHolder}>{element.text}</p>
              </div>
            </div>
            <div className={styles.infoCard}>
              <div className={styles.categoryContainer}>
                {element.categories.length > 0 &&
                  element.categories.map((category, index) => {
                    return (
                      <div key={index} className={styles.categoryHolder}>
                        {category}
                      </div>
                    );
                  })}
              </div>
              <div className={styles.termHolder}>{element.term}</div>
              {element?.btn && element?.href?.view ? (
                <a className={`${styles.viewBox} ${styles.viewBoxNone}`} href={element.href.view}>
                  View
                </a>
              ) : (
                <div className={`${styles.viewBox} ${styles.viewBoxNone}`}>View</div>
              )}

              <div className={styles.MobButton}>
                <div className={styles.DisPlayButtonFlexMob}>
                  <div>
                    {element?.btn && element?.href?.view ? (
                      <div
                        className={styles.viewBox}
                        href={element.href.view}
                        onClick={() => (window.location.href = element.href.view)}
                      >
                        View
                      </div>
                    ) : (
                      <div className={styles.viewBox}>View</div>
                    )}
                  </div>

                  <div>
                    {element?.btn && element?.href?.book ? (
                      <div
                        className={styles.bookNowBox}
                        href={element?.href?.book}
                        onClick={() => (window.location.href = element?.href?.book)}
                      >
                        Book Now
                      </div>
                    ) : (
                      <div className={styles.bookNowBox}>Book Now</div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.termContainer}>
            <div className={styles.tagContainer}>
              {element.tag.length > 0 &&
                element.tag.map((tag, index) => {
                  return (
                    <div key={index} className={styles.tagHolder}>
                      {tag}
                    </div>
                  );
                })}
            </div>
            <div className={styles.priceContainer}>
              <div className={styles.defaultPriceHolder}>${element.price.toFixed(2)}</div>
              <div className={styles.discountPriceHolder}>
                ${(element.price - element.price / element.discount).toFixed(2)}
              </div>
              <div className={styles.taxPriceHolder}>
                +${(element.price - element.price / element.discount + (element?.tax || 0)).toFixed(2)} TAXES $ FEES
              </div>
              <div className={styles.qtyHolder}>1 room per night</div>
              {element?.btn && element?.href?.book ? (
                <a className={`${styles.bookNowBox} ${styles.viewBoxNone}`} href={element?.href?.book}>
                  Book Now
                </a>
              ) : (
                <div className={`${styles.bookNowBox} ${styles.viewBoxNone}`}>Book Now</div>
              )}
            </div>
            <div className={styles.termHolder}>{element.term}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PackCard;
