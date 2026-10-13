const DATA = {
  personal: {
    name: "Rathan Vengala",
    title: "Associate Staff Engineer @ Nagarro",
    tagline: "Backend Architect • AI/LLM Engineering",
    email: "rathanvengala@gmail.com",
    phone: "Available on request",
    location: "Bengaluru, India",
    summary: `I’m an Associate Staff Engineer at Nagarro with 5+ years of experience building scalable, event-driven backend systems using Java, Spring Boot, and AWS. I specialize in backend architecture, distributed systems, and CI/CD automation, and I am actively expanding into AI/LLM engineering, RAG, vector databases, embeddings, LangGraph, and agentic workflows.`,
    socials: {
      github: "https://github.com/RathanVengala",
      linkedin: "https://www.linkedin.com/in/rathan-vengala"
    }
  },

  stats: [
    { label: "Years Experience", value: "5+", icon: "⚡" },
    { label: "Cloud Scale", value: "AWS", icon: "☁️" },
    { label: "Focus", value: "AI + Backend", icon: "🤖" },
    { label: "Delivery", value: "CI/CD", icon: "🚀" }
  ],

  skills: [
    {
      category: "Languages",
      icon: "💻",
      color: "cyan",
      items: ["Java", "Python", "JavaScript", "SQL", "HTML/CSS"]
    },
    {
      category: "Backend & Frameworks",
      icon: "⚙️",
      color: "indigo",
      items: ["Spring Boot", "Kafka", "REST APIs", "Microservices", "Hibernate", "Maven"]
    },
    {
      category: "Cloud & DevOps",
      icon: "☁️",
      color: "violet",
      items: ["AWS", "Docker", "Kubernetes", "Terraform", "GitHub Actions", "CI/CD"]
    },
    {
      category: "AI & Data",
      icon: "🤖",
      color: "emerald",
      items: ["RAG", "Embeddings", "Vector DBs", "LangGraph", "LLM Integration", "Agentic Workflows"]
    },
    {
      category: "Databases",
      icon: "🗄️",
      color: "amber",
      items: ["PostgreSQL", "Redis", "MySQL", "AWS RDS", "Caching", "Data Modeling"]
    },
    {
      category: "Engineering Practices",
      icon: "🏗️",
      color: "rose",
      items: ["System Design", "Event-Driven Architecture", "TDD", "Agile", "Code Reviews", "Distributed Systems"]
    }
  ],

  projects: [
    {
      id: "rag-pdf-chatbot",
      title: "RAG PDF Chatbot",
      subtitle: "Conversational AI over Documents",
      company: "Personal Project",
      role: "AI Engineer",
      description: "A conversational Retrieval-Augmented Generation (RAG) application that enables users to ask questions over PDF documents and receive grounded answers using vector search and an LLM.",
      highlights: [
        "Built ingestion pipeline for PDF chunking and embedding generation.",
        "Stored vectors in a database and retrieved relevant context for each query.",
        "Chained retrieval and LLM reasoning for accurate, context-grounded responses."
      ],
      tech: ["Python", "RAG", "Embeddings", "Vector DB", "LLM"],
      github: "https://github.com/RathanVengala/rag-pdf-chatbot",
      demo: null,
      color: "cyan"
    },
    {
      id: "meditrack-ai",
      title: "MediTrack AI",
      subtitle: "AI Voice Agent for Pharmacy Enquiry & Order Automation",
      company: "Healthcare AI",
      role: "Backend + AI Lead",
      description: "An AI voice agent designed to handle pharmacy enquiries and medication orders using speech-to-text, conversational intent extraction, and grounded business logic.",
      highlights: [
        "Created an end-to-end voice workflow with Twilio, Whisper, and LLM orchestration.",
        "Handled medicine lookup, order flow, and escalation paths for uncertain clinical cases.",
        "Built deterministic state handling to support multi-turn conversational flows reliably."
      ],
      tech: ["Python", "FastAPI", "Twilio", "Whisper", "OpenAI/Anthropic", "REST APIs"],
      github: "https://github.com/RathanVengala/medi-track",
      demo: null,
      color: "indigo"
    },
    {
      id: "backend-platforms",
      title: "Scalable Backend Systems",
      subtitle: "Event-Driven Microservices on AWS",
      company: "Nagarro / Tricon",
      description: "Designed and delivered resilient distributed systems for high-throughput services, including message-driven integrations, caching strategies, and cloud-native deployment flows.",
      highlights: [
        "Built microservices with Spring Boot and event-driven integrations using Kafka and AWS messaging services.",
        "Designed cache and database patterns to reduce latency for critical APIs.",
        "Implemented CI/CD automation for faster and safer deployment cycles."
      ],
      tech: ["Java", "Spring Boot", "Kafka", "AWS", "Redis", "PostgreSQL"],
      github: "https://github.com/RathanVengala",
      demo: null,
      color: "violet"
    }
  ],

  experience: [
    {
      title: "Associate Staff Engineer",
      company: "Nagarro",
      location: "Bengaluru, India",
      period: "Oct 2025 – Present",
      current: true,
      highlights: [
        "Architecting scalable backend systems and AI-first product features in distributed environments.",
        "Leading design discussions for backend modernization, performance, and cloud readiness.",
        "Exploring LLM workflows, RAG pipelines, agent orchestration, and production AI integration patterns."
      ]
    },
    {
      title: "Software Engineer",
      company: "Tricon Infotech",
      location: "Bengaluru, India",
      period: "Apr 2024 – Oct 2025",
      current: false,
      highlights: [
        "Built production backend services using Java, Spring Boot, and AWS services.",
        "Worked on event-driven systems, API performance optimization, and secure deployments.",
        "Partnered with teams to deliver stable features, monitoring, and CI/CD automation."
      ]
    },
    {
      title: "Associate Software Engineer",
      company: "Tricon Infotech",
      location: "Bengaluru, India",
      period: "Aug 2021 – Apr 2024",
      current: false,
      highlights: [
        "Contributed to microservice development and enterprise application workflows.",
        "Worked across Spring Boot, PostgreSQL, and backend data integration layers.",
        "Built a strong foundation in cloud, distributed systems, testing, and agile delivery."
      ]
    }
  ],

  education: {
    institution: "JNTUH",
    degree: "B.Tech in Electronics and Communication Engineering (ECE)",
    cgpa: "7.9",
    period: "2017 – 2021"
  },

  achievements: [
    {
      title: "Backend & AI Focus",
      org: "Nagarro",
      icon: "🚀",
      color: "amber",
      description: "Driving backend architecture and AI/LLM engineering initiatives in modern cloud systems."
    },
    {
      title: "Distributed Systems Work",
      org: "Enterprise Delivery",
      icon: "⚙️",
      color: "cyan",
      description: "Designed scalable and resilient services across event-driven and cloud-native application patterns."
    },
    {
      title: "Academic Foundation",
      org: "B.Tech ECE",
      icon: "🎓",
      color: "indigo",
      description: "Built a strong engineering base with a focus on systems, communication technology, and disciplined problem solving."
    },
    {
      title: "Extra Mile Award 2023",
      org: "Tricon Infotech",
      icon: "🏅",
      color: "emerald",
      description: "Recognized for going above and beyond in delivery, ownership, and impact while contributing to team success in 2023."
    }
  ]
};