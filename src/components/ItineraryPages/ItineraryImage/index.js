import React from 'react';
import Styles from './Style.module.scss';
import Itinerary from '/json/Itinerary.json';

// import ItineraryContent from '../ItineraryPages/ItineraryContent'

function ItineraryImages() {
  return (
    <div>
      <section className={Styles.ItineraryTop}>
        <div className={Styles.container}>
          <div className={Styles.MainBannerIti}>
            <div className={Styles.MainBannerImageConvert}>
              <div className={Styles.MainBannerImg}>
                <img src={Itinerary.images[0]} alt="TopBannerIti" />
              </div>
              <div className={Styles.MainBannerItiWIdth}>
                <div className={`${Styles.MainBannerItiControl} ${Styles.bottom}`}>
                  {Itinerary.images.slice(1, 3).map((src, index) => (
                    <div
                      key={index}
                      className={`${Styles.MainBannerItiImg} ${index === 1 ? Styles.sde : Styles.Side} ${
                        index === 1 ? Styles.borderRaduis : ''
                      }`}
                    >
                      <img src={src} alt={`Top${String.fromCharCode(65 + index)}`} />
                    </div>
                  ))}
                </div>

                <div className={Styles.MainBannerItiControl}>
                  {Itinerary.images.slice(3, 5).map((src, index) => (
                    <div
                      key={index}
                      className={`${Styles.MainBannerItiImg} ${index === 0 ? Styles.Side : ''} ${
                        index === 0 ? '' : Styles.borderRaduis
                      }`}
                    >
                      <img src={src} alt={`Top${String.fromCharCode(67 + index)}`} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <ItineraryContent></ItineraryContent> */}
    </div>
  );
}

export default ItineraryImages;
