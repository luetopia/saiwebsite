import React from 'react';
import { Globe, Calendar, Users, Database, Microscope, Newspaper, Mail, Phone, ExternalLink, ArrowRight, Clock, MapPin, BookOpen, GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';

const DevelopmentEconomics = () => {
  const newsItems = [
    {
      id: 1,
      title: "Neue Studie zu Mikrofinanzierung in Bangladesh veröffentlicht",
      date: "22. November 2024",
      summary: "Prof. Dr. Klaus Müller präsentiert Langzeitergebnisse zur Wirksamkeit von Mikrokrediten in ländlichen Gebieten.",
      category: "Forschung"
    },
    {
      id: 2,
      title: "Kooperation mit der Weltbank zu nachhaltiger Entwicklung",
      date: "15. November 2024",
      summary: "Das SAI wird Partner in einem neuen Weltbank-Projekt zur nachhaltigen Entwicklung in Südasien.",
      category: "Kooperation"
    },
    {
      id: 3,
      title: "Wirtschaftsreformen in Indien: Neue Analyseergebnisse",
      date: "30. Oktober 2024",
      summary: "Dr. Rajesh Kumar veröffentlicht umfassende Analyse der jüngsten Wirtschaftsreformen.",
      category: "Publikation"
    }
  ];

  const teamMembers = [
    {
      id: 1,
      name: "Prof. Dr. Klaus Müller",
      position: "Abteilungsleiter",
      specialization: "Entwicklungsökonomie und Mikrofinanzierung",
      email: "k.mueller@sai.uni-heidelberg.de",
      phone: "+49 6221 54-8921",
      office: "Raum 230",
      image: "https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      expertise: ["Mikrofinanzierung", "Armutsbekämpfung", "Entwicklungspolitik"]
    },
    {
      id: 2,
      name: "Dr. Rajesh Kumar",
      position: "Wissenschaftlicher Mitarbeiter",
      specialization: "Wirtschaftsreformen und Handelspolitik",
      email: "r.kumar@sai.uni-heidelberg.de",
      phone: "+49 6221 54-8922",
      office: "Raum 325",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      expertise: ["Handelspolitik", "Wirtschaftsreformen", "Makroökonomie"]
    },
    {
      id: 3,
      name: "Dr. Lisa Chen",
      position: "Postdoktorandin",
      specialization: "Nachhaltige Entwicklung und Umweltökonomie",
      email: "l.chen@sai.uni-heidelberg.de",
      phone: "+49 6221 54-8923",
      office: "Raum 418",
      image: "https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      expertise: ["Umweltökonomie", "Nachhaltige Entwicklung", "Klimaökonomie"]
    }
  ];

  const researchProjects = [
    {
      title: "Mikrofinanzierung und Armutsreduktion in Bangladesh",
      description: "Langzeitstudie zur Wirksamkeit von Mikrokrediten auf Einkommen und Lebensstandard ländlicher Haushalte.",
      duration: "2021-2024",
      funding: "DFG",
      leader: "Prof. Dr. Klaus Müller",
      status: "Abschlussphase",
      participants: 6
    },
    {
      title: "Handelsintegration und wirtschaftliche Entwicklung in Südasien",
      description: "Analyse der Auswirkungen regionaler Handelsabkommen auf das Wirtschaftswachstum.",
      duration: "2023-2026",
      funding: "BMBF",
      leader: "Dr. Rajesh Kumar",
      status: "Laufend",
      participants: 4
    },
    {
      title: "Klimawandel und nachhaltige Entwicklung in der Himalaya-Region",
      description: "Interdisziplinäre Studie zu den ökonomischen Auswirkungen des Klimawandels.",
      duration: "2022-2025",
      funding: "EU Horizon 2020",
      leader: "Dr. Lisa Chen",
      status: "Laufend",
      participants: 8
    }
  ];

  const publications = [
    {
      id: 1,
      title: "Microfinance and Poverty Reduction: Evidence from Rural Bangladesh",
      authors: ["Prof. Dr. Klaus Müller", "Dr. Rajesh Kumar"],
      publisher: "Journal of Development Economics",
      year: "2024",
      type: "Zeitschriftenartikel",
      description: "Empirische Analyse der langfristigen Auswirkungen von Mikrofinanzierung auf Armut."
    },
    {
      id: 2,
      title: "Trade Integration and Economic Growth in South Asia",
      authors: ["Dr. Rajesh Kumar"],
      publisher: "Cambridge University Press",
      year: "2023",
      type: "Monographie",
      description: "Umfassende Studie zur Handelsintegration und ihren Wachstumseffekten."
    },
    {
      id: 3,
      title: "Climate Change and Sustainable Development in the Himalayas",
      authors: ["Dr. Lisa Chen", "Prof. Dr. Klaus Müller"],
      publisher: "Environmental Economics Review",
      year: "2023",
      type: "Zeitschriftenartikel",
      description: "Analyse der ökonomischen Herausforderungen des Klimawandels in Gebirgsregionen."
    }
  ];

  const courses = [
    {
      title: "Einführung in die Entwicklungsökonomie",
      type: "Vorlesung",
      semester: "Wintersemester 2024/25",
      lecturer: "Prof. Dr. Klaus Müller"
    },
    {
      title: "Mikrofinanzierung und Armutsbekämpfung",
      type: "Hauptseminar",
      semester: "Wintersemester 2024/25",
      lecturer: "Prof. Dr. Klaus Müller"
    },
    {
      title: "Handelspolitik in Südasien",
      type: "Seminar",
      semester: "Sommersemester 2025",
      lecturer: "Dr. Rajesh Kumar"
    },
    {
      title: "Nachhaltige Entwicklung und Umweltökonomie",
      type: "Seminar",
      semester: "Sommersemester 2025",
      lecturer: "Dr. Lisa Chen"
    },
    {
      title: "Empirische Methoden der Entwicklungsökonomie",
      type: "Methodenseminar",
      semester: "Wintersemester 2024/25",
      lecturer: "Dr. Rajesh Kumar"
    },
    {
      title: "Entwicklungspolitik in der Praxis",
      type: "Praktikum",
      semester: "Sommersemester 2025",
      lecturer: "Prof. Dr. Klaus Müller, Dr. Lisa Chen"
    }
  ];

  const resources = [
    {
      title: "Südasien Wirtschaftsdatenbank",
      description: "Umfassende Sammlung makroökonomischer Daten aller südasiatischen Länder",
      type: "Datenbank",
      access: "Registriert",
      url: "#"
    },
    {
      title: "Mikrofinanz-Forschungsportal",
      description: "Zentrale Plattform für Mikrofinanzierungsforschung mit Tools und Datensätzen",
      type: "Portal",
      access: "Öffentlich",
      url: "#"
    },
    {
      title: "Handelspolitik-Analysewerkzeuge",
      description: "Software und Modelle zur Analyse von Handelspolitik und -auswirkungen",
      type: "Software",
      access: "Intern",
      url: "#"
    },
    {
      title: "Entwicklungsökonomie Methodenhandbuch",
      description: "Leitfaden für empirische Methoden in der Entwicklungsökonomie",
      type: "Handbuch",
      access: "Öffentlich",
      url: "#"
    }
  ];

  const events = [
    {
      id: 1,
      title: "Konferenz: Nachhaltige Entwicklung in Südasien",
      date: "20. Dezember 2024",
      time: "09:00-18:00 Uhr",
      location: "Internationales Wissenschaftsforum",
      type: "Konferenz",
      speaker: "Internationale Experten"
    },
    {
      id: 2,
      title: "Workshop: Empirische Methoden in der Entwicklungsökonomie",
      date: "30. Januar 2025",
      time: "10:00-17:00 Uhr",
      location: "Seminarraum Ökonomie",
      type: "Workshop",
      speaker: "Prof. Dr. Klaus Müller"
    },
    {
      id: 3,
      title: "Vortrag: Mikrofinanzierung - Erfolge und Herausforderungen",
      date: "12. Februar 2025",
      time: "18:00-19:30 Uhr",
      location: "Hörsaal SAI",
      type: "Vortrag",
      speaker: "Dr. Rajesh Kumar"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-900 to-green-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Globe className="w-16 h-16 mx-auto mb-6 text-green-200" />
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Entwicklungsökonomie
            </h1>
            <p className="text-xl lg:text-2xl text-green-100">
              Analyse wirtschaftlicher Entwicklungsprozesse und Entwicklungspolitik in Südasien
            </p>
          </div>
        </div>
      </section>

      {/* Aktuelle Nachrichten */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center mb-8">
            <Newspaper className="w-8 h-8 text-green-600 mr-3" />
            <h2 className="text-3xl font-bold text-gray-900">Aktuelle Nachrichten</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {newsItems.map((item) => (
              <article key={item.id} className="bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center space-x-2 mb-2">
                  <span className="bg-green-100 text-green-800 text-xs font-semibold px-2 py-1 rounded">
                    {item.category}
                  </span>
                  <span className="text-gray-500 text-sm">{item.date}</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 hover:text-green-600 cursor-pointer">
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
            <Users className="w-8 h-8 text-green-600 mr-3" />
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
                      <p className="text-green-600 font-medium">{member.position}</p>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <div className="text-sm text-gray-600 mb-2">
                      <strong>Spezialisierung:</strong> {member.specialization}
                    </div>
                  </div>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-gray-600">
                      <Mail className="w-4 h-4 mr-2 text-green-600" />
                      <a href={`mailto:${member.email}`} className="hover:text-green-600 transition-colors">
                        {member.email}
                      </a>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Phone className="w-4 h-4 mr-2 text-green-600" />
                      <span>{member.phone}</span>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Expertise:</h4>
                    <div className="flex flex-wrap gap-2">
                      {member.expertise.map((skill, index) => (
                        <span
                          key={index}
                          className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <button className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition-colors">
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
            <Microscope className="w-8 h-8 text-green-600 mr-3" />
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
            <BookOpen className="w-8 h-8 text-green-600 mr-3" />
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
                
                <button className="w-full bg-gray-100 text-gray-700 py-2 px-4 rounded-md hover:bg-green-50 hover:text-green-600 transition-colors">
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
            <GraduationCap className="w-8 h-8 text-green-600 mr-3" />
            <h2 className="text-3xl font-bold text-gray-900">Lehrveranstaltungen</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {courses.map((course, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-green-100 text-green-800 text-xs font-semibold px-2 py-1 rounded">
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
            <Database className="w-8 h-8 text-green-600 mr-3" />
            <h2 className="text-3xl font-bold text-gray-900">Ressourcen</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {resources.map((resource, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-green-100 text-green-800 text-xs font-semibold px-2 py-1 rounded">
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
                
                <button className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition-colors inline-flex items-center justify-center">
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
            <Calendar className="w-8 h-8 text-green-600 mr-3" />
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
            className="inline-flex items-center text-green-600 hover:text-green-800 font-semibold"
          >
            <ArrowRight className="w-4 h-4 mr-2 rotate-180" />
            Zurück zur Forschungsübersicht
          </Link>
        </div>
      </section>
    </div>
  );
};

export default DevelopmentEconomics;