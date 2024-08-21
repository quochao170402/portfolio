import { Experience, IProject } from '../types/type';

export const experiences: Experience[] = [
  {
    Id: '1',
    CompanyName: 'TechCorp',
    City: 'San Francisco',
    Role: 'Software Engineer',
    Start: '2021-01-01',
    End: '2023-12-31',
    Description:
      'Developed scalable web applications using modern technologies. Developed scalable web applications using modern technologies. Developed scalable web applications using modern technologies.',
    Technologies: ['React', 'Node.js', 'MongoDB', 'AWS']
  },
  {
    Id: '2',
    CompanyName: 'DataSystems Inc.',
    City: 'New York',
    Role: 'Full Stack Developer',
    Start: '2019-03-15',
    End: '2020-12-31',
    Description: 'Designed and implemented RESTful APIs and microservices.',
    Technologies: ['Java', 'Spring Boot', 'PostgreSQL', 'Docker']
  },
  {
    Id: '3',
    CompanyName: 'CloudSolutions Ltd.',
    City: 'London',
    Role: 'Cloud Architect',
    Start: '2018-06-01',
    End: '2019-02-28',
    Description: 'Architected and deployed cloud-native applications.',
    Technologies: ['Azure', 'Kubernetes', 'Terraform', 'Go']
  }
];

export const skills: string[] = [
  'JavaScript',
  'TypeScript',
  'React',
  'Node.js',
  'Python',
  'Java',
  'C#',
  'SQL',
  'MongoDB',
  'Docker',
  'Kubernetes',
  'AWS',
  'Azure',
  'Git',
  'RESTful APIs',
  'GraphQL',
  'Agile methodologies',
  'CI/CD',
  'Test-Driven Development',
  'Microservices architecture'
];

export const projects: IProject[] = [
  {
    Id: '1',
    Name: 'E-commerce Platform',
    Company: 'TechCorp',
    Image:
      'https://scontent.fsgn5-9.fna.fbcdn.net/v/t39.30808-6/405391111_1346679229551662_2027200995229414533_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=Pk1r4NkRmeUQ7kNvgE8H_st&_nc_ht=scontent.fsgn5-9.fna&oh=00_AYA6DNUtVbnhHJlva2z5_YtF5FM7-y4kM3DfUSFCaE7LBA&oe=66CB3CEF',
    Description: 'A full-stack e-commerce solution with advanced features.',
    Technologies: ['React', 'Node.js', 'MongoDB'],
    Role: 'Full Stack Developer'
  },
  {
    Id: '2',
    Name: 'Task Management App',
    Company: 'DataSystems Inc.',
    Image:
      'https://scontent.fsgn5-9.fna.fbcdn.net/v/t39.30808-6/405391111_1346679229551662_2027200995229414533_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=Pk1r4NkRmeUQ7kNvgE8H_st&_nc_ht=scontent.fsgn5-9.fna&oh=00_AYA6DNUtVbnhHJlva2z5_YtF5FM7-y4kM3DfUSFCaE7LBA&oe=66CB3CEF',
    Description: 'Collaborative task management tool for teams.',
    Technologies: ['Vue.js', 'Firebase', 'Vuex'],
    Role: 'Frontend Developer'
  },
  {
    Id: '3',
    Name: 'Data Visualization Dashboard',
    Company: 'CloudSolutions Ltd.',
    Image:
      'https://scontent.fsgn5-9.fna.fbcdn.net/v/t39.30808-6/405391111_1346679229551662_2027200995229414533_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=Pk1r4NkRmeUQ7kNvgE8H_st&_nc_ht=scontent.fsgn5-9.fna&oh=00_AYA6DNUtVbnhHJlva2z5_YtF5FM7-y4kM3DfUSFCaE7LBA&oe=66CB3CEF',
    Description: 'Interactive data visualization tool for complex datasets.',
    Technologies: ['D3.js', 'React', 'Node.js'],
    Role: 'Data Visualization Specialist'
  },
  {
    Id: '4',
    Name: 'AI Chatbot',
    Company: 'AI Innovations',
    Image:
      'https://scontent.fsgn5-9.fna.fbcdn.net/v/t39.30808-6/405391111_1346679229551662_2027200995229414533_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=Pk1r4NkRmeUQ7kNvgE8H_st&_nc_ht=scontent.fsgn5-9.fna&oh=00_AYA6DNUtVbnhHJlva2z5_YtF5FM7-y4kM3DfUSFCaE7LBA&oe=66CB3CEF',
    Description: 'Intelligent chatbot for customer support.',
    Technologies: ['Python', 'TensorFlow', 'Flask'],
    Role: 'Machine Learning Engineer'
  },
  {
    Id: '5',
    Name: 'Mobile Fitness Tracker',
    Company: 'HealthTech Solutions',
    Image:
      'https://scontent.fsgn5-9.fna.fbcdn.net/v/t39.30808-6/405391111_1346679229551662_2027200995229414533_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=Pk1r4NkRmeUQ7kNvgE8H_st&_nc_ht=scontent.fsgn5-9.fna&oh=00_AYA6DNUtVbnhHJlva2z5_YtF5FM7-y4kM3DfUSFCaE7LBA&oe=66CB3CEF',
    Description: 'Cross-platform mobile app for fitness tracking.',
    Technologies: ['React Native', 'Redux', 'Firebase'],
    Role: 'Mobile App Developer'
  },
  {
    Id: '6',
    Name: 'Blockchain Supply Chain',
    Company: 'BlockChain Innovations',
    Image:
      'https://scontent.fsgn5-9.fna.fbcdn.net/v/t39.30808-6/405391111_1346679229551662_2027200995229414533_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=Pk1r4NkRmeUQ7kNvgE8H_st&_nc_ht=scontent.fsgn5-9.fna&oh=00_AYA6DNUtVbnhHJlva2z5_YtF5FM7-y4kM3DfUSFCaE7LBA&oe=66CB3CEF',
    Description: 'Blockchain-based solution for supply chain management.',
    Technologies: ['Solidity', 'Ethereum', 'Web3.js'],
    Role: 'Blockchain Developer'
  }
];
