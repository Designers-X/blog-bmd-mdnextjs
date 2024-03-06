import React from 'react';
import Styles from 'components/ItineraryPages/ItineraryContent/Style.module.scss';
import CheckIn from 'components/ItineraryPages/CheckIn';
import GuestDetail from 'components/ItineraryPages/GuestDetail';
import Itinerary from '/json/Itinerary.json';

function ItineraryContent() {
  return (
    <div>
      <section>
        <div className={Styles.container}>
          <div className={Styles.travel1}>
            <div className={Styles.travel2}>
              <div className={Styles.travel2a}>
                {Itinerary.ItinearyM.map((item, index) => (
                  <div key={index}>
                    <h2>
                      {item.title} {/* Use item.stars to render the stars */}
                      {Array.from({ length: item.stars }, (_, i) => (
                        <span className={Styles.TravSvg} key={i}>
                          <img key={i} src="/package/GoldenStar.svg" alt="GoldenStar" />
                        </span>
                      ))}
                    </h2>
                    <p className={Styles.travelP1}>{item.address}</p>
                    <p className={Styles.travelP2}>{item.description}</p>

                    {/* Render amenities */}
                    <div className={Styles.controllUL}>
                      {Object.entries(item.amenities).map(([category, list], categoryIndex) => (
                        <div key={categoryIndex} className={Styles.ul1}>
                          <h3>{category}</h3>
                          <ul>
                            {list.map((amenity, amenityIndex) => (
                              <li key={amenityIndex}>{amenity}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>

                    {/* Render route */}
                    <div className={Styles.route1}>
                      <h3>Route Distance : 509 km</h3>

                      <div className={Styles.RouteFlex}>
                        <div className={`${Styles.routeA} ${Styles.routePAdding}`}>
                          <div className={Styles.routeAa}>
                            <div className={Styles.routeAin}>
                              <div className={Styles.routeWidthControl}>
                                <h5>
                                  Day <span className={Styles.RoutSpan}>01</span>
                                </h5>
                              </div>

                              <p>
                                223 Km <br /> 2.25 hrs by car
                              </p>
                            </div>
                            <div className={Styles.routeAout}>
                              <p>San Diego: Coastal Wonders and Cultural Hot Spots</p>
                            </div>
                          </div>
                          <div className={Styles.routeAa}>
                            <div className={Styles.routeAin}>
                              <div className={Styles.routeWidthControl}>
                                <h5>
                                  Day <span className={Styles.RoutSpan}>02</span>
                                </h5>
                              </div>
                              <p>
                                231 km <br />
                                1.75 hrs by car
                              </p>
                            </div>
                            <div className={Styles.routeAout}>
                              <p>Palm Springs: Hiking, Adventure and Sports Paradise</p>
                            </div>
                          </div>
                        </div>
                        <div className={Styles.routeB}>
                          <div className={Styles.routeAa}>
                            <div className={Styles.routeAin}>
                              <div className={Styles.routeWidthControl}>
                                <h5>
                                  Day <span className={Styles.RoutSpan}>04</span>
                                </h5>
                              </div>
                              <p>
                                55 km
                                <br />
                                1.5 hrs by car
                              </p>
                            </div>
                            <div className={Styles.routeAout}>
                              <p>San Diego, California: Adventures in an Outdoor-Lovers’ Paradise</p>
                            </div>
                          </div>
                          <div className={Styles.routeAa}>
                            <div className={Styles.routeAin}>
                              <div className={Styles.routeWidthControl}>
                                <h5>
                                  Day <span className={Styles.RoutSpan}>05</span>
                                </h5>
                              </div>
                              <p>
                                231 km <br /> 1.75 hrs by car
                              </p>
                            </div>
                            <div className={Styles.routeAout}>
                              <p>Disneyland Resort in California: A World of Enchantment Awaits</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className={Styles.Chekinder}>
              <CheckIn />
            </div>
          </div>

          <GuestDetail />
        </div>
      </section>
    </div>
  );
}

export default ItineraryContent;
