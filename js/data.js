const PROGRAMS = {
  "digital-learning": {
    id: "digital-learning",
    title: "Digital Learning",
    icon: "💻",
    image: "https://source.unsplash.com/photo-1522202176988-66273c2fd55f/800x500",
    summary: "Access online lessons, videos, e-books, and interactive learning materials anytime and anywhere.",
    description:
      "Our Digital Learning program brings quality education to learners through flexible online platforms. Students can study at their own pace, revisit lessons, and build digital skills needed for modern classrooms and careers.",
    subprograms: [
      {
        name: "Online Classroom Hub",
        description: "Live and recorded sessions covering core subjects with teacher support and progress tracking."
      },
      {
        name: "Interactive E-Library",
        description: "A curated collection of e-books, study guides, and reference materials across grade levels."
      },
      {
        name: "Learning Management Portal",
        description: "Track assignments, quizzes, and module completion in one organized digital dashboard."
      },
      {
        name: "Mobile Learning Access",
        description: "Downloadable lessons and offline-friendly modules for learners with limited internet access."
      },
      {
        name: "Digital Skills Bootcamp",
        description: "Short courses on computer basics, online safety, and productivity tools for beginners."
      }
    ]
  },
  "scholarship-assistance": {
    id: "scholarship-assistance",
    title: "Scholarship Assistance",
    icon: "🎓",
    image: "https://source.unsplash.com/photo-1523050854058-8df90110c9f1/800x500",
    summary: "Discover scholarships, financial aid, and educational grants to support academic goals.",
    description:
      "We help students find and apply for scholarships and financial aid opportunities. Our team guides learners through requirements, deadlines, and application preparation so more students can continue their education.",
    subprograms: [
      {
        name: "Scholarship Finder",
        description: "Search local and national scholarship programs matched to your grade level and field of study."
      },
      {
        name: "Application Coaching",
        description: "Step-by-step guidance for writing essays, gathering documents, and submitting strong applications."
      },
      {
        name: "Financial Aid Counseling",
        description: "One-on-one sessions to explore grants, tuition support, and educational assistance programs."
      },
      {
        name: "Merit Support Program",
        description: "Recognition and referral support for high-performing students seeking academic scholarships."
      }
    ]
  },
  "skills-development": {
    id: "skills-development",
    title: "Skills Development",
    icon: "🛠️",
    image: "https://source.unsplash.com/photo-1524178232363-1fb2b075b655/800x500",
    summary: "Join workshops and training in leadership, communication, programming, and entrepreneurship.",
    description:
      "Skills Development workshops prepare learners for real-world challenges through hands-on training. Participants build confidence, teamwork, and job-ready abilities through practical activities and mentorship.",
    subprograms: [
      {
        name: "Leadership Workshop Series",
        description: "Develop decision-making, teamwork, and project leadership through guided group activities."
      },
      {
        name: "Communication & Public Speaking",
        description: "Improve presentation, writing, and interpersonal communication for school and work settings."
      },
      {
        name: "Intro to Programming",
        description: "Learn HTML, CSS, and Python fundamentals through guided exercises and mini projects."
      },
      {
        name: "Entrepreneurship Starter Lab",
        description: "Explore business ideas, budgeting, and basic marketing for young innovators."
      },
      {
        name: "Career Readiness Skills",
        description: "Build employability skills including time management, collaboration, and professional etiquette."
      }
    ]
  },
  "community-outreach": {
    id: "community-outreach",
    title: "Community Outreach",
    icon: "🤝",
    image: "https://source.unsplash.com/photo-1559027617-0218122d9039/800x500",
    summary: "Participate in literacy campaigns, tutoring, and donation drives for underserved communities.",
    description:
      "Community Outreach connects volunteers, educators, and learners to bring education where it is needed most. Programs focus on literacy, tutoring, and resource sharing to support underserved areas.",
    subprograms: [
      {
        name: "Literacy Campaign",
        description: "Reading and writing activities designed to improve foundational literacy in local communities."
      },
      {
        name: "Peer Tutoring Network",
        description: "Volunteer tutors provide free academic support for students in mathematics, science, and language."
      },
      {
        name: "Book Donation Drive",
        description: "Collect and distribute textbooks, storybooks, and learning kits to schools and community centers."
      },
      {
        name: "Community Learning Events",
        description: "Weekend workshops and family learning sessions that promote education awareness and participation."
      }
    ]
  },
  "career-development": {
    id: "career-development",
    title: "Career Development",
    icon: "💼",
    image: "https://source.unsplash.com/photo-1521737711862-e3b97375f902/800x500",
    summary: "Receive counseling, resume support, interview preparation, and professional guidance.",
    description:
      "Career Development helps learners plan their future with practical guidance on career paths, job applications, and professional growth. Students and graduates receive tools to transition from education to employment.",
    subprograms: [
      {
        name: "Career Counseling Sessions",
        description: "Explore career interests, strengths, and education pathways with trained guidance counselors."
      },
      {
        name: "Resume & Portfolio Building",
        description: "Create professional resumes, cover letters, and digital portfolios tailored to your goals."
      },
      {
        name: "Interview Preparation Clinic",
        description: "Practice common interview questions, communication skills, and professional confidence."
      },
      {
        name: "Internship & Job Referral Support",
        description: "Connect with partner organizations offering internships, apprenticeships, and entry-level roles."
      },
      {
        name: "Professional Development Seminars",
        description: "Learn workplace ethics, digital professionalism, and lifelong career planning strategies."
      }
    ]
  }
};

const LEARNING_CATEGORIES = {
  "ebooks": {
    id: "ebooks",
    title: "E-Books",
    icon: "📖",
    image: "https://source.unsplash.com/photo-1512820790801-41587c1d1b0e/800x500",
    summary: "Digital books covering core academic subjects and practical life skills.",
    description:
      "Browse our e-book collection designed for self-paced learning. Each title includes clear explanations, examples, and review sections to help learners master key concepts.",
    materials: [
      { name: "Mathematics Fundamentals", description: "Covers arithmetic, algebra basics, geometry, and problem-solving strategies for junior learners." },
      { name: "English Grammar and Writing", description: "Guides students through sentence structure, essay writing, and effective communication." },
      { name: "Science Concepts", description: "Introduces biology, chemistry, and physics topics with diagrams and real-world examples." },
      { name: "Philippine History", description: "Explores key events, national heroes, and cultural heritage across Philippine history." },
      { name: "Computer Fundamentals", description: "Teaches hardware basics, operating systems, and essential computer literacy skills." },
      { name: "Financial Literacy", description: "Helps learners understand budgeting, saving, and responsible money management." }
    ]
  },
  "video-lessons": {
    id: "video-lessons",
    title: "Video Lessons",
    icon: "🎥",
    image: "https://source.unsplash.com/photo-1596526131083-e8c697c266d0/800x500",
    summary: "Watch guided tutorials and demonstrations across academic and technical subjects.",
    description:
      "Video lessons make complex topics easier to understand through visual demonstrations, step-by-step explanations, and instructor-led examples you can replay anytime.",
    materials: [
      { name: "Mathematics Tutorials", description: "Step-by-step solutions for algebra, geometry, and word problems." },
      { name: "English Communication Skills", description: "Improve speaking, listening, and presentation skills through guided practice." },
      { name: "Basic Science Experiments", description: "Safe and simple experiments that demonstrate scientific principles at home or school." },
      { name: "Programming Basics (HTML, CSS, Java, Python)", description: "Beginner-friendly coding lessons with hands-on exercises and mini projects." },
      { name: "Study Techniques and Time Management", description: "Learn effective note-taking, scheduling, and exam preparation strategies." }
    ]
  },
  "practice-exercises": {
    id: "practice-exercises",
    title: "Practice Exercises",
    icon: "📝",
    image: "https://source.unsplash.com/photo-1434030216411-0b793f4b4173/800x500",
    summary: "Interactive activities to test knowledge and strengthen learning through repetition.",
    description:
      "Practice exercises help learners apply what they have studied. Use quizzes, worksheets, and challenges to identify strengths and areas for improvement.",
    materials: [
      { name: "Interactive Quizzes", description: "Instant-feedback quizzes covering math, science, English, and ICT topics." },
      { name: "Worksheets", description: "Printable and digital worksheets for daily review and classroom reinforcement." },
      { name: "Mock Examinations", description: "Simulated tests that prepare students for major exams and assessments." },
      { name: "Reading Comprehension Activities", description: "Passages and questions that build analysis and critical reading skills." },
      { name: "Coding Challenges", description: "Small programming tasks that reinforce logic, syntax, and problem-solving." }
    ]
  },
  "digital-resources": {
    id: "digital-resources",
    title: "Digital Learning Resources",
    icon: "💻",
    image: "https://source.unsplash.com/photo-1498050108023-c5249f4df085/800x500",
    summary: "Online modules, slides, infographics, and interactive tools for modern learners.",
    description:
      "Digital resources support blended and remote learning with downloadable content, visual aids, and interactive activities suitable for classrooms and independent study.",
    materials: [
      { name: "Online Class Modules", description: "Structured lesson units with objectives, readings, and assessments." },
      { name: "Presentation Slides", description: "Teacher and student slide decks for lectures, reports, and group discussions." },
      { name: "Educational Infographics", description: "Visual summaries that simplify complex topics into easy-to-understand graphics." },
      { name: "Downloadable PDF Notes", description: "Compact study notes for quick review before quizzes and exams." },
      { name: "Interactive Learning Activities", description: "Drag-and-drop, matching, and scenario-based activities for active learning." }
    ]
  },
  "recommended-subjects": {
    id: "recommended-subjects",
    title: "Recommended Subjects",
    icon: "📚",
    image: "https://source.unsplash.com/photo-1580582932707-520aedae0972/800x500",
    summary: "Core subject areas aligned with quality education and national learning standards.",
    description:
      "These recommended subjects form a balanced academic foundation. Each area includes resources for different grade levels and learning goals.",
    materials: [
      { name: "Mathematics", description: "Number sense, algebra, geometry, statistics, and applied problem solving." },
      { name: "Science", description: "Scientific inquiry, experiments, and understanding the natural world." },
      { name: "English", description: "Reading, writing, grammar, and communication for academic and professional success." },
      { name: "Filipino", description: "Language mastery, literature appreciation, and cultural identity through Filipino studies." },
      { name: "Social Studies", description: "History, civics, geography, and responsible citizenship." },
      { name: "Information and Communications Technology (ICT)", description: "Digital tools, coding basics, and responsible technology use." }
    ]
  },
  "learning-objectives": {
    id: "learning-objectives",
    title: "Learning Objectives",
    icon: "🎯",
    image: "https://source.unsplash.com/photo-1454165804604-c3d57bc86b40/800x500",
    summary: "Goals learners should achieve after using DEV4ED materials and programs.",
    description:
      "Our learning objectives guide curriculum design and help learners track progress. Each objective supports academic growth, digital readiness, and lifelong learning.",
    materials: [
      { name: "Improve Academic Performance", description: "Strengthen subject mastery and achieve better results in school assessments." },
      { name: "Critical Thinking & Problem Solving", description: "Analyze information, evaluate options, and solve real-world problems creatively." },
      { name: "Digital Literacy & Technology Skills", description: "Use digital tools safely, effectively, and responsibly in learning and work." },
      { name: "Communication & Collaboration", description: "Express ideas clearly and work productively with peers, teachers, and communities." },
      { name: "Higher Education & Career Preparation", description: "Build skills and confidence for college, vocational paths, and future careers." }
    ]
  },
  "featured-resources": {
    id: "featured-resources",
    title: "Featured Resources",
    icon: "🌟",
    image: "https://source.unsplash.com/photo-1481627834876-b7833e8f5570/800x500",
    summary: "Highlighted guides and modules selected for their impact on learner success.",
    description:
      "Featured resources are popular starting points for new learners. Each guide is practical, accessible, and designed to deliver immediate value.",
    materials: [
      { name: "Beginner's Guide to Computer Programming", description: "A friendly introduction to coding concepts, tools, and first projects." },
      { name: "Introduction to Digital Literacy", description: "Essential skills for navigating the internet, email, and online learning platforms." },
      { name: "Effective Study Habits", description: "Proven techniques for focus, memory, and consistent academic improvement." },
      { name: "Critical Thinking Activities", description: "Puzzles, scenarios, and discussions that sharpen reasoning and analysis." },
      { name: "Career Readiness Guide", description: "Plan your path from school to work with actionable career preparation steps." },
      { name: "Basic Financial Literacy", description: "Learn budgeting, saving, and smart financial decisions for young adults." }
    ]
  },
  "download-center": {
    id: "download-center",
    title: "Download Center",
    icon: "📥",
    image: "https://source.unsplash.com/photo-1544385165-402f55628513/800x500",
    summary: "Free downloadable modules, worksheets, tests, and study guides.",
    description:
      "The Download Center provides printable and offline-friendly resources for teachers, students, and parents. All materials support independent study and classroom instruction.",
    materials: [
      { name: "PDF Learning Modules", description: "Complete lesson packs with explanations, examples, and review questions." },
      { name: "Worksheets", description: "Practice sheets for daily homework and classroom activities." },
      { name: "Review Notes", description: "Condensed summaries for quick revision before exams." },
      { name: "Practice Tests", description: "Sample tests with answer keys for self-assessment and exam preparation." },
      { name: "Activity Sheets", description: "Creative and interactive tasks for younger learners and group work." },
      { name: "Study Guides", description: "Structured guides that outline what to study and how to prepare effectively." }
    ]
  }
};
