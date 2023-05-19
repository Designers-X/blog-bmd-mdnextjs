import React from 'react';
import Layout from 'components/Layout/Layout';
import { Helmet } from 'react-helmet';
const Privacy = () => {
  return (
    <Layout>
      <Helmet>
        <title>Privacy Policy | Mditerranean life</title>
        <meta name="description" content={null} />
        <meta property="og:title" content={'Privacy Policy | Mditerranean life'} />
        <meta property="og:description" content={null} />
      </Helmet>
      <section className="container m-auto mt-4 text-center">
        <div>
          <h2>Coming Soon!!</h2>
        </div>
      </section>
    </Layout>
  );
};

export default Privacy;
