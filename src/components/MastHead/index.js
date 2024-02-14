import { useEffect, useState } from 'react';
import styles from './MastHead.module.scss';
import { Minus, Plus } from 'components/svgIcons';
const MastHead = ({ source, v2 = false }) => {
  const [modal, setModal] = useState(false);
  const [room, setRoom] = useState(1);
  const [adults, setAdult] = useState(2);
  const [children, setChildren] = useState(0);
  useEffect(() => {
    // document.getElementById('button1').addEventListener('click', function() {
    //     document.getElementById('date1').show();
    //    });
    // ('#sandbox-container input').datepicker({
    //     orientation: "top right",
    //     showOnFocus: "false"
    // });
  }, []);
  if (!source) return null;
  if (v2) {
    return (
      <div className={styles.mastHeadContainerAvail}>
        <img src={source?.desk?.src} alt={source?.desk?.alt || '...'} className={styles.MastHeadDeskImg} />
        <img src={source?.mob?.src} alt={source?.mob?.alt || '...'} className={styles.MastHeadMobImg} />
        {source?.title && <div className={styles.titleHolder}>{source.title}</div>}
        {source.avail && (
          <div className={styles.availabilyContainer}>
            <div className={styles.formContainer}>
              <div className={styles.dateRangeContainer}>
                <input id="date1" type="date" />
                <label for="date1" className={styles.dateRangeHolder1}>
                  <img src="/package/calender.png" width={35} height={35} />
                  07 Jul 2023 Friday
                </label>
                <input id="date2" type="date" className={styles.inputHolder} />
                <label for="date2" className={styles.dateRangeHolder2}>
                  <img src="/package/calender.png" width={35} height={35} />
                  07 Jul 2023 Friday
                </label>
              </div>
              <div className={styles.dropdownContainer} onClick={() => setModal(!modal)}>
                <img src="/package/Group.png" width={35} height={35} />
                <div className={styles.dropDownTitleHolder}>
                  <div className={styles.dropDownTitle}>
                    {adults} adults{children > 0 && ', ' + children + ' Childrens'}
                  </div>
                  <div className={styles.dropDownSubTitle}>{room} rooms</div>
                </div>
              </div>
              {modal && (
                <>
                  <div className={styles.arrow}>
                    <svg
                      className={styles.svgWrapper}
                      xmlns="http://www.w3.org/2000/svg"
                      width="15"
                      height="27"
                      viewBox="0 0 15 27"
                      fill="white"
                      stroke="rgba(0, 0, 0, 0.15)"
                    >
                      <path
                        d="M14.2399 12.776C14.6536 13.17 14.6536 13.83 14.2399 14.224L1.68975 26.1797C1.05312 26.7862 -1.28227e-06 26.3349 -1.24384e-06 25.4557L-1.98639e-07 1.54433C-1.60205e-07 0.665073 1.05312 0.213816 1.68975 0.820283L14.2399 12.776Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                  <div className={styles.modalContainer}>
                    <div className={styles.row}>
                      <div>
                        <div className={styles.rowTitle}>Room</div>
                        <div className={styles.rowDesc}>&nbsp;</div>
                      </div>{' '}
                      <div className={styles.selectorHolder}>
                        <span
                          className={styles.selectorBtn}
                          onClick={() => {
                            if (room >= 1) {
                              room > 1 && setRoom(room - 1);
                            }
                          }}
                        >
                          <Minus color={'rgba(169, 179, 201, 1)'} width={25} height={25} />
                        </span>
                        {room}
                        <span
                          className={styles.selectorBtn}
                          onClick={() => {
                            setRoom(room + 1);
                          }}
                        >
                          <Plus color={'rgba(169, 179, 201, 1)'} width={25} height={25} />
                        </span>
                      </div>
                    </div>
                    <div className={styles.row}>
                      <div>
                        <div className={styles.rowTitle}>Adults</div>
                        <div className={styles.rowDesc}>Ages 18 or above</div>
                      </div>{' '}
                      <div className={styles.selectorHolder}>
                        <span
                          className={styles.selectorBtn}
                          onClick={() => {
                            adults > 1 && setAdult(adults - 1);
                          }}
                        >
                          <Minus color={'rgba(169, 179, 201, 1)'} width={25} height={25} />
                        </span>
                        {adults}
                        <span
                          className={styles.selectorBtn}
                          onClick={() => {
                            setAdult(adults + 1);
                          }}
                        >
                          <Plus color={'rgba(169, 179, 201, 1)'} width={25} height={25} />
                        </span>
                      </div>
                    </div>
                    <div className={styles.row}>
                      <div>
                        <div className={styles.rowTitle}>Children</div>
                        <div className={styles.rowDesc}>Ages 03 to 17</div>
                      </div>{' '}
                      <div className={styles.selectorHolder}>
                        <span
                          className={styles.selectorBtn}
                          onClick={() => {
                            children >= 0 && setChildren(children - 1);
                          }}
                        >
                          <Minus color={'rgba(169, 179, 201, 1)'} width={25} height={25} />
                        </span>
                        {children}
                        <span
                          className={styles.selectorBtn}
                          onClick={() => {
                            setChildren(children + 1);
                          }}
                        >
                          <Plus color={'rgba(169, 179, 201, 1)'} width={25} height={25} />
                        </span>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
            {source.href ? (
              <a className={styles.availabilyButton} href={source.href}>
                Check Availability
              </a>
            ) : (
              <div className={styles.availabilyButton} id="button1">
                Check Availability
              </div>
            )}
          </div>
        )}
      </div>
    );
  } else {
    return (
      <div className={styles.mastHeadContainer}>
        <img src={source?.desk?.src} alt={source?.desk?.alt || '...'} className={styles.MastHeadDeskImg} />
        <img src={source?.mob?.src} alt={source?.mob?.alt || '...'} className={styles.MastHeadMobImg} />
        {source?.title && <div className={styles.titleHolder}>{source.title}</div>}
      </div>
    );
  }
};
export default MastHead;