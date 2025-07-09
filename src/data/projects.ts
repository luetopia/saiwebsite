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
  },
  {
    id: 6,
    title: "Kastensystem im Wandel: Soziale Mobilität im modernen Indien",
    description: "Untersuchung der Veränderungen traditioneller Kastenstrukturen in urbanen und ruralen Gebieten Indiens.",
    duration: "2022-2025",
    startDate: "2022-01-01",
    endDate: "2025-12-31",
    funding: "DFG",
    leader: "Prof. Dr. Anita Gupta",
    leaderId: 9,
    departments: ["ethnology"],
    status: "Laufend",
    participants: 4,
    participantIds: [9, 12],
    keywords: ["Kastensystem", "Soziale Mobilität", "Indien", "Gesellschaftswandel"]
  },
  {
    id: 7,
    title: "Bhakti-Bewegung und regionale Identitäten in Westindien",
    description: "Untersuchung der Rolle der Bhakti-Tradition bei der Formung regionaler kultureller Identitäten.",
    duration: "2022-2025",
    startDate: "2022-01-01",
    endDate: "2025-12-31",
    funding: "DFG",
    leader: "Dr. Priya Sharma",
    leaderId: 5,
    departments: ["cultural-religious-history"],
    status: "Laufend",
    participants: 5,
    participantIds: [5, 10],
    keywords: ["Bhakti", "Religion", "Identität", "Westindien"]
  },
  {
    id: 8,
    title: "Nachhaltige Stadtentwicklung in südasiatischen Megastädten",
    description: "Vergleichende Studie zu Urbanisierungsprozessen in Delhi, Mumbai, Dhaka und Karachi.",
    duration: "2022-2025",
    startDate: "2022-01-01",
    endDate: "2025-12-31",
    funding: "BMBF",
    leader: "Dr. Lisa Chen",
    leaderId: 11,
    departments: ["development-economics", "geography"],
    status: "Laufend",
    participants: 5,
    participantIds: [11, 12, 15],
    keywords: ["Urbanisierung", "Nachhaltigkeit", "Megastädte", "Entwicklung"]
  },
  {
    id: 9,
    title: "Wassermanagement im Ganges-Brahmaputra-Delta",
    description: "Interdisziplinäre Analyse der Wassernutzung und -konflikte im größten Delta der Welt.",
    duration: "2023-2026",
    startDate: "2023-01-01",
    endDate: "2026-12-31",
    funding: "EU Horizon Europe",
    leader: "Dr. Thomas Weber",
    leaderId: 15,
    departments: ["geography"],
    status: "Laufend",
    participants: 6,
    participantIds: [15, 11],
    keywords: ["Wassermanagement", "Delta", "Hydrologie", "Konflikte"]
  },
  {
    id: 10,
    title: "Digitale Edition der Hindi-Literatur des 20. Jahrhunderts",
    description: "Umfassendes Projekt zur Digitalisierung und kritischen Edition wichtiger Hindi-Werke.",
    duration: "2021-2025",
    startDate: "2021-01-01",
    endDate: "2025-12-31",
    funding: "DFG",
    leader: "Prof. Dr. Rajesh Patel",
    leaderId: 2,
    departments: ["modern-south-asian-studies"],
    status: "Laufend",
    participants: 6,
    participantIds: [2, 13, 14],
    keywords: ["Digitalisierung", "Hindi", "Literatur", "20. Jahrhundert"]
  },
  {
    id: 11,
    title: "Sprachpolitik und Mehrsprachigkeit in Südasien",
    description: "Vergleichende Studie zur Sprachpolitik in verschiedenen südasiatischen Ländern.",
    duration: "2022-2025",
    startDate: "2022-01-01",
    endDate: "2025-12-31",
    funding: "BMBF",
    leader: "Dr. Fatima Khan",
    leaderId: 13,
    departments: ["modern-south-asian-studies"],
    status: "Laufend",
    participants: 4,
    participantIds: [13, 2],
    keywords: ["Sprachpolitik", "Mehrsprachigkeit", "Südasien", "Linguistik"]
  },
  {
    id: 12,
    title: "Frauen in der südasiatischen Geschichte",
    description: "Geschlechtergeschichtliche Perspektiven auf die Geschichte Südasiens vom Mittelalter bis heute.",
    duration: "2023-2026",
    startDate: "2023-01-01",
    endDate: "2026-12-31",
    funding: "VW-Stiftung",
    leader: "Dr. Kavita Sharma",
    leaderId: 16,
    departments: ["history"],
    status: "Laufend",
    participants: 4,
    participantIds: [16, 1],
    keywords: ["Frauengeschichte", "Gender", "Südasien", "Geschichte"]
  },
  {
    id: 13,
    title: "Dekolonisierung und Partition: Vergleichende Studien",
    description: "Analyse der Unabhängigkeitsprozesse in Indien, Pakistan und Bangladesh.",
    duration: "2022-2025",
    startDate: "2022-01-01",
    endDate: "2025-12-31",
    funding: "BMBF",
    leader: "Dr. James Wilson",
    leaderId: 17,
    departments: ["history"],
    status: "Laufend",
    participants: 6,
    participantIds: [17, 1, 16],
    keywords: ["Dekolonisierung", "Partition", "Unabhängigkeit", "Vergleich"]
  },
  {
    id: 14,
    title: "Demokratie im digitalen Zeitalter: Südasien im Vergleich",
    description: "Analyse der Auswirkungen digitaler Technologien auf demokratische Prozesse in der Region.",
    duration: "2022-2025",
    startDate: "2022-01-01",
    endDate: "2025-12-31",
    funding: "DFG",
    leader: "Prof. Dr. Maria Schmidt",
    leaderId: 1,
    departments: ["political-science"],
    status: "Laufend",
    participants: 7,
    participantIds: [1, 3, 18],
    keywords: ["Demokratie", "Digitalisierung", "Südasien", "Vergleich"]
  },
  {
    id: 15,
    title: "Föderalismus und ethnische Konflikte in Südasien",
    description: "Vergleichende Studie zu föderalen Lösungsansätzen für ethnische Spannungen.",
    duration: "2021-2024",
    startDate: "2021-01-01",
    endDate: "2024-12-31",
    funding: "VW-Stiftung",
    leader: "Dr. Vikram Singh",
    leaderId: 18,
    departments: ["political-science"],
    status: "Abgeschlossen",
    participants: 6,
    participantIds: [18, 1],
    keywords: ["Föderalismus", "Ethnische Konflikte", "Südasien", "Governance"]
  },
  {
    id: 16,
    title: "Handelsintegration und wirtschaftliche Entwicklung in Südasien",
    description: "Analyse der Auswirkungen regionaler Handelsabkommen auf das Wirtschaftswachstum.",
    duration: "2023-2026",
    startDate: "2023-01-01",
    endDate: "2026-12-31",
    funding: "BMBF",
    leader: "Mark Johnson, M.A.",
    leaderId: 20,
    departments: ["development-economics"],
    status: "Laufend",
    participants: 4,
    participantIds: [20, 4],
    keywords: ["Handel", "Integration", "Wirtschaftswachstum", "SAARC"]
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