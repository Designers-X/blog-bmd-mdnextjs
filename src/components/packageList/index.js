import { StarGroup } from 'components/svgIcons';
import styles from './index.module.scss';
import PackCard from './packCard';

const PackageLists = ({ data }) => {
  return (
    <section className={styles.listContainer}>
      <form className={styles.filterContainer}>
        <div className={styles.filterLabelHolder}>
          <b className={styles.titleHolder}>Filters</b>{' '}
          <span>
            <input type="reset" value="Clear" className={styles.resetBtn} />
          </span>
        </div>
        <div className={styles.filterCardContainer}>
          <div className={styles.PackFlex}>
            <div className={styles.columns}>
              <h2> Popular Filters</h2>
              <div>
                <input id="filter1" type="checkbox" className={styles.inputBox} />
                <label for="filter1">Free Cancellation Available</label>
              </div>
              <div>
                <input id="filter2" type="checkbox" className={styles.inputBox} />
                <label for="filter2">Free Breakfast Included</label>
              </div>
              <div>
                <input id="filter3" type="checkbox" className={styles.inputBox} />
                <label for="filter3">Book @ $1</label>
              </div>
            </div>

            <div className={styles.filterCardContainer}>
              <div className={styles.columns}>
                <h2>Price Range</h2>
                <div>
                  <input id="price1" type="checkbox" className={styles.inputBox} />
                  <label for="price1">Free Cancellation Available</label>
                </div>
                <div>
                  <input id="price2" type="checkbox" className={styles.inputBox} />
                  <label for="price2">Free Breakfast Included</label>
                </div>
                <div>
                  <input id="price3" type="checkbox" className={styles.inputBox} />
                  <label for="price3">Book @ $1</label>
                </div>
              </div>
            </div>

            <div className={styles.filterCardContainer}>
              <div className={styles.columns}>
                <h2>Customer Ratings</h2>
                <div>
                  <input id="star5" type="checkbox" className={styles.inputBox} />
                  <label for="star5">
                    <StarGroup star={5} width={10} height={10} />
                  </label>
                </div>
                <div>
                  <input id="star4" type="checkbox" className={styles.inputBox} />
                  <label for="star4">
                    <StarGroup star={4} width={10} height={10} />
                  </label>
                </div>
                <div>
                  <input id="star3" type="checkbox" className={styles.inputBox} />
                  <label for="star3">
                    <StarGroup star={3} width={10} height={10} />
                  </label>
                </div>
                <div>
                  <input id="star2" type="checkbox" className={styles.inputBox} />
                  <label for="star2">
                    <StarGroup star={2} width={10} height={10} />
                  </label>
                </div>
                <div>
                  <input id="star1" type="checkbox" className={styles.inputBox} />
                  <label for="star1">
                    <StarGroup star={1} width={10} height={10} />
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
      <div className={styles.listContainer}>
        {data.length > 0 &&
          data.map((element, index) => {
            return <PackCard element={element} index={index} key={index} />;
          })}
      </div>
    </section>
  );
};
export default PackageLists;
