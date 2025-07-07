export interface Publication {
  id: number;
  title: string;
  authors: string[];
  authorIds: number[]; // IDs from staff database
  publisher: string;
  year: string;
  type: 'Monographie' | 'Sammelband' | 'Zeitschriftenartikel' | 'Buchkapitel';
  departments: string[]; // Array of department IDs
  description: string;
  isbn?: string;
  doi?: string;
  url?: string;
  cover?: string;
  featured?: boolean;
}

export const publications: Publication[] = [
  {
    id: 1,
    title: "Democracy and Development in South Asia: Contemporary Challenges",
    authors: ["Prof. Dr. Maria Schmidt", "Dr. Sarah Weber"],
    authorIds: [1, 3],
    publisher: "Cambridge University Press",
    year: "2024",
    type: "Monographie",
    departments: ["political-science"],
    description: "Eine umfassende Analyse der demokratischen Entwicklungen in Südasien mit Fokus auf aktuelle Herausforderungen.",
    isbn: "978-1-108-48392-7",
    cover: "https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop",
    featured: true
  },
  {
    id: 2,
    title: "Climate Change and Migration in the Himalayas",
    authors: ["Prof. Dr. Klaus Müller", "Dr. Priya Sharma", "Laura Becker, M.A."],
    authorIds: [4, 5, 7],
    publisher: "Springer Nature",
    year: "2024",
    type: "Monographie",
    departments: ["development-economics", "geography"],
    description: "Interdisziplinäre Studie über die Auswirkungen des Klimawandels auf Migrationsbewegungen in der Himalaya-Region.",
    isbn: "978-3-030-89234-1",
    cover: "https://images.pexels.com/photos/1370295/pexels-photo-1370295.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop",
    featured: true
  },
  {
    id: 3,
    title: "Modern Hindi Literature: Voices of the 21st Century",
    authors: ["Prof. Dr. Rajesh Patel"],
    authorIds: [2],
    publisher: "Oxford University Press",
    year: "2023",
    type: "Monographie",
    departments: ["modern-south-asian-studies"],
    description: "Eine kritische Analyse der zeitgenössischen Hindi-Literatur und ihrer gesellschaftlichen Bedeutung.",
    isbn: "978-0-19-886543-2",
    cover: "https://images.pexels.com/photos/1029141/pexels-photo-1029141.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop",
    featured: false
  },
  {
    id: 4,
    title: "The Indus Civilization: New Archaeological Insights",
    authors: ["Prof. Dr. Maria Schmidt"],
    authorIds: [1],
    publisher: "Cambridge University Press",
    year: "2024",
    type: "Monographie",
    departments: ["history"],
    description: "Umfassende Neubewertung der Indus-Zivilisation basierend auf neuesten Ausgrabungen.",
    isbn: "978-1-108-48392-8",
    cover: "https://images.pexels.com/photos/3184454/pexels-photo-3184454.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop",
    featured: true
  }
];

export const getPublicationsByDepartment = (departmentId: string): Publication[] => {
  return publications.filter(pub => pub.departments.includes(departmentId));
};

export const getPublicationsByAuthor = (authorId: number): Publication[] => {
  return publications.filter(pub => pub.authorIds.includes(authorId));
};

export const getFeaturedPublications = (): Publication[] => {
  return publications.filter(pub => pub.featured);
};