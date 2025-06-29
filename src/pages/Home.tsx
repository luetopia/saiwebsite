import React from 'react';
import { ArrowRight, BookOpen, Users, Globe, Calendar, Microscope, MapPin, History, Languages, GraduationCap, X, ExternalLink, Building2, Award, Target } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [isBannerVisible, setIsBannerVisible] = React.useState(true);
  const [isCatsBannerVisible, setIsCatsBannerVisible] = React.useState(true);

  const newsItems = [
    {
      id: 1,
      title: "Neue Forschungskooperation mit der Jawaharlal Nehru University",
      date: "15. November 2024",
      summary: "Das SAI erweitert seine internationalen Partnerschaften durch eine neue Kooperation mit der renommierten JNU in Neu-Delhi.",
      category: "Kooperationen"
    },
    {
      id: 2,
      title: "Internationale Konferenz: 'Südasien im 21. Jahrhundert'",
      date: "08. November 2024",
      summary: "Über 150 Wissenschaftler diskutieren aktuelle Entwicklungen in Politik, Wirtschaft und Gesellschaft Südasiens.",
      category: "Veranstaltungen"
    },
    {
      id: 3,
      title: "Neues DFG-Projekt zu Klimawandel und Migration bewilligt",
      date: "25. Oktober 2024",
      summary: "Das SAI erhält Förderung für ein dreijähriges Forschungsprojekt zu den Auswirkungen des Klimawandels auf Migrationsbewegungen.",
      category: "Forschung"
    }
  ];

  const upcomingEvents = [
    {
      id: 1,
      title: "Gastvorlesung: 'Indien und die globale Wirtschaft'",
      date: "28. November 2024",
      time: "18:00 Uhr",
      location: "Hörsaal SAI"
    },
    {
      id: 2,
      title: "Workshop: Digital Humanities in der Südasienforschung",
      date: "05. Dezember 2024",
      time: "09:00-17:00 Uhr",
      location: "Seminarraum 1+2"
    },
    {
      id: 3,
      title: "Kolloquium: Aktuelle Forschungsprojekte",
      date: "12. Dezember 2024",
      time: "14:00 Uhr",
      location: "Konferenzraum SAI"
    }
  ];

  const researchAreas = [
    {
      title: "Ethnologie",
      description: "Erforschung der kulturellen Vielfalt und sozialen Strukturen der Völker Südasiens",
      icon: <Users className="w-8 h-8 text-red-600" />
    },
    {
      title: "Kultur- und Religionsgeschichte",
      description: "Untersuchung religiöser Traditionen, kultureller Entwicklungen und geistiger Strömungen",
      icon: <BookOpen className="w-8 h-8 text-purple-600" />
    },
    {
      title: "Entwicklungsökonomie",
      description: "Analyse wirtschaftlicher Entwicklungsprozesse und Entwicklungspolitik in Südasien",
      icon: <Globe className="w-8 h-8 text-green-600" />
    },
    {
      title: "Geographie",
      description: "Erforschung der physischen und humangeographischen Strukturen der südasiatischen Region",
      icon: <MapPin className="w-8 h-8 text-orange-600" />
    },
    {
      title: "Geschichte",
      description: "Historische Entwicklungen von der Antike bis zur Gegenwart in Südasien",
      icon: <History className="w-8 h-8 text-yellow-600" />
    },
    {
      title: "Neusprachliche Südasienstudien",
      description: "Moderne Sprachen, Literatur und Sprachwissenschaft der südasiatischen Region",
      icon: <Languages className="w-8 h-8 text-indigo-600" />
    },
    {
      title: "Politikwissenschaft",
      description: "Politische Systeme, Governance und gesellschaftliche Entwicklungen in Südasien",
      icon: <Microscope className="w-8 h-8 text-teal-600" />
    }
  ];

  const studyPrograms = [
    {
      title: "B.A. South Asian Studies",
      type: "Bachelor",
      duration: "6 Semester",
      description: "Interdisziplinärer Bachelorstudiengang mit umfassender Einführung in die Südasienstudien",
      features: ["Sprachausbildung", "Auslandssemester", "Praxisprojekte"]
    },
    {
      title: "M.A. South Asian Studies",
      type: "Master",
      duration: "4 Semester",
      description: "Vertiefende Auseinandersetzung mit verschiedenen Aspekten der Südasienforschung",
      features: ["Forschungsorientiert", "Spezialisierung", "Internationale Kooperationen"]
    },
    {
      title: "M.A. Modern South and Southeast Asian Studies",
      type: "Master",
      duration: "4 Semester",
      description: "Englischsprachiger Masterstudiengang mit vergleichender Perspektive",
      features: ["Vollständig englischsprachig", "International", "Doppelabschluss"]
    },
    {
      title: "M.A. Governance and Public Policy",
      type: "Master",
      duration: "4 Semester",
      description: "Spezialisierung auf Governance-Strukturen und öffentliche Politik",
      features: ["Praxisorientiert", "Kooperationen", "Projektbasiert"]
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-900 to-red-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Willkommen am Südasien-Institut
              </h1>
              <p className="text-xl lg:text-2xl mb-8 text-red-100">
                Interdisziplinäre Forschung und Lehre zu einer der dynamischsten Regionen der Welt
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link
                  to="/forschung"
                  className="bg-white text-red-900 px-8 py-3 rounded-lg font-semibold hover:bg-red-50 transition-colors inline-flex items-center"
                >
                  Forschung entdecken
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  to="/institut"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-red-900 transition-colors"
                >
                  Über uns
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="bg-red-800 rounded-lg p-8 shadow-2xl">
                <h3 className="text-2xl font-bold mb-4">Das SAI in Zahlen</h3>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-red-200">50+</div>
                    <div className="text-sm">Wissenschaftler</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-red-200">8</div>
                    <div className="text-sm">Länder im Fokus</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-red-200">25+</div>
                    <div className="text-sm">Aktive Projekte</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-red-200">60</div>
                    <div className="text-sm">Jahre Expertise</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* News */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">Aktuelles</h2>
            <Link
              to="/aktuelles"
              className="text-red-600 hover:text-red-800 font-semibold inline-flex items-center"
            >
              Alle Nachrichten
              <ArrowRight className="ml-1 w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {newsItems.map((item) => (
              <article key={item.id} className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center space-x-2 mb-2">
                  <span className="bg-red-100 text-red-800 text-xs font-semibold px-2 py-1 rounded">
                    {item.category}
                  </span>
                  <span className="text-gray-500 text-sm">{item.date}</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 hover:text-red-600 cursor-pointer">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.summary}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ECSAS Banner */}
      {isBannerVisible && (
        <section className="bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 text-white py-6 px-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-black opacity-10"></div>
          <div className="relative max-w-7xl mx-auto">
            <div className="flex items-center justify-between">
              <div className="flex-1 text-center">
                <div className="flex items-center justify-center space-x-2 text-lg md:text-xl font-bold mb-2">
                  <span className="text-yellow-100">🌟</span>
                  <span>Besuchen Sie die European Conference on South Asian Studies (ECSAS) 2025!</span>
                  <span className="text-yellow-100">🌟</span>
                </div>
                <div className="text-sm md:text-base mb-4">
                  <span className="font-semibold">23.-26. Juli | Wien, Österreich</span>
                  <span className="mx-2">•</span>
                  <span>Europas größte Konferenz für Südasien-Studien</span>
                </div>
                <a
                  href="https://ecsas2025.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-orange-600 px-6 py-2 rounded-full font-semibold hover:bg-orange-50 transition-colors inline-flex items-center"
                >
                  Jetzt anmelden
                  <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </div>
              
              <button
                onClick={() => setIsBannerVisible(false)}
                className="text-white hover:text-yellow-200 transition-colors p-2 ml-4"
                aria-label="Banner schließen"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>
        </section>
      )}

      {/* Research Areas */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Unsere Forschungsbereiche
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Das SAI erforscht Südasien in seiner gesamten Vielfalt - von den Himalaya-Regionen bis zu den Inselstaaten im Indischen Ozean
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {researchAreas.map((area, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="mb-4">{area.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{area.title}</h3>
                <p className="text-gray-600 mb-4 text-sm">{area.description}</p>
                <Link
                  to="/forschung"
                  className="text-red-600 hover:text-red-800 font-semibold inline-flex items-center text-sm"
                >
                  Mehr erfahren
                  <ArrowRight className="ml-1 w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Study Programs */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <GraduationCap className="w-12 h-12 text-red-600 mx-auto mb-4" />
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Studieren am SAI
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Entdecken Sie unsere Bachelor- und Masterstudiengänge in den Südasienstudien
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {studyPrograms.map((program, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    program.type === 'Bachelor' 
                      ? 'bg-red-100 text-red-800' 
                      : 'bg-green-100 text-green-800'
                  }`}>
                    {program.type}
                  </span>
                  <span className="text-sm text-gray-500">{program.duration}</span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">{program.title}</h3>
                <p className="text-gray-600 mb-4">{program.description}</p>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Besonderheiten:</h4>
                  <div className="flex flex-wrap gap-2">
                    {program.features.map((feature, featureIndex) => (
                      <span
                        key={featureIndex}
                        className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <Link
              to="/studieren-am-sai"
              className="bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors inline-flex items-center"
            >
              Alle Studiengänge entdecken
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Das Südasien-Institut Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <Building2 className="w-10 h-10 text-red-600 mr-4" />
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                  Das Südasien-Institut
                </h2>
              </div>
              
              <p className="text-lg text-gray-600 mb-6">
                Das Südasien-Institut (SAI) der Universität Heidelberg ist Deutschlands führende 
                Forschungseinrichtung für die wissenschaftliche Auseinandersetzung mit Südasien. 
                Seit über 60 Jahren erforschen wir diese kulturell, politisch und wirtschaftlich 
                bedeutende Region mit einem interdisziplinären Ansatz.
              </p>
              
              <p className="text-gray-600 mb-8">
                Als Teil der Universität Heidelberg und des Centre for Asian and Transcultural 
                Studies (CATS) verbinden wir traditionelle geisteswissenschaftliche Methoden 
                mit innovativen Forschungsansätzen und modernster Technologie.
              </p>
              
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="text-center p-4 bg-red-50 rounded-lg">
                  <Target className="w-8 h-8 text-red-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-red-600">7</div>
                  <div className="text-sm text-gray-600">Abteilungen</div>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <Building2 className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-blue-600">2</div>
                  <div className="text-sm text-gray-600">Außenstellen</div>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <Award className="w-8 h-8 text-green-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-green-600">1963</div>
                  <div className="text-sm text-gray-600">Gegründet</div>
                </div>
              </div>
              
              <Link
                to="/institut"
                className="bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors inline-flex items-center"
              >
                Mehr über das Institut
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
            
            <div className="bg-gradient-to-br from-red-50 to-pink-100 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Unsere Mission</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-600 rounded-full mt-2"></div>
                  <p className="text-gray-700">
                    <strong>Exzellente Forschung:</strong> Interdisziplinäre Erforschung Südasiens 
                    auf höchstem wissenschaftlichen Niveau
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                  <p className="text-gray-700">
                    <strong>Innovative Lehre:</strong> Ausbildung der nächsten Generation 
                    von Südasien-Experten
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2"></div>
                  <p className="text-gray-700">
                    <strong>Gesellschaftlicher Dialog:</strong> Brückenbau zwischen Wissenschaft, 
                    Politik und Gesellschaft
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-orange-600 rounded-full mt-2"></div>
                  <p className="text-gray-700">
                    <strong>Internationale Vernetzung:</strong> Enge Kooperationen mit Partnern 
                    in Südasien und weltweit
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CATS Banner */}
      {isCatsBannerVisible && (
        <section className="bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 text-white py-12 px-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-black opacity-20"></div>
          <div className="relative max-w-7xl mx-auto">
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                  {/* Logo/Icon Section */}
                  <div className="text-center lg:text-left">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-white bg-opacity-20 rounded-full mb-4">
                      <Building2 className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">CATS</h3>
                    <p className="text-yellow-100 text-sm">Centre for Asian and Transcultural Studies</p>
                  </div>
                  
                  {/* Content Section */}
                  <div className="lg:col-span-2">
                    <h2 className="text-2xl lg:text-3xl font-bold mb-4">
                      Entdecken Sie das CATS der Universität Heidelberg
                    </h2>
                    <p className="text-yellow-100 mb-6 text-lg">
                      Das Centre for Asian and Transcultural Studies (CATS) ist ein interdisziplinäres 
                      Forschungszentrum, das sich der Erforschung Asiens und transkultureller Prozesse widmet. 
                      Als größtes Zentrum seiner Art in Europa vereint es verschiedene Institute und 
                      Forschungsbereiche unter einem Dach.
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-4">
                      <a
                        href="https://www.cats.uni-heidelberg.de/index_en.html"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white text-orange-600 px-6 py-3 rounded-lg font-semibold hover:bg-orange-50 transition-colors inline-flex items-center justify-center"
                      >
                        Mehr über CATS erfahren
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </a>
                      
                      <div className="flex items-center space-x-4 text-yellow-100">
                        <div className="text-center">
                          <div className="text-xl font-bold">7</div>
                          <div className="text-xs">Institute</div>
                        </div>
                        <div className="text-center">
                          <div className="text-xl font-bold">200+</div>
                          <div className="text-xs">Forscher</div>
                        </div>
                        <div className="text-center">
                          <div className="text-xl font-bold">40+</div>
                          <div className="text-xs">Länder</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <button
                onClick={() => setIsCatsBannerVisible(false)}
                className="text-white hover:text-yellow-200 transition-colors p-2 ml-4"
                aria-label="CATS Banner schließen"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>
        </section>
      )}

      {/* Events Section - Moved here after CATS Banner */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">Veranstaltungen</h2>
            <Link
              to="/veranstaltungen"
              className="text-red-600 hover:text-red-800 font-semibold inline-flex items-center"
            >
              Alle Termine
              <ArrowRight className="ml-1 w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {upcomingEvents.map((event) => (
              <div key={event.id} className="bg-white rounded-lg p-6 shadow-sm border-l-4 border-red-500">
                <div className="flex items-start space-x-4">
                  <div className="bg-red-100 rounded-lg p-3">
                    <Calendar className="w-6 h-6 text-red-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 mb-1">{event.title}</h3>
                    <div className="text-sm text-gray-600 space-y-1">
                      <p><strong>Datum:</strong> {event.date}</p>
                      <p><strong>Zeit:</strong> {event.time}</p>
                      <p><strong>Ort:</strong> {event.location}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-red-900 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Werden Sie Teil unserer Forschungsgemeinschaft
          </h2>
          <p className="text-xl text-red-100 mb-8 max-w-3xl mx-auto">
            Entdecken Sie Karrieremöglichkeiten, Studienprogramme und Kooperationsmöglichkeiten am SAI
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link
              to="/personen"
              className="bg-white text-red-900 px-8 py-3 rounded-lg font-semibold hover:bg-red-50 transition-colors"
            >
              Stellenausschreibungen
            </Link>
            <Link
              to="/kontakt"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-red-900 transition-colors"
            >
              Kontakt aufnehmen
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;