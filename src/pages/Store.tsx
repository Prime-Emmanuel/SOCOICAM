import { useState } from 'react';
import { Search, Filter, Phone, ShoppingCart } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const MOCK_PRODUCTS = [
  { id: 1, name: "Perceuse visseuse 18V XR", category: "Électroportatif", brand: "DeWalt", ref: "DCD791D2-QW", price: 125000, image: "https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&q=80&w=400&h=300", isNew: true },
  { id: 2, name: "Meuleuse angulaire 125mm", category: "Électroportatif", brand: "Makita", ref: "9558HNRG", price: 45000, image: "https://images.unsplash.com/photo-1534398079543-7ae6d016b86a?auto=format&fit=crop&q=80&w=400&h=300", isNew: false },
  { id: 3, name: "Vis à bois aggloméré 4x40 (Boîte 200)", category: "Visserie", brand: "Spax", ref: "VSA-440", price: 3500, image: "https://images.unsplash.com/photo-1581147036324-c175b6a7a00f?auto=format&fit=crop&q=80&w=400&h=300", isNew: false },
  { id: 4, name: "Mètre ruban acier 8m", category: "Mesure", brand: "Facom", ref: "FMHT0-33868", price: 8500, image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=400&h=300", isNew: false },
  { id: 5, name: "Caisse à outils PRO 65 pièces", category: "Outillage à main", brand: "Stanley", ref: "STMT71651", price: 85000, image: "https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?auto=format&fit=crop&q=80&w=400&h=300", isNew: false },
  { id: 6, name: "Mastic silicone sanitaire transparent", category: "Matériaux", brand: "Rubson", ref: "SIL-SAN-T", price: 4500, image: "https://images.unsplash.com/photo-1585659722983-38ca84b518d6?auto=format&fit=crop&q=80&w=400&h=300", isNew: false },
];

const CATEGORIES = ["Tous", "Électroportatif", "Outillage à main", "Visserie", "Mesure", "Matériaux"];

export default function Store() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Tous');
  const { addToCart } = useCart();

  const filteredProducts = MOCK_PRODUCTS.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          product.ref.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'Tous' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="bg-hardware-gray min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-hardware-black uppercase tracking-tight mb-4">
            Catalogue Produits
          </h1>
          <p className="text-gray-600 max-w-2xl">
            Retrouvez ici un aperçu de nos références disponibles en magasin. 
            Vous pouvez directement les ajouter à votre panier pour commander.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 items-start">
          
          {/* Sidebar / Filters */}
          <aside className="w-full lg:w-64 shrink-0 space-y-8">
            <div className="bg-white p-6 border border-gray-200">
              <h3 className="font-display font-bold uppercase tracking-wider mb-4 flex items-center gap-2">
                <Search className="w-4 h-4" />
                Recherche
              </h3>
              <input 
                type="text" 
                placeholder="Réf. ou nom..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full border border-gray-300 p-3 text-sm focus:outline-none focus:border-hardware-orange font-mono"
              />
            </div>

            <div className="bg-white p-6 border border-gray-200">
              <h3 className="font-display font-bold uppercase tracking-wider mb-4 flex items-center gap-2">
                <Filter className="w-4 h-4" />
                Catégories
              </h3>
              <ul className="space-y-2">
                {CATEGORIES.map(category => (
                  <li key={category}>
                    <button 
                      onClick={() => setSelectedCategory(category)}
                      className={`text-sm w-full text-left py-2 px-3 border-l-2 transition-colors ${
                        selectedCategory === category 
                          ? 'border-hardware-orange bg-orange-50 font-semibold text-hardware-orange' 
                          : 'border-transparent hover:bg-gray-50 text-gray-600'
                      }`}
                    >
                      {category}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-hardware-slate text-white p-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <Phone className="w-24 h-24" />
              </div>
              <h3 className="font-display font-bold uppercase mb-2 relative z-10">Assistance</h3>
              <p className="text-gray-300 text-sm mb-4 relative z-10">Besoin d'aide pour choisir le bon matériel ? Appelez-nous au 652557791.</p>
              <Link to="/contact" className="inline-block bg-hardware-orange hover:bg-hardware-orange-hover text-white text-sm font-bold uppercase px-4 py-2 relative z-10 transition-colors">
                Nous contacter
              </Link>
            </div>
          </aside>

          {/* Product Grid */}
          <main className="flex-1 w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredProducts.length > 0 ? (
                filteredProducts.map((product) => (
                  <motion.div 
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    key={product.id} 
                    className="bg-white group overflow-hidden border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col relative"
                  >
                    {product.isNew && (
                       <span className="absolute top-4 right-4 z-10 bg-hardware-orange text-white text-[10px] uppercase font-bold px-2 py-1">
                         Nouveau
                       </span>
                    )}
                    <div className="relative h-48 overflow-hidden bg-gray-100 p-4 flex items-center justify-center">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute top-4 left-4 bg-hardware-black/80 text-white text-xs font-bold uppercase tracking-wider px-2 py-1">
                        {product.brand}
                      </div>
                    </div>
                    
                    <div className="p-5 flex flex-col flex-grow">
                      <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">{product.category}</p>
                      <h4 className="font-bold text-hardware-black group-hover:text-hardware-orange transition-colors mb-2">
                        {product.name}
                      </h4>
                      <p className="font-mono text-xs text-gray-500 mb-4">Réf: {product.ref}</p>
                      
                      <div className="mt-auto flex items-end justify-between">
                        <div className="font-display font-bold text-xl text-hardware-black">
                          {product.price.toLocaleString('fr-FR')} FCFA
                        </div>
                        <button 
                          onClick={() => addToCart(product)}
                          className="bg-hardware-orange hover:bg-hardware-orange-hover text-white p-3 rounded-sm transition-colors flex items-center justify-center"
                          aria-label="Ajouter au panier"
                        >
                          <ShoppingCart className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))
              ) : (
                <div className="col-span-full bg-white p-12 text-center border border-gray-200">
                   <p className="text-gray-500 text-lg">Aucun article ne correspond à votre recherche.</p>
                   <button 
                      onClick={() => {setSearchTerm(''); setSelectedCategory('Tous');}}
                      className="mt-4 text-hardware-orange font-semibold hover:underline"
                   >
                     Réinitialiser les filtres
                   </button>
                </div>
              )}
            </div>
          </main>

        </div>
      </div>
    </div>
  );
}
