export interface ResearchProject {
  id: number;
  title: string;
  description: string;
  duration: string;
  startDate: string;
  endDate: string;
  funding: string;
  leader: string;
  leaderId: number; // ID from staff database
  departments: string[]; // Array of department IDs
  status: 'Laufend' | 'Abgeschlossen' | 'Geplant';
  participants: number;
  participantIds: number[]; // IDs from staff database
  budget?: string;
  publications?: number[]; // Publication IDs
  keywords: string[];
}

export const researchProjects: ResearchProject[] = [
  {
    id: 1,
    title: "Klimawandel und Migration in Südasien",
    description: "Eine interdisziplinäre Studie über die Auswirkungen des Klimawandels auf Migrationsbewegungen.",
    duration: "2022-2025",
    startDate: "2022-01-01",
    endDate: "2025-12-31",
    funding: "DFG",
    leader: "Prof. Dr. Maria Schmidt",
    leaderId: 1,
    departments: ["political-science", "geography"],
    status: "Laufend",
    participants: 6,
    participantIds: [1, 3, 6],
    budget: "1.2 Millionen Euro",
    keywords: ["Klimawandel", "Migration", "Südasien", "Umweltpolitik"]
  },
  {
    id: 2,
    title: "Digitale Archive südasiatischer Literatur",
    description: "Aufbau einer digitalen Sammlung klassischer und moderner Texte aus Südasien.",
    duration: "2023-2026",
    startDate: "2023-03-01",
    endDate: "2026-02-28",
    funding: "BMBF",
    leader: "Prof. Dr. Rajesh Patel",
    leaderId: 2,
    departments: ["modern-south-asian-studies"],
    status: "Laufend",
    participants: 4,
    participantIds: [2],
    keywords: ["Digitalisierung", "Literatur", "Archive", "Hindi", "Urdu"]
  },
  {
    id: 3,
    title: "Demokratie und soziale Medien in Indien",
    description: "Untersuchung des Einflusses sozialer Medien auf demokratische Prozesse.",
    duration: "2021-2024",
    startDate: "2021-09-01",
    endDate: "2024-08-31",
    funding: "VW-Stiftung",
    leader: "Dr. Sarah Weber",
    leaderId: 3,
    departments: ["political-science"],
    status: "Abgeschlossen",
    participants: 3,
    participantIds: [3, 1],
    publications: [1],
    keywords: ["Demokratie", "Soziale Medien", "Indien", "Digitalisierung"]
  },
  {
    id: 4,
    title: "Mikrofinanzierung und Armutsreduktion in Bangladesh",
    description: "Langzeitstudie zur Wirksamkeit von Mikrokrediten auf Einkommen und Lebensstandard ländlicher Haushalte.",
    duration: "2021-2024",
    startDate: "2021-01-01",
    endDate: "2024-12-31",
    funding: "DFG",
    leader: "Prof. Dr. Klaus Müller",
    leaderId: 4,
    departments: ["development-economics"],
    status: "Abgeschlossen",
    participants: 6,
    participantIds: [4],
    keywords: ["Mikrofinanzierung", "Armut", "Bangladesh", "Entwicklung"]
  },
  {
    id: 5,
    title: "Die Indus-Zivilisation: Neue archäologische Perspektiven",
    description: "Interdisziplinäre Untersuchung der Harappa-Kultur mit modernsten archäologischen Methoden.",
    duration: "2021-2025",
    startDate: "2021-01-01",
    endDate: "2025-12-31",
    funding: "DFG",
    leader: "Prof. Dr. Maria Schmidt",
    leaderId: 1,
    departments: ["history"],
    status: "Laufend",
    participants: 8,
    participantIds: [1, 6],
    publications: [4],
    keywords: ["Archäologie", "Indus-Zivilisation", "Geschichte", "Harappa"]
  }
];

export const getProjectsByDepartment = (departmentId: string): ResearchProject[] => {
  return researchProjects.filter(project => project.departments.includes(departmentId));
};

export const getProjectsByStatus = (status: ResearchProject['status']): ResearchProject[] => {
  return researchProjects.filter(project => project.status === status);
};

export const getActiveProjects = (): ResearchProject[] => {
  return researchProjects.filter(project => project.status === 'Laufend');
};

export const getCompletedProjects = (): ResearchProject[] => {
  return researchProjects.filter(project => project.status === 'Abgeschlossen');
};