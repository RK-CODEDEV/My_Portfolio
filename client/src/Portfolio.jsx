import { useState, useEffect, useRef } from "react";

// ── DATA ──────────────────────────────────────────────────────────────────────
const SKILLS = [
  { n: "HTML5",      l: 90, img: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg" },
  { n: "CSS3",       l: 85, img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { n: "JavaScript", l: 85, img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { n: "React JS",   l: 82, img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { n: "Next JS",    l: 78, img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
  { n: "Node JS",    l: 78, img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { n: "Express",    l: 75, img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
  { n: "MongoDB",    l: 72, img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { n: "Python",     l: 80, img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { n: "C",          l: 70, img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
  { n: "C++",        l: 68, img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
  { n: "Java",       l: 72, img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
  { n: "Git",        l: 85, img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { n: "GitHub",     l: 85, img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
  { n: "Canva",      l: 80, img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg" },
  { n: "Figma",      l: 75, img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
];

const PROJECTS = [
  {
    n: "IMAGE GALLERY",
    d: "A clean and responsive image gallery web app with smooth layout and dynamic image rendering. Browse and view images in an elegant grid layout.",
    t: ["HTML", "CSS", "JavaScript"],
    g: "linear-gradient(135deg,#0f0f1a,#1a1a2e,#16213e)",
    thumb: "/image.png",
    link: "https://image-gallery-iota-green.vercel.app/"
  },
  {
    n: "SIDEBAR MENU",
    d: "An interactive and animated sidebar navigation menu with smooth open/close transitions. Fully responsive and optimized for modern web applications.",
    t: ["HTML", "CSS", "JavaScript"],
    g: "linear-gradient(135deg,#1a0a00,#2d1500,#3d1f00)",
    thumb: "/menu.png",
    link: "https://side-bar-menu-rouge.vercel.app/"
  },
  {
    n: "PORTFOLIO",
    d: "A personal developer portfolio built with React showcasing skills, projects, certificates and experience. Fully responsive with smooth animations.",
    t: ["React", "CSS", "Vercel"],
    g: "linear-gradient(135deg,#000d1a,#001830,#002040)",
    thumb: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&q=80",
    link: "#"
  },
  {
    n: "WEATHER APP",
    d: "A real-time weather application that fetches live data based on city search. Displays temperature, humidity, and weather conditions with a clean UI.",
    t: ["React", "API", "CSS"],
    g: "linear-gradient(135deg,#001a2e,#003d5c,#005f8a)",
    thumb: "/weather.jpg",
    link: "#"
  },
  {
    n: "TODO LIST",
    d: "A feature-rich task management app with add, edit, delete and mark-complete functionality. Data persists using local storage for seamless experience.",
    t: ["React", "JavaScript", "CSS"],
    g: "linear-gradient(135deg,#0a1a00,#1a3d00,#2a5c00)",
    thumb: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=600&q=80",
    link: "#"
  },
  {
    n: "QUIZ APP",
    d: "An interactive quiz application with multiple choice questions, score tracking, and a timer. Built with a clean interface and instant answer feedback.",
    t: ["HTML", "CSS", "JavaScript"],
    g: "linear-gradient(135deg,#1a001a,#3d003d,#5c0060)",
    thumb: "https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?w=600&q=80",
    link: "#"
  },
  {
    n: "CALCULATOR",
    d: "A fully functional calculator app with basic arithmetic operations. Clean UI with keyboard support and smooth button animations for a great user experience.",
    t: ["HTML", "CSS", "JavaScript"],
    g: "linear-gradient(135deg,#1a1000,#3d2800,#5c3d00)",
    thumb: "https://images.unsplash.com/photo-1587145820266-a5951ee6f620?w=600&q=80",
    link: "#"
  },
];

const EXP = [
  {
    p: "2022 — Present",
    r: "B.TECH INFORMATION TECHNOLOGY",
    c: "Coimbatore Institute of Engineering and Technology · Coimbatore",
    d: "Currently pursuing a Bachelor of Technology in Information Technology. Gaining strong knowledge in full-stack development, data structures, and modern software technologies. Actively working on projects involving web development and AI-based applications. Expected graduation in 2026."
  },
  {
    p: "2021 — 2022",
    r: "HIGHER SECONDARY EDUCATION (12th)",
    c: "Rajavignesh Higher Secondary School",
    d: "Completed higher secondary education with a focus on science and mathematics. Developed a strong foundation in problem-solving, logical thinking, and computer science fundamentals."
  },
  {
    p: "2019 — 2020",
    r: "SECONDARY SCHOOL (10th)",
    c: "Rajavignesh Higher Secondary School",
    d: "Completed SSLC with good academic performance. Built core academic skills and developed interest in technology and computing."
  },
];

const CERTS = [
  { n: "AI Foundation Certification",         iss: "Infosys Springboard",  dt: "Jul 31, 2024",  img: "/src/assets/certs/ai.png" },
  { n: "Introduction to Artificial Intelligence", iss: "Infosys Springboard", dt: "Jul 22, 2024", img: "/src/assets/certs/AI2.png" },
  { n: "Tech Talk on C# .Net",                iss: "IBM SkillsBuild",      dt: "May 03, 2024",  img: "/src/assets/certs/C1.png" },
  { n: "Canva Blueprint",                     iss: "Pantech Solutions",    dt: "Aug 26, 2024",  img: "/src/assets/certs/canva.png" },
  { n: "Data Analyst Masterclass",            iss: "Coding Invaders",      dt: "May 18, 2023",  img: "/src/assets/certs/certificate.jpg" },
  { n: "CSS Tutorial",                        iss: "Great Learning",       dt: "Sep 2023",      img: "/src/assets/certs/css.png" },
  { n: "Cybersecurity Workshop",              iss: "NoviTech R&D",         dt: "Aug 31, 2023",  img: "/src/assets/certs/cyber_security.png" },
  { n: "Introduction to Deep Learning",       iss: "Infosys Springboard",  dt: "Jul 23, 2024",  img: "/src/assets/certs/DEEP_LEARNING.png" },
  { n: "Python Basic",                        iss: "Digilabs",             dt: "May 24, 2024",  img: "/src/assets/certs/digilab.jpg" },
  { n: "Front End Development - HTML",        iss: "Great Learning",       dt: "Oct 2023",      img: "/src/assets/certs/FED.png" },
  { n: "HTML Tutorial",                       iss: "Great Learning",       dt: "Sep 2023",      img: "/src/assets/certs/HTML.png" },
  { n: "Programming in Java",                 iss: "NPTEL / IIT Kharagpur",dt: "Jul–Oct 2024",  img: "/src/assets/certs/JAVA.png" },
  { n: "Introduction to NLP",                 iss: "Infosys Springboard",  dt: "Jul 24, 2024",  img: "/src/assets/certs/NLP.png" },
  { n: "Basics of Python",                    iss: "Infosys Springboard",  dt: "Dec 02, 2023",  img: "/src/assets/certs/PYTHON.png" },
  { n: "Tech Talk on SQL",                    iss: "IBM SkillsBuild",      dt: "May 24, 2024",  img: "/src/assets/certs/SQL.png" },
  { n: "Time Management",                     iss: "Infosys Springboard",  dt: "Jul 16, 2024",  img: "/src/assets/certs/TIME MANAGEMENT.png" },
];

// ── PARTICLE CANVAS ───────────────────────────────────────────────────────────
function ParticleCanvas() {
  const canvasRef = useRef(null);
  const partsRef = useRef([]);
  const rafRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();

    partsRef.current = Array.from({ length: 55 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      sz: Math.random() * 1.5 + 0.5,
      op: Math.random() * 0.4 + 0.1,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.strokeStyle = "rgba(255,255,255,0.02)";
      ctx.lineWidth = 1;
      for (let x = 0; x < canvas.width; x += 80) {
        ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, canvas.height); ctx.stroke();
      }
      for (let y = 0; y < canvas.height; y += 80) {
        ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(canvas.width, y); ctx.stroke();
      }
      partsRef.current.forEach((p) => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0) p.x = canvas.width; if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height; if (p.y > canvas.height) p.y = 0;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.sz, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(232,255,71,${p.op})`; ctx.fill();
      });
      partsRef.current.forEach((a, i) =>
        partsRef.current.slice(i + 1).forEach((b) => {
          const dx = a.x - b.x, dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 80) {
            ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(232,255,71,${0.05 * (1 - dist / 80)})`; ctx.stroke();
          }
        })
      );
      rafRef.current = requestAnimationFrame(draw);
    };
    draw();

    window.addEventListener("resize", resize);
    return () => { cancelAnimationFrame(rafRef.current); window.removeEventListener("resize", resize); };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none" }}
    />
  );
}

// ── REVEAL WRAPPER ────────────────────────────────────────────────────────────
function Reveal({ children, delay = 0, style = {} }) {
  const ref = useRef(null);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVis(true); obs.unobserve(el); } }, { threshold: 0.08 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return (
    <div ref={ref} style={{
      opacity: vis ? 1 : 0,
      transform: vis ? "translateY(0)" : "translateY(24px)",
      transition: `all 0.7s cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
      ...style,
    }}>
      {children}
    </div>
  );
}

// ── SKILL CARD ────────────────────────────────────────────────────────────────
function SkillCard({ skill }) {
  const barRef = useRef(null);
  useEffect(() => {
    const el = barRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { el.style.width = skill.l + "%"; obs.unobserve(el); }
    }, { threshold: 0.3 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [skill.l]);

  const [hov, setHov] = useState(false);
  return (
    <div
      onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{
        background: "var(--bg)", border: "1px solid var(--brd)", padding: 20, position: "relative",
        overflow: "hidden", transition: "all .3s",
        transform: hov ? "translateY(-4px)" : "none",
        borderColor: hov ? "rgba(232,255,71,.2)" : "var(--brd)",
      }}
    >
      <div style={{
        position: "absolute", top: 0, left: 0, width: "100%", height: 2,
        background: "var(--acc)", transform: hov ? "scaleX(1)" : "scaleX(0)",
        transformOrigin: "left", transition: "transform .3s",
      }} />
      <div style={{ width: "100%", display: "flex", justifyContent: "center", marginBottom: 16 }}>
        <div style={{ width: 80, height: 80, display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(255,255,255,0.04)", borderRadius: 14, padding: 10 }}>
          <img
            src={skill.img}
            alt={skill.n}
            style={{ width: 60, height: 60, objectFit: "contain", filter: hov ? "brightness(1.15) drop-shadow(0 0 8px rgba(232,255,71,0.35))" : "brightness(0.9) grayscale(0.15)", transition: "filter .3s" }}
          />
        </div>
      </div>
      <div style={{ fontFamily: "'Space Mono',monospace", fontSize: 12, letterSpacing: 1, marginBottom: 12 }}>{skill.n}</div>
      <div style={{ height: 2, background: "var(--brd)", borderRadius: 2, overflow: "hidden" }}>
        <div ref={barRef} style={{ height: "100%", background: "var(--acc)", width: 0, transition: "width 1.2s cubic-bezier(.16,1,.3,1)" }} />
      </div>
      <div style={{ fontFamily: "'Space Mono',monospace", fontSize: 10, color: "var(--mut)", marginTop: 6, textAlign: "right" }}>{skill.l}%</div>
    </div>
  );
}

// ── PROJECT CARD ──────────────────────────────────────────────────────────────
function ProjectCard({ project }) {
  const [hov, setHov] = useState(false);
  return (
    <div
      onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{
        background: "var(--sur)", border: "1px solid var(--brd)", overflow: "hidden",
        transition: "all .4s", cursor: "pointer", position: "relative",
        transform: hov ? "translateY(-6px)" : "none",
        borderColor: hov ? "rgba(232,255,71,.3)" : "var(--brd)",
      }}
    >
      <div style={{ height: 170, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 56, position: "relative", overflow: "hidden", background: project.g }}>
        <img src={project.thumb} alt={project.n} style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.75, transition: "transform .4s, opacity .4s", transform: hov ? "scale(1.08)" : "scale(1)" }} />
        <div style={{ position: "absolute", inset: 0, background: "rgba(8,8,16,.7)", display: "flex", alignItems: "center", justifyContent: "center", gap: 12, opacity: hov ? 1 : 0, transition: "opacity .3s" }}>
          <a href={project.link} target="_blank" rel="noreferrer" style={{ width: 42, height: 42, background: "var(--acc)", color: "#000", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, textDecoration: "none", transition: "transform .2s" }}>↗</a>
          <a href="#" style={{ width: 42, height: 42, background: "rgba(255,255,255,.1)", color: "#fff", border: "1px solid rgba(255,255,255,.2)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, textDecoration: "none" }}>{"{}"}</a>
        </div>
      </div>
      <div style={{ padding: 20 }}>
        <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 10 }}>
          {project.t.map((tag) => (
            <span key={tag} style={{ fontFamily: "'Space Mono',monospace", fontSize: 9, color: "var(--acc)", letterSpacing: 2, textTransform: "uppercase", background: "rgba(232,255,71,.08)", padding: "3px 8px", border: "1px solid rgba(232,255,71,.15)" }}>{tag}</span>
          ))}
        </div>
        <div style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: 24, letterSpacing: 2, marginBottom: 6, color: hov ? "var(--acc)" : "var(--txt)", transition: "color .2s" }}>{project.n}</div>
        <div style={{ fontSize: 13, color: "var(--mut)", lineHeight: 1.6, fontWeight: 300 }}>{project.d}</div>
      </div>
    </div>
  );
}

// ── CERT CARD ─────────────────────────────────────────────────────────────────
function CertCard({ cert }) {
  const [hov, setHov] = useState(false);
  return (
    <div
      onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{
        flexShrink: 0, width: 320, borderRadius: 8, overflow: "hidden",
        transition: "all .35s", cursor: "pointer", position: "relative",
        transform: hov ? "translateY(-8px) scale(1.02)" : "none",
        boxShadow: hov ? "0 20px 50px rgba(0,0,0,0.5), 0 0 0 1px rgba(232,255,71,0.3)" : "0 4px 20px rgba(0,0,0,0.3)",
      }}
    >
      {/* Certificate image */}
      <img
        src={cert.img}
        alt={cert.n}
        style={{ width: "100%", height: 200, objectFit: "cover", display: "block", transition: "transform .35s", transform: hov ? "scale(1.05)" : "scale(1)" }}
      />
      {/* Hover overlay */}
      <div style={{
        position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(8,8,16,0.95) 0%, rgba(8,8,16,0.5) 60%, transparent 100%)",
        opacity: hov ? 1 : 0, transition: "opacity .1s",
        display: "flex", flexDirection: "column", justifyContent: "flex-end", padding: "16px 14px",
      }}>
        <div style={{ fontFamily: "'Space Mono',monospace", fontSize: 9, color: "var(--acc)", letterSpacing: 3, textTransform: "uppercase", marginBottom: 4 }}>{cert.iss}</div>
        <div style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: 18, letterSpacing: 1.5, lineHeight: 1.2, color: "#fff", marginBottom: 4 }}>{cert.n}</div>
        <div style={{ fontSize: 10, color: "var(--mut)", fontFamily: "'Space Mono',monospace" }}>{cert.dt}</div>
      </div>
      {/* Always-visible bottom bar */}
      <div style={{
        position: "absolute", bottom: 0, left: 0, right: 0, height: 3,
        background: "linear-gradient(90deg, var(--acc), #04e5fe)",
        transform: hov ? "scaleX(1)" : "scaleX(0)", transformOrigin: "left", transition: "transform .4s",
      }} />
    </div>
  );
}

// ── CONTACT FORM ──────────────────────────────────────────────────────────────
function ContactForm() {
  const [sent, setSent] = useState(false);
  const [name, setName] = useState(""); const [email, setEmail] = useState(""); const [msg, setMsg] = useState("");

const send = async () => {
  if (!name || !email || !msg) { alert("Please fill all fields."); return; }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) { alert("Please enter a valid email address."); return; }
  try {
    const res = await fetch('http://localhost:5000/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, message: msg }),
    });
    const data = await res.json();
    if (data.success) setSent(true);
    else alert('Failed to send. Try again.');
  } catch {
    alert('Server error. Make sure server is running.');
  }
};

  if (sent) return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minHeight: 280, gap: 14, textAlign: "center" }}>
      <div style={{ fontSize: 56 }}>✓</div>
      <div style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: 28, color: "var(--acc)", letterSpacing: 2 }}>Message Sent!</div>
      <p style={{ color: "var(--mut)" }}>I'll get back to you within 24 hours.</p>
      <button onClick={() => { setSent(false); setName(""); setEmail(""); setMsg(""); }}
        style={{ marginTop: 8, background: "transparent", color: "var(--txt)", fontFamily: "'Space Mono',monospace", fontSize: 12, letterSpacing: 2, textTransform: "uppercase", padding: "14px 28px", border: "1px solid var(--brd)", cursor: "pointer" }}>
        Send Another
      </button>
    </div>
  );

  const inputStyle = { background: "var(--bg)", border: "1px solid var(--brd)", color: "var(--txt)", fontFamily: "'DM Sans',sans-serif", fontSize: 14, padding: "12px 14px", outline: "none", width: "100%", resize: "none" };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
      {[{ lbl: "Your Name", val: name, set: setName, ph: "Enter your name", type: "text" },
        { lbl: "Email Address", val: email, set: setEmail, ph: "Enter your email", type: "email" }].map(({ lbl, val, set, ph, type }) => (
        <div key={lbl}>
          <label style={{ fontFamily: "'Space Mono',monospace", fontSize: 10, color: "var(--mut)", letterSpacing: 2, textTransform: "uppercase", display: "block", marginBottom: 5 }}>{lbl}</label>
          <input type={type} value={val} onChange={(e) => set(e.target.value)} placeholder={ph} style={inputStyle} />
        </div>
      ))}
      <div>
        <label style={{ fontFamily: "'Space Mono',monospace", fontSize: 10, color: "var(--mut)", letterSpacing: 2, textTransform: "uppercase", display: "block", marginBottom: 5 }}>Message</label>
        <textarea value={msg} onChange={(e) => setMsg(e.target.value)} placeholder="Drop your message" rows={5} style={{ ...inputStyle, height: 110 }} />
      </div>
      <button onClick={send} style={{
        background: "var(--acc)", color: "#000", fontFamily: "'Space Mono',monospace", fontSize: 12, fontWeight: 700,
        letterSpacing: 2, textTransform: "uppercase", padding: "14px 28px", border: "none", cursor: "pointer",
        clipPath: "polygon(7px 0,100% 0,calc(100% - 7px) 100%,0 100%)", alignSelf: "flex-start",
      }}>
        Send Message ↗
      </button>
    </div>
  );
}

// ── TYPEWRITER ROLE ───────────────────────────────────────────────────────────
const ROLES = ["DEVELOPER", "DESIGNER", "TECH ENTHUSIAST", "PROBLEM SOLVER",
  "CREATIVE THINKER",
  "CODE CRAFTER",
  "VISIONARY",
  "SOFTWARE ENGINEER",
  "UI/UX DESIGNER",
  "WEB ARCHITECT",
  "SOLUTION BUILDER",
  "TECH EXPLORER",
  ];

function TypewriterRole() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [, setProgress] = useState(0); // 0→100 over DISPLAY_MS

  const DISPLAY_MS = 2600;
  const TRANSITION_MS = 400;

  useEffect(() => {
    let start = null;
    let raf;

    const tick = (ts) => {
      if (!start) start = ts;
      const elapsed = ts - start;
      const pct = Math.min((elapsed / DISPLAY_MS) * 100, 100);
      setProgress(pct);
      if (elapsed < DISPLAY_MS) {
        raf = requestAnimationFrame(tick);
      } else {
        setTimeout(() => {
          setRoleIdx((i) => (i + 1) % ROLES.length);
          setProgress(0);
          start = null;
          raf = requestAnimationFrame(tick);
        }, TRANSITION_MS);
      }
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [roleIdx]);

  return (
    <div style={{ display: "flex", alignItems: "center", gap: 16, marginTop: 6 }}>
      {/* "A" connector */}
      <span style={{
        fontFamily: "'Bebas Neue',sans-serif",
        fontSize: "clamp(38px,5.5vw,72px)",
        color: "var(--mut)",
        lineHeight: 1,
        flexShrink: 0,
      }}>A</span>

      {/* Role word only */}
      <span
        key={roleIdx}
        style={{
          fontFamily: "'Bebas Neue',sans-serif",
          fontSize: "clamp(38px,5.5vw,72px)",
          color: "var(--acc)",
          lineHeight: 1,
          letterSpacing: 2,
          display: "block",
          animation: "rk-sup .45s cubic-bezier(.16,1,.3,1) both",
        }}
      >
        {ROLES[roleIdx]}
      </span>
    </div>
  );
}

// ── MAIN PORTFOLIO ────────────────────────────────────────────────────────────
export default function RKPortfolio() {
  const [activeSection, setActiveSection] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showAllProjects, setShowAllProjects] = useState(false);
 
  const sectionIds = ["hero", "about", "skills", "projects", "exp", "certs", "contact"];
  const navLabels = ["home", "about", "skills", "projects", "experience", "certificates", "contact"];

  const scrollTo = (id) => document.getElementById("rk-" + id)?.scrollIntoView({ behavior: "smooth" });

  useEffect(() => {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          const idx = sectionIds.indexOf(e.target.id.replace("rk-", ""));
          if (idx !== -1) setActiveSection(idx);
        }
      });
    }, { threshold: 0.3 });
    sectionIds.forEach((id) => { const el = document.getElementById("rk-" + id); if (el) obs.observe(el); });
    return () => obs.disconnect();
  }, []);

  const certRef = useRef(null);
  const certAnimRef = useRef(null);
  const certPosRef = useRef(0);
  const certPausedRef = useRef(false);
  const certResumeTimer = useRef(null);

  useEffect(() => {
    const track = certRef.current;
    if (!track) return;
    let last = null;
    const speed = 0.1; // px per ms
    const step = (ts) => {
      if (!certPausedRef.current) {
        if (last !== null) certPosRef.current += speed * (ts - last);
        last = ts;
        const half = track.scrollWidth / 2;
        if (certPosRef.current >= half) certPosRef.current = 0;
        track.style.transform = `translateX(${-certPosRef.current}px)`;
      } else {
        last = null;
      }
      certAnimRef.current = requestAnimationFrame(step);
    };
    certAnimRef.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(certAnimRef.current);
  }, []);

  const CERT_CARD_W = 340; // card width + gap
  const handleCertNext = () => {
    certPausedRef.current = true;
    certPosRef.current += CERT_CARD_W;
    const half = (certRef.current?.scrollWidth || 0) / 2;
    if (certPosRef.current >= half) certPosRef.current = 0;
    if (certRef.current) {
      certRef.current.style.transition = 'transform .5s cubic-bezier(.16,1,.3,1)';
      certRef.current.style.transform = `translateX(${-certPosRef.current}px)`;
      setTimeout(() => { if (certRef.current) certRef.current.style.transition = ''; }, 520);
    }
    if (certResumeTimer.current) clearTimeout(certResumeTimer.current);
    certResumeTimer.current = setTimeout(() => { certPausedRef.current = false; }, 2500);
  };
  const handleCertPrev = () => {
    certPausedRef.current = true;
    certPosRef.current -= CERT_CARD_W;
    if (certPosRef.current < 0) certPosRef.current = (certRef.current?.scrollWidth || 0) / 2 - CERT_CARD_W;
    if (certRef.current) {
      certRef.current.style.transition = 'transform .5s cubic-bezier(.16,1,.3,1)';
      certRef.current.style.transform = `translateX(${-certPosRef.current}px)`;
      setTimeout(() => { if (certRef.current) certRef.current.style.transition = ''; }, 520);
    }
    if (certResumeTimer.current) clearTimeout(certResumeTimer.current);
    certResumeTimer.current = setTimeout(() => { certPausedRef.current = false; }, 2500);
  };

  const CSS = `
    @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500&family=Space+Mono:wght@400;700&display=swap');
    :root { --bg:#080810; --sur:#0f0f1a; --brd:rgba(255,255,255,0.06); --acc:#e8ff47; --txt:#f0f0f0; --mut:#6b6b80; --blu:#04e5fe; }
    html, body { margin:0; padding:0; background:#080810; overflow-x:hidden; }
    #rk-root { background:var(--bg); color:var(--txt); font-family:'DM Sans',sans-serif; overflow-x:hidden; border-radius:0; overflow-y:auto; height:100%; margin:0; padding:0; }
    #rk-root * { box-sizing:border-box; margin:0; padding:0; }
    #rk-root a { text-decoration:none; color:inherit; }
    #rk-root input, #rk-root textarea { color:var(--txt); }
    #rk-root input::placeholder, #rk-root textarea::placeholder { color:var(--mut); }
    #rk-root input:focus, #rk-root textarea:focus { border-color:var(--acc) !important; }
    @keyframes rk-fup { from{opacity:0;transform:translateY(20px)} to{opacity:1;transform:translateY(0)} }
    @keyframes rk-sup { from{opacity:0;transform:translateY(100%)} to{opacity:1;transform:translateY(0)} }
    @keyframes rk-spulse { 0%,100%{opacity:.4} 50%{opacity:1} }
    @keyframes rk-cslide { 0%{transform:translateX(0)} 100%{transform:translateX(-50%)} }
    .rk-hero-eyebrow { animation: rk-fup .8s .3s both; }
    .rk-hero-sub { animation: rk-fup .8s 1.1s both; }
    .rk-hero-cta { animation: rk-fup .8s 1.3s both; }
    .rk-scroll-ind { animation: rk-fup 1s 1.8s both; }
    .rk-ln1 span { animation: rk-sup .9s cubic-bezier(.16,1,.3,1) .5s both; }
    .rk-ln2 span { animation: rk-sup .9s cubic-bezier(.16,1,.3,1) .65s both; color:var(--acc); }
    .rk-ln3 span { animation: rk-sup .9s cubic-bezier(.16,1,.3,1) .8s both; }
    .rk-scline { width:1px; height:50px; background:linear-gradient(to bottom,var(--acc),transparent); animation:rk-spulse 2s ease-in-out infinite; }
    .rk-hero-grid { display:grid; grid-template-columns:1fr 1fr; gap:60px; align-items:center; justify-items:center; width:100%; max-width:1100px; margin:0 auto; }
    .rk-photo-wrap { position:relative; width:320px; height:400px; margin:0 auto; }
    .rk-photo-img { width:100%; height:100%; object-fit:cover; border-radius:20px; display:block; position:relative; z-index:2; animation: rk-float 4s ease-in-out infinite; filter: drop-shadow(0 30px 60px rgba(232,255,71,0.18)) drop-shadow(0 0 80px rgba(4,229,254,0.10)); }
    .rk-photo-placeholder { width:100%; height:100%; border-radius:20px; background:linear-gradient(160deg,#111128 0%,#0d2240 55%,#061a10 100%); display:flex; flex-direction:column; align-items:center; justify-content:center; gap:8px; position:relative; z-index:2; animation: rk-float 4s ease-in-out infinite; filter: drop-shadow(0 30px 60px rgba(232,255,71,0.18)) drop-shadow(0 0 80px rgba(4,229,254,0.10)); overflow:hidden; }
    .rk-photo-glow { position:absolute; width:260px; height:260px; border-radius:50%; background:radial-gradient(circle, rgba(232,255,71,0.12) 0%, transparent 70%); bottom:-60px; left:50%; transform:translateX(-50%); filter:blur(30px); animation: rk-glow-pulse 4s ease-in-out infinite; z-index:1; pointer-events:none; }
    .rk-photo-glow2 { position:absolute; width:200px; height:200px; border-radius:50%; background:radial-gradient(circle, rgba(4,229,254,0.1) 0%, transparent 70%); top:-40px; right:-20px; filter:blur(24px); animation: rk-glow-pulse 4s ease-in-out infinite 2s; z-index:1; pointer-events:none; }
    @keyframes rk-float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-14px)} }
    @keyframes rk-glow-pulse { 0%,100%{opacity:.6} 50%{opacity:1} }
    .rk-role-tag { display:inline-flex; align-items:center; gap:8px; background:rgba(232,255,71,.07); border:1px solid rgba(232,255,71,.18); padding:6px 14px; border-radius:2px; font-family:'Space Mono',monospace; font-size:10px; color:var(--acc); letter-spacing:3px; text-transform:uppercase; margin-bottom:24px; animation:rk-fup .8s .2s both; }
    .rk-name-line { display:block; overflow:hidden; }
    .rk-name-line span { display:block; }
    .rk-divider-line { width:60px; height:2px; background:var(--acc); margin:24px 0; animation:rk-fup .8s 1s both; }
    .rk-role-pills { display:flex; gap:10px; flex-wrap:wrap; margin:20px 0 32px; animation:rk-fup .8s 1.2s both; }
    .rk-pill { font-family:'Space Mono',monospace; font-size:10px; letter-spacing:2px; text-transform:uppercase; padding:6px 14px; border:1px solid rgba(255,255,255,.12); color:var(--mut); position:relative; overflow:hidden; }
    .rk-pill.accent { border-color:var(--acc); color:var(--acc); background:rgba(232,255,71,.06); }
    .rk-photo-anim { animation: rk-fup 1s .6s both; }
    @media(max-width:750px){
      .rk-hero-grid { grid-template-columns:1fr !important; text-align:center; }
      .rk-hero-grid > div:last-child { order:-1; }
      .rk-photo-wrap { width:220px; height:280px; margin:0 auto 10px; }
      .rk-role-pills { justify-content:center; }
      .rk-divider-line { margin-left:auto; margin-right:auto; }
      .rk-agrid{grid-template-columns:1fr !important;}
      .rk-agrid > div:first-child { display:flex; justify-content:center; }
      .rk-aframe { margin:0 auto; }
      .rk-cogrid{grid-template-columns:1fr !important;}
      .rk-nav-ul{display:none !important;}
      .rk-hamburger{display:flex !important;}
    }
    .rk-ctrack-anim { animation: rk-cslide 30s linear infinite; }
    .rk-ctrack-anim:hover { animation-play-state:paused; }
    .rk-tl::before { content:''; position:absolute; left:0; top:6px; bottom:6px; width:1px; background:linear-gradient(to bottom,var(--acc),transparent); }
    .rk-tldot { position:absolute; left:-34px; top:5px; width:10px; height:10px; background:var(--acc); clip-path:polygon(50% 0,100% 50%,50% 100%,0 50%); }
    .rk-aframe::after { content:''; position:absolute; top:10px; left:10px; right:-10px; bottom:-10px; border:3px solid var(--blu); opacity:.5; border-radius:2px; pointer-events:none; }
    .rk-slbl::after { content:''; width:48px; height:1px; background:var(--acc); display:inline-block; margin-left:10px; vertical-align:middle; }
    .rk-hamburger { display:none; flex-direction:column; justify-content:center; gap:5px; width:28px; height:28px; cursor:pointer; z-index:20; background:none; border:none; padding:2px; }
    .rk-hamburger span { display:block; width:100%; height:2px; background:var(--acc); border-radius:2px; transition:all .35s cubic-bezier(.16,1,.3,1); transform-origin:center; }
    .rk-hamburger span:nth-child(2) { width:70%; }
    .rk-hamburger.open span:nth-child(1) { transform:translateY(7px) rotate(45deg); }
    .rk-hamburger.open span:nth-child(2) { opacity:0; transform:scaleX(0); }
    .rk-hamburger.open span:nth-child(3) { transform:translateY(-7px) rotate(-45deg); width:100%; }
    .rk-mobile-menu { position:fixed; inset:0; background:rgba(8,8,16,0.97); backdrop-filter:blur(16px); z-index:15; display:flex; flex-direction:column; align-items:center; justify-content:center; pointer-events:none; opacity:0; transition:opacity .3s ease; }
    .rk-mobile-menu.open { opacity:1; pointer-events:all; }
    .rk-mobile-menu ul { list-style:none; text-align:center; padding:0; margin:0; }
    .rk-mobile-menu li { overflow:hidden; transform:translateY(30px); opacity:0; transition:transform .4s cubic-bezier(.16,1,.3,1), opacity .4s; }
    .rk-mobile-menu.open li { transform:translateY(0); opacity:1; }
    .rk-mobile-menu.open li:nth-child(1){transition-delay:.05s}
    .rk-mobile-menu.open li:nth-child(2){transition-delay:.1s}
    .rk-mobile-menu.open li:nth-child(3){transition-delay:.15s}
    .rk-mobile-menu.open li:nth-child(4){transition-delay:.2s}
    .rk-mobile-menu.open li:nth-child(5){transition-delay:.25s}
    .rk-mobile-menu.open li:nth-child(6){transition-delay:.3s}
    .rk-mobile-menu.open li:nth-child(7){transition-delay:.35s}
    .rk-mobile-nav-link { display:block; font-family:'Bebas Neue',sans-serif; font-size:clamp(36px,10vw,52px); letter-spacing:4px; color:var(--mut); cursor:pointer; padding:6px 0; transition:color .2s, letter-spacing .2s; text-align:center; }
    .rk-mobile-nav-link:hover, .rk-mobile-nav-link.active { color:var(--acc); letter-spacing:6px; }
    .rk-mobile-nav-num { font-family:'Space Mono',monospace; font-size:9px; color:rgba(232,255,71,.4); letter-spacing:3px; display:block; text-align:center; margin-bottom:2px; }
    .rk-menu-divider { width:40px; height:1px; background:var(--brd); margin:20px auto; }
    .rk-menu-socials { display:flex; gap:24px; justify-content:center; margin-top:4px; }
    .rk-menu-soc { font-family:'Space Mono',monospace; font-size:10px; color:var(--mut); letter-spacing:2px; cursor:pointer; transition:color .2s; text-transform:uppercase; }
    .rk-menu-soc:hover { color:var(--acc); }
  `;

  return (
    <>
      <style>{CSS}</style>
      <div id="rk-root">
        {/* MOBILE FULLSCREEN MENU */}
        <div className={`rk-mobile-menu${menuOpen ? " open" : ""}`}>
          <ul>
            {navLabels.map((lbl, i) => (
              <li key={lbl}>
                <span className="rk-mobile-nav-num">0{i + 1}</span>
                <span
                  className={`rk-mobile-nav-link${activeSection === i ? " active" : ""}`}
                  onClick={() => { scrollTo(sectionIds[i]); setMenuOpen(false); }}
                >{lbl}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* NAV */}
        <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "14px 28px", background: "rgba(8,8,16,0.9)", borderBottom: "1px solid var(--brd)", position: "sticky", top: 0, zIndex: 16, backdropFilter: "blur(8px)" }}>
          <div style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: 36, color: "var(--acc)", letterSpacing: 3 }}>RK</div>
          <ul className="rk-nav-ul" style={{ display: "flex", gap: 20, listStyle: "none" }}>
            {navLabels.map((lbl, i) => (
              <li key={lbl}>
                <span onClick={() => scrollTo(sectionIds[i])} style={{ fontFamily: "'Space Mono',monospace", fontSize: 13, color: activeSection === i ? "var(--acc)" : "var(--mut)", letterSpacing: 2, textTransform: "uppercase", cursor: "pointer", transition: "color .2s" }}>{lbl}</span>
              </li>
            ))}
          </ul>
          {/* Hamburger */}
          <button
            className={`rk-hamburger${menuOpen ? " open" : ""}`}
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            <span />
            <span />
            <span />
          </button>
        </nav>

        {/* HERO */}
        <section id="rk-hero" style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "100px 28px 80px", position: "relative", overflow: "hidden" }}>
          <ParticleCanvas />
          {/* Glow blobs */}
          <div style={{ position: "absolute", top: "20%", left: "5%", width: 400, height: 400, background: "radial-gradient(circle, rgba(232,255,71,0.04) 0%, transparent 70%)", pointerEvents: "none" }} />
          <div style={{ position: "absolute", bottom: "10%", right: "10%", width: 300, height: 300, background: "radial-gradient(circle, rgba(4,229,254,0.05) 0%, transparent 70%)", pointerEvents: "none" }} />

          <div className="rk-hero-grid" style={{ position: "relative", zIndex: 2 }}>
            {/* LEFT — Text */}
            <div>
              {/* Role tag */}
              <div className="rk-role-tag">
                <span style={{ width: 6, height: 6, background: "var(--acc)", borderRadius: "50%", display: "inline-block", animation: "rk-spulse 1.5s ease-in-out infinite" }} />
                Full Stack Developer
              </div>

              {/* Name — single line */}
              <h1 style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: "clamp(38px,5.5vw,72px)", lineHeight: 1, letterSpacing: 2, marginBottom: 0, overflow: "hidden" }}>
                <span style={{ display: "block", animation: "rk-sup .9s cubic-bezier(.16,1,.3,1) .4s both" }}>
                  I AM{" "}
                  <span style={{ color: "var(--acc)" }}>RANJITH KUMAR</span>
                </span>
              </h1>

              {/* Typewriter role line */}
              <div style={{ animation: "rk-fup .8s .9s both", overflow: "hidden" }}>
                <TypewriterRole />
              </div>

              <div className="rk-divider-line" style={{ marginTop: 28 }} />

              {/* Sub text */}
              <p className="rk-hero-sub" style={{ fontSize: 15, color: "var(--mut)", maxWidth: 440, lineHeight: 1.8, fontWeight: 300, marginBottom: 36 }}>
                I craft digital experiences at the intersection of beautiful design and bulletproof engineering. Let's build something remarkable.
              </p>

              {/* CTAs */}
              <div className="rk-hero-cta" style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <button onClick={() => scrollTo("projects")} style={{ background: "var(--acc)", color: "#000", fontFamily: "'Space Mono',monospace", fontSize: 12, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", padding: "14px 28px", border: "none", cursor: "pointer", clipPath: "polygon(7px 0,100% 0,calc(100% - 7px) 100%,0 100%)" }}>
                  View My Work ↓
                </button>
                <button onClick={() => scrollTo("contact")} style={{ background: "transparent", color: "var(--txt)", fontFamily: "'Space Mono',monospace", fontSize: 12, letterSpacing: 2, textTransform: "uppercase", padding: "14px 28px", border: "1px solid var(--brd)", cursor: "pointer" }}>
                  Let's Talk
                </button>
              </div>
            </div>

            {/* RIGHT — Photo */}
            <div className="rk-photo-anim" style={{ display: "flex", justifyContent: "center" }}>
              <div className="rk-photo-wrap">
                {/* Glow blobs behind photo */}
                <div className="rk-photo-glow" />
                <div className="rk-photo-glow2" />
                {/* 
                  To use a real photo, replace the div below with:
                  <img src="your-photo.jpg" alt="Ranjith Kumar" className="rk-photo-img" />
                */}
                <img
                  src="/public/ranjith.jpeg"
                  alt="Ranjith Kumar"
                  className="rk-photo-img"
                />
              </div>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="rk-scroll-ind" style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6, position: "absolute", bottom: 28, left: "50%", transform: "translateX(-50%)" }}>
            <div className="rk-scline" />
            <span style={{ fontFamily: "'Space Mono',monospace", fontSize: 9, color: "var(--mut)", letterSpacing: 3, textTransform: "uppercase", writingMode: "vertical-rl" }}>scroll</span>
          </div>
        </section>

        {/* ABOUT */}
        <section id="rk-about" style={{ background: "var(--bg)" }}>
          <div style={{ padding: "70px 28px", maxWidth: 1100, margin: "0 auto" }}>
            <Reveal>
              <div className="rk-slbl" style={{ fontFamily: "'Space Mono',monospace", fontSize: 11, color: "var(--acc)", letterSpacing: 4, textTransform: "uppercase", display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>01 — About</div>
              <div style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: "clamp(40px,6vw,68px)", letterSpacing: 2, lineHeight: 1, marginBottom: 48 }}>THE PERSON<br />BEHIND THE CODE</div>
            </Reveal>
            <Reveal delay={100}>
              <div className="rk-agrid" style={{ display: "grid", gridTemplateColumns: "260px 1fr", gap: 56, alignItems: "center" }}>
                <div style={{ position: "relative" }}>
                  <div className="rk-aframe" style={{ position: "relative", width: 260, aspectRatio: "3/4" }}>
                   <img src="/public/my.png" alt="Ranjith Kumar" style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: 2 }} />
                  </div>
                </div>
                <div>
                  {["Hey! I'm <strong>Ranjith Kumar</strong>, a passionate MERN full-stack developer and software enthusiast focused on building modern, scalable web applications. I enjoy transforming complex ideas into simple, efficient, and impactful digital solutions.",
                    "My approach combines strong problem-solving skills with a focus on clean design and performance. Whether I'm developing robust backend systems or creating responsive user interfaces, I always aim to build applications that are both reliable and user-friendly.",
                    "Outside of development, I enjoy exploring new technologies, building innovative side projects, and continuously improving my skills to grow as a software developer in the ever-evolving tech world. "
                  ].map((t, i) => <p key={i} dangerouslySetInnerHTML={{ __html: t }} style={{ color: "var(--mut)", lineHeight: 1.8, fontSize: 15, fontWeight: 300, marginBottom: 16 }} />)}
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* SKILLS */}
        <section id="rk-skills" style={{ background: "var(--sur)" }}>
          <div style={{ padding: "70px 28px", maxWidth: 1100, margin: "0 auto" }}>
            <Reveal>
              <div className="rk-slbl" style={{ fontFamily: "'Space Mono',monospace", fontSize: 11, color: "var(--acc)", letterSpacing: 4, textTransform: "uppercase", display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>02 — Skills</div>
              <div style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: "clamp(40px,6vw,68px)", letterSpacing: 2, lineHeight: 1, marginBottom: 48 }}>TOOLS OF<br />THE TRADE</div>
            </Reveal>
            <Reveal delay={100}>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(160px,1fr))", gap: 14 }}>
                {SKILLS.map((s) => <SkillCard key={s.n} skill={s} />)}
              </div>
            </Reveal>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="rk-projects" style={{ background: "var(--bg)" }}>
          <div style={{ padding: "70px 28px", maxWidth: 1100, margin: "0 auto" }}>
            <Reveal>
              <div className="rk-slbl" style={{ fontFamily: "'Space Mono',monospace", fontSize: 11, color: "var(--acc)", letterSpacing: 4, textTransform: "uppercase", display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>03 — Projects</div>
              <div style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: "clamp(40px,6vw,68px)", letterSpacing: 2, lineHeight: 1, marginBottom: 48 }}>SELECTED<br />WORK</div>
            </Reveal>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(300px,1fr))", gap: 20 }}>
              {(showAllProjects ? PROJECTS : PROJECTS.slice(0, 6)).map((p) => (
                <Reveal key={p.n} delay={80}><ProjectCard project={p} /></Reveal>
              ))}
            </div>
            {PROJECTS.length > 6 && (
              <div style={{ display: "flex", justifyContent: "center", marginTop: 40 }}>
                <button
                  onClick={() => setShowAllProjects((v) => !v)}
                  style={{
                    fontFamily: "'Space Mono',monospace", fontSize: 11, letterSpacing: 2, textTransform: "uppercase",
                    padding: "14px 36px", border: "1px solid var(--brd)", background: "transparent", color: "var(--mut)",
                    cursor: "pointer", transition: "all .25s", display: "flex", alignItems: "center", gap: 10,
                  }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--acc)"; e.currentTarget.style.color = "var(--acc)"; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--brd)"; e.currentTarget.style.color = "var(--mut)"; }}
                >
                  {showAllProjects ? "Show Less ↑" : `Show More (${PROJECTS.length - 6} more) ↓`}
                </button>
              </div>
            )}
          </div>
        </section>

        {/* EXPERIENCE */}
        <section id="rk-exp" style={{ background: "var(--sur)" }}>
          <div style={{ padding: "70px 28px", maxWidth: 1100, margin: "0 auto" }}>
            <Reveal>
              <div className="rk-slbl" style={{ fontFamily: "'Space Mono',monospace", fontSize: 11, color: "var(--acc)", letterSpacing: 4, textTransform: "uppercase", display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>04 — Experience</div>
              <div style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: "clamp(40px,6vw,68px)", letterSpacing: 2, lineHeight: 1, marginBottom: 48 }}>THE JOURNEY<br />SO FAR</div>
            </Reveal>
            <Reveal delay={100}>
              <div className="rk-tl" style={{ position: "relative", paddingLeft: 28, maxWidth: 680 }}>
                {EXP.map((x, i) => (
                  <div key={i} style={{ position: "relative", marginBottom: 48 }}>
                    <div className="rk-tldot" />
                    <div style={{ fontFamily: "'Space Mono',monospace", fontSize: 10, color: "var(--acc)", letterSpacing: 2, marginBottom: 6 }}>{x.p}</div>
                    <div style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: 24, letterSpacing: 2, marginBottom: 2 }}>{x.r}</div>
                    <div style={{ fontSize: 13, color: "var(--mut)", marginBottom: 8, fontWeight: 300 }}>{x.c}</div>
                    <div style={{ fontSize: 14, color: "var(--mut)", lineHeight: 1.7, fontWeight: 300 }}>{x.d}</div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* CERTIFICATES */}
        <section id="rk-certs" style={{ background: "var(--bg)", paddingBottom: 0, }}>
          <div style={{ padding: "70px 28px 0", maxWidth: 1100, margin: "0 auto" }}>
            <Reveal>
              <div className="rk-slbl" style={{ fontFamily: "'Space Mono',monospace", fontSize: 11, color: "var(--acc)", letterSpacing: 4, textTransform: "uppercase", display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>05 — Certificates</div>
              <div style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: "clamp(40px,6vw,68px)", letterSpacing: 2, lineHeight: 1, marginBottom: 32 }}>CREDENTIALS<br />&amp; ACHIEVEMENTS</div>
            </Reveal>
          </div>
          <Reveal delay={100}>
            <div style={{ overflow: "hidden", WebkitMaskImage: "linear-gradient(to right,transparent,black 6%,black 94%,transparent)", maskImage: "linear-gradient(to right,transparent,black 6%,black 94%,transparent)" }}>
              <div
                ref={certRef}
                style={{ display: "flex", gap: 20, width: "max-content", padding: "8px 28px" }}
                onMouseEnter={() => { certPausedRef.current = true; }}
                onMouseLeave={() => { certPausedRef.current = false; }}
              >
                {[...CERTS, ...CERTS].map((c, i) => <CertCard key={i} cert={c} />)}
              </div>
            </div>
            <div style={{ display: "flex", justifyContent: "center", gap: 10, padding: "24px 0 70px" }}>
              <button onClick={handleCertPrev} style={{ width: 42, height: 42, background: "var(--sur)", border: "1px solid var(--brd)", color: "var(--txt)", fontSize: 18, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", clipPath: "polygon(6px 0,100% 0,calc(100% - 6px) 100%,0 100%)", transition: "all .2s" }}
                onMouseEnter={e => { e.currentTarget.style.background = "var(--acc)"; e.currentTarget.style.color = "#000"; }}
                onMouseLeave={e => { e.currentTarget.style.background = "var(--sur)"; e.currentTarget.style.color = "var(--txt)"; }}>←</button>
              <button onClick={handleCertNext} style={{ width: 42, height: 42, background: "var(--sur)", border: "1px solid var(--brd)", color: "var(--txt)", fontSize: 18, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", clipPath: "polygon(6px 0,100% 0,calc(100% - 6px) 100%,0 100%)", transition: "all .2s" }}
                onMouseEnter={e => { e.currentTarget.style.background = "var(--acc)"; e.currentTarget.style.color = "#000"; }}
                onMouseLeave={e => { e.currentTarget.style.background = "var(--sur)"; e.currentTarget.style.color = "var(--txt)"; }}>→</button>
                          </div>
          </Reveal>
        </section>

        {/* CONTACT */}
        <section id="rk-contact" style={{ background: "var(--sur)" }}>
          <div style={{ padding: "70px 28px", maxWidth: 1100, margin: "0 auto" }}>
            <Reveal>
              <div className="rk-slbl" style={{ fontFamily: "'Space Mono',monospace", fontSize: 11, color: "var(--acc)", letterSpacing: 4, textTransform: "uppercase", display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>06 — Contact</div>
              <div style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: "clamp(40px,6vw,68px)", letterSpacing: 2, lineHeight: 1, marginBottom: 48 }}>LET'S BUILD<br />SOMETHING</div>
            </Reveal>
            <div className="rk-cogrid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "start" }}>

              {/* LEFT — Social links */}
              <Reveal delay={100}>
                <div>
                  <p style={{ fontFamily: "'Space Mono',monospace", fontSize: 11, color: "var(--mut)", letterSpacing: 2, textTransform: "uppercase", marginBottom: 32 }}>Find me on</p>
                  <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
                    {[
                      {
                        label: "GitHub",  href: "https://github.com/RK-CODEDEV",
                        svg: <svg viewBox="0 0 24 24" fill="currentColor" style={{width:24,height:24}}><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
                      },
                      {
                        label: "LinkedIn", href: "https://www.linkedin.com/in/ranjithkumar-cd/",
                        svg: <svg viewBox="0 0 24 24" fill="currentColor" style={{width:24,height:24}}><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                      },
                      {
                        label: "Twitter / X", href: "http://x.com/ArtRanjithKumar",
                        svg: <svg viewBox="0 0 24 24" fill="currentColor" style={{width:24,height:24}}><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.253 5.622L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z"/></svg>
                      },
                      {
                        label: "Email", href: "mailto:ranjithk5789@gmail.com",
                        svg: <svg viewBox="0 0 24 24" fill="currentColor" style={{width:24,height:24}}><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"/></svg>
                      },
                    ].map(({ label, href, svg }) => (
                      <a key={label} href={href} title={label}
                        style={{ width: 52, height: 52, borderRadius: 10, border: "1px solid var(--brd)", background: "var(--bg)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--mut)", textDecoration: "none", transition: "all .25s" }}
                        onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--acc)"; e.currentTarget.style.color = "var(--acc)"; e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.background = "rgba(232,255,71,0.06)"; }}
                        onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--brd)"; e.currentTarget.style.color = "var(--mut)"; e.currentTarget.style.transform = "none"; e.currentTarget.style.background = "var(--bg)"; }}
                      >
                        {svg}
                      </a>
                    ))}
                  </div>
                </div>
              </Reveal>

              {/* RIGHT — Form */}
              <Reveal delay={200}><ContactForm /></Reveal>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer style={{ padding: 28, borderTop: "1px solid var(--brd)", display: "flex", justifyContent: "center", alignItems: "center" }}>
          <p style={{ fontFamily: "'Space Mono',monospace", fontSize: 11, color: "var(--mut)", letterSpacing: 2 }}>© 2026 RK-CODEDEV</p>
        </footer>
      </div>
    </>
  );
}
