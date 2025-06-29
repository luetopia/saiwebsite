import React from 'react';
import { Languages, Calendar, Users, Database, Microscope, Newspaper, Mail, Phone, ExternalLink, ArrowRight, Clock, MapPin, BookOpen, GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';

const ModernSouthAsianStudies = () => {
  const newsItems = [
    {
      id: 1,
      title: "Neue digitale Edition der Werke von Premchand veröffentlicht",
      date: "30. November 2024",
      summary: "Prof. Dr. Rajesh Patel präsentiert die erste vollständige digitale Ausgabe der Werke des berühmten Hindi-Autors.",
      category: "Literatur"
    },
    {
      id: 2,
      title: "Internationale Konferenz zu südasiatischen Sprachen",
      date: "22. November 2024",
      summary: "Sprachwissenschaftler aus aller Welt diskutieren über Sprachpolitik und Mehrsprachigkeit.",
      category: "Sprachwissenschaft"
    },
    {
      id: 3,
      title: "Neues Wörterbuch für Urdu-Dialekte erschienen",
      date: "15. November 2024",
      summary: "Dr. Fatima Khan veröffentlicht umfassendes Wörterbuch regionaler Urdu-Varianten.",
      category: "Lexikographie"
    }
  ];

  const teamMembers = [
    {
      id: 1,
      name: "Prof. Dr. Rajesh Patel",
      position: "Abteilungsleiter",
      specialization: "Hindi-Literatur und Sprachwissenschaft",
      email: "r.patel@sai.uni-heidelberg.de",
      phone: "+49 6221 54-8951",
      office: "Raum 105",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      expertise: ["Hindi-Literatur", "Sprachwissenschaft", "Literaturtheorie"]
    },
    {
      id: 2,
      name: "Dr. Fatima Khan",
      position: "Wissenschaftliche Mitarbeiterin",
      specialization: "Urdu-Literatur und Dialektologie",
      email: "f.khan@sai.uni-heidelberg.de",
      phone: "+49 6221 54-8952",
      office: "Raum 220",
      image: "https://images.pexels.com/photos/3760613/pexels-photo-3760613.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      expertise: ["Urdu-Literatur", "Dialektologie", "Sprachpolitik"]
    },
    {
      id: 3,
      name: "Dr. Arjun Mehta",
      position: "Postdoktorand",
      specialization: "Moderne südasiatische Literatur",
      email: "a.mehta@sai.uni-heidelberg.de",
      phone: "+49 6221 54-8953",
      office: "Raum 430",
      image: "https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      expertise: ["Moderne Literatur", "Übersetzungswissenschaft", "Postkoloniale Studien"]
    }
  ];

  const researchProjects = [
    {
      title: "Digitale Edition der Hindi-Literatur des 20. Jahrhunderts",
      description: "Umfassendes Projekt zur Digitalisierung und kritischen Edition wichtiger Hindi-Werke.",
      duration: "2021-2025",
      funding: "DFG",
      leader: "Prof. Dr. Rajesh Patel",
      status: "Laufend",
      participants: 6
    },
    {
      title: "Sprachpolitik und Mehrsprachigkeit in Südasien",
      description: "Vergleichende Studie zur Sprachpolitik in verschiedenen südasiatischen Ländern.",
      duration: "2022-2025",
      funding: "BMBF",
      leader: "Dr. Fatima Khan",
      status: "Laufend",
      participants: 4
    },
    {
      title: "Postkoloniale Literatur und kulturelle Identität",
      description: "Analyse der Darstellung kultureller Identität in der modernen südasiatischen Literatur.",
      duration: "2023-2026",
      funding: "Alexander von Humboldt-Stiftung",
      leader: "Dr. Arjun Mehta",
      status: "Laufend",
      participants: 3
    }
  ];

  const publications = [
    {
      id: 1,
      title: "Modern Hindi Literature: Voices of the 21st Century",
      authors: ["Prof. Dr. Rajesh Patel"],
      publisher: "Oxford University Press",
      year: "2024",
      type: "Monographie",
      description: "Umfassende Analyse der zeitgenössischen Hindi-Literatur und ihrer gesellschaftlichen Bedeutung."
    },
    {
      id: 2,
      title: "Urdu Dialects of South Asia: A Linguistic Survey",
      authors: ["Dr. Fatima Khan"],
      publisher: "Cambridge University Press",
      year: "2023",
      type: "Monographie",
      description: "Erste systematische Untersuchung der regionalen Varianten des Urdu."
    },
    {
      id: 3,
      title: "Postcolonial Identity in South Asian Literature",
      authors: ["Dr. Arjun Mehta", "Prof. Dr. Rajesh Patel"],
      publisher: "University of Chicago Press",
      year: "2023",
      type: "Sammelband",
      description: "Interdisziplinäre Beiträge zur postkolonialen Identität in der Literatur."
    }
  ];

  const courses = [
    {
      title: "Einführung in die südasiatischen Sprachen",
      type: "Vorlesung",
      semester: "Wintersemester 2024/25",
      lecturer: "Prof. Dr. Rajesh Patel"
    },
    {
      title: "Hindi-Literatur des 20. Jahrhunderts",
      type: "Hauptseminar",
      semester: "Wintersemester 2024/25",
      lecturer: "Prof. Dr. Rajesh Patel"
    },
    {
      title: "Urdu-Poesie und Prosa",
      type: "Seminar",
      semester: "Sommersemester 2025",
      lecturer: "Dr. Fatima Khan"
    },
    {
      title: "Postkoloniale Literatur Südasiens",
      type: "Seminar",
      semester: "Sommersemester 2025",
      lecturer: "Dr. Arjun Mehta"
    },
    {
      title: "Hindi-Sprachkurs für Fortgeschrittene",
      type: "Sprachkurs",
      semester: "Wintersemester 2024/25",
      lecturer: "Prof. Dr. Rajesh Patel"
    },
    {
      title: "Übersetzungswerkstatt: Südasiatische Literatur",
      type: "Praktikum",
      semester: "Sommersemester 2025",
      lecturer: "Dr. Arjun Mehta, Dr. Fatima Khan"
    }
  ];

  const resources = [
    {
      title: "Digitale Hindi-Literatur Bibliothek",
      description: "Umfassende Sammlung digitalisierter Hindi-Texte mit Suchfunktionen",
      type: "Digitale Bibliothek",
      access: "Öffentlich",
      url: "#"
    },
    {
      title: "Südasiatische Sprachen Korpus",
      description: "Linguistische Korpora für Hindi, Urdu, Bengali und andere Sprachen",
      type: "Sprachkorpus",
      access: "Registriert",
      url: "#"
    },
    {
      title: "Literaturanalyse-Tools",
      description: "Software für die computergestützte Analyse literarischer Texte",
      type: "Software",
      access: "Intern",
      url: "#"
    },
    {
      title: "Übersetzungsdatenbank",
      description: "Sammlung von Übersetzungen südasiatischer Literatur",
      type: "Datenbank",
      access: "Öffentlich",
      url: "#"
    }
  ];

  const events = [
    {
      id: 1,
      title: "Symposium: Moderne Hindi-Literatur im globalen Kontext",
      date: "12. Januar 2025",
      time: "09:00-18:00 Uhr",
      location: "Literaturwissenschaftliches Seminar",
      type: "Symposium",
      speaker: "Internationale Literaturwissenschaftler"
    },
    {
      id: 2,
      title: "Workshop: Digitale Methoden in der Literaturwissenschaft",
      date: "25. Februar 2025",
      time: "10:00-17:00 Uhr",
      location: "Digital Humanities Lab",
      type: "Workshop",
      speaker: "Dr. Arjun Mehta"
    },
    {
      id: 3,
      title: "Lesung: Zeitgenössische Urdu-Poesie",
      date: "18. März 2025",
      time: "19:00-21:00 Uhr",
      location: "Literaturhaus Heidelberg",
      type: "Lesung",
      speaker: "Dr. Fatima Khan"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-900 to-indigo-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Languages className="w-16 h-16 mx-auto mb-6 text-indigo-200" />
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Neusprachliche Südasienstudien
            </h1>
            <p className="text-xl lg:text-2xl text-indigo-100">
              Moderne Sprachen, Literatur und Sprachwissenschaft der südasiatischen Region
            </p>
          </div>
        </div>
      </section>

      {/* Aktuelle Nachrichten */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center mb-8">
            <Newspaper className="w-8 h-8 text-indigo-600 mr-3" />
            <h2 className="text-3xl font-bold text-gray-900">Aktuelle Nachrichten</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {newsItems.map((item) => (
              <article key={item.id} className="bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center space-x-2 mb-2">
                  <span className="bg-indigo-100 text-indigo-800 text-xs font-semibold px-2 py-1 rounded">
                    {item.category}
                  </span>
                  <span className="text-gray-500 text-sm">{item.date}</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 hover:text-indigo-600 cursor-pointer">
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
            <Users className="w-8 h-8 text-indigo-600 mr-3" />
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
                      <p className="text-indigo-600 font-medium">{member.position}</p>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <div className="text-sm text-gray-600 mb-2">
                      <strong>Spezialisierung:</strong> {member.specialization}
                    </div>
                  </div>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-gray-600">
                      <Mail className="w-4 h-4 mr-2 text-indigo-600" />
                      <a href={`mailto:${member.email}`} className="hover:text-indigo-600 transition-colors">
                        {member.email}
                      </a>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Phone className="w-4 h-4 mr-2 text-indigo-600" />
                      <span>{member.phone}</span>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Expertise:</h4>
                    <div className="flex flex-wrap gap-2">
                      {member.expertise.map((skill, index) => (
                        <span
                          key={index}
                          className="bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <button className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors">
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
            <Microscope className="w-8 h-8 text-indigo-600 mr-3" />
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
            <BookOpen className="w-8 h-8 text-indigo-600 mr-3" />
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
                
                <button className="w-full bg-gray-100 text-gray-700 py-2 px-4 rounded-md hover:bg-indigo-50 hover:text-indigo-600 transition-colors">
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
            <GraduationCap className="w-8 h-8 text-indigo-600 mr-3" />
            <h2 className="text-3xl font-bold text-gray-900">Lehrveranstaltungen</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {courses.map((course, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-indigo-100 text-indigo-800 text-xs font-semibold px-2 py-1 rounded">
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
            <Database className="w-8 h-8 text-indigo-600 mr-3" />
            <h2 className="text-3xl font-bold text-gray-900">Ressourcen</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {resources.map((resource, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-indigo-100 text-indigo-800 text-xs font-semibold px-2 py-1 rounded">
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
                
                <button className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors inline-flex items-center justify-center">
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
            <Calendar className="w-8 h-8 text-indigo-600 mr-3" />
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
            className="inline-flex items-center text-indigo-600 hover:text-indigo-800 font-semibold"
          >
            <ArrowRight className="w-4 h-4 mr-2 rotate-180" />
            Zurück zur Forschungsübersicht
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ModernSouthAsianStudies;