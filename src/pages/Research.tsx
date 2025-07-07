import React from 'react';
import { BookOpen, Microscope, ArrowRight, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getActiveProjects, getCompletedProjects } from '../data/projects';
import { getFeaturedPublications, publications } from '../data/publications';

const Research = () => {
  const activeProjects = getActiveProjects();
  const completedProjects = getCompletedProjects();
  const featuredPublications = getFeaturedPublications();
  const regularPublications = publications.filter(pub => !pub.featured);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-900 to-red-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Microscope className="w-16 h-16 mx-auto mb-6 text-red-200" />
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Forschung am SAI
            </h1>
            <p className="text-xl lg:text-2xl text-red-100">
              Interdisziplinäre Erforschung Südasiens in all seinen Facetten
            </p>
          </div>
        </div>
      </section>

      {/* Research Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Forschung am SAI im Überblick
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Das SAI erforscht Südasien aus verschiedenen wissenschaftlichen Perspektiven 
              und verbindet dabei traditionelle Disziplinen mit innovativen Ansätzen.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-red-50 rounded-xl">
              <div className="text-3xl font-bold text-red-600 mb-2">7</div>
              <div className="text-sm text-gray-700">Forschungsbereiche</div>
            </div>
            <div className="text-center p-6 bg-green-50 rounded-xl">
              <div className="text-3xl font-bold text-green-600 mb-2">24</div>
              <div className="text-sm text-gray-700">Aktive Projekte</div>
            </div>
            <div className="text-center p-6 bg-purple-50 rounded-xl">
              <div className="text-3xl font-bold text-purple-600 mb-2">41</div>
              <div className="text-sm text-gray-700">Forschende</div>
            </div>
            <div className="text-center p-6 bg-orange-50 rounded-xl">
              <div className="text-3xl font-bold text-orange-600 mb-2">15+</div>
              <div className="text-sm text-gray-700">Partnerinstitute</div>
            </div>
          </div>
        </div>
      </section>

      {/* Current Research Projects */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Forschungsprojekte
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl">
                Aktuelle und abgeschlossene Forschungsprojekte des SAI
              </p>
            </div>
            <Link
              to="/forschung/abgeschlossene-projekte"
              className="bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors inline-flex items-center"
            >
              Abgeschlossene Projekte
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
          
          <div className="space-y-8">
            {activeProjects.map((project, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-semibold">
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

      {/* Publications Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <BookOpen className="w-12 h-12 text-red-600 mx-auto mb-4" />
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Publikationen
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Aktuelle Veröffentlichungen unserer Wissenschaftlerinnen und Wissenschaftler
            </p>
          </div>

          {/* Featured Publications */}
          {featuredPublications.length > 0 && (
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Neuerscheinungen</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {featuredPublications.map((publication) => (
                  <div key={publication.id} className="bg-gray-50 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group">
                    <div className="relative">
                      <img
                        src={publication.cover}
                        alt={`Cover von ${publication.title}`}
                        className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 right-4">
                        <span className="bg-red-600 text-white text-xs font-semibold px-2 py-1 rounded">
                          {publication.year}
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <h4 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-red-600 transition-colors">
                        {publication.title}
                      </h4>
                      
                      <div className="mb-3">
                        <p className="text-sm font-medium text-gray-700 mb-1">Autoren:</p>
                        <p className="text-sm text-gray-600">
                          {publication.authors.join(", ")}
                        </p>
                      </div>
                      
                      <div className="mb-4">
                        <p className="text-sm font-medium text-gray-700 mb-1">Verlag:</p>
                        <p className="text-sm text-gray-600">{publication.publisher}</p>
                        {publication.isbn && (
                          <p className="text-xs text-gray-500">ISBN: {publication.isbn}</p>
                        )}
                      </div>
                      
                      <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                        {publication.description}
                      </p>
                      
                      <button className="inline-flex items-center justify-center w-full bg-red-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-red-700 transition-colors group">
                        Details
                        <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Regular Publications */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Weitere Publikationen</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {regularPublications.map((publication) => (
                <div key={publication.id} className="bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden group">
                  <div className="relative">
                    <img
                      src={publication.cover}
                      alt={`Cover von ${publication.title}`}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-3 right-3">
                      <span className="bg-gray-900 bg-opacity-75 text-white text-xs font-semibold px-2 py-1 rounded">
                        {publication.year}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-4">
                    <h4 className="text-base font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-red-600 transition-colors">
                      {publication.title}
                    </h4>
                    
                    <div className="mb-2">
                      <p className="text-xs font-medium text-gray-700 mb-1">Autoren:</p>
                      <p className="text-xs text-gray-600 line-clamp-2">
                        {publication.authors.join(", ")}
                      </p>
                    </div>
                    
                    <div className="mb-3">
                      <p className="text-xs font-medium text-gray-700 mb-1">Verlag:</p>
                      <p className="text-xs text-gray-600">{publication.publisher}</p>
                    </div>
                    
                    <button className="inline-flex items-center justify-center w-full bg-gray-100 text-gray-700 py-2 px-3 rounded-md text-sm font-medium hover:bg-red-50 hover:text-red-600 transition-colors group">
                      Details
                      <ExternalLink className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Publication Statistics */}
          <div className="mt-16 bg-gray-50 rounded-xl p-8 shadow-sm">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Publikationsstatistiken</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-red-600 mb-2">150+</div>
                <div className="text-sm text-gray-700">Publikationen/Jahr</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">25</div>
                <div className="text-sm text-gray-700">Monographien</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">12</div>
                <div className="text-sm text-gray-700">Herausgegebene Bände</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600 mb-2">8</div>
                <div className="text-sm text-gray-700">Internationale Verlage</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partnerships */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Internationale Kooperationen
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Das SAI pflegt enge Forschungspartnerschaften mit führenden Institutionen 
              in Südasien und weltweit
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Jawaharlal Nehru University", location: "New Delhi, Indien" },
              { name: "University of Colombo", location: "Colombo, Sri Lanka" },
              { name: "Tribhuvan University", location: "Kathmandu, Nepal" },
              { name: "University of Dhaka", location: "Dhaka, Bangladesch" },
              { name: "Quaid-i-Azam University", location: "Islamabad, Pakistan" },
              { name: "Royal University of Bhutan", location: "Thimphu, Bhutan" },
              { name: "Maldives National University", location: "Malé, Malediven" },
              { name: "University of Cambridge", location: "Cambridge, UK" }
            ].map((partner, index) => (
              <div key={index} className="bg-white rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-shadow">
                <h3 className="font-bold text-gray-900 mb-2">{partner.name}</h3>
                <p className="text-sm text-gray-600">{partner.location}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Research;