import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { ShieldCheck, BadgeCheck, Truck } from "lucide-react";

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchSelectedProducts = async () => {
      try {
        const ids = [1, 5, 8, 12, 3, 7];
        const response = await axios.get(
          "https://fakestoreapi.com/products"
        );

        const selectedProducts = response.data.filter(product =>
          ids.includes(product.id)
        );

        setProducts(selectedProducts);

      } catch (error) {
        console.error("Erreur lors du chargement :", error);
      }
    };

    fetchSelectedProducts();
  }, []);

  return (
    <div>
      <div className="h-screen bg-gray-600 bg-center flex flex-col justify-center" style={{ backgroundImage: `url(${products[3]?.image})` }}>
        <h1 className="font-extrabold text-8xl text-dark flex justify-around">Bienvenue dans notre <br />boutique en ligne</h1>
        <p className="font-semibold text-2xl text-white flex justify-around"><br /> <br />Découvrez une sélection de produits de qualité aux meilleurs prix.
        <br />Trouvez facilement ce que vous cherchez et profitez d’une expérience d’achat simple et rapide.</p>
            <br /> <br /> <Link to={"/products"} className="flex justify-around">
              <button className="bg-light text-white pl-5 pr-5 pb-1 self-center font-semibold text-2xl border-gray-300 border-2 rounded-3xl hover:bg-dark"
              >Voir Nos Produits</button>
             </Link>
      </div>


      <div className="bg-gray-100 py-16 px-6 shadow-md">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 text-center">

          <div className="flex flex-col items-center">
            <ShieldCheck size={40} className="text-light mb-4" />
            <h3 className="text-2xl font-semibold mb-3">
              Paiement sécurisé
            </h3>
            <p className="text-gray-600">
              Toutes vos transactions sont protégées grâce à un système de
              paiement fiable et sécurisé.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <BadgeCheck size={40} className="text-light mb-4" />
            <h3 className="text-2xl font-semibold mb-3">
              Produits de qualité garantie
            </h3>
            <p className="text-gray-600">
              Nous sélectionnons soigneusement nos produits pour vous offrir
              la meilleure qualité au meilleur prix.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <Truck size={40} className="text-light mb-4" />
            <h3 className="text-2xl font-semibold mb-3">
              Livraison rapide et fiable
            </h3>
            <p className="text-gray-600">
              Recevez vos commandes rapidement et en toute sécurité directement
              chez vous.
            </p>
          </div>
        </div>
      </div>


      <div className="p-10">
        <h1 className="text-3xl font-bold mb-8">Des produits de qualité au meilleur prix</h1>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {products.map(product => (
            <div
              key={product.id}
              className="bg-white p-4 rounded-xl shadow-md hover:shadow-xl transition">
              <img
                src={product.image}
                alt={product.title}
                className="h-40 mx-auto object-contain"
              />

              <h2 className="text-lg font-semibold mt-4">
                {product.title.substring(0, 40)}...
              </h2>

              <p className="text-green-600 font-bold mt-2">
              ${product.price}
              </p>
              <Link to={"/products"}>
              <button className="bg-light pl-5 pr-5 pb-1 self-center font-bold border-gray-300 border-2 rounded-3xl hover:bg-dark"
              >Voir Plus</button>
              </Link>
            </div>
          ))}
        </div>
      </div>


      <div className="bg-gray-100 p-10">
        <h1 className="text-3xl font-bold mb-8">Nos meilleures ventes</h1>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {products.map(product => (
            <div
              key={product.id[1, 5, 8]}
              className="bg-white p-4 rounded-xl shadow-md hover:shadow-xl transition">
              <img
                src={product.image}
                alt={product.title}
                className="h-40 mx-auto object-contain"
              />

              <h2 className="text-lg font-semibold mt-4">
                {product.title.substring(0, 40)}...
              </h2>

              <p className="text-green-600 font-bold mt-2">
              ${product.price}
              </p>
              <Link to={"/cart"}>
              <button className="bg-light pl-5 pr-5 pb-1 self-center font-bold border-gray-300 border-2 rounded-3xl hover:bg-dark"
              >Ajouter au panier</button>
              </Link>
            </div>
          ))}
        </div>
      </div>


      <div className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Questions fréquentes</h2>
          <div className="space-y-4">
            <div className="bg-white p-6 rounded shadow-md hover:shadow-xl">
              <h3 className="font-semibold mb-2">Comment passer une commande ?</h3>
              <p className="text-gray-700">Il suffit de sélectionner votre produit et cliquer sur 'Ajouter au panier'.</p>
            </div>
            <div className="bg-white p-6 rounded shadow-md hover:shadow-xl">
              <h3 className="font-semibold mb-2">Quels sont les modes de paiement ?</h3>
              <p className="text-gray-700">Nous acceptons carte bancaire, PayPal et mobile money.</p>
            </div>
            <div className="bg-white p-6 rounded shadow-md hover:shadow-xl">
              <h3 className="font-semibold mb-2">Comment suivre ma commande ?</h3>
              <p className="text-gray-700">Vous recevrez un email avec le lien de suivi après expédition.</p>
            </div>
          </div>
        </div>
      </div>


    </div>
  );
}

export default Home;