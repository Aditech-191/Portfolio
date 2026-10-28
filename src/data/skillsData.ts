export interface SkillItem {
  name: string;
  proficiency: 'Core / Practical' | 'Working Knowledge' | 'Exploring';
  tag: string;
}

export interface SkillCategory {
  title: string;
  key: string;
  icon: string;
  description: string;
  skills: SkillItem[];
}

export const skillsCategories: SkillCategory[] = [
  {
    title: 'Programming Languages',
    key: 'languages',
    icon: 'Code2',
    description: 'Languages used in academic coursework, personal projects, and automation scripts.',
    skills: [
      { name: 'JavaScript (ES6+)', proficiency: 'Core / Practical', tag: 'Web' },
      { name: 'TypeScript', proficiency: 'Core / Practical', tag: 'Web' },
      { name: 'Python', proficiency: 'Working Knowledge', tag: 'Scripting' },
      { name: 'Bash / Shell Scripting', proficiency: 'Working Knowledge', tag: 'Automation' },
      { name: 'SQL', proficiency: 'Working Knowledge', tag: 'Databases' },
    ]
  },
  {
    title: 'Frontend Development',
    key: 'frontend',
    icon: 'Layout',
    description: 'Building responsive, accessible, and user-friendly web interfaces.',
    skills: [
      { name: 'React 18 & Hooks', proficiency: 'Core / Practical', tag: 'Framework' },
      { name: 'HTML5 Semantic Web', proficiency: 'Core / Practical', tag: 'Markup' },
      { name: 'CSS3 & Responsive Design', proficiency: 'Core / Practical', tag: 'Styling' },
      { name: 'Tailwind CSS', proficiency: 'Core / Practical', tag: 'Styling' },
      { name: 'Web Accessibility (WCAG)', proficiency: 'Working Knowledge', tag: 'Standards' },
    ]
  },
  {
    title: 'Backend & Databases',
    key: 'backend',
    icon: 'Database',
    description: 'Server logic, REST API integration, and relational data modeling.',
    skills: [
      { name: 'Node.js & Express', proficiency: 'Working Knowledge', tag: 'Backend' },
      { name: 'RESTful API Integration', proficiency: 'Working Knowledge', tag: 'APIs' },
      { name: 'PostgreSQL & Relational Schemas', proficiency: 'Working Knowledge', tag: 'Databases' },
      { name: 'JSON & Client-Server Data Flow', proficiency: 'Core / Practical', tag: 'Protocols' },
    ]
  },
  {
    title: 'Tools & Systems',
    key: 'tools',
    icon: 'Terminal',
    description: 'Version control, developer toolchains, and operating system environments.',
    skills: [
      { name: 'Git & GitHub', proficiency: 'Core / Practical', tag: 'VCS' },
      { name: 'Linux (Ubuntu / Debian)', proficiency: 'Working Knowledge', tag: 'OS' },
      { name: 'Vite & Modern Tooling', proficiency: 'Core / Practical', tag: 'Build' },
      { name: 'Hardware Triage & PC Assembly', proficiency: 'Working Knowledge', tag: 'Hardware' },
      { name: 'Debugging & Code Review', proficiency: 'Working Knowledge', tag: 'Quality' },
    ]
  }
];
