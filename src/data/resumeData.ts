
// Portfolio content

export const profile = {
  name: 'Srilakshmi Seshadri',
  title: 'Computer Science Engineering Student | AI/ML & Software Development',
  email: 'srilakshmiseshadri04@gmail.com',
  phone: '+91 97409 66897',
  location: 'Bengaluru, India',
  linkedin: 'https://www.linkedin.com/in/srilakshmi-seshadri-757515298/',
  github: 'https://github.com/Srilakshmi1110',
  summary:
    'Final-year Computer Science Engineering student with a strong academic foundation in data structures, algorithms, database management, and big data systems. Experienced in applying artificial intelligence, machine learning, computer vision, and explainable AI to interdisciplinary projects, with practical exposure to full-stack development and AI model integration. Interested in pursuing advanced studies in Computer Science to deepen expertise in intelligent systems, software engineering, and the development of reliable, real-world technological solutions.',
  heroStats: [
    { label: 'CGPA', value: '8.96' },
    { label: 'Publication', value: '2026' },
    { label: 'Projects', value: '3' },
    { label: 'CodeVita Rank', value: '7917' },
  ],
}

export const skills = {
  Languages: ['Python', 'Java', 'C++'],

  'ML / AI': [
    'PyTorch',
    'scikit-learn',
    'XGBoost',
    'LightGBM',
    'CatBoost',
    'SHAP',
    'LIME',
    'MediaPipe',
    'ViTPose',
    'MedViT',
    'BioClinicalBERT',
  ],

  'Web & Frameworks': [
    'React',
    'FastAPI',
    'Streamlit',
    'REST API Development',
    'Frontend–Backend Integration',
  ],

  'Data & Tools': [
    'pandas',
    'NumPy',
    'matplotlib',
    'seaborn',
    'Git',
    'GitHub',
    'Google Colab',
    'Jupyter Notebook',
    'Google Vertex AI',
    'joblib',
    'Arduino',
  ],

  Concepts: [
    'Data Structures & Algorithms',
    'Database Management',
    'Big Data Analytics',
    'Supervised Learning',
    'Classification',
    'Regression',
    'Ensemble Learning',
    'Feature Engineering',
    'Model Evaluation',
    'Explainable AI',
    'Computer Vision',
    'Pose Estimation',
    'Natural Language Processing',
    'IoT Sensing',
  ],
}

export type Project = {
  id: string
  flagship?: boolean
  title: string
  period: string
  subtitle?: string
  description: string
  tech: string[]
  metrics: { label: string; value: string }[]
  highlights: string[]
  github?: string
}

export const projects: Project[] = [
  {
    id: 'soilai',
    flagship: true,
    title: 'SoilAI: Explainable IoT Framework for Soil Fertility Prediction',
    period: 'September 2026 – Present',
    subtitle: 'Major Project · 7th Semester',

    description:
      'An explainable IoT-based soil fertility prediction system integrating Arduino sensors for soil pH, moisture, and temperature with GPS-based nitrogen and CEC raster data. LightGBM and CatBoost models generate soil fertility predictions, while SHAP and LIME explain the factors influencing each result. The interactive dashboard features soil analytics, prediction history, crop recommendations, fertilizer and irrigation guidance, and a multilingual Farmer View supporting English, Hindi, and Kannada.',

    tech: [
      'Python',
      'Arduino',
      'IoT Sensors',
      'LightGBM',
      'CatBoost',
      'SHAP',
      'LIME',
      'GPS Raster Data',
    ],

    metrics: [
      { label: 'ML Models', value: '2' },
      { label: 'Farmer View', value: '3 Languages' },
    ],

    highlights: [
      'Developed an IoT-based soil fertility prediction system integrating Arduino sensors for soil pH, moisture, and temperature with GPS-based nitrogen and CEC raster data.',
      'Implemented LightGBM and CatBoost machine learning models, incorporating SHAP and LIME to interpret feature importance and individual soil fertility predictions.',
      'Built an interactive dashboard featuring soil analytics, prediction history, crop recommendations, and a multilingual Farmer View supporting English, Hindi, and Kannada.',
      'Integrated fertilizer and irrigation recommendations to translate model predictions into practical agricultural insights and support informed farming decisions.',
    ],

    github:
      'https://github.com/Srilakshmi1110/explainable-iot-soil-fertility',
  },

  {
    id: 'basketball-pose',
    title: 'Transformer-Based Pose & Performance Analysis of Basketball',
    period: '2025',

    description:
      'A full-stack AI-powered basketball performance analysis application built with React, TypeScript, FastAPI, and PyTorch. The system uses MediaPipe to extract 33 skeletal keypoints and a ViTPose-based workflow to analyze shooting, dribbling, and defensive movements, with performance scoring, corrective feedback, and session tracking.',

    tech: [
      'MediaPipe',
      'ViTPose',
      'React',
      'TypeScript',
      'FastAPI',
      'PyTorch',
      'REST APIs',
    ],

    metrics: [
      { label: 'Skeletal Keypoints', value: '33' },
      { label: 'Performance Score', value: '0–100%' },
    ],

    highlights: [
      'Collaborated on developing a full-stack AI-powered basketball performance analysis application using React, TypeScript, FastAPI, and PyTorch.',
      'Integrated MediaPipe for extracting 33 skeletal keypoints and a ViTPose-based workflow for analyzing shooting, dribbling, and defensive movements.',
      'Connected the React frontend with FastAPI backend services through REST APIs, enabling video processing, AI model inference, and performance visualization.',
      'Contributed to integrating performance scores on a 0–100% scale, joint-level corrective feedback, and session tracking into a unified application.',
    ],

    github: '',
  },

  {
    id: 'healthcare-multimodal',
    title: 'Multimodal AI Healthcare Prototype',
    period: '2025',

    description:
      'A multimodal AI healthcare prototype combining medical image analysis, natural language processing, and computer vision for AI-assisted health assessment. It integrates MedViT for medical image analysis and BioClinicalBERT for clinical and symptom-related text, alongside pose estimation and facial-expression analysis.',

    tech: [
      'MedViT',
      'BioClinicalBERT',
      'Computer Vision',
      'Pose Estimation',
      'Google Vertex AI',
      'Google AI Studio',
      'Kaggle',
    ],

    metrics: [],

    highlights: [
      'Developed a multimodal AI healthcare application combining medical image analysis, natural language processing, and computer vision for AI-assisted health assessment.',
      'Integrated MedViT for medical image analysis and BioClinicalBERT for processing clinical and symptom-related text using transformer-based architectures.',
      'Incorporated pose estimation and facial-expression analysis to explore visual indicators associated with stress and complement image- and text-based analysis.',
      'Combined multimodal AI components using Google Vertex AI and Google AI Studio, utilizing Kaggle datasets for model experimentation and prototyping.',
    ],

    github: '',
  },
]

export const publication = {
  title:
    'A Survey on Explainable IoT Framework for Soil Fertility Prediction using LightGBM and CatBoost',

  venue:
    'International Journal for Research in Applied Science & Engineering Technology (IJRASET)',

  details: 'Vol. 14, Issue IV · April 2026',

  paperId: 'IJRASET81143',
}

export const experience = [
  {
    role: 'AI Intern',
    organization: 'EdiGlobe (Remote)',
    period: 'August 5, 2025 – October 5, 2025',

    highlights: [
      'Gained practical knowledge of AI and machine learning concepts, including supervised learning, classification, regression, data preprocessing, feature engineering, model selection, and evaluation.',
      'Developed a Click-Through Rate Prediction Model using Logistic Regression with time-based feature engineering, achieving 96% accuracy and 0.99 ROC-AUC.',
      'Built a Wind Turbine Power Output Prediction Model using XGBoost and Random Forest, comparing ensemble regression techniques across 33+ features and achieving an R² score of 0.96.',
      'Applied correlation analysis to identify influential predictors, including wind speed and generator RPM, and gained experience in model evaluation, performance comparison, and model persistence using joblib.',
    ],
  },
]

export const volunteering = [
  'Taught Physics to 10th-grade government-school students for a year; currently volunteer with a Career Guidance and Life Skills program, including one-on-one mentoring, for three hours a week.',

  'Across 1.5 years, volunteering has combined classroom teaching, one-on-one mentoring, and community digital-literacy work. Also taught at a government school for 15 days.',

  'Introduced villagers to laptops and basic digital literacy in a village development and income-improvement initiative; ran a digital literacy and cashless payment (Google Pay) campaign.',

  'Participated in tourism promotion at Gol Gumbaz and ISKCON Temple, Bengaluru, and Swachh Bharat cleanliness drives at Chikkabanavara railway station and Hesaraghatta.',
]

export const languages = [
  { name: 'Tamil', level: 'Native' },
  { name: 'English', level: 'Proficient' },
  { name: 'Hindi', level: 'Proficient' },
  { name: 'Kannada', level: 'Conversational' },
]

export const achievements = [
  'AI Training and Course Completion — Ediglobe x Kshitij',
  'The Complete Java Certification Course — Udemy',
  'TCS CodeVita Season 13 — Global Rank 7917',
]

export const education = [
  {
    degree: 'B.E. in Computer Science & Engineering',
    years: '2023 – 2027 (Expected)',
    school:
      'Sapthagiri College of Engineering, Visvesvaraya Technological University (VTU), Bengaluru',
    detail: 'CGPA: 8.96 / 10',
    coursework:
      'Python Language · Data Structures and Algorithms · Operating Systems · Analysis and Design of Algorithms · Database Management Systems · Advanced Java · Big Data Analytics (NoSQL, Hadoop)',
  },

  {
    degree: 'Pre-University Education (2nd PUC)',
    years: '2021 – 2023',
    school: 'Vidya Mandira Pre-University College, Bengaluru',
    detail: '89.66% (PCMC)',
  },

  {
    degree: '10th Standard (ICSE)',
    years: '2020 – 2021',
    school: 'Cluny Convent High School, Bengaluru',
    detail: '86.9%',
  },
]
