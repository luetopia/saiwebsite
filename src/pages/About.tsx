import React from 'react';
import { History, Target, Award, Users, Building2, Globe, BookOpen, Microscope, Calendar, ArrowRight, MapPin, Languages, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { departments } from '../data/departments';

const About = () => {
  const milestones = [
    {
      year: "1963",
      title: "Gründung des Südasien-Instituts",
      description: "Das SAI wird als erstes universitäres Institut für Südasienforschung in Deutschland gegründet und etabliert sich als Pionier der interdisziplinären Südasienforschung."
    },
    {
      year: "1975",
      title: "Erweiterung der Forschungsbereiche",
      description: "Aufbau neuer Abteilungen für Wirtschafts- und Sozialwissenschaften sowie Etablierung der ersten Kooperationen mit südasiatischen Universitäten."
    },
    {
      year: "1990",
      title: "Internationale Vernetzung",
      description: "Aufbau strategischer Partnerschaften mit führenden Universitäten in Südasien und Gründung des ersten Austauschprogramms für Studierende."
    },
    {
      year: "2010",
      title: "Digitalisierung und Innovation",
      description: "Etablierung digitaler Forschungsmethoden, Aufbau der digitalen Bibliothek und Einführung von Online-Ressourcen für die Südasienforschung."
    },
    {
      year: "2020",
      title: "CATS Integration",
      description: "Integration in das Centre for Asian and Transcultural Studies (CATS) und Stärkung der interdisziplinären Zusammenarbeit innerhalb der Universität Heidelberg."
    },
    {
      year: "2024",
      title: "Exzellenz-Initiative",
      description: "Das SAI wird als Exzellenz-Zentrum für Südasienforschung ausgezeichnet und erhält zusätzliche Förderung für innovative Forschungsprojekte."
    }
  ];

  const coreValues = [
    {
      icon: <Target className="w-8 h-8 text-red-600" />,
      title: "Exzellenz in der Forschung",
      description: "Wir streben nach höchsten wissenschaftlichen Standards und innovativen Forschungsansätzen in allen Bereichen der Südasienstudien.",
      details: ["Peer-Review Publikationen", "Internationale Anerkennung", "Methodische Innovation"]
    },
    {
      icon: <Users className="w-8 h-8 text-green-600" />,
      title: "Interdisziplinäre Zusammenarbeit",
      description: "Verschiedene Disziplinen arbeiten zusammen, um komplexe Fragen zu Südasien ganzheitlich zu erforschen.",
      details: ["7 Fachbereiche", "Gemeinsame Projekte", "Methodenvielfalt"]
    },
    {
      icon: <Globe className="w-8 h-8 text-blue-600" />,
      title: "Internationale Vernetzung",
      description: "Enge Kooperationen mit Partnern in Südasien und weltweit stärken unsere Forschung und fördern den wissenschaftlichen Austausch.",
      details: ["25+ Partnerinstitute", "Austauschprogramme", "Gemeinsame Publikationen"]
    },
    {
      icon: <Award className="w-8 h-8 text-purple-600" />,
      title: "Gesellschaftliche Relevanz",
      description: "Unsere Forschung trägt zur Lösung aktueller gesellschaftlicher Herausforderungen bei und fördert das Verständnis zwischen den Kulturen.",
      details: ["Politikberatung", "Öffentliche Vorträge", "Medienarbeit"]
    }
  ];

  const achievements = [
    {
      year: "2024",
      title: "DFG-Exzellenzcluster Bewilligung",
      description: "Erhalt einer Förderung von 2,5 Millionen Euro für das Projekt 'Südasien im globalen Wandel'"
    },
    {
      year: "2023",
      title: "UNESCO-Partnerschaft",
      description: "Offizielle Anerkennung als UNESCO-Partner für Bildung und Kulturerhalt in Südasien"
    },
    {
      year: "2022",
      title: "Humboldt-Forschungspreis",
      description: "Prof. Dr. Rajesh Patel erhält den renommierten Humboldt-Forschungspreis"
    }
  ];

  const getIconComponent = (iconName: string) => {
    const iconMap: { [key: string]: React.ComponentType<any> } = {
      Users,
      BookOpen,
      Globe,
      MapPin,
      History,
      Languages,
      Heart
    };
    const IconComponent = iconMap[iconName] || Users;
    return <IconComponent className="w-8 h-8" />;
  };

  const getColorClasses = (color: string) => {
    const colorMap: { [key: string]: string } = {
      red: 'text-red-600',
      purple: 'text-purple-600',
      green: 'text-green-600',
      orange: 'text-orange-600',
      yellow: 'text-yellow-600',
      indigo: 'text-indigo-600',
      teal: 'text-teal-600'
    };
    return colorMap[color] || 'text-red-600';
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-900 to-red-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Building2 className="w-16 h-16 mx-auto mb-6 text-red-200" />
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Das Südasien-Institut
            </h1>
            <p className="text-xl lg:text-2xl text-red-100">
              Seit über 60 Jahren führend in der interdisziplinären Erforschung Südasiens
            </p>
          </div>
        </div>
      </section>

      {/* Institute Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Das SAI im Überblick
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Als Deutschlands führende Forschungseinrichtung für Südasienstudien verbinden wir 
              traditionelle geisteswissenschaftliche Methoden mit innovativen Forschungsansätzen.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="text-center p-6 bg-red-50 rounded-xl">
              <div className="text-3xl font-bold text-red-600 mb-2">7</div>
              <div className="text-sm text-gray-700">Abteilungen</div>
            </div>
            <div className="text-center p-6 bg-green-50 rounded-xl">
              <div className="text-3xl font-bold text-green-600 mb-2">41</div>
              <div className="text-sm text-gray-700">Wissenschaftler</div>
            </div>
            <div className="text-center p-6 bg-purple-50 rounded-xl">
              <div className="text-3xl font-bold text-purple-600 mb-2">24</div>
              <div className="text-sm text-gray-700">Aktive Projekte</div>
            </div>
            <div className="text-center p-6 bg-orange-50 rounded-xl">
              <div className="text-3xl font-bold text-orange-600 mb-2">200+</div>
              <div className="text-sm text-gray-700">Studierende</div>
            </div>
          </div>
        </div>
      </section>

      {/* Departments Section - Moved up */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Unsere Abteilungen
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Das SAI ist in sieben spezialisierte Abteilungen gegliedert, die eng zusammenarbeiten
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {departments.map((department, index) => (
              <Link
                key={index}
                to={`/institut/${department.id}`}
                className="bg-white rounded-xl p-6 hover:shadow-lg transition-all duration-300 group"
              >
                <div className={`mb-4 group-hover:scale-110 transition-transform duration-300 ${getColorClasses(department.color)}`}>
                  {getIconComponent(department.icon)}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors">
                  {department.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4">{department.description}</p>
                
                <div className="mt-4 flex items-center text-red-600 group-hover:text-red-700 font-semibold text-sm">
                  Mehr erfahren
                  <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Unsere Mission
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Das Südasien-Institut (SAI) der Universität Heidelberg ist Deutschlands führende 
                Forschungseinrichtung für die wissenschaftliche Auseinandersetzung mit Südasien. 
                Wir erforschen diese kulturell, politisch und wirtschaftlich bedeutende Region 
                mit einem interdisziplinären Ansatz, der Geschichte, Politik, Wirtschaft, Kultur, 
                Sprachen und Religionen miteinander verbindet.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Unser Ziel ist es, durch exzellente Forschung, innovative Lehre und den Dialog 
                zwischen Wissenschaft und Gesellschaft zum Verständnis Südasiens beizutragen 
                und die Beziehungen zwischen Deutschland und dieser dynamischen Region zu stärken.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <BookOpen className="w-8 h-8 text-red-600 mb-2" />
                  <h3 className="font-bold text-gray-900 mb-1">Forschung</h3>
                  <p className="text-sm text-gray-600">Interdisziplinäre Spitzenforschung</p>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <Users className="w-8 h-8 text-green-600 mb-2" />
                  <h3 className="font-bold text-gray-900 mb-1">Lehre</h3>
                  <p className="text-sm text-gray-600">Innovative Studienprogramme</p>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <Globe className="w-8 h-8 text-blue-600 mb-2" />
                  <h3 className="font-bold text-gray-900 mb-1">Vernetzung</h3>
                  <p className="text-sm text-gray-600">Internationale Kooperationen</p>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <Microscope className="w-8 h-8 text-purple-600 mb-2" />
                  <h3 className="font-bold text-gray-900 mb-1">Innovation</h3>
                  <p className="text-sm text-gray-600">Methodische Weiterentwicklung</p>
                </div>
              </div>
            </div>
            
            <div className="bg-red-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-red-900 mb-6">Unser Forschungsgebiet</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-600 rounded-full mt-2"></div>
                  <div>
                    <p className="font-semibold text-red-900">8 Länder im Fokus</p>
                    <p className="text-red-700 text-sm">Indien, Pakistan, Bangladesh, Sri Lanka, Nepal, Bhutan, Malediven, Afghanistan</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                  <div>
                    <p className="font-semibold text-red-900">1,9 Milliarden Menschen</p>
                    <p className="text-red-700 text-sm">Etwa 25% der Weltbevölkerung leben in Südasien</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2"></div>
                  <div>
                    <p className="font-semibold text-red-900">Kulturelle Vielfalt</p>
                    <p className="text-red-700 text-sm">Hunderte von Sprachen, Religionen und Kulturen</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-orange-600 rounded-full mt-2"></div>
                  <div>
                    <p className="font-semibold text-red-900">Wirtschaftsdynamik</p>
                    <p className="text-red-700 text-sm">Schnell wachsende Volkswirtschaften mit globaler Bedeutung</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Unsere Werte
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Die Grundprinzipien, die unsere Arbeit und unser Zusammenleben am SAI prägen
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {coreValues.map((value, index) => (
              <div key={index} className="bg-white rounded-xl p-8 hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  {value.icon}
                  <h3 className="text-xl font-bold text-gray-900 ml-3">{value.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{value.description}</p>
                <div className="space-y-2">
                  {value.details.map((detail, detailIndex) => (
                    <div key={detailIndex} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-red-600 rounded-full"></div>
                      <span className="text-sm text-gray-700">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* History Timeline */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <History className="w-12 h-12 text-red-600 mx-auto mb-4" />
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Unsere Geschichte
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Wichtige Meilensteine in der Entwicklung des Südasien-Instituts
            </p>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-0.5 h-full w-0.5 bg-red-200"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`flex-1 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                    <div className={`bg-gray-50 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                      <div className="text-2xl font-bold text-red-600 mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{milestone.title}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                  
                  <div className="w-4 h-4 bg-red-600 rounded-full border-4 border-white shadow-md z-10"></div>
                  
                  <div className="flex-1"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Recent Achievements */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <Award className="w-12 h-12 text-red-600 mx-auto mb-4" />
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Aktuelle Erfolge
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Auszeichnungen und Meilensteine der letzten Jahre
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="text-center mb-4">
                  <div className="text-2xl font-bold text-red-600 mb-2">{achievement.year}</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{achievement.title}</h3>
                </div>
                <p className="text-gray-600 text-sm text-center">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-red-900 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Entdecken Sie das SAI
          </h2>
          <p className="text-xl text-red-100 mb-8 max-w-3xl mx-auto">
            Erfahren Sie mehr über unsere Forschung, Studienprogramme und Möglichkeiten zur Zusammenarbeit
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link
              to="/forschung"
              className="bg-white text-red-900 px-8 py-3 rounded-lg font-semibold hover:bg-red-50 transition-colors inline-flex items-center justify-center"
            >
              Unsere Forschung
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/studieren-am-sai"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-red-900 transition-colors inline-flex items-center justify-center"
            >
              Studienprogramme
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/kontakt"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-red-900 transition-colors inline-flex items-center justify-center"
            >
              Kontakt
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;