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

  // 1. SERVICES & OFFERINGS
  if (
    q.includes('service') ||
    q.includes('offer') ||
    q.includes('what do you do') ||
    q.includes('huduma') ||
    q.includes('kazi') ||
    q.includes('mirimu') ||
    q.includes('que faites-vous')
  ) {
    if (lang === 'fr') {
      return {
        text: "Jjuuko Adinan propose 4 pôles d'expertise clés :\n\n" +
          "1. 💻 **Installation & Ingénierie des Systèmes** : Déploiement d'OS (Debian/Ubuntu/Arch/Windows Server), maintenance matérielle, tuning noyau.\n" +
          "2. 🌐 **Ingénierie Web & Full-Stack** : Applications modernes React/Next.js/Node.js ultra-réactives.\n" +
          "3. 🛡️ **Réseaux & Cybersécurité** : VLANs, pare-feu pfSense, tunnels WireGuard, audits de sécurité.\n" +
          "4. 📊 **Systèmes de Données & Collecte Mobile** : ODK Central, KoboCollect, pipelines Python ETL et PostgreSQL.\n\n" +
          "Lequel de ces domaines souhaitez-vous explorer ?",
        quickReplies: ["Installation d'OS", "Développement Web", "KoboCollect & ODK", "Demander un Devis"],
        actionLink: { text: "Découvrir tous les services", href: "#services" }
      };
    }
    if (lang === 'sw') {
      return {
        text: "Jjuuko Adinan anatoa huduma kuu 4 za kiufundi:\n\n" +
          "1. 💻 **Ufungaji na Uhandisi wa Mifumo (OS)** : Uwekaji wa mifumo ya uendeshaji (Linux/Windows Server), ukarabati wa kompyuta na vifaa.\n" +
          "2. 🌐 **Uhandisi wa Tovuti & Full-Stack** : Tovuti za kisasa za React, TypeScript na seva imara.\n" +
          "3. 🛡️ **Mitandao & Usalama wa Mtandao** : Usanidi wa VLAN, kuta-moto (pfSense), na VPN za WireGuard.\n" +
          "4. 📊 **Mifumo ya Data & KoboCollect / ODK** : Fomu za kidijitali za utafiti na uchambuzi wa data.\n\n" +
          "Je, ungependa kupata maelezo ya huduma ipi?",
        quickReplies: ["Ufungaji wa OS", "Kutengeneza Tovuti", "KoboCollect & ODK", "Omba Makadirio ya Bei"],
        actionLink: { text: "Tazama Huduma Zote", href: "#services" }
      };
    }
    if (lang === 'lg') {
      return {
        text: "Jjuuko Adinan akola ku bintu bikulu 4:\n\n" +
          "1. 💻 **Okussaamu Enkola n'Okutereeza Kompyuta** : Okussaamu Linux ne Windows Server, n'okuddaabiriza ebyuma.\n" +
          "2. 🌐 **Okuzimba Emikutu gya Yintaneti (Full-Stack)** : Emikutu egy'omulembe egya React ne Node.js.\n" +
          "3. 🛡️ **Netiwaaka n'Obukuumi** : Okukuuma ebiwandiiko, VLAN, ne VPN za WireGuard.\n" +
          "4. 📊 **KoboCollect ne ODK** : Ffoomu z'okukunganya ebiwandiiko ku masimu n'okusengeka data.\n\n" +
          "Ku bino waggulu, kiki ky'osinga okwetaagako obuyambi?",
        quickReplies: ["Okussaamu OS", "Okuzimba Yintaneti", "KoboCollect & ODK", "Buuza Emiwendo"],
        actionLink: { text: "Laba Emirimu Gyonna", href: "#services" }
      };
    }
    return {
      text: "Jjuuko Adinan specializes in 4 premier engineering disciplines:\n\n" +
        "1. 💻 **Installation & Systems Engineering** (Core Focus): Precision OS deployment (Debian, Ubuntu, Arch, Windows Server), hardware triage, thermal tuning & automated backups.\n" +
        "2. 🌐 **Web & Full-Stack Software Engineering**: Responsive React, Next.js, TypeScript & resilient Node/PostgreSQL backends.\n" +
        "3. 🛡️ **Infrastructure, Networks & Cybersecurity**: VLAN segmentation, pfSense firewalls, WireGuard mesh VPNs & system hardening.\n" +
        "4. 📊 **Data Systems & Mobile Surveys**: KoboCollect & ODK Central cloud provisioning, custom XLSForms & Python ETL pipelines.\n\n" +
        "Which discipline best fits your current project?",
      quickReplies: ["OS Installation", "Web Development", "KoboCollect & ODK", "Get a Project Quote"],
      actionLink: { text: "Explore Services Section", href: "#services" }
    };
  }

  // 2. OS INSTALLATION & HARDWARE / SYSTEMS
  if (
    q.includes('os') ||
    q.includes('install') ||
    q.includes('hardware') ||
    q.includes('ubuntu') ||
    q.includes('linux') ||
    q.includes('windows') ||
    q.includes('repair') ||
    q.includes('troubleshoot') ||
    q.includes('motherboard')
  ) {
    return {
      text: "💻 **Installation & Systems Engineering** is Jjuuko Adinan's core featured capability!\n\n" +
        "• **Supported Operating Systems**: Ubuntu Server/Desktop, Debian, Arch Linux, Windows Server 2019/2022, Windows 10/11 Pro, Proxmox VE.\n" +
        "• **Hardware Maintenance**: Motherboard diagnostics, RAM testing, thermal paste repasting, SSD/NVMe health analysis (SMART), and power supply load testing.\n" +
        "• **Automation**: Unattended installations via PXE boot, automated disk partitioning with LUKS encryption, and RAID 1/5/10 setups.\n" +
        "• **Rapid Triage**: Emergency boot repair, GRUB restoration, and filesystem corruption recovery.",
      quickReplies: ["Request OS Deployment", "Hardware Diagnostics Quote", "Emergency Troubleshooting"],
      actionLink: { text: "Contact for Systems Support", href: "#contact" }
    };
  }

  // 3. KOBOCOLLECT & ODK / FIELD DATA
  if (
    q.includes('kobo') ||
    q.includes('odk') ||
    q.includes('survey') ||
    q.includes('data collection') ||
    q.includes('xlsform') ||
    q.includes('field')
  ) {
    return {
      text: "📊 **Data Systems & Mobile Data Collection (ODK / KoboCollect)**:\n\n" +
        "Adinan has extensive real-world experience deploying end-to-end data pipelines for field teams, researchers, and NGOs in Uganda:\n\n" +
        "• **Server Setup**: Self-hosted or cloud KoboToolbox / ODK Central on Ubuntu with automated SSL and backups.\n" +
        "• **XLSForm Engineering**: Multi-stage cascaded select questions, GPS boundary verification, media capture constraints, and validation logic.\n" +
        "• **Automated Sync**: Python ETL scripts that pull submissions via REST API and load them directly into PostgreSQL or Google BigQuery.\n" +
        "• **Live Visualizations**: Metabase and PowerBI dashboards for instant progress tracking.",
      quickReplies: ["Setup Kobo/ODK Server", "Build Custom XLSForm", "Schedule Field Training"],
      actionLink: { text: "Discuss Mobile Survey Project", href: "#contact" }
    };
  }

  // 4. QUOTES, PRICING & COST ESTIMATES
  if (
    q.includes('quote') ||
    q.includes('price') ||
    q.includes('cost') ||
    q.includes('rate') ||
    q.includes('budget') ||
    q.includes('bei') ||
    q.includes('emiwendo') ||
    q.includes('devis') ||
    q.includes('tarif')
  ) {
    return {
      text: "💰 **Transparent Project Pricing & Estimates**:\n\n" +
        "Engagements are scoped based on technical complexity and requirements:\n\n" +
        "• **OS Deployment & Hardware Optimization**: Starting from $30 - $120 per machine / server.\n" +
        "• **Custom Web Applications & Dashboards**: Typically $500 - $2,500+ depending on database architecture and feature set.\n" +
        "• **Network & Firewall Infrastructure**: $250 - $1,200 (LAN setup, WireGuard VPN gateway, server hardening).\n" +
        "• **ODK / KoboCollect Server & Form Setup**: $200 - $800.\n\n" +
        "For an exact instant consultation, send your requirements via the contact form or WhatsApp!",
      quickReplies: ["Send Requirements", "Chat on WhatsApp", "View Past Projects"],
      actionLink: { text: "Go to Contact Form", href: "#contact" }
    };
  }

  // 5. START A PROJECT / HIRE / AVAILABILITY
  if (
    q.includes('start') ||
    q.includes('hire') ||
    q.includes('available') ||
    q.includes('work together') ||
    q.includes('contact') ||
    q.includes('reach') ||
    q.includes('kuanza') ||
    q.includes('niajiri') ||
    q.includes('engager')
  ) {
    return {
      text: "🚀 **Ready to Collaborate with Jjuuko Adinan!**\n\n" +
        "• **Current Status**: 🟢 Available for freelance contracts, enterprise system deployments, and full-stack engagements.\n" +
        "• **Location**: Kampala, Uganda (East Africa Time, UTC+3) — works seamlessly with both local and international remote clients.\n" +
        "• **Turnaround**: Fast initial consultation within 24 hours.\n\n" +
        "You can reach out right away via the interactive contact form below or via WhatsApp for direct voice/chat.",
      quickReplies: ["WhatsApp Message", "Fill Contact Form", "Check Core Skills"],
      actionLink: {
        text: "Launch WhatsApp Directly",
        href: "https://wa.me/256700000000?text=Hello%20Jjuuko%20Adinan,%20I%20am%20interested%20in%20discussing%20a%20project%20with%20you.",
        isExternal: true
      }
    };
  }

  // 6. CORE SKILLS & TECH STACK
  if (
    q.includes('skill') ||
    q.includes('tech') ||
    q.includes('stack') ||
    q.includes('tools') ||
    q.includes('language') ||
    q.includes('python') ||
    q.includes('react')
  ) {
    return {
      text: "⚡ **Jjuuko Adinan's Technical Arsenal**:\n\n" +
        "• **Frontend**: React 18, Next.js, Vite, TypeScript, Tailwind CSS, Framer Motion, HTML5/CSS3.\n" +
        "• **Backend & APIs**: Node.js, Express, Python (FastAPI/ETL), RESTful APIs, WebSockets.\n" +
        "• **Systems & OS**: Debian, Ubuntu Server, Arch Linux, Windows Server, Proxmox VE, Bash, Systemd.\n" +
        "• **Networks & Security**: pfSense, WireGuard, OpenVPN, VLANs, iptables, Fail2ban, CIS Benchmarks.\n" +
        "• **Databases & Data**: PostgreSQL, MongoDB, KoboToolbox, ODK Central, XLSForm, Metabase.",
      quickReplies: ["View GitHub Repos", "Explore Services", "Request a Quote"],
      actionLink: {
        text: "Visit GitHub Profile",
        href: "https://github.com/Aditech-191",
        isExternal: true
      }
    };
  }

  // 7. LOCATION & ABOUT ADINAN
  if (
    q.includes('who') ||
    q.includes('adinan') ||
    q.includes('location') ||
    q.includes('where') ||
    q.includes('kampala') ||
    q.includes('uganda') ||
    q.includes('about')
  ) {
    return {
      text: "📍 **About Jjuuko Adinan (Aditech)**:\n\n" +
        "Adinan is a seasoned Full-Stack Engineer and IT Systems Specialist operating from **Kampala, Uganda**.\n\n" +
        "His core philosophy is: *'Delivering high-performance digital engineering, secure IT infrastructure, and innovative software solutions.'*\n\n" +
        "He combines real-world hardware expertise with clean, modern software engineering to solve tangible challenges.",
      quickReplies: ["View Projects", "Read Core Philosophy", "Get in Touch"],
      actionLink: { text: "Learn More About Adinan", href: "#about" }
    };
  }

  // DEFAULT CONTEXTUAL FALLBACK
  return {
    text: "Thanks for asking! As **Aditech AI**, I can assist you with details about:\n\n" +
      "• 💻 **OS Deployment & Hardware Maintenance** (Core specialty)\n" +
      "• 🌐 **Custom Web & Full-Stack Software Engineering**\n" +
      "• 🛡️ **Enterprise Networking & Cybersecurity Hardening**\n" +
      "• 📊 **Mobile Survey Setups (KoboCollect & ODK Central)**\n" +
      "• 💰 **Project quotes and immediate availability**\n\n" +
      "Feel free to select one of the quick prompts or drop a direct message to Adinan!",
    quickReplies: ["What services do you offer?", "What are your core skills?", "How can we start a project?", "Do you deploy KoboCollect / ODK?"],
    actionLink: { text: "Contact Jjuuko Adinan Directly", href: "#contact" }
  };
}
