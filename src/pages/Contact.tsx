import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <div className="bg-hardware-gray min-h-screen">
      
      {/* Header */}
      <section className="bg-hardware-black text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-display font-bold uppercase tracking-tight mb-4">
            Demander un devis <br className="hidden md:block"/> ou un renseignement
          </h1>
          <p className="text-gray-400 max-w-xl">
            Notre équipe est à votre disposition pour vous conseiller et répondre à vos demandes de prix sur notre matériel.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            
            {/* Contact Form */}
            <div className="lg:col-span-3 bg-white p-8 border border-gray-200 shadow-sm">
              <h2 className="text-2xl font-display font-bold uppercase mb-8 border-b-2 border-hardware-orange inline-block pb-2">
                Envoyer un message
              </h2>
              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="firstname" className="block text-xs font-bold uppercase tracking-wider text-gray-500">Prénom</label>
                    <input type="text" id="firstname" className="w-full border border-gray-300 p-3 bg-gray-50 focus:bg-white focus:outline-none focus:border-hardware-orange transition-colors" placeholder="Jean" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="lastname" className="block text-xs font-bold uppercase tracking-wider text-gray-500">Nom</label>
                    <input type="text" id="lastname" className="w-full border border-gray-300 p-3 bg-gray-50 focus:bg-white focus:outline-none focus:border-hardware-orange transition-colors" placeholder="Dupont" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-gray-500">Email</label>
                  <input type="email" id="email" className="w-full border border-gray-300 p-3 bg-gray-50 focus:bg-white focus:outline-none focus:border-hardware-orange transition-colors" placeholder="jean.dupont@email.com" />
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="block text-xs font-bold uppercase tracking-wider text-gray-500">Sujet</label>
                  <select id="subject" className="w-full border border-gray-300 p-3 bg-gray-50 focus:bg-white focus:outline-none focus:border-hardware-orange transition-colors">
                    <option>Demande de devis</option>
                    <option>Disponibilité d'un produit (Stock)</option>
                    <option>Informations sur un service</option>
                    <option>Autre</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-gray-500">Message</label>
                  <textarea id="message" rows={5} className="w-full border border-gray-300 p-3 bg-gray-50 focus:bg-white focus:outline-none focus:border-hardware-orange transition-colors" placeholder="Précisez votre demande... (ex: réf produit, quantités)" />
                </div>

                <button type="button" onClick={(e) => { e.preventDefault(); alert("Ceci est un site vitrine / maquette. Le message n'est pas envoyé réel."); }} className="bg-hardware-black hover:bg-hardware-orange text-white font-bold uppercase px-8 py-4 tracking-widest transition-colors w-full sm:w-auto">
                  Envoyer ma demande
                </button>
              </form>
            </div>

            {/* Info Panel */}
            <div className="lg:col-span-2 space-y-8">
              
              <div className="bg-hardware-slate text-white p-8">
                 <h3 className="text-xl font-display font-bold uppercase mb-6 flex items-center gap-2">
                    <Clock className="w-5 h-5 text-hardware-orange" />
                    Horaires d'ouverture
                 </h3>
                 <ul className="space-y-3 text-sm">
                    <li className="flex justify-between border-b border-white/10 pb-2">
                       <span className="text-gray-300">Lundi - Vendredi</span>
                       <span className="font-semibold">07:30 - 19:00</span>
                    </li>
                    <li className="flex justify-between border-b border-white/10 pb-2">
                       <span className="text-gray-300">Samedi</span>
                       <span className="font-semibold">08:00 - 18:00</span>
                    </li>
                    <li className="flex justify-between text-gray-500 pb-2">
                       <span>Dimanche</span>
                       <span>Fermé</span>
                    </li>
                 </ul>
              </div>

              <div className="bg-white p-8 border border-gray-200">
                 <h3 className="text-xl font-display font-bold uppercase mb-6 text-hardware-black">Nos Coordonnées</h3>
                 <ul className="space-y-6 text-sm text-gray-600">
                    <li className="flex items-start gap-4">
                       <MapPin className="w-5 h-5 text-hardware-orange shrink-0 mt-0.5" />
                       <div>
                          <strong className="block text-hardware-black uppercase mb-1">Adresse</strong>
                          Yaoundé, Cameroun
                       </div>
                    </li>
                    <li className="flex items-start gap-4">
                       <Phone className="w-5 h-5 text-hardware-orange shrink-0 mt-0.5" />
                       <div>
                          <strong className="block text-hardware-black uppercase mb-1">Téléphone</strong>
                          652557791
                       </div>
                    </li>
                    <li className="flex items-start gap-4">
                       <Mail className="w-5 h-5 text-hardware-orange shrink-0 mt-0.5" />
                       <div>
                          <strong className="block text-hardware-black uppercase mb-1">Email</strong>
                          contact@socoicam.cm
                       </div>
                    </li>
                 </ul>
              </div>

            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
