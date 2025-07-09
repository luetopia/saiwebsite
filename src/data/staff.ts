import { Department } from './departments';

export interface Person {
  id: number;
  name: string;
  position: string;
  departments: string[]; // Array of department IDs
  specialization: string;
  email: string;
  phone: string;
  office: string;
  image: string;
  publications: string[];
  expertise: string[];
  bio?: string;
}

export const staff: Person[] = [
  {
    id: 1,
    name: "Prof. Dr. Maria Schmidt",
    position: "Professor/in",
    departments: ["political-science", "history"],
    specialization: "Demokratisierung in Südasien",
    email: "m.schmidt@sai.uni-heidelberg.de",
    phone: "+49 6221 54-8901",
    office: "Raum 201",
    image: "https://images.pexels.com/photos/3831645/pexels-photo-3831645.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
    publications: ["Democracy in South Asia", "Political Transformation"],
    expertise: ["Demokratieforschung", "Südasiatische Politik", "Governance"],
    bio: "Prof. Dr. Maria Schmidt ist eine führende Expertin für Demokratisierungsprozesse in Südasien mit über 20 Jahren Forschungserfahrung."
  },
  {
    id: 2,
    name: "Prof. Dr. Rajesh Patel",
    position: "Professor/in",
    departments: ["modern-south-asian-studies"],
    specialization: "Hindi und Urdu Literatur",
    email: "r.patel@sai.uni-heidelberg.de",
    phone: "+49 6221 54-8902",
    office: "Raum 105",
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
    publications: ["Modern Hindi Literature", "Urdu Poetry Analysis"],
    expertise: ["Hindi Literatur", "Urdu Sprachwissenschaft", "Literaturtheorie"]
  },
  {
    id: 3,
    name: "Dr. Sarah Weber",
    position: "Wissenschaftliche/r Mitarbeiter/in",
    departments: ["political-science", "ethnology"],
    specialization: "Medien und Politik in Indien",
    email: "s.weber@sai.uni-heidelberg.de",
    phone: "+49 6221 54-8903",
    office: "Raum 315",
    image: "https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
    publications: ["Social Media and Democracy", "Digital Politics"],
    expertise: ["Politische Kommunikation", "Soziale Medien", "Indische Politik"]
  },
  {
    id: 4,
    name: "Prof. Dr. Klaus Müller",
    position: "Professor/in",
    departments: ["development-economics"],
    specialization: "Entwicklungsökonomie",
    email: "k.mueller@sai.uni-heidelberg.de",
    phone: "+49 6221 54-8904",
    office: "Raum 230",
    image: "https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
    publications: ["Economic Development in South Asia", "Trade Relations"],
    expertise: ["Entwicklungsökonomie", "Internationale Wirtschaft", "Handelspolitik"]
  },
  {
    id: 5,
    name: "Dr. Priya Sharma",
    position: "Wissenschaftliche/r Mitarbeiter/in",
    departments: ["cultural-religious-history"],
    specialization: "Religionssoziologie",
    email: "p.sharma@sai.uni-heidelberg.de",
    phone: "+49 6221 54-8905",
    office: "Raum 118",
    image: "https://images.pexels.com/photos/3760613/pexels-photo-3760613.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
    publications: ["Religion and Society", "Cultural Identity"],
    expertise: ["Religionssoziologie", "Kulturelle Identität", "Hinduismus"]
  },
  {
    id: 6,
    name: "PD Dr. Michael Fischer",
    position: "Privatdozent/in",
    departments: ["history", "geography"],
    specialization: "Kolonialgeschichte Südasiens",
    email: "m.fischer@sai.uni-heidelberg.de",
    phone: "+49 6221 54-8906",
    office: "Raum 142",
    image: "https://images.pexels.com/photos/3831849/pexels-photo-3831849.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
    publications: ["Colonial History", "British India"],
    expertise: ["Kolonialgeschichte", "Britisch-Indien", "Historische Forschung"]
  },
  {
    id: 7,
    name: "Laura Becker, M.A.",
    position: "Doktorand/in",
    departments: ["cultural-religious-history"],
    specialization: "Buddhismus in Sri Lanka",
    email: "l.becker@sai.uni-heidelberg.de",
    phone: "+49 6221 54-8907",
    office: "Raum 412",
    image: "https://images.pexels.com/photos/3760790/pexels-photo-3760790.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
    publications: ["Buddhism in Modern Sri Lanka"],
    expertise: ["Buddhismus", "Sri Lanka", "Religionsgeschichte"]
  },
  {
    id: 8,
    name: "Thomas Hoffmann",
    position: "Verwaltung",
    departments: [],
    specialization: "Bibliotheksleitung",
    email: "t.hoffmann@sai.uni-heidelberg.de",
    phone: "+49 6221 54-8910",
    office: "Bibliothek",
    image: "https://images.pexels.com/photos/3831796/pexels-photo-3831796.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
    publications: [],
    expertise: ["Bibliothekswesen", "Informationsmanagement", "Digitale Archive"]
  },
  {
    id: 9,
    name: "Prof. Dr. Anita Gupta",
    position: "Professor/in",
    departments: ["ethnology"],
    specialization: "Kastensystem und soziale Mobilität",
    email: "a.gupta@sai.uni-heidelberg.de",
    phone: "+49 6221 54-8915",
    office: "Raum 205",
    image: "https://images.pexels.com/photos/3831645/pexels-photo-3831645.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
    publications: ["Caste and Social Mobility", "Tribal Communities of India"],
    expertise: ["Kastensystem", "Soziale Mobilität", "Stammeskulturen"],
    bio: "Prof. Dr. Anita Gupta erforscht seit über 15 Jahren die Veränderungen im Kastensystem und soziale Mobilität in Indien."
  },
  {
    id: 10,
    name: "Dr. Ahmed Hassan",
    position: "Wissenschaftliche/r Mitarbeiter/in",
    departments: ["cultural-religious-history"],
    specialization: "Islamische Kultur und Sufismus",
    email: "a.hassan@sai.uni-heidelberg.de",
    phone: "+49 6221 54-8916",
    office: "Raum 220",
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
    publications: ["Sufism in South Asia", "Islamic Philosophy"],
    expertise: ["Sufismus", "Islamische Philosophie", "Urdu-Literatur"]
  },
  {
    id: 11,
    name: "Dr. Lisa Chen",
    position: "Wissenschaftliche/r Mitarbeiter/in",
    departments: ["development-economics", "geography"],
    specialization: "Nachhaltige Entwicklung und Umweltökonomie",
    email: "l.chen@sai.uni-heidelberg.de",
    phone: "+49 6221 54-8917",
    office: "Raum 418",
    image: "https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
    publications: ["Environmental Economics in Asia", "Climate Change Adaptation"],
    expertise: ["Umweltökonomie", "Nachhaltige Entwicklung", "Klimaökonomie"]
  },
  {
    id: 12,
    name: "Dr. Ravi Krishnan",
    position: "Postdoktorand",
    departments: ["ethnology"],
    specialization: "Urbanisierung und kulturelle Identität",
    email: "r.krishnan@sai.uni-heidelberg.de",
    phone: "+49 6221 54-8918",
    office: "Raum 412",
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
    publications: ["Urban Transformations in South Asia"],
    expertise: ["Urbanisierung", "Kulturelle Identität", "Migration"]
  },
  {
    id: 13,
    name: "Dr. Fatima Khan",
    position: "Wissenschaftliche/r Mitarbeiter/in",
    departments: ["modern-south-asian-studies"],
    specialization: "Urdu-Literatur und Dialektologie",
    email: "f.khan@sai.uni-heidelberg.de",
    phone: "+49 6221 54-8919",
    office: "Raum 220",
    image: "https://images.pexels.com/photos/3760613/pexels-photo-3760613.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
    publications: ["Urdu Dialects of South Asia"],
    expertise: ["Urdu-Literatur", "Dialektologie", "Sprachpolitik"]
  },
  {
    id: 14,
    name: "Dr. Arjun Mehta",
    position: "Postdoktorand",
    departments: ["modern-south-asian-studies"],
    specialization: "Moderne südasiatische Literatur",
    email: "a.mehta@sai.uni-heidelberg.de",
    phone: "+49 6221 54-8920",
    office: "Raum 430",
    image: "https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
    publications: ["Postcolonial Literature in South Asia"],
    expertise: ["Moderne Literatur", "Übersetzungswissenschaft", "Postkoloniale Studien"]
  },
  {
    id: 15,
    name: "Dr. Thomas Weber",
    position: "Postdoktorand",
    departments: ["geography"],
    specialization: "Wassermanagement und Hydrologie",
    email: "t.weber@sai.uni-heidelberg.de",
    phone: "+49 6221 54-8921",
    office: "Raum 420",
    image: "https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
    publications: ["Water Management in South Asia"],
    expertise: ["Hydrologie", "Wassermanagement", "GIS-Analyse"]
  },
  {
    id: 16,
    name: "Dr. Kavita Sharma",
    position: "Postdoktorandin",
    departments: ["history"],
    specialization: "Sozial- und Kulturgeschichte des modernen Südasien",
    email: "k.sharma@sai.uni-heidelberg.de",
    phone: "+49 6221 54-8922",
    office: "Raum 425",
    image: "https://images.pexels.com/photos/3760613/pexels-photo-3760613.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
    publications: ["Women in South Asian History"],
    expertise: ["Sozialgeschichte", "Frauengeschichte", "Moderne Geschichte"]
  },
  {
    id: 17,
    name: "Dr. James Wilson",
    position: "Wissenschaftlicher Mitarbeiter",
    departments: ["history"],
    specialization: "Kolonialgeschichte und Dekolonisierung",
    email: "j.wilson@sai.uni-heidelberg.de",
    phone: "+49 6221 54-8923",
    office: "Raum 315",
    image: "https://images.pexels.com/photos/3831849/pexels-photo-3831849.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
    publications: ["Decolonization and Partition"],
    expertise: ["Britisches Raj", "Unabhängigkeitsbewegung", "Partition"]
  },
  {
    id: 18,
    name: "Dr. Vikram Singh",
    position: "Postdoktorand",
    departments: ["political-science"],
    specialization: "Föderalismus und regionale Politik",
    email: "v.singh@sai.uni-heidelberg.de",
    phone: "+49 6221 54-8924",
    office: "Raum 435",
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
    publications: ["Federalism in South Asia"],
    expertise: ["Föderalismus", "Regionale Politik", "Konfliktforschung"]
  },
  {
    id: 19,
    name: "Andrea Bauer",
    position: "Verwaltung",
    departments: [],
    specialization: "Verwaltungsleitung",
    email: "a.bauer@sai.uni-heidelberg.de",
    phone: "+49 6221 54-8950",
    office: "Raum 001",
    image: "https://images.pexels.com/photos/3831645/pexels-photo-3831645.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
    publications: [],
    expertise: ["Verwaltung", "Projektmanagement", "Finanzen"]
  },
  {
    id: 20,
    name: "Mark Johnson, M.A.",
    position: "Doktorand/in",
    departments: ["development-economics"],
    specialization: "Handelspolitik in Südasien",
    email: "m.johnson@sai.uni-heidelberg.de",
    phone: "+49 6221 54-8925",
    office: "Raum 440",
    image: "https://images.pexels.com/photos/3831849/pexels-photo-3831849.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
    publications: ["Trade Integration in South Asia"],
    expertise: ["Handelspolitik", "Wirtschaftsintegration", "SAARC"]
  }
];

export const getStaffByDepartment = (departmentId: string): Person[] => {
  return staff.filter(person => person.departments.includes(departmentId));
};

export const getStaffByPosition = (position: string): Person[] => {
  return staff.filter(person => person.position === position);
};