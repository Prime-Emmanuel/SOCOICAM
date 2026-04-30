import { Link } from 'react-router-dom';
import { Hammer, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-hardware-black text-gray-400 border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-6 opacity-90 transition-opacity hover:opacity-100">
              <div className="bg-hardware-orange p-1.5 rounded-sm">
                <Hammer className="text-white w-5 h-5" />
              </div>
              <span className="font-display font-bold text-xl tracking-tight text-white">
                SOCOI<span className="text-hardware-orange">CAM</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed mb-6">
              Votre partenaire de confiance pour tous vos besoins en outillage, plomberie, électricité et matériaux de construction.
            </p>
          </div>

          <div>
            <h3 className="text-white font-display font-semibold tracking-wider uppercase text-sm mb-6">Navigation</h3>
            <ul className="space-y-4">
              <li><Link to="/" className="hover:text-hardware-orange transition-colors text-sm">Accueil</Link></li>
              <li><Link to="/boutique" className="hover:text-hardware-orange transition-colors text-sm">Boutique & Catalogue</Link></li>
              <li><Link to="/services" className="hover:text-hardware-orange transition-colors text-sm">Nos Services</Link></li>
              <li><Link to="/contact" className="hover:text-hardware-orange transition-colors text-sm">Nous Contacter</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-display font-semibold tracking-wider uppercase text-sm mb-6">Nos Services</h3>
            <ul className="space-y-4">
              <li className="text-sm">Découpe de bois sur mesure</li>
              <li className="text-sm">Location de matériel professionnel</li>
              <li className="text-sm">Reproduction de clés</li>
              <li className="text-sm">Livraison sur chantier</li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-display font-semibold tracking-wider uppercase text-sm mb-6">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-hardware-orange shrink-0 mt-0.5" />
                <span className="text-sm">Yaoundé, Cameroun</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-hardware-orange shrink-0" />
                <span className="text-sm">652557791</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-hardware-orange shrink-0" />
                <span className="text-sm">contact@socoicam.cm</span>
              </li>
            </ul>
          </div>
          
        </div>
        
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs tracking-wide">
            &copy; {new Date().getFullYear()} SOCOICAM. Tous droits réservés.
          </p>
          <div className="flex gap-6 text-xs hover:text-white transition-colors cursor-pointer">
            <span className="hover:text-hardware-orange transition-colors">Mentions Légales</span>
            <span className="hover:text-hardware-orange transition-colors">Politique de Confidentialité</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
