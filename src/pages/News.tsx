import React, { useState } from 'react';
import { Calendar, User, Tag, ArrowRight, Search, Newspaper } from 'lucide-react';

const News = () => {
  const [selectedCategory, setSelectedCategory] = useState('Alle');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = ['Alle', 'Forschung', 'Veranstaltungen', 'Kooperationen', 'Auszeichnungen', 'Publikationen'];

  const newsItems = [
    {
      id: 1,
      title: "Neue Forschungskooperation mit der Jawaharlal Nehru University",
      summary: "Das Südasien-Institut erweitert seine internationalen Partnerschaften durch eine wegweisende Kooperation mit der renommierten JNU in Neu-Delhi. Die Zusammenarbeit umfasst gemeinsame Forschungsprojekte, Studentenaustausch und die Entwicklung neuer Lehrmethoden.",
      content: "Diese strategische Partnerschaft markiert einen wichtigen Meilenstein für die internationale Ausrichtung des SAI. Geplant sind gemeinsame Symposien, Forschungsaufenthalte und die Entwicklung innovativer digitaler Lehrformate.",
      date: "15. November 2024",
      author: "Prof. Dr. Maria Schmidt",
      category: "Kooperationen",
      image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800",
      featured: true
    },
    {
      id: 2,
      title: "Internationale Konferenz: 'Südasien im 21. Jahrhundert' erfolgreich abgeschlossen",
      summary: "Über 150 Wissenschaftler aus aller Welt diskutierten drei Tage lang aktuelle Entwicklungen in Politik, Wirtschaft und Gesellschaft Südasiens. Die Konferenz bot eine Plattform für den interdisziplinären Austausch.",
      content: "Die Konferenz behandelte Themen wie Klimawandel, Digitalisierung, Geschlechtergerechtigkeit und regionale Kooperationen. Besonders hervorzuheben waren die Podiumsdiskussionen mit hochrangigen Vertretern aus Politik und Wissenschaft.",
      date: "08. November 2024",
      author: "Dr. Sarah Weber",
      category: "Veranstaltungen",
      image: "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=800",
      featured: true
    },
    {
      id: 3,
      title: "DFG bewilligt Millionenprojekt zu Klimawandel und Migration",
      summary: "Das SAI erhält eine Förderung von 1,2 Millionen Euro für ein dreijähriges Forschungsprojekt zu den Auswirkungen des Klimawandels auf Migrationsbewegungen in Südasien.",
      content: "Das interdisziplinäre Team wird die komplexen Zusammenhänge zwischen Umweltveränderungen und menschlicher Mobilität untersuchen. Dabei stehen besonders die Küstenregionen Bangladeschs und die Gebirgsregionen Nepals im Fokus.",
      date: "25. Oktober 2024",
      author: "Prof. Dr. Klaus Müller",
      category: "Forschung",
      image: "https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=800",
      featured: false
    },
    {
      id: 4,
      title: "Prof. Dr. Rajesh Patel erhält Humboldt-Forschungspreis",
      summary: "Die Alexander von Humboldt-Stiftung würdigt damit seine herausragenden Beiträge zur Erforschung der modernen südasiatischen Literatur und seine Verdienste um die deutsch-indische Wissenschaftskooperation.",
      content: "Prof. Patel ist international anerkannt für seine Arbeiten zur Hindi- und Urdu-Literatur. Der Preis ist mit 60.000 Euro dotiert und ermöglicht langfristige Forschungsaufenthalte in Deutschland.",
      date: "18. Oktober 2024",
      author: "Pressestelle SAI",
      category: "Auszeichnungen",
      image: "https://images.pexels.com/photos/3184396/pexels-photo-3184396.jpeg?auto=compress&cs=tinysrgb&w=800",
      featured: false
    },
    {
      id: 5,
      title: "Neue Publikationsreihe 'Südasien Digital' gestartet",
      summary: "Das SAI lanciert eine innovative Open-Access-Publikationsreihe, die sich den Digital Humanities in der Südasienforschung widmet. Die ersten drei Bände sind bereits online verfügbar.",
      content: "Die Reihe macht Forschungsergebnisse frei zugänglich und fördert den wissenschaftlichen Austausch. Behandelt werden Themen wie digitale Archivierung, Datenvisualisierung und computergestützte Textanalyse.",
      date: "12. Oktober 2024",
      author: "Dr. Michael Fischer",
      category: "Publikationen",
      image: "https://images.pexels.com/photos/1370295/pexels-photo-1370295.jpeg?auto=compress&cs=tinysrgb&w=800",
      featured: false
    },
    {
      id: 6,
      title: "Studentische Forschungsgruppe bei internationalem Wettbewerb erfolgreich",
      summary: "Eine Gruppe von SAI-Studierenden belegt den ersten Platz beim 'Asian Studies Competition' der European Association for Asian Studies mit ihrer Arbeit über Urbanisierung in Indien.",
      content: "Das siebenköpfige Team überzeugte die Jury mit einer innovativen Studie über nachhaltige Stadtentwicklung in indischen Metropolen. Der Wettbewerb wurde virtuell durchgeführt und umfasste Teams aus 25 europäischen Universitäten.",
      date: "05. Oktober 2024",
      author: "Laura Becker, M.A.",
      category: "Auszeichnungen",
      image: "https://images.pexels.com/photos/3184454/pexels-photo-3184454.jpeg?auto=compress&cs=tinysrgb&w=800",
      featured: false
    }
  ];

  const upcomingEvents = [
    {
      id: 1,
      title: "Gastvorlesung: 'Indien und die globale Wirtschaft'",
      date: "28. November 2024",
      time: "18:00 Uhr",
      location: "Hörsaal SAI",
      speaker: "Prof. Dr. Amartya Sen"
    },
    {
      id: 2,
      title: "Workshop: Digital Humanities in der Südasienforschung",
      date: "05. Dezember 2024",
      time: "09:00-17:00 Uhr",
      location: "Seminarraum 1+2",
      speaker: "Dr. Sarah Weber"
    },
    {
      id: 3,
      title: "Kolloquium: Aktuelle Forschungsprojekte",
      date: "12. Dezember 2024",
      time: "14:00 Uhr",
      location: "Konferenzraum SAI",
      speaker: "SAI-Forscherteam"
    }
  ];

  const filteredNews = newsItems.filter(item => {
    const categoryMatch = selectedCategory === 'Alle' || item.category === selectedCategory;
    const searchMatch = searchTerm === '' || 
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.summary.toLowerCase().includes(searchTerm.toLowerCase());
    return categoryMatch && searchMatch;
  });

  const featuredNews = filteredNews.filter(item => item.featured);
  const regularNews = filteredNews.filter(item => !item.featured);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-900 to-red-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Newspaper className="w-16 h-16 mx-auto mb-6 text-red-200" />
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              News und Events
            </h1>
            <p className="text-xl lg:text-2xl text-red-100">
              Neuigkeiten aus Forschung, Lehre und dem Institutsleben
            </p>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Aktuelles vom SAI
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Bleiben Sie informiert über die neuesten Entwicklungen, Forschungsergebnisse 
              und Veranstaltungen am Südasien-Institut.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="text-center p-6 bg-red-50 rounded-xl">
              <div className="text-3xl font-bold text-red-600 mb-2">150+</div>
              <div className="text-sm text-gray-700">Nachrichten/Jahr</div>
            </div>
            <div className="text-center p-6 bg-green-50 rounded-xl">
              <div className="text-3xl font-bold text-green-600 mb-2">50+</div>
              <div className="text-sm text-gray-700">Veranstaltungen/Jahr</div>
            </div>
            <div className="text-center p-6 bg-purple-50 rounded-xl">
              <div className="text-3xl font-bold text-purple-600 mb-2">25+</div>
              <div className="text-sm text-gray-700">Pressemitteilungen</div>
            </div>
            <div className="text-center p-6 bg-orange-50 rounded-xl">
              <div className="text-3xl font-bold text-orange-600 mb-2">2-3x</div>
              <div className="text-sm text-gray-700">Newsletter/Monat</div>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
            {/* Search */}
            <div className="relative max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Nachrichten durchsuchen..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>
            
            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category
                      ? 'bg-red-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
          
          <div className="mt-4 text-sm text-gray-600">
            {filteredNews.length} {filteredNews.length === 1 ? 'Nachricht' : 'Nachrichten'} gefunden
          </div>
        </div>
      </section>

      {/* Featured News */}
      {featuredNews.length > 0 && (
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Highlights</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredNews.map((item) => (
                <article key={item.id} className="bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <div className="flex items-center space-x-4 mb-3">
                      <span className="bg-red-100 text-red-800 text-xs font-semibold px-2 py-1 rounded">
                        {item.category}
                      </span>
                      <div className="flex items-center text-sm text-gray-500">
                        <Calendar className="w-4 h-4 mr-1" />
                        {item.date}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-red-600 cursor-pointer">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{item.summary}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm text-gray-500">
                        <User className="w-4 h-4 mr-1" />
                        {item.author}
                      </div>
                      <button className="text-red-600 hover:text-red-800 font-semibold inline-flex items-center">
                        Weiterlesen
                        <ArrowRight className="ml-1 w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Regular News */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          {featuredNews.length > 0 && (
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Weitere Nachrichten</h2>
          )}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularNews.map((item) => (
              <article key={item.id} className="bg-white rounded-xl hover:shadow-md transition-shadow overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-40 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center space-x-4 mb-3">
                    <span className="bg-red-100 text-red-800 text-xs font-semibold px-2 py-1 rounded">
                      {item.category}
                    </span>
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="w-4 h-4 mr-1" />
                      {item.date}
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3 hover:text-red-600 cursor-pointer">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">{item.summary}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-500">
                      <User className="w-4 h-4 mr-1" />
                      {item.author}
                    </div>
                    <button className="text-red-600 hover:text-red-800 font-semibold inline-flex items-center text-sm">
                      Mehr
                      <ArrowRight className="ml-1 w-3 h-3" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Kommende Veranstaltungen
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Entdecken Sie unsere bevorstehenden Vorträge, Workshops und Konferenzen
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {upcomingEvents.map((event) => (
              <div key={event.id} className="bg-red-50 rounded-lg p-6 border-l-4 border-red-500">
                <div className="flex items-start space-x-4">
                  <div className="bg-red-100 rounded-lg p-3">
                    <Calendar className="w-6 h-6 text-red-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 mb-2">{event.title}</h3>
                    <div className="text-sm text-gray-600 space-y-1">
                      <p><strong>Datum:</strong> {event.date}</p>
                      <p><strong>Zeit:</strong> {event.time}</p>
                      <p><strong>Ort:</strong> {event.location}</p>
                      <p><strong>Referent:</strong> {event.speaker}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-red-900 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            SAI Newsletter abonnieren
          </h2>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            Bleiben Sie über aktuelle Entwicklungen, Veranstaltungen und Forschungsergebnisse informiert
          </p>
          <div className="max-w-md mx-auto">
            <div className="flex">
              <input
                type="email"
                placeholder="Ihre E-Mail-Adresse"
                className="flex-1 px-4 py-3 rounded-l-lg border-none focus:outline-none focus:ring-2 focus:ring-red-300 text-gray-900"
              />
              <button className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-r-lg font-semibold transition-colors">
                Abonnieren
              </button>
            </div>
            <p className="text-red-200 text-sm mt-2">
              Wir versenden etwa 2-3 Newsletter pro Monat. Abmeldung jederzeit möglich.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default News;