import React from 'react';
import Layout from 'components/Layout';
const Subscribe = () => {
  return (
    <Layout>
      <section class="m-0">
        <div class="Bg-Image">
          <div class="container">
            <div class="logoCenter text-center mb-4">
              <img src="https://mditerraneastg.wpengine.com/wp-content/uploads/2023/05/the_MDiterranean_life_logo-white-1.png" />
            </div>
            <div class="row">
              <div class="col-xl-7 col-lg-7 col-md-12 col-sm-12 m-auto">
                <div class="subscribeFormText">
                  <p class="FirstText">Become a member to get the best of The MDiterranean Life in its entirety.</p>
                  <p class="SecondText">Stay up - to - date with exclusive content!</p>
                  <p class="ThirdText">Subscribe now and never miss a thing. For further assistance, </p>
                  <p class="FourthText">email us at :</p>
                  <p class="FifthText">
                    <a href="#">theMDiterraneanlife@customercare.com</a>
                  </p>
                </div>
              </div>
              <div class=" col-xl-5 col-lg-5 col-md-12 col-sm-12">
                <div class="login-form Subscribe">
                  <h2>Subscribe</h2>
                  <form>
                    <div class="form-group">
                      <input
                        type="text"
                        class="form-control mb-4"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="First Name "
                      />

                      <input
                        type="text"
                        class="form-control mb-4"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Last Name "
                      />

                      <input
                        type="email"
                        class="form-control mb-4"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Email "
                      />

                      <input
                        type="text"
                        class="form-control mb-4"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Phone Number "
                      />

                      <textarea
                        class="form-control mb-4"
                        rows="5"
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