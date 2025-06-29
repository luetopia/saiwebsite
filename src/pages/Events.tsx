import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Users, ExternalLink, Filter } from 'lucide-react';

const Events = () => {
  const [selectedType, setSelectedType] = useState('Alle');
  const [selectedMonth, setSelectedMonth] = useState('Alle');

  const eventTypes = ['Alle', 'Vorlesung', 'Workshop', 'Konferenz', 'Kolloquium', 'Seminar', 'Diskussion'];
  const months = ['Alle', 'November', 'Dezember', 'Januar', 'Februar', 'März'];

  const events = [
    {
      id: 1,
      title: "Gastvorlesung: 'Indien und die globale Wirtschaft'",
      description: "Prof. Dr. Amartya Sen von der Harvard University spricht über Indiens Rolle in der Weltwirtschaft und aktuelle Herausforderungen der wirtschaftlichen Entwicklung.",
      date: "28. November 2024",
      time: "18:00 - 19:30 Uhr",
      location: "Hörsaal SAI",
      type: "Vorlesung",
      speaker: "Prof. Dr. Amartya Sen",
      institution: "Harvard University",
      capacity: 150,
      registered: 78,
      image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800",
      featured: true,
      registrationOpen: true
    },
    {
      id: 2,
      title: "Workshop: Digital Humanities in der Südasienforschung",
      description: "Zweitägiger Workshop zu innovativen digitalen Methoden in der Südasienforschung. Schwerpunkte: Datenvisualisierung, Textanalyse und digitale Archive.",
      date: "05. Dezember 2024",
      time: "09:00 - 17:00 Uhr",
      location: "Seminarraum 1+2",
      type: "Workshop",
      speaker: "Dr. Sarah Weber, Prof. Dr. Michael Fischer",
      institution: "SAI Heidelberg",
      capacity: 25,
      registered: 23,
      image: "https://images.pexels.com/photos/3184454/pexels-photo-3184454.jpeg?auto=compress&cs=tinysrgb&w=800",
      featured: true,
      registrationOpen: false
    },
    {
      id: 3,
      title: "Kolloquium: Aktuelle Forschungsprojekte des SAI",
      description: "Präsentation und Diskussion aktueller Forschungsprojekte der SAI-Wissenschaftler. Schwerpunkt: Klimawandel und Migration in Südasien.",
      date: "12. Dezember 2024",
      time: "14:00 - 16:00 Uhr",
      location: "Konferenzraum SAI",
      type: "Kolloquium",
      speaker: "SAI-Forscherteam",
      institution: "SAI Heidelberg",
      capacity: 40,
      registered: 15,
      image: "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=800",
      featured: false,
      registrationOpen: true
    },
    {
      id: 4,
      title: "Internationale Konferenz: 'Südasien und Nachhaltigkeit'",
      description: "Dreitägige internationale Konferenz zu nachhaltiger Entwicklung in Südasien mit Fokus auf Umwelt, Wirtschaft und Gesellschaft.",
      date: "15. Januar 2025",
      time: "09:00 - 18:00 Uhr",
      location: "Internationales Wissenschaftsforum Heidelberg",
      type: "Konferenz",
      speaker: "Internationale Experten",
      institution: "SAI Heidelberg & Partner",
      capacity: 200,
      registered: 45,
      image: "https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=800",
      featured: true,
      registrationOpen: true
    },
    {
      id: 5,
      title: "Seminar: Moderne Hindi-Literatur",
      description: "Wöchentliches Seminar zur Analyse zeitgenössischer Hindi-Literatur mit Schwerpunkt auf Werken des 21. Jahrhunderts.",
      date: "Jeden Dienstag ab 09. Januar 2025",
      time: "10:00 - 12:00 Uhr",
      location: "Seminarraum 3",
      type: "Seminar",
      speaker: "Prof. Dr. Rajesh Patel",
      institution: "SAI Heidelberg",
      capacity: 20,
      registered: 18,
      image: "https://images.pexels.com/photos/3760613/pexels-photo-3760613.jpeg?auto=compress&cs=tinysrgb&w=800",
      featured: false,
      registrationOpen: true
    },
    {
      id: 6,
      title: "Podiumsdiskussion: 'Demokratie in Südasien'",
      description: "Diskussion über aktuelle Herausforderungen und Entwicklungen der Demokratie in den Ländern Südasiens mit hochrangigen Experten.",
      date: "22. Februar 2025",
      time: "19:00 - 21:00 Uhr",
      location: "Aula der Neuen Universität",
      type: "Diskussion",
      speaker: "Internationale Politikexperten",
      institution: "SAI Heidelberg",
      capacity: 300,
      registered: 67,
      image: "https://images.pexels.com/photos/3831849/pexels-photo-3831849.jpeg?auto=compress&cs=tinysrgb&w=800",
      featured: false,
      registrationOpen: true
    }
  ];

  const filteredEvents = events.filter(event => {
    const typeMatch = selectedType === 'Alle' || event.type === selectedType;
    const monthMatch = selectedMonth === 'Alle' || event.date.includes(selectedMonth);
    return typeMatch && monthMatch;
  });

  const featuredEvents = filteredEvents.filter(event => event.featured);
  const regularEvents = filteredEvents.filter(event => !event.featured);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Veranstaltungen am SAI
            </h1>
            <p className="text-xl lg:text-2xl text-blue-100">
              Vorlesungen, Workshops, Konferenzen und weitere akademische Veranstaltungen
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2">
              <Filter className="w-5 h-5 text-gray-600" />
              <span className="font-semibold text-gray-700">Filter:</span>
            </div>
            
            <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-2 sm:space-y-0">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Veranstaltungstyp</label>
                <select
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {eventTypes.map(type => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Monat</label>
                <select
                  value={selectedMonth}
                  onChange={(e) => setSelectedMonth(e.target.value)}
                  className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {months.map(month => (
                    <option key={month} value={month}>{month}</option>
                  ))}
                </select>
              </div>
            </div>
            
            <div className="text-sm text-gray-600">
              {filteredEvents.length} {filteredEvents.length === 1 ? 'Veranstaltung' : 'Veranstaltungen'}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Events */}
      {featuredEvents.length > 0 && (
        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Highlights</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredEvents.map((event) => (
                <div key={event.id} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded">
                        {event.type}
                      </span>
                      <div className={`text-xs font-semibold px-2 py-1 rounded ${
                        event.registrationOpen 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-red-100 text-red-800'
                      }`}>
                        {event.registrationOpen ? 'Anmeldung offen' : 'Ausgebucht'}
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{event.title}</h3>
                    <p className="text-gray-600 mb-4">{event.description}</p>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-sm text-gray-600">
                        <Calendar className="w-4 h-4 mr-2 text-blue-600" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <Clock className="w-4 h-4 mr-2 text-blue-600" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <MapPin className="w-4 h-4 mr-2 text-blue-600" />
                        <span>{event.location}</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <Users className="w-4 h-4 mr-2 text-blue-600" />
                        <span>{event.registered}/{event.capacity} Teilnehmer</span>
                      </div>
                    </div>
                    
                    <div className="bg-gray-50 rounded-lg p-3 mb-4">
                      <div className="text-sm text-gray-700">
                        <strong>Referent:</strong> {event.speaker}
                      </div>
                      <div className="text-sm text-gray-600">{event.institution}</div>
                    </div>
                    
                    {/* Registration Progress */}
                    <div className="mb-4">
                      <div className="flex justify-between text-sm text-gray-600 mb-1">
                        <span>Anmeldungen</span>
                        <span>{Math.round((event.registered / event.capacity) * 100)}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                          style={{ width: `${(event.registered / event.capacity) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                    
                    <div className="flex space-x-3">
                      <button 
                        className={`flex-1 py-2 px-4 rounded-md font-medium transition-colors ${
                          event.registrationOpen
                            ? 'bg-blue-600 text-white hover:bg-blue-700'
                            : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                        }`}
                        disabled={!event.registrationOpen}
                      >
                        {event.registrationOpen ? 'Anmelden' : 'Ausgebucht'}
                      </button>
                      <button className="flex items-center justify-center w-12 h-10 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
                        <ExternalLink className="w-4 h-4 text-gray-600" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Regular Events */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          {featuredEvents.length > 0 && (
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Weitere Veranstaltungen</h2>
          )}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularEvents.map((event) => (
              <div key={event.id} className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded">
                    {event.type}
                  </span>
                  <div className={`text-xs font-semibold px-2 py-1 rounded ${
                    event.registrationOpen 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-red-100 text-red-800'
                  }`}>
                    {event.registrationOpen ? 'Offen' : 'Voll'}
                  </div>
                </div>
                
                <h3 className="text-lg font-bold text-gray-900 mb-2">{event.title}</h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{event.description}</p>
                
                <div className="space-y-1 mb-4 text-sm text-gray-600">
                  <div className="flex items-center">
                    <Calendar className="w-3 h-3 mr-2" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-3 h-3 mr-2" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-3 h-3 mr-2" />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="w-3 h-3 mr-2" />
                    <span>{event.registered}/{event.capacity}</span>
                  </div>
                </div>
                
                <div className="bg-white rounded p-2 mb-3 text-xs">
                  <div className="font-semibold text-gray-900">{event.speaker}</div>
                  <div className="text-gray-600">{event.institution}</div>
                </div>
                
                <button 
                  className={`w-full py-2 px-4 rounded-md text-sm font-medium transition-colors ${
                    event.registrationOpen
                      ? 'bg-blue-600 text-white hover:bg-blue-700'
                      : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  }`}
                  disabled={!event.registrationOpen}
                >
                  {event.registrationOpen ? 'Details & Anmeldung' : 'Ausgebucht'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Calendar */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Veranstaltungskalender
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Alle kommenden Termine auf einen Blick
            </p>
          </div>
          
          <div className="bg-white rounded-xl p-8 shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="font-bold text-gray-900 mb-4">November 2024</h3>
                <div className="space-y-2">
                  <div className="text-sm text-gray-600">28. Nov - Gastvorlesung Indien</div>
                </div>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-4">Dezember 2024</h3>
                <div className="space-y-2">
                  <div className="text-sm text-gray-600">05. Dez - Digital Humanities Workshop</div>
                  <div className="text-sm text-gray-600">12. Dez - Forschungskolloquium</div>
                </div>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-4">Januar 2025</h3>
                <div className="space-y-2">
                  <div className="text-sm text-gray-600">09. Jan - Hindi-Literatur Seminar</div>
                  <div className="text-sm text-gray-600">15. Jan - Nachhaltigkeitskonferenz</div>
                </div>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                Vollständigen Kalender anzeigen
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;