import { useState, useEffect } from 'react';
import { ChevronDown, Target, TrendingUp, Mail, Phone, Menu, Linkedin, Award, Users, Lightbulb, Rocket, ExternalLink, X } from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isVisible, setIsVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  useEffect(() => {
    setIsVisible(true);

    const handleScroll = () => {
      const sections = ['hero', 'summary', 'experience', 'projects', 'skills', 'education', ...(papers.length > 0 ? ['papers'] : []), 'certifications', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const summary = "Estimator (Civil / Construction) specializing in quantity take-offs, BOQs, and cost estimation for residential and infrastructure projects, supporting tendering and bid analysis. Delivered take-offs and estimates for 10+ projects, improving cost accuracy by 15-20% and reducing budget variances through detailed scope and change order analysis. Experienced in AutoCAD, ETABS, STAAD Pro, and advanced Excel for cost control, procurement coordination, and project cost management; EIT Eligible in Canada.";

  const experience = [
    {
      company: "Ambience Builders",
      role: "Civil Design Engineer (Structural)",
      location: "",
      dates: "May 2022 – Jul 2023",
      highlights: [
        "Executed detailed quantity take-offs and BOQ preparation for concrete, reinforcement, excavation, and finishes across 10+ building construction projects, improving estimate accuracy by 15-20%.",
        "Developed cost estimates, budgets, and tender documents for 10+ construction projects, supporting bid submissions and improving pricing accuracy by 15%.",
        "Analyzed 25+ subcontractor quotations and bid comparisons, identifying cost-saving opportunities and reducing procurement cost variance by 10-12%.",
        "Tracked change orders, scope variations, and cost impacts across 10+ projects, reducing budget deviations by 12-15%.",
        "Reconciled on-site installed quantities against BOQs and approved drawings, reducing billing discrepancies by 10-15% and strengthening cost control.",
        "Produced AutoCAD-based drawings and construction documentation, aligning scope definitions with estimation inputs and ensuring design-cost consistency."
      ]
    },
    {
      company: "Ambience Builders",
      role: "Civil Engineer",
      location: "",
      dates: "Jun 2018 – Nov 2020",
      highlights: [
        "Conducted weekly site inspections to track material usage, verify work progress, and support accurate monthly billing documentation.",
        "Managed cost tracking, billing verification, and project variation documentation, reducing invoice discrepancies by 10-15%.",
        "Coordinated with contractors, consultants, and site teams to resolve technical and cost-related queries, accelerating issue resolution timelines by 15%.",
        "Monitored project progress, labor productivity, and material usage against project schedules, supporting cost forecasting, resource planning, and schedule variance reduction by 10%.",
        "Generated and reviewed AutoCAD drawings and RFIs, ensuring alignment between design intent, execution scope, and cost estimation inputs."
      ]
    }
  ];

  const projects = [
    {
      title: "Quantity Take-Offs & BOQ Preparation",
      subtitle: "Ambience Builders · 10+ Building Construction Projects",
      category: "Estimation",
      introduction: "Executed detailed quantity take-offs and BOQ preparation for concrete, reinforcement, excavation, and finishes across 10+ building construction projects.",
      problem: "Accurate bid submissions and cost planning required detailed scope measurement, consistent quantity tracking, and alignment between drawings, BOQs, and field execution.",
      objective: "Improve estimate accuracy and support tendering by producing reliable take-offs, BOQs, and cost documentation.",
      methodology: [
        "Reviewed AutoCAD drawings and construction documentation to define measurable scope.",
        "Prepared BOQs for concrete, reinforcement, excavation, and finishes.",
        "Validated quantities against approved drawings and site-installed work."
      ],
      results: [
        "Improved estimate accuracy by 15-20%.",
        "Reduced billing discrepancies by 10-15%.",
        "Strengthened design-cost consistency across project documentation."
      ],
      conclusion: "Delivered dependable quantity and BOQ inputs that supported stronger tendering, billing, and cost control.",
      link: ""
    },
    {
      title: "Tender Cost Estimation & Bid Support",
      subtitle: "Ambience Builders · Budgets, Tender Documents & Quote Analysis",
      category: "Tendering",
      introduction:
        "Developed cost estimates, budgets, and tender documents for 10+ construction projects while analyzing subcontractor quotations and bid comparisons.",
      problem:
        "Tender submissions required clear pricing inputs, subcontractor quote evaluation, and cost-saving analysis under project deadlines.",
      objective:
        "Support accurate bid submissions and reduce procurement cost variance through structured estimation and quote comparison.",
      methodology: [
        "Prepared project budgets, cost estimates, and tender documents.",
        "Analyzed 25+ subcontractor quotations and bid comparisons.",
        "Identified pricing gaps, procurement risks, and cost-saving opportunities."
      ],
      results: [
        "Improved pricing accuracy by 15%.",
        "Reduced procurement cost variance by 10-12%.",
        "Supported stronger bid analysis and tender submission decisions."
      ],
      conclusion:
        "Helped improve tender accuracy and procurement decisions through disciplined cost estimation and quote analysis.",
      link: ""
    },
    {
      title: "Change Order & Cost Control Tracking",
      subtitle: "Ambience Builders · Scope Variations, Billing & Cost Reporting",
      category: "Cost Control",
      introduction: "Tracked change orders, scope variations, cost impacts, billing verification, and project variation documentation across construction projects.",
      problem: "Project changes and field variations created risk of budget deviations, billing discrepancies, and cost forecasting gaps.",
      objective: "Improve cost control by monitoring scope changes, installed quantities, invoices, and schedule-related resource usage.",
      methodology: [
        "Tracked change orders, scope variations, cost impacts, and project variation documents.",
        "Reconciled installed quantities against BOQs and approved drawings.",
        "Monitored labor productivity, material usage, and progress against project schedules."
      ],
      results: [
        "Reduced budget deviations by 12-15%.",
        "Reduced invoice discrepancies by 10-15%.",
        "Supported cost forecasting, resource planning, and schedule variance reduction by 10%."
      ],
      conclusion: "Strengthened construction cost control by connecting field progress, billing verification, and change documentation.",
      link: ""
    },
    {
      title: "Construction Documentation & Coordination",
      subtitle: "Ambience Builders · RFIs, Drawings & Site Coordination",
      category: "Documentation",
      introduction: "Generated and reviewed AutoCAD drawings, RFIs, technical documentation, and construction progress reports while coordinating with contractors, consultants, and site teams.",
      problem: "Cost estimation and site execution needed consistent documentation alignment between design intent, field changes, and procurement scope.",
      objective: "Improve technical coordination and keep estimation inputs aligned with construction documentation and site progress.",
      methodology: [
        "Produced AutoCAD-based drawings and construction documentation.",
        "Generated and reviewed RFIs to clarify design and execution scope.",
        "Coordinated with contractors, consultants, and site teams on technical and cost-related queries."
      ],
      results: [
        "Accelerated issue resolution timelines by 15%.",
        "Improved alignment between design intent, execution scope, and estimation inputs.",
        "Supported accurate monthly billing documentation and progress reporting."
      ],
      conclusion: "Improved project coordination by keeping documentation, site execution, and cost inputs connected.",
      link: ""

    }
  ];

  const skillCategories = [
    {
      icon: Target,
      title: 'Construction Estimation',
      skills: ['Quantity Take-Offs', 'BOQ Preparation', 'Cost Estimation', 'Budgeting', 'Tender Preparation', 'Bid Analysis', 'Subcontractor Quote Comparison']
    },
    {
      icon: TrendingUp,
      title: 'Cost Control',
      skills: ['Change Order Management', 'Scope Variation Analysis', 'Cost Tracking', 'Variance Monitoring', 'Billing Verification', 'Cost Reporting']
    },
    {
      icon: Users,
      title: 'Documentation & Coordination',
      skills: ['Contract Administration Support', 'RFIs', 'Shop Drawing Review', 'Technical Documentation', 'Progress Reporting', 'Site Coordination', 'Field Verification', 'Resource Planning', 'Procurement Coordination', 'Stakeholder Communication']
    },
    {
      icon: Lightbulb,
      title: 'Design & Project Tools',
      skills: ['AutoCAD', 'Revit', 'Structural Drawing Review', 'Construction Drawings', 'ETABS', 'STAAD Pro', 'Advanced MS Excel', 'MS Project', 'Primavera P6', 'Cost Tracking Sheets', 'Documentation Reports']
    }
  ];

  const education = [
    {
      school: "Humber College",
      degree: "Certificate in Design Foundation",
      location: "ON, Canada",
      dates: "Sep 2024 – Apr 2025",
      details: "Certificate program focused on design fundamentals and technical foundations."
    },
    {
      school: "Canadore College",
      degree: "Postgraduate Certificate in Construction Project Management",
      location: "ON, Canada",
      dates: "Sep 2023 – Apr 2024",
      details: "Postgraduate training in construction project management, planning, and project controls."
    },
    {
      school: "EASA College of Engineering and Technology",
      degree: "Master of Engineering in Structural Engineering",
      location: "Tamil Nadu, India",
      dates: "Dec 2020 – Apr 2022",
      details: "Graduate education in structural engineering, analysis, and design."
    },
    {
      school: "MES College of Engineering and Technology",
      degree: "Bachelor of Technology in Civil Engineering",
      location: "India",
      dates: "Aug 2014 – May 2018",
      details: "Undergraduate education in civil engineering, construction, and structural fundamentals."
    }
  ];
  const papers = [
    // Add your published papers below. Example format:
    // { title: "Paper Title", publication: "Journal/Conference Name", year: "2024", link: "https://..." },
  ];

  const certifications = [
    {
    title: "WHMIS Certified",
    platform: "Workplace Hazardous Materials Information System",
    description: "Certified in Canadian workplace hazardous materials safety and compliance.",
    link: ""
    },
    {
    title: "OACETT Associate Member",
    platform: "Ontario Association of Certified Engineering Technicians and Technologists",
    description: "Associate member with professional alignment to Ontario engineering technology standards.",
    link: ""
    }
    ];

  return (
    <div className="min-h-screen bg-cream overflow-x-auto">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-cream/95 backdrop-blur-md border-b border-brown/20">
        <div className="max-w-6xl mx-auto px-6 py-4">

          <div className="flex items-center justify-between">

            {/* Logo */}
            <div className="text-xl md:text-2xl font-display text-black tracking-wide">
              JAYADURGA 
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {[
                { id: 'hero', label: 'Home' },
                { id: 'summary', label: 'Summary' },
                { id: 'experience', label: 'Experience' },
                { id: 'projects', label: 'Projects' },
                { id: 'skills', label: 'Skills' },
                { id: 'education', label: 'Education' },
                ...(papers.length > 0 ? [{ id: 'papers', label: 'Papers' }] : []),
                { id: 'certifications', label: 'Certificate' },
                { id: 'contact', label: 'Contact' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-light tracking-wide transition-colors duration-300 ${activeSection === item.id
                    ? "text-black font-medium"
                    : "text-brown hover:text-black"
                    }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile Hamburger */}
            <button
              className="md:hidden text-black"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>

          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 flex flex-col space-y-4 border-t border-brown/20 pt-4">

              {[
                { id: 'hero', label: 'Home' },
                { id: 'summary', label: 'Summary' },
                { id: 'experience', label: 'Experience' },
                { id: 'projects', label: 'Projects' },
                { id: 'skills', label: 'Skills' },
                { id: 'education', label: 'Education' },
                ...(papers.length > 0 ? [{ id: 'papers', label: 'Papers' }] : []),
                { id: 'certifications', label: 'Certificate' },
                { id: 'contact', label: 'Contact' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    scrollToSection(item.id)
                    setMobileMenuOpen(false)
                  }}
                  className="text-left text-brown hover:text-black transition"
                >
                  {item.label}
                </button>
              ))}

            </div>
          )}

        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="pt-32 pb-20 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <div className={`text-center transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>

            <div className="mb-12">
              <img
                src="images/image.png"
                alt="Jayadurga Karattukuzhiyil"
                className="w-36 h-36 rounded-full mx-auto mb-6 object-cover border-4 border-brown/30 shadow-lg"
              />
            </div>
            <h1 className="text-5xl md:text-6xl font-display text-black mb-6 tracking-wide">
              JAYADURGA 
            </h1>
            <div className="text-lg text-brown mb-2 font-light tracking-widest">
              Estimator (Civil / Construction) · Quantity Take-Offs, BOQ & Cost Estimation · EIT Eligible
            </div>
            <div className="text-sm uppercase tracking-[0.3em] text-brown/80 mb-1">
              ETOBICOKE, ON, CANADA · AUTHORIZED TO WORK IN CANADA
            </div>
            <div className="w-24 h-0.5 bg-brown mx-auto mb-10"></div>
            <p className="text-lg text-brown mb-10 max-w-4xl mx-auto leading-relaxed font-light">
              {summary}
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button
                onClick={() => scrollToSection('experience')}
                className="bg-black text-white px-10 py-4 font-light tracking-wide hover:bg-brown transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                🚀 VIEW EXPERIENCE
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="border border-black text-black px-10 py-4 font-light tracking-wide hover:bg-black hover:text-white transition-all duration-300"
              >
                📬 CONTACT
              </button>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-16 text-center">
            {[
              { label: 'PROJECTS ESTIMATED', value: '10+', detail: 'Residential & Infrastructure' },
              { label: 'ESTIMATE ACCURACY IMPROVED', value: '15-20%', detail: 'Take-Offs & BOQs' },
              { label: 'BUDGET VARIANCE REDUCED', value: '12-15%', detail: 'Scope & Change Orders' }
            ].map((stat, index) => (
              <div key={index} className="bg-white p-6 rounded-sm shadow-sm border border-brown/10">
                <div className="text-xs tracking-widest text-brown/70 mb-2">{stat.label}</div>
                <div className="text-3xl font-display text-black mb-1">{stat.value}</div>
                <div className="text-sm text-brown font-light">{stat.detail}</div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <ChevronDown
              className="w-6 h-6 text-brown/60 mx-auto animate-bounce cursor-pointer hover:text-black transition-colors"
              onClick={() => scrollToSection('summary')}
            />
          </div>
        </div>
      </section>

      {/* Summary Section */}
      <section id="summary" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-display text-black mb-8 tracking-wide">SUMMARY</h2>
            <p className="text-lg text-brown max-w-3xl mx-auto font-light">
              Civil and construction estimator specializing in quantity take-offs, BOQ preparation, cost estimation, tender support, bid analysis, cost control, and construction documentation.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                icon: Target,
                title: 'Quantity Take-Offs',
                detail: 'Prepare detailed take-offs and BOQs for concrete, reinforcement, excavation, and finishes, improving estimate accuracy across building construction projects.'
              },
              {
                icon: Rocket,
                title: 'Cost Control',
                detail: 'Track budgets, billing, change orders, scope variations, installed quantities, and cost impacts to reduce deviations and strengthen project cost management.'
              },
              {
                icon: Lightbulb,
                title: 'Construction Tools',
                detail: 'Use AutoCAD, Revit, ETABS, STAAD Pro, Primavera P6, MS Project, and advanced Excel to support estimating, documentation, planning, and project coordination.'
              }
            ].map((card, index) => (
              <div key={index} className="bg-cream p-8 rounded-sm shadow-sm border border-brown/10 text-center">
                <div className="w-14 h-14 bg-black mx-auto mb-6 flex items-center justify-center">
                  <card.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-display text-black mb-4 tracking-wide">{card.title.toUpperCase()}</h3>
                <p className="text-brown leading-relaxed font-light">{card.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-display text-black mb-8 tracking-wide">WORK EXPERIENCE</h2>
            <div className="w-16 h-0.5 bg-brown mx-auto mb-8"></div>
            <p className="text-lg text-brown max-w-3xl mx-auto font-light">
              Civil engineering and construction estimation experience across quantity take-offs, BOQs, tendering, cost control, billing verification, and site coordination.
            </p>
          </div>
          <div className="space-y-10">
            {experience.map((role, index) => (
              <div key={index} className="bg-white p-8 rounded-sm shadow-sm border border-brown/10">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-display text-black tracking-wide">{role.role}</h3>
                    <p className="text-brown font-medium">{role.company}</p>
                  </div>
                  <div className="text-sm text-brown/80 font-light mt-2 md:mt-0">
                    {role.location ? `${role.location} · ${role.dates}` : role.dates}
                  </div>
                </div>
                <ul className="space-y-3">
                  {role.highlights.map((highlight, i) => (
                    <li key={i} className="text-brown leading-relaxed font-light flex items-start">
                      <span className="text-brown mr-3">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
                {role.highlightsLink && (
                  <div className="mt-4 flex items-center text-brown hover:text-black transition-colors hover:underline">
                    <span className="text-sm font-light">View Highlights</span>
                    <a href={role.highlightsLink} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 ml-2 inline-block" />
                    </a>
                  </div>
                )}

                {role.certificateLink && (
                  <div className="mt-2 flex items-center text-brown hover:text-black transition-colors hover:underline">
                    <span className="text-sm font-light">View Certificate</span>
                    <a href={role.certificateLink} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 ml-2 inline-block" />
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-display text-black mb-8 tracking-wide">PROJECTS</h2>
            <div className="w-16 h-0.5 bg-brown mx-auto mb-8"></div>
            <p className="text-lg text-brown max-w-2xl mx-auto font-light">
              Construction estimation, tender support, cost control, documentation, and site coordination work across building construction projects.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-cream p-6 rounded-sm hover:shadow-lg transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
                onClick={() => setSelectedProject(index)}
              >
                <div className="mb-3">
                  <span className="text-xs font-medium text-brown bg-white px-3 py-1 tracking-wide">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-xl font-display text-black mb-3 tracking-wide leading-tight">
                  {project.title}
                </h3>
                <p className="text-sm text-brown mb-4 font-light">
                  {project.subtitle}
                </p>
                <p className="text-brown leading-relaxed font-light text-sm line-clamp-3">
                  {project.introduction}
                </p>
                
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-brown font-light">
              Interested in estimation, BOQ, tendering, or cost-control details?
              <button
                onClick={() => scrollToSection('contact')}
                className="text-black ml-1 font-regular italic"
              >
                Reach out for comprehensive project details.
              </button>
            </p>
          </div>
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject !== null && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white max-w-4xl max-h-[90vh] overflow-y-auto rounded-sm">
            <div className="sticky top-0 bg-white border-b border-brown/20 p-6 flex items-center justify-between">
              <h2 className="text-2xl font-display text-black tracking-wide">
                {projects[selectedProject].title}
              </h2>
              <button
                onClick={() => setSelectedProject(null)}
                className="text-brown hover:text-black transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="p-6 space-y-8">
              <div>
                <span className="text-sm font-medium text-brown bg-cream px-3 py-1 tracking-wide">
                  {projects[selectedProject].category}
                </span>
                <p className="text-brown font-light mt-2">
                  {projects[selectedProject].subtitle}
                </p>
              </div>

              <div>
                <h3 className="text-lg font-display text-black mb-3 tracking-wide">INTRODUCTION</h3>
                <p className="text-brown leading-relaxed font-light">
                  {projects[selectedProject].introduction}
                </p>
              </div>

              <div>
                <h3 className="text-lg font-display text-black mb-3 tracking-wide">PROBLEM STATEMENT</h3>
                <p className="text-brown leading-relaxed font-light">
                  {projects[selectedProject].problem}
                </p>
              </div>

              <div>
                <h3 className="text-lg font-display text-black mb-3 tracking-wide">OBJECTIVE</h3>
                <p className="text-brown leading-relaxed font-light">
                  {projects[selectedProject].objective}
                </p>
              </div>

              <div>
                <h3 className="text-lg font-display text-black mb-3 tracking-wide">METHODOLOGY</h3>
                <ul className="space-y-2">
                  {projects[selectedProject].methodology.map((item, index) => (
                    <li key={index} className="text-brown leading-relaxed font-light flex items-start">
                      <span className="text-brown mr-3">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-display text-black mb-3 tracking-wide">RESULTS</h3>
                <ul className="space-y-2">
                  {projects[selectedProject].results.map((item, index) => (
                    <li key={index} className="text-brown leading-relaxed font-light flex items-start">
                      <span className="text-brown mr-3">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-display text-black mb-3 tracking-wide">CONCLUSION</h3>
                <p className="text-brown leading-relaxed font-light">
                  {projects[selectedProject].conclusion}
                </p>
              </div>
              {projects[selectedProject].link && (
                <div>
                  <h3 className="text-lg font-display text-black mb-3 tracking-wide">
                    {projects[selectedProject].subtitle?.includes('Capstone') ? 'PRESENTATION DECK (PDF)' : 'LINK'}
                  </h3>
                  <a
                    href={projects[selectedProject].link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brown leading-relaxed font-light hover:text-black transition-colors hover:underline inline-flex items-center"
                  >
                    {projects[selectedProject].subtitle?.includes('Capstone') ? 'View Presentation Deck (PDF)' : 'View Project'}
                    <ExternalLink className="w-4 h-4 ml-2 inline-block" />
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Skills Section */}
      <section id="skills" className="py-24 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-display text-black mb-8 tracking-wide">SKILLS</h2>
            <div className="w-16 h-0.5 bg-brown mx-auto mb-8"></div>
            <p className="text-lg text-brown max-w-2xl mx-auto font-light">
              Construction estimation, cost control, documentation, coordination, and project tool expertise
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {skillCategories.map((category, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-black mx-auto mb-8 flex items-center justify-center">
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-display text-black mb-6 tracking-wide">{category.title.toUpperCase()}</h3>
                <ul className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <li key={skillIndex} className="text-sm text-brown font-light">
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section id="education" className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-display text-black mb-6 tracking-wide">EDUCATION</h2>
            <div className="w-16 h-0.5 bg-brown mx-auto mb-6"></div>
          </div>
          <div className="space-y-8">
            {education.map((edu, index) => (
              <div key={index} className="bg-cream p-8 rounded-sm shadow-sm border border-brown/10">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-display text-black tracking-wide">{edu.school}</h3>
                    <p className="text-brown font-medium">{edu.degree}</p>
                  </div>
                  <div className="text-sm text-brown/80 font-light mt-2 md:mt-0">
                    {edu.location} · {edu.dates}
                  </div>
                </div>
                <p className="text-brown leading-relaxed font-light">
                  {edu.details}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Papers Published Section */}
      {papers.length > 0 && (
      <section id="papers" className="py-24 bg-cream">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-display text-black mb-6 tracking-wide">PAPERS PUBLISHED</h2>
            <div className="w-16 h-0.5 bg-brown mx-auto mb-6"></div>
            <p className="text-lg text-brown max-w-2xl mx-auto font-light">
              Research and publications in product management, AI, and technology.
            </p>
          </div>
          <div className="space-y-8">
            {papers.map((paper, index) => (
              <div key={index} className="bg-white p-8 rounded-sm shadow-sm border border-brown/10">
                <h3 className="text-xl font-display text-black tracking-wide mb-2">{paper.title}</h3>
                <p className="text-brown font-medium mb-2">{paper.publication} · {paper.year}</p>
                <a
                  href={paper.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brown font-light hover:text-black transition-colors hover:underline inline-flex items-center"
                >
                  View Paper <ExternalLink className="w-4 h-4 ml-2 inline-block" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
      )}

      {/* Certifications Section */}
      <section id="certifications" className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-display text-black mb-6 tracking-wide">CERTIFICATIONS</h2>
            <div className="w-16 h-0.5 bg-brown mx-auto mb-6"></div>
          </div>
          <div className="space-y-8">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-cream p-8 rounded-sm shadow-sm border border-brown/10">
                <h3 className="text-2xl font-display text-black tracking-wide">{cert.title}</h3>
                <p className="text-brown font-medium">{cert.platform}</p>
                <p className="text-brown leading-relaxed font-light">{cert.description}</p>
                {cert.link && (
                  <a href={cert.link} target="_blank" rel="noopener noreferrer" className="text-brown leading-relaxed font-light hover:text-black transition-colors hover:underline">
                    View Certificate <ExternalLink className="w-4 h-4 ml-2 inline-block" />
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Contact Section */}
      <section id="contact" className="py-24 bg-black text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-display mb-8 tracking-wide">CONTACT</h2>
            <div className="w-16 h-0.5 bg-brown mx-auto mb-8"></div>
            <p className="text-xl text-white/80 max-w-3xl mx-auto font-light">
              Let's discuss civil estimation, quantity take-offs, BOQ preparation, tender support, cost control, or construction coordination opportunities.
            </p>
          </div>

          <div className="flex flex-col items-center space-y-8 max-w-md mx-auto">
            <div className="flex items-center">
              <Phone className="w-6 h-6 text-brown mr-6" />
              <a
                href="tel:+14376632299"
                className="text-white/80 font-light hover:text-white transition-colors"
              >
                +1 437 663 2299
              </a>
            </div>
            <div className="flex items-center">
              <Linkedin className="w-6 h-6 text-brown mr-6" />
              <a
                href="https://www.linkedin.com/in/jayadurga-karattukuzhiyil-942174249"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 font-light hover:text-white transition-colors"
              >
                LinkedIn
              </a>
            </div>
            <div className="flex items-center">
              <Mail className="w-6 h-6 text-brown mr-6" />
              <a
                href="mailto:jayadurgajayk@gmail.com"
                className="text-white/80 font-light hover:text-white transition-colors"
              >
                jayadurgajayk@gmail.com
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brown text-white/80 py-8">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="font-light tracking-wide">
            © 2025 Jayadurga Karattukuzhiyil · Civil / Construction Estimation.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
