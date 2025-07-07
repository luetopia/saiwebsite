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