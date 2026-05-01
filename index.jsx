import React, { useState, useEffect } from 'react';
import { 
  Menu, X, ChevronRight, Briefcase, GraduationCap, Award, 
  Code, Mail, Phone, MapPin, ExternalLink, Linkedin, 
  Instagram, Youtube, Github, BrainCircuit, LineChart, 
  Calculator, ShieldCheck
} from 'lucide-react';

// --- DATA EXTRACTION & ORGANIZATION ---

const ABOUT_TEXT = `Qualified Cost & Management Accountant (CMA) with a Certificate of Merit and progressive finance experience across FMCG and leisure/construction sectors. I bring a unique dual expertise: rigorous financial controllership and a passionate drive for Artificial Intelligence. As a Finance Manager, I have independently led ERP migrations, implemented complex standard costing frameworks, and conducted forensic audits uncovering significant financial anomalies. Beyond traditional finance, I am an AI enthusiast, certified Research Analyst (NISM), and developer of practical AI agents designed to optimize professional workflows. I am dedicated to driving organizational efficiency, actionable insights, and tech-forward solutions.`;

const SKILLS = {
  finance: [
    "FP&A & MIS Reporting", "Standard Costing & Budgeting", "Profitability Modelling", 
    "Forensic Auditing", "Variance Analysis", "Cash Flow Management", "GST & Statutory Compliance"
  ],
  tech: [
    "Zoho Books (Advanced)", "SAP FICO", "Tally Prime", "Advanced Excel", 
    "Power BI", "Data Analysis", "ERP Migration"
  ],
  ai: [
    "Anthropic Claude / Claude Cowork", "Generative AI Prompting", "AI Agent Development", 
    "Workflow Automation"
  ]
};

const EXPERIENCE = [
  {
    role: "Finance Manager",
    company: "Eternity Pools & Gardens Pvt. Ltd.",
    location: "Trivandrum, Kerala",
    period: "Dec 2025 - Present",
    highlights: [
      "ERP Migration: Led end-to-end migration from Tally to Zoho Books across three entities, ensuring complete data integrity.",
      "Forensic Audit: Identified and mitigated internal fraud of ₹25 Lakhs (5% of 5 Cr Balance Sheet) through rigorous audit.",
      "Costing Frameworks: Developed standard cost budgets for RCC vs. Fibre Glass pools for data-driven pricing.",
      "Profitability Analysis: Modelled average profit margins across processes to drive strategic resource allocation.",
      "Compliance: Ensured 100% timely GST filings and maintained clean electronic credit ledgers."
    ]
  },
  {
    role: "Executive Accountant / Industrial Trainee",
    company: "Suresh Flavours and Extracts Pvt. Ltd.",
    location: "Bengaluru, Karnataka",
    period: "Apr 2023 - Jun 2024",
    highlights: [
      "Financial Analysis: Prepared monthly financial budgets, rolling forecasts, and standard cost variance analysis.",
      "Tax Compliance: Managed GST Input Tax Credit (ITC) reconciliation with 100% accuracy.",
      "Financial Operations: Processed AR/AP cycles, bank reconciliations, and physical stock audits."
    ]
  },
  {
    role: "Sales Person & Accounting Support",
    company: "SR Novelty and Sports",
    location: "Nellore, Andhra Pradesh",
    period: "Mar 2017 - Aug 2022",
    highlights: [
      "Inventory Management: Monitored stock levels, analyzed sales trends, and procured products.",
      "Financial Accounting: Managed daily transactions and maintained accurate financial records."
    ]
  }
];

const EDUCATION = [
  {
    degree: "CMA Final & Intermediate",
    institution: "Institute of Cost Accountants of India (ICMAI)",
    period: "Sep 2022 - Jul 2025",
    details: "Certificate of Merit | Final Score: 417/800 | Inter Score: 407/800 | All cleared in First Attempt."
  },
  {
    degree: "Bachelor of Business Administration (BBA)",
    institution: "Vikrama Simhapuri University, Nellore",
    period: "Aug 2022 - Apr 2025",
    details: "CGPA: 8.34/10"
  },
  {
    degree: "12th Grade",
    institution: "Narayana Junior College",
    period: "2022",
    details: "Score: 85.7% | Andhra Pradesh State Board"
  }
];

const CERTIFICATIONS = [
  "NISM Series-XV - Research Analyst Certification (SEBI Regulated)",
  "SAP FICO Certification",
  "Generative AI Masterclass & Claude 101",
  "SEBI Investor Awareness Certificate",
  "Accenture Strategy Consulting Job Simulation"
];

const AI_PROJECTS = [
  {
    title: "Professional Work Folio",
    desc: "A comprehensive Google Drive collection of my financial models, management reports, and professional deliverables.",
    link: "https://drive.google.com/drive/folders/1y45954ZDUKHKMcottRrPsgZYFW_V_RGJ?usp=drive_link"
  },
  {
    title: "CA, CMA, CS Resume Maker",
    desc: "AI Agent tailored to craft professional resumes for finance professionals.",
    link: "https://gemini.google.com/gem/12PJHy3MoIIFqVh71kj2ArkDubDwPkL3F?usp=sharing"
  },
  {
    title: "Indirect Tax Expert",
    desc: "AI Consultant agent providing insights and guidance on indirect taxation.",
    link: "https://gemini.google.com/gem/1hyVH5l1AS0aPR7Qg58PfCGBF9eCKLmpX?usp=sharing"
  },
  {
    title: "CMA Expert",
    desc: "Specialized Cost & Management Accounting AI assistant.",
    link: "https://gemini.google.com/gem/1kLHtCJiWugKqk27xXwnVnS9R-SQHNaTW?usp=sharing"
  },
  {
    title: "AI Coach",
    desc: "Interactive coaching agent for personal and professional development.",
    link: "https://gemini.google.com/gem/1TlLDcUCvnlZyyN39RluVZwBXOCyaVSaw?usp=sharing"
  },
  {
    title: "Vibe Based Perfume Picker",
    desc: "Creative prompt-based tool for fragrance recommendations.",
    link: "https://ai.studio/apps/dd0f58c6-db63-4112-87cb-7ae899230ae0"
  },
  {
    title: "Morning Motivator",
    desc: "AI studio app designed to generate custom daily motivation.",
    link: "https://ai.studio/apps/347b3ae7-a555-4772-8a6a-71b98f2890c4"
  }
];

const AWARDS = [
  "CMA Certificate of Merit (Final & Intermediate)",
  "Uncovered ₹25 Lakh Internal Fraud (Eternity Pools)",
  "1st Place Team Presentation Competition (University Level)",
  "Runner-Up - Young Manager Competition",
  "Developed Automated Stock Alert System"
];

const SOCIAL_LINKS = {
  linkedin: "https://www.linkedin.com/in/cma-narendra-kumar-596722287",
  github: "https://narendrakumar39062-afk.github.io/portfolio/",
  instagram: "https://www.instagram.com/the_macro_agent",
  youtube: "https://youtube.com/@themacroagent"
};

// --- COMPONENTS ---

const GoldDivider = () => (
  <div className="flex items-center justify-center w-full py-8">
    <div className="h-px bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent w-full max-w-3xl opacity-50"></div>
    <div className="w-3 h-3 rotate-45 border border-[#D4AF37] absolute bg-[#0a0c0a]"></div>
  </div>
);

const SectionHeading = ({ title, icon: Icon }) => (
  <div className="flex flex-col items-center mb-12">
    <div className="flex items-center gap-3 mb-4">
      {Icon && <Icon className="text-[#D4AF37] w-8 h-8" />}
      <h2 className="text-3xl md:text-5xl font-serif text-white tracking-wide uppercase">{title}</h2>
    </div>
    <div className="h-1 w-24 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"></div>
  </div>
);

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = ['About', 'Skills', 'Experience', 'Projects', 'Education', 'Contact'];

  return (
    <div className="min-h-screen bg-[#050605] text-[#e0e5e0] font-sans selection:bg-[#D4AF37] selection:text-black">
      {/* Import Serif Font */}
      <style dangerouslySetInnerHTML={{__html: `
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&display=swap');
        .font-serif { font-family: 'Playfair Display', serif; }
        .glass-nav { backdrop-filter: blur(10px); }
      `}} />

      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-[#0a0c0a]/90 glass-nav border-b border-[#D4AF37]/20 py-3' : 'bg-transparent py-5'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <a href="#" className="text-2xl font-serif font-bold text-[#D4AF37] tracking-widest">NK.</a>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex gap-8">
            {navLinks.map(link => (
              <a key={link} href={`#${link.toLowerCase()}`} className="text-sm uppercase tracking-widest hover:text-[#D4AF37] transition-colors">
                {link}
              </a>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden text-[#D4AF37]" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Nav */}
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-[#0a0c0a] border-b border-[#D4AF37]/20 flex flex-col items-center py-6 gap-6 md:hidden">
            {navLinks.map(link => (
              <a key={link} href={`#${link.toLowerCase()}`} onClick={() => setMobileMenuOpen(false)} className="text-lg uppercase tracking-widest hover:text-[#D4AF37] transition-colors">
                {link}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* HERO SECTION */}
      <header className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#050605] via-[#0d140d] to-[#050605] pt-20">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10 pointer-events-none"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#D4AF37]/5 rounded-full blur-[120px] pointer-events-none"></div>
        
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto flex flex-col items-center">
          <div className="mb-8 relative group">
            <div className="absolute inset-0 bg-[#D4AF37] rounded-full blur-lg opacity-30 group-hover:opacity-60 transition-opacity duration-500"></div>
            <img 
              src="https://lh3.googleusercontent.com/d/1YFQ3IyyCCHGbO64pWvHiGFXp5OTzWAd0" 
              alt="Narendra Kumar" 
              className="relative w-40 h-40 md:w-52 md:h-52 rounded-full object-cover border-2 border-[#D4AF37] shadow-[0_0_30px_rgba(212,175,55,0.4)] z-10"
              onError={(e) => { e.target.src = 'https://ui-avatars.com/api/?name=Narendra+Kumar&background=D4AF37&color=000'; }}
            />
          </div>
          <p className="text-[#D4AF37] tracking-[0.3em] uppercase text-sm md:text-base mb-6 font-medium">Excellence in Finance • Innovation in AI</p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-6 leading-tight">
            Narendra <span className="text-[#D4AF37]">Kumar</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 font-light mb-10">
            CMA (ICMAI) | Finance Manager | NISM Research Analyst
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4 md:gap-6">
            <a href="#contact" className="px-8 py-3 border border-[#D4AF37] bg-[#D4AF37]/10 text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black transition-all duration-300 uppercase tracking-widest text-sm font-semibold w-full sm:w-auto text-center">
              Get in Touch
            </a>
            <a href="https://drive.google.com/drive/folders/1y45954ZDUKHKMcottRrPsgZYFW_V_RGJ?usp=drive_link" target="_blank" rel="noopener noreferrer" className="px-8 py-3 border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black transition-all duration-300 uppercase tracking-widest text-sm font-semibold w-full sm:w-auto text-center">
              Work Folio
            </a>
            <a href="#projects" className="px-8 py-3 border border-white/20 text-white hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all duration-300 uppercase tracking-widest text-sm font-semibold w-full sm:w-auto text-center">
              AI Portfolio
            </a>
          </div>
        </div>
      </header>

      {/* ABOUT SECTION */}
      <section id="about" className="py-24 px-6 max-w-6xl mx-auto">
        <SectionHeading title="About Me" icon={Briefcase} />
        <div className="bg-[#0f170f] border border-[#D4AF37]/20 p-8 md:p-12 shadow-[0_0_40px_rgba(212,175,55,0.03)] rounded-sm relative overflow-hidden group hover:border-[#D4AF37]/40 transition-colors duration-500">
          <div className="absolute top-0 left-0 w-1 h-full bg-[#D4AF37]"></div>
          <p className="text-lg md:text-xl leading-relaxed text-gray-300 font-light text-justify">
            {ABOUT_TEXT}
          </p>
        </div>
      </section>

      <GoldDivider />

      {/* SKILLS & EXPERTISE */}
      <section id="skills" className="py-24 px-6 max-w-6xl mx-auto">
        <SectionHeading title="Core Expertise" icon={BrainCircuit} />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Finance Skills */}
          <div className="bg-[#0a0c0a] border border-[#2d3a1b] p-8 hover:border-[#D4AF37] transition-all duration-300 hover:-translate-y-2 group">
            <LineChart className="w-10 h-10 text-[#D4AF37] mb-6 group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-serif text-white mb-6 uppercase tracking-wider">Finance & Control</h3>
            <ul className="space-y-3">
              {SKILLS.finance.map((skill, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-400">
                  <ChevronRight className="w-5 h-5 text-[#D4AF37] shrink-0" />
                  <span className="text-sm">{skill}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Skills */}
          <div className="bg-[#0a0c0a] border border-[#2d3a1b] p-8 hover:border-[#D4AF37] transition-all duration-300 hover:-translate-y-2 group">
            <Calculator className="w-10 h-10 text-[#D4AF37] mb-6 group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-serif text-white mb-6 uppercase tracking-wider">Tech & Systems</h3>
            <ul className="space-y-3">
              {SKILLS.tech.map((skill, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-400">
                  <ChevronRight className="w-5 h-5 text-[#D4AF37] shrink-0" />
                  <span className="text-sm">{skill}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* AI Skills */}
          <div className="bg-[#0a0c0a] border border-[#2d3a1b] p-8 hover:border-[#D4AF37] transition-all duration-300 hover:-translate-y-2 group">
            <Code className="w-10 h-10 text-[#D4AF37] mb-6 group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-serif text-white mb-6 uppercase tracking-wider">AI & Innovation</h3>
            <ul className="space-y-3">
              {SKILLS.ai.map((skill, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-400">
                  <ChevronRight className="w-5 h-5 text-[#D4AF37] shrink-0" />
                  <span className="text-sm">{skill}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <GoldDivider />

      {/* EXPERIENCE SECTION */}
      <section id="experience" className="py-24 px-6 max-w-5xl mx-auto">
        <SectionHeading title="Professional Journey" icon={ShieldCheck} />
        <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-[#D4AF37] before:to-transparent">
          
          {EXPERIENCE.map((exp, index) => (
            <div key={index} className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active`}>
              
              {/* Timeline Marker */}
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-[#D4AF37] bg-[#050605] text-[#D4AF37] shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-[0_0_15px_rgba(212,175,55,0.4)] z-10">
                <Briefcase className="w-4 h-4" />
              </div>

              {/* Card */}
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-[#0c120c] p-6 border border-[#2d3a1b] hover:border-[#D4AF37] transition-colors duration-300 shadow-lg">
                <div className="flex flex-col mb-4">
                  <span className="text-[#D4AF37] text-sm font-mono tracking-wider mb-2">{exp.period}</span>
                  <h3 className="text-2xl font-serif text-white">{exp.role}</h3>
                  <h4 className="text-gray-400 text-sm mt-1">{exp.company} • {exp.location}</h4>
                </div>
                <ul className="space-y-2 text-gray-300 text-sm font-light">
                  {exp.highlights.map((item, i) => (
                    <li key={i} className="pl-4 relative before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:bg-[#D4AF37] before:rounded-full">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      <GoldDivider />

      {/* AI PROJECTS PORTFOLIO */}
      <section id="projects" className="py-24 px-6 max-w-6xl mx-auto bg-[#080b08]">
        <SectionHeading title="Work Folio & AI Agents" icon={Code} />
        <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
          A comprehensive portfolio of my professional financial deliverables, alongside custom AI agents designed to automate workflows and assist in professional development.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {AI_PROJECTS.map((project, index) => (
            <a 
              key={index} 
              href={project.link}
              target="_blank"
              rel="noopener noreferrer" 
              className="block group bg-[#0d140d] border border-[#2d3a1b] hover:border-[#D4AF37] p-6 transition-all duration-300 hover:-translate-y-2 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <ExternalLink className="text-[#D4AF37] w-5 h-5" />
              </div>
              <h3 className="text-xl font-serif text-white mb-3 group-hover:text-[#D4AF37] transition-colors pr-8">{project.title}</h3>
              <p className="text-gray-400 text-sm font-light">{project.desc}</p>
            </a>
          ))}
        </div>
      </section>

      <GoldDivider />

      {/* EDUCATION & AWARDS */}
      <section id="education" className="py-24 px-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          
          {/* Education */}
          <div>
            <div className="flex items-center gap-3 mb-10 border-b border-[#2d3a1b] pb-4">
              <GraduationCap className="w-8 h-8 text-[#D4AF37]" />
              <h2 className="text-3xl font-serif text-white tracking-widest uppercase">Education</h2>
            </div>
            <div className="space-y-8">
              {EDUCATION.map((edu, index) => (
                <div key={index} className="relative pl-6 border-l border-[#D4AF37]/30">
                  <div className="absolute left-[-5px] top-1.5 w-2 h-2 bg-[#D4AF37] rounded-full"></div>
                  <h3 className="text-xl text-white font-serif mb-1">{edu.degree}</h3>
                  <p className="text-[#D4AF37] text-sm mb-2">{edu.institution} | {edu.period}</p>
                  <p className="text-gray-400 text-sm font-light">{edu.details}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Awards & Certs */}
          <div>
            <div className="flex items-center gap-3 mb-10 border-b border-[#2d3a1b] pb-4">
              <Award className="w-8 h-8 text-[#D4AF37]" />
              <h2 className="text-3xl font-serif text-white tracking-widest uppercase">Achievements</h2>
            </div>
            
            <h3 className="text-lg text-[#D4AF37] font-serif mb-4 uppercase tracking-wider">Key Awards</h3>
            <ul className="space-y-3 mb-10">
              {AWARDS.map((award, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-300">
                  <Award className="w-5 h-5 text-[#D4AF37]/70 shrink-0" />
                  <span className="text-sm font-light">{award}</span>
                </li>
              ))}
            </ul>

            <h3 className="text-lg text-[#D4AF37] font-serif mb-4 uppercase tracking-wider">Certifications</h3>
            <ul className="space-y-3">
              {CERTIFICATIONS.map((cert, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-300">
                  <ShieldCheck className="w-5 h-5 text-[#D4AF37]/70 shrink-0" />
                  <span className="text-sm font-light">{cert}</span>
                </li>
              ))}
            </ul>
          </div>
          
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="py-24 px-6 bg-[#0a0c0a] border-t border-[#D4AF37]/20">
        <div className="max-w-4xl mx-auto text-center">
          <SectionHeading title="Get In Touch" />
          <p className="text-gray-400 mb-12 text-lg">
            Open to roles in Bangalore, Chennai, Hyderabad, and fully remote opportunities. Also available for remote consulting in AI and Finance. Let's discuss how my expertise can drive value for your organization.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <a href="mailto:narendrakumar39062@gmail.com" className="flex flex-col items-center p-6 border border-[#2d3a1b] hover:border-[#D4AF37] bg-[#050605] transition-colors group">
              <Mail className="w-8 h-8 text-[#D4AF37] mb-4 group-hover:scale-110 transition-transform" />
              <span className="text-white text-sm">narendrakumar39062@gmail.com</span>
            </a>
            <div className="flex flex-col items-center p-6 border border-[#2d3a1b] bg-[#050605]">
              <Phone className="w-8 h-8 text-[#D4AF37] mb-4" />
              <span className="text-white text-sm">+91 93985 87829</span>
            </div>
            <div className="flex flex-col items-center justify-center p-6 border border-[#2d3a1b] bg-[#050605]">
              <MapPin className="w-8 h-8 text-[#D4AF37] mb-4" />
              <span className="text-white text-sm text-center leading-relaxed">
                Bangalore / Chennai / Hyderabad / Remote <br/>
                <span className="text-[#D4AF37] font-medium">Consulting (Remote Only): AI & Finance</span>
              </span>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6">
            <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-[#D4AF37]/50 flex items-center justify-center text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black transition-all">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-[#D4AF37]/50 flex items-center justify-center text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black transition-all">
              <Github className="w-5 h-5" />
            </a>
            <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-[#D4AF37]/50 flex items-center justify-center text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black transition-all">
              <Instagram className="w-5 h-5" />
            </a>
            <a href={SOCIAL_LINKS.youtube} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-[#D4AF37]/50 flex items-center justify-center text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black transition-all">
              <Youtube className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#050605] py-8 text-center border-t border-[#D4AF37]/10">
        <p className="text-[#D4AF37] font-serif text-xl tracking-widest mb-2">NK.</p>
        <p className="text-gray-500 text-xs tracking-wider uppercase">
          &copy; {new Date().getFullYear()} Narendra Kumar. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
}
