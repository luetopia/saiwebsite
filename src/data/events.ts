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