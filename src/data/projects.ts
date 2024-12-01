export interface Project {
  name: string
  url: string
  description: string
  skills: string[]
  status: "pending" | "verified" | "rejected"
  feedback?: string
}

export interface ApplicantProjects {
  applicantId: string
  projects: Project[]
}

export const applicantProjects: ApplicantProjects[] = [
  {
    applicantId: "1",
    projects: [
      {
        name: "E-commerce Platform",
        url: "https://github.com/JohnDoe/ecommerce",
        description: "A full-stack e-commerce platform built with Next.js and Stripe",
        skills: ["React", "Next.js", "Stripe", "Tailwind CSS"],
        status: "pending"
      },
      {
        name: "Task Management App",
        url: "https://github.com/JohnDoe/task-manager",
        description: "Real-time task management application with team collaboration features",
        skills: ["React", "Socket.io", "Express", "MongoDB"],
        status: "verified"
      }
    ]
  },
  {
    applicantId: "2",
    projects: [
      {
        name: "Portfolio Website",
        url: "https://github.com/JaneSmith/portfolio",
        description: "Personal portfolio website with dynamic content management",
        skills: ["React", "Gatsby", "GraphQL", "Styled Components"],
        status: "pending"
      }
    ]
  },
  {
    applicantId: "3",
    projects: [
      {
        name: "API Gateway Service",
        url: "https://github.com/MikeJ/api-gateway",
        description: "Microservices API gateway with authentication and rate limiting",
        skills: ["Python", "FastAPI", "Docker", "Redis"],
        status: "verified"
      },
      {
        name: "Data Analytics Platform",
        url: "https://github.com/MikeJ/analytics",
        description: "Real-time data analytics platform for business intelligence",
        skills: ["Python", "Apache Kafka", "ElasticSearch", "Docker"],
        status: "pending",
        feedback: "Please provide more details about the data processing pipeline"
      }
    ]
  }
]
