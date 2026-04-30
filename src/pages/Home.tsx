import { Link } from 'react-router-dom';
import { ArrowRight, ShoppingCart } from 'lucide-react';
import { motion } from 'motion/react';
import { useCart } from '../context/CartContext';

const FEATURED_PRODUCTS = [
  { 
    id: 1, 
    name: "Perceuse visseuse 18V XR", 
    brand: "DeWalt",
    category: "Électroportatif", 
    price: 125000,
    ref: "DCD791D2-QW",
    image: "https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&q=80&w=400&h=300"
  },
  { 
    id: 5, 
    name: "Caisse à outils PRO 65 pièces", 
    brand: "Stanley",
    category: "Outillage à main", 
    price: 85000,
    ref: "STMT71651",
    image: "https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?auto=format&fit=crop&q=80&w=400&h=300"
  },
  { 
    id: 2, 
    name: "Meuleuse angulaire 125mm", 
    brand: "Makita",
    category: "Électroportatif", 
    price: 45000,
    ref: "9558HNRG",
    image: "https://images.unsplash.com/photo-1534398079543-7ae6d016b86a?auto=format&fit=crop&q=80&w=400&h=300" 
  },
  { 
    id: 4, 
    name: "Mètre ruban acier 8m", 
    brand: "Facom",
    category: "Mesure", 
    price: 8500,
    ref: "FMHT0-33868",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=400&h=300"
  },
];

export default function Home() {
  const { addToCart } = useCart();
  return (
    <div className="bg-hardware-gray min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-start text-white overflow-hidden py-20 lg:py-0">
        {/* Background Image */}
        <div 
          className="absolute inset-0 z-0 bg-contain bg-center bg-no-repeat bg-hardware-black"
          style={{ backgroundImage: 'url("https://i.ibb.co/hp3RRt4/a1277ab5-2568-4e93-94c0-5b7312cf51e2.jpg")' }}
        >
          <div className="absolute inset-0 bg-hardware-black/60 bg-gradient-to-r from-hardware-black/90 to-hardware-black/40" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="max-w-3xl">
            {/* Text Content */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-hardware-orange/20 border border-hardware-orange/30 rounded-full mb-8 text-hardware-orange text-sm font-bold tracking-widest uppercase shadow-lg backdrop-blur-sm">
                <span className="w-2 h-2 rounded-full bg-hardware-orange animate-pulse" />
                Expertise & Qualité à Yaoundé
              </div>
              <h1 className="text-5xl md:text-7xl font-display font-bold leading-[1.05] tracking-tighter mb-8 shadow-black text-white drop-shadow-xl">
                L'EXCELLENCE EN <br/>
                <span className="text-hardware-orange italic">QUINCAILLERIE.</span>
              </h1>
              <p className="text-xl text-gray-200 mb-12 max-w-xl leading-relaxed font-light drop-shadow-md">
                Bienvenue chez <span className="font-bold text-white">SOCOICAM</span>. Votre partenaire privilégié pour tous vos projets de construction et rénovation au Cameroun.
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <Link to="/boutique" className="group inline-flex items-center justify-center bg-hardware-orange text-white font-bold px-10 py-5 uppercase tracking-widest text-sm hover:bg-hardware-orange-hover transition-all shadow-xl shadow-hardware-orange/20">
                  Découvrir le Catalogue
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link to="/contact" className="inline-flex items-center justify-center bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold px-10 py-5 uppercase tracking-widest text-sm hover:bg-white/20 transition-all shadow-xl">
                  Nous Contacter
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Decorative Grid Lines */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
          <div className="w-full h-full" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 animate-bounce text-white/50 hidden lg:block">
          <div className="w-5 h-8 border-2 border-white/30 rounded-full flex justify-center pt-2 backdrop-blur-sm bg-black/10">
            <div className="w-1 h-1.5 bg-hardware-orange rounded-full" />
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-hardware-gray rounded-full -z-10" />
              <h2 className="text-5xl md:text-6xl font-display font-bold text-hardware-black uppercase tracking-tight mb-8">
                Engagement <br/>
                <span className="text-hardware-orange">Professionnel.</span>
              </h2>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  Depuis notre implantation à Yaoundé, <span className="font-bold text-hardware-black">SOCOICAM</span> s'est imposé comme le leader de la distribution de matériel de quincaillerie de haute qualité.
                </p>
                <p>
                  Nous ne nous contentons pas de vendre des outils ; nous fournissons des solutions durables pour les infrastructures de demain. Notre sélection rigoureuse des meilleures marques mondiales garantit la sécurité et la pérennité de vos chantiers.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-8 mt-12">
                <div>
                  <div className="text-4xl font-display font-bold text-hardware-orange mb-2">10k+</div>
                  <div className="text-xs font-bold uppercase tracking-widest text-gray-500">Références Produits</div>
                </div>
                <div>
                  <div className="text-4xl font-display font-bold text-hardware-orange mb-2">100%</div>
                  <div className="text-xs font-bold uppercase tracking-widest text-gray-500">Conseils d'Experts</div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=400&h=600" alt="Work" className="rounded-sm shadow-lg object-cover h-80 w-full" />
                <img src="https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80&w=400&h=400" alt="Construction" className="rounded-sm shadow-lg object-cover h-60 w-full" />
              </div>
              <div className="space-y-4 pt-12">
                <img src="https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&q=80&w=400&h=400" alt="Tools" className="rounded-sm shadow-lg object-cover h-60 w-full" />
                <img src="https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&q=80&w=400&h=600" alt="Professional" className="rounded-sm shadow-lg object-cover h-80 w-full" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products (Stylish Store Section) */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 flex flex-col md:flex-row justify-between items-start md:items-end border-b border-gray-300 pb-8 gap-4">
            <div>
              <h2 className="text-4xl font-display font-bold text-hardware-black uppercase tracking-tight">En Vedette</h2>
              <p className="text-gray-500 mt-2 font-medium">Une sélection de nos matériels les plus demandés en magasin.</p>
            </div>
            <Link to="/boutique" className="flex items-center gap-2 font-bold uppercase text-sm tracking-wider text-hardware-orange hover:text-hardware-orange-hover transition-colors">
              Voir tout le catalogue <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {FEATURED_PRODUCTS.map((product) => (
              <motion.div 
                key={product.id}
                whileHover={{ y: -5 }}
                className="bg-white group overflow-hidden border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                <div className="relative h-64 overflow-hidden bg-gray-100">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 bg-hardware-black text-white text-xs font-bold uppercase tracking-wider px-3 py-1">
                    {product.brand}
                  </div>
                </div>
                
                <div className="p-5 flex flex-col flex-grow">
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">{product.category}</p>
                  <h3 className="font-bold text-hardware-black mb-2 group-hover:text-hardware-orange transition-colors">
                    {product.name}
                  </h3>
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
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
