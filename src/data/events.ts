export interface Event {
  id: number;
  title: string;
  description?: string;
  date: string;
  time: string;
  location: string;
  type: 'Vorlesung' | 'Workshop' | 'Konferenz' | 'Kolloquium' | 'Seminar' | 'Diskussion' | 'Vortrag';
  speaker: string;
  speakerId?: number; // ID from staff database
  departments: string[]; // Array of department IDs
  capacity?: number;
  registered?: number;
  registrationOpen?: boolean;
  image?: string;
  featured?: boolean;
  tags: string[];
}

export const events: Event[] = [
  {
    id: 1,
    title: "Gastvorlesung: 'Indien und die globale Wirtschaft'",
    description: "Prof. Dr. Amartya Sen von der Harvard University spricht über Indiens Rolle in der Weltwirtschaft und aktuelle Herausforderungen der wirtschaftlichen Entwicklung.",
    date: "28. November 2024",
    time: "18:00 - 19:30 Uhr",
    location: "Hörsaal SAI",
    type: "Vorlesung",
    speaker: "Prof. Dr. Amartya Sen",
    departments: ["development-economics"],
    capacity: 150,
    registered: 78,
    registrationOpen: true,
    image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800",
    featured: true,
    tags: ["Wirtschaft", "Indien", "Global"]
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
    speakerId: 3,
    departments: ["modern-south-asian-studies", "history"],
    capacity: 25,
    registered: 23,
    registrationOpen: false,
    image: "https://images.pexels.com/photos/3184454/pexels-photo-3184454.jpeg?auto=compress&cs=tinysrgb&w=800",
    featured: true,
    tags: ["Digital Humanities", "Workshop", "Methoden"]
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
    departments: ["political-science", "geography"],
    capacity: 40,
    registered: 15,
    registrationOpen: true,
    image: "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=800",
    featured: false,
    tags: ["Forschung", "Kolloquium", "Klimawandel"]
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
    departments: ["development-economics", "geography"],
    capacity: 200,
    registered: 45,
    registrationOpen: true,
    image: "https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=800",
    featured: true,
    tags: ["Nachhaltigkeit", "Konferenz", "International"]
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
    speakerId: 2,
    departments: ["modern-south-asian-studies"],
    capacity: 20,
    registered: 18,
    registrationOpen: true,
    image: "https://images.pexels.com/photos/3760613/pexels-photo-3760613.jpeg?auto=compress&cs=tinysrgb&w=800",
    featured: false,
    tags: ["Hindi", "Literatur", "Seminar"]
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
    departments: ["political-science"],
    capacity: 300,
    registered: 67,
    registrationOpen: true,
    image: "https://images.pexels.com/photos/3831849/pexels-photo-3831849.jpeg?auto=compress&cs=tinysrgb&w=800",
    featured: false,
    tags: ["Demokratie", "Politik", "Diskussion"]
  },
  {
    id: 7,
    title: "Workshop: Ethnographische Methoden in der Südasienforschung",
    description: "Praktischer Workshop zu ethnographischen Forschungsmethoden mit Fokus auf Feldforschung in Südasien.",
    date: "15. Dezember 2024",
    time: "09:00-17:00 Uhr",
    location: "Seminarraum Ethnologie",
    type: "Workshop",
    speaker: "Prof. Dr. Anita Gupta",
    speakerId: 9,
    departments: ["ethnology"],
    capacity: 20,
    registered: 16,
    registrationOpen: true,
    image: "https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=800",
    featured: false,
    tags: ["Ethnographie", "Methoden", "Workshop"]
  },
  {
    id: 8,
    title: "Vortrag: Kastensystem im digitalen Zeitalter",
    description: "Prof. Dr. Anita Gupta diskutiert die Auswirkungen der Digitalisierung auf traditionelle Kastenstrukturen.",
    date: "22. Januar 2025",
    time: "18:00-19:30 Uhr",
    location: "Hörsaal SAI",
    type: "Vortrag",
    speaker: "Prof. Dr. Anita Gupta",
    speakerId: 9,
    departments: ["ethnology"],
    capacity: 100,
    registered: 34,
    registrationOpen: true,
    image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800",
    featured: false,
    tags: ["Kastensystem", "Digitalisierung", "Vortrag"]
  },
  {
    id: 9,
    title: "Symposium: Religionsphilosophie im modernen Südasien",
    description: "Eintägiges Symposium zu aktuellen Entwicklungen in der Religionsphilosophie Südasiens.",
    date: "18. Dezember 2024",
    time: "09:00-18:00 Uhr",
    location: "Konferenzraum SAI",
    type: "Konferenz",
    speaker: "Internationale Experten",
    departments: ["cultural-religious-history"],
    capacity: 80,
    registered: 52,
    registrationOpen: true,
    image: "https://images.pexels.com/photos/3760613/pexels-photo-3760613.jpeg?auto=compress&cs=tinysrgb&w=800",
    featured: false,
    tags: ["Religion", "Philosophie", "Symposium"]
  },
  {
    id: 10,
    title: "Workshop: GIS-Methoden in der Südasienforschung",
    description: "Praktischer Workshop zu geographischen Informationssystemen und deren Anwendung in der Südasienforschung.",
    date: "15. Februar 2025",
    time: "10:00-17:00 Uhr",
    location: "GIS-Labor",
    type: "Workshop",
    speaker: "Dr. Thomas Weber",
    speakerId: 15,
    departments: ["geography"],
    capacity: 15,
    registered: 12,
    registrationOpen: true,
    image: "https://images.pexels.com/photos/3184454/pexels-photo-3184454.jpeg?auto=compress&cs=tinysrgb&w=800",
    featured: false,
    tags: ["GIS", "Geographie", "Workshop"]
  }
];

export const getEventsByDepartment = (departmentId: string): Event[] => {
  return events.filter(event => event.departments.includes(departmentId));
};

export const getFeaturedEvents = (): Event[] => {
  return events.filter(event => event.featured);
};

export const getUpcomingEvents = (): Event[] => {
  const now = new Date();
  return events.filter(event => new Date(event.date) >= now);
};