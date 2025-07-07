export interface Resource {
  id: number;
  title: string;
  description: string;
  type: 'Datenbank' | 'Digitales Archiv' | 'Portal' | 'Software' | 'Handbuch' | 'Toolkit' | 'Bibliothek';
  access: 'Öffentlich' | 'Registriert' | 'Intern';
  departments: string[]; // Array of department IDs
  url?: string;
  tags: string[];
}

export const resources: Resource[] = [
  {
    id: 1,
    title: "Südasiatische Ethnologie Datenbank",
    description: "Umfassende Sammlung ethnographischer Daten und Feldforschungsberichte",
    type: "Datenbank",
    access: "Intern",
    departments: ["ethnology"],
    tags: ["Ethnographie", "Feldforschung", "Daten"]
  },
  {
    id: 2,
    title: "Digitales Archiv indigener Kulturen",
    description: "Multimediale Sammlung von Dokumentationen indigener Praktiken und Traditionen",
    type: "Digitales Archiv",
    access: "Öffentlich",
    departments: ["ethnology"],
    tags: ["Indigene Völker", "Kultur", "Multimedia"]
  },
  {
    id: 3,
    title: "Digitale Sanskrit-Handschriften Sammlung",
    description: "Über 2000 digitalisierte Sanskrit-Handschriften mit Suchfunktion und Transkriptionen",
    type: "Digitales Archiv",
    access: "Öffentlich",
    departments: ["cultural-religious-history"],
    tags: ["Sanskrit", "Handschriften", "Religion"]
  },
  {
    id: 4,
    title: "Bhakti-Literatur Datenbank",
    description: "Umfassende Sammlung von Bhakti-Texten mit Übersetzungen und Kommentaren",
    type: "Datenbank",
    access: "Registriert",
    departments: ["cultural-religious-history"],
    tags: ["Bhakti", "Literatur", "Religion"]
  },
  {
    id: 5,
    title: "Südasien Wirtschaftsdatenbank",
    description: "Umfassende Sammlung makroökonomischer Daten aller südasiatischen Länder",
    type: "Datenbank",
    access: "Registriert",
    departments: ["development-economics"],
    tags: ["Wirtschaft", "Makroökonomie", "Statistik"]
  },
  {
    id: 6,
    title: "Mikrofinanz-Forschungsportal",
    description: "Zentrale Plattform für Mikrofinanzierungsforschung mit Tools und Datensätzen",
    type: "Portal",
    access: "Öffentlich",
    departments: ["development-economics"],
    tags: ["Mikrofinanz", "Entwicklung", "Forschung"]
  },
  {
    id: 7,
    title: "Himalaya-Gletscher Monitoring System",
    description: "Echtzeit-Überwachung von Gletschern mit Satellitendaten und automatischen Messstationen",
    type: "Portal",
    access: "Öffentlich",
    departments: ["geography"],
    tags: ["Gletscher", "Klimawandel", "Monitoring"]
  },
  {
    id: 8,
    title: "GIS-Portal für Südasien",
    description: "Geographische Informationssysteme und Kartenmaterial für die Region",
    type: "Portal",
    access: "Öffentlich",
    departments: ["geography"],
    tags: ["GIS", "Karten", "Geographie"]
  },
  {
    id: 9,
    title: "Digitales Kolonialarchiv Südasien",
    description: "Umfassende Sammlung von Dokumenten zur Kolonialzeit mit Suchfunktionen",
    type: "Digitales Archiv",
    access: "Öffentlich",
    departments: ["history"],
    tags: ["Kolonialzeit", "Archive", "Geschichte"]
  },
  {
    id: 10,
    title: "Indus-Zivilisation Datenbank",
    description: "Archäologische Funde und Befunde der Harappa-Kultur",
    type: "Datenbank",
    access: "Registriert",
    departments: ["history"],
    tags: ["Archäologie", "Indus", "Harappa"]
  },
  {
    id: 11,
    title: "Digitale Hindi-Literatur Bibliothek",
    description: "Umfassende Sammlung digitalisierter Hindi-Texte mit Suchfunktionen",
    type: "Digitale Bibliothek",
    access: "Öffentlich",
    departments: ["modern-south-asian-studies"],
    tags: ["Hindi", "Literatur", "Digital"]
  },
  {
    id: 12,
    title: "Südasiatische Sprachen Korpus",
    description: "Linguistische Korpora für Hindi, Urdu, Bengali und andere Sprachen",
    type: "Portal",
    access: "Registriert",
    departments: ["modern-south-asian-studies"],
    tags: ["Sprachen", "Korpus", "Linguistik"]
  },
  {
    id: 13,
    title: "Südasien Demokratie-Index",
    description: "Jährlicher Index zur Messung demokratischer Qualität in südasiatischen Ländern",
    type: "Portal",
    access: "Öffentlich",
    departments: ["political-science"],
    tags: ["Demokratie", "Index", "Politik"]
  },
  {
    id: 14,
    title: "Politische Datenbank Südasien",
    description: "Umfassende Sammlung politischer Daten, Wahlergebnisse und Umfragen",
    type: "Datenbank",
    access: "Registriert",
    departments: ["political-science"],
    tags: ["Politik", "Wahlen", "Daten"]
  }
];

export const getResourcesByDepartment = (departmentId: string): Resource[] => {
  return resources.filter(resource => resource.departments.includes(departmentId));
};