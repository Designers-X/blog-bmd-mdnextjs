import React from 'react';
import Layout from 'components/Layout';
import { Helmet } from 'react-helmet';
import Link from 'next/link';
const Contact = () => {
  return (
    <Layout>
      <Helmet>
        <title>Contact Us | Mditerranean life</title>
        <meta name="description" content={null} />
        <meta property="og:title" content={'Contact Us | Mditerranean life'} />
        <meta property="og:description" content={null} />
      </Helmet>
      <section class="m-0" id="contact">
        <div class="Bg-Image ">
          <div class="container">
            <div class="logoCenter text-center mb-4">
              <img
                src="https://mditerraneastg.wpengine.com/wp-content/uploads/2023/05/the_MDiterranean_life_logo-white-1.png"
                alt=" "
              />
            </div>
            <div class="row">
              <div class="col-xl-7 col-lg-7 col-md-12 col-sm-12 m-auto">
                <div class="subscribeFormText">
                  <p class="SecondText">How can we help?</p>
                  <p class="ThirdTextDesc">
                    Should you have any questions or require further clarification, please submit your request using the
                    form below.
                  </p>
                  <p class="FourthText">email us at :</p>
                  <p class="FifthText">
                    <a href="mailto:customercare@theMDiterraneanlife.com">customercare@theMDiterraneanlife.com</a>
                  </p>
                  <p class="FourthText">Follow Us :</p>
                  <ul class="contactSocialIcons">
                    <li>
                      <Link href="#">
                        <svg
                          style={{ color: '#fff' }}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 448 512"
                          width="35"
                          height="35"
                        >
                          <path
                            d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z"
                            fill="white"
                          ></path>
                        </svg>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <svg
                          style={{ color: '#fff' }}
                          xmlns="http://www.w3.org/2000/svg"
                          width="35"
                          height="35"
                          viewBox="0 0 24 24"
                        >
                          <path
                            d="M15.233 5.488c-.843-.038-1.097-.046-3.233-.046s-2.389.008-3.232.046c-2.17.099-3.181 1.127-3.279 3.279-.039.844-.048 1.097-.048 3.233s.009 2.389.047 3.233c.099 2.148 1.106 3.18 3.279 3.279.843.038 1.097.047 3.233.047 2.137 0 2.39-.008 3.233-.046 2.17-.099 3.18-1.129 3.279-3.279.038-.844.046-1.097.046-3.233s-.008-2.389-.046-3.232c-.099-2.153-1.111-3.182-3.279-3.281zm-3.233 10.62c-2.269 0-4.108-1.839-4.108-4.108 0-2.269 1.84-4.108 4.108-4.108s4.108 1.839 4.108 4.108c0 2.269-1.839 4.108-4.108 4.108zm4.271-7.418c-.53 0-.96-.43-.96-.96s.43-.96.96-.96.96.43.96.96-.43.96-.96.96zm-1.604 3.31c0 1.473-1.194 2.667-2.667 2.667s-2.667-1.194-2.667-2.667c0-1.473 1.194-2.667 2.667-2.667s2.667 1.194 2.667 2.667zm4.333-12h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm.952 15.298c-.132 2.909-1.751 4.521-4.653 4.654-.854.039-1.126.048-3.299.048s-2.444-.009-3.298-.048c-2.908-.133-4.52-1.748-4.654-4.654-.039-.853-.048-1.125-.048-3.298 0-2.172.009-2.445.048-3.298.134-2.908 1.748-4.521 4.654-4.653.854-.04 1.125-.049 3.298-.049s2.445.009 3.299.048c2.908.133 4.523 1.751 4.653 4.653.039.854.048 1.127.048 3.299 0 2.173-.009 2.445-.048 3.298z"
                            fill="white"
                          />
                        </svg>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <svg
                          style={{ color: '#fff' }}
                          xmlns="http://www.w3.org/2000/svg"
                          width="35"
                          height="35"
                          viewBox="0 0 24 24"
                        >
                          <path
                            d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-.139 9.237c.209 4.617-3.234 9.765-9.33 9.765-1.854 0-3.579-.543-5.032-1.475 1.742.205 3.48-.278 4.86-1.359-1.437-.027-2.649-.976-3.066-2.28.515.098 1.021.069 1.482-.056-1.579-.317-2.668-1.739-2.633-3.26.442.246.949.394 1.486.411-1.461-.977-1.875-2.907-1.016-4.383 1.619 1.986 4.038 3.293 6.766 3.43-.479-2.053 1.08-4.03 3.199-4.03.943 0 1.797.398 2.395 1.037.748-.147 1.451-.42 2.086-.796-.246.767-.766 1.41-1.443 1.816.664-.08 1.297-.256 1.885-.517-.439.656-.996 1.234-1.639 1.697z"
                            fill="white"
                          />
                        </svg>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div class=" col-xl-5 col-lg-5 col-md-12 col-sm-12">
                <div class="login-form Subscribe">
                  <h2>Contact</h2>
                  <form>
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

export default Contact;
