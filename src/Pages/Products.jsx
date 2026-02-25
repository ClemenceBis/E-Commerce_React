import React, { useState, useEffect } from 'react';
import { getProducts } from '../Services/api';

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts()
      .then(res => setProducts(res.data))
      .catch(err => console.error(err));
  }, []);

  if (!products.length)
    return (
      <p className="text-center mt-8 text-gray-500 text-lg">
        Chargement des produits...
      </p>
    );

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Liste des produits</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map(product => (
          <div
            key={product.id}
            className="border rounded-lg p-4 shadow hover:shadow-lg transition duration-200 flex flex-col items-center"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-32 h-32 object-contain mb-4"
            />
            <h2 className="font-semibold text-center text-lg mb-2">{product.title}</h2>
            <p className="text-blue-600 font-bold mb-1">${product.price}</p>
            <p className="text-gray-500 text-sm text-center">{product.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;