export interface SkillCategory {
  title: string;
  key: string;
  icon: string;
  description: string;
  skills: { name: string; level: number; tags: string[] }[];
}

export const skillsCategories: SkillCategory[] = [
  {
    title: 'Installation & Systems Engineering',
    key: 'systems',
    icon: 'Cpu',
    description: 'Hardware architecture, Linux/Windows kernel configuration, and bare-metal server operations.',
    skills: [
      { name: 'OS Deployment (Ubuntu, Debian, Arch, Windows Server)', level: 98, tags: ['Core', 'OS'] },
      { name: 'Hardware Diagnostics & Motherboard Triage', level: 95, tags: ['Hardware', 'Bench'] },
      { name: 'Thermal Management & Component Optimization', level: 92, tags: ['Hardware'] },
      { name: 'Disaster Recovery, RAID & LUKS Encryption', level: 94, tags: ['Storage', 'Security'] },
      { name: 'Proxmox VE & Hyper-V Virtualization', level: 90, tags: ['Virtualization'] },
    ]
  },
  {
    title: 'Web & Full-Stack Software Engineering',
    key: 'web',
    icon: 'Code2',
    description: 'Modern reactive frontend interfaces backed by resilient asynchronous server architectures.',
    skills: [
      { name: 'React, Next.js & Modern TypeScript', level: 96, tags: ['Frontend', 'UI'] },
      { name: 'Tailwind CSS, Glassmorphism & UI/UX', level: 95, tags: ['CSS', 'Design'] },
      { name: 'Node.js, Express & RESTful API Architecture', level: 92, tags: ['Backend'] },
      { name: 'PostgreSQL, MongoDB & Supabase', level: 88, tags: ['Databases'] },
      { name: 'WebSockets & Real-Time Telemetry', level: 86, tags: ['Real-time'] },
    ]
  },
  {
    title: 'Infrastructure, Networks & Cybersecurity',
    key: 'network',
    icon: 'ShieldCheck',
    description: 'Defensive network architecture, firewall policies, encryption protocols, and zero-trust remote access.',
    skills: [
      { name: 'LAN/VLAN Architecture & Subnet Planning', level: 94, tags: ['Networking'] },
      { name: 'Firewalls (pfSense, UFW, iptables)', level: 92, tags: ['Security'] },
      { name: 'WireGuard & OpenVPN Secure Tunnels', level: 93, tags: ['VPN', 'Remote'] },
      { name: 'CIS Benchmark Hardening & Vulnerability Scans', level: 89, tags: ['Security'] },
      { name: 'DNS Sinkholing & Network Threat Defense', level: 90, tags: ['Security'] },
    ]
  },
  {
    title: 'Data Systems & Mobile Data Collection',
    key: 'data',
    icon: 'Database',
    description: 'Field survey infrastructure, automated ETL processing, and interactive analytical reporting.',
    skills: [
      { name: 'KoboCollect & ODK Central Server Provisioning', level: 96, tags: ['Field Data', 'ODK'] },
      { name: 'Advanced XLSForm Design & GPS Constraints', level: 95, tags: ['XLSForm'] },
      { name: 'Python ETL & Automated Data Cleansing', level: 90, tags: ['Python', 'ETL'] },
      { name: 'PostgreSQL & Real-Time Data Sync', level: 88, tags: ['Databases'] },
      { name: 'Interactive Dashboards (Metabase, PowerBI)', level: 86, tags: ['Analytics'] },
    ]
  }
];
