import {
  EducationItem,
  ExperienceItem,
  Profile,
  ProjectItem,
  Skills,
} from "../types";

export const profile: Profile = {
  name: "Bui Quoc Hao",
  role: "Software Engineer",
  email: "quochao170402@gmail.com",
  location: "Ho Chi Minh City, Vietnam",
  summary:
    "Results-driven Software Engineer with 3.5 years of experience architecting scalable backend systems and modern frontend applications. Expert in the .NET ecosystem and microservices. Dedicated to mastering cloud technologies (GCP/Azure/AWS) to become a Solution Architect. Passionate about solving complex technical challenges, continuous learning, and building high-performance, large-scale systems.",
  shortSummary:
    "Results-driven Software Engineer and aspiring Solution Architect with 3.5 years of experience in .NET and microservices. Passionate about tackling complex challenges and expanding expertise in cloud architectures.",
  social: {
    linkedin: "https://www.linkedin.com/in/hào-bùi-5b0582262",
    github: "https://github.com/quochao170402",
  },
};

export const skills: Skills = {
  backend: [
    "C#",
    "Java",
    "Golang",
    ".NET Core",
    ".NET Framework",
    "Spring Boot",
    "Entity Framework",
    "RabbitMQ",
    "MassTransit",
  ],
  frontend: [
    "TypeScript",
    "React",
    "React Native",
    "TailwindCSS",
    "Ant Design",
  ],
  database: ["SQL Server", "PostgreSQL", "MongoDB", "Redis", "Elasticsearch"],
  architecture: [
    "Microservices",
    "Clean Architecture",
    "DDD",
    "TDD",
    "Event-Driven",
  ],
  devops: ["GCP", "Docker", "CI/CD (GitHub Actions)", "Linux", "Nginx"],
};

export const experience: ExperienceItem[] = [
  {
    company: "Herond Labs",
    role: "Software Engineer",
    period: "06/2025 – Present",
    type: "Full-time",
    description: [
      "Leading technical direction for enterprise fintech solutions.",
      "Architecting microservices and overseeing cloud infrastructure (GCP).",
      "Mentoring team members and establishing coding standards.",
    ],
    tech: [".NET Core", "React Native", "GCP", "PostgreSQL", "Microservices"],
  },
  {
    company: "Bitech",
    role: "Software Engineer",
    period: "09/2023 – 05/2025",
    type: "Full-time",
    description: [
      "Developed high-performance backend services for high-volume transactions.",
      "Implemented system optimizations reducing downtime by 40%.",
      "Managed successful migration of legacy datasets.",
    ],
    tech: [
      ".NET Core",
      "React",
      "TailwindCSS",
      "Microservices",
      "System Design",
    ],
  },
  {
    company: "Freelance",
    role: "DevOps Engineer (Financial Website)",
    period: "03/2024 – 03/2024",
    type: "Freelance",
    description: [
      "Designed and deployed secure infrastructure for financial web apps.",
      "Automated deployment workflows using GitHub Actions.",
    ],
    tech: ["Docker", "Linux", "Nginx", "CI/CD", "GitHub Actions"],
  },
  {
    company: "Freelance",
    role: "Backend Engineer (Music Platform)",
    period: "05/2023 – 07/2023",
    type: "Freelance",
    description: [
      "Built the core REST API and database schema for music metadata.",
      "Optimized complex queries for real-time playlist management.",
    ],
    tech: [".NET Core", "Entity Framework", "SQL Server", "REST API"],
  },
  {
    company: "HAHAHO JSC",
    role: "Backend Engineer",
    period: "09/2022 – 09/2023",
    type: "Full-time",
    description: [
      "Migrated monolithic application to scalable microservices.",
      "Implemented event-driven communication using RabbitMQ.",
    ],
    tech: [
      ".NET Core",
      "RabbitMQ",
      "Microservices",
      "DDD",
      "Clean Architecture",
    ],
  },
  {
    company: "HAHAHO JSC",
    role: "Intern Backend Engineer",
    period: "08/2022 – 09/2022",
    type: "Internship",
    description: [
      "Supported backend development and database maintenance.",
      "Learned and applied Domain-Driven Design principles.",
    ],
    tech: [".NET Core", "Entity Framework", "DDD"],
  },
];

export const education: EducationItem[] = [
  {
    school: "University of Transport Ho Chi Minh City",
    degree: "Bachelor of Engineering in Information Technology",
    period: "10/2020 – 10/2023",
    gpa: "3.10/4.0",
  },
];

