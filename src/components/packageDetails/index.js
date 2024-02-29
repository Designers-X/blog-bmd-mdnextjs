import styles from './index.module.scss';

const PackageDetails = ({ data }) => {
  return (
    <div className={styles.packageDetailContainer}>
      <h2 className={styles.packageHeading}>{data.title}</h2>
      <div dangerouslySetInnerHTML={{ __html: data.subTitle }} />
      <div className={styles.imgConatiner}>
        {data.gallery.length > 0 &&
          data.gallery.map((element, index) => {
            return (
              <div className={styles.packageImg} key={index}>
                <img className={styles.imgHolder} src={element.src} alt={element.alt} key={index} />
              </div>
            );
          })}
      </div>
      <div className={styles.descContainer} dangerouslySetInnerHTML={{ __html: data.desc }} />
    </div>
  );
};
export default PackageDetails;
