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
      id: "hashedin",
      position: "Software Engineer III",
      company: "HashedIn by Deloitte",
      duration: "Jan 2022 – Present",
      startDate: "Jan 2022",
      current: true,
      projects: [
        {
          id: "capital-markets",
          title: "Capital Markets Modernization",
          industry: "Capital Markets",
          role: "Software Engineer",
          achievements: [
            "Led a 5-member development team to successfully deliver the modernization of Cost Basis statements, overseeing design, implementation, and seamless production deployment.",
            "Architected and deployed scalable AWS data pipelines using Glue, Lambda, and CloudFormation Templates, ensuring automation, cross-account data flow, and real-time notifications with SNS-SQS.",
            "Transformed legacy systems by reverse-engineering code, drafting comprehensive requirement and low-level design documents, and ensuring end-to-end functional parity in the cloud.",
            "Pioneered the setup of the first ORDS consumer cluster for cost basis, collaborating with DBAAS teams and resolving complex integration issues across RedShift, Aurora, and DB2.",
            "Delivered 10+ production-grade enhancements in cost basis jobs, including custom filtration logic, custodian comment handling, and mutual fund validation—dramatically increasing accuracy and transparency.",
            "Reduced manual effort by up to 90% by building Python-based comparison tools to analyse unpredictable data from legacy vs. cloud systems.",
            "Suggested key architectural changes such as decoupling Lambda from Glue, resulting in significant cost savings and runtime optimization.",
            "Ensured flawless production deployments by coordinating with IAM, Prod Support, Tech Approvers, and external teams, while handling network-level Glue connector issues under pressure.",
            "Integrated strict code quality controls into CI/CD workflows, introduced SonarQube compliance, and established best practices as a benchmark for team coding standards.",
            "Mentored junior developers and new joiners, drove sprint planning with stakeholders, and maintained strong communication with cross-functional teams."
          ]
        },
        {
          id: "healthcare-migration",
          title: "Healthcare Data Migration",
          industry: "Health Care",
          role: "Software Engineer",
          achievements: [
            "Migrated approximately 300 tables from Hadoop to Snowflake to enhance data accessibility, scalability, and security for research advancements.",
            "Developed ETL pipelines using Python, PySpark, and AWS services (Lambda, Glue, Step Functions) for data extraction, transformation, and loading.",
            "Implemented tokenization and encryption functions for PHI/PII data to adhere to client data security policies.",
            "Utilized Python scripts for generating tokenized files and partitioned SQL scripts, reducing manual efforts by 90%.",
            "Coordinated with clients and senior stakeholders to resolve blockers and dependencies."
          ]
        },
        {
          id: "claims-settlement",
          title: "Claims Settlement Solutions",
          industry: "Health Care",
          role: "Software Engineer",
          achievements: [
            "Enhanced existing features and incorporated new features for claims settlement solutions.",
            "Developed complex T-SQL queries and stored procedures for efficient data retrieval and manipulation.",
            "Designed and maintained data models for improved organization and accessibility.",
            "Collaborated with cross-functional teams to deliver data solutions on time and within budget.",
            "Created SSIS packages for data extraction, transformation, and loading, reducing processing time by 30%.",
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
      duration: "Aug 2021 - Jan 2022",
      startDate: "Aug 2021",
      endDate: "Jan 2022",
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
      duration: "Dec 2019 - Aug 2021",
      startDate: "Dec 2019",
      endDate: "Aug 2021",
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
      id: "programming",
      title: "Programming & Development",
      icon: "code",
      color: "primary-500",
      skills: [
        { name: "Python", icon: "python" },
        { name: "SQL", icon: "database" },
        { name: "Data Structures & Algorithms", icon: "project-diagram" }
      ]
    },
    {
      id: "data-management",
      title: "Data Management & ETL",
      icon: "database",
      color: "secondary-500",
      skills: [
        { name: "PySpark", icon: "python" },
        { name: "MS-SQL, Oracle, PostgreSQL", icon: "server" },
        { name: "Snowflake", icon: "snowflake" },
        { name: "SSIS", icon: "cogs" }
      ]
    },
    {
      id: "cloud-platforms",
      title: "Cloud Platforms",
      icon: "cloud",
      color: "accent-orange",
      skills: [
        { name: "AWS (S3, Lambda, Glue, IAM, SNS, Step Functions, EC2, RedShift, DynamoDB, Aurora, RDS, EventBridge)", icon: "aws" },
        { name: "GCP (Basic Experience)", icon: "google" }
      ]
    },
    {
      id: "devops",
      title: "DevOps & Version Control",
      icon: "tools",
      color: "accent-purple",
      skills: [
        { name: "Git", icon: "git-alt" },
        { name: "Bitbucket", icon: "bitbucket" },
        { name: "Docker", icon: "docker" }
      ]
    },
    {
      id: "apis",
      title: "APIs & Libraries",
      icon: "plug",
      color: "primary-500",
      skills: [
        { name: "REST API Testing (Postman)", icon: "exchange-alt" },
        { name: "Pandas", icon: "chart-line" },
        { name: "NumPy", icon: "calculator" }
      ]
    },
    {
      id: "soft-skills",
      title: "Soft Skills",
      icon: "users",
      color: "secondary-500",
      skills: [
        { name: "Sprint Management", icon: "tasks" },
        { name: "Requirement Gathering", icon: "clipboard-list" },
        { name: "Team Leadership", icon: "user-tie" },
        { name: "Stakeholder Management", icon: "handshake" },
        { name: "Conflict Resolution", icon: "balance-scale" },
        { name: "Effective Communication", icon: "comments" }
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
