import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, User, MessageSquare } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    category: 'Allgemeine Anfrage'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const categories = [
    'Allgemeine Anfrage',
    'Forschungskooperation',
    'Studienanfrage',
    'Presseanfrage',
    'Veranstaltung',
    'Bibliothek',
    'Bewerbung'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    alert('Vielen Dank für Ihre Nachricht! Wir werden uns zeitnah bei Ihnen melden.');
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
      category: 'Allgemeine Anfrage'
    });
    setIsSubmitting(false);
  };

  const departments = [
    {
      name: "Direktion",
      contact: "Prof. Dr. Maria Schmidt",
      email: "direktion@sai.uni-heidelberg.de",
      phone: "+49 6221 54-8900",
      office: "Raum 201"
    },
    {
      name: "Studienberatung",
      contact: "Dr. Sarah Weber",
      email: "studienberatung@sai.uni-heidelberg.de",
      phone: "+49 6221 54-8910",
      office: "Raum 105"
    },
    {
      name: "Forschungskoordination",
      contact: "Prof. Dr. Klaus Müller",
      email: "forschung@sai.uni-heidelberg.de",
      phone: "+49 6221 54-8920",
      office: "Raum 230"
    },
    {
      name: "Bibliothek",
      contact: "Thomas Hoffmann",
      email: "bibliothek@sai.uni-heidelberg.de",
      phone: "+49 6221 54-8930",
      office: "Bibliothek"
    },
    {
      name: "Internationale Beziehungen",
      contact: "Dr. Priya Sharma",
      email: "international@sai.uni-heidelberg.de",
      phone: "+49 6221 54-8940",
      office: "Raum 118"
    },
    {
      name: "Verwaltung",
      contact: "Andrea Bauer",
      email: "verwaltung@sai.uni-heidelberg.de",
      phone: "+49 6221 54-8950",
      office: "Raum 001"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Kontakt zum SAI
            </h1>
            <p className="text-xl lg:text-2xl text-blue-100">
              Wir freuen uns auf Ihre Anfragen und den Austausch mit Ihnen
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Kontaktinformationen</h2>
              
              {/* Main Contact */}
              <div className="bg-blue-50 rounded-xl p-6 mb-8">
                <h3 className="text-xl font-bold text-blue-900 mb-4">Hauptkontakt</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-6 h-6 text-blue-600 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-900">Südasien-Institut (SAI)</p>
                      <p className="text-gray-700">Universität Heidelberg</p>
                      <p className="text-gray-700">Im Neuenheimer Feld 330</p>
                      <p className="text-gray-700">69120 Heidelberg</p>
                      <p className="text-gray-700">Deutschland</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Phone className="w-6 h-6 text-blue-600" />
                    <div>
                      <p className="font-semibold text-gray-900">Telefon</p>
                      <p className="text-gray-700">+49 6221 54-8900</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Mail className="w-6 h-6 text-blue-600" />
                    <div>
                      <p className="font-semibold text-gray-900">E-Mail</p>
                      <a href="mailto:info@sai.uni-heidelberg.de" className="text-blue-600 hover:text-blue-800 transition-colors">
                        info@sai.uni-heidelberg.de
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Clock className="w-6 h-6 text-blue-600 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-900">Öffnungszeiten</p>
                      <p className="text-gray-700">Mo-Fr: 9:00-17:00 Uhr</p>
                      <p className="text-gray-700">Termine nach Vereinbarung</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map placeholder */}
              <div className="bg-gray-200 rounded-xl h-64 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                  <p className="text-gray-600">Interaktive Karte</p>
                  <p className="text-sm text-gray-500">Im Neuenheimer Feld 330, Heidelberg</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Kontaktformular</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Name *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Ihr vollständiger Name"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      E-Mail *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="ihre.email@beispiel.de"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">
                    Kategorie
                  </label>
                  <select
                    id="category"
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    {categories.map(category => (
                      <option key={category} value={category}>{category}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Betreff *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Kurze Beschreibung Ihres Anliegens"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Nachricht *
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Bitte beschreiben Sie Ihr Anliegen ausführlich..."
                    />
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-sm text-gray-600">
                    * Pflichtfelder. Ihre Daten werden vertraulich behandelt und nur zur Bearbeitung 
                    Ihrer Anfrage verwendet. Weitere Informationen finden Sie in unserer 
                    <a href="#" className="text-blue-600 hover:text-blue-800 ml-1">Datenschutzerklärung</a>.
                  </p>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors inline-flex items-center justify-center ${
                    isSubmitting
                      ? 'bg-gray-400 text-gray-600 cursor-not-allowed'
                      : 'bg-blue-600 text-white hover:bg-blue-700'
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Wird gesendet...
                    </>
                  ):(
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Nachricht senden
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Department Contacts */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Direkte Ansprechpartner
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Für spezielle Anfragen wenden Sie sich direkt an die entsprechenden Abteilungen
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {departments.map((dept, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-lg font-bold text-gray-900 mb-3">{dept.name}</h3>
                <div className="space-y-2 text-sm">
                  <div>
                    <span className="font-medium text-gray-700">Kontakt:</span>
                    <p className="text-gray-600">{dept.contact}</p>
                  </div>
                  <div>
                    <span className="font-medium text-gray-700">E-Mail:</span>
                    <a href={`mailto:${dept.email}`} className="text-blue-600 hover:text-blue-800 transition-colors block">
                      {dept.email}
                    </a>
                  </div>
                  <div>
                    <span className="font-medium text-gray-700">Telefon:</span>
                    <p className="text-gray-600">{dept.phone}</p>
                  </div>
                  <div>
                    <span className="font-medium text-gray-700">Büro:</span>
                    <p className="text-gray-600">{dept.office}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visit Information */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Besuchen Sie uns
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Das Südasien-Institut befindet sich im Neuenheimer Feld, dem Wissenschaftscampus 
                der Universität Heidelberg. Wir freuen uns auf Ihren Besuch!
              </p>
              
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Anfahrt mit öffentlichen Verkehrsmitteln:</h3>
                  <ul className="text-gray-600 space-y-1">
                    <li>• Bus 32 bis Haltestelle "Bunsengymnasium"</li>
                    <li>• Bus 35 bis Haltestelle "Neuenheimer Feld"</li>
                    <li>• Vom Hauptbahnhof ca. 20 Minuten</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Parkmöglichkeiten:</h3>
                  <ul className="text-gray-600 space-y-1">
                    <li>• Begrenzte Parkplätze am Institut</li>
                    <li>• Parkhaus Neuenheimer Feld (5 Min. Fußweg)</li>
                    <li>• Öffentliche Parkplätze in der Umgebung</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-blue-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-blue-900 mb-6">Besucherinformationen</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Clock className="w-6 h-6 text-blue-600 mt-1" />
                  <div>
                    <p className="font-semibold text-blue-900">Öffnungszeiten</p>
                    <p className="text-blue-800">Mo-Fr: 9:00-17:00 Uhr</p>
                    <p className="text-blue-700 text-sm">Termine außerhalb der Öffnungszeiten nach Vereinbarung</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <User className="w-6 h-6 text-blue-600 mt-1" />
                  <div>
                    <p className="font-semibold text-blue-900">Anmeldung</p>
                    <p className="text-blue-800">Für Besuche bitte vorher anmelden</p>
                    <p className="text-blue-700 text-sm">Spontane Besuche sind möglich, aber nicht garantiert</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <MapPin className="w-6 h-6 text-blue-600 mt-1" />
                  <div>
                    <p className="font-semibold text-blue-900">Orientierung</p>
                    <p className="text-blue-800">Gebäude im Neuenheimer Feld 330</p>
                    <p className="text-blue-700 text-sm">Beschilderung ab Haupteingang vorhanden</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;