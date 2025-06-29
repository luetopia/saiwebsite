import React from 'react';
import { BookOpen, Users, Globe, Briefcase, Heart, MessageSquare, MapPin, Microscope, GraduationCap, Target, Award, ExternalLink, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Research = () => {
  const researchAreas = [
    {
      icon: <Users className="w-8 h-8 text-red-600" />,
      title: "Ethnologie",
      description: "Erforschung der kulturellen Vielfalt und sozialen Strukturen der Völker Südasiens.",
      topics: [
        "Soziale Strukturen",
        "Kulturelle Praktiken",
        "Ethnische Gruppen",
        "Gesellschaftlicher Wandel",
        "Identitätsforschung"
      ],
      projects: 4,
      researchers: 8,
      link: "/forschung/ethnologie"
    },
    {
      icon: <BookOpen className="w-8 h-8 text-purple-600" />,
      title: "Kultur- und Religionsgeschichte",
      description: "Untersuchung religiöser Traditionen, kultureller Entwicklungen und geistiger Strömungen.",
      topics: [
        "Hinduismus und Islam",
        "Buddhismus und Jainismus",
        "Religionsphilosophie",
        "Kulturelle Identität",
        "Säkularismus"
      ],
      projects: 5,
      researchers: 7,
      link: "/forschung/kultur-und-religionsgeschichte"
    },
    {
      icon: <Globe className="w-8 h-8 text-green-600" />,
      title: "Entwicklungsökonomie",
      description: "Analyse wirtschaftlicher Entwicklungsprozesse und Entwicklungspolitik in Südasien.",
      topics: [
        "Wirtschaftsreformen",
        "Entwicklungszusammenarbeit",
        "Handel und Investitionen",
        "Armut und Ungleichheit",
        "Nachhaltige Entwicklung"
      ],
      projects: 4,
      researchers: 6,
      link: "/forschung/entwicklungsoekonomie"
    },
    {
      icon: <MapPin className="w-8 h-8 text-orange-600" />,
      title: "Geographie",
      description: "Erforschung der physischen und humangeographischen Strukturen der südasiatischen Region.",
      topics: [
        "Klimawandel",
        "Wassermanagement",
        "Urbanisierung",
        "Landwirtschaft",
        "Naturkatastrophen"
      ],
      projects: 3,
      researchers: 4,
      link: "/forschung/geographie"
    },
    {
      icon: <Microscope className="w-8 h-8 text-yellow-600" />,
      title: "Geschichte",
      description: "Historische Entwicklungen von der Antike bis zur Gegenwart in Südasien.",
      topics: [
        "Kolonialgeschichte",
        "Unabhängigkeitsbewegungen",
        "Politische Geschichte",
        "Sozialgeschichte",
        "Kulturgeschichte"
      ],
      projects: 3,
      researchers: 5,
      link: "/forschung/geschichte"
    },
    {
      icon: <MessageSquare className="w-8 h-8 text-indigo-600" />,
      title: "Neusprachliche Südasienstudien",
      description: "Moderne Sprachen, Literatur und Sprachwissenschaft der südasiatischen Region.",
      topics: [
        "Hindi und Urdu",
        "Regionale Sprachen",
        "Klassische Literatur",
        "Moderne Literatur",
        "Sprachpolitik"
      ],
      projects: 2,
      researchers: 5,
      link: "/forschung/neusprachliche-suedasienstudien"
    },
    {
      icon: <Heart className="w-8 h-8 text-teal-600" />,
      title: "Politikwissenschaft",
      description: "Politische Systeme, Governance und gesellschaftliche Entwicklungen in Südasien.",
      topics: [
        "Demokratie und Governance",
        "Föderalismus",
        "Soziale Bewegungen",
        "Konfliktstudien",
        "Menschenrechte"
      ],
      projects: 3,
      researchers: 6,
      link: "/forschung/politikwissenschaft"
    }
  ];

  const publications = [
    {
      id: 1,
      title: "Democracy and Development in South Asia: Contemporary Challenges",
      authors: ["Prof. Dr. Maria Schmidt", "Dr. Sarah Weber"],
      publisher: "Cambridge University Press",
      year: "2024",
      isbn: "978-1-108-48392-7",
      cover: "https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop",
      description: "Eine umfassende Analyse der demokratischen Entwicklungen in Südasien mit Fokus auf aktuelle Herausforderungen.",
      link: "https://cambridge.org/democracy-south-asia",
      featured: true
    },
    {
      id: 2,
      title: "Climate Change and Migration in the Himalayas",
      authors: ["Prof. Dr. Klaus Müller", "Dr. Priya Sharma", "Laura Becker, M.A."],
      publisher: "Springer Nature",
      year: "2024",
      isbn: "978-3-030-89234-1",
      cover: "https://images.pexels.com/photos/1370295/pexels-photo-1370295.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop",
      description: "Interdisziplinäre Studie über die Auswirkungen des Klimawandels auf Migrationsbewegungen in der Himalaya-Region.",
      link: "https://springer.com/climate-migration-himalayas",
      featured: true
    },
    {
      id: 3,
      title: "Modern Hindi Literature: Voices of the 21st Century",
      authors: ["Prof. Dr. Rajesh Patel"],
      publisher: "Oxford University Press",
      year: "2023",
      isbn: "978-0-19-886543-2",
      cover: "https://images.pexels.com/photos/1029141/pexels-photo-1029141.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop",
      description: "Eine kritische Analyse der zeitgenössischen Hindi-Literatur und ihrer gesellschaftlichen Bedeutung.",
      link: "https://oup.com/modern-hindi-literature",
      featured: false
    },
    {
      id: 4,
      title: "Economic Transformation in Bangladesh: Growth and Inequality",
      authors: ["Dr. Michael Fischer", "Prof. Dr. Klaus Müller"],
      publisher: "Routledge",
      year: "2023",
      isbn: "978-1-032-15678-9",
      cover: "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop",
      description: "Detaillierte Untersuchung der wirtschaftlichen Entwicklung Bangladeschs seit der Unabhängigkeit.",
      link: "https://routledge.com/economic-transformation-bangladesh",
      featured: false
    },
    {
      id: 5,
      title: "Religious Pluralism in Contemporary India",
      authors: ["Dr. Priya Sharma", "Prof. Dr. Thomas Hoffmann"],
      publisher: "University of Chicago Press",
      year: "2023",
      isbn: "978-0-226-82456-3",
      cover: "https://images.pexels.com/photos/3760613/pexels-photo-3760613.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop",
      description: "Analyse der religiösen Vielfalt und ihrer politischen Dimensionen im modernen Indien.",
      link: "https://press.uchicago.edu/religious-pluralism-india",
      featured: false
    },
    {
      id: 6,
      title: "Digital Humanities in South Asian Studies",
      authors: ["Dr. Sarah Weber", "Prof. Dr. Michael Fischer", "Laura Becker, M.A."],
      publisher: "MIT Press",
      year: "2024",
      isbn: "978-0-262-04789-1",
      cover: "https://images.pexels.com/photos/3184454/pexels-photo-3184454.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop",
      description: "Innovative Ansätze der Digital Humanities in der Südasienforschung mit praktischen Anwendungsbeispielen.",
      link: "https://mitpress.mit.edu/digital-humanities-south-asia",
      featured: true
    }
  ];

  const currentProjects = [
    {
      title: "Klimawandel und Migration in Südasien",
      description: "Eine interdisziplinäre Studie über die Auswirkungen des Klimawandels auf Migrationsbewegungen.",
      duration: "2022-2025",
      funding: "DFG",
      leader: "Prof. Dr. Maria Schmidt",
      status: "Laufend"
    },
    {
      title: "Digitale Archive südasiatischer Literatur",
      description: "Aufbau einer digitalen Sammlung klassischer und moderner Texte aus Südasien.",
      duration: "2023-2026",
      funding: "BMBF",
      leader: "Prof. Dr. Rajesh Patel",
      status: "Laufend"
    },
    {
      title: "Demokratie und soziale Medien in Indien",
      description: "Untersuchung des Einflusses sozialer Medien auf demokratische Prozesse.",
      duration: "2021-2024",
      funding: "VW-Stiftung",
      leader: "Dr. Sarah Weber",
      status: "Abschlussphase"
    }
  ];

  const featuredPublications = publications.filter(pub => pub.featured);
  const regularPublications = publications.filter(pub => !pub.featured);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-900 to-red-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Microscope className="w-16 h-16 mx-auto mb-6 text-red-200" />
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Forschung am SAI
            </h1>
            <p className="text-xl lg:text-2xl text-red-100">
              Interdisziplinäre Erforschung Südasiens in all seinen Facetten
            </p>
          </div>
        </div>
      </section>

      {/* Research Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Unsere Forschungsbereiche
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Das SAI erforscht Südasien aus verschiedenen wissenschaftlichen Perspektiven 
              und verbindet dabei traditionelle Disziplinen mit innovativen Ansätzen.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
            {researchAreas.map((area, index) => (
              <Link
                key={index}
                to={area.link}
                className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="mb-4 group-hover:scale-110 transition-transform duration-300">{area.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors">
                  {area.title}
                </h3>
                <p className="text-gray-600 mb-6 text-sm">{area.description}</p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Forschungsthemen:</h4>
                  <ul className="space-y-1">
                    {area.topics.slice(0, 3).map((topic, topicIndex) => (
                      <li key={topicIndex} className="text-sm text-gray-600 flex items-center">
                        <div className="w-1.5 h-1.5 bg-red-600 rounded-full mr-2"></div>
                        {topic}
                      </li>
                    ))}
                    {area.topics.length > 3 && (
                      <li className="text-sm text-gray-500 italic">
                        +{area.topics.length - 3} weitere
                      </li>
                    )}
                  </ul>
                </div>
                
                <div className="flex justify-between text-sm text-gray-500 pt-4 border-t border-gray-200">
                  <span>{area.projects} Projekte</span>
                  <span>{area.researchers} Forscher</span>
                </div>
                
                <div className="mt-4 flex items-center text-red-600 group-hover:text-red-700 font-semibold text-sm">
                  Mehr erfahren
                  <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-red-50 rounded-xl">
              <div className="text-3xl font-bold text-red-600 mb-2">7</div>
              <div className="text-sm text-gray-700">Forschungsbereiche</div>
            </div>
            <div className="text-center p-6 bg-green-50 rounded-xl">
              <div className="text-3xl font-bold text-green-600 mb-2">24</div>
              <div className="text-sm text-gray-700">Aktive Projekte</div>
            </div>
            <div className="text-center p-6 bg-purple-50 rounded-xl">
              <div className="text-3xl font-bold text-purple-600 mb-2">41</div>
              <div className="text-sm text-gray-700">Forschende</div>
            </div>
            <div className="text-center p-6 bg-orange-50 rounded-xl">
              <div className="text-3xl font-bold text-orange-600 mb-2">15+</div>
              <div className="text-sm text-gray-700">Partnerinstitute</div>
            </div>
          </div>
        </div>
      </section>

      {/* Publications Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <BookOpen className="w-12 h-12 text-red-600 mx-auto mb-4" />
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Publikationen
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Aktuelle Veröffentlichungen unserer Wissenschaftlerinnen und Wissenschaftler
            </p>
          </div>

          {/* Featured Publications */}
          {featuredPublications.length > 0 && (
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Neuerscheinungen</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {featuredPublications.map((publication) => (
                  <div key={publication.id} className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group">
                    <div className="relative">
                      <img
                        src={publication.cover}
                        alt={`Cover von ${publication.title}`}
                        className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 right-4">
                        <span className="bg-red-600 text-white text-xs font-semibold px-2 py-1 rounded">
                          {publication.year}
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <h4 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-red-600 transition-colors">
                        {publication.title}
                      </h4>
                      
                      <div className="mb-3">
                        <p className="text-sm font-medium text-gray-700 mb-1">Autoren:</p>
                        <p className="text-sm text-gray-600">
                          {publication.authors.join(", ")}
                        </p>
                      </div>
                      
                      <div className="mb-4">
                        <p className="text-sm font-medium text-gray-700 mb-1">Verlag:</p>
                        <p className="text-sm text-gray-600">{publication.publisher}</p>
                        <p className="text-xs text-gray-500">ISBN: {publication.isbn}</p>
                      </div>
                      
                      <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                        {publication.description}
                      </p>
                      
                      <a
                        href={publication.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center w-full bg-red-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-red-700 transition-colors group"
                      >
                        Zum Verlag
                        <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Regular Publications */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Weitere Publikationen</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {regularPublications.map((publication) => (
                <div key={publication.id} className="bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden group">
                  <div className="relative">
                    <img
                      src={publication.cover}
                      alt={`Cover von ${publication.title}`}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-3 right-3">
                      <span className="bg-gray-900 bg-opacity-75 text-white text-xs font-semibold px-2 py-1 rounded">
                        {publication.year}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-4">
                    <h4 className="text-base font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-red-600 transition-colors">
                      {publication.title}
                    </h4>
                    
                    <div className="mb-2">
                      <p className="text-xs font-medium text-gray-700 mb-1">Autoren:</p>
                      <p className="text-xs text-gray-600 line-clamp-2">
                        {publication.authors.join(", ")}
                      </p>
                    </div>
                    
                    <div className="mb-3">
                      <p className="text-xs font-medium text-gray-700 mb-1">Verlag:</p>
                      <p className="text-xs text-gray-600">{publication.publisher}</p>
                    </div>
                    
                    <a
                      href={publication.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-full bg-gray-100 text-gray-700 py-2 px-3 rounded-md text-sm font-medium hover:bg-red-50 hover:text-red-600 transition-colors group"
                    >
                      Details
                      <ExternalLink className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Publication Statistics */}
          <div className="mt-16 bg-white rounded-xl p-8 shadow-sm">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Publikationsstatistiken</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-red-600 mb-2">150+</div>
                <div className="text-sm text-gray-700">Publikationen/Jahr</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">25</div>
                <div className="text-sm text-gray-700">Monographien</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">12</div>
                <div className="text-sm text-gray-700">Herausgegebene Bände</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600 mb-2">8</div>
                <div className="text-sm text-gray-700">Internationale Verlage</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Current Projects */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Aktuelle Forschungsprojekte
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Eine Auswahl unserer laufenden Forschungsprojekte
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {currentProjects.map((project, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    project.status === 'Laufend' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {project.status}
                  </span>
                  <span className="text-sm text-gray-500">{project.duration}</span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-6">{project.description}</p>
                
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Projektleitung:</span>
                    <span className="font-medium text-gray-900">{project.leader}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Förderung:</span>
                    <span className="font-medium text-gray-900">{project.funding}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Methods */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Forschungsmethoden
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Das SAI wendet vielfältige Forschungsmethoden an, um der Komplexität 
                Südasiens gerecht zu werden. Unsere Ansätze reichen von traditionellen 
                geisteswissenschaftlichen Methoden bis hin zu modernsten digitalen Verfahren.
              </p>
              <div className="space-y-4">
                {[
                  "Feldforschung und ethnographische Studien",
                  "Archivforschung und Quellenanalyse",
                  "Quantitative und qualitative Sozialforschung",
                  "Digital Humanities und Computational Methods",
                  "Interdisziplinäre Kooperationen",
                  "Internationale Forschungspartnerschaften"
                ].map((method, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <BookOpen className="w-5 h-5 text-red-600" />
                    <span className="text-gray-700">{method}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-red-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-red-900 mb-6">Forschungsstatistiken</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-600 mb-2">24</div>
                  <div className="text-sm text-red-800">Aktive Projekte</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">41</div>
                  <div className="text-sm text-red-800">Forschende</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">150+</div>
                  <div className="text-sm text-red-800">Publikationen/Jahr</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600 mb-2">25</div>
                  <div className="text-sm text-red-800">Partnerinstitute</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partnerships */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Internationale Kooperationen
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Das SAI pflegt enge Forschungspartnerschaften mit führenden Institutionen 
              in Südasien und weltweit
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Jawaharlal Nehru University", location: "New Delhi, Indien" },
              { name: "University of Colombo", location: "Colombo, Sri Lanka" },
              { name: "Tribhuvan University", location: "Kathmandu, Nepal" },
              { name: "University of Dhaka", location: "Dhaka, Bangladesch" },
              { name: "Quaid-i-Azam University", location: "Islamabad, Pakistan" },
              { name: "Royal University of Bhutan", location: "Thimphu, Bhutan" },
              { name: "Maldives National University", location: "Malé, Malediven" },
              { name: "University of Cambridge", location: "Cambridge, UK" }
            ].map((partner, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-shadow">
                <h3 className="font-bold text-gray-900 mb-2">{partner.name}</h3>
                <p className="text-sm text-gray-600">{partner.location}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Research;