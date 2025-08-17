// src/data/webDevProjects.js

export const webDevProjects = [
  {
    id: 1,
    title: "QuizzifyMe",
    subtitle: "Interactive quiz platform for real-time battles",
    description: "A fun and competitive quiz platform where users can challenge friends or create their own quizzes with real-time scoring and leaderboards.",
    thumbnail: "/quizzifyme/dashboard.png",
    githubLink: "https://github.com/nishantnarang25/quizzifyme",
    liveLink: "https://quizzifyme-peach.vercel.app/",
    technologies: ["React", "Tailwind CSS", "Google Auth", "Node.js", "Express", "Socket.io", "Supabase"],
    mockups: [
      { url: "/quizzifyme/create quiz room.png", alt: "Quiz creation interface" },
      { url: "/quizzifyme/create-your-own-quiz.png", alt: "Create your own quiz" },
      { url: "/quizzifyme/waiting room.png", alt: "Waiting Room" },
      { url: "/quizzifyme/quiz ended.png", alt: "Quiz Ended" },
    ]
  },
  {
    id: 2,
    title: "Streamline",
    subtitle: "Real-time full-stack chat web application",
    description: "StreamLine is a real-time, full-stack chat web application designed to offer fast, secure, and responsive communication. Built with modern technologies, it ensures seamless messaging, user authentication, and a polished UI experience across devices.",
    thumbnail: "/streamline/dashboard.png",
    githubLink: "https://github.com/Nishantnarang25/streamLine",
    liveLink: "", // Add live link if available
    technologies: [
      "React", "Axios", "Zustand", "Node.js", "Express.js", "MongoDB", "Mongoose",
      "Socket.io", "bcrypt", "jsonwebtoken", "Cloudinary", "dotenv", "CORS", "Cookie-parser"
    ],
    mockups: [
     
    ]
  },
  {
    id: 3,
    title: "LearnSync",
    subtitle: "AI-powered interactive learning platform",
    description: "LearnSync is an AI-powered interactive learning platform that aims to revolutionize education by integrating AI-driven assistance, live sessions, and interactive study tools. Designed for students and teachers, it ensures a collaborative and engaging learning experience.",
    thumbnail: "/learnsync/dashboard.png",
    githubLink: "https://github.com/Nishantnarang25/learnsync",
    liveLink: "", // Add live link if available
    technologies: [
      "React.js", "Tailwind CSS", "Node.js", "Express.js", "PostgreSQL", 
      "Gemini API", "Supabase", "WebRTC", "Socket.io"
    ],
    mockups: [
     
    ]
  }
];
