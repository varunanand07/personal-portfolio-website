// src/constants/constants.js
import project1 from "../assets/projects/bus.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";
import ryanair from "../assets/projects/ryanair.jpg";
import crossing from "../assets/projects/crossing.jpg";
import awsLogo from "../assets/projects/aws.jpeg"; // Import AWS logo

export const HERO_CONTENT = `I'm a 21-year-old Software Developer based in Dublin, Ireland. I'm interested in a lot of different things from Full Stack Development, to Natural Language Processing, to Cloud Computing.
I'm in the process of finishing my degree in Computer Science from Trinity College Dublin.
I'm currently working with my professor on an Automatic Video Translation Application using Natural Language Processing. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality business solutions. Outside of coding, I enjoy staying active, playing the guitar, exploring new technologies, and contributing to open-source projects. Check out my C.V or connect with me on LinkedIn, I'm always happy to meet new people! `;

export const ABOUT_TEXT = [
  `I bring a straightforward, diligent approach to Software Development, excelling in challenges and unfamiliar situations. I thrive on solving problems and delivering results, even when stepping into unknown territory.`,
  `My experience speaks volumes – I've dedicated time to mastering my craft, learning from top professionals, and exceeding expectations in every role. Whether at Dell Technologies, a Fortune 500 powerhouse, or Liferay International, an agile open-source enterprise solutions provider, I've consistently transformed ideas into robust code, developed full-scale applications, collaborated with professional teams, and delivered practical business solutions. I deeply value teamwork and understand its pivotal role in our field, making it a cornerstone of my work ethic.`,
  `I'm ready to take the lead when the opportunity arises, and I know when to step back and provide support to colleagues and leaders. I excel at communicating effectively with individuals from technical and non-technical backgrounds alike. At the same time, I'm eager to learn from my peers and mentors, viewing mistakes as learning opportunities and suggestions as tools for growth. While teamwork is critical, I also embrace the importance of individual contributions. From developing side projects to acquiring new skills after hours, I'm driven to continuously improve and innovate.`
];


export const EXPERIENCES = [
  {
    year: "Jan 2024 - May 2024",
    role: "Student Software Engineer",
    company: "Liferay International",
    description: [
      `Designed and developed a Student Job Portal using HTML, CSS, SpringMVC, LiferayDXP, React.js and Java aimed at streamlining recruitment with dynamic profile matching and real time notifications.`,
      `Led the Front End Dev Team and developed responsive UI/UX components and integrating features on Liferay DXP using Javascript, CSS, HTML, ReactJS, Java and SpringMVC ensuring seamless user experience and project delivery.`,
      `Mentored a team of five second-year students in best web development practices within a collaborative and Agile
      Framework, fostering a proactive learning environment.`,
    ],
    technologies: ["Java","JavaScript", "HTML", "CSS", "SpringMVC", "LiferayDXP"],
    documentLink: " ",
    githubLink: "",
    videoLink: "https://drive.google.com/file/d/1kXkFFqesiBWmYh6fPd9mEz16T-m-kFM2/view",
  },
  {
    year: "Jan 2023 - May 2023",
    role: "Student Software Engineer",
    company: "Dell Technologies",
    description: [
      `Engineered a Machine Learning Named Entity Recognition (NER) Model tuned to DELL data to recognize important entities within customer support textual logs such as person names, addresses, technical and non-technical issues.`,
      `Leveraged open-source NER models (SpaCy, Flair), advanced NLP techniques including Deep Learning and trained the model on proprietary DELL data to recognize key entities specific to DELL's customer service environment.`,
      `Reduced manual entity identification time by 33%, increasing the efficiency of DELL customer support.`,
      `Analyzed 500+ Software Requirements monthly and collaborated with other engineers within an Agile Development
       Environment to manage project workflow.`,
    ],
    technologies: ["Natural Language Processing", "Python", "spaCy", "AllenNLP", "ChatGPT API"],
    githubLink: "https://github.com/varunanand07/SwEng-Group-1-NER",
    documentLink: "https://docs.google.com/document/d/1IemgEo-UzCdUpSJ_t1SfTkIvv61n217n/edit?usp=sharing&ouid=109506858196002507642&rtpof=true&sd=true",
    showGithub: " ",
    videoLink: "https://drive.google.com/file/d/1DYn9bnmFRYTToZdZnK6X_YST42QN_-hT/view",
  },
];

export const PROJECTS = [
  {
    title: "BurnoutBot (HackIreland 2025)",
    image: project1,
    description: [
      "Built an AI Slack Bot with Node.js, Slack Bolt, Google Calendar, Firebase, and GPT-4 to detect meeting overload and schedule breaks. Reduced conflicts by 30% via real-time burnout alerts and automated scheduling.",
      "Developed RESTful APIs and automated scheduling algorithms, deploying with Google Cloud Functions and Firebase. Improved efficiency by 20% through AI-driven workload management and CI/CD automation."
    ],
    technologies: ["Node.js", "Slack Bolt", "Firebase", "GPT-4", "Google Cloud"],
    githubLink: "https://github.com/varunanand07/BurnoutBot-HackIreland-2025",
  },
  {
    title: "Enigma: A Financial SaaS Platform",
    image: project2,
    description: [
      "Developed a cloud-based financial SaaS platform enabling real-time transaction display and fund transfers across multiple bank accounts.",
      "Implemented RESTful APIs with Node.js and TypeScript, integrating Plaid and Dwolla, ensuring scalability and secure SSR authentication on AWS EC2."
    ],
    technologies: ["Next.js", "React.js", "TypeScript", "AWS EC2"],
    githubLink: "https://github.com/varunanand07/enigma-banking-app",
  },
  {
    title: "Pathfinder Ireland",
    image: project3,
    description: [
      "This app brings together features from several weather forecasting, recreation, and map navigation products. It allows users to search for locations on a map, ask about the weather, and explore various recreational activities all across Ireland, as well as get direction to a location.",
      "The app visualises trails on the map and displays weather forecast at various time milestones calculated dynamically based on trail data."
    ],
    technologies: ["React Native", "Google Maps API", "Weather API", "Node.js"],
    githubLink: "https://github.com/varunanand07/PathFinder-Ireland",
  },
  {
    title: "Dynamic Flight Pricing System for Ryanair",
    image: ryanair,
    description: [
      `In the highly competitive aviation industry, dynamic pricing plays a crucial role in maximizing revenue and optimizing seat occupancy. This project provides real-time insights into flight pricing strategies for Ryanair by leveraging machine learning, data visualization, and responsive web design. The dashboard enables stakeholders to monitor, analyze, and make informed decisions based on predictive pricing models and comprehensive data analytics.`,
      `The Dynamic Flight Pricing Engine is a full-stack application comprising a Flask backend and a React frontend. The system integrates a machine learning model to predict flight prices, a robust database for data storage and retrieval, and an interactive frontend for data visualization and user interaction. The application simulates real-time flight bookings and competitor pricing data to ensure the machine learning model remains accurate and relevant.`,
      `Key Objectives:`,
      `- Real-Time Price Prediction: Develop a machine learning model to predict flight prices based on various features such as origin, destination, departure time, bookings, and competitor prices.`,
      `- Interactive Dashboard: Create a user-friendly frontend that visualizes flight data through charts, tables, and summary cards, allowing users to monitor pricing trends and make data-driven decisions.`,
      `- Data Simulation and Management: Implement scripts to simulate real-time flight bookings and competitor pricing data, ensuring the model is trained on up-to-date and relevant information.`,
      `- Responsive Design: Ensure the dashboard is accessible and visually appealing across various devices and screen sizes.`,
      `- Scalability and Maintainability: Design the system architecture to support future enhancements, scalability, and ease of maintenance.`,
      `Technologies Used: Flask, Flask-CORS, SQLAlchemy, PostgreSQL, Joblib, Scikit-learn, Pandas, React, Material-UI (MUI), Recharts, React Router, Git, Node.js & npm.`
    ],
    technologies: ["Flask", "React","PostgreSQL","Scikit-learn","Pandas","Material-UI","Node.js"],
    githubLink: "https://github.com/varunanand07/dynamic-flight-pricing",
  },
  {
    title: "Pedestrian Crossing Analysis System",
    image: crossing,
    description: [
      `Developed an automated system in C++ using OpenCV to analyze pedestrian crossing images taken from a vehicle's perspective. The system utilized advanced computer vision techniques such as region and edge processing to accurately detect crossings under varying conditions, including lighting changes. Performance evaluation included precision, recall, and analysis of robustness across 20 static test images.`,
      `Key Features:`,
      `- Designed and implemented a pipeline to locate pedestrian crossings effectively.`,
      `- Ensured adaptability to diverse environmental factors such as lighting variability.`,
      `- Conducted comprehensive testing and provided performance metrics for both provided and unseen datasets.`,
      `- Analyzed results, highlighting successes and failures with detailed reasoning and improvement suggestions.`,
      `Challenges & Learning Outcomes:`,
      `- Explored the balance between accuracy and computational efficiency.`,
      `- Gained in-depth experience in applying OpenCV for real-world image processing tasks.`,
      `- Enhanced understanding of parameter tuning and robustness in computer vision applications.`
    ],
    technologies: ["C++", "OpenCV"],
    githubLink: "https://github.com/varunanand07/pedestrian-crossing-analysis-system",
  },
  {
    title: "Bus Notifier App",
    image: project1,
    description:[
      `Developed a Real-Time Notification System for Bus Arrivals, implemented backend logic using Java and Spring Boot, leveraged Docker to run the database.`,
      `Implemented VAPID keys and JWT signing for secure communication, providing testing keys for setup ease. Established integration with National Transport Authority's General Transport Feed Specification (GTFS-R) data, ensuring
      accurate real-time updates.`,
      `Orchestrated Dockerized Postgres for efficient data management, simplifying the deployment process for database-related
      tasks.`],
    technologies: ["Java", "Spring Boot", "Dockerized Postgres", "JWT Authentication"],
    githubLink: "https://github.com/varunanand07/bus-notifier-app",
    documentLink: "https://media.licdn.com/dms/document/media/D4E2DAQFhhMdc8PuJzA/profile-treasury-document-pdf-analyzed/0/1711250400497?e=1729123200&v=beta&t=A9iK_X5ePUKOaB7WREDh404ixjqHLnAF6yVftVuJy-w",
    videoLink: "https://media.heanet.ie/page/4036dd86673244dfa70c490471ce0691",
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:[
      "Developed a responsive Personal Portfolio Website from scratch using HTML, CSS, Javascript, ReactJS and Framer Motion."],
    technologies: ["HTML", "CSS", "React", "Tailwind CSS"],
    githubLink: "https://github.com/varunanand07/personal-portfolio-website",
  },
  {
    title: "Morse Code Game",
    image: project2,
    description:[
      `Developed a Game aimed at teaching Morse Code, implementing two difficulty levels and utilizing Raspberry Pi Pico's RGB LED for feedback.`,
      `Collaborated in an Agile Team, ensuring robust and timely project deliverables that aligned with industry standards.`,
      `Developed comprehensive code components, including C functions, ARM Assembly, and Morse code buffer logic,
      contributing to the successful creation of an engaging educational game.`],
    technologies: ["C", "Arm Assembly"],
    githubLink: "https://github.com/varunanand07/morse-code-game/tree/main/assign02",
  },
];

export const CERTIFICATIONS = [
  {
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services (AWS)",
    date: "December 2024",
    credentialLink: "https://www.credly.com/badges/b491ea4e-7ea9-493b-8bbd-c4b2d3e6a7ef/public_url",
    image: awsLogo,
    description: [
      "Examined foundational knowledge of AWS Cloud, including AWS services, security, architecture, pricing, and support.",
      "Demonstrated 6 months of exposure to AWS Cloud design, implementation, and/or operations.",
      "Successfully passed the AWS Certified Cloud Practitioner exam, validating my understanding of AWS Cloud concepts and services.",
    ],
  },
];

export const CONTACT = {
  address: "Canvas Point Campus, Mayor Street Upper, Dublin 1, Ireland ",
  phoneNo: "+353 894831889",
  email: "vanand@tcd.ie",
};
