export interface Course {
  id: number;
  title: string;
  type: 'Vorlesung' | 'Seminar' | 'Hauptseminar' | 'Methodenseminar' | 'Sprachkurs' | 'Praktikum' | 'Workshop';
  semester: string;
  lecturer: string;
  lecturerId?: number; // ID from staff database
  departments: string[]; // Array of department IDs
  description?: string;
  credits?: number;
  language?: string;
}

export const courses: Course[] = [
  {
    id: 1,
    title: "Einführung in die Ethnologie Südasiens",
    type: "Vorlesung",
    semester: "Wintersemester 2024/25",
    lecturer: "Prof. Dr. Anita Sharma",
    departments: ["ethnology"],
    description: "Grundlagen der ethnologischen Forschung in Südasien",
    credits: 6
  },
  {
    id: 2,
    title: "Kastensystem und soziale Strukturen",
    type: "Seminar",
    semester: "Wintersemester 2024/25",
    lecturer: "Prof. Dr. Anita Sharma",
    departments: ["ethnology"],
    credits: 4
  },
  {
    id: 3,
    title: "Einführung in die Religionsgeschichte Südasiens",
    type: "Vorlesung",
    semester: "Wintersemester 2024/25",
    lecturer: "Prof. Dr. Priya Sharma",
    departments: ["cultural-religious-history"],
    credits: 6
  },
  {
    id: 4,
    title: "Hinduistische Philosophie und Bhakti-Bewegung",
    type: "Hauptseminar",
    semester: "Wintersemester 2024/25",
    lecturer: "Prof. Dr. Priya Sharma",
    departments: ["cultural-religious-history"],
    credits: 8
  },
  {
    id: 5,
    title: "Einführung in die Entwicklungsökonomie",
    type: "Vorlesung",
    semester: "Wintersemester 2024/25",
    lecturer: "Prof. Dr. Klaus Müller",
    departments: ["development-economics"],
    credits: 6
  },
  {
    id: 6,
    title: "Mikrofinanzierung und Armutsbekämpfung",
    type: "Hauptseminar",
    semester: "Wintersemester 2024/25",
    lecturer: "Prof. Dr. Klaus Müller",
    departments: ["development-economics"],
    credits: 8
  },
  {
    id: 7,
    title: "Einführung in die Geographie Südasiens",
    type: "Vorlesung",
    semester: "Wintersemester 2024/25",
    lecturer: "Prof. Dr. Michael Fischer",
    departments: ["geography"],
    credits: 6
  },
  {
    id: 8,
    title: "Klimageographie und Gletscherforschung",
    type: "Hauptseminar",
    semester: "Wintersemester 2024/25",
    lecturer: "Prof. Dr. Michael Fischer",
    departments: ["geography"],
    credits: 8
  },
  {
    id: 9,
    title: "Einführung in die Geschichte Südasiens",
    type: "Vorlesung",
    semester: "Wintersemester 2024/25",
    lecturer: "Prof. Dr. Maria Schmidt",
    departments: ["history"],
    credits: 6
  },
  {
    id: 10,
    title: "Die Indus-Zivilisation: Archäologie und Geschichte",
    type: "Hauptseminar",
    semester: "Wintersemester 2024/25",
    lecturer: "Prof. Dr. Maria Schmidt",
    departments: ["history"],
    credits: 8
  },
  {
    id: 11,
    title: "Einführung in die südasiatischen Sprachen",
    type: "Vorlesung",
    semester: "Wintersemester 2024/25",
    lecturer: "Prof. Dr. Rajesh Patel",
    departments: ["modern-south-asian-studies"],
    credits: 6
  },
  {
    id: 12,
    title: "Hindi-Literatur des 20. Jahrhunderts",
    type: "Hauptseminar",
    semester: "Wintersemester 2024/25",
    lecturer: "Prof. Dr. Rajesh Patel",
    departments: ["modern-south-asian-studies"],
    credits: 8
  },
  {
    id: 13,
    title: "Einführung in die Politikwissenschaft Südasiens",
    type: "Vorlesung",
    semester: "Wintersemester 2024/25",
    lecturer: "Prof. Dr. Thomas Hoffmann",
    departments: ["political-science"],
    credits: 6
  },
  {
    id: 14,
    title: "Demokratie und Governance in Südasien",
    type: "Hauptseminar",
    semester: "Wintersemester 2024/25",
    lecturer: "Prof. Dr. Thomas Hoffmann",
    departments: ["political-science"],
    credits: 8
  },
  {
    id: 15,
    title: "Ethnographische Methoden in der Südasienforschung",
    type: "Methodenseminar",
    semester: "Sommersemester 2025",
    lecturer: "Prof. Dr. Anita Gupta",
    departments: ["ethnology"],
    description: "Praktische Einführung in ethnographische Forschungsmethoden",
    credits: 6
  },
  {
    id: 16,
    title: "Indigene Völker Südasiens: Kultur und Wandel",
    type: "Seminar",
    semester: "Sommersemester 2025",
    lecturer: "Dr. Ravi Krishnan",
    departments: ["ethnology"],
    credits: 4
  },
  {
    id: 17,
    title: "Urbanisierung und kulturelle Identität",
    type: "Hauptseminar",
    semester: "Wintersemester 2024/25",
    lecturer: "Dr. Ravi Krishnan",
    departments: ["ethnology"],
    credits: 8
  },
  {
    id: 18,
    title: "Sufismus in Südasien: Geschichte und Gegenwart",
    type: "Seminar",
    semester: "Sommersemester 2025",
    lecturer: "Dr. Ahmed Hassan",
    departments: ["cultural-religious-history"],
    credits: 4
  },
  {
    id: 19,
    title: "Buddhismus in Sri Lanka: Tradition und Moderne",
    type: "Seminar",
    semester: "Sommersemester 2025",
    lecturer: "Laura Becker, M.A.",
    departments: ["cultural-religious-history"],
    credits: 4
  },
  {
    id: 20,
    title: "Sanskrit-Texte lesen und interpretieren",
    type: "Sprachkurs",
    semester: "Wintersemester 2024/25",
    lecturer: "Dr. Priya Sharma",
    departments: ["cultural-religious-history"],
    credits: 4
  },
  {
    id: 21,
    title: "Religionsvergleichende Methoden",
    type: "Methodenseminar",
    semester: "Sommersemester 2025",
    lecturer: "Dr. Ahmed Hassan, Laura Becker, M.A.",
    departments: ["cultural-religious-history"],
    credits: 6
  },
  {
    id: 22,
    title: "Handelspolitik in Südasien",
    type: "Seminar",
    semester: "Sommersemester 2025",
    lecturer: "Mark Johnson, M.A.",
    departments: ["development-economics"],
    credits: 4
  },
  {
    id: 23,
    title: "Nachhaltige Entwicklung und Umweltökonomie",
    type: "Seminar",
    semester: "Sommersemester 2025",
    lecturer: "Dr. Lisa Chen",
    departments: ["development-economics"],
    credits: 4
  },
  {
    id: 24,
    title: "Empirische Methoden der Entwicklungsökonomie",
    type: "Methodenseminar",
    semester: "Wintersemester 2024/25",
    lecturer: "Dr. Lisa Chen",
    departments: ["development-economics"],
    credits: 6
  },
  {
    id: 25,
    title: "Entwicklungspolitik in der Praxis",
    type: "Praktikum",
    semester: "Sommersemester 2025",
    lecturer: "Prof. Dr. Klaus Müller, Dr. Lisa Chen",
    departments: ["development-economics"],
    credits: 8
  },
  {
    id: 26,
    title: "Stadtgeographie südasiatischer Megastädte",
    type: "Seminar",
    semester: "Sommersemester 2025",
    lecturer: "Dr. Lisa Chen",
    departments: ["geography"],
    credits: 4
  },
  {
    id: 27,
    title: "Wassermanagement in Südasien",
    type: "Seminar",
    semester: "Sommersemester 2025",
    lecturer: "Dr. Thomas Weber",
    departments: ["geography"],
    credits: 4
  },
  {
    id: 28,
    title: "GIS und Fernerkundung in der Südasienforschung",
    type: "Methodenseminar",
    semester: "Wintersemester 2024/25",
    lecturer: "Dr. Thomas Weber",
    departments: ["geography"],
    credits: 6
  },
  {
    id: 29,
    title: "Geländepraktikum Himalaya",
    type: "Praktikum",
    semester: "Sommersemester 2025",
    lecturer: "PD Dr. Michael Fischer, Dr. Lisa Chen",
    departments: ["geography"],
    credits: 10
  },
  {
    id: 30,
    title: "Kolonialgeschichte Südasiens",
    type: "Seminar",
    semester: "Sommersemester 2025",
    lecturer: "Dr. James Wilson",
    departments: ["history"],
    credits: 4
  },
  {
    id: 31,
    title: "Frauen in der südasiatischen Geschichte",
    type: "Seminar",
    semester: "Sommersemester 2025",
    lecturer: "Dr. Kavita Sharma",
    departments: ["history"],
    credits: 4
  },
  {
    id: 32,
    title: "Quellenkunde zur südasiatischen Geschichte",
    type: "Methodenseminar",
    semester: "Wintersemester 2024/25",
    lecturer: "Dr. James Wilson",
    departments: ["history"],
    credits: 6
  },
  {
    id: 33,
    title: "Archäologische Methoden in der Geschichtsforschung",
    type: "Praktikum",
    semester: "Sommersemester 2025",
    lecturer: "Prof. Dr. Maria Schmidt, Dr. Kavita Sharma",
    departments: ["history"],
    credits: 8
  },
  {
    id: 34,
    title: "Urdu-Poesie und Prosa",
    type: "Seminar",
    semester: "Sommersemester 2025",
    lecturer: "Dr. Fatima Khan",
    departments: ["modern-south-asian-studies"],
    credits: 4
  },
  {
    id: 35,
    title: "Postkoloniale Literatur Südasiens",
    type: "Seminar",
    semester: "Sommersemester 2025",
    lecturer: "Dr. Arjun Mehta",
    departments: ["modern-south-asian-studies"],
    credits: 4
  },
  {
    id: 36,
    title: "Hindi-Sprachkurs für Fortgeschrittene",
    type: "Sprachkurs",
    semester: "Wintersemester 2024/25",
    lecturer: "Prof. Dr. Rajesh Patel",
    departments: ["modern-south-asian-studies"],
    credits: 4
  },
  {
    id: 37,
    title: "Übersetzungswerkstatt: Südasiatische Literatur",
    type: "Praktikum",
    semester: "Sommersemester 2025",
    lecturer: "Dr. Arjun Mehta, Dr. Fatima Khan",
    departments: ["modern-south-asian-studies"],
    credits: 6
  },
  {
    id: 38,
    title: "Medien und Politik in der digitalen Ära",
    type: "Seminar",
    semester: "Sommersemester 2025",
    lecturer: "Dr. Sarah Weber",
    departments: ["political-science"],
    credits: 4
  },
  {
    id: 39,
    title: "Föderalismus und regionale Politik",
    type: "Seminar",
    semester: "Sommersemester 2025",
    lecturer: "Dr. Vikram Singh",
    departments: ["political-science"],
    credits: 4
  },
  {
    id: 40,
    title: "Empirische Methoden der Politikforschung",
    type: "Methodenseminar",
    semester: "Wintersemester 2024/25",
    lecturer: "Dr. Sarah Weber",
    departments: ["political-science"],
    credits: 6
  },
  {
    id: 41,
    title: "Politikfeldanalyse: Südasien im Vergleich",
    type: "Praktikum",
    semester: "Sommersemester 2025",
    lecturer: "Prof. Dr. Maria Schmidt, Dr. Vikram Singh",
    departments: ["political-science"],
    credits: 8
  }
];

export const getCoursesByDepartment = (departmentId: string): Course[] => {
  return courses.filter(course => course.departments.includes(departmentId));
};