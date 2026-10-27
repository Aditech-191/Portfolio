import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import {
  MapPin,
  Download,
  Terminal,
  Shield,
  Zap,
  CheckCircle2,
  Github,
  Linkedin,
  MessageSquare,
  ArrowRight,
  Server,
  Layers,
  Copy,
  Check
} from 'lucide-react';

export const Hero: React.FC = () => {
  const { t } = useLanguage();
  const [copied, setCopied] = useState(false);

  const handleCopyInstallCmd = () => {
    navigator.clipboard.writeText('curl -sSL https://aditech.ug/install.sh | bash');
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleDownloadCV = () => {
    // Generate an authentic developer curriculum vitae markdown/text blob for instant client download
    const cvContent = `# CURRICULUM VITAE - JJUUKO ADINAN
Location: Kampala, Uganda
GitHub: https://github.com/Aditech-191
LinkedIn: https://www.linkedin.com/in/jjuuko-adinan-a407a2384
Email: aditechuganda@gmail.com

------------------------------------------------------------
CORE PHILOSOPHY:
"Delivering high-performance digital engineering, secure IT infrastructure, and innovative software solutions."

------------------------------------------------------------
CORE COMPETENCIES:
1. Installation & Systems Engineering (Featured Discipline)
   - Enterprise OS deployment: Debian, Ubuntu Server/Desktop, Arch Linux, Windows Server 2022/2019
   - Hardware component diagnostics, motherboard repair, thermal analysis, and RAM stress-testing
   - Automated unattended installations (PXE/Preseed/Kickstart), LUKS encryption, RAID array administration
   - Disaster recovery, kernel parameter tuning (sysctl), and emergency boot repair

2. Web & Full-Stack Software Engineering
   - React 18, Next.js (App Router), TypeScript, Tailwind CSS, Framer Motion
   - Node.js, Express, RESTful APIs, WebSockets, Python (FastAPI/ETL)
   - PostgreSQL, MongoDB, Redis, Supabase, database schema architecture

3. Infrastructure, Networks & Cybersecurity
   - LAN/VLAN architecture, subnet planning, managed switch configuration
   - Firewalls: pfSense, UFW, iptables; WireGuard & OpenVPN secure mesh tunnels
   - CIS benchmark hardening, vulnerability scanning, and cybersecurity awareness

4. Data Systems & Mobile Data Collection
   - KoboCollect & ODK Central cloud/self-hosted Ubuntu server deployment
   - Complex XLSForm design (cascaded questions, GPS geofencing, media validation)
   - Python automated ETL pipelines syncing submissions to PostgreSQL
   - Analytical reporting with Metabase, PowerBI, and Google Data Studio

------------------------------------------------------------
SELECTED ACHIEVEMENTS & METRICS:
- 100% System Uptime across managed Linux server nodes
- 120,000+ mobile survey records collected and synced with 0% data loss
- 45+ enterprise workstation and server operating system rollouts
- Sub-2 hour emergency incident triage response rate

------------------------------------------------------------
(C) ${new Date().getFullYear()} Jjuuko Adinan - Aditech Engineering`;

    const blob = new Blob([cvContent], { type: 'text/markdown;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Jjuuko_Adinan_Resume_Aditech.md';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <section className="relative pt-28 sm:pt-36 pb-16 lg:pb-24 overflow-hidden tech-grid-pattern">
      {/* Background Glow Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[900px] h-[450px] bg-gradient-to-tr from-primary-600/20 via-cyan-500/15 to-transparent blur-3xl pointer-events-none -z-10 rounded-full" />
      <div className="absolute top-1/2 left-10 w-72 h-72 bg-indigo-600/10 blur-[100px] pointer-events-none -z-10 rounded-full" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-cyan-600/10 blur-[100px] pointer-events-none -z-10 rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline, Bio & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Availability & Location Pill */}
            <div className="inline-flex flex-wrap items-center justify-center lg:justify-start gap-2.5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs sm:text-sm font-medium shadow-glow-emerald">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                </span>
                <span>{t.nav.availableNow}</span>
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-800/80 border border-slate-700/80 text-slate-300 text-xs sm:text-sm font-mono">
                <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                <span>{t.hero.location}</span>
              </div>
            </div>

            {/* Main Greeting & Name Heading */}
            <div className="space-y-2">
              <p className="text-sm sm:text-base font-mono uppercase tracking-wider text-cyan-400 font-semibold">
                &lt;{t.hero.badge} /&gt;
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                {t.hero.greeting}{' '}
                <span className="text-gradient-accent inline-block">
                  {t.hero.name}
                </span>
              </h1>
            </div>

            {/* Tagline / Core Philosophy */}
            <p className="text-base sm:text-lg lg:text-xl text-slate-300 max-w-2xl font-light leading-relaxed">
              "{t.hero.tagline}"
            </p>

            {/* CTAs Button Row */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-2">
              <a
                href="#services"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm sm:text-base bg-gradient-to-r from-primary-600 to-cyan-600 hover:from-primary-500 hover:to-cyan-500 text-white shadow-glow-primary transition-all duration-300 hover:scale-105"
              >
                <span>{t.hero.ctaPrimary}</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={handleDownloadCV}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-sm sm:text-base glass-button text-slate-200 hover:text-white"
                title="Download CV of Jjuuko Adinan"
              >
                <Download className="w-4 h-4 text-primary-400" />
                <span>{t.hero.ctaSecondary}</span>
              </button>

              <a
                href="https://wa.me/256700000000?text=Hello%20Jjuuko%20Adinan,%20I%20am%20contacting%20you%20from%20your%20portfolio."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-3.5 rounded-xl font-medium text-xs sm:text-sm bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-300 border border-emerald-500/40 transition-colors"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span>{t.hero.ctaWhatsApp}</span>
              </a>
            </div>

            {/* Social & Verification Badges */}
            <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-slate-400 text-xs sm:text-sm">
              <span className="font-mono text-slate-500">Connect:</span>
              <a
                href="https://github.com/Aditech-191"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-slate-300 hover:text-cyan-400 transition-colors"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4 text-white" />
                <span className="font-mono font-medium">@Aditech-191</span>
              </a>

              <span className="text-slate-700">•</span>

              <a
                href="https://www.linkedin.com/in/jjuuko-adinan-a407a2384"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-slate-300 hover:text-primary-400 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4 text-[#0a66c2]" />
                <span className="font-mono font-medium">Jjuuko Adinan</span>
              </a>
            </div>

          </div>

          {/* Right Column: Interactive Hardware/CLI Terminal Card */}
          <div className="lg:col-span-5">
            <div className="relative group">
              {/* Card ambient glow */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-primary-600 via-cyan-500 to-indigo-600 opacity-30 blur-xl group-hover:opacity-50 transition duration-500"></div>

              {/* Terminal Window container */}
              <div className="relative rounded-2xl glass-panel-glow overflow-hidden border border-slate-700/80 shadow-2xl">
                
                {/* Terminal Header */}
                <div className="flex items-center justify-between px-4 py-3 bg-dark-950/80 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80"></span>
                    <span className="w-3 h-3 rounded-full bg-amber-500/80"></span>
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80"></span>
                    <span className="ml-2 text-xs font-mono text-slate-400 flex items-center gap-1">
                      <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                      adinan@aditech-srv01:~
                    </span>
                  </div>

                  <button
                    onClick={handleCopyInstallCmd}
                    className="p-1 rounded hover:bg-white/10 text-slate-400 hover:text-slate-200 transition-colors text-xs flex items-center gap-1 font-mono"
                    title="Copy quick curl command"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span className="hidden sm:inline">{copied ? 'Copied' : 'Script'}</span>
                  </button>
                </div>

                {/* Terminal Body */}
                <div className="p-4 sm:p-5 font-mono text-xs sm:text-sm space-y-3 bg-dark-950/60 select-text">
                  <div className="flex items-center gap-2 text-slate-300">
                    <span className="text-cyan-400">adinan@aditech:~$</span>
                    <span className="text-emerald-400">neofetch --aditech</span>
                  </div>

                  <div className="p-3 rounded-xl bg-dark-900/90 border border-slate-800/80 space-y-1.5 text-xs">
                    <div className="flex justify-between items-center text-slate-400">
                      <span className="text-slate-500">OS:</span>
                      <span className="text-slate-200 font-semibold">Ubuntu Server / Arch / Windows Server</span>
                    </div>
                    <div className="flex justify-between items-center text-slate-400">
                      <span className="text-slate-500">Host:</span>
                      <span className="text-cyan-400 font-semibold">Jjuuko Adinan (Kampala, UG)</span>
                    </div>
                    <div className="flex justify-between items-center text-slate-400">
                      <span className="text-slate-500">Uptime:</span>
                      <span className="text-emerald-400 font-semibold">100% Reliable (Zero unplanned downtime)</span>
                    </div>
                    <div className="flex justify-between items-center text-slate-400">
                      <span className="text-slate-500">Core Specialty:</span>
                      <span className="text-primary-300 font-semibold">OS Deployment & Hardware Maintenance</span>
                    </div>
                    <div className="flex justify-between items-center text-slate-400">
                      <span className="text-slate-500">Web Stack:</span>
                      <span className="text-slate-300">React 18 • TypeScript • Node • Tailwind</span>
                    </div>
                    <div className="flex justify-between items-center text-slate-400">
                      <span className="text-slate-500">Data & Field:</span>
                      <span className="text-slate-300">ODK Central • KoboCollect • Python ETL</span>
                    </div>
                  </div>

                  {/* Dynamic verification prompt */}
                  <div className="pt-2 text-slate-300 space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-cyan-400">&gt;</span>
                      <span className="text-amber-300">aditech-verify-integrity</span>
                    </div>
                    <div className="text-[11px] text-slate-400 pl-4 space-y-0.5">
                      <p className="text-emerald-400 flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        [OK] Hardware bus, thermal paste & SSD SMART: Healthy
                      </p>
                      <p className="text-emerald-400 flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        [OK] WireGuard VPN & pfSense firewall: Active
                      </p>
                      <p className="text-cyan-400 flex items-center gap-1.5">
                        <Zap className="w-3.5 h-3.5" />
                        [READY] Available for local & global technical contracts.
                      </p>
                    </div>
                  </div>

                </div>

                {/* Terminal Bottom Status Bar */}
                <div className="px-4 py-2 bg-dark-950/90 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <div className="flex items-center gap-2">
                    <Server className="w-3.5 h-3.5 text-primary-400" />
                    <span>NODE: EAT-KLA-01</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-emerald-400">
                    <Shield className="w-3 h-3" />
                    <span>SECURE CONTEXT</span>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>

        {/* Counter Highlights Row */}
        <div className="mt-16 sm:mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-4 sm:p-5 rounded-2xl glass-card border-slate-800 flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center shrink-0">
              <Zap className="w-6 h-6 text-emerald-400" />
            </div>
            <div>
              <div className="text-2xl font-extrabold text-white font-mono">100%</div>
              <div className="text-xs font-medium text-slate-400">{t.metrics.m1Label}</div>
            </div>
          </div>

          <div className="p-4 sm:p-5 rounded-2xl glass-card border-slate-800 flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-primary-500/10 border border-primary-500/30 flex items-center justify-center shrink-0">
              <Server className="w-6 h-6 text-primary-400" />
            </div>
            <div>
              <div className="text-2xl font-extrabold text-white font-mono">45+</div>
              <div className="text-xs font-medium text-slate-400">{t.metrics.m2Label}</div>
            </div>
          </div>

          <div className="p-4 sm:p-5 rounded-2xl glass-card border-slate-800 flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center shrink-0">
              <Shield className="w-6 h-6 text-cyan-400" />
            </div>
            <div>
              <div className="text-2xl font-extrabold text-white font-mono">&lt; 2 hrs</div>
              <div className="text-xs font-medium text-slate-400">{t.metrics.m3Label}</div>
            </div>
          </div>

          <div className="p-4 sm:p-5 rounded-2xl glass-card border-slate-800 flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center shrink-0">
              <Layers className="w-6 h-6 text-indigo-400" />
            </div>
            <div>
              <div className="text-2xl font-extrabold text-white font-mono">Enterprise</div>
              <div className="text-xs font-medium text-slate-400">{t.metrics.m4Label}</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
