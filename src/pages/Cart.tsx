import { Link, useNavigate } from 'react-router-dom';
import { Minus, Plus, Trash2, ShoppingBasket, ArrowLeft } from 'lucide-react';
import { motion } from 'motion/react';
import { useCart } from '../context/CartContext';

export default function Cart() {
  const { items, updateQuantity, removeFromCart, cartTotal } = useCart();
  const navigate = useNavigate();

  if (items.length === 0) {
    return (
      <div className="bg-hardware-gray min-h-[70vh] flex flex-col items-center justify-center p-4">
        <div className="bg-white p-12 text-center max-w-lg border border-gray-200">
          <ShoppingBasket className="w-16 h-16 text-gray-300 mx-auto mb-6" />
          <h2 className="text-3xl font-display font-bold uppercase mb-4 text-hardware-black">Votre panier est vide</h2>
          <p className="text-gray-500 mb-8">Vous n'avez pas encore ajouté de produits. Explorez notre catalogue pour trouver ce qu'il vous faut.</p>
          <Link to="/boutique" className="inline-flex items-center gap-2 bg-hardware-orange text-white px-8 py-4 font-bold uppercase tracking-widest hover:bg-hardware-orange-hover transition-colors">
             Catalogue Produits
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-hardware-gray min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-8">
          <button onClick={() => navigate(-1)} className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-gray-500 hover:text-hardware-orange transition-colors mb-4">
            <ArrowLeft className="w-4 h-4" /> Continuer vos achats
          </button>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-hardware-black uppercase tracking-tight">
            Votre Panier
          </h1>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-start">
          
          <div className="w-full lg:flex-1 space-y-4">
             {items.map((item) => (
                <motion.div 
                   layout
                   initial={{ opacity: 0, y: 20 }}
                   animate={{ opacity: 1, y: 0 }}
                   exit={{ opacity: 0, x: -100 }}
                   key={item.id} 
                   className="bg-white border border-gray-200 p-4 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center gap-6"
                 >
                   <div className="w-24 h-24 shrink-0 bg-gray-100 flex items-center justify-center p-2 hidden sm:flex">
                     <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                   </div>
                   
                   <div className="flex-1">
                      <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">{item.brand}</p>
                      <h3 className="font-bold text-lg text-hardware-black mb-1">{item.name}</h3>
                      <p className="font-mono text-xs text-gray-500">Réf: {item.ref}</p>
                   </div>
                   
                   <div className="flex flex-row sm:flex-col items-center sm:items-end justify-between w-full sm:w-auto gap-4">
                      <div className="font-display font-bold text-xl text-hardware-black text-right">
                         {(item.price * item.quantity).toLocaleString('fr-FR')} FCFA
                      </div>
                      
                      <div className="flex items-center gap-4">
                        <div className="flex items-center border border-gray-300">
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="p-2 text-gray-500 hover:bg-gray-100 transition-colors"
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="w-12 text-center font-bold font-mono">{item.quantity}</span>
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="p-2 text-gray-500 hover:bg-gray-100 transition-colors"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>
                        
                        <button 
                          onClick={() => removeFromCart(item.id)}
                          className="p-2 text-red-500 hover:bg-red-50 transition-colors"
                          title="Supprimer"
                        >
                           <Trash2 className="w-5 h-5" />
                        </button>
                      </div>
                   </div>
                </motion.div>
             ))}
          </div>
          
          <aside className="w-full lg:w-[400px] shrink-0">
             <div className="bg-hardware-black text-white p-8 sticky top-28">
               <h3 className="text-2xl font-display font-bold uppercase mb-6 border-b border-white/20 pb-4">Résumé</h3>
               
               <div className="space-y-4 mb-8">
                 <div className="flex justify-between text-gray-400">
                   <span>Sous-total</span>
                   <span className="font-mono">{cartTotal.toLocaleString('fr-FR')} FCFA</span>
                 </div>
                 <div className="flex justify-between text-gray-400">
                   <span>Frais de livraison</span>
                   <span>Calculés à l'étape suivante</span>
                 </div>
               </div>
               
               <div className="flex justify-between items-end border-t border-white/20 pt-6 mb-8">
                 <span className="font-bold uppercase tracking-wider">Total estimé</span>
                 <span className="font-display font-bold text-3xl text-hardware-orange">{cartTotal.toLocaleString('fr-FR')} FCFA</span>
               </div>
               
               <Link to="/caisse" className="block w-full bg-hardware-orange hover:bg-hardware-orange-hover text-white text-center font-bold uppercase py-5 tracking-widest transition-colors mb-4">
                  Passer la commande
               </Link>
               
               <p className="text-xs text-gray-500 text-center">Paiement sécurisé. Retrait en magasin possible.</p>
             </div>
          </aside>

        </div>
      </div>
    </div>
  );
}
