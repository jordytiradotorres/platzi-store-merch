import React from 'react';
import { Helmet } from 'react-helmet';
import initialState from '../initialState';
import Products from '../components/Products';

const Home = () => (
  <>
    <Helmet>
      <title>Platzi Conf Merch - Productos</title>
      <meta
        name="description"
        content="Platzi Conf Store es una tienda online con pagos en paypal"
      />
      <meta name="keywords" content="E-commerce,Html,Css,Javascript,React" />
      <meta name="author" content="Jordy Tirado Torres" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@jordytirado20" />
      <meta name="twitter:creator" content="@jordytirado20" />
      <meta name="twitter:title" content="Platzi Conf Store" />
      <meta name="twitter:description" content="Platzi Conf Store" />
      <meta property="og:title" content="Platzi Conf Store" />
      <meta property="og:description" content="Platzi Conf Store" />
      <meta
        property="og:url"
        content="https://platzi-store-merch-11647.web.app/"
      />
      <meta property="og:site_name" content="Platzi Conf Store" />
      <meta property="og:locale" content="es_ES" />
      <meta property="og:type" content="article" />
    </Helmet>
    <Products products={initialState.products} />
  </>
);

export default Home;
