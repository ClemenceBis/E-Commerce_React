import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-black text-gray-300 mt-10">

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-8 py-10">


        <div>
          <h3 className="text-white text-lg font-semibold mb-4">
            Liens utiles
          </h3>
          <ul className="space-y-2">
            <li><Link to="/home" className="hover:text-light">Accueil</Link></li>
            <li><Link to="/products" className="hover:text-light">Produits</Link></li>
            <li><Link to="/about" className="hover:text-light">A Propos</Link></li>
            <li><Link to="/contact" className="hover:text-light">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-white text-lg font-semibold mb-4">
            Nous Contacter
          </h3>
          <p>Téléphone : +243 977 968 687</p>
          <p>Email : eCommerce-VLC@gmail.com</p>
          <p>Adresse : ULPGL, Goma RDCongo</p>
        </div>

      </div>

      <div className="border-t border-gray-700 text-center py-4 text-sm">
        Copyright © 2026 - eCommerce-VLC
      </div>

    </footer>
  );
}

export default Footer;
