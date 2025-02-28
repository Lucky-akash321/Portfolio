import React, { useEffect, useState } from 'react';
import { Link as ScrollLink, Element } from 'react-scroll';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Parallax } from 'react-parallax';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Tilt } from 'react-tilt';
import Particles from 'react-particles';
import { loadSlim } from 'tsparticles-slim';
import { Engine } from 'tsparticles-engine';
import Lottie from 'lottie-react';
import { useInView } from 'react-intersection-observer';
import { 
  Github, 
  Linkedin, 
  Instagram, 
  FileText, 
  Mail, 
  Phone, 
  Send, 
  ExternalLink,
  ChevronDown,
  Menu,
  X
} from 'lucide-react';

// Import Lottie animations
import dataAnimation from './assets/data-animation.json';
import contactAnimation from './assets/contact-animation.json';

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.9]);
  
  const particlesInit = async (engine: Engine) => {
    await loadSlim(engine);
  };

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    const handleScroll = () => {
      const reveals = document.querySelectorAll('.reveal');
      
      for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = reveals[i].getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
          reveals[i].classList.add('active');
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const certifications = [
    {
      title: "AWS Certified Data Engineer Associate",
      link: "https://www.credly.com/badges/171c4e95-dd0c-473f-9caf-3a101d802e12/linked_in_profile",
      image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
    },
    {
      title: "Microsoft Certified: Azure Administrator Associate",
      link: "https://learn.microsoft.com/api/credentials/share/en-gb/AkashDevulapally-7310/1F050D606C18FD?sharingId",
      image: "https://images.unsplash.com/photo-1535303311164-664fc9ec6532?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
    },
    {
      title: "Microsoft Certified: Azure Data Engineer Associate",
      link: "https://learn.microsoft.com/api/credentials/share/en-gb/AkashDevulapally-7310/D26B5B6E5FAABA2D?sharingId",
      image: "https://images.unsplash.com/photo-1557853197-aefb550b6fdc?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
    },
    {
      title: "IBM Certified Data Science Professional",
      link: "https://www.coursera.org/account/accomplishments/professional-cert/certificate/G4Z7ERP5VARZ",
      image: "https://images.unsplash.com/photo-1489875347897-49f64b51c1f8?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
    },
    {
      title: "IBM Certified AI Developer",
      link: "https://www.coursera.org/account/accomplishments/professional-cert/LMRJU369BU5Q",
      image: "https://images.unsplash.com/photo-1591453089816-0fbb971b454c?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
    }
  ];

  const projects = [
    {
      title: "Real-Time Stock Market Data with AWS and Kafka",
      description: "Built a real-time data pipeline using Kafka and AWS services to process and analyze stock market data.",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      link: "https://github.com/Lucky-akash321/Real-Time-Stock-Market-Data-with-Kafka-and-AWS"
    },
    {
      title: "Hands-On Introduction: Data Engineering",
      description: "Comprehensive guide and implementation of data engineering principles and practices.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      link: "https://github.com/Lucky-akash321/Hands-on-Data-Engineering"
    },
    {
      title: "Personalized Healthcare Recommendation System",
      description: "ML-based system that provides personalized healthcare recommendations based on patient data.",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      link: "https://github.com/Lucky-akash321/Personalized-Healthcare-Recommendation-System"
    },
    {
      title: "Disaster Message Classifier",
      description: "NLP model that classifies disaster messages for emergency response prioritization.",
      image: "https://images.unsplash.com/photo-1498354178607-a79df2916198?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      link: "https://github.com/Lucky-akash321/Disaster-Message-Classifier"
    },
    {
      title: "Financial Data Analytics and Forecast Model",
      description: "Time series forecasting model for financial data analysis and prediction.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      link: "https://github.com/Lucky-akash321/Financial-Data-Analytics-and-Forecasting-Model"
    },
    {
      title: "Data Pipeline Automation with GitHub Actions",
      description: "Automated data pipeline using GitHub Actions for CI/CD integration.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      link: "https://github.com/Lucky-akash321/Data-Pipeline-Automation-with-GitHub-Actions"
    }
  ];

  const blogs = [
    {
      title: "What If Historical Figures Had GitHub Profiles?",
      description: "A quirky way to discuss software engineering principles through the lens of historical figures.",
      image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      link: "https://medium.com/@akashdvp99/what-if-historical-figures-had-github-profiles-3f15b2256ed6"
    },
    {
      title: "Can We Decode Human Emotions Using Only Spotify Playlists?",
      description: "Exploring the intersection of music data and emotional analysis.",
      image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      link: "https://medium.com/@akashdvp99/can-we-decode-human-emotions-using-only-spotify-playlists-91894bd59af8"
    },
    {
      title: "What If AI Played Cricket?",
      description: "Predicting match outcomes like a pro using machine learning and data analysis.",
      image: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      link: "https://medium.com/@akashdvp99/what-if-ai-played-cricket-predicting-match-outcomes-like-a-pro-fc0e8bf9b79c"
    },
    {
      title: "How Would Sherlock Holmes Solve Data Science Problems?",
      description: "Applying detective-like thinking to data science challenges and problem-solving.",
      image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      link: "https://medium.com/@akashdvp99/how-would-sherlock-holmes-solve-data-science-problems-744131b9a7c4"
    }
  ];

  const extracurricular = [
    {
      title: "College Cricket Team Captain",
      description: "Led my college cricket team to state-level competitions in my sophomore year, demonstrating strong leadership, teamwork, and strategic planning skills. Managed team dynamics and developed game strategies, contributing to our successful performance at the state level.",
      icon: "🏏"
    },
    {
      title: "Community Service",
      description: "While working as a team member at Rural Institute of Centre for Excellence NGO Telangana, India during the COVID pandemic, I developed strong organizational skills, attention to detail, and the ability to handle sensitive information discreetly.",
      icon: "🤝"
    },
    {
      title: "AI/ML Conferences & Meetups",
      description: "I actively participated in PyData and NeurIPS, where I engaged with leading researchers and practitioners in the field of AI and machine learning. These events provided valuable insights into the latest advancements, real-world applications, and emerging trends.",
      icon: "🧠"
    },
    {
      title: "Freelance Data Science Consulting",
      description: "I worked with FarmWiseAI, a Chennai-based startup, providing data-driven insights and solutions to optimize their AI models. My role involved analyzing agricultural datasets, improving prediction accuracy, and implementing machine learning techniques.",
      icon: "💼"
    },
    {
      title: "Data Science Blogging",
      description: "I write humorous and engaging articles on Medium that break down complex AI and data science concepts in a fun and relatable way. My goal is to make technical topics more accessible while adding a touch of humor to keep readers entertained.",
      icon: "✍️"
    }
  ];

  return (
    <div className="relative min-h-screen">
      {/* Particles Background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: {
            color: {
              value: "#0a1930",
            },
          },
          fpsLimit: 60,
          particles: {
            color: {
              value: "#64dfdf",
            },
            links: {
              color: "#8892b0",
              distance: 150,
              enable: true,
              opacity: 0.2,
              width: 1,
            },
            move: {
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: true,
              speed: 1,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.3,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 3 },
            },
          },
          detectRetina: true,
        }}
      />

      {/* Navigation */}
      <header className="fixed top-0 w-full z-50 bg-[#0a1930]/90 backdrop-blur-sm py-4 px-6 md:px-16">
        <nav className="flex justify-between items-center">
          <div className="text-2xl font-bold gradient-text">AD</div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-[#64dfdf]" 
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <ScrollLink to="home" smooth={true} duration={500} className="nav-link cursor-pointer">Home</ScrollLink>
            <ScrollLink to="about" smooth={true} duration={500} className="nav-link cursor-pointer">About</ScrollLink>
            <ScrollLink to="experience" smooth={true} duration={500} className="nav-link cursor-pointer">Experience</ScrollLink>
            <ScrollLink to="projects" smooth={true} duration={500} className="nav-link cursor-pointer">Projects</ScrollLink>
            <ScrollLink to="blogs" smooth={true} duration={500} className="nav-link cursor-pointer">Blogs</ScrollLink>
            <ScrollLink to="contact" smooth={true} duration={500} className="nav-link cursor-pointer">Contact</ScrollLink>
          </div>
          
          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="fixed inset-0 bg-[#0a1930]/95 flex flex-col items-center justify-center z-50 md:hidden">
              <button 
                className="absolute top-6 right-6 text-[#64dfdf]" 
                onClick={toggleMenu}
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
              <div className="flex flex-col space-y-8 text-xl">
                <ScrollLink to="home" smooth={true} duration={500} className="nav-link cursor-pointer" onClick={toggleMenu}>Home</ScrollLink>
                <ScrollLink to="about" smooth={true} duration={500} className="nav-link cursor-pointer" onClick={toggleMenu}>About</ScrollLink>
                <ScrollLink to="experience" smooth={true} duration={500} className="nav-link cursor-pointer" onClick={toggleMenu}>Experience</ScrollLink>
                <ScrollLink to="projects" smooth={true} duration={500} className="nav-link cursor-pointer" onClick={toggleMenu}>Projects</ScrollLink>
                <ScrollLink to="blogs" smooth={true} duration={500} className="nav-link cursor-pointer" onClick={toggleMenu}>Blogs</ScrollLink>
                <ScrollLink to="contact" smooth={true} duration={500} className="nav-link cursor-pointer" onClick={toggleMenu}>Contact</ScrollLink>
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Hero Section */}
      <Element name="home">
        <Parallax
          bgImage="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
          strength={500}
          bgImageStyle={{ opacity: '0.2' }}
        >
          <motion.div 
            className="min-h-screen flex flex-col justify-center px-6 md:px-16 pt-20"
            style={{ opacity, scale }}
          >
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl flex flex-col md:flex-row items-center md:items-start gap-10"
            >
              <div className="md:order-2 mb-8 md:mb-0">
                <img 
                  src="/akash.jpg" 
                  alt="Akash Devulapally" 
                  className="profile-image w-48 h-48 md:w-64 md:h-64 object-cover"
                />
              </div>
              
              <div className="md:order-1">
                <p className="text-[#64dfdf] mb-5 text-lg">Hi, my name is</p>
                <h1 className="text-5xl md:text-7xl font-bold mb-4 gradient-text">Akash Devulapally</h1>
                <h2 className="text-3xl md:text-5xl font-bold text-[#8892b0] mb-6 gradient-text">Data Engineer | Data Scientist</h2>
                <p className="text-[#8892b0] text-lg md:text-xl max-w-2xl mb-8">
                  I specialize in data pipelines, big data streaming, and machine learning. 
                  With expertise in Python, Spark, SQL, and AWS, I transform raw data into 
                  actionable insights and scalable solutions.
                </p>
                
                <div className="flex space-x-6 mb-12">
                  <a href="https://www.linkedin.com/in/akashdevulapally/" target="_blank" rel="noopener noreferrer" className="social-icon">
                    <Linkedin size={24} />
                  </a>
                  <a href="https://github.com/Lucky-akash321" target="_blank" rel="noopener noreferrer" className="social-icon">
                    <Github size={24} />
                  </a>
                  <a href="https://medium.com/@akashdvp99" target="_blank" rel="noopener noreferrer" className="social-icon">
                    <FileText size={24} />
                  </a>
                  <a href="https://www.instagram.com/akashdevulapally/" target="_blank" rel="noopener noreferrer" className="social-icon">
                    <Instagram size={24} />
                  </a>
                </div>
                
                <ScrollLink to="about" smooth={true} duration={800} className="inline-block animate-bounce cursor-pointer">
                  <ChevronDown size={32} className="text-[#64dfdf]" />
                </ScrollLink>
              </div>
            </motion.div>
          </motion.div>
        </Parallax>
      </Element>

      {/* About Section */}
      <Element name="about" className="py-20 px-6 md:px-16 bg-[#112240]">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-heading">About Me</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="reveal">
              <p className="text-lg mb-6">
                Welcome to my portfolio, where data meets creativity, and machine learning is my playground. With over a year of experience in the exhilarating world of Data Science, AI, and Machine Learning, I've become a master at transforming chaotic data into elegant solutions—kind of like a digital detective who always cracks the case before the credits roll.
              </p>
              <p className="text-lg mb-6">
                I've spent countless hours harnessing the power of Python and Spark to tame unruly data, ensuring that it doesn't just sit there looking pretty in a database. From designing and optimizing data pipelines to implementing real-time big data streaming, I'm like the architect of a data-driven metropolis where every byte has a purpose.
              </p>
              <p className="text-lg mb-6">
                My skills in AWS? Well, let's just say my cloud solutions are so secure and seamless, they might as well come with a cape. I'm also no stranger to predictive models, trend analysis, and statistical wizardry—using AI and ML to forecast the future (or at least your next business move).
              </p>
              <p className="text-lg">
                When I'm not transforming raw data into actionable insights, you'll find me working closely with cross-functional teams to translate complex data into simple, digestible strategies. Communication is key, and I'm here to make sure even the non-technical folks can enjoy the data-driven show.
              </p>
            </div>
            
            <div className="reveal flex justify-center">
              <Lottie 
                animationData={dataAnimation} 
                className="w-full max-w-md"
                loop={true}
              />
            </div>
          </div>
        </div>
      </Element>

      {/* Experience Section */}
      <Element name="experience" className="py-20 px-6 md:px-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-heading">Experience</h2>
          
          <VerticalTimeline lineColor="#64dfdf">
            <VerticalTimelineElement
              className="vertical-timeline-element"
              contentStyle={{ background: '#112240', color: '#e6f1ff', boxShadow: '0 3px 0 #64dfdf' }}
              contentArrowStyle={{ borderRight: '7px solid #112240' }}
              date="December 2024 - Present"
              iconStyle={{ background: '#0a1930', color: '#64dfdf' }}
            >
              <h3 className="text-xl font-bold">Data Analyst Intern</h3>
              <h4 className="text-[#64dfdf]">Maximus Tech</h4>
              <p>
                Working on data analysis projects, creating visualizations, and developing insights from complex datasets.
              </p>
            </VerticalTimelineElement>
            
            <VerticalTimelineElement
              className="vertical-timeline-element"
              contentStyle={{ background: '#112240', color: '#e6f1ff', boxShadow: '0 3px 0 #64dfdf' }}
              contentArrowStyle={{ borderRight: '7px solid #112240' }}
              date="October 2023 - December 2023"
              iconStyle={{ background: '#0a1930', color: '#64dfdf' }}
            >
              <h3 className="text-xl font-bold">Data Engineer</h3>
              <h4 className="text-[#64dfdf]">Celnet Inc</h4>
              <p>
                Designed and implemented data pipelines, optimized ETL processes, and worked with big data technologies.
              </p>
            </VerticalTimelineElement>
            
            <VerticalTimelineElement
              className="vertical-timeline-element"
              contentStyle={{ background: '#112240', color: '#e6f1ff', boxShadow: '0 3px 0 #64dfdf' }}
              contentArrowStyle={{ borderRight: '7px solid #112240' }}
              date="September 2020 - June 2021"
              iconStyle={{ background: '#0a1930', color: '#64dfdf' }}
            >
              <h3 className="text-xl font-bold">Junior Data Scientist</h3>
              <h4 className="text-[#64dfdf]">Indian Institute of Technology (IIT) GUWAHATI</h4>
              <p>
                Conducted research on machine learning algorithms, developed predictive models, and analyzed experimental data.
              </p>
            </VerticalTimelineElement>
            
            <VerticalTimelineElement
              className="vertical-timeline-element"
              contentStyle={{ background: '#112240', color: '#e6f1ff', boxShadow: '0 3px 0 #64dfdf' }}
              contentArrowStyle={{ borderRight: '7px solid #112240' }}
              date="March 2019 - June 2019"
              iconStyle={{ background: '#0a1930', color: '#64dfdf' }}
            >
              <h3 className="text-xl font-bold">Data Intern</h3>
              <h4 className="text-[#64dfdf]">BHARAT Electronics</h4>
              <p>
                Assisted in data collection, cleaning, and preliminary analysis for various projects.
              </p>
            </VerticalTimelineElement>
          </VerticalTimeline>
          
          <div className="mt-20">
            <h2 className="section-heading">Education</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
              <div className="reveal bg-[#112240] p-6 rounded-lg hover-lift">
                <h3 className="text-xl font-bold mb-2">Master of Computer Science</h3>
                <h4 className="text-[#64dfdf] mb-4">Campbellsville University</h4>
                <p className="text-[#8892b0]">June 2023 - October 2024</p>
              </div>
              
              <div className="reveal bg-[#112240] p-6 rounded-lg hover-lift">
                <h3 className="text-xl font-bold mb-2">Bachelor of Electronics and Communication Engineering</h3>
                <h4 className="text-[#64dfdf] mb-4">GITAM University</h4>
                <p className="text-[#8892b0]">June 2016 - July 2020</p>
              </div>
            </div>
          </div>
        </div>
      </Element>

      {/* Certifications Section */}
      <Element name="certifications" className="py-20 px-6 md:px-16 bg-[#112240]">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-heading">Certifications</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <a 
                href={cert.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                key={index}
                className="reveal"
              >
                <Tilt options={{ max: 25, scale: 1.05 }}>
                  <div className="bg-[#0a1930] rounded-lg overflow-hidden hover:shadow-[0_0_15px_rgba(100,223,223,0.3)] transition-all duration-300">
                    <div className="h-40 overflow-hidden">
                      <img 
                        src={cert.image} 
                        alt={cert.title} 
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-semibold mb-2">{cert.title}</h3>
                      <div className="flex items-center text-[#64dfdf]">
                        <span className="mr-2">View Credential</span>
                        <ExternalLink size={16} />
                      </div>
                    </div>
                  </div>
                </Tilt>
              </a>
            ))}
          </div>
        </div>
      </Element>

      {/* Projects Section */}
      <Element name="projects" className="py-20 px-6 md:px-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-heading">Featured Projects</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div 
                key={index}
                className="reveal"
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <Tilt options={{ max: 25, scale: 1.05 }}>
                  <div className="bg-[#112240] rounded-lg overflow-hidden h-full flex flex-col">
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                      />
                    </div>
                    <div className="p-6 flex-grow">
                      <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                      <p className="text-[#8892b0] mb-4">{project.description}</p>
                    </div>
                    <div className="p-6 pt-0">
                      <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-[#64dfdf] flex items-center hover:underline"
                      >
                        <span className="mr-2">View Project</span>
                        <ExternalLink size={16} />
                      </a>
                    </div>
                  </div>
                </Tilt>
              </motion.div>
            ))}
          </div>
          
          <div className="flex justify-center mt-12">
            <a 
              href="https://github.com/Lucky-akash321" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-outline flex items-center"
            >
              <span className="mr-2">View More Projects</span>
              <ExternalLink size={16} />
            </a>
          </div>
        </div>
      </Element>

      {/* Blogs Section */}
      <Element name="blogs" className="py-20 px-6 md:px-16 bg-[#112240]">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-heading">Technical Blogs</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogs.map((blog, index) => (
              <motion.div 
                key={index}
                className="reveal"
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <a 
                  href={blog.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block h-full"
                >
                  <div className="bg-[#0a1930] rounded-lg overflow-hidden h-full flex flex-col">
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={blog.image} 
                        alt={blog.title} 
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                      />
                    </div>
                    <div className="p-6 flex-grow">
                      <h3 className="text-xl font-semibold mb-3">{blog.title}</h3>
                      <p className="text-[#8892b0] mb-4">{blog.description}</p>
                      <div className="text-[#64dfdf] flex items-center">
                        <span className="mr-2">Read Article</span>
                        <ExternalLink size={16} />
                      </div>
                    </div>
                  </div>
                </a>
              </motion.div>
            ))}
          </div>
          
          <div className="flex justify-center mt-12">
            <a 
              href="https://medium.com/@akashdvp99" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-outline flex items-center"
            >
              <span className="mr-2">View More Articles</span>
              <ExternalLink size={16} />
            </a>
          </div>
        </div>
      </Element>

      {/* Extracurricular Activities */}
      <Element name="extracurricular" className="py-20 px-6 md:px-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-heading">Extracurricular Activities</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {extracurricular.map((activity, index) => (
              <div key={index} className="reveal">
                <div className="bg-[#112240] p-6 rounded-lg hover-lift h-full">
                  <div className="text-4xl mb-4">{activity.icon}</div>
                  <h3 className="text-xl font-bold mb-3">{activity.title}</h3>
                  <p className="text-[#8892b0]">{activity.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Element>

      {/* Contact Section */}
      <Element name="contact" className="py-20 px-6 md:px-16 bg-[#112240]">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-heading">Get In Touch</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="reveal">
              <p className="text-lg mb-8">
                I'm currently open to new opportunities and collaborations. Whether you have a question, a project idea, or just want to say hi, feel free to reach out!
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <Phone size={20} className="text-[#64dfdf] mr-4" />
                  <span>+1 (972)-750-1525</span>
                </div>
                <div className="flex items-center">
                  <Mail size={20} className="text-[#64dfdf] mr-4" />
                  <span>akashdvp99@gmail.com</span>
                </div>
              </div>
              
              <div className="bg-[#0a1930] p-6 rounded-lg mb-8">
                <h3 className="text-xl font-semibold mb-4">Send a Message</h3>
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-[#8892b0] mb-1">Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full bg-[#112240] border border-[#233554] rounded-md p-3 text-[#e6f1ff] focus:outline-none focus:ring-2 focus:ring-[#64dfdf]"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-[#8892b0] mb-1">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full bg-[#112240] border border-[#233554] rounded-md p-3 text-[#e6f1ff] focus:outline-none focus:ring-2 focus:ring-[#64dfdf]"
                      placeholder="Your Email"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-[#8892b0] mb-1">Message</label>
                    <textarea 
                      id="message" 
                      rows={4} 
                      className="w-full bg-[#112240] border border-[#233554] rounded-md p-3 text-[#e6f1ff] focus:outline-none focus:ring-2 focus:ring-[#64dfdf]"
                      placeholder="Your Message"
                    ></textarea>
                  </div>
                  <button 
                    type="button" 
                    className="btn btn-primary flex items-center"
                  >
                    <span className="mr-2">Send Message</span>
                    <Send size={16} />
                  </button>
                </form>
              </div>
            </div>
            
            <div className="reveal flex justify-center">
              <Lottie 
                animationData={contactAnimation} 
                className="w-full max-w-md"
                loop={true}
              />
            </div>
          </div>
        </div>
      </Element>

      {/* Footer */}
      <footer className="py-8 px-6 md:px-16 bg-[#0a1930] text-center">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-center space-x-6 mb-6">
            <a href="https://www.linkedin.com/in/akashdevulapally/" target="_blank" rel="noopener noreferrer" className="social-icon">
              <Linkedin size={20} />
            </a>
            <a href="https://github.com/Lucky-akash321" target="_blank" rel="noopener noreferrer" className="social-icon">
              <Github size={20} />
            </a>
            <a href="https://medium.com/@akashdvp99" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FileText size={20} />
            </a>
            <a href="https://www.instagram.com/akashdevulapally/" target="_blank" rel="noopener noreferrer" className="social-icon">
              <Instagram size={20} />
            </a>
          </div>
          <p className="text-[#8892b0]">Designed & Built by Akash Devulapally</p>
          <p className="text-[#8892b0] text-sm mt-2">© {new Date().getFullYear()} All Rights Reserved</p>
        </div>
      </footer>
    </div>
  );
};

export default App;