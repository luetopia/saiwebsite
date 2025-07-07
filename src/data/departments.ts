export interface Department {
  id: string;
  name: string;
  shortName: string;
  description: string;
  icon: string;
  color: string;
}

export const departments: Department[] = [
  {
    id: 'ethnology',
    name: 'Ethnologie',
    shortName: 'Ethnologie',
    description: 'Erforschung der kulturellen Vielfalt und sozialen Strukturen der Völker Südasiens',
    icon: 'Users',
    color: 'red'
  },
  {
    id: 'cultural-religious-history',
    name: 'Kultur- und Religionsgeschichte',
    shortName: 'Kultur & Religion',
    description: 'Untersuchung religiöser Traditionen, kultureller Entwicklungen und geistiger Strömungen',
    icon: 'BookOpen',
    color: 'purple'
  },
  {
    id: 'development-economics',
    name: 'Entwicklungsökonomie',
    shortName: 'Entwicklungsökonomie',
    description: 'Analyse wirtschaftlicher Entwicklungsprozesse und Entwicklungspolitik in Südasien',
    icon: 'Globe',
    color: 'green'
  },
  {
    id: 'geography',
    name: 'Geographie',
    shortName: 'Geographie',
    description: 'Erforschung der physischen und humangeographischen Strukturen der südasiatischen Region',
    icon: 'MapPin',
    color: 'orange'
  },
  {
    id: 'history',
    name: 'Geschichte',
    shortName: 'Geschichte',
    description: 'Historische Entwicklungen von der Antike bis zur Gegenwart in Südasien',
    icon: 'History',
    color: 'yellow'
  },
  {
    id: 'modern-south-asian-studies',
    name: 'Neusprachliche Südasienstudien',
    shortName: 'Neusprachliche Studien',
    description: 'Moderne Sprachen, Literatur und Sprachwissenschaft der südasiatischen Region',
    icon: 'Languages',
    color: 'indigo'
  },
  {
    id: 'political-science',
    name: 'Politikwissenschaft',
    shortName: 'Politikwissenschaft',
    description: 'Politische Systeme, Governance und gesellschaftliche Entwicklungen in Südasien',
    icon: 'Heart',
    color: 'teal'
  }
];

export const getDepartmentById = (id: string): Department | undefined => {
  return departments.find(dept => dept.id === id);
};

export const getDepartmentByName = (name: string): Department | undefined => {
  return departments.find(dept => dept.name === name || dept.shortName === name);
};