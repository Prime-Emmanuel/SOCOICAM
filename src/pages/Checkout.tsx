import { useState } from 'react';
import type { FormEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Check, ShieldCheck, MapPin, Truck } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function Checkout() {
  const { items, cartTotal, clearCart } = useCart();
  const navigate = useNavigate();
  const [success, setSuccess] = useState(false);

  // If no items in cart, and not success state, go back
  if (items.length === 0 && !success) {
    navigate('/boutique');
    return null;
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    clearCart();
    setSuccess(true);
  };

  if (success) {
    return (
      <div className="bg-hardware-gray min-h-[80vh] flex items-center justify-center py-12 px-4">
        <div className="bg-white p-8 md:p-16 border border-gray-200 max-w-2xl text-center shadow-lg relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-2 bg-hardware-orange" />
          <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8">
             <Check className="w-10 h-10" />
          </div>
          <h2 className="text-4xl font-display font-bold uppercase mb-4 text-hardware-black">Commande Validée !</h2>
          <p className="text-gray-600 mb-8 text-lg">
            Merci pour votre commande. Un conseiller SOCOICAM vous contactera très prochainement pour finaliser la livraison et le paiement.
          </p>
          <div className="bg-hardware-slate p-6 text-white mb-8 text-left">
             <h3 className="font-bold uppercase tracking-wider mb-2">Prochaines Étapes</h3>
             <ul className="space-y-2 text-sm text-gray-300">
               <li>1. Validation des stocks en magasin</li>
               <li>2. Appel de confirmation par notre service commercial</li>
               <li>3. Paiement à la livraison ou retrait en magasin</li>
             </ul>
          </div>
          <Link to="/" className="inline-block bg-hardware-orange hover:bg-hardware-orange-hover text-white px-8 py-4 font-bold uppercase tracking-widest transition-colors">
            Retour à l'accueil
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-hardware-gray min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-hardware-black uppercase tracking-tight mb-4">
            Validation de Commande
          </h1>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col lg:flex-row gap-12 items-start">
          
          <div className="w-full lg:flex-1 space-y-8">
             
             {/* Section Contact */}
             <section className="bg-white p-6 md:p-8 border border-gray-200">
               <h2 className="text-2xl font-display font-bold uppercase mb-6 flex items-center gap-3">
                 <span className="w-8 h-8 rounded-full bg-hardware-slate text-white flex items-center justify-center text-sm">1</span>
                 Coordonnées
               </h2>
               
               <div className="grid sm:grid-cols-2 gap-6">
                 <div className="space-y-2">
                   <label className="block text-xs font-bold uppercase tracking-wider text-gray-500">Prénom</label>
                   <input required type="text" className="w-full border border-gray-300 p-3 bg-gray-50 focus:bg-white focus:outline-none focus:border-hardware-orange transition-colors" />
                 </div>
                 <div className="space-y-2">
                   <label className="block text-xs font-bold uppercase tracking-wider text-gray-500">Nom</label>
                   <input required type="text" className="w-full border border-gray-300 p-3 bg-gray-50 focus:bg-white focus:outline-none focus:border-hardware-orange transition-colors" />
                 </div>
                 <div className="space-y-2 sm:col-span-2">
                   <label className="block text-xs font-bold uppercase tracking-wider text-gray-500">Email</label>
                   <input required type="email" className="w-full border border-gray-300 p-3 bg-gray-50 focus:bg-white focus:outline-none focus:border-hardware-orange transition-colors" />
                 </div>
                 <div className="space-y-2 sm:col-span-2">
                   <label className="block text-xs font-bold uppercase tracking-wider text-gray-500">Numéro de téléphone</label>
                   <input required type="tel" className="w-full border border-gray-300 p-3 bg-gray-50 focus:bg-white focus:outline-none focus:border-hardware-orange transition-colors" placeholder="Ex: 652557791" />
                 </div>
               </div>
             </section>

             {/* Section Livraison */}
             <section className="bg-white p-6 md:p-8 border border-gray-200">
               <h2 className="text-2xl font-display font-bold uppercase mb-6 flex items-center gap-3">
                 <span className="w-8 h-8 rounded-full bg-hardware-slate text-white flex items-center justify-center text-sm">2</span>
                 Mise à disposition
               </h2>
               
               <div className="grid gap-4">
                 <label className="border-2 border-hardware-orange bg-orange-50 p-4 cursor-pointer flex items-start gap-4">
                    <input type="radio" name="delivery" defaultChecked className="mt-1" />
                    <div>
                      <div className="font-bold uppercase text-sm mb-1 flex items-center gap-2"><MapPin className="w-4 h-4 text-hardware-orange" /> Retrait au magasin</div>
                      <p className="text-sm text-gray-600">Yaoundé, Cameroun. Gratuit et disponible dès validation du stock.</p>
                    </div>
                 </label>
                 
                 <label className="border border-gray-200 hover:border-gray-300 p-4 cursor-pointer flex items-start gap-4">
                    <input type="radio" name="delivery" className="mt-1" disabled />
                    <div>
                      <div className="font-bold uppercase text-sm mb-1 text-gray-400 flex items-center gap-2"><Truck className="w-4 h-4" /> Livraison à domicile (Sur devis uniquement)</div>
                      <p className="text-sm text-gray-500">Nos conseillers vous contacteront pour estimer les frais de livraison.</p>
                    </div>
                 </label>
               </div>
             </section>
             
          </div>
          
          <aside className="w-full lg:w-[450px] shrink-0">
             <div className="bg-hardware-black text-white p-8 sticky top-28">
               <h3 className="text-2xl font-display font-bold uppercase mb-6 border-b border-white/20 pb-4">Ma Commande</h3>
               
               <div className="space-y-4 mb-8 max-h-64 overflow-y-auto pr-2">
                 {items.map(item => (
                    <div key={item.id} className="flex gap-4">
                       <div className="w-16 h-16 bg-white p-1 shrink-0">
                          <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                       </div>
                       <div className="flex-1">
                          <h4 className="text-sm font-bold truncate" title={item.name}>{item.name}</h4>
                          <p className="text-xs text-gray-400 mb-1">Qté: {item.quantity}</p>
                          <p className="font-mono text-hardware-orange font-bold text-sm">{(item.price * item.quantity).toLocaleString('fr-FR')} FCFA</p>
                       </div>
                    </div>
                 ))}
               </div>
               
               <div className="flex justify-between items-end border-t border-white/20 pt-6 mb-8">
                 <span className="font-bold uppercase tracking-wider text-xl">Total À Payer</span>
                 <span className="font-display font-bold text-3xl text-hardware-orange">{cartTotal.toLocaleString('fr-FR')} FCFA</span>
               </div>
               
               <button type="submit" className="flex items-center justify-center gap-2 w-full bg-hardware-orange hover:bg-hardware-orange-hover text-white text-center font-bold uppercase py-5 tracking-widest transition-colors mb-4">
                  Confirmer la commande <Check className="w-5 h-5"/>
               </button>
               
               <div className="flex items-start gap-3 text-xs text-gray-400">
                  <ShieldCheck className="w-6 h-6 shrink-0 text-white" />
                  <p>Vos informations personnelles sont sécurisées. Le paiement sera effectué au moment du retrait de la marchandise.</p>
               </div>
             </div>
          </aside>

        </form>
      </div>
    </div>
  );
}
