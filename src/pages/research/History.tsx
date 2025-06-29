import React from 'react';
import { History as HistoryIcon, Calendar, Users, Database, Microscope, Newspaper, Mail, Phone, ExternalLink, ArrowRight, Clock, MapPin, BookOpen, GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';

const History = () => {
  const newsItems = [
    {
      id: 1,
      title: "Neue Erkenntnisse zur Indus-Zivilisation veröffentlicht",
      date: "28. November 2024",
      summary: "Prof. Dr. Maria Schmidt präsentiert bahnbrechende archäologische Funde aus Harappa.",
      category: "Archäologie"
    },
    {
      id: 2,
      title: "Digitales Archiv zur Kolonialgeschichte erweitert",
      date: "20. November 2024",
      summary: "Über 5000 neue Dokumente zur britischen Kolonialherrschaft wurden digitalisiert.",
      category: "Digitalisierung"
    },
    {
      id: 3,
      title: "Internationale Tagung zur Unabhängigkeitsbewegung",
      date: "10. November 2024",
      summary: "Experten diskutieren neue Perspektiven auf die Dekolonisierung Südasiens.",
      category: "Veranstaltung"
    }
  ];

  const teamMembers = [
    {
      id: 1,
      name: "Prof. Dr. Maria Schmidt",
      position: "Abteilungsleiterin",
      specialization: "Antike und mittelalterliche Geschichte Südasiens",
      email: "m.schmidt@sai.uni-heidelberg.de",
      phone: "+49 6221 54-8941",
      office: "Raum 201",
      image: "https://images.pexels.com/photos/3831645/pexels-photo-3831645.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      expertise: ["Indus-Zivilisation", "Maurya-Reich", "Gupta-Zeit"]
    },
    {
      id: 2,
      name: "Dr. James Wilson",
      position: "Wissenschaftlicher Mitarbeiter",
      specialization: "Kolonialgeschichte und Dekolonisierung",
      email: "j.wilson@sai.uni-heidelberg.de",
      phone: "+49 6221 54-8942",
      office: "Raum 315",
      image: "https://images.pexels.com/photos/3831849/pexels-photo-3831849.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      expertise: ["Britisches Raj", "Unabhängigkeitsbewegung", "Partition"]
    },
    {
      id: 3,
      name: "Dr. Kavita Sharma",
      position: "Postdoktorandin",
      specialization: "Sozial- und Kulturgeschichte des modernen Südasien",
      email: "k.sharma@sai.uni-heidelberg.de",
      phone: "+49 6221 54-8943",
      office: "Raum 425",
      image: "https://images.pexels.com/photos/3760613/pexels-photo-3760613.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      expertise: ["Sozialgeschichte", "Frauengeschichte", "Moderne Geschichte"]
    }
  ];

  const researchProjects = [
    {
      title: "Die Indus-Zivilisation: Neue archäologische Perspektiven",
      description: "Interdisziplinäre Untersuchung der Harappa-Kultur mit modernsten archäologischen Methoden.",
      duration: "2021-2025",
      funding: "DFG",
      leader: "Prof. Dr. Maria Schmidt",
      status: "Laufend",
      participants: 8
    },
    {
      title: "Dekolonisierung und Partition: Vergleichende Studien",
      description: "Analyse der Unabhängigkeitsprozesse in Indien, Pakistan und Bangladesh.",
      duration: "2022-2025",
      funding: "BMBF",
      leader: "Dr. James Wilson",
      status: "Laufend",
      participants: 6
    },
    {
      title: "Frauen in der südasiatischen Geschichte",
      description: "Geschlechtergeschichtliche Perspektiven auf die Geschichte Südasiens vom Mittelalter bis heute.",
      duration: "2023-2026",
      funding: "VW-Stiftung",
      leader: "Dr. Kavita Sharma",
      status: "Laufend",
      participants: 4
    }
  ];

  const publications = [
    {
      id: 1,
      title: "The Indus Civilization: New Archaeological Insights",
      authors: ["Prof. Dr. Maria Schmidt"],
      publisher: "Cambridge University Press",
      year: "2024",
      type: "Monographie",
      description: "Umfassende Neubewertung der Indus-Zivilisation basierend auf neuesten Ausgrabungen."
    },
    {
      id: 2,
      title: "Decolonization and Partition in South Asia: A Comparative Study",
      authors: ["Dr. James Wilson", "Prof. Dr. Maria Schmidt"],
      publisher: "Oxford University Press",
      year: "2023",
      type: "Sammelband",
      description: "Vergleichende Analyse der Dekolonisierungsprozesse in Südasien."
    },
    {
      id: 3,
      title: "Women in South Asian History: From Medieval to Modern Times",
      authors: ["Dr. Kavita Sharma"],
      publisher: "University of Chicago Press",
      year: "2023",
      type: "Monographie",
      description: "Geschlechtergeschichtliche Perspektiven auf die südasiatische Geschichte."
    }
  ];

  const courses = [
    {
      title: "Einführung in die Geschichte Südasiens",
      type: "Vorlesung",
      semester: "Wintersemester 2024/25",
      lecturer: "Prof. Dr. Maria Schmidt"
    },
    {
      title: "Die Indus-Zivilisation: Archäologie und Geschichte",
      type: "Hauptseminar",
      semester: "Wintersemester 2024/25",
      lecturer: "Prof. Dr. Maria Schmidt"
    },
    {
      title: "Kolonialgeschichte Südasiens",
      type: "Seminar",
      semester: "Sommersemester 2025",
      lecturer: "Dr. James Wilson"
    },
    {
      title: "Frauen in der südasiatischen Geschichte",
      type: "Seminar",
      semester: "Sommersemester 2025",
      lecturer: "Dr. Kavita Sharma"
    },
    {
      title: "Quellenkunde zur südasiatischen Geschichte",
      type: "Methodenseminar",
      semester: "Wintersemester 2024/25",
      lecturer: "Dr. James Wilson"
    },
    {
      title: "Archäologische Methoden in der Geschichtsforschung",
      type: "Praktikum",
      semester: "Sommersemester 2025",
      lecturer: "Prof. Dr. Maria Schmidt, Dr. Kavita Sharma"
    }
  ];

  const resources = [
    {
      title: "Digitales Kolonialarchiv Südasien",
      description: "Umfassende Sammlung von Dokumenten zur Kolonialzeit mit Suchfunktionen",
      type: "Digitales Archiv",
      access: "Öffentlich",
      url: "#"
    },
    {
      title: "Indus-Zivilisation Datenbank",
      description: "Archäologische Funde und Befunde der Harappa-Kultur",
      type: "Datenbank",
      access: "Registriert",
      url: "#"
    },
    {
      title: "Südasiatische Chronologie",
      description: "Interaktive Zeitleiste der südasiatischen Geschichte",
      type: "Chronologie",
      access: "Öffentlich",
      url: "#"
    },
    {
      title: "Historische Karten Südasiens",
      description: "Sammlung historischer und thematischer Karten",
      type: "Kartensammlung",
      access: "Intern",
      url: "#"
    }
  ];

  const events = [
    {
      id: 1,
      title: "Symposium: Neue Perspektiven auf die Indus-Zivilisation",
      date: "10. Januar 2025",
      time: "09:00-18:00 Uhr",
      location: "Historisches Seminar",
      type: "Symposium",
      speaker: "Internationale Archäologen"
    },
    {
      id: 2,
      title: "Workshop: Digitale Methoden in der Geschichtswissenschaft",
      date: "20. Februar 2025",
      time: "10:00-16:00 Uhr",
      location: "Digital Humanities Lab",
      type: "Workshop",
      speaker: "Dr. Kavita Sharma"
    },
    {
      id: 3,
      title: "Vortrag: 75 Jahre Unabhängigkeit - Eine Bilanz",
      date: "15. März 2025",
      time: "18:00-19:30 Uhr",
      location: "Hörsaal Geschichte",
      type: "Vortrag",
      speaker: "Dr. James Wilson"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-yellow-900 to-yellow-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <HistoryIcon className="w-16 h-16 mx-auto mb-6 text-yellow-200" />
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Geschichte
            </h1>
            <p className="text-xl lg:text-2xl text-yellow-100">
              Historische Entwicklungen von der Antike bis zur Gegenwart in Südasien
            </p>
          </div>
        </div>
      </section>

      {/* Aktuelle Nachrichten */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center mb-8">
            <Newspaper className="w-8 h-8 text-yellow-600 mr-3" />
            <h2 className="text-3xl font-bold text-gray-900">Aktuelle Nachrichten</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {newsItems.map((item) => (
              <article key={item.id} className="bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center space-x-2 mb-2">
                  <span className="bg-yellow-100 text-yellow-800 text-xs font-semibold px-2 py-1 rounded">
                    {item.category}
                  </span>
                  <span className="text-gray-500 text-sm">{item.date}</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 hover:text-yellow-600 cursor-pointer">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.summary}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Unser Team */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center mb-8">
            <Users className="w-8 h-8 text-yellow-600 mr-3" />
            <h2 className="text-3xl font-bold text-gray-900">Unser Team</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div key={member.id} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-16 h-16 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                      <p className="text-yellow-600 font-medium">{member.position}</p>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <div className="text-sm text-gray-600 mb-2">
                      <strong>Spezialisierung:</strong> {member.specialization}
                    </div>
                  </div>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-gray-600">
                      <Mail className="w-4 h-4 mr-2 text-yellow-600" />
                      <a href={`mailto:${member.email}`} className="hover:text-yellow-600 transition-colors">
                        {member.email}
                      </a>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Phone className="w-4 h-4 mr-2 text-yellow-600" />
                      <span>{member.phone}</span>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Expertise:</h4>
                    <div className="flex flex-wrap gap-2">
                      {member.expertise.map((skill, index) => (
                        <span
                          key={index}
                          className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <button className="w-full bg-yellow-600 text-white py-2 px-4 rounded-md hover:bg-yellow-700 transition-colors">
                    Kontakt
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Aktuelle Forschungsprojekte */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center mb-8">
            <Microscope className="w-8 h-8 text-yellow-600 mr-3" />
            <h2 className="text-3xl font-bold text-gray-900">Aktuelle Forschungsprojekte</h2>
          </div>
          <div className="space-y-8">
            {researchProjects.map((project, index) => (
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
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <span className="text-gray-500">Projektleitung:</span>
                    <p className="font-medium text-gray-900">{project.leader}</p>
                  </div>
                  <div>
                    <span className="text-gray-500">Förderung:</span>
                    <p className="font-medium text-gray-900">{project.funding}</p>
                  </div>
                  <div>
                    <span className="text-gray-500">Teilnehmer:</span>
                    <p className="font-medium text-gray-900">{project.participants}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Publikationen */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center mb-8">
            <BookOpen className="w-8 h-8 text-yellow-600 mr-3" />
            <h2 className="text-3xl font-bold text-gray-900">Publikationen</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {publications.map((publication) => (
              <div key={publication.id} className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded">
                    {publication.type}
                  </span>
                  <span className="text-sm text-gray-500">{publication.year}</span>
                </div>
                
                <h3 className="text-lg font-bold text-gray-900 mb-3">{publication.title}</h3>
                
                <div className="mb-3">
                  <p className="text-sm font-medium text-gray-700 mb-1">Autoren:</p>
                  <p className="text-sm text-gray-600">{publication.authors.join(", ")}</p>
                </div>
                
                <div className="mb-4">
                  <p className="text-sm font-medium text-gray-700 mb-1">Verlag:</p>
                  <p className="text-sm text-gray-600">{publication.publisher}</p>
                </div>
                
                <p className="text-sm text-gray-600 mb-4">{publication.description}</p>
                
                <button className="w-full bg-gray-100 text-gray-700 py-2 px-4 rounded-md hover:bg-yellow-50 hover:text-yellow-600 transition-colors">
                  Details anzeigen
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lehrveranstaltungen */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center mb-8">
            <GraduationCap className="w-8 h-8 text-yellow-600 mr-3" />
            <h2 className="text-3xl font-bold text-gray-900">Lehrveranstaltungen</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {courses.map((course, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-yellow-100 text-yellow-800 text-xs font-semibold px-2 py-1 rounded">
                    {course.type}
                  </span>
                  <span className="text-sm text-gray-500">{course.semester}</span>
                </div>
                
                <h3 className="text-lg font-bold text-gray-900 mb-3">{course.title}</h3>
                
                <div className="text-sm text-gray-600">
                  <p><strong>Dozent:</strong> {course.lecturer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ressourcen */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center mb-8">
            <Database className="w-8 h-8 text-yellow-600 mr-3" />
            <h2 className="text-3xl font-bold text-gray-900">Ressourcen</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {resources.map((resource, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-yellow-100 text-yellow-800 text-xs font-semibold px-2 py-1 rounded">
                    {resource.type}
                  </span>
                  <span className={`text-xs font-semibold px-2 py-1 rounded ${
                    resource.access === 'Öffentlich' 
                      ? 'bg-green-100 text-green-800'
                      : resource.access === 'Intern'
                      ? 'bg-red-100 text-red-800'
                      : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {resource.access}
                  </span>
                </div>
                
                <h3 className="text-lg font-bold text-gray-900 mb-3">{resource.title}</h3>
                <p className="text-gray-600 mb-4">{resource.description}</p>
                
                <button className="w-full bg-yellow-600 text-white py-2 px-4 rounded-md hover:bg-yellow-700 transition-colors inline-flex items-center justify-center">
                  Zugriff
                  <ExternalLink className="w-4 h-4 ml-2" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Kommende Veranstaltungen */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center mb-8">
            <Calendar className="w-8 h-8 text-yellow-600 mr-3" />
            <h2 className="text-3xl font-bold text-gray-900">Kommende Veranstaltungen</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map((event) => (
              <div key={event.id} className="bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-green-100 text-green-800 text-xs font-semibold px-2 py-1 rounded">
                    {event.type}
                  </span>
                </div>
                
                <h3 className="text-lg font-bold text-gray-900 mb-3">{event.title}</h3>
                
                <div className="space-y-2 mb-4 text-sm text-gray-600">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-2" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-2" />
                    <span>{event.speaker}</span>
                  </div>
                </div>
                
                <button className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition-colors">
                  Anmelden
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Zurück zur Forschungsübersicht */}
      <section className="py-8 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <Link
            to="/forschung"
            className="inline-flex items-center text-yellow-600 hover:text-yellow-800 font-semibold"
          >
            <ArrowRight className="w-4 h-4 mr-2 rotate-180" />
            Zurück zur Forschungsübersicht
          </Link>
        </div>
      </section>
    </div>
  );
};

export default History;