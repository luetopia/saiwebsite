export interface NewsItem {
  id: number;
  title: string;
  summary: string;
  content?: string;
  date: string;
  author: string;
  authorId?: number; // ID from staff database
  category: string;
  departments: string[]; // Array of department IDs
  image?: string;
  featured?: boolean;
  tags: string[];
}

export const newsItems: NewsItem[] = [
  {
    id: 1,
    title: "Neue Forschungskooperation mit der Jawaharlal Nehru University",
    summary: "Das SAI erweitert seine internationalen Partnerschaften durch eine neue Kooperation mit der renommierten JNU in Neu-Delhi.",
    date: "15. November 2024",
    author: "Prof. Dr. Maria Schmidt",
    authorId: 1,
    category: "Kooperationen",
    departments: ["political-science"],
    image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800",
    featured: true,
    tags: ["Kooperation", "JNU", "International"]
  },
  {
    id: 2,
    title: "Internationale Konferenz: 'Südasien im 21. Jahrhundert'",
    summary: "Über 150 Wissenschaftler diskutieren aktuelle Entwicklungen in Politik, Wirtschaft und Gesellschaft Südasiens.",
    date: "08. November 2024",
    author: "Dr. Sarah Weber",
    authorId: 3,
    category: "Veranstaltungen",
    departments: ["political-science", "development-economics"],
    image: "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=800",
    featured: true,
    tags: ["Konferenz", "21. Jahrhundert", "Interdisziplinär"]
  },
  {
    id: 3,
    title: "Neues DFG-Projekt zu Klimawandel und Migration bewilligt",
    summary: "Das SAI erhält Förderung für ein dreijähriges Forschungsprojekt zu den Auswirkungen des Klimawandels auf Migrationsbewegungen.",
    date: "25. Oktober 2024",
    author: "Prof. Dr. Klaus Müller",
    authorId: 4,
    category: "Forschung",
    departments: ["development-economics", "geography"],
    image: "https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=800",
    featured: false,
    tags: ["DFG", "Klimawandel", "Migration"]
  },
  {
    id: 4,
    title: "Prof. Dr. Rajesh Patel erhält Humboldt-Forschungspreis",
    summary: "Die Alexander von Humboldt-Stiftung würdigt damit seine herausragenden Beiträge zur Erforschung der modernen südasiatischen Literatur.",
    date: "18. Oktober 2024",
    author: "Pressestelle SAI",
    category: "Auszeichnungen",
    departments: ["modern-south-asian-studies"],
    image: "https://images.pexels.com/photos/3184396/pexels-photo-3184396.jpeg?auto=compress&cs=tinysrgb&w=800",
    featured: false,
    tags: ["Humboldt", "Auszeichnung", "Literatur"]
  },
  {
    id: 5,
    title: "Neue Publikationsreihe 'Südasien Digital' gestartet",
    summary: "Das SAI lanciert eine innovative Open-Access-Publikationsreihe, die sich den Digital Humanities in der Südasienforschung widmet.",
    date: "12. Oktober 2024",
    author: "Dr. Sarah Weber",
    authorId: 3,
    category: "Publikationen",
    departments: ["modern-south-asian-studies", "history"],
    image: "https://images.pexels.com/photos/1370295/pexels-photo-1370295.jpeg?auto=compress&cs=tinysrgb&w=800",
    featured: false,
    tags: ["Digital Humanities", "Open Access", "Publikation"]
  },
  {
    id: 6,
    title: "Studentische Forschungsgruppe bei internationalem Wettbewerb erfolgreich",
    summary: "Eine Gruppe von SAI-Studierenden belegt den ersten Platz beim 'Asian Studies Competition' der European Association for Asian Studies.",
    date: "05. Oktober 2024",
    author: "Laura Becker, M.A.",
    authorId: 7,
    category: "Auszeichnungen",
    departments: ["ethnology"],
    image: "https://images.pexels.com/photos/3184454/pexels-photo-3184454.jpeg?auto=compress&cs=tinysrgb&w=800",
    featured: false,
    tags: ["Studierende", "Wettbewerb", "Erfolg"]
  },
  {
    id: 7,
    title: "Neue Erkenntnisse zur Bhakti-Bewegung in Maharashtra",
    summary: "Dr. Priya Sharma präsentiert bahnbrechende Forschungsergebnisse zur regionalen Ausprägung der Bhakti-Tradition.",
    date: "20. November 2024",
    author: "Dr. Priya Sharma",
    authorId: 5,
    category: "Forschung",
    departments: ["cultural-religious-history"],
    image: "https://images.pexels.com/photos/3760613/pexels-photo-3760613.jpeg?auto=compress&cs=tinysrgb&w=800",
    featured: false,
    tags: ["Bhakti", "Maharashtra", "Religion"]
  },
  {
    id: 8,
    title: "Digitalisierung mittelalterlicher Handschriften abgeschlossen",
    summary: "Das Projekt zur Digitalisierung von 500 Sanskrit-Handschriften wurde erfolgreich beendet.",
    date: "12. November 2024",
    author: "Thomas Hoffmann",
    authorId: 8,
    category: "Digitalisierung",
    departments: ["cultural-religious-history"],
    image: "https://images.pexels.com/photos/1370295/pexels-photo-1370295.jpeg?auto=compress&cs=tinysrgb&w=800",
    featured: false,
    tags: ["Digitalisierung", "Handschriften", "Sanskrit"]
  },
  {
    id: 9,
    title: "Neue Feldforschung in den Stammesgebieten Odishas",
    summary: "Prof. Dr. Anita Gupta startet ein dreijähriges Forschungsprojekt zu den kulturellen Praktiken der Kondh-Gemeinschaft.",
    date: "15. November 2024",
    author: "Prof. Dr. Anita Gupta",
    authorId: 9,
    category: "Feldforschung",
    departments: ["ethnology"],
    image: "https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=800",
    featured: false,
    tags: ["Feldforschung", "Odisha", "Stammeskulturen"]
  },
  {
    id: 10,
    title: "Neue Satellitendaten zeigen dramatischen Gletscherschwund im Himalaya",
    summary: "Dr. Thomas Weber präsentiert alarmierende Ergebnisse zur Gletscherschmelze in der Himalaya-Region.",
    date: "25. November 2024",
    author: "Dr. Thomas Weber",
    authorId: 15,
    category: "Klimaforschung",
    departments: ["geography"],
    image: "https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=800",
    featured: false,
    tags: ["Gletscher", "Himalaya", "Klimawandel"]
  }
];

export const getNewsByDepartment = (departmentId: string): NewsItem[] => {
  return newsItems.filter(item => item.departments.includes(departmentId));
};

export const getFeaturedNews = (): NewsItem[] => {
  return newsItems.filter(item => item.featured);
};

export const getNewsByCategory = (category: string): NewsItem[] => {
  return newsItems.filter(item => item.category === category);
};