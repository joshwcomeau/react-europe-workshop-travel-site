import React from 'react';

import GlobalStyles from '../GlobalStyles';
import Header from '../Header';
import MainContent from '../MainContent';
import Footer from '../Footer';

const App = () => {
  return (
    <>
      <Header />
      <MainContent />
      <Footer />

      <GlobalStyles />
    </>
  );
};

export default App;
