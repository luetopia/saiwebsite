import React from 'react';
import { CheckCircle, ArrowLeft, Calendar, Users, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getCompletedProjects } from '../data/projects';

const CompletedProjects = () => {
  const completedProjects = getCompletedProjects();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-900 to-green-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <CheckCircle className="w-16 h-16 mx-auto mb-6 text-green-200" />
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Abgeschlossene Forschungsprojekte
            </h1>
            <p className="text-xl lg:text-2xl text-green-100">
              Erfolgreich abgeschlossene Forschungsprojekte des SAI
            </p>
          </div>
        </div>
      </section>

      {/* Back Navigation */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <Link
            to="/forschung"
            className="inline-flex items-center text-green-600 hover:text-green-800 font-semibold"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Zurück zur Forschungsübersicht
          </Link>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Projektübersicht
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Diese Projekte haben wichtige Beiträge zur Südasienforschung geleistet 
              und bilden die Grundlage für weitere Forschungsarbeiten.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="text-center p-6 bg-green-50 rounded-xl">
              <div className="text-3xl font-bold text-green-600 mb-2">{completedProjects.length}</div>
              <div className="text-sm text-gray-700">Abgeschlossene Projekte</div>
            </div>
            <div className="text-center p-6 bg-blue-50 rounded-xl">
              <div className="text-3xl font-bold text-blue-600 mb-2">15+</div>
              <div className="text-sm text-gray-700">Publikationen</div>
            </div>
            <div className="text-center p-6 bg-purple-50 rounded-xl">
              <div className="text-3xl font-bold text-purple-600 mb-2">5</div>
              <div className="text-sm text-gray-700">Auszeichnungen</div>
            </div>
          </div>
        </div>
      </section>

      {/* Completed Projects */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="space-y-8">
            {completedProjects.map((project, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-semibold flex items-center">
                    <CheckCircle className="w-3 h-3 mr-1" />
                    {project.status}
                  </span>
                  <span className="text-sm text-gray-500">{project.duration}</span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-6">{project.description}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm mb-6">
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
                  <div>
                    <span className="text-gray-500">Laufzeit:</span>
                    <p className="font-medium text-gray-900">{project.startDate} - {project.endDate}</p>
                  </div>
                </div>

                {/* Project Results */}
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Projektergebnisse:</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                    <div className="flex items-center space-x-2">
                      <Award className="w-4 h-4 text-yellow-600" />
                      <span className="text-gray-700">2 Auszeichnungen</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="w-4 h-4 text-blue-600" />
                      <span className="text-gray-700">5 Publikationen</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4 text-green-600" />
                      <span className="text-gray-700">3 Konferenzen</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Wissenschaftlicher Impact
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Die abgeschlossenen Projekte haben wichtige Erkenntnisse für die 
              Südasienforschung und darüber hinaus geliefert
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-green-50 rounded-xl">
              <Award className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">Auszeichnungen</h3>
              <p className="text-gray-600 text-sm">Internationale Anerkennung für herausragende Forschung</p>
            </div>
            
            <div className="text-center p-6 bg-blue-50 rounded-xl">
              <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">Nachwuchsförderung</h3>
              <p className="text-gray-600 text-sm">Ausbildung der nächsten Forschergeneration</p>
            </div>
            
            <div className="text-center p-6 bg-purple-50 rounded-xl">
              <Calendar className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">Wissenstransfer</h3>
              <p className="text-gray-600 text-sm">Konferenzen und Workshops für die Fachgemeinschaft</p>
            </div>
            
            <div className="text-center p-6 bg-orange-50 rounded-xl">
              <CheckCircle className="w-12 h-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">Politikberatung</h3>
              <p className="text-gray-600 text-sm">Beratung von Regierungen und internationalen Organisationen</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CompletedProjects;