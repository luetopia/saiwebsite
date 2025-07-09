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
  },
  {
    id: 5,
    title: "Caste and Social Mobility in Contemporary India",
    authors: ["Prof. Dr. Anita Gupta"],
    authorIds: [9],
    publisher: "Cambridge University Press",
    year: "2024",
    type: "Monographie",
    departments: ["ethnology"],
    description: "Eine umfassende Analyse der Veränderungen im Kastensystem und ihrer Auswirkungen auf soziale Mobilität.",
    isbn: "978-1-108-48392-9",
    cover: "https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop",
    featured: false
  },
  {
    id: 6,
    title: "Sufism and Cultural Exchange in Mughal India",
    authors: ["Dr. Ahmed Hassan", "Dr. Priya Sharma"],
    authorIds: [10, 5],
    publisher: "Cambridge University Press",
    year: "2023",
    type: "Sammelband",
    departments: ["cultural-religious-history"],
    description: "Interdisziplinäre Beiträge zum kulturellen Austausch im Mogulreich.",
    isbn: "978-1-108-48392-10",
    cover: "https://images.pexels.com/photos/1370295/pexels-photo-1370295.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop",
    featured: false
  },
  {
    id: 7,
    title: "Environmental Economics and Sustainable Development in Asia",
    authors: ["Dr. Lisa Chen", "Prof. Dr. Klaus Müller"],
    authorIds: [11, 4],
    publisher: "Springer Nature",
    year: "2024",
    type: "Monographie",
    departments: ["development-economics"],
    description: "Analyse der ökonomischen Herausforderungen nachhaltiger Entwicklung in Asien.",
    isbn: "978-3-030-89234-2",
    cover: "https://images.pexels.com/photos/1029141/pexels-photo-1029141.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop",
    featured: true
  },
  {
    id: 8,
    title: "Urban Transformations and Cultural Identity in South Asia",
    authors: ["Dr. Ravi Krishnan"],
    authorIds: [12],
    publisher: "Routledge",
    year: "2023",
    type: "Monographie",
    departments: ["ethnology"],
    description: "Untersuchung der Auswirkungen von Urbanisierung auf kulturelle Identitäten.",
    isbn: "978-1-032-15678-9",
    cover: "https://images.pexels.com/photos/3184454/pexels-photo-3184454.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop",
    featured: false
  },
  {
    id: 9,
    title: "Urdu Dialects of South Asia: A Linguistic Survey",
    authors: ["Dr. Fatima Khan"],
    authorIds: [13],
    publisher: "Cambridge University Press",
    year: "2023",
    type: "Monographie",
    departments: ["modern-south-asian-studies"],
    description: "Erste systematische Untersuchung der regionalen Varianten des Urdu.",
    isbn: "978-1-108-48392-11",
    cover: "https://images.pexels.com/photos/1029141/pexels-photo-1029141.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop",
    featured: false
  },
  {
    id: 10,
    title: "Postcolonial Identity in South Asian Literature",
    authors: ["Dr. Arjun Mehta", "Prof. Dr. Rajesh Patel"],
    authorIds: [14, 2],
    publisher: "University of Chicago Press",
    year: "2023",
    type: "Sammelband",
    departments: ["modern-south-asian-studies"],
    description: "Interdisziplinäre Beiträge zur postkolonialen Identität in der Literatur.",
    isbn: "978-0-226-82456-3",
    cover: "https://images.pexels.com/photos/3760613/pexels-photo-3760613.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop",
    featured: false
  },
  {
    id: 11,
    title: "Water Management in the Ganges-Brahmaputra Delta",
    authors: ["Dr. Thomas Weber"],
    authorIds: [15],
    publisher: "Water Resources Research",
    year: "2023",
    type: "Zeitschriftenartikel",
    departments: ["geography"],
    description: "Analyse der Wassermanagement-Herausforderungen im größten Delta der Welt.",
    doi: "10.1029/2023WR034567",
    cover: "https://images.pexels.com/photos/1370295/pexels-photo-1370295.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop",
    featured: false
  },
  {
    id: 12,
    title: "Women in South Asian History: From Medieval to Modern Times",
    authors: ["Dr. Kavita Sharma"],
    authorIds: [16],
    publisher: "University of Chicago Press",
    year: "2023",
    type: "Monographie",
    departments: ["history"],
    description: "Geschlechtergeschichtliche Perspektiven auf die südasiatische Geschichte.",
    isbn: "978-0-226-82456-4",
    cover: "https://images.pexels.com/photos/3760613/pexels-photo-3760613.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop",
    featured: false
  },
  {
    id: 13,
    title: "Decolonization and Partition in South Asia: A Comparative Study",
    authors: ["Dr. James Wilson", "Prof. Dr. Maria Schmidt"],
    authorIds: [17, 1],
    publisher: "Oxford University Press",
    year: "2023",
    type: "Sammelband",
    departments: ["history"],
    description: "Vergleichende Analyse der Dekolonisierungsprozesse in Südasien.",
    isbn: "978-0-19-886543-3",
    cover: "https://images.pexels.com/photos/3184454/pexels-photo-3184454.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop",
    featured: false
  },
  {
    id: 14,
    title: "Federalism and Ethnic Conflict in South Asia",
    authors: ["Dr. Vikram Singh", "Prof. Dr. Maria Schmidt"],
    authorIds: [18, 1],
    publisher: "Oxford University Press",
    year: "2023",
    type: "Sammelband",
    departments: ["political-science"],
    description: "Vergleichende Analyse föderaler Strukturen und ethnischer Konflikte.",
    isbn: "978-0-19-886543-4",
    cover: "https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop",
    featured: false
  },
  {
    id: 15,
    title: "Trade Integration and Economic Growth in South Asia",
    authors: ["Mark Johnson, M.A.", "Prof. Dr. Klaus Müller"],
    authorIds: [20, 4],
    publisher: "Journal of Asian Economics",
    year: "2024",
    type: "Zeitschriftenartikel",
    departments: ["development-economics"],
    description: "Empirische Analyse der Handelsintegration und ihrer Wachstumseffekte.",
    doi: "10.1016/j.asieco.2024.101234",
    cover: "https://images.pexels.com/photos/1029141/pexels-photo-1029141.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop",
    featured: false
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