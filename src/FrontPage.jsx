import React, { useEffect, useRef, useState } from "react";
import { FileText, ArrowUpRight, ArrowRight, Mail,MapPin, Send, Code2,Server,Smartphone, X} from "lucide-react";
import GradPic from './assets/images/gradpic.png'
import FarmTech from './assets/images/farmtech.png'
import ClutchCulture from './assets/images/clutchculture.png'
import Inkspire from './assets/images/inkspire.png'
import Typed from "typed.js";
import TechStackCards from "./components/techStackCards"
import ProjectsCards from "./components/projectsCard"
import NavbarPage from "./components/navbarPage";

function Reveal({ children, className = "", delay = 0, as: Tag = "div" }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(node);
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -80px 0px" }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      } ${className}`}
      style={{ transitionDelay: visible ? `${delay}ms` : "0ms" }}
    >
      {children}
    </Tag>
  );
}

function useActiveSection(ids) {
  const [active, setActive] = useState(ids[0]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [ids]);

  return active;
}

export default function PortfolioPage() {
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitNotice, setSubmitNotice] = useState("");

  const navLinks = [
    { label: "HOME", href: "#home", id: "home" },
    { label: "ABOUT", href: "#about", id: "about" },
    { label: "PORTFOLIO", href: "#portfolio", id: "portfolio" },
    { label: "CONTACT", href: "#contact", id: "contact" },
  ];

  const activeSection = useActiveSection(navLinks.map((l) => l.id));

  const stats = [
     { value: "8+", label: "Projects Built" },
    { value: "10+", label: "Technologies" },
    { value: "5+", label: "Certifications" },
  ];

const FarmtechLink = "https://farmtech-v2-farmer.web.app/";
const ClutchLink = "https://clutch-culture-zeta.vercel.app/";

  const projects = [
    {
      image: FarmTech,
      link: FarmtechLink,
      tag: "Web App",
      title: "FarmTech",
      description:
        "FarmTech is an agricultural mobile and web system that uses machine learning, weather data, soil monitoring, and financial tools to help Cavite farmers make better farming decisions.",
      tech: ["React", "Flutter", "Firebase"],
    },
    {
      image: ClutchCulture,
      link: ClutchLink,
      tag: "Web App",
      title: "Clutch Culture",
      description:
        "Clutch Culture is an automotive community platform that allows car enthusiasts to create posts, discuss topics, interact through comments and likes, and explore car-related content.",
      tech: ["React", "Tailwind CSS", "Supabase"],
    },
    {
      image: Inkspire,
      tag: "Web App",
      title: "Inkspire",
      description:
        "Inkspire is a book community web application where readers can discover books, participate in discussions, share reviews and recommendations, and connect with other readers.",
      tech: ["React Native", "Firebase"],
    },
  ];

  const techStacks = {
    frontend: {
      title: "Frontend",
      icon: Code2,
      blurb: "Building clean, responsive interfaces.",
      skills: [
        { name: "HTML", level: 80 },
        { name: "CSS", level: 85 },
        { name: "JavaScript", level: 70 },
        { name: "React.js", level: 65 },
      ],
    },
    backend: {
      title: "Backend",
      icon: Server,
      blurb: "Server-side logic, APIs, and databases.",
      skills: [
        { name: "PHP", level: 75 },
        { name: "Laravel", level: 65 },
        { name: "SQL", level: 80 },
        { name: "Firebase", level: 70 },
      ],
    },
    mobile: {
      title: "Mobile Dev",
      icon: Smartphone,
      blurb: "Native and cross-platform mobile apps.",
      skills: [
        { name: "Java", level: 65 },
        { name: "Kotlin", level: 60 },
        { name: "Flutter", level: 80 },
      ],
    },
  };



const typedRef = useRef(null);

useEffect(() => {
  const typed = new Typed(typedRef.current, {
    strings: [
      "Frontend Developer",
      "Backend Developer",
      "Mobile Developer",
    ],
    typeSpeed: 30,
    backSpeed: 50,
    backDelay: 2000,
    loop: true,
    cursorChar: "|",
    showCursor: true,
  });

  return () => {
    typed.destroy();
  };
}, []);

  const downloadCV = () => {
  const link = document.createElement("a");
  link.href = "/Gravillo_CV.pdf"; // file in the public folder
  link.download = "Gravillo_CV";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const handleContactChange = (e) => {
  const { name, value } = e.target;
  setContactForm((prev) => ({
    ...prev,
    [name]: value,
  }));
};

const handleContactSubmit = (e) => {
  e.preventDefault();
  const name = contactForm.name.trim();
  const email = contactForm.email.trim();
  const message = contactForm.message.trim();

  if (!name || !email || !message) {
    setSubmitNotice("Please fill out name, email, and message before sending.");
    return;
  }

  const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
const body = encodeURIComponent(
  `${message}\n\n—\nSent from your portfolio contact form\n${name} · ${email}`
);
const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=gravillojerome@gmail.com&su=${subject}&body=${body}`;

  window.open(gmailUrl, "_blank", "noopener,noreferrer");
  setSubmitNotice("Opening Gmail compose with your message draft.");
  setContactForm({ name: "", email: "", message: "" });
};

  return (
    <div className="min-h-screen bg-[var(--background-color)] text-[var(--text-color)] font-mono">
      <style>{`
        :root {
          --primary-color: #f80000;
          --background-color: #000000;
          --secondary-color: #2c2c2c;
          --text-color: #ffffff;
        }
        html { scroll-behavior: smooth; }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(8px) scale(0.98); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
      `}</style>

      {/* Navbar */}
      <header className="sticky top-0 z-50 px-6 pt-6 bg-[var(--background-color)]/80 backdrop-blur">
        <NavbarPage 
          navLinks = {navLinks}
          activeSection = {activeSection}
        />
      </header>

      <section id="home" className="scroll-mt-28">
        <main className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <p className="text-lg text-white mb-2">Hi, I'm Jerome T. Gravillo</p>

            <h1 className="text-5xl font-bold text-[var(--primary-color)] leading-tight mb-6">
            <span ref={typedRef}></span>
            </h1>

            <p className="text-gray-400 max-w-md mb-10 leading-relaxed">
              I am a Mobile and Web developer focused on building modern, responsive,
              and efficient websites. With a growing expertise React and Flutter in Mobile Development.
            </p>

            <div className="grid grid-cols-3 gap-4 mb-10 max-w-xl">
              {stats.map((stat, i) => (
                <Reveal key={stat.label} delay={i * 100}>
                  <div className="bg-[var(--secondary-color)]/60 border border-white/5 rounded-xl px-4 py-5 text-center">
                    <p className="text-3xl font-bold text-[var(--primary-color)] mb-1">
                      {stat.value}
                    </p>
                    <p className="text-xs text-gray-400">{stat.label}</p>
                  </div>
                </Reveal>
              ))}
            </div>

            <div className="flex items-center gap-4 mb-12">
              <button onClick={downloadCV} className="flex items-center gap-2 bg-[var(--primary-color)] hover:brightness-110 transition-all px-6 py-3 rounded-full font-semibold cursor-pointer">
             <FileText size={16} />Download CV 
              </button>
                <div className="flex items-center gap-4 hover:">
              <button className="flex items-center gap-2 border border-white/20 text-white hover:bg-white/5 transition-colors px-6 py-3 rounded-lg font-semibold text-sm">
                <ArrowUpRight size={16} /> View Projects
              </button>
            </div>
             
            </div>

            <div className="flex items-center gap-4">
               <SocialIcon href="https://www.facebook.com/jeromegravillo18">
                    <FacebookIcon/>
                  </SocialIcon>
                    <SocialIcon href="https://www.instagram.com/romeee18_/">
                <InstagramIcon />
              </SocialIcon>
                    <SocialIcon href="https://github.com/Jgravv">
                <GithubIcon />
              </SocialIcon>
              <SocialIcon href="https://www.linkedin.com/in/jerome-gravillo/">
                <LinkedinIcon />
              </SocialIcon>

            </div>
          </Reveal>

          <Reveal delay={150}>
        <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-[320px] sm:w-[380px] aspect-[3/4] rounded-[2.5rem] border-2 border-[var(--primary-color)]/60 overflow-hidden bg-[var(--secondary-color)]">
              <img
                src={GradPic}
                alt="Graduation photo"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
          </Reveal>
        </main>
      </section>

      <section id="about" className="scroll-mt-28">
        <main className="relative max-w-7xl mx-auto px-6 pt-10 pb-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <Reveal>
            
            <h2 className="text-6xl sm:text-7xl font-extrabold leading-[0.95] mb-6">
                          ABOUT ME

            </h2>

            <p className="text-gray-400 max-w-lg leading-relaxed mb-6">
             Fresh graduate from National University – Dasmariñas, specializing in Mobile and Web Applications, with a passion for frontend and mobile development. Skilled in building clean, responsive, and user-friendly applications using modern technologies. Eager to apply my skills and grow as a developer.
            </p>

            <div className="bg-[var(--secondary-color)]/50 border border-white/5 rounded-xl px-6 py-4 mb-8 max-w-xl">
              <p className="italic text-gray-300 text-sm">
                "Turning ideas into clean, modern, and meaningful digital
                experiences."
              </p>
            </div>

          
          </Reveal>

          <Reveal delay={150}>
            <div className="flex justify-center lg:justify-end">
              <div className="w-[340px] h-[340px] sm:w-[420px] sm:h-[420px] rounded-full border border-white/10 bg-[var(--secondary-color)] flex items-center justify-center">
                <span className="text-gray-500 text-sm"> </span>
              </div>
            </div>
          </Reveal>

          <div className="lg:col-span-2 mt-6">
            <Reveal>
              <h3 className="text-3xl sm:text-4xl font-extrabold mb-8">
                Tech Stack<span className="text-[var(--primary-color)]">.</span>
              </h3>
            </Reveal>
              <TechStackCards
              techStacks={techStacks}
              Reveal={Reveal}
              />
            
          </div>
        </main>
      </section>

      {/* ---------------- PORTFOLIO ---------------- */}
      <section id="portfolio" className="scroll-mt-28">
        <main className="max-w-7xl mx-auto px-6 py-20">
          <Reveal className="text-center">
            <p className="text-xs tracking-[0.3em] text-gray-500 mb-4">
              MY WORK
            </p>
            <h2 className="text-4xl sm:text-5xl font-extrabold mb-4">
              Portfolio<span className="text-[var(--primary-color)]">.</span>
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto mb-14">
              A selection of projects I've worked on.
            </p>
          </Reveal>
              <ProjectsCards 
              projects ={projects}
                  Reveal={Reveal}

              />
          
        </main>
      </section>

      <section id="contact" className="scroll-mt-28">
        <main className="max-w-7xl mx-auto px-6 py-20">
          <Reveal>
            <div className="bg-[var(--secondary-color)]/40 border border-white/5 rounded-3xl p-10 sm:p-14 grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <p className="text-xs tracking-[0.3em] text-gray-500 mb-4">
                  GET IN TOUCH
                </p>
                <h2 className="text-4xl sm:text-5xl font-extrabold mb-6">
                  Let's Work
                  <br />
                  Together
                  <span className="text-[var(--primary-color)]">.</span>
                </h2>
                <p className="text-gray-400 max-w-md leading-relaxed mb-10">
                  Have a project in mind or just want to say hi? My inbox is
                  always open — I'll get back to you as soon as I can.
                </p>

                <div className="space-y-4 mb-10">
                  <div className="flex items-center gap-3 text-gray-300 text-sm">
                    <Mail size={18} className="text-[var(--primary-color)]" />
                    gravillojerome@gmail.com
                  </div>
                  <div className="flex items-center gap-3 text-gray-300 text-sm">
                    <MapPin
                      size={18}
                      className="text-[var(--primary-color)]"
                    />
                    Cavite, Philippines
                  </div>
                </div>

                <div className="flex items-center gap-4">
                   <SocialIcon href="https://www.facebook.com/jeromegravillo18">
                    <FacebookIcon/>
                  </SocialIcon>
                    <SocialIcon href="https://www.instagram.com/romeee18_/">
                <InstagramIcon />
              </SocialIcon>
                    <SocialIcon href="https://github.com/Jgravv">
                <GithubIcon />
              </SocialIcon>
              <SocialIcon href="https://www.linkedin.com/in/jerome-gravillo/">
                <LinkedinIcon />
              </SocialIcon>
                </div>
              </div>

              <form className="flex flex-col gap-4" onSubmit={handleContactSubmit}>
                <div>
                  <label className="text-xs tracking-widest text-gray-500 mb-2 block">
                    NAME
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={contactForm.name}
                    onChange={handleContactChange}
                    placeholder="Your name"
                    required
                    className="w-full bg-[var(--background-color)] border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-[var(--primary-color)] transition-colors"
                  />
                </div>
                <div>
                  <label className="text-xs tracking-widest text-gray-500 mb-2 block">
                    EMAIL
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={contactForm.email}
                    onChange={handleContactChange}
                    placeholder="you@example.com"
                    required
                    className="w-full bg-[var(--background-color)] border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-[var(--primary-color)] transition-colors"
                  />
                </div>
                <div>
                  <label className="text-xs tracking-widest text-gray-500 mb-2 block">
                    MESSAGE
                  </label>
                  <textarea
                    rows={4}
                    name="message"
                    value={contactForm.message}
                    onChange={handleContactChange}
                    placeholder="Tell me about your project..."
                    required
                    className="w-full bg-[var(--background-color)] border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-[var(--primary-color)] transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="flex items-center justify-center gap-2 bg-[var(--primary-color)] hover:brightness-110 transition-all px-6 py-3 rounded-lg font-semibold text-sm mt-2"
                >
                  Send Message <Send size={16} />
                </button>
                {submitNotice && (
                  <p className="text-xs text-gray-400">{submitNotice}</p>
                )}
              </form>
            </div>
          </Reveal>

          <p className="text-center text-gray-600 text-xs mt-10">
            © {new Date().getFullYear()} Rome. All rights reserved.
          </p>
        </main>
      </section>

    
    </div>
  );
}

function SocialIcon({ children, href }) {
  const className = "w-10 h-10 rounded-full bg-[var(--secondary-color)] border border-white/5 flex items-center justify-center hover:border-[var(--primary-color)] hover:text-[var(--primary-color)] hover:-translate-y-0.5 transition-all cursor-pointer";

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        {children}
      </a>
    );
  }

  return (
    <div className={className}>
      {children}
    </div>
  );
}

function TikTokIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M16.6 5.82s.51.5 0 0A4.278 4.278 0 0 1 15.54 3h-3.09v12.4a2.592 2.592 0 0 1-2.59 2.5c-1.42 0-2.6-1.16-2.6-2.6 0-1.72 1.66-3.01 3.37-2.48V9.66c-3.45-.46-6.47 2.22-6.47 5.64 0 3.33 2.76 5.7 5.69 5.7 3.14 0 5.69-2.55 5.69-5.7V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3s-1.88.09-3.24-1.48z" />
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 .5C5.65.5.5 5.66.5 12.02c0 5.09 3.29 9.4 7.86 10.93.58.1.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.7.08-.7 1.16.08 1.78 1.2 1.78 1.2 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.64 1.59.24 2.77.12 3.06.74.8 1.18 1.83 1.18 3.09 0 4.43-2.7 5.4-5.28 5.69.42.36.78 1.07.78 2.17 0 1.56-.02 2.82-.02 3.2 0 .31.21.67.8.56A10.53 10.53 0 0 0 23.5 12c0-6.35-5.15-11.5-11.5-11.5z" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.45 20.45h-3.56v-5.58c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.95v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.26 2.37 4.26 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.47 1.38.9.42.42.68.82.9 1.38.16.42.36 1.05.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.05.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.72 3.72 0 0 1-1.38-.9 3.72 3.72 0 0 1-.9-1.38c-.16-.42-.36-1.05-.41-2.23-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.05-.36 2.23-.41 1.27-.06 1.65-.07 4.85-.07M12 0C8.74 0 8.33.01 7.05.07c-1.27.06-2.15.26-2.91.56a5.87 5.87 0 0 0-2.13 1.38A5.87 5.87 0 0 0 .63 4.14c-.3.76-.5 1.64-.56 2.91C.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.27.26 2.15.56 2.91.3.79.71 1.46 1.38 2.13.67.67 1.34 1.08 2.13 1.38.76.3 1.64.5 2.91.56C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c1.27-.06 2.15-.26 2.91-.56a5.87 5.87 0 0 0 2.13-1.38 5.87 5.87 0 0 0 1.38-2.13c.3-.76.5-1.64.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.26-2.15-.56-2.91a5.87 5.87 0 0 0-1.38-2.13A5.87 5.87 0 0 0 19.86.63c-.76-.3-1.64-.5-2.91-.56C15.67.01 15.26 0 12 0z" />
      <path d="M12 5.84A6.16 6.16 0 1 0 18.16 12 6.16 6.16 0 0 0 12 5.84zm0 10.16A4 4 0 1 1 16 12a4 4 0 0 1-4 4zm6.41-10.4a1.44 1.44 0 1 1-1.44-1.44 1.44 1.44 0 0 1 1.44 1.44z" />
    </svg>
  );
}


function YoutubeIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.5 6.19a3.02 3.02 0 0 0-2.12-2.14C19.51 3.5 12 3.5 12 3.5s-7.51 0-9.38.55A3.02 3.02 0 0 0 .5 6.19 31.6 31.6 0 0 0 0 12a31.6 31.6 0 0 0 .5 5.81 3.02 3.02 0 0 0 2.12 2.14C4.49 20.5 12 20.5 12 20.5s7.51 0 9.38-.55a3.02 3.02 0 0 0 2.12-2.14A31.6 31.6 0 0 0 24 12a31.6 31.6 0 0 0-.5-5.81zM9.6 15.6V8.4l6.4 3.6z" />
    </svg>
  );
}
function FacebookIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07C0 18.09 4.39 23.08 10.13 24v-8.44H7.08v-3.49h3.05V9.41c0-3.04 1.79-4.72 4.56-4.72 1.32 0 2.7.24 2.7.24v2.99h-1.52c-1.5 0-1.97.94-1.97 1.9v2.29h3.35l-.54 3.49H13.9V24C19.61 23.08 24 18.09 24 12.07z" />
    </svg>
  );
}