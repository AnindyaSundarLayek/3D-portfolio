import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    html,
    css,
    reactjs,
    aiml,
    python,
    mysql,
    cc,
    c,
    csbs,
    pitangent,
    Ramakrishna,
    dhadka,
    TINT,
    group,
    frontend,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },    
  ];
  
  const services = [
    {
      title: "Business Systems",
      icon: web,
    },
    {
      title: "AI/ML Developer",
      icon: mobile,
    },
    {
      title: "Frontend Developer",
      icon: backend,
    },
    {
      title: "Entrepreneurial and Business Mindset",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "AI/ML",
      icon: aiml,
    },
    {
      name: "Python",
      icon: python,
    },
    {
      name: "MySQL",
      icon: mysql,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "C",
      icon: cc,
    },
    {
      name: "C++",
      icon: c,
    },

  ];
  
  const experiences = [
    {
      title: "AI/ML Developer Intern",
      company_name: "Pitangent",
      icon: pitangent,
      iconBg: "#383E56",
      date: "July 2024 - Present",
      points: [
        "Developing a ChatGPT-type AI by fine-tuning large language models and implementing ML algorithms.",
        "Collaborating with data scientists/analysts and engineers to improve model accuracy and efficiency",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in research and development to enhance the capabilities of conversational AI systems.",
      ],
    },
    {
      title: "Group Leader - Crop Yield Prediction",
      Description: "Research Paper",
      Languages: "Python, NumPy, Pandas (DataFrame), XAI (SHAP, LIME)",
      icon: group,
      iconBg: "#E6DEDD",
      date: "May 2024 - Sep 2024",
      points: [
        "Spearheading the development and implementation of the ML model.",
        "Coordinating with team members to ensure the project's smooth progress.",
        "Overseeing data preprocessing and feature selection for optimal model performance.",
        "Ensuring the explainability and transparency of the model using SHAP and LIME.",
      ],
    },
    {
      title: "Frontend Developer",
      Projects: "Clone Apps, Newspaper App",
      icon: frontend,
      iconBg: "#383E56",
      date: "Jan 2023 - Ongoing",
      points: [
        "Developed and maintained web applications using HTML, CSS, and JavaScript frameworks like React.js.",
        "Created clone apps for popular platforms such as Twitter, Netflix, and Spotify, focusing on replicating their user interfaces and functionalities.",
        "Use AI like Chatgpt , Gemini to give it a modern touch.",
        "Continuously improved the performance and accessibility of web applications through testing and optimization.",
      ],
    },
    {
      title: "CSBS EduApp",
      Team: "Collaborative project with a peer",
      icon: csbs,
      iconBg: "#E6DEDD",
      date: "Aug 2024 - Present",
      points: [
        "Creating an intuitive and user-friendly interface using React.js and Bootstrap, ensuring responsive design and seamless user experience across devices.",
        "Incorporated essential educational resources, such as digital notes, practice quizzes, and study schedules tailored specifically for CSBS students.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Worked closely with a team member, splitting tasks effectively and conducting regular code reviews to ensure quality and consistency in the project.",
      ],
    },
  ];

  const testimonials = [
    {
      title: "School Education",
      name: "Asansol Ramakrishna Mission High School",
      icon: Ramakrishna,
      iconBg: "#383E56",
      date: "2009 - 2019",
      points: [
        "My time at this School shaped my academic foundation and instilled in me a passion for learning. Completing my Madhyamik exam with a 91.1% was a testament to the excellent education and guidance I received.",
      ],
    },
    {
      title: "Higher Secondary Education",
      name: "Dhadka N C Lahiri VidyaMandir",
      icon: dhadka,
      iconBg: "#383E56",
      date: "2019 - 2021",
      points: [
        "Graduated with a strong academic record, achieving a 90.2% in the Higher Secondary Exam and securing the 9th position in the district, which reflects my commitment to academic excellence and dedication to my studies.",
      ],
    },
    {
      title: "B.Tech in Computer Science and Business Systems (CSBS)",
      name: "Techno International New Town",
      icon: TINT,
      iconBg: "#383E56",
      date: "Sep 2021 - Jul 2025",
      points: [
        "Currently pursuing my degree with Maintaining a CGPA of 8.32, demonstrating a strong academic performance. Focusing on the integration of computer science principles with business acumen to develop well-rounded technical and managerial skills.",
      ],
    },
  ];
  
  
  
  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };