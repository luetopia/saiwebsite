import React from 'react';
import { BookOpen, Calendar, Users, Database, Microscope, Newspaper, Mail, Phone, ExternalLink, ArrowRight, Clock, MapPin, GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';

const CulturalReligiousHistory = () => {
  const newsItems = [
    {
      id: 1,
      title: "Neue Erkenntnisse zur Bhakti-Bewegung in Maharashtra",
      date: "20. November 2024",
      summary: "Dr. Priya Sharma präsentiert bahnbrechende Forschungsergebnisse zur regionalen Ausprägung der Bhakti-Tradition.",
      category: "Forschung"
    },
    {
      id: 2,
      title: "Digitalisierung mittelalterlicher Handschriften abgeschlossen",
      date: "12. November 2024",
      summary: "Das Projekt zur Digitalisierung von 500 Sanskrit-Handschriften wurde erfolgreich beendet.",
      category: "Digitalisierung"
    },
    {
      id: 3,
      title: "Internationale Tagung zu Religionsphilosophie",
      date: "28. Oktober 2024",
      summary: "Experten aus aller Welt diskutieren über moderne Interpretationen klassischer Texte.",
      category: "Veranstaltung"
    }
  ];

  const teamMembers = [
    {
      id: 1,
      name: "Prof. Dr. Priya Sharma",
      position: "Abteilungsleiterin",
      specialization: "Hinduistische Philosophie und Bhakti-Bewegung",
      email: "p.sharma@sai.uni-heidelberg.de",
      phone: "+49 6221 54-8911",
      office: "Raum 118",
      image: "https://images.pexels.com/photos/3760613/pexels-photo-3760613.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      expertise: ["Bhakti-Tradition", "Religionsphilosophie", "Sanskrit-Literatur"]
    },
    {
      id: 2,
      name: "Dr. Ahmed Hassan",
      position: "Wissenschaftlicher Mitarbeiter",
      specialization: "Islamische Kultur und Sufismus in Südasien",
      email: "a.hassan@sai.uni-heidelberg.de",
      phone: "+49 6221 54-8912",
      office: "Raum 220",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      expertise: ["Sufismus", "Islamische Philosophie", "Urdu-Literatur"]
    },
    {
      id: 3,
      name: "Dr. Laura Becker",
      position: "Postdoktorandin",
      specialization: "Buddhismus in Sri Lanka und Myanmar",
      email: "l.becker@sai.uni-heidelberg.de",
      phone: "+49 6221 54-8913",
      office: "Raum 412",
      image: "https://images.pexels.com/photos/3760790/pexels-photo-3760790.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      expertise: ["Theravada-Buddhismus", "Pali-Texte", "Klosterkultur"]
    }
  ];

  const researchProjects = [
    {
      title: "Bhakti-Bewegung und regionale Identitäten in Westindien",
      description: "Untersuchung der Rolle der Bhakti-Tradition bei der Formung regionaler kultureller Identitäten.",
      duration: "2022-2025",
      funding: "DFG",
      leader: "Prof. Dr. Priya Sharma",
      status: "Laufend",
      participants: 5
    },
    {
      title: "Sufismus und kultureller Austausch im Mogulreich",
      description: "Analyse der Rolle sufistischer Orden beim kulturellen und religiösen Austausch.",
      duration: "2023-2026",
      funding: "BMBF",
      leader: "Dr. Ahmed Hassan",
      status: "Laufend",
      participants: 4
    },
    {
      title: "Buddhistische Klosterkultur in Sri Lanka: Kontinuität und Wandel",
      description: "Ethnographische und historische Studie zur Entwicklung buddhistischer Klöster.",
      duration: "2021-2024",
      funding: "Alexander von Humboldt-Stiftung",
      leader: "Dr. Laura Becker",
      status: "Abschlussphase",
      participants: 3
    }
  ];

  const publications = [
    {
      id: 1,
      title: "The Bhakti Movement in Western India: Regional Variations and Cultural Impact",
      authors: ["Prof. Dr. Priya Sharma"],
      publisher: "Oxford University Press",
      year: "2024",
      type: "Monographie",
      description: "Umfassende Analyse der regionalen Ausprägungen der Bhakti-Bewegung in Westindien."
    },
    {
      id: 2,
      title: "Sufism and Cultural Exchange in Mughal India",
      authors: ["Dr. Ahmed Hassan", "Prof. Dr. Priya Sharma"],
      publisher: "Cambridge University Press",
      year: "2023",
      type: "Sammelband",
      description: "Interdisziplinäre Beiträge zum kulturellen Austausch im Mogulreich."
    },
    {
      id: 3,
      title: "Buddhist Monasticism in Contemporary Sri Lanka",
      authors: ["Dr. Laura Becker"],
      publisher: "University of Chicago Press",
      year: "2023",
      type: "Monographie",
      description: "Ethnographische Studie zur modernen buddhistischen Klosterkultur."
    }
  ];

  const courses = [
    {
      title: "Einführung in die Religionsgeschichte Südasiens",
      type: "Vorlesung",
      semester: "Wintersemester 2024/25",
      lecturer: "Prof. Dr. Priya Sharma"
    },
    {
      title: "Hinduistische Philosophie und Bhakti-Bewegung",
      type: "Hauptseminar",
      semester: "Wintersemester 2024/25",
      lecturer: "Prof. Dr. Priya Sharma"
    },
    {
      title: "Sufismus in Südasien: Geschichte und Gegenwart",
      type: "Seminar",
      semester: "Sommersemester 2025",
      lecturer: "Dr. Ahmed Hassan"
    },
    {
      title: "Buddhismus in Sri Lanka: Tradition und Moderne",
      type: "Seminar",
      semester: "Sommersemester 2025",
      lecturer: "Dr. Laura Becker"
    },
    {
      title: "Sanskrit-Texte lesen und interpretieren",
      type: "Sprachkurs",
      semester: "Wintersemester 2024/25",
      lecturer: "Prof. Dr. Priya Sharma"
    },
    {
      title: "Religionsvergleichende Methoden",
      type: "Methodenseminar",
      semester: "Sommersemester 2025",
      lecturer: "Dr. Ahmed Hassan, Dr. Laura Becker"
    }
  ];

  const resources = [
    {
      title: "Digitale Sanskrit-Handschriften Sammlung",
      description: "Über 2000 digitalisierte Sanskrit-Handschriften mit Suchfunktion und Transkriptionen",
      type: "Digitales Archiv",
      access: "Öffentlich",
      url: "#"
    },
    {
      title: "Bhakti-Literatur Datenbank",
      description: "Umfassende Sammlung von Bhakti-Texten mit Übersetzungen und Kommentaren",
      type: "Datenbank",
      access: "Registriert",
      url: "#"
    },
    {
      title: "Sufistische Texte Portal",
      description: "Mehrsprachige Sammlung sufistischer Literatur aus Südasien",
      type: "Portal",
      access: "Öffentlich",
      url: "#"
    },
    {
      title: "Buddhistische Studien Toolkit",
      description: "Forschungstools und Methoden für buddhistische Studien",
      type: "Toolkit",
      access: "Intern",
      url: "#"
    }
  ];

  const events = [
    {
      id: 1,
      title: "Symposium: Religionsphilosophie im modernen Südasien",
      date: "18. Dezember 2024",
      time: "09:00-18:00 Uhr",
      location: "Konferenzraum SAI",
      type: "Symposium",
      speaker: "Internationale Experten"
    },
    {
      id: 2,
      title: "Workshop: Digitale Methoden in der Religionsforschung",
      date: "25. Januar 2025",
      time: "10:00-16:00 Uhr",
      location: "Seminarraum 2",
      type: "Workshop",
      speaker: "Dr. Laura Becker"
    },
    {
      id: 3,
      title: "Vortrag: Sufismus und Poesie in der Mogulzeit",
      date: "08. Februar 2025",
      time: "18:00-19:30 Uhr",
      location: "Hörsaal SAI",
      type: "Vortrag",
      speaker: "Dr. Ahmed Hassan"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-900 to-purple-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <BookOpen className="w-16 h-16 mx-auto mb-6 text-purple-200" />
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Kultur- und Religionsgeschichte
            </h1>
            <p className="text-xl lg:text-2xl text-purple-100">
              Untersuchung religiöser Traditionen und kultureller Entwicklungen Südasiens
            </p>
          </div>
        </div>
      </section>

      {/* Aktuelle Nachrichten */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center mb-8">
            <Newspaper className="w-8 h-8 text-purple-600 mr-3" />
            <h2 className="text-3xl font-bold text-gray-900">Aktuelle Nachrichten</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {newsItems.map((item) => (
              <article key={item.id} className="bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center space-x-2 mb-2">
                  <span className="bg-purple-100 text-purple-800 text-xs font-semibold px-2 py-1 rounded">
                    {item.category}
                  </span>
                  <span className="text-gray-500 text-sm">{item.date}</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 hover:text-purple-600 cursor-pointer">
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
            <Users className="w-8 h-8 text-purple-600 mr-3" />
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
                      <p className="text-purple-600 font-medium">{member.position}</p>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <div className="text-sm text-gray-600 mb-2">
                      <strong>Spezialisierung:</strong> {member.specialization}
                    </div>
                  </div>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-gray-600">
                      <Mail className="w-4 h-4 mr-2 text-purple-600" />
                      <a href={`mailto:${member.email}`} className="hover:text-purple-600 transition-colors">
                        {member.email}
                      </a>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Phone className="w-4 h-4 mr-2 text-purple-600" />
                      <span>{member.phone}</span>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Expertise:</h4>
                    <div className="flex flex-wrap gap-2">
                      {member.expertise.map((skill, index) => (
                        <span
                          key={index}
                          className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <button className="w-full bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 transition-colors">
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
            <Microscope className="w-8 h-8 text-purple-600 mr-3" />
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
            <BookOpen className="w-8 h-8 text-purple-600 mr-3" />
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
                
                <button className="w-full bg-gray-100 text-gray-700 py-2 px-4 rounded-md hover:bg-purple-50 hover:text-purple-600 transition-colors">
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
            <GraduationCap className="w-8 h-8 text-purple-600 mr-3" />
            <h2 className="text-3xl font-bold text-gray-900">Lehrveranstaltungen</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {courses.map((course, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-purple-100 text-purple-800 text-xs font-semibold px-2 py-1 rounded">
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
            <Database className="w-8 h-8 text-purple-600 mr-3" />
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
            <Calendar className="w-8 h-8 text-purple-600 mr-3" />
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
            className="inline-flex items-center text-purple-600 hover:text-purple-800 font-semibold"
          >
            <ArrowRight className="w-4 h-4 mr-2 rotate-180" />
            Zurück zur Forschungsübersicht
          </Link>
        </div>
      </section>
    </div>
  );
};

export default CulturalReligiousHistory;