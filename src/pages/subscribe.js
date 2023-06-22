import React, { useEffect } from 'react';
import Layout from 'components/Layout';
import { Helmet } from 'react-helmet';
const Subscribe = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://js.hsforms.net/forms/v2.js';
    document.body.appendChild(script);

    script.addEventListener('load', () => {
      if (window.hbspt) {
        window.hbspt.forms.create({
          portalId: '19647191',
          formId: '2dc7982a-20de-40e5-acaf-ee19d2bcea93',
          target: '#formSubscribe',
        });
      }
    });
  }, []);
  return (
    <Layout>
      <Helmet>
        <title>Subscribe | Mditerranean life</title>
        <meta name="description" content={null} />
        <meta property="og:title" content={'Subscribe | Mditerranean life'} />
        <meta property="og:description" content={null} />
      </Helmet>
      <section class="m-0" id="subscribe">
        <div class="Bg-Image">
          <div class="container">
            <div class="logoCenter text-center mb-4">
              {false && (
                <img
                  src="https://mditerraneastg.wpengine.com/wp-content/uploads/2023/05/the_MDiterranean_life_logo-white-1.png"
                  alt="textAlt"
                />
              )}
            </div>
            <div class="row">
              <div class="col-xl-7 col-lg-7 col-md-12 col-sm-12 m-auto p-0 m-0">
                <div class="subscribeFormText">
                  <p class="FirstText">Become a member to get the best of The MDiterranean Life in its entirety.</p>
                  <p class="SecondText">Stay up - to - date with exclusive content!</p>
                  <p class="ThirdText">Subscribe now and never miss a thing. For further assistance, </p>
                  <p class="FourthText">email us at :</p>
                  <p class="FifthText">
                    <a href="mailto:customercare@theMDiterraneanlife.com">customercare@theMDiterraneanlife.com</a>
                  </p>
                </div>
              </div>
              <div class=" col-xl-5 col-lg-5 col-md-12 col-sm-12 p-0 m-0">
                <div class="login-form Subscribe">
                  <h2>Subscribe</h2>
                  <form id="formSubscribe">
                    <div class="form-group">
                      <input
                        type="text"
                        class="form-control mb-3"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="First Name "
                      />

                      <input
                        type="text"
                        class="form-control mb-3"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Last Name "
                      />

                      <input
                        type="email"
                        class="form-control mb-3"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Email "
                      />

                      <input
                        type="text"
                        class="form-control mb-3"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Phone Number "
                      />

                      <textarea
                        class="form-control mb-3"
                        rows="3"
                        id="comment"
                        name="text"
                        placeholder="Message "
                      ></textarea>
                    </div>

                    <div class="text-center">
                      <button type="submit" class="btn btn-darkBlack">
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Subscribe;
