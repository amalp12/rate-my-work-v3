export interface Project {
  name: string
  url: string
  description: string
  skills: string[]
}

export interface Applicant {
  id: string
  name: string
  linkedIn: string
  email: string
  projects: Project[]
  skills: string[]
}

export const applicants: Applicant[] = [
  {
    id: "1",
    name: "John Doe",
    linkedIn: "john-doe",
    email: "john.doe@example.com",
    skills: ["React", "Next.js", "TypeScript", "Node.js", "Tailwind CSS"],
    projects: [
      {
        name: "E-commerce Platform",
        url: "https://github.com/JohnDoe/ecommerce",
        description: "A full-stack e-commerce platform built with Next.js and Stripe",
        skills: ["React", "Next.js", "Stripe", "Tailwind CSS"]
      },
      {
        name: "Task Management App",
        url: "https://github.com/JohnDoe/task-manager",
        description: "Real-time task management application with team collaboration features",
        skills: ["React", "Socket.io", "Express", "MongoDB"]
      }
    ]
  },
  {
    id: "2",
    name: "Jane Smith",
    linkedIn: "jane-smith",
    email: "jane.smith@example.com",
    skills: ["React", "JavaScript", "CSS", "HTML", "Redux"],
    projects: [
      {
        name: "Portfolio Website",
        url: "https://github.com/JaneSmith/portfolio",
        description: "Personal portfolio website with dynamic content management",
        skills: ["React", "Gatsby", "GraphQL", "Styled Components"]
      }
    ]
  },
  {
    id: "3",
    name: "Mike Johnson",
    linkedIn: "mike-johnson",
    email: "mike.johnson@example.com",
    skills: ["Python", "Django", "PostgreSQL", "Docker", "AWS"],
    projects: [
      {
        name: "API Gateway Service",
        url: "https://github.com/MikeJ/api-gateway",
        description: "Microservices API gateway with authentication and rate limiting",
        skills: ["Python", "FastAPI", "Docker", "Redis"]
      },
      {
        name: "Data Analytics Platform",
        url: "https://github.com/MikeJ/analytics",
        description: "Real-time data analytics platform for business intelligence",
        skills: ["Python", "Apache Kafka", "ElasticSearch", "Docker"]
      }
    ]
  }
]
