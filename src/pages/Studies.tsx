import React from 'react';
import { GraduationCap, BookOpen, Users, Globe, Calendar, Clock, MapPin, ArrowRight, CheckCircle } from 'lucide-react';

const Studies = () => {
  const bachelorProgram = {
    title: "B.A. South Asian Studies",
    duration: "6 Semester",
    degree: "Bachelor of Arts",
    language: "Deutsch/Englisch",
    description: "Der Bachelorstudiengang South Asian Studies bietet eine fundierte interdisziplinäre Ausbildung in den Südasienstudien. Studierende erwerben umfassende Kenntnisse über die Geschichte, Politik, Wirtschaft, Kultur und Sprachen Südasiens.",
    features: [
      "Interdisziplinärer Ansatz",
      "Sprachausbildung in südasiatischen Sprachen",
      "Auslandssemester möglich",
      "Praxisorientierte Projekte",
      "Kleine Seminargruppen",
      "Individuelle Betreuung"
    ],
    modules: [
      "Einführung in die Südasienstudien",
      "Geschichte Südasiens",
      "Politik und Gesellschaft",
      "Wirtschaft und Entwicklung",
      "Kultur und Religion",
      "Sprachausbildung",
      "Methodische Grundlagen",
      "Bachelorarbeit"
    ]
  };

  const masterPrograms = [
    {
      title: "M.A. South Asian Studies",
      duration: "4 Semester",
      degree: "Master of Arts",
      language: "Deutsch/Englisch",
      description: "Der Masterstudiengang South Asian Studies vertieft die im Bachelor erworbenen Kenntnisse und ermöglicht eine Spezialisierung in verschiedenen Bereichen der Südasienforschung.",
      specializations: [
        "Politik und Internationale Beziehungen",
        "Wirtschaft und Entwicklung",
        "Kultur- und Religionswissenschaft",
        "Geschichte und Gesellschaft"
      ],
      features: [
        "Forschungsorientierte Ausbildung",
        "Internationale Kooperationen",
        "Feldforschungsmöglichkeiten",
        "Mentoring-Programm"
      ]
    },
    {
      title: "M.A. Modern South and Southeast Asian Studies",
      duration: "4 Semester", 
      degree: "Master of Arts",
      language: "Englisch",
      description: "Ein englischsprachiger Masterstudiengang, der sich auf die moderne Entwicklung Süd- und Südostasiens konzentriert und eine vergleichende Perspektive bietet.",
      specializations: [
        "Comparative Politics",
        "Economic Development",
        "Cultural Studies",
        "International Relations"
      ],
      features: [
        "Vollständig englischsprachig",
        "Internationale Studierendenschaft",
        "Doppelabschluss-Programme",
        "Praktika in der Region"
      ]
    },
    {
      title: "M.A. Governance and Public Policy - South Asia",
      duration: "4 Semester",
      degree: "Master of Arts", 
      language: "Englisch",
      description: "Spezialisierter Masterstudiengang mit Fokus auf Governance-Strukturen und öffentliche Politik in Südasien, entwickelt in Kooperation mit regionalen Partnern.",
      specializations: [
        "Public Administration",
        "Policy Analysis",
        "Development Governance",
        "Regional Cooperation"
      ],
      features: [
        "Praxisorientierte Ausbildung",
        "Kooperation mit Regierungsorganisationen",
        "Gastdozenten aus der Praxis",
        "Projektbasiertes Lernen"
      ]
    }
  ];

  const applicationInfo = {
    deadlines: {
      bachelor: "15. Juli (Wintersemester)",
      master: "15. März (Wintersemester), 15. September (Sommersemester)"
    },
    requirements: {
      bachelor: [
        "Allgemeine Hochschulreife",
        "Gute Englischkenntnisse",
        "Interesse an interdisziplinären Studien",
        "Keine Vorkenntnisse in südasiatischen Sprachen erforderlich"
      ],
      master: [
        "Abgeschlossenes Bachelorstudium (mind. 2,5)",
        "Nachweis von Englischkenntnissen",
        "Motivationsschreiben",
        "Empfehlungsschreiben"
      ]
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-900 to-red-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <GraduationCap className="w-16 h-16 mx-auto mb-6 text-red-200" />
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Studieren am SAI
            </h1>
            <p className="text-xl lg:text-2xl text-red-100">
              Entdecken Sie unsere Bachelor- und Masterstudiengänge in den Südasienstudien
            </p>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Unsere Studienprogramme
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Das SAI bietet ein umfassendes Studienangebot von der Bachelor- bis zur Masterebene 
              mit verschiedenen Spezialisierungsmöglichkeiten in den Südasienstudien.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="text-center p-6 bg-red-50 rounded-xl">
              <div className="text-3xl font-bold text-red-600 mb-2">1</div>
              <div className="text-sm text-gray-700">Bachelor-Studiengang</div>
            </div>
            <div className="text-center p-6 bg-green-50 rounded-xl">
              <div className="text-3xl font-bold text-green-600 mb-2">3</div>
              <div className="text-sm text-gray-700">Master-Studiengänge</div>
            </div>
            <div className="text-center p-6 bg-purple-50 rounded-xl">
              <div className="text-3xl font-bold text-purple-600 mb-2">200+</div>
              <div className="text-sm text-gray-700">Studierende</div>
            </div>
            <div className="text-center p-6 bg-orange-50 rounded-xl">
              <div className="text-3xl font-bold text-orange-600 mb-2">15+</div>
              <div className="text-sm text-gray-700">Partneruniversitäten</div>
            </div>
          </div>
        </div>
      </section>

      {/* Bachelor Program */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="bg-red-100 rounded-lg p-6 mb-6">
                <h2 className="text-3xl font-bold text-red-900 mb-4">{bachelorProgram.title}</h2>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="font-semibold text-red-800">Dauer:</span>
                    <p className="text-red-700">{bachelorProgram.duration}</p>
                  </div>
                  <div>
                    <span className="font-semibold text-red-800">Abschluss:</span>
                    <p className="text-red-700">{bachelorProgram.degree}</p>
                  </div>
                  <div>
                    <span className="font-semibold text-red-800">Sprache:</span>
                    <p className="text-red-700">{bachelorProgram.language}</p>
                  </div>
                  <div>
                    <span className="font-semibold text-red-800">Beginn:</span>
                    <p className="text-red-700">Wintersemester</p>
                  </div>
                </div>
              </div>
              
              <p className="text-gray-600 mb-6">{bachelorProgram.description}</p>
              
              <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Besonderheiten des Studiengangs</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {bachelorProgram.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Studienmodule</h3>
                <div className="space-y-3">
                  {bachelorProgram.modules.map((module, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-red-600 text-xs font-bold">{index + 1}</span>
                      </div>
                      <span className="text-gray-700">{module}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Master Programs */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Master-Studiengänge
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Drei spezialisierte Masterstudiengänge für eine vertiefte Auseinandersetzung 
              mit verschiedenen Aspekten Südasiens
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {masterPrograms.map((program, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{program.title}</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Dauer:</span>
                      <span className="font-medium">{program.duration}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Abschluss:</span>
                      <span className="font-medium">{program.degree}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Sprache:</span>
                      <span className="font-medium">{program.language}</span>
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-6 text-sm">{program.description}</p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Spezialisierungen:</h4>
                  <ul className="space-y-1">
                    {program.specializations.map((spec, specIndex) => (
                      <li key={specIndex} className="text-sm text-gray-600 flex items-center">
                        <div className="w-1.5 h-1.5 bg-red-600 rounded-full mr-2"></div>
                        {spec}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Besonderheiten:</h4>
                  <ul className="space-y-1">
                    {program.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-sm text-gray-600 flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <button className="w-full bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 transition-colors">
                  Mehr Informationen
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Information */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Bewerbung und Zulassung
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Informationen zu Bewerbungsfristen, Zulassungsvoraussetzungen und dem Bewerbungsprozess
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Deadlines */}
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="flex items-center mb-6">
                <Calendar className="w-8 h-8 text-red-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">Bewerbungsfristen</h3>
              </div>
              
              <div className="space-y-6">
                <div className="border-l-4 border-red-500 pl-4">
                  <h4 className="font-bold text-gray-900 mb-2">Bachelor-Studiengang</h4>
                  <p className="text-gray-600">{applicationInfo.deadlines.bachelor}</p>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-bold text-gray-900 mb-2">Master-Studiengänge</h4>
                  <p className="text-gray-600">{applicationInfo.deadlines.master}</p>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-yellow-50 rounded-lg">
                <p className="text-sm text-yellow-800">
                  <strong>Hinweis:</strong> Internationale Bewerber sollten sich frühzeitig über 
                  Visa-Bestimmungen und zusätzliche Anforderungen informieren.
                </p>
              </div>
            </div>
            
            {/* Requirements */}
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="flex items-center mb-6">
                <CheckCircle className="w-8 h-8 text-green-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">Zulassungsvoraussetzungen</h3>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-gray-900 mb-3">Bachelor-Studiengang</h4>
                  <ul className="space-y-2">
                    {applicationInfo.requirements.bachelor.map((req, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
                        <span className="text-gray-600 text-sm">{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-bold text-gray-900 mb-3">Master-Studiengänge</h4>
                  <ul className="space-y-2">
                    {applicationInfo.requirements.master.map((req, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
                        <span className="text-gray-600 text-sm">{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Student Life */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Studentisches Leben am SAI
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Entdecken Sie die vielfältigen Möglichkeiten und Aktivitäten für Studierende am SAI
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-red-50 rounded-xl">
              <Users className="w-12 h-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">Studierendenvertretung</h3>
              <p className="text-gray-600 text-sm">Aktive Fachschaft und studentische Mitbestimmung</p>
            </div>
            
            <div className="text-center p-6 bg-green-50 rounded-xl">
              <Globe className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">Auslandssemester</h3>
              <p className="text-gray-600 text-sm">Studium an Partneruniversitäten in Südasien</p>
            </div>
            
            <div className="text-center p-6 bg-purple-50 rounded-xl">
              <BookOpen className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">Bibliothek</h3>
              <p className="text-gray-600 text-sm">Umfangreiche Sammlung südasiatischer Literatur</p>
            </div>
            
            <div className="text-center p-6 bg-orange-50 rounded-xl">
              <Calendar className="w-12 h-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">Veranstaltungen</h3>
              <p className="text-gray-600 text-sm">Regelmäßige Vorträge, Workshops und Kulturveranstaltungen</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact and Information */}
      <section className="py-16 bg-red-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Interesse an einem Studium am SAI?
              </h2>
              <p className="text-xl text-red-100 mb-8">
                Kontaktieren Sie unsere Studienberatung für weitere Informationen 
                oder vereinbaren Sie einen Beratungstermin.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <MapPin className="w-6 h-6 text-red-300" />
                  <div>
                    <p className="font-semibold">Studienberatung SAI</p>
                    <p className="text-red-200">Im Neuenheimer Feld 330, 69120 Heidelberg</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Clock className="w-6 h-6 text-red-300" />
                  <div>
                    <p className="font-semibold">Sprechzeiten</p>
                    <p className="text-red-200">Di & Do 10:00-12:00 Uhr, Mi 14:00-16:00 Uhr</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-red-800 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-6">Nächste Schritte</h3>
              <div className="space-y-4">
                <button className="w-full bg-white text-red-900 py-3 px-6 rounded-lg font-semibold hover:bg-red-50 transition-colors">
                  Online-Bewerbung starten
                </button>
                <button className="w-full border-2 border-white text-white py-3 px-6 rounded-lg font-semibold hover:bg-white hover:text-red-900 transition-colors">
                  Beratungstermin vereinbaren
                </button>
                <button className="w-full border-2 border-white text-white py-3 px-6 rounded-lg font-semibold hover:bg-white hover:text-red-900 transition-colors">
                  Infomaterial anfordern
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Studies;