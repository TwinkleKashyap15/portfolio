import { Project, SkillCategory, EducationItem, CertificationItem } from './types';

export const projectsData: Project[] = [
  {
    id: 'project-1',
    title: 'Smart Energy Monitoring',
    description: 'An IoT-based ecosystem developed to track real-time power consumption with intelligent, automated efficiency recommendations powered by predictive modeling.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCnZMNZBKltcGp0Zdli_9y27Ai1jZ4gplvzBvu86D85ZCZapp3qMSvnNJ9wmHCX8ehqVFza8FiqNj6OcG9rZfgeUmS9OxLRajFttz2_UnPg8HPhzImuA68SVeHYwuzXmuYN_l9u2RoPuJGEAZrEcjrxgPEFDPoEnU9TlsA7u6HHyrtiTxB_cUvtDUPLcQKgQP7eJfEyKc__rb1R4oIZcJCnWzWDDOdj9kTkrRj0J3WLD1MVITF3TaUo68Va91e3UDg3NLO3LaSxAUg',
    tags: ['Python', 'IoT'],
    link: 'https://github.com/Twinklekashyap15',
    github: 'https://github.com/Twinklekashyap15',
    featured: true
  },
  {
    id: 'project-2',
    title: 'Mother-First',
    description: 'Holistic digital health platform focused on maternal wellness and prenatal tracking.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCdI0vPnhYG2-P1FZUbPSiswbyieMKBgdm0FFShBCId8V2GcWlUkhzylFAs4MYPqA47gcHEu3DwZX6IILrkkJrkEbwGwl7ATuxkvU9UoLCLuC5es824kf4JAJeegKq_CYNiCh78mcIjhCdW4X2ThnaZDNPwxPi6AZW4t9OK74aZn1r7DJ29aIOxSzHt3srG2lkWfgv2xwJGaREMp5awy7Gyt8fuY2Jd0FjMBi7uFEVahQvjhf2fsYCFQOBquLZRrwtFCZq2KGI2le8',
    tags: ['React Native'],
    link: 'https://github.com/Twinklekashyap15',
    github: 'https://github.com/Twinklekashyap15',
    featured: false
  },
  {
    id: 'project-3',
    title: 'Queue Simulation',
    description: 'Algorithm-driven simulation to optimize bank teller allocation and reduce customer wait times.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAvCGhOu-X7WZnHMoYud-q8lAVC8g8uUGwwQs1tABvUf2iCHFvUbS_S9xz2Eo8y-XkPI2Q1NQDtMjLLryhN3hc4DyhuNUnFggwC7m_SFAt2tTUYTxnv6a4qNgyEwHgdoh75Zp5zFcejYhtFMRyvXbhrbRWKVXkLoIuPUnQSrhwK4jeRfIAicaZjDklwvYoAwzzGA2sFnh89P19Tg9I3pONNXyrFMG08i1C4FhOS9R-gesUoL5Cw3dx97mw94s-_NzCsw4G-ettZkGM',
    tags: ['C++ / DSA'],
    link: 'https://github.com/Twinklekashyap15',
    github: 'https://github.com/Twinklekashyap15',
    featured: false
  }
];

export const skillsData: SkillCategory[] = [
  {
    id: 'skills-programming',
    name: 'Programming',
    icon: 'Code2',
    color: 'primary',
    skills: ['Python', 'C++', 'Java', 'SQL']
  },
  {
    id: 'skills-development',
    name: 'Development',
    icon: 'Terminal',
    color: 'secondary',
    skills: ['HTML5', 'CSS3', 'JavaScript']
  },
  {
    id: 'skills-infrastructure',
    name: 'Infrastructure',
    icon: 'Hammer',
    color: 'tertiary',
    skills: ['Git/GitHub', 'VS Code', 'Canva']
  }
];

export const educationData: EducationItem[] = [
  {
    id: 'edu-1',
    degree: 'B.Tech in AI & Data Science',
    institution: 'Arya College of Engineering & IT',
    period: '2021 — PRESENT',
    grade: '9.0',
    featured: true
  },
  {
    id: 'edu-2',
    degree: 'Intermediate (Science)',
    institution: "St. Mary's Convent Sr. Sec. School",
    period: '2021 — 2022',
    percentage: '77.6%',
    featured: false
  },
  {
    id: 'edu-3',
    degree: 'Matriculation',
    institution: "St. Mary's Convent Sr. Sec. School",
    period: '2020',
    percentage: '92.5%',
    featured: false
  }
];

export const certificationsData: CertificationItem[] = [
  {
    id: 'cert-1',
    title: 'Programming in C & C Essentials',
    issuer: 'Cisco Networking Academy',
    icon: 'Award',
    color: 'primary'
  },
  {
    id: 'cert-2',
    title: 'DS & Algorithms Designs',
    issuer: 'NPTEL',
    icon: 'Award',
    color: 'secondary'
  },
  {
    id: 'cert-3',
    title: 'Python for Data Science',
    issuer: 'NPTEL',
    icon: 'Award',
    color: 'tertiary'
  }
];
