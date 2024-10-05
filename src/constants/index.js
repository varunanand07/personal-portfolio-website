import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I'm a 21-year-old Software Developer based in Dublin, Ireland. I'm interested in a lot of different things from Full Stack Development, to Natural Language Processing, to Cloud Computing.
I'm currently in the process of finishing my degree in Computer Science from Trinity College Dublin.
I'm currently working with my professor on an Automatic Video Translation Application using Natural Language Processing. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality business solutions. Outside of coding, I enjoy staying active, playing the guist, exploring new technologies, and contributing to open-source projects. Check out my C.V or connect with me on LinkedIn, I'm always happy to meet new people! `;

export const ABOUT_TEXT = `With me, you get a straight-forward, hardworking individual who thrives in the world of Software
Development. I love rising to the occasion, and often do my best work in situations alien to me. My resume
speaks for itself – I’ve put in the hours, learnt from the best, and left every boss I’ve had thrilled with my
contributions. I adapt to new environments rapidly – whether it’s in Dell Technologies, a company ranked
31st on the list of Fortune 500 companies or if it is Liferay International, a relatively smaller, open source
company that provides enterprise solutions, I have a proven track record of translating ideas to code, building
full scale applications, working with professional teams, and producing workable business solutions. Beyond my individual skills, I understand that our field is built on team work, something I pride myself on. I
am ready to take the lead if given a shot, and I know when take a backseat and provide support to my
colleagues and superiors. I am an effective communicator with all those I come across – technical
background or not. At the same time, I am constantly looking to learn from my fellow software engineers
and supervisors; every mistake is a new chance to do it right, and every suggestion a new tool in my arsenal.
Team work aside, I recognise the need for individual contributions. From building side projects to working
after hours to learn new skills, this is not something I am unfamiliar with. `
export const EXPERIENCES = [
  {
    year: "Jan 2024 - May 2024",
    role: "Software Engineering Project",
    company: "Liferay International",
    description: [
      'Developed responsive web applications',
      'Collaborated with designers and backend developers',
      'Implemented user interfaces with React'
    ],
    technologies: ["Javascript", "HTML", "CSS", "SpringMVC", "LiferayDXP"],
    documentLink: " ",
    githubLink: "",
  },
  {
    year: "Jan 2023 - May 2023",
    role: "Software Engineering Project",
    company: "Dell Technologies",
    description: [
      'Developed responsive web applications',
      'Collaborated with designers and backend developers',
      'Implemented user interfaces with React'
    ],
    technologies: ["Natural Language Processing", "Python", "spaCy", "AllenNLP", "ChatGPT API"],
    githubLink: "https://github.com/varunanand07/SwEng-Group-1-NER",
    documentLink: "https://docs.google.com/document/d/1IemgEo-UzCdUpSJ_t1SfTkIvv61n217n/edit?usp=sharing&ouid=109506858196002507642&rtpof=true&sd=true",
    showGithub: " ",
  },
];

export const PROJECTS = [
  {
    title: "Bus Notifier App",
    image: project1,
    description:
      `Developed a Real-Time Notification System for Bus Arrivals, implemented backend logic using Java and Spring Boot, leveraged Docker to run the database. Implemented VAPID keys and JWT signing for secure communication, providing testing keys for setup ease. Established integration with National Transport Authority’s General Transport Feed Specification (GTFS-R) data, ensuring
      accurate real-time updates. Orchestrated Dockerized Postgres for efficient data management, simplifying the deployment process for database-related
      tasks.`,
    technologies: ["Java", "Spring Boot", "Dockerized Postgres", "JWT Authentication"],
    githubLink: "https://github.com/varunanand07/bus-notifier-app",
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Tailwind CSS"],
    githubLink: "https://github.com/varunanand07/personal-portfolio-website",
  },
  {
    title: "Morse Code Game",
    image: project2,
    description:
      `Developed a Game aimed at teaching Morse Code, implementing two difficulty levels and utilizing Raspberry Pi Pico's RGB LED for feedback. Collaborated in an Agile Team, ensuring robust and timely project deliverables that aligned with industry standards. Developed comprehensive code components, including C functions, ARM Assembly, and Morse code buffer logic,
      contributing to the successful creation of an engaging educational game.`,
    technologies: ["C", "Arm Assembly"],
    githubLink: "https://github.com/varunanand07/morse-code-game/tree/main/assign02",
  },
];

export const CONTACT = {
  address: "Host Point Campus, Mayor Street Upper, Dublin 1, Ireland ",
  phoneNo: "+353 894831889",
  email: "vanand@tcd.ie",
};
