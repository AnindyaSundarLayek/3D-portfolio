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
    document,
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
      title: "Machine Learning Intern",
      company_name: "PiTANGENT",
      icon: pitangent,
      iconBg: "#383E56",
      date: "July 2024 - Oct 2024",
      points: [
        "Developing a ChatGPT-type AI by fine-tuning large language models and implementing ML algorithms.",
        "Collaborating with data scientists/analysts and engineers to improve model accuracy and efficiency",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in research and development to enhance the capabilities of conversational AI systems.",
      ],
    },
    {
      title: "Group Leader - Crop Yield Prediction",
      company_name: "Research Paper",
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
      Projects: "Netflix, CSBS EduApp...",
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
      date: "Aug 2024 - Dec 2024",
      points: [
        "Creating an intuitive and user-friendly interface using React.js and Bootstrap, ensuring responsive design and seamless user experience across devices.",
        "Incorporated essential educational resources, such as digital notes, practice quizzes, and study schedules tailored specifically for CSBS students.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Worked closely with a team member, splitting tasks effectively and conducting regular code reviews to ensure quality and consistency in the project.",
      ],
    },
    {
      title: "Multimodal Emotion & Impression Analysis",
      Team: "Team Leader",
      icon: TINT,
      iconBg: "#383E56",
      date: "Jan 2024 - Present",
      points: [
        "The project combines text, audio, and video to deliver detailed emotion insights and cumulative impression scores for diverse applications.",
        "Models like Whisper, Wav2Vec 2.0, Xception fer2013 and DistilRoBERTa enable accurate, multimodal emotion recognition.",
        "Modular architecture supports real-time use, multilingual support, and bias mitigation for broader adoption.",
        "Modular architecture supports real-time use, multilingual support, and bias mitigation for broader adoption.",
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
        "My time at this School shaped my academic foundation and instilled in me a passion for learning. Completing my Madhyamik exam with a 91.14% was a testament to the excellent education and guidance I received.",
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
        "Currently pursuing my degree with Maintaining a CGPA of 8.4, demonstrating a strong academic performance. Focusing on the integration of computer science principles with business acumen to develop well-rounded technical and managerial skills.",
      ],
    },
  ];
  
  
  
  const projects = [
    {
      name: "3D Portfolio",
      description:
        "A visually engaging online showcase that effectively presents a 3D artist's creative work, including models, animations, and environments, highlighting skills and expertise in 3D design and production.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "three",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: document,
      source_code_link: "https://github.com/AnindyaSundarLayek/3D-portfolio",
    },
    {
      name: "LLM Fine-Tuning",
      description:
        "A project focused on fine-tuning large language models (LLMs) for specific tasks. Includes tools, scripts, and tutorials for efficient model customization, optimization, and deployment.",
      tags: [
        {
          name: "Transformers",
          color: "blue-text-gradient",
        },
        {
          name: "Pipeline",
          color: "green-text-gradient",
        },
        {
          name: "Python",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/AnindyaSundarLayek/LLM-Fine-tuning",
    },
    {
      name: "CSBS EduApp",
      description:
        "Learnn : An open-source, user-friendly app for CSBS students, offering course curriculum, subject notes, and curated resources. Designed with an intuitive interface for seamless navigation, enhancing access to educational materials efficiently. #EdTech #OpenSource",
      tags: [
        {
          name: "MongoDB",
          color: "blue-text-gradient",
        },
        {
          name: "React",
          color: "green-text-gradient",
        },
        {
          name: "Express JS",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/AnindyaSundarLayek/CSBS-EduApp",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };