import React from 'react';
import Products from '../components/Products';

const Home = () => {
  return (
    <div className="p-4 md:p-8 lg:p-12">
      <h2 className="text-2xl text-slate-300 font-bold my-4 md:my-6 lg:my-8">
        Welcome to Web Store!
      </h2>
      <section>
        <Products />
      </section>
    </div>
  );
};

export default Home;
