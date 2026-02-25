import { useEffect, useState } from "react"
import { getAllProducts } from "../services/fakeStoreApi"

export default function Products() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    getAllProducts().then(setProducts)
  }, [])

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-6">Nos Produits</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map(product => (
          <div
            key={product.id}
            className="border rounded-xl p-4 shadow hover:shadow-lg transition"
          >
            <img
              src={product.image}
              alt={product.title}
              className="h-40 mx-auto object-contain"
            />

            <h2 className="font-semibold mt-3 line-clamp-2">
              {product.title}
            </h2>

            <p className="text-green-600 font-bold mt-2">
              ${product.price}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}