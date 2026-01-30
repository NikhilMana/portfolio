// Static data for Vercel deployment (no backend needed)

export interface Skill {
    id: number;
    name: string;
    category: string;
    proficiency: number;
}

export interface Experience {
    id: number;
    title: string;
    company: string;
    period: string;
    description: string;
}

export interface Education {
    id: number;
    degree: string;
    school: string;
    year: string;
}

export interface Project {
    id: number;
    title: string;
    description: string;
    techStack: string[];
    link: string | null;
    imageUrl: string;
}

// Skills data
export const skills: Skill[] = [
    // Languages
    { id: 1, name: "Python", category: "Languages", proficiency: 95 },
    { id: 2, name: "Java", category: "Languages", proficiency: 85 },
    { id: 3, name: "C", category: "Languages", proficiency: 80 },
    { id: 4, name: "JavaScript", category: "Languages", proficiency: 88 },

    // ML/AI
    { id: 5, name: "TensorFlow", category: "ML/AI", proficiency: 90 },
    { id: 6, name: "OpenCV", category: "ML/AI", proficiency: 88 },
    { id: 7, name: "Machine Learning", category: "ML/AI", proficiency: 92 },
    { id: 8, name: "Deep Learning", category: "ML/AI", proficiency: 90 },
    { id: 9, name: "Computer Vision", category: "ML/AI", proficiency: 88 },

    // Tools
    { id: 10, name: "Git/GitHub", category: "Tools", proficiency: 90 },
    { id: 11, name: "Jupyter", category: "Tools", proficiency: 85 },
    { id: 12, name: "VS Code", category: "Tools", proficiency: 95 },
    { id: 13, name: "Docker", category: "Tools", proficiency: 75 },
    { id: 14, name: "Linux", category: "Tools", proficiency: 80 },

    // Core
    { id: 15, name: "Data Structures & Algorithms", category: "Core", proficiency: 88 },
    { id: 16, name: "OOP", category: "Core", proficiency: 90 },
    { id: 17, name: "Database Management", category: "Core", proficiency: 85 },
    { id: 18, name: "Agile Development", category: "Core", proficiency: 82 },
];

// Experience data
export const experience: Experience[] = [
    {
        id: 1,
        title: "Mobile App Development Intern",
        company: "RunShaw Technologies Pvt. Ltd.",
        period: "Jul–Aug 2024",
        description: "Developed PDF Merger Android app using Kotlin and Android SDK. Implemented secure file access, background processing, and multi-version support. Tech: Kotlin, Android SDK, Flutter, Git"
    }
];

// Education data
export const education: Education[] = [
    {
        id: 1,
        degree: "B.E. Computer Science (AI & ML)",
        school: "Maharaja Institute of Technology, Mysore",
        year: "Expected 2027 | CGPA: 8.0+"
    }
];

// Projects data
export const projects: Project[] = [
    {
        id: 1,
        title: "Sign Health - Healthcare Communication System",
        description: "🥇 TiE u Pitchfest 2025 Winner. ML-powered real-time sign language interpretation system for healthcare settings. Trained CNN models achieving 85%+ accuracy in gesture recognition, enabling seamless communication between healthcare providers and hearing-impaired patients.",
        techStack: ["Python", "TensorFlow", "OpenCV", "Computer Vision", "Deep Learning", "CNN"],
        imageUrl: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80",
        link: null
    },
    {
        id: 2,
        title: "E-commerce Shopping Agent with AI Assistant",
        description: "Full-stack e-commerce platform with AI-powered shopping assistance. Features secure authentication, role-based access control, real-time order tracking, advanced product filtering, voice search, and comprehensive analytics. Built with FastAPI backend and vanilla JavaScript frontend.",
        techStack: ["Python", "FastAPI", "JavaScript", "SQLite", "Google ADK", "AI Agent"],
        imageUrl: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80",
        link: null
    },
    {
        id: 3,
        title: "Real-Time Face Detection & Recognition",
        description: "Advanced computer vision system implementing real-time face detection and recognition. Features live webcam processing with OpenCV, deep learning-based face encoding using face_recognition library, and an interactive GUI for adding and recognizing faces.",
        techStack: ["Python", "OpenCV", "Deep Learning", "Computer Vision", "NumPy", "Tkinter"],
        imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80",
        link: null
    },
    {
        id: 4,
        title: "Car Detection & Counting System",
        description: "Computer vision system for real-time vehicle detection and counting using background subtraction and contour detection. Processes video feeds to accurately count cars and generates visual reports with counted vehicle data.",
        techStack: ["Python", "OpenCV", "Computer Vision", "Background Subtraction", "NumPy"],
        imageUrl: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&q=80",
        link: null
    },
    {
        id: 5,
        title: "PDF Merger Android App",
        description: "Android application for merging multiple PDF files into a single document. Implements Android Storage Access Framework for secure file handling, background processing for large files, and maintains compatibility across Android versions.",
        techStack: ["Kotlin", "Android SDK", "PDF Processing", "Material Design", "MVVM"],
        imageUrl: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80",
        link: null
    }
];
