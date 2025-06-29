import React from 'react';
import { Heart, Calendar, Users, Database, Microscope, Newspaper, Mail, Phone, ExternalLink, ArrowRight, Clock, MapPin, BookOpen, GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';

const PoliticalScience = () => {
  const newsItems = [
    {
      id: 1,
      title: "Neue Studie zu Demokratie und sozialen Medien in Indien",
      date: "02. Dezember 2024",
      summary: "Dr. Sarah Weber analysiert den Einfluss digitaler Plattformen auf demokratische Prozesse.",
      category: "Demokratieforschung"
    },
    {
      id: 2,
      title: "Wahlbeobachtung in Bangladesh erfolgreich abgeschlossen",
      date: "25. November 2024",
      summary: "Internationales Team unter SAI-Leitung beobachtet Parlamentswahlen in Dhaka.",
      category: "Wahlforschung"
    },
    {
      id: 3,
      title: "Konferenz zu Föderalismus in Südasien",
      date: "18. November 2024",
      summary: "Experten diskutieren föderale Strukturen und ihre Herausforderungen in der Region.",
      category: "Föderalismus"
    }
  ];

  const teamMembers = [
    {
      id: 1,
      name: "Prof. Dr. Thomas Hoffmann",
      position: "Abteilungsleiter",
      specialization: "Demokratie und Governance in Südasien",
      email: "t.hoffmann@sai.uni-heidelberg.de",
      phone: "+49 6221 54-8961",
      office: "Raum 180",
      image: "https://images.pexels.com/photos/3831796/pexels-photo-3831796.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      expertise: ["Demokratieforschung", "Governance", "Politische Institutionen"]
    },
    {
      id: 2,
      name: "Dr. Sarah Weber",
      position: "Wissenschaftliche Mitarbeiterin",
      specialization: "Medien und Politik in Südasien",
      email: "s.weber@sai.uni-heidelberg.de",
      phone: "+49 6221 54-8962",
      office: "Raum 315",
      image: "https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      expertise: ["Politische Kommunikation", "Soziale Medien", "Wahlforschung"]
    },
    {
      id: 3,
      name: "Dr. Vikram Singh",
      position: "Postdoktorand",
      specialization: "Föderalismus und regionale Politik",
      email: "v.singh@sai.uni-heidelberg.de",
      phone: "+49 6221 54-8963",
      office: "Raum 435",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      expertise: ["Föderalismus", "Regionale Politik", "Konfliktforschung"]
    }
  ];

  const researchProjects = [
    {
      title: "Demokratie im digitalen Zeitalter: Südasien im Vergleich",
      description: "Analyse der Auswirkungen digitaler Technologien auf demokratische Prozesse in der Region.",
      duration: "2022-2025",
      funding: "DFG",
      leader: "Prof. Dr. Thomas Hoffmann",
      status: "Laufend",
      participants: 7
    },
    {
      title: "Soziale Medien und politische Partizipation in Indien",
      description: "Untersuchung der Rolle sozialer Medien bei der politischen Meinungsbildung.",
      duration: "2023-2026",
      funding: "BMBF",
      leader: "Dr. Sarah Weber",
      status: "Laufend",
      participants: 5
    },
    {
      title: "Föderalismus und ethnische Konflikte in Südasien",
      description: "Vergleichende Studie zu föderalen Lösungsansätzen für ethnische Spannungen.",
      duration: "2021-2024",
      funding: "VW-Stiftung",
      leader: "Dr. Vikram Singh",
      status: "Abschlussphase",
      participants: 6
    }
  ];

  const publications = [
    {
      id: 1,
      title: "Democracy and Digital Media in South Asia",
      authors: ["Prof. Dr. Thomas Hoffmann", "Dr. Sarah Weber"],
      publisher: "Cambridge University Press",
      year: "2024",
      type: "Monographie",
      description: "Umfassende Analyse der Digitalisierung demokratischer Prozesse in Südasien."
    },
    {
      id: 2,
      title: "Social Media and Political Participation in India",
      authors: ["Dr. Sarah Weber"],
      publisher: "Journal of Asian Politics",
      year: "2023",
      type: "Zeitschriftenartikel",
      description: "Empirische Studie zur politischen Nutzung sozialer Medien in Indien."
    },
    {
      id: 3,
      title: "Federalism and Ethnic Conflict in South Asia",
      authors: ["Dr. Vikram Singh", "Prof. Dr. Thomas Hoffmann"],
      publisher: "Oxford University Press",
      year: "2023",
      type: "Sammelband",
      description: "Vergleichende Analyse föderaler Strukturen und ethnischer Konflikte."
    }
  ];

  const courses = [
    {
      title: "Einführung in die Politikwissenschaft Südasiens",
      type: "Vorlesung",
      semester: "Wintersemester 2024/25",
      lecturer: "Prof. Dr. Thomas Hoffmann"
    },
    {
      title: "Demokratie und Governance in Südasien",
      type: "Hauptseminar",
      semester: "Wintersemester 2024/25",
      lecturer: "Prof. Dr. Thomas Hoffmann"
    },
    {
      title: "Medien und Politik in der digitalen Ära",
      type: "Seminar",
      semester: "Sommersemester 2025",
      lecturer: "Dr. Sarah Weber"
    },
    {
      title: "Föderalismus und regionale Politik",
      type: "Seminar",
      semester: "Sommersemester 2025",
      lecturer: "Dr. Vikram Singh"
    },
    {
      title: "Empirische Methoden der Politikforschung",
      type: "Methodenseminar",
      semester: "Wintersemester 2024/25",
      lecturer: "Dr. Sarah Weber"
    },
    {
      title: "Politikfeldanalyse: Südasien im Vergleich",
      type: "Praktikum",
      semester: "Sommersemester 2025",
      lecturer: "Prof. Dr. Thomas Hoffmann, Dr. Vikram Singh"
    }
  ];

  const resources = [
    {
      title: "Südasien Demokratie-Index",
      description: "Jährlicher Index zur Messung demokratischer Qualität in südasiatischen Ländern",
      type: "Index",
      access: "Öffentlich",
      url: "#"
    },
    {
      title: "Politische Datenbank Südasien",
      description: "Umfassende Sammlung politischer Daten, Wahlergebnisse und Umfragen",
      type: "Datenbank",
      access: "Registriert",
      url: "#"
    },
    {
      title: "Medienanalyse-Tools",
      description: "Software zur Analyse politischer Kommunikation in sozialen Medien",
      type: "Software",
      access: "Intern",
      url: "#"
    },
    {
      title: "Governance-Indikatoren Portal",
      description: "Interaktive Plattform für Governance-Messungen und -vergleiche",
      type: "Portal",
      access: "Öffentlich",
      url: "#"
    }
  ];

  const events = [
    {
      id: 1,
      title: "Konferenz: Demokratie in Südasien - Herausforderungen und Chancen",
      date: "15. Januar 2025",
      time: "09:00-18:00 Uhr",
      location: "Politikwissenschaftliches Seminar",
      type: "Konferenz",
      speaker: "Internationale Politikwissenschaftler"
    },
    {
      id: 2,
      title: "Workshop: Empirische Methoden der Politikforschung",
      date: "28. Februar 2025",
      time: "10:00-17:00 Uhr",
      location: "Methodenzentrum",
      type: "Workshop",
      speaker: "Dr. Vikram Singh"
    },
    {
      id: 3,
      title: "Podiumsdiskussion: Medien und Politik in der digitalen Ära",
      date: "22. März 2025",
      time: "18:00-20:00 Uhr",
      location: "Aula der Neuen Universität",
      type: "Podiumsdiskussion",
      speaker: "Dr. Sarah Weber"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-teal-900 to-teal-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Heart className="w-16 h-16 mx-auto mb-6 text-teal-200" />
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Politikwissenschaft
            </h1>
            <p className="text-xl lg:text-2xl text-teal-100">
              Politische Systeme, Governance und gesellschaftliche Entwicklungen in Südasien
            </p>
          </div>
        </div>
      </section>

      {/* Aktuelle Nachrichten */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center mb-8">
            <Newspaper className="w-8 h-8 text-teal-600 mr-3" />
            <h2 className="text-3xl font-bold text-gray-900">Aktuelle Nachrichten</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {newsItems.map((item) => (
              <article key={item.id} className="bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center space-x-2 mb-2">
                  <span className="bg-teal-100 text-teal-800 text-xs font-semibold px-2 py-1 rounded">
                    {item.category}
                  </span>
                  <span className="text-gray-500 text-sm">{item.date}</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 hover:text-teal-600 cursor-pointer">
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
            <Users className="w-8 h-8 text-teal-600 mr-3" />
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
                      <p className="text-teal-600 font-medium">{member.position}</p>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <div className="text-sm text-gray-600 mb-2">
                      <strong>Spezialisierung:</strong> {member.specialization}
                    </div>
                  </div>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-gray-600">
                      <Mail className="w-4 h-4 mr-2 text-teal-600" />
                      <a href={`mailto:${member.email}`} className="hover:text-teal-600 transition-colors">
                        {member.email}
                      </a>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Phone className="w-4 h-4 mr-2 text-teal-600" />
                      <span>{member.phone}</span>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Expertise:</h4>
                    <div className="flex flex-wrap gap-2">
                      {member.expertise.map((skill, index) => (
                        <span
                          key={index}
                          className="bg-teal-100 text-teal-800 text-xs px-2 py-1 rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <button className="w-full bg-teal-600 text-white py-2 px-4 rounded-md hover:bg-teal-700 transition-colors">
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
            <Microscope className="w-8 h-8 text-teal-600 mr-3" />
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
            <BookOpen className="w-8 h-8 text-teal-600 mr-3" />
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
                
                <button className="w-full bg-gray-100 text-gray-700 py-2 px-4 rounded-md hover:bg-teal-50 hover:text-teal-600 transition-colors">
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
            <GraduationCap className="w-8 h-8 text-teal-600 mr-3" />
            <h2 className="text-3xl font-bold text-gray-900">Lehrveranstaltungen</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {courses.map((course, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-teal-100 text-teal-800 text-xs font-semibold px-2 py-1 rounded">
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
            <Database className="w-8 h-8 text-teal-600 mr-3" />
            <h2 className="text-3xl font-bold text-gray-900">Ressourcen</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {resources.map((resource, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-teal-100 text-teal-800 text-xs font-semibold px-2 py-1 rounded">
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
                
                <button className="w-full bg-teal-600 text-white py-2 px-4 rounded-md hover:bg-teal-700 transition-colors inline-flex items-center justify-center">
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
            <Calendar className="w-8 h-8 text-teal-600 mr-3" />
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
            className="inline-flex items-center text-teal-600 hover:text-teal-800 font-semibold"
          >
            <ArrowRight className="w-4 h-4 mr-2 rotate-180" />
            Zurück zur Forschungsübersicht
          </Link>
        </div>
      </section>
    </div>
  );
};

export default PoliticalScience;