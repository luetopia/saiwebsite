import React from 'react';
import { Users, Calendar, BookOpen, Database, Microscope, Newspaper, Mail, Phone, ExternalLink, ArrowRight, Clock, MapPin, GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';

const Ethnology = () => {
  const newsItems = [
    {
      id: 1,
      title: "Neue Feldforschung in den Stammesgebieten Odishas",
      date: "15. November 2024",
      summary: "Dr. Sarah Weber startet ein dreijähriges Forschungsprojekt zu den kulturellen Praktiken der Kondh-Gemeinschaft.",
      category: "Feldforschung"
    },
    {
      id: 2,
      title: "Internationale Konferenz zu indigenen Völkern Südasiens",
      date: "08. November 2024",
      summary: "Das SAI organisiert eine Konferenz mit Fokus auf die Rechte und Kulturen indigener Gemeinschaften.",
      category: "Veranstaltung"
    },
    {
      id: 3,
      title: "Neue Publikation zu Kastensystem und sozialer Mobilität",
      date: "25. Oktober 2024",
      summary: "Prof. Dr. Anita Sharma veröffentlicht eine umfassende Studie über Veränderungen im Kastensystem.",
      category: "Publikation"
    }
  ];

  const teamMembers = [
    {
      id: 1,
      name: "Prof. Dr. Anita Sharma",
      position: "Abteilungsleiterin",
      specialization: "Soziale Strukturen und Kastensystem",
      email: "a.sharma@sai.uni-heidelberg.de",
      phone: "+49 6221 54-8901",
      office: "Raum 201",
      image: "https://images.pexels.com/photos/3760613/pexels-photo-3760613.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      expertise: ["Kastensystem", "Soziale Mobilität", "Rituelle Praktiken"]
    },
    {
      id: 2,
      name: "Dr. Sarah Weber",
      position: "Wissenschaftliche Mitarbeiterin",
      specialization: "Indigene Völker und Stammeskulturen",
      email: "s.weber@sai.uni-heidelberg.de",
      phone: "+49 6221 54-8902",
      office: "Raum 315",
      image: "https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      expertise: ["Stammeskulturen", "Feldforschung", "Kultureller Wandel"]
    },
    {
      id: 3,
      name: "Dr. Ravi Krishnan",
      position: "Postdoktorand",
      specialization: "Urbanisierung und kulturelle Identität",
      email: "r.krishnan@sai.uni-heidelberg.de",
      phone: "+49 6221 54-8903",
      office: "Raum 412",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      expertise: ["Urbanisierung", "Kulturelle Identität", "Migration"]
    }
  ];

  const researchProjects = [
    {
      title: "Kastensystem im Wandel: Soziale Mobilität im modernen Indien",
      description: "Untersuchung der Veränderungen traditioneller Kastenstrukturen in urbanen und ruralen Gebieten Indiens.",
      duration: "2022-2025",
      funding: "DFG",
      leader: "Prof. Dr. Anita Sharma",
      status: "Laufend",
      participants: 4
    },
    {
      title: "Indigene Völker Ostindiens: Kulturelle Praktiken und Landrechte",
      description: "Ethnographische Studie zu den Auswirkungen von Entwicklungsprojekten auf indigene Gemeinschaften.",
      duration: "2023-2026",
      funding: "BMBF",
      leader: "Dr. Sarah Weber",
      status: "Laufend",
      participants: 3
    },
    {
      title: "Urbanisierung und kulturelle Identität in südasiatischen Megastädten",
      description: "Vergleichende Studie über den Erhalt kultureller Identität in schnell wachsenden Städten.",
      duration: "2021-2024",
      funding: "VW-Stiftung",
      leader: "Dr. Ravi Krishnan",
      status: "Abschlussphase",
      participants: 5
    }
  ];

  const publications = [
    {
      id: 1,
      title: "Caste and Social Mobility in Contemporary India",
      authors: ["Prof. Dr. Anita Sharma"],
      publisher: "Cambridge University Press",
      year: "2024",
      type: "Monographie",
      description: "Eine umfassende Analyse der Veränderungen im Kastensystem und ihrer Auswirkungen auf soziale Mobilität."
    },
    {
      id: 2,
      title: "Indigenous Communities of Eastern India: Culture and Rights",
      authors: ["Dr. Sarah Weber", "Prof. Dr. Anita Sharma"],
      publisher: "Oxford University Press",
      year: "2023",
      type: "Sammelband",
      description: "Interdisziplinäre Beiträge zu indigenen Völkern und ihren Rechten in Ostindien."
    },
    {
      id: 3,
      title: "Urban Transformations and Cultural Identity in South Asia",
      authors: ["Dr. Ravi Krishnan"],
      publisher: "Routledge",
      year: "2023",
      type: "Monographie",
      description: "Untersuchung der Auswirkungen von Urbanisierung auf kulturelle Identitäten."
    }
  ];

  const courses = [
    {
      title: "Einführung in die Ethnologie Südasiens",
      type: "Vorlesung",
      semester: "Wintersemester 2024/25",
      lecturer: "Prof. Dr. Anita Sharma"
    },
    {
      title: "Kastensystem und soziale Strukturen",
      type: "Seminar",
      semester: "Wintersemester 2024/25",
      lecturer: "Prof. Dr. Anita Sharma"
    },
    {
      title: "Ethnographische Methoden in der Südasienforschung",
      type: "Methodenseminar",
      semester: "Sommersemester 2025",
      lecturer: "Dr. Sarah Weber"
    },
    {
      title: "Indigene Völker Südasiens: Kultur und Wandel",
      type: "Seminar",
      semester: "Sommersemester 2025",
      lecturer: "Dr. Sarah Weber"
    },
    {
      title: "Urbanisierung und kulturelle Identität",
      type: "Hauptseminar",
      semester: "Wintersemester 2024/25",
      lecturer: "Dr. Ravi Krishnan"
    },
    {
      title: "Feldforschung in Südasien: Praktikum",
      type: "Praktikum",
      semester: "Sommersemester 2025",
      lecturer: "Dr. Sarah Weber, Dr. Ravi Krishnan"
    }
  ];

  const resources = [
    {
      title: "Südasiatische Ethnologie Datenbank",
      description: "Umfassende Sammlung ethnographischer Daten und Feldforschungsberichte",
      type: "Datenbank",
      access: "Intern",
      url: "#"
    },
    {
      title: "Digitales Archiv indigener Kulturen",
      description: "Multimediale Sammlung von Dokumentationen indigener Praktiken und Traditionen",
      type: "Digitales Archiv",
      access: "Öffentlich",
      url: "#"
    },
    {
      title: "Kastensystem-Forschungstools",
      description: "Methodische Werkzeuge und Fragebögen für die Kastenforschung",
      type: "Forschungstools",
      access: "Registriert",
      url: "#"
    },
    {
      title: "Ethnographische Methoden Handbuch",
      description: "Leitfaden für ethnographische Feldforschung in Südasien",
      type: "Handbuch",
      access: "Öffentlich",
      url: "#"
    }
  ];

  const events = [
    {
      id: 1,
      title: "Workshop: Ethnographische Methoden in der Südasienforschung",
      date: "15. Dezember 2024",
      time: "09:00-17:00 Uhr",
      location: "Seminarraum Ethnologie",
      type: "Workshop",
      speaker: "Dr. Sarah Weber"
    },
    {
      id: 2,
      title: "Vortrag: Kastensystem im digitalen Zeitalter",
      date: "22. Januar 2025",
      time: "18:00-19:30 Uhr",
      location: "Hörsaal SAI",
      type: "Vortrag",
      speaker: "Prof. Dr. Anita Sharma"
    },
    {
      id: 3,
      title: "Konferenz: Indigenous Rights in South Asia",
      date: "15. März 2025",
      time: "09:00-18:00 Uhr",
      location: "Internationales Wissenschaftsforum",
      type: "Konferenz",
      speaker: "Internationale Experten"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-900 to-red-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Users className="w-16 h-16 mx-auto mb-6 text-red-200" />
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Ethnologie
            </h1>
            <p className="text-xl lg:text-2xl text-red-100">
              Erforschung der kulturellen Vielfalt und sozialen Strukturen Südasiens
            </p>
          </div>
        </div>
      </section>

      {/* Aktuelle Nachrichten */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center mb-8">
            <Newspaper className="w-8 h-8 text-red-600 mr-3" />
            <h2 className="text-3xl font-bold text-gray-900">Aktuelle Nachrichten</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {newsItems.map((item) => (
              <article key={item.id} className="bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
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

      {/* Unser Team */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center mb-8">
            <Users className="w-8 h-8 text-red-600 mr-3" />
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
                      <p className="text-red-600 font-medium">{member.position}</p>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <div className="text-sm text-gray-600 mb-2">
                      <strong>Spezialisierung:</strong> {member.specialization}
                    </div>
                  </div>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-gray-600">
                      <Mail className="w-4 h-4 mr-2 text-red-600" />
                      <a href={`mailto:${member.email}`} className="hover:text-red-600 transition-colors">
                        {member.email}
                      </a>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Phone className="w-4 h-4 mr-2 text-red-600" />
                      <span>{member.phone}</span>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Expertise:</h4>
                    <div className="flex flex-wrap gap-2">
                      {member.expertise.map((skill, index) => (
                        <span
                          key={index}
                          className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <button className="w-full bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 transition-colors">
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
            <Microscope className="w-8 h-8 text-red-600 mr-3" />
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
            <BookOpen className="w-8 h-8 text-red-600 mr-3" />
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
                
                <button className="w-full bg-gray-100 text-gray-700 py-2 px-4 rounded-md hover:bg-red-50 hover:text-red-600 transition-colors">
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
            <GraduationCap className="w-8 h-8 text-red-600 mr-3" />
            <h2 className="text-3xl font-bold text-gray-900">Lehrveranstaltungen</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {courses.map((course, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-red-100 text-red-800 text-xs font-semibold px-2 py-1 rounded">
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
            <Database className="w-8 h-8 text-red-600 mr-3" />
            <h2 className="text-3xl font-bold text-gray-900">Ressourcen</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {resources.map((resource, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-purple-100 text-purple-800 text-xs font-semibold px-2 py-1 rounded">
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
                
                <button className="w-full bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 transition-colors inline-flex items-center justify-center">
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
            <Calendar className="w-8 h-8 text-red-600 mr-3" />
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
            className="inline-flex items-center text-red-600 hover:text-red-800 font-semibold"
          >
            <ArrowRight className="w-4 h-4 mr-2 rotate-180" />
            Zurück zur Forschungsübersicht
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Ethnology;