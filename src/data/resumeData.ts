// All content here is sourced strictly from Srilakshmi's resume.
// Edit this file to update the site — every component reads from here.

export const profile = {
  name: 'Srilakshmi Seshadri',
  title: 'Computer Science Student | AI/ML & Software Development',
  email: 'srilakshmiseshadri04@gmail.com',
  phone: '+91 97409 66897',
  location: 'Bengaluru, India',
  // Replace these with your real profile URLs.
  linkedin: 'https://www.linkedin.com/in/srilakshmi-seshadri-757515298/',
  github: 'https://github.com/Srilakshmi1110',
  summary:
    'Final year CS Engineering student (CGPA 8.965) with hands-on experience in Machine Learning, Computer Vision, and full-stack AI deployment. Built production-ready ML systems achieving R²=0.96 and 95%+ accuracy. Developed a Transformer-based sports analytics system using MediaPipe, PyTorch, and FastAPI. TCS CodeVita Global Rank 7917.',
  heroStats: [
    { label: 'CGPA', value: '8.965' },
    { label: 'Best R²', value: '0.96' },
    { label: 'Peak Accuracy', value: '95%+' },
    { label: 'CodeVita Rank', value: '7917' },
  ],
}

export const skills = {
  Languages: ['Python', 'Java', 'C++'],
  'ML / AI': [
    'PyTorch',
    'scikit-learn',
    'XGBoost',
    'MediaPipe',
    'joblib',
    'StandardScaler',
    'Transformers (ViTPose)',
  ],
  'Web & Frameworks': ['FastAPI', 'React', 'TypeScript', 'Streamlit'],
  Data: ['pandas', 'NumPy', 'matplotlib', 'seaborn'],
  Tools: ['Git', 'GitHub', 'Google Colab', 'Jupyter Notebook'],
  Concepts: [
    'ML pipelines',
    'Computer Vision',
    'Pose Estimation',
    'EDA',
    'Feature Engineering',
    'Real-time Inference',
  ],
}

export type Project = {
  id: string
  flagship?: boolean
  title: string
  description: string
  tech: string[]
  metrics: { label: string; value: string }[]
  highlights: string[]
  // Add your repository URL here to show a GitHub button on this card.
  github?: string
}

export const projects: Project[] = [
  {
    id: 'basketball-pose',
    title: 'Transformer-Based Pose & Performance Analysis of Basketball Using AI',
    description:
      'An AI sports analytics system that extracts 33 skeletal keypoints from video using MediaPipe, then analyzes the relationships between joints with a ViTPose Transformer model to classify shooting form, dribbling, and defensive stance. On top of that classification sits a 0–100% performance scoring engine that gives joint-level corrective feedback and tracks movement consistency over time, all served through a full-stack React + TypeScript and FastAPI + PyTorch system built around REST APIs for video processing and pose retrieval.',
    tech: ['MediaPipe', 'ViTPose (Transformers)', 'React', 'TypeScript', 'FastAPI', 'PyTorch', 'REST APIs'],
    metrics: [
      { label: 'Skeletal Keypoints', value: '33' },
      { label: 'Performance Score', value: '0–100%' },
    ],
    highlights: [
      'Developed a 0–100% performance scoring engine with joint-level corrective feedback and temporal analysis for movement consistency across video frames.',
      'Architected a full-stack system with a React + TypeScript frontend and FastAPI + PyTorch backend, exposing REST API endpoints for image uploads, video processing, and pose retrieval.',
      'Implemented a session tracking module enabling players to monitor performance progression over time.',
    ],
    github: '',
  },
  {
    id: 'healthcare-prediction',
    title: 'Healthcare Prediction Web Application',
    description:
      'An AI-powered healthcare diagnostic tool built with Streamlit and Python, designed to cut down the manual work of getting patient data into a usable form. On simulated patient datasets, it reduced manual data entry time by 40% and, through scalable backend modules for data processing and real-time inference, cut system latency by 20% — an end-to-end build spanning ML model integration, web-app development, and deployment.',
    tech: ['Streamlit', 'Python'],
    metrics: [
      { label: 'Manual Entry Time', value: '−40%' },
      { label: 'System Latency', value: '−20%' },
    ],
    highlights: [
      'Designed scalable backend modules for data processing and real-time inference, reducing system latency by 20%.',
      'Delivered an end-to-end solution covering ML model integration, web-app development, and AI deployment.',
    ],
    github: '',
  },
  {
    id: 'wind-turbine',
    title: 'Wind Turbine Power Output Prediction',
    description:
      'A regression pipeline built on 33+ environmental and operational variables, using XGBoost and Random Forest to predict wind turbine power output with R²=0.96, MAE=0.012 kW, and RMSE=0.018 kW. Feature engineering and EDA — including a correlation heatmap and feature-importance analysis — identified wind speed and generator RPM as the dominant predictors, and the final pipeline was packaged with joblib for real-time inference, built to integrate with live wind farm monitoring.',
    tech: ['XGBoost', 'Random Forest', 'joblib'],
    metrics: [
      { label: 'R²', value: '0.96' },
      { label: 'MAE', value: '0.012 kW' },
      { label: 'RMSE', value: '0.018 kW' },
    ],
    highlights: [
      'Performed feature engineering and EDA (correlation heatmap, feature importance) to identify wind speed and generator RPM as dominant predictors.',
      'Built a real-time inference pipeline using joblib for model persistence and deployment, integrable with live wind farm monitoring systems.',
    ],
    github: '',
  },
  {
    id: 'ctr-prediction',
    title: 'CTR Prediction Using Logistic Regression',
    description:
      'A logistic regression classifier trained on user behavioral data to predict ad-click probability, reaching 96% accuracy and an AUC of 0.99. Timestamp features (Hour, DayOfWeek) were engineered and normalized with MinMaxScaler, and performance was validated visually through a confusion matrix and ROC curve.',
    tech: ['Logistic Regression', 'MinMaxScaler'],
    metrics: [
      { label: 'Accuracy', value: '96%' },
      { label: 'AUC', value: '0.99' },
    ],
    highlights: [
      'Applied feature engineering from timestamps (Hour, DayOfWeek), MinMaxScaler normalization, and visualized performance via confusion matrix and ROC curve.',
    ],
    github: '',
  },
]

export const achievements = [
  'Generative AI Job Simulation — Forage',
  'Introduction to Generative AI Studio — Simplilearn SkillUp',
  'AI Training & Internship — Ediglobe x Kshitij',
  'TCS CodeVita Season 13 — Global Rank 7917',
]

export const education = [
  {
    degree: 'B.E. in Computer Science & Engineering',
    years: '2023 – 2027',
    school: 'Sapthagiri College of Engineering, VTU',
    detail: 'CGPA: 8.965',
  },
  {
    degree: 'Pre-University (2nd PUC)',
    years: '2021 – 2023',
    school: 'Vidya Mandira Pre University College',
    detail: '89.66%',
  },
  {
    degree: '10th Standard (CICSE)',
    years: '2020 – 2021',
    school: 'Cluny Convent High School',
    detail: '86.4%',
  },
]
