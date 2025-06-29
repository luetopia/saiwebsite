import React from 'react';
import { MapPin, Phone, Mail, Globe } from 'lucide-react';
import FooterNewsletter from './FooterNewsletter';

const Footer = () => {
  return (
    <footer className="bg-red-900 text-white">
      {/* Newsletter Section */}
      <FooterNewsletter />
      
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-bold mb-4">Kontakt</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin size={18} className="mt-1 text-red-300" />
                <div>
                  <p>Südasien-Institut</p>
                  <p>Universität Heidelberg</p>
                  <p>Im Neuenheimer Feld 330</p>
                  <p>69120 Heidelberg</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={18} className="text-red-300" />
                <p>+49 6221 54-8900</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={18} className="text-red-300" />
                <a href="mailto:info@sai.uni-heidelberg.de" className="hover:text-red-300 transition-colors">
                  info@sai.uni-heidelberg.de
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Schnellzugriff</h3>
            <ul className="space-y-2">
              <li><a href="/forschung" className="hover:text-red-300 transition-colors">Forschungsbereiche</a></li>
              <li><a href="/personen" className="hover:text-red-300 transition-colors">Personenverzeichnis</a></li>
              <li><a href="/veranstaltungen" className="hover:text-red-300 transition-colors">Aktuelle Veranstaltungen</a></li>
              <li><a href="/publikationen" className="hover:text-red-300 transition-colors">Publikationen</a></li>
              <li><a href="/bibliothek" className="hover:text-red-300 transition-colors">Bibliothek</a></li>
            </ul>
          </div>

          {/* Academic Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Akademische Links</h3>
            <ul className="space-y-2">
              <li><a href="https://www.uni-heidelberg.de" className="hover:text-red-300 transition-colors">Universität Heidelberg</a></li>
              <li><a href="#" className="hover:text-red-300 transition-colors">Philosophische Fakultät</a></li>
              <li><a href="#" className="hover:text-red-300 transition-colors">Graduiertenschule</a></li>
              <li><a href="#" className="hover:text-red-300 transition-colors">Südasien-Netzwerk</a></li>
              <li><a href="#" className="hover:text-red-300 transition-colors">Internationale Kooperationen</a></li>
            </ul>
          </div>

          {/* Social & Resources */}
          <div>
            <h3 className="text-xl font-bold mb-4">Ressourcen</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-red-300 transition-colors">Stellenausschreibungen</a></li>
              <li><a href="#" className="hover:text-red-300 transition-colors">Für Studierende</a></li>
              <li><a href="#" className="hover:text-red-300 transition-colors">Förderungsmöglichkeiten</a></li>
              <li><a href="#" className="hover:text-red-300 transition-colors">Alumni-Netzwerk</a></li>
              <li><a href="#" className="hover:text-red-300 transition-colors">Bibliothek</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-red-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-6 mb-4 md:mb-0">
            <p>&copy; 2024 Südasien-Institut, Universität Heidelberg</p>
            <div className="flex items-center space-x-1">
              <Globe size={16} />
              <span className="text-sm">www.sai.uni-heidelberg.de</span>
            </div>
          </div>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="hover:text-red-300 transition-colors">Impressum</a>
            <a href="#" className="hover:text-red-300 transition-colors">Datenschutz</a>
            <a href="#" className="hover:text-red-300 transition-colors">Barrierefreiheit</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;