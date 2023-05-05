import React, { useEffect } from 'react';
import styles from './styles.module.css';

export const NewsLetter = ({ content }) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://js.hsforms.net/forms/v2.js';
    document.body.appendChild(script);

    script.addEventListener('load', () => {
      if (window.hbspt) {
        window.hbspt.forms.create({
          portalId: content.portalId,
          formId: content.formId,
          target: '#hubspotForm',
        });
      }
    });
  }, []);
  return (
    <>
      <section className={styles.newsletterSection} id="NewLetterFrom">
        <div className={styles.container}>
          <img className={styles.imgHolder} src="https://email.brunomd.com/hubfs/Culture%20Image.png" />

          <div className={styles.formContainer}>
            <div className={styles.form}>
              <div className={styles.headingContainer}>{content.title}</div>
              <div id="hubspotForm">
                <div class="center-body" style={{ height: '200px' }}>
                  <div class="loader-circle-2"></div>
                </div>{' '}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