export const projects: ProjectItem[] = [
  {
    title: "Fintech Enterprise Platform",
    company: "Herond Labs",
    description:
      "Comprehensive fintech platform handling transaction management and compliance for enterprise clients.",
    longDescription:
      "A high-scale enterprise fintech platform designed to handle complex transaction flows, compliance checking, and real-time reporting. The system was built to ensure 99.99% availability and strict data consistency across distributed services.",
    tech: ["NET Core", "React Native", "GCP", "PostgreSQL"],
    type: "Work",
    architecture: ["Microservices", "Event-Driven", "CQRS"],
    features: [
      "Real-time Transaction Processing Engine",
      "Automated Compliance & KYC Verification",
      "Cross-platform Mobile App for end-users",
      "Centralized Logging & Monitoring with ELK Stack",
    ],
    images: [
      "https://placehold.co/1200x800/111827/white?text=Dashboard+Overview",
      "https://placehold.co/1200x800/111827/white?text=Mobile+App+Interface",
      "https://placehold.co/1200x800/111827/white?text=System+Architecture",
    ],
  },
  {
    title: "Financial Trading Portal",
    company: "Client Project",
    description:
      "Production-grade financial website deployed on Linux VPS with automated CI/CD pipelines.",
    longDescription:
      "A secure and responsive financial trading portal built for high-speed data access and trading execution. The infrastructure was containerized to ensure consistent deployments and easy scalability during market peaks.",
    tech: ["Docker", "GitHub Actions", "Nginx", "Linux"],
    type: "Freelance",
    architecture: ["Containerized Monolith", "Reverse Proxy"],
    features: [
      "Automated Zero-downtime Deployments",
      "SSL/TLS Security Hardening",
      "Real-time Market Data Feeds (WebSocket)",
      "Optimized Nginx Caching Strategy",
    ],
    images: [
      "https://placehold.co/1200x800/1f2937/white?text=Trading+Dashboard",
      "https://placehold.co/1200x800/1f2937/white?text=CI/CD+Pipeline",
    ],
  },
  {
    title: "Music Metadata System",
    company: "Client Project",
    description:
      "Music management system with complex metadata handling and optimized database schemas.",
    longDescription:
      "A specialized backend system for managing vast libraries of music metadata. It handles complex relationships between artists, albums, tracks, and copyrights, ensuring fast search and retrieval times.",
    tech: ["NET Core", "Entity Framework", "SQL Server"],
    type: "Freelance",
    architecture: ["Layered Architecture", "Repository Pattern"],
    features: [
      "Advanced Search with Full-text Indexing",
      "Complex Metadata Relationship Management",
      "Bulk Import/Export Tools",
      "RESTful API for 3rd Party Integration",
    ],
    images: [
      "https://placehold.co/1200x800/1f2937/white?text=API+Documentation",
      "https://placehold.co/1200x800/1f2937/white?text=Database+Schema",
    ],
  },
  {
    title: "AI Analytics Dashboard",
    company: "Personal Project",
    description:
      "Real-time analytics dashboard powered by machine learning for predictive business insights.",
    longDescription:
      "An interactive dashboard that visualizes complex business data and uses ML models to predict future trends. Built with a focus on performance and data visualization best practices.",
    tech: ["Python", "React", "TensorFlow", "FastAPI"],
    type: "Work",
    architecture: ["Microservices", "Serverless Functions"],
    features: [
      "Predictive Sales Modeling",
      "Interactive Data Visualizations (D3.js)",
      "Automated PDF Report Generation",
      "Role-based Access Control",
    ],
    images: [
      "https://placehold.co/1200x800/111827/white?text=Analytics+Home",
      "https://placehold.co/1200x800/111827/white?text=Prediction+Model",
    ],
  },
  {
    title: "E-Commerce Mobile App",
    company: "Client Project",
    description:
      "Cross-platform mobile application for a fashion retailer with AR try-on features.",
    longDescription:
      "A feature-rich mobile app offering a seamless shopping experience. Includes an innovative AR try-on feature allowing users to visualize products before purchase.",
    tech: ["React Native", "Firebase", "Redux", "Stripe"],
    type: "Freelance",
    architecture: ["MVVM", "Cloud Functions"],
    features: [
      "Augmented Reality Product Viewer",
      "Secure Payment Gateway Integration",
      "Real-time Order Tracking",
      "Personalized Recommendation Engine",
    ],
    images: [
      "https://placehold.co/1200x800/111827/white?text=App+Home",
      "https://placehold.co/1200x800/111827/white?text=AR+View",
    ],
  },
  {
    title: "Smart Home Controller",
    company: "Side Project",
    description:
      "IoT control panel for managing smart home devices with voice integration.",
    longDescription:
      "A centralized hub for controlling various smart home protocol devices. Integates with Alexa and Google Home for voice commands and provides automation routines.",
    tech: ["IoT", "Node.js", "MQTT", "React"],
    type: "Work",
    architecture: ["Event-Driven", "Pub/Sub"],
    features: [
      "Voice Command Integration",
      "Automated Daily Routines",
      "Energy Usage Monitoring",
      "Device Health Checks",
    ],
    images: [
      "https://placehold.co/1200x800/111827/white?text=Control+Panel",
      "https://placehold.co/1200x800/111827/white?text=Automation+Flow",
    ],
  },
  {
    title: "Supply Chain Tracker",
    company: "Enterprise Solution",
    description:
      "Blockchain-based supply chain transparency tool for logistics companies.",
    longDescription:
      "Leverages blockchain technology to provide immutable records of product journey from manufacture to delivery, ensuring authenticity and transparency.",
    tech: ["Solidity", "Web3.js", "React", "Node.js"],
    type: "Work",
    architecture: ["Decentralized App (DApp)", "Smart Contracts"],
    features: [
      "Immutable Audit Trail",
      "QR Code Product Verification",
      "Smart Contract Escrow",
      "Real-time Shipment Map",
    ],
    images: [
      "https://placehold.co/1200x800/111827/white?text=Tracking+Map",
      "https://placehold.co/1200x800/111827/white?text=Smart+Contract",
    ],
  },
  {
    title: "Health Telemetry System",
    company: "MedTech Startup",
    description:
      "HIPAA-compliant system for remote patient monitoring and doctor communication.",
    longDescription:
      "A secure platform allowing doctors to monitor vital signs of patients remotely in real-time. Built with strict adherence to security and privacy regulations.",
    tech: ["Java", "Spring Boot", "Angular", "WebRTC"],
    type: "Freelance",
    architecture: ["Monolithic (Secure)", "Socket Connections"],
    features: [
      "Real-time EKG Streaming",
      "Secure Video Consultation",
      "Encrypted Chat Messaging",
      "Critical Alert System",
    ],
    images: [
      "https://placehold.co/1200x800/111827/white?text=Doctor+Dashboard",
      "https://placehold.co/1200x800/111827/white?text=Patient+App",
    ],
  },
];
