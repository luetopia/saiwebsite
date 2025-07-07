import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Users, BookOpen, Microscope, Calendar, Mail, Phone, ExternalLink } from 'lucide-react';
import { departments, getDepartmentById } from '../../data/departments';
import { getStaffByDepartment } from '../../data/staff';
import { getPublicationsByDepartment } from '../../data/publications';
import { getProjectsByDepartment } from '../../data/projects';
import { getNewsByDepartment } from '../../data/news';
import { getEventsByDepartment } from '../../data/events';

const DepartmentDetail = () => {
  const { departmentId } = useParams<{ departmentId: string }>();
  const department = getDepartmentById(departmentId || '');
  
  if (!department) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Abteilung nicht gefunden</h1>
          <Link to="/institut" className="text-red-600 hover:text-red-800">
            Zurück zum Institut
          </Link>
        </div>
      </div>
    );
  }

  const staff = getStaffByDepartment(department.id);
  const publications = getPublicationsByDepartment(department.id);
  const projects = getProjectsByDepartment(department.id);
  const news = getNewsByDepartment(department.id);
  const events = getEventsByDepartment(department.id);

  const getColorClasses = (color: string) => {
    const colorMap: { [key: string]: { bg: string; text: string; accent: string } } = {
      red: { bg: 'bg-red-50', text: 'text-red-600', accent: 'bg-red-600' },
      purple: { bg: 'bg-purple-50', text: 'text-purple-600', accent: 'bg-purple-600' },
      green: { bg: 'bg-green-50', text: 'text-green-600', accent: 'bg-green-600' },
      orange: { bg: 'bg-orange-50', text: 'text-orange-600', accent: 'bg-orange-600' },
      yellow: { bg: 'bg-yellow-50', text: 'text-yellow-600', accent: 'bg-yellow-600' },
      indigo: { bg: 'bg-indigo-50', text: 'text-indigo-600', accent: 'bg-indigo-600' },
      teal: { bg: 'bg-teal-50', text: 'text-teal-600', accent: 'bg-teal-600' }
    };
    return colorMap[color] || colorMap.red;
  };

  const colors = getColorClasses(department.color);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className={`bg-gradient-to-r from-${department.color}-900 to-${department.color}-700 text-white py-16`}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              {department.name}
            </h1>
            <p className="text-xl lg:text-2xl text-opacity-90">
              {department.description}
            </p>
          </div>
        </div>
      </section>

      {/* Back Navigation */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <Link
            to="/institut"
            className={`inline-flex items-center ${colors.text} hover:opacity-80 font-semibold`}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Zurück zum Institut
          </Link>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            <div className={`text-center p-6 ${colors.bg} rounded-xl`}>
              <div className={`text-3xl font-bold ${colors.text} mb-2`}>{staff.length}</div>
              <div className="text-sm text-gray-700">Mitarbeiter</div>
            </div>
            <div className={`text-center p-6 ${colors.bg} rounded-xl`}>
              <div className={`text-3xl font-bold ${colors.text} mb-2`}>{projects.length}</div>
              <div className="text-sm text-gray-700">Projekte</div>
            </div>
            <div className={`text-center p-6 ${colors.bg} rounded-xl`}>
              <div className={`text-3xl font-bold ${colors.text} mb-2`}>{publications.length}</div>
              <div className="text-sm text-gray-700">Publikationen</div>
            </div>
            <div className={`text-center p-6 ${colors.bg} rounded-xl`}>
              <div className={`text-3xl font-bold ${colors.text} mb-2`}>{events.length}</div>
              <div className="text-sm text-gray-700">Veranstaltungen</div>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center mb-8">
            <Users className={`w-8 h-8 ${colors.text} mr-3`} />
            <h2 className="text-3xl font-bold text-gray-900">Unser Team</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {staff.map((member) => (
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
                      <p className={`${colors.text} font-medium`}>{member.position}</p>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <div className="text-sm text-gray-600 mb-2">
                      <strong>Spezialisierung:</strong> {member.specialization}
                    </div>
                  </div>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-gray-600">
                      <Mail className={`w-4 h-4 mr-2 ${colors.text}`} />
                      <a href={`mailto:${member.email}`} className={`hover:${colors.text} transition-colors`}>
                        {member.email}
                      </a>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Phone className={`w-4 h-4 mr-2 ${colors.text}`} />
                      <span>{member.phone}</span>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Expertise:</h4>
                    <div className="flex flex-wrap gap-2">
                      {member.expertise.map((skill, index) => (
                        <span
                          key={index}
                          className={`${colors.bg} ${colors.text} text-xs px-2 py-1 rounded-full`}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <button className={`w-full ${colors.accent} text-white py-2 px-4 rounded-md hover:opacity-90 transition-colors`}>
                    Kontakt
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center mb-8">
            <Microscope className={`w-8 h-8 ${colors.text} mr-3`} />
            <h2 className="text-3xl font-bold text-gray-900">Forschungsprojekte</h2>
          </div>
          <div className="space-y-8">
            {projects.map((project, index) => (
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

      {/* Publications */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center mb-8">
            <BookOpen className={`w-8 h-8 ${colors.text} mr-3`} />
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
                
                <button className={`w-full bg-gray-100 text-gray-700 py-2 px-4 rounded-md hover:${colors.bg} hover:${colors.text} transition-colors`}>
                  Details anzeigen
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Events */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center mb-8">
            <Calendar className={`w-8 h-8 ${colors.text} mr-3`} />
            <h2 className="text-3xl font-bold text-gray-900">Veranstaltungen</h2>
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
                    <span className="w-4 h-4 mr-2" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-4 h-4 mr-2" />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-2" />
                    <span>{event.speaker}</span>
                  </div>
                </div>
                
                <button className={`w-full ${colors.accent} text-white py-2 px-4 rounded-md hover:opacity-90 transition-colors`}>
                  Anmelden
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default DepartmentDetail;