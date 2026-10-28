import { Language } from '../types';

interface AiResponse {
  text: string;
  quickReplies?: string[];
  actionLink?: {
    text: string;
    href: string;
    isExternal?: boolean;
  };
}

export function generateAiResponse(query: string, lang: Language): AiResponse {
  const q = query.toLowerCase().trim();

  // 1. SKILLS & TECHNICAL TOOLKIT
  if (
    q.includes('skill') ||
    q.includes('tech') ||
    q.includes('stack') ||
    q.includes('ujuzi') ||
    q.includes('bukugu') ||
    q.includes('compétence') ||
    q.includes('language')
  ) {
    if (lang === 'fr') {
      return {
        text: "🛠️ **Compétences Techniques de Jjuuko Adinan** :\n\n" +
          "• **Langages** : TypeScript, JavaScript (ES6+), Python, Bash/Shell, SQL.\n" +
          "• **Frontend** : React 18, HTML5 sémantique, CSS3, Tailwind CSS, Accessibilité (WCAG).\n" +
          "• **Backend & Données** : Node.js, Express, PostgreSQL, APIs REST.\n" +
          "• **Outils & Systèmes** : Git, GitHub, Linux (Ubuntu/Debian), Vite, Dépannage matériel.",
        quickReplies: ["Voir les Projets", "À Propos des Études", "Contacter Adinan"],
        actionLink: { text: "Explorer les Compétences", href: "#skills" }
      };
    }
    if (lang === 'sw') {
      return {
        text: "🛠️ **Ujuzi wa Kiufundi wa Jjuuko Adinan** :\n\n" +
          "• **Lugha** : TypeScript, JavaScript (ES6+), Python, Bash, SQL.\n" +
          "• **Frontend** : React 18, HTML5, CSS3, Tailwind CSS, Ufikiaji (WCAG).\n" +
          "• **Backend & Hifadhidata** : Node.js, Express, PostgreSQL, REST APIs.\n" +
          "• **Zana & Mifumo** : Git, GitHub, Linux (Ubuntu/Debian), Vite, Utatuzi wa Kompyuta.",
        quickReplies: ["Tazama Miradi", "Kuhusu Masomo", "Wasiliana Nami"],
        actionLink: { text: "Tazama Sehemu ya Ujuzi", href: "#skills" }
      };
    }
    if (lang === 'lg') {
      return {
        text: "🛠️ **Obukugu bwa Jjuuko Adinan mu bya Kompyuta** :\n\n" +
          "• **Ennimi za Code** : TypeScript, JavaScript, Python, Bash, SQL.\n" +
          "• **Frontend** : React 18, HTML5, CSS3, Tailwind CSS.\n" +
          "• **Backend** : Node.js, Express, PostgreSQL, REST APIs.\n" +
          "• **Ebikozesebwa** : Git, GitHub, Linux (Ubuntu/Debian), Vite.",
        quickReplies: ["Laba Emirimu", "Ebikwata ku Masomo", "Ntuukirira"],
        actionLink: { text: "Laba Obukugu Bwonna", href: "#skills" }
      };
    }
    return {
      text: "🛠️ **Jjuuko Adinan's Technical Toolkit**:\n\n" +
        "• **Languages**: TypeScript, JavaScript (ES6+), Python, Bash / Shell Scripting, SQL.\n" +
        "• **Frontend**: React 18, Semantic HTML5, CSS3, Tailwind CSS, Web Accessibility (WCAG 2.2 AA).\n" +
        "• **Backend & DB**: Node.js, Express, PostgreSQL, RESTful APIs, JSON data handling.\n" +
        "• **Tools & Systems**: Git & GitHub, Linux (Ubuntu/Debian), Vite, PC Hardware diagnostics.",
      quickReplies: ["Explore Projects", "Education Details", "Contact Information"],
      actionLink: { text: "View Skills Section", href: "#skills" }
    };
  }

  // 2. PROJECTS & COURSEWORK
  if (
    q.includes('project') ||
    q.includes('projet') ||
    q.includes('mradi') ||
    q.includes('mirimu') ||
    q.includes('work') ||
    q.includes('built')
  ) {
    if (lang === 'fr') {
      return {
        text: "💻 **Projets & Travaux Réalisés** :\n\n" +
          "1. **Adi Tech Portfolio & Design System** : Application web accessible et réactive conçue avec React 18, TypeScript et Tailwind CSS.\n" +
          "2. **Linux OS Setup & Scripts** : Scripts Bash modulaires pour automatiser la configuration d'environnements de développement sous Ubuntu/Debian.\n" +
          "3. **Hardware Diagnostics Toolkit** : Environnement bootable et flux de diagnostic pour vérifier la RAM, les disques durs et la température des composants.",
        quickReplies: ["Voir le Code GitHub", "Compétences Clés", "Envoyer un Message"],
        actionLink: { text: "Explorer les Projets", href: "#projects" }
      };
    }
    return {
      text: "💻 **Genuine Student Projects & Practical Work**:\n\n" +
        "1. **Adi Tech Portfolio & Design System**: Responsive, accessible web portfolio built with React 18, TypeScript, and a minimal white design system complying with WCAG 2.2 AA.\n" +
        "2. **Linux OS Setup & Configuration Scripts**: Modular Bash automation scripts for configuring workstations and development toolchains on Ubuntu/Debian.\n" +
        "3. **Hardware Diagnostics & Maintenance Toolkit**: Bootable diagnostic environment and scripts for inspecting RAM errors, disk SMART health, and thermals.",
      quickReplies: ["View on GitHub", "Explore Skills", "Contact Me"],
      actionLink: { text: "View Projects Section", href: "#projects" }
    };
  }

  // 3. EDUCATION & ACADEMIC BACKGROUND
  if (
    q.includes('education') ||
    q.includes('study') ||
    q.includes('school') ||
    q.includes('degree') ||
    q.includes('formation') ||
    q.includes('masomo') ||
    q.includes('enjigiriza')
  ) {
    return {
      text: "🎓 **Academic Background**:\n\n" +
        "• **Status**: Student Developer studying Software Engineering in Kampala, Uganda.\n" +
        "• **Core Focus**: Data Structures & Algorithms, Object-Oriented Software Design, Relational Database Systems (SQL), Operating Systems, and Modern Web Systems.\n" +
        "• **Objective**: Actively pursuing internships, junior software development roles, mentorship, and engineering collaborations.",
      quickReplies: ["Explore Projects", "Core Skills", "Get in Touch"],
      actionLink: { text: "View Education Section", href: "#education" }
    };
  }

  // 4. CONTACT & COLLABORATION
  if (
    q.includes('contact') ||
    q.includes('hire') ||
    q.includes('intern') ||
    q.includes('email') ||
    q.includes('phone') ||
    q.includes('mawasiliano') ||
    q.includes('ntuukirira')
  ) {
    return {
      text: "📫 **Get in Touch with Jjuuko Adinan (Adi Tech)**:\n\n" +
        "• **Email**: [aditechsoftwaresolutions@gmail.com](mailto:aditechsoftwaresolutions@gmail.com)\n" +
        "• **Phone / WhatsApp**: [+256 782010327](tel:+256782010327)\n" +
        "• **Location**: Kampala, Uganda (East Africa Time, UTC+3)\n" +
        "• **Availability**: Open to software internships, junior roles, mentorship, and project collaborations.",
      quickReplies: ["Send an Email", "Open WhatsApp", "View Contact Form"],
      actionLink: { text: "Go to Contact Section", href: "#contact" }
    };
  }

  // DEFAULT FALLBACK
  return {
    text: "Hello! As the **Adi Tech Portfolio Guide**, I can provide authentic details about Jjuuko Adinan's:\n\n" +
      "• 🎓 Software Engineering coursework and learning journey\n" +
      "• 💻 Practical student projects and open-source code\n" +
      "• 🛠️ Technical skills (React, TypeScript, Python, Bash, SQL, Linux)\n" +
      "• 📫 Direct contact options and internship availability",
    quickReplies: ["What are your core skills?", "What projects have you built?", "Tell me about your education", "How can I contact you?"],
    actionLink: { text: "Explore Portfolio", href: "#projects" }
  };
}
