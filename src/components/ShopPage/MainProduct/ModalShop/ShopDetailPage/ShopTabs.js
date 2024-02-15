// import React from 'react'
import React, { useState } from 'react';
import Styles from './Styles.module.scss';
import TabData from '/json/Itinerary.json';

function ShopTabs() {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  return (
    <div>
      <div className={Styles.TabsMain}>
        <div className={Styles.TabsMainOne}>
          <div className={Styles.tabContainer}>
            <div
              className={`tab ${Styles.Letter} ${activeTab === 1 ? 'active-tab' : ''}`}
              onClick={() => handleTabClick(1)}
            >
              Details
            </div>
            <div
              className={`tab ${Styles.Letter} ${activeTab === 2 ? 'active-tab' : ''}`}
              onClick={() => handleTabClick(2)}
            >
              Review
            </div>
            <div
              className={`tab ${Styles.Letter} ${activeTab === 3 ? 'active-tab' : ''}`}
              onClick={() => handleTabClick(3)}
            >
              Comment
            </div>
          </div>

          <hr></hr>

          <div className={Styles.tabContent}>
            {activeTab === 1 && <p>Content for Tab 1</p>}

            {activeTab === 2 && (
              <div className={Styles.FlexCode}>
                <div className={Styles.Tabcode}>
                  {TabData.ShopTabData.map((product, index) => (
                    <div className={Styles.tabsInner} key={index}>
                      <div className={Styles.UseFlexA}>
                        <div className={Styles.ImgMainE}>
                          <img src={product.image} />
                        </div>
                        <div>
                          <h3>
                            {product.name} <span> {product.date}</span>{' '}
                          </h3>

                          <span className={Styles.SpanSvgCon}>
                            {Array.from({ length: Math.floor(product.rating) }).map((_, index) => (
                              <svg
                                key={index}
                                xmlns="http://www.w3.org/2000/svg"
                                width="12"
                                height="12"
                                viewBox="0 0 10 10"
                                fill="none"
                              >
                                <path
                                  d="M2.25771 9.6517C2.01619 9.77584 1.74271 9.55889 1.79133 9.28172L2.30991 6.32579L0.108454 4.22789C-0.0972844 4.03183 0.00921575 3.67335 0.284834 3.6342L3.34638 3.19928L4.71146 0.495191C4.83442 0.251603 5.16753 0.251603 5.2905 0.495191L6.65557 3.19928L9.71712 3.6342C9.99274 3.67335 10.0992 4.03183 9.8935 4.22789L7.69204 6.32579L8.21062 9.28172C8.25925 9.55889 7.98577 9.77584 7.74424 9.6517L5.00098 8.24173L2.25771 9.6517Z"
                                  fill="#FF9F00"
                                />
                              </svg>
                            ))}
                          </span>

                          <p className={Styles.TabsPara}>
                            The build and materials used in shoes are top-notch. It feels durable and well-crafted,
                            ensuring a long-lasting product life.
                          </p>

                          <div className={Styles.ReplyStatus}>
                            <p>
                              Reply:
                              <span>Like </span>42
                              <span>Dislike </span>0
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {TabData.cardTabData.map((product, index) => (
                  <div key={index} className={Styles.TabsTwo}>
                    <div className={Styles.ratingGoal}>
                      <span className={Styles.ratingNumber}> {product.ratingNum}</span>
                      <span>
                        {Array.from({ length: Math.floor(product.rating) }).map((_, index) => (
                          <svg
                            key={index}
                            xmlns="http://www.w3.org/2000/svg"
                            width="10"
                            height="10"
                            viewBox="0 0 10 10"
                            fill="none"
                          >
                            <path
                              d="M2.25771 9.6517C2.01619 9.77584 1.74271 9.55889 1.79133 9.28172L2.30991 6.32579L0.108454 4.22789C-0.0972844 4.03183 0.00921575 3.67335 0.284834 3.6342L3.34638 3.19928L4.71146 0.495191C4.83442 0.251603 5.16753 0.251603 5.2905 0.495191L6.65557 3.19928L9.71712 3.6342C9.99274 3.67335 10.0992 4.03183 9.8935 4.22789L7.69204 6.32579L8.21062 9.28172C8.25925 9.55889 7.98577 9.77584 7.74424 9.6517L5.00098 8.24173L2.25771 9.6517Z"
                              fill="#FF9F00"
                            />
                          </svg>
                        ))}
                      </span>

                      <span className={Styles.ReviewGoal}>{product.review} Review</span>
                    </div>

                    <div className={Styles.box1}>
                      <p className={Styles.box1Para}> {product.parag}</p>

                      <div className={Styles.ButnBlock}>
                        <a>View More </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 3 && <p>Content for Tab 3</p>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShopTabs;
