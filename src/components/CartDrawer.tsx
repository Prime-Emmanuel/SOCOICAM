import { X, Plus, Minus, Trash2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export default function CartDrawer() {
  const { isCartOpen, closeCart, items, updateQuantity, removeFromCart, cartTotal } = useCart();
  const navigate = useNavigate();

  const handleCheckout = () => {
    closeCart();
    navigate('/caisse');
  };

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCart}
            className="fixed inset-0 bg-hardware-black/60 backdrop-blur-sm z-40"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', bounce: 0, duration: 0.4 }}
            className="fixed top-0 right-0 h-full w-full max-w-md bg-hardware-gray shadow-2xl z-50 flex flex-col"
          >
            {/* Header */}
            <div className="bg-hardware-black p-6 flex justify-between items-center shrink-0">
              <h2 className="text-white font-display font-bold text-2xl uppercase tracking-widest">
                Votre Panier
              </h2>
              <button 
                onClick={closeCart}
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Fermer le panier"
              >
                <X className="w-8 h-8" />
              </button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-6">
              {items.length === 0 ? (
                <div className="text-center text-gray-500 mt-12">
                  <p className="mb-6">Votre panier est vide.</p>
                  <button 
                    onClick={closeCart}
                    className="inline-block border-2 border-hardware-orange text-hardware-orange hover:bg-hardware-orange hover:text-white px-6 py-3 font-bold uppercase text-sm tracking-widest transition-colors"
                  >
                    Continuer vos achats
                  </button>
                </div>
              ) : (
                <div className="space-y-6">
                  {items.map((item) => (
                    <motion.div 
                      layout // animation on remove
                      key={item.id} 
                      className="bg-white p-4 flex gap-4 border border-gray-200"
                    >
                      <div className="w-20 h-20 bg-gray-50 shrink-0">
                        <img src={item.image} alt={item.name} className="w-full h-full object-cover p-2" />
                      </div>
                      
                      <div className="flex-1 flex flex-col">
                        <div className="flex justify-between items-start">
                          <div>
                            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{item.brand}</p>
                            <h4 className="font-bold text-sm text-hardware-black line-clamp-2 leading-tight mt-1">{item.name}</h4>
                          </div>
                          <button 
                            onClick={() => removeFromCart(item.id)}
                            className="text-gray-400 hover:text-red-500 transition-colors ml-2"
                            aria-label="Supprimer"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                        
                        <div className="mt-auto flex justify-between items-end">
                           <div className="flex items-center border border-gray-200 mt-3">
                             <button 
                               onClick={() => updateQuantity(item.id, item.quantity - 1)}
                               className="p-1 text-gray-500 hover:bg-gray-100 transition-colors"
                             >
                               <Minus className="w-4 h-4" />
                             </button>
                             <span className="w-8 text-center text-xs font-bold font-mono">{item.quantity}</span>
                             <button 
                               onClick={() => updateQuantity(item.id, item.quantity + 1)}
                               className="p-1 text-gray-500 hover:bg-gray-100 transition-colors"
                             >
                               <Plus className="w-4 h-4" />
                             </button>
                           </div>
                           <div className="font-bold text-hardware-orange text-sm font-mono">
                             {(item.price * item.quantity).toLocaleString('fr-FR')} FCFA
                           </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer / Summary */}
            {items.length > 0 && (
              <div className="bg-white p-6 border-t border-gray-200 shrink-0">
                <div className="flex justify-between items-end mb-6">
                  <span className="font-bold uppercase tracking-widest text-sm text-gray-600">Total</span>
                  <span className="font-display font-bold text-2xl text-hardware-black">{cartTotal.toLocaleString('fr-FR')} FCFA</span>
                </div>
                
                <button 
                  onClick={handleCheckout}
                  className="w-full bg-hardware-orange hover:bg-hardware-orange-hover text-white text-center font-bold uppercase py-4 tracking-widest transition-colors mb-3"
                >
                  Passer la commande
                </button>
                <Link
                  to="/panier"
                  onClick={closeCart}
                  className="block w-full border-2 border-hardware-slate text-hardware-slate hover:bg-hardware-slate hover:text-white text-center font-bold uppercase py-3 tracking-widest transition-colors text-sm"
                >
                  Voir le panier
                </Link>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
