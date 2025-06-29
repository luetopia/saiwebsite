import React, { useState } from 'react';
import { Mail, Phone, ExternalLink, User, Filter, Users } from 'lucide-react';

const Staff = () => {
  const [selectedDepartment, setSelectedDepartment] = useState('Alle');
  const [selectedPosition, setSelectedPosition] = useState('Alle');

  const departments = [
    'Alle',
    'Ethnologie',
    'Kultur- und Religionsgeschichte', 
    'Entwicklungsökonomie',
    'Geographie',
    'Geschichte',
    'Neusprachliche Südasienstudien',
    'Politikwissenschaft',
    'Verwaltung'
  ];

  const positions = [
    'Alle',
    'Professor/in',
    'Privatdozent/in',
    'Wissenschaftliche/r Mitarbeiter/in',
    'Doktorand/in',
    'Lehrbeauftragte/r',
    'Verwaltung'
  ];

  const staff = [
    {
      id: 1,
      name: "Prof. Dr. Maria Schmidt",
      position: "Professor/in",
      department: "Politikwissenschaft",
      specialization: "Demokratisierung in Südasien",
      email: "m.schmidt@sai.uni-heidelberg.de",
      phone: "+49 6221 54-8901",
      office: "Raum 201",
      image: "https://images.pexels.com/photos/3831645/pexels-photo-3831645.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      publications: ["Democracy in South Asia", "Political Transformation"],
      expertise: ["Demokratieforschung", "Südasiatische Politik", "Governance"]
    },
    {
      id: 2,
      name: "Prof. Dr. Rajesh Patel",
      position: "Professor/in",
      department: "Neusprachliche Südasienstudien",
      specialization: "Hindi und Urdu Literatur",
      email: "r.patel@sai.uni-heidelberg.de",
      phone: "+49 6221 54-8902",
      office: "Raum 105",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      publications: ["Modern Hindi Literature", "Urdu Poetry Analysis"],
      expertise: ["Hindi Literatur", "Urdu Sprachwissenschaft", "Literaturtheorie"]
    },
    {
      id: 3,
      name: "Dr. Sarah Weber",
      position: "Wissenschaftliche/r Mitarbeiter/in",
      department: "Politikwissenschaft",
      specialization: "Medien und Politik in Indien",
      email: "s.weber@sai.uni-heidelberg.de",
      phone: "+49 6221 54-8903",
      office: "Raum 315",
      image: "https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      publications: ["Social Media and Democracy", "Digital Politics"],
      expertise: ["Politische Kommunikation", "Soziale Medien", "Indische Politik"]
    },
    {
      id: 4,
      name: "Prof. Dr. Klaus Müller",
      position: "Professor/in",
      department: "Entwicklungsökonomie",
      specialization: "Entwicklungsökonomie",
      email: "k.mueller@sai.uni-heidelberg.de",
      phone: "+49 6221 54-8904",
      office: "Raum 230",
      image: "https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      publications: ["Economic Development in South Asia", "Trade Relations"],
      expertise: ["Entwicklungsökonomie", "Internationale Wirtschaft", "Handelspolitik"]
    },
    {
      id: 5,
      name: "Dr. Priya Sharma",
      position: "Wissenschaftliche/r Mitarbeiter/in",
      department: "Kultur- und Religionsgeschichte",
      specialization: "Religionssoziologie",
      email: "p.sharma@sai.uni-heidelberg.de",
      phone: "+49 6221 54-8905",
      office: "Raum 118",
      image: "https://images.pexels.com/photos/3760613/pexels-photo-3760613.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      publications: ["Religion and Society", "Cultural Identity"],
      expertise: ["Religionssoziologie", "Kulturelle Identität", "Hinduismus"]
    },
    {
      id: 6,
      name: "PD Dr. Michael Fischer",
      position: "Privatdozent/in",
      department: "Geschichte",
      specialization: "Kolonialgeschichte Südasiens",
      email: "m.fischer@sai.uni-heidelberg.de",
      phone: "+49 6221 54-8906",
      office: "Raum 142",
      image: "https://images.pexels.com/photos/3831849/pexels-photo-3831849.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      publications: ["Colonial History", "British India"],
      expertise: ["Kolonialgeschichte", "Britisch-Indien", "Historische Forschung"]
    },
    {
      id: 7,
      name: "Laura Becker, M.A.",
      position: "Doktorand/in",
      department: "Kultur- und Religionsgeschichte",
      specialization: "Buddhismus in Sri Lanka",
      email: "l.becker@sai.uni-heidelberg.de",
      phone: "+49 6221 54-8907",
      office: "Raum 412",
      image: "https://images.pexels.com/photos/3760790/pexels-photo-3760790.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      publications: ["Buddhism in Modern Sri Lanka"],
      expertise: ["Buddhismus", "Sri Lanka", "Religionsgeschichte"]
    },
    {
      id: 8,
      name: "Thomas Hoffmann",
      position: "Verwaltung",
      department: "Verwaltung",
      specialization: "Bibliotheksleitung",
      email: "t.hoffmann@sai.uni-heidelberg.de",
      phone: "+49 6221 54-8910",
      office: "Bibliothek",
      image: "https://images.pexels.com/photos/3831796/pexels-photo-3831796.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      publications: [],
      expertise: ["Bibliothekswesen", "Informationsmanagement", "Digitale Archive"]
    }
  ];

  const filteredStaff = staff.filter(person => {
    const deptMatch = selectedDepartment === 'Alle' || person.department === selectedDepartment;
    const posMatch = selectedPosition === 'Alle' || person.position === selectedPosition;
    return deptMatch && posMatch;
  });

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-900 to-red-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Users className="w-16 h-16 mx-auto mb-6 text-red-200" />
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Personen am SAI
            </h1>
            <p className="text-xl lg:text-2xl text-red-100">
              Lernen Sie unser internationales Team von Forschern und Experten kennen
            </p>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Unser Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Das SAI vereint Wissenschaftlerinnen und Wissenschaftler verschiedener Disziplinen, 
              die gemeinsam die Vielfalt Südasiens erforschen.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="text-center p-6 bg-red-50 rounded-xl">
              <div className="text-3xl font-bold text-red-600 mb-2">41</div>
              <div className="text-sm text-gray-700">Wissenschaftler</div>
            </div>
            <div className="text-center p-6 bg-green-50 rounded-xl">
              <div className="text-3xl font-bold text-green-600 mb-2">7</div>
              <div className="text-sm text-gray-700">Abteilungen</div>
            </div>
            <div className="text-center p-6 bg-purple-50 rounded-xl">
              <div className="text-3xl font-bold text-purple-600 mb-2">15+</div>
              <div className="text-sm text-gray-700">Nationalitäten</div>
            </div>
            <div className="text-center p-6 bg-orange-50 rounded-xl">
              <div className="text-3xl font-bold text-orange-600 mb-2">200+</div>
              <div className="text-sm text-gray-700">Studierende</div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center md:space-x-6 space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2">
              <Filter className="w-5 h-5 text-gray-600" />
              <span className="font-semibold text-gray-700">Filter:</span>
            </div>
            
            <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-2 sm:space-y-0">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Abteilung</label>
                <select
                  value={selectedDepartment}
                  onChange={(e) => setSelectedDepartment(e.target.value)}
                  className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                >
                  {departments.map(dept => (
                    <option key={dept} value={dept}>{dept}</option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Position</label>
                <select
                  value={selectedPosition}
                  onChange={(e) => setSelectedPosition(e.target.value)}
                  className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                >
                  {positions.map(pos => (
                    <option key={pos} value={pos}>{pos}</option>
                  ))}
                </select>
              </div>
            </div>
            
            <div className="text-sm text-gray-600">
              {filteredStaff.length} von {staff.length} Personen
            </div>
          </div>
        </div>
      </section>

      {/* Staff Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredStaff.map((person) => (
              <div key={person.id} className="bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden">
                <div className="p-6">
                  {/* Profile Image */}
                  <div className="flex items-center mb-4">
                    <img
                      src={person.image}
                      alt={person.name}
                      className="w-16 h-16 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{person.name}</h3>
                      <p className="text-red-600 font-medium">{person.position}</p>
                    </div>
                  </div>
                  
                  {/* Department and Specialization */}
                  <div className="mb-4">
                    <div className="text-sm text-gray-600 mb-1">
                      <strong>Abteilung:</strong> {person.department}
                    </div>
                    <div className="text-sm text-gray-600">
                      <strong>Spezialisierung:</strong> {person.specialization}
                    </div>
                  </div>
                  
                  {/* Contact Information */}
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-gray-600">
                      <Mail className="w-4 h-4 mr-2 text-red-600" />
                      <a href={`mailto:${person.email}`} className="hover:text-red-600 transition-colors">
                        {person.email}
                      </a>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Phone className="w-4 h-4 mr-2 text-red-600" />
                      <span>{person.phone}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <User className="w-4 h-4 mr-2 text-red-600" />
                      <span>{person.office}</span>
                    </div>
                  </div>
                  
                  {/* Expertise */}
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Expertise:</h4>
                    <div className="flex flex-wrap gap-2">
                      {person.expertise.map((skill, index) => (
                        <span
                          key={index}
                          className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Publications */}
                  {person.publications.length > 0 && (
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Aktuelle Publikationen:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {person.publications.map((pub, index) => (
                          <li key={index} className="flex items-start">
                            <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                            {pub}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  {/* Actions */}
                  <div className="flex space-x-2 pt-4 border-t border-gray-200">
                    <a
                      href={`mailto:${person.email}`}
                      className="flex-1 bg-red-600 text-white py-2 px-4 rounded-md text-sm font-medium hover:bg-red-700 transition-colors text-center"
                    >
                      Kontakt
                    </a>
                    <button className="flex items-center justify-center w-10 h-10 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
                      <ExternalLink className="w-4 h-4 text-gray-600" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Department Overview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Unsere Abteilungen
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Das SAI ist interdisziplinär strukturiert und bringt Experten verschiedener 
              Fachrichtungen zusammen
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {departments.slice(1, -1).map((dept, index) => {
              const deptCount = staff.filter(person => person.department === dept).length;
              return (
                <div key={index} className="text-center p-4 bg-white rounded-lg hover:bg-gray-100 transition-colors">
                  <div className="text-2xl font-bold text-red-600 mb-1">{deptCount}</div>
                  <div className="text-xs text-gray-600">{dept}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Staff;