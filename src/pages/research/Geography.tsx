import React from 'react';
import { MapPin, Calendar, Users, Database, Microscope, Newspaper, Mail, Phone, ExternalLink, ArrowRight, Clock, BookOpen, GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';

const Geography = () => {
  const newsItems = [
    {
      id: 1,
      title: "Neue Satellitendaten zeigen dramatischen Gletscherschwund im Himalaya",
      date: "25. November 2024",
      summary: "Dr. Michael Fischer präsentiert alarmierende Ergebnisse zur Gletscherschmelze in der Himalaya-Region.",
      category: "Klimaforschung"
    },
    {
      id: 2,
      title: "Monsun-Vorhersagemodell für Südasien entwickelt",
      date: "18. November 2024",
      summary: "Neues KI-basiertes Modell verbessert Monsun-Prognosen für die Landwirtschaft erheblich.",
      category: "Technologie"
    },
    {
      id: 3,
      title: "Urbanisierungsstudie in Delhi abgeschlossen",
      date: "05. November 2024",
      summary: "Fünfjährige Studie zu Stadtentwicklung und Umweltauswirkungen in der Hauptstadtregion.",
      category: "Urbanisierung"
    }
  ];

  const teamMembers = [
    {
      id: 1,
      name: "Prof. Dr. Michael Fischer",
      position: "Abteilungsleiter",
      specialization: "Klimageographie und Gletscherforschung",
      email: "m.fischer@sai.uni-heidelberg.de",
      phone: "+49 6221 54-8931",
      office: "Raum 142",
      image: "https://images.pexels.com/photos/3831849/pexels-photo-3831849.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      expertise: ["Klimawandel", "Gletscherforschung", "Fernerkundung"]
    },
    {
      id: 2,
      name: "Dr. Anita Gupta",
      position: "Wissenschaftliche Mitarbeiterin",
      specialization: "Stadtgeographie und Urbanisierung",
      email: "a.gupta@sai.uni-heidelberg.de",
      phone: "+49 6221 54-8932",
      office: "Raum 245",
      image: "https://images.pexels.com/photos/3760613/pexels-photo-3760613.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      expertise: ["Urbanisierung", "Stadtplanung", "Bevölkerungsgeographie"]
    },
    {
      id: 3,
      name: "Dr. Thomas Weber",
      position: "Postdoktorand",
      specialization: "Wassermanagement und Hydrologie",
      email: "t.weber@sai.uni-heidelberg.de",
      phone: "+49 6221 54-8933",
      office: "Raum 420",
      image: "https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      expertise: ["Hydrologie", "Wassermanagement", "GIS-Analyse"]
    }
  ];

  const researchProjects = [
    {
      title: "Klimawandel und Gletscherschmelze im Himalaya",
      description: "Langzeitstudie zur Überwachung der Gletscherentwicklung und deren Auswirkungen auf Wasserressourcen.",
      duration: "2020-2025",
      funding: "DFG",
      leader: "Prof. Dr. Michael Fischer",
      status: "Laufend",
      participants: 7
    },
    {
      title: "Nachhaltige Stadtentwicklung in südasiatischen Megastädten",
      description: "Vergleichende Studie zu Urbanisierungsprozessen in Delhi, Mumbai, Dhaka und Karachi.",
      duration: "2022-2025",
      funding: "BMBF",
      leader: "Dr. Anita Gupta",
      status: "Laufend",
      participants: 5
    },
    {
      title: "Wassermanagement im Ganges-Brahmaputra-Delta",
      description: "Interdisziplinäre Analyse der Wassernutzung und -konflikte im größten Delta der Welt.",
      duration: "2023-2026",
      funding: "EU Horizon Europe",
      leader: "Dr. Thomas Weber",
      status: "Laufend",
      participants: 6
    }
  ];

  const publications = [
    {
      id: 1,
      title: "Glacier Retreat in the Himalayas: Causes and Consequences",
      authors: ["Prof. Dr. Michael Fischer"],
      publisher: "Nature Climate Change",
      year: "2024",
      type: "Zeitschriftenartikel",
      description: "Umfassende Analyse der Gletscherschmelze und ihrer Auswirkungen auf Wasserressourcen."
    },
    {
      id: 2,
      title: "Urban Growth and Environmental Challenges in South Asian Megacities",
      authors: ["Dr. Anita Gupta", "Prof. Dr. Michael Fischer"],
      publisher: "Urban Studies Journal",
      year: "2023",
      type: "Zeitschriftenartikel",
      description: "Vergleichende Studie zu Urbanisierungsprozessen und Umweltproblemen."
    },
    {
      id: 3,
      title: "Water Management in the Ganges-Brahmaputra Delta",
      authors: ["Dr. Thomas Weber"],
      publisher: "Water Resources Research",
      year: "2023",
      type: "Zeitschriftenartikel",
      description: "Analyse der Wassermanagement-Herausforderungen im größten Delta der Welt."
    }
  ];

  const courses = [
    {
      title: "Einführung in die Geographie Südasiens",
      type: "Vorlesung",
      semester: "Wintersemester 2024/25",
      lecturer: "Prof. Dr. Michael Fischer"
    },
    {
      title: "Klimageographie und Gletscherforschung",
      type: "Hauptseminar",
      semester: "Wintersemester 2024/25",
      lecturer: "Prof. Dr. Michael Fischer"
    },
    {
      title: "Stadtgeographie südasiatischer Megastädte",
      type: "Seminar",
      semester: "Sommersemester 2025",
      lecturer: "Dr. Anita Gupta"
    },
    {
      title: "Wassermanagement in Südasien",
      type: "Seminar",
      semester: "Sommersemester 2025",
      lecturer: "Dr. Thomas Weber"
    },
    {
      title: "GIS und Fernerkundung in der Südasienforschung",
      type: "Methodenseminar",
      semester: "Wintersemester 2024/25",
      lecturer: "Dr. Thomas Weber"
    },
    {
      title: "Geländepraktikum Himalaya",
      type: "Praktikum",
      semester: "Sommersemester 2025",
      lecturer: "Prof. Dr. Michael Fischer, Dr. Anita Gupta"
    }
  ];

  const resources = [
    {
      title: "Himalaya-Gletscher Monitoring System",
      description: "Echtzeit-Überwachung von Gletschern mit Satellitendaten und automatischen Messstationen",
      type: "Monitoring System",
      access: "Öffentlich",
      url: "#"
    },
    {
      title: "Südasien Klimadatenbank",
      description: "Umfassende Sammlung meteorologischer und klimatologischer Daten",
      type: "Datenbank",
      access: "Registriert",
      url: "#"
    },
    {
      title: "GIS-Portal für Südasien",
      description: "Geographische Informationssysteme und Kartenmaterial für die Region",
      type: "GIS-Portal",
      access: "Öffentlich",
      url: "#"
    },
    {
      title: "Fernerkundungs-Toolkit",
      description: "Software und Methoden für die Analyse von Satellitendaten",
      type: "Software",
      access: "Intern",
      url: "#"
    }
  ];

  const events = [
    {
      id: 1,
      title: "Symposium: Klimawandel im Himalaya",
      date: "28. Dezember 2024",
      time: "09:00-18:00 Uhr",
      location: "Geographisches Institut",
      type: "Symposium",
      speaker: "Internationale Klimaforscher"
    },
    {
      id: 2,
      title: "Workshop: GIS-Methoden in der Südasienforschung",
      date: "15. Februar 2025",
      time: "10:00-17:00 Uhr",
      location: "GIS-Labor",
      type: "Workshop",
      speaker: "Dr. Thomas Weber"
    },
    {
      id: 3,
      title: "Vortrag: Megastädte Südasiens - Herausforderungen und Lösungen",
      date: "05. März 2025",
      time: "18:00-19:30 Uhr",
      location: "Hörsaal Geographie",
      type: "Vortrag",
      speaker: "Dr. Anita Gupta"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-900 to-orange-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <MapPin className="w-16 h-16 mx-auto mb-6 text-orange-200" />
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Geographie
            </h1>
            <p className="text-xl lg:text-2xl text-orange-100">
              Erforschung der physischen und humangeographischen Strukturen Südasiens
            </p>
          </div>
        </div>
      </section>

      {/* Aktuelle Nachrichten */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center mb-8">
            <Newspaper className="w-8 h-8 text-orange-600 mr-3" />
            <h2 className="text-3xl font-bold text-gray-900">Aktuelle Nachrichten</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {newsItems.map((item) => (
              <article key={item.id} className="bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center space-x-2 mb-2">
                  <span className="bg-orange-100 text-orange-800 text-xs font-semibold px-2 py-1 rounded">
                    {item.category}
                  </span>
                  <span className="text-gray-500 text-sm">{item.date}</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 hover:text-orange-600 cursor-pointer">
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
            <Users className="w-8 h-8 text-orange-600 mr-3" />
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
                      <p className="text-orange-600 font-medium">{member.position}</p>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <div className="text-sm text-gray-600 mb-2">
                      <strong>Spezialisierung:</strong> {member.specialization}
                    </div>
                  </div>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-gray-600">
                      <Mail className="w-4 h-4 mr-2 text-orange-600" />
                      <a href={`mailto:${member.email}`} className="hover:text-orange-600 transition-colors">
                        {member.email}
                      </a>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Phone className="w-4 h-4 mr-2 text-orange-600" />
                      <span>{member.phone}</span>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Expertise:</h4>
                    <div className="flex flex-wrap gap-2">
                      {member.expertise.map((skill, index) => (
                        <span
                          key={index}
                          className="bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <button className="w-full bg-orange-600 text-white py-2 px-4 rounded-md hover:bg-orange-700 transition-colors">
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
            <Microscope className="w-8 h-8 text-orange-600 mr-3" />
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
            <BookOpen className="w-8 h-8 text-orange-600 mr-3" />
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
                
                <button className="w-full bg-gray-100 text-gray-700 py-2 px-4 rounded-md hover:bg-orange-50 hover:text-orange-600 transition-colors">
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
            <GraduationCap className="w-8 h-8 text-orange-600 mr-3" />
            <h2 className="text-3xl font-bold text-gray-900">Lehrveranstaltungen</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {courses.map((course, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-orange-100 text-orange-800 text-xs font-semibold px-2 py-1 rounded">
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
            <Database className="w-8 h-8 text-orange-600 mr-3" />
            <h2 className="text-3xl font-bold text-gray-900">Ressourcen</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {resources.map((resource, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-orange-100 text-orange-800 text-xs font-semibold px-2 py-1 rounded">
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
                
                <button className="w-full bg-orange-600 text-white py-2 px-4 rounded-md hover:bg-orange-700 transition-colors inline-flex items-center justify-center">
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
            <Calendar className="w-8 h-8 text-orange-600 mr-3" />
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
            className="inline-flex items-center text-orange-600 hover:text-orange-800 font-semibold"
          >
            <ArrowRight className="w-4 h-4 mr-2 rotate-180" />
            Zurück zur Forschungsübersicht
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Geography;