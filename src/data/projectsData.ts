import { ProjectItem } from '../types';

export const projectsData: ProjectItem[] = [
  {
    id: 'portfolio-redesign',
    title: 'Adi Tech Portfolio & Design System',
    category: 'web',
    categoryLabel: 'Web Development',
    description: 'Accessible, responsive web application and minimal design system built with React, TypeScript, and Tailwind CSS.',
    longDescription: 'Designed and developed as an authentic showcase of software engineering coursework, practical projects, and frontend design skills. Features a clean minimal white aesthetic, WCAG 2.2 AA contrast compliance, responsive layouts across all mobile and desktop screen sizes, and clean TypeScript component architecture.',
    tags: ['React 18', 'TypeScript', 'Tailwind CSS', 'Vite', 'WCAG 2.2 AA'],
    githubUrl: 'https://github.com/Aditech-191',
    liveDemoUrl: 'https://portfolio-three-xi-3kng7qtzxc.vercel.app/',
    featured: true,
    status: 'Completed',
    problemAddressed: 'Creating a modern, credible, and fully accessible portfolio to communicate technical competence and connect with internships, mentorship, and entry-level opportunities.',
    myImplementation: 'Designed the minimal design system, built modular React components, implemented accessible form validation, and optimized Vite build configuration.',
    learnings: 'Deepened hands-on experience in component-driven UI architecture, strict TypeScript typing, web accessibility standards, and responsive design systems.',
    highlights: [
      'Minimal white design system meeting WCAG 2.2 AA contrast standards',
      'Fully responsive mobile-first layout tested across 320px to 1440px viewports',
      'Clean TypeScript interfaces with zero build errors or warnings'
    ]
  },
  {
    id: 'os-automation-matrix',
    title: 'Linux OS Setup & Configuration Scripts',
    category: 'systems',
    categoryLabel: 'Systems & Scripting',
    description: 'Exploratory Bash automation scripts for configuring workstation environments and post-installation settings on Linux.',
    longDescription: 'A practical student learning project focused on shell scripting and Linux administration. Implements modular functions to automate routine package installations, developer toolchains, basic user permissions, and initial security configurations on Ubuntu and Debian distributions.',
    tags: ['Bash Scripting', 'Linux (Ubuntu/Debian)', 'Shell Automation', 'System Setup'],
    githubUrl: 'https://github.com/Aditech-191/os-deployment-matrix',
    liveDemoUrl: 'https://github.com/Aditech-191',
    featured: true,
    status: 'In Progress',
    problemAddressed: 'Reducing repetitive manual work and human error when setting up fresh Linux workstations for development coursework.',
    myImplementation: 'Wrote modular shell scripts with input validation, command checks, and structured configuration functions.',
    learnings: 'Gained hands-on familiarity with Linux file permissions, bash syntax, environment variables, and package management automation.',
    highlights: [
      'Modular shell functions with parameter validation',
      'Automated installation of essential developer toolchains',
      'Practical learning exercise in Linux systems management'
    ]
  },
  {
    id: 'hardware-diagnostic-bench',
    title: 'Hardware Diagnostics & Maintenance Toolkit',
    category: 'systems',
    categoryLabel: 'Hardware & Maintenance',
    description: 'A bootable utility collection and diagnostic workflow for testing memory integrity, checking disk health, and monitoring component thermals.',
    longDescription: 'Developed during practical coursework to understand PC hardware diagnostics and maintenance. Bundles open-source utilities like MemTest86 and smartmontools on a bootable environment to inspect RAM errors, read drive SMART attributes, and verify CPU cooling performance.',
    tags: ['Hardware Diagnostics', 'Linux Utilities', 'SMART Testing', 'Maintenance'],
    githubUrl: 'https://github.com/Aditech-191/hardware-triage-toolkit',
    liveDemoUrl: 'https://github.com/Aditech-191',
    featured: false,
    status: 'Completed',
    problemAddressed: 'Diagnosing common hardware faults such as failing RAM sticks, degraded hard drive sectors, and overheating CPUs in student lab computers.',
    myImplementation: 'Configured diagnostic bootable environments and wrote helper scripts to log and summarize hardware status readouts.',
    learnings: 'Deepened practical knowledge of computer architecture, memory bus errors, storage health parameters, and hardware troubleshooting methodology.',
    highlights: [
      'Hands-on memory and storage health diagnostics',
      'Integration of open-source bench diagnostic utilities',
      'Structured troubleshooting methodology for computer lab maintenance'
    ]
  }
];
