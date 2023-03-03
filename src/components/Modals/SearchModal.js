import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import ProductCard from '../../pages/Homepage/Cards/ProductCard';
import '../../assets/styles/search-page.css'

const SearchModal = ({ setModalOpen }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const { data: products = [], refetch } = useQuery(['products', searchTerm], async () => {
    const res = await fetch(`https://fashionista-server.vercel.app/products/search?searchTerm=${searchTerm}`);
    const data = await res.json();
    return data;
  });

  const handleSearch = (e) => {
    e.preventDefault();
    e.target.reset()
  };

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
    refetch();
  };

  return (
    <div className="min-h-screen w-full bg-opacity-90 bg-black fixed top-0 left-0 overflow-y-scroll">
      <section className="max-w-6xl mx-auto">
        <button className="absolute right-10 top-10 font-bold bg-white rounded-full h-8 w-8" onClick={() => setModalOpen(false)}>
          ✕
        </button>
        <h1 className="text-center text-5xl font-bold pt-5">
          <span className='textGradient'>Search Products</span>
        </h1>
        <form onSubmit={handleSearch} className="flex justify-center mt-8">
          <input
            type="text"
            name="query"
            value={searchTerm}
            placeholder="Product Name"
            className="input w-full max-w-md"
            onChange={handleInputChange}
          />
        </form>

        {
          products?.length ? <div className="search-products max-h-96 grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-5 mt-10 text-white">
            {products.map((item) => (
              <ProductCard key={item.id} data={item} setModalOpen={setModalOpen} />
            ))}
          </div>
            : <h1 className='text-white text-3xl mt-10'>No Items Found!</h1>}
      </section>
    </div>
  );
};

export default SearchModal;