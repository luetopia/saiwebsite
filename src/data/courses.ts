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
  }
];

export const getCoursesByDepartment = (departmentId: string): Course[] => {
  return courses.filter(course => course.departments.includes(departmentId));
};