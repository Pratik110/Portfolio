import { ResumeData } from "@shared/schema";

export const resumeData: ResumeData = {
  personalInfo: {
    name: "Pratik Patra",
    title: "Data Engineer",
    phone: "+91 9776569069",
    email: "pratikpatra09@gmail.com",
    linkedin: "https://www.linkedin.com/in/pratik-patra/",
    github: "https://github.com/pratik110"
  },
  experience: [
    {
      id: "zs",
      position: "Business Technology Solutions Consultant",
      company: "ZS",
      duration: "10th Nov 2025 – Present",
      startDate: "10th Nov 2025",
      current: true,
      projects: [
        {
          id: "zs-healthcare-fhir",
          title: "FHIR Healthcare Data Platform",
          industry: "Healthcare",
          role: "Senior Data Engineer",
          achievements: [
            "Building a FHIR healthcare data platform to convert enterprise data into FHIR-compliant standards using Medallion architecture (Bronze-Silver-Gold).",
            "Using ADF, Databricks, Kafka, PySpark, Python, and SQL to ingest and process data from SQL Server, flat files, JSON, and Kafka-based streaming sources."
          ]
        }
      ]
    },
    {
      id: "hashedin",
      position: "Software Engineer III",
      company: "HashedIn by Deloitte",
      duration: "10th Jan 2022 – 31st Oct 2025",
      startDate: "10th Jan 2022",
      endDate: "31st Oct 2025",
      current: false,
      projects: [
        {
          id: "capital-markets",
          title: "Capital Markets Modernization",
          industry: "Capital Markets",
          role: "Data Engineer",
          achievements: [
            "Led a 5-engineer squad to modernize Cost Basis statement generation, designed cloud architecture, and delivered production rollout replacing legacy batch jobs.",
            "Built automated Glue/Spark pipelines with cross-account access, SNS/SQS alerts, and error handling, reducing end-to-end manual effort by approximately 600 hours per year.",
            "Engineered Python comparison tools for legacy versus cloud outputs, reducing manual validation by around 90% and accelerating production sign-off.",
            "Proposed and implemented decoupling of Lambda from Glue to optimize job runtimes and reduce pipeline cost.",
            "Delivered 10+ production-grade enhancements in cost basis jobs, including filtration logic, custodian comment handling, and mutual fund validation.",
            "Integrated SonarQube and CI/CD checks into pipeline deployments to enforce code quality and reduce post-deployment defects.",
            "Coordinated with IAM, prod support, tech approvers, and external teams to ensure smooth production deployments under tight timelines."
          ]
        },
        {
          id: "healthcare-migration",
          title: "Healthcare Data Migration",
          industry: "Health Care",
          role: "Data Engineer",
          achievements: [
            "Migrated approximately 300 tables from Hadoop to Snowflake to enhance data accessibility, scalability, and security for research advancements.",
            "Developed ETL pipelines using Python, Spark, and AWS services (Lambda, Glue, Step Functions) for data extraction, transformation, and loading.",
            "Implemented tokenization and encryption functions for PHI/PII data to adhere to client data security policies.",
            "Utilized Python scripts for generating tokenized files and partitioned SQL scripts, reducing manual efforts by 90%.",
            "Collaborated with senior stakeholders to resolve critical data migration blockers, enabling on-time delivery."
          ]
        },
        {
          id: "claims-settlement",
          title: "Claims Settlement Solutions",
          industry: "Health Care",
          role: "Data Engineer",
          achievements: [
            "Created SSIS packages for data extraction, transformation, and loading, reducing processing time by 30%.",
            "Enhanced existing features and incorporated new features for claims settlement solutions.",
            "Developed complex T-SQL queries and stored procedures for efficient data retrieval and manipulation.",
            "Designed and maintained data models for improved organization and accessibility.",
            "Implemented error handling and logging mechanisms to ensure data integrity.",
            "Conducted data quality assessments and cleansing processes to enhance data accuracy."
          ]
        }
      ]
    },
    {
      id: "adp",
      position: "Release (DevOps) Engineer",
      company: "ADP",
      duration: "16th Aug 2021 – 5th Jan 2022",
      startDate: "16th Aug 2021",
      endDate: "5th Jan 2022",
      current: false,
      projects: [
        {
          id: "hcm-solutions",
          title: "HCM Solutions",
          industry: "HCM",
          role: "Software Engineer",
          achievements: [
            "Optimized database rollover process, saving 50% of resources for client training.",
            "Improved reverse proxy for faster routing and loading mapping files.",
            "Managed product owner environments on a daily basis.",
            "Worked on build & release processes and modules for new client onboarding and user management."
          ]
        }
      ]
    },
    {
      id: "infosys",
      position: "Systems Engineer (MSBI Developer)",
      company: "Infosys",
      duration: "30th Dec 2019 – 11th Aug 2021",
      startDate: "30th Dec 2019",
      endDate: "11th Aug 2021",
      current: false,
      projects: [
        {
          id: "energy-solutions",
          title: "Energy Sector Solutions",
          industry: "Energy",
          role: "Software Engineer",
          achievements: [
            "Developed ETL packages in SSIS for legacy data conversion automation.",
            "Prepared SQL queries and stored procedures for Business Intelligence tasks.",
            "Configured and deployed parameterized SSRS & Power BI reports for data visualization.",
            "Identified bottlenecks in SSIS solutions, tuned SQL queries, and provided post-deployment support to clients.",
            "Administered and enhanced Power BI & SSRS reports as per user requests."
          ]
        }
      ]
    }
  ],
  skills: [
    {
      id: "big-data-processing",
      title: "Big Data & Processing",
      icon: "code",
      color: "secondary-500",
      skills: [
        { name: "Spark", icon: "spark" },
        { name: "PySpark", icon: "python" },
        { name: "ETL/ELT Pipelines", icon: "pipeline" },
        { name: "Data Migration", icon: "database" },
        { name: "Data Modeling (Dimensional & Relational)", icon: "project-diagram" }
      ]
    },
    {
      id: "cloud-platforms",
      title: "Cloud & Data Platforms",
      icon: "cloud",
      color: "secondary-500",
      skills: [
        { name: "AWS (Glue, Lambda, Step Functions, S3, Redshift, CloudFormation, IAM, RDS)", icon: "aws" },
        { name: "Snowflake", icon: "snowflake" },
        { name: "Hadoop", icon: "hadoop" }
      ]
    },
    {
      id: "programming-scripting",
      title: "Programming & Scripting",
      icon: "code",
      color: "secondary-500",
      skills: [
        { name: "Python", icon: "python" },
        { name: "SQL Performance Tuning/Optimization", icon: "database" },
        { name: "Shell Scripting", icon: "terminal" }
      ]
    },
    {
      id: "databases",
      title: "Databases",
      icon: "database",
      color: "secondary-500",
      skills: [
        { name: "Oracle", icon: "database" },
        { name: "MS SQL Server", icon: "server" },
        { name: "PostgreSQL", icon: "database" }
      ]
    },
    {
      id: "integration-etl-tools",
      title: "Data Integration & ETL Tools",
      icon: "plug",
      color: "secondary-500",
      skills: [
        { name: "SSIS", icon: "cogs" },
        { name: "AWS Glue", icon: "aws" },
        { name: "REST API Integration", icon: "exchange-alt" }
      ]
    },
    {
      id: "devops-cicd",
      title: "DevOps & CI/CD",
      icon: "tools",
      color: "secondary-500",
      skills: [
        { name: "CloudFormation", icon: "cloud" },
        { name: "Git", icon: "git-alt" },
        { name: "Jenkins", icon: "settings" },
        { name: "SonarQube", icon: "shield" },
        { name: "Docker", icon: "docker" }
      ]
    },
    {
      id: "security-compliance",
      title: "Security & Compliance",
      icon: "shield",
      color: "secondary-500",
      skills: [
        { name: "PHI/PII Tokenization", icon: "shield" },
        { name: "Data Encryption", icon: "lock" },
        { name: "IAM", icon: "user-tie" }
      ]
    },
    {
      id: "tools-others",
      title: "Tools & Others",
      icon: "settings",
      color: "secondary-500",
      skills: [
        { name: "Postman", icon: "exchange-alt" },
        { name: "JIRA", icon: "clipboard-list" },
        { name: "Agile/Scrum", icon: "tasks" },
        { name: "GitHub Actions", icon: "github" }
      ]
    }
  ],
  education: [
    {
      id: "btech",
      degree: "Bachelor of Technology (B.Tech)",
      stream: "Electrical Engineering",
      institution: "IGIT Sarang",
      board: "BPUT, Odisha",
      year: "2019",
      score: "7.65",
      scoreType: "CGPA"
    },
    {
      id: "plus-two",
      degree: "Higher Secondary (+2)",
      stream: "Science (PCM)",
      institution: "U.N(Jr.) College",
      board: "CHSE, Odisha",
      year: "2015",
      score: "71.00",
      scoreType: "%"
    },
    {
      id: "tenth",
      degree: "Secondary School (10th)",
      institution: "G.B. High School",
      board: "BSE, Odisha",
      year: "2013",
      score: "81.17",
      scoreType: "%"
    }
  ]
};
