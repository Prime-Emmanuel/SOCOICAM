import { Key, Ruler, Zap, Hammer } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

const SERVICES = [
  {
    id: 1,
    title: "Découpe sur mesure",
    description: "Bois, panneaux de particules, MDF, plexiglas et feuilles de métal. Apportez vos dimensions, nos experts effectuent la découpe au millimètre près dans notre atelier.",
    icon: <Ruler className="w-12 h-12" />,
    features: ["Précision millimétrique", "Gain de temps", "Tous types de bois"],
    image: "https://images.unsplash.com/photo-1534354228-db62423ba213?auto=format&fit=crop&q=80&w=800&h=500"
  },
  {
    id: 2,
    title: "Reproduction de clés",
    description: "Service minute pour la plupart des clés plates, clés à gorge et clés de sécurité. Reproduction de badges d'immeuble Vigik également disponible.",
    icon: <Key className="w-12 h-12" />,
    features: ["Service express", "Clés de sécurité", "Badges d'accès"],
    image: "https://images.unsplash.com/photo-1582139329536-e7284fece509?auto=format&fit=crop&q=80&w=800&h=500"
  },
  {
    id: 3,
    title: "Location de matériel",
    description: "Ne l'achetez pas pour un seul chantier ! Louez votre matériel professionnel (perceuse, burineur, ponceuse, nettoyeur haute pression) à la demi-journée ou à la journée.",
    icon: <Zap className="w-12 h-12" />,
    features: ["Matériel entretenu", "Tarifs dégressifs", "Conseils d'utilisation"],
    image: "https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&q=80&w=800&h=500"
  },
  {
    id: 4,
    title: "Service après-vente",
    description: "Réparation et entretien de votre outillage électroportatif de grandes marques sous garantie et hors garantie.",
    icon: <Hammer className="w-12 h-12" />,
    features: ["Diagnostic rapide", "Pièces d'origine", "Devis gratuit"],
    image: "https://images.unsplash.com/photo-1590958999905-aeed49ef07ff?auto=format&fit=crop&q=80&w=800&h=500"
  }
];

export default function Services() {
  return (
    <div className="bg-hardware-gray min-h-screen">
      {/* Header */}
      <section className="bg-hardware-slate text-white py-20 border-b-8 border-hardware-orange">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-6xl font-display font-bold uppercase tracking-tight mb-6">
            Bien plus qu'un <br/>
            <span className="text-hardware-orange">simple magasin.</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl font-light">
            Découvrez nos services en atelier pensés pour faciliter vos chantiers et garantir la réussite de vos projets.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {SERVICES.map((service, index) => (
            <div key={service.id} className={`flex flex-col lg:flex-row gap-12 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
              
              <div className="flex-1 w-full relative">
                <div className="aspect-video bg-gray-200 relative group overflow-hidden">
                   <div className="absolute inset-0 flex items-center justify-center text-hardware-orange opacity-20 group-hover:scale-110 transition-transform duration-700">
                      {service.icon}
                   </div>
                   <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover mix-blend-multiply opacity-80"
                    referrerPolicy="no-referrer"
                   />
                   <div className="absolute inset-0 border border-black/10 pointer-events-none" />
                </div>
                {/* Number indicator */}
                <div className="absolute -top-6 -left-6 font-display font-bold text-8xl text-hardware-orange opacity-20 pointer-events-none">
                  0{service.id}
                </div>
              </div>

              <div className="flex-1 w-full space-y-6">
                <div className="inline-block px-3 py-1 bg-white border border-gray-200 text-xs font-bold uppercase tracking-widest text-hardware-slate">
                  Service en magasin
                </div>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-hardware-black uppercase">{service.title}</h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {service.description}
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-gray-200">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                       <span className="w-1.5 h-1.5 bg-hardware-orange rounded-full" />
                       <span className="text-sm font-semibold text-hardware-slate">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-hardware-black text-white py-20 text-center">
         <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-3xl font-display font-bold uppercase mb-6">Une demande spécifique ?</h2>
            <p className="text-gray-400 mb-8">N'hésitez pas à nous contacter ou à passer en magasin. Nos conseillers étudieront votre besoin pour vous apporter la meilleure solution.</p>
            <Link to="/contact" className="inline-block border-2 border-hardware-orange text-hardware-orange hover:bg-hardware-orange hover:text-white font-bold uppercase px-8 py-4 tracking-widest transition-colors">
              Nous contacter
            </Link>
         </div>
      </section>
    </div>
  );
}
