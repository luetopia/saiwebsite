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
  },
  {
    id: 15,
    title: "Kastensystem-Forschungstools",
    description: "Methodische Werkzeuge und Fragebögen für die Kastenforschung",
    type: "Toolkit",
    access: "Registriert",
    departments: ["ethnology"],
    tags: ["Kastensystem", "Forschung", "Methoden"]
  },
  {
    id: 16,
    title: "Ethnographische Methoden Handbuch",
    description: "Leitfaden für ethnographische Feldforschung in Südasien",
    type: "Handbuch",
    access: "Öffentlich",
    departments: ["ethnology"],
    tags: ["Ethnographie", "Methoden", "Feldforschung"]
  },
  {
    id: 17,
    title: "Sufistische Texte Portal",
    description: "Mehrsprachige Sammlung sufistischer Literatur aus Südasien",
    type: "Portal",
    access: "Öffentlich",
    departments: ["cultural-religious-history"],
    tags: ["Sufismus", "Texte", "Islam"]
  },
  {
    id: 18,
    title: "Buddhistische Studien Toolkit",
    description: "Forschungstools und Methoden für buddhistische Studien",
    type: "Toolkit",
    access: "Intern",
    departments: ["cultural-religious-history"],
    tags: ["Buddhismus", "Forschung", "Tools"]
  },
  {
    id: 19,
    title: "Handelspolitik-Analysewerkzeuge",
    description: "Software und Modelle zur Analyse von Handelspolitik und -auswirkungen",
    type: "Software",
    access: "Intern",
    departments: ["development-economics"],
    tags: ["Handel", "Politik", "Analyse"]
  },
  {
    id: 20,
    title: "Entwicklungsökonomie Methodenhandbuch",
    description: "Leitfaden für empirische Methoden in der Entwicklungsökonomie",
    type: "Handbuch",
    access: "Öffentlich",
    departments: ["development-economics"],
    tags: ["Methoden", "Entwicklung", "Ökonomie"]
  },
  {
    id: 21,
    title: "Südasien Klimadatenbank",
    description: "Umfassende Sammlung meteorologischer und klimatologischer Daten",
    type: "Datenbank",
    access: "Registriert",
    departments: ["geography"],
    tags: ["Klima", "Meteorologie", "Daten"]
  },
  {
    id: 22,
    title: "Fernerkundungs-Toolkit",
    description: "Software und Methoden für die Analyse von Satellitendaten",
    type: "Software",
    access: "Intern",
    departments: ["geography"],
    tags: ["Fernerkundung", "Satelliten", "Analyse"]
  },
  {
    id: 23,
    title: "Südasiatische Chronologie",
    description: "Interaktive Zeitleiste der südasiatischen Geschichte",
    type: "Portal",
    access: "Öffentlich",
    departments: ["history"],
    tags: ["Chronologie", "Geschichte", "Zeitleiste"]
  },
  {
    id: 24,
    title: "Historische Karten Südasiens",
    description: "Sammlung historischer und thematischer Karten",
    type: "Portal",
    access: "Intern",
    departments: ["history"],
    tags: ["Karten", "Geschichte", "Geographie"]
  },
  {
    id: 25,
    title: "Literaturanalyse-Tools",
    description: "Software für die computergestützte Analyse literarischer Texte",
    type: "Software",
    access: "Intern",
    departments: ["modern-south-asian-studies"],
    tags: ["Literatur", "Analyse", "Software"]
  },
  {
    id: 26,
    title: "Übersetzungsdatenbank",
    description: "Sammlung von Übersetzungen südasiatischer Literatur",
    type: "Datenbank",
    access: "Öffentlich",
    departments: ["modern-south-asian-studies"],
    tags: ["Übersetzung", "Literatur", "Mehrsprachig"]
  },
  {
    id: 27,
    title: "Medienanalyse-Tools",
    description: "Software zur Analyse politischer Kommunikation in sozialen Medien",
    type: "Software",
    access: "Intern",
    departments: ["political-science"],
    tags: ["Medien", "Politik", "Analyse"]
  },
  {
    id: 28,
    title: "Governance-Indikatoren Portal",
    description: "Interaktive Plattform für Governance-Messungen und -vergleiche",
    type: "Portal",
    access: "Öffentlich",
    departments: ["political-science"],
    tags: ["Governance", "Indikatoren", "Vergleich"]
  }
];

export const getResourcesByDepartment = (departmentId: string): Resource[] => {
  return resources.filter(resource => resource.departments.includes(departmentId));
};