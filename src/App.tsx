import React, { useState } from 'react';

import Header from '~/layout/header.component';
import Footer from '~/layout/footer.component';

import Home from '~/routes/home.component';
import About from '~/routes/about.component';
import Learn from '~/routes/learn.component';
import Pricing from '~/routes/pricing.component';
import Faq from '~/routes/faq.component';

import './App.css';
import { Routes, Route } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen flex flex-col text-base text-gray-700">
      <Header />

      <main className="flex justify-start flex-1 p-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="learn" element={<Learn />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="faq" element={<Faq />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
