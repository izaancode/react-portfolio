import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formSent, setFormSent] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const projects = [
    {
      number: "01",
      title: "ProTodo",
      category: "REACT · JAVASCRIPT",
      description: "A clean task manager built to make everyday planning feel simple and satisfying.",
      tags: ["React", "CSS", "Local Storage"],
      tone: "todo",
      link: "https://github.com/",
    },
    {
      number: "02",
      title: "Recipe Journal",
      category: "HTML · CSS · JAVASCRIPT",
      description: "A food-focused website with recipe cards, clear categories and a responsive layout.",
      tags: ["HTML", "CSS", "JavaScript"],
      tone: "recipe",
      link: "https://github.com/",
    },
    {
      number: "03",
      title: "Shop Studio",
      category: "REACT · CSS",
      description: "A modern e-commerce concept with a tidy product grid and a considered visual style.",
      tags: ["React", "UI Design", "Responsive"],
      tone: "shop",
      link: "https://github.com/",
    },
  ];

  const skills = [
    ["01", "HTML5", "Structure"],
    ["02", "CSS3", "Visual design"],
    ["03", "JavaScript", "Interactivity"],
    ["04", "React", "Components"],
    ["05", "Bootstrap", "UI toolkit"],
    ["06", "Git & GitHub", "Version control"],
    ["07", "Responsive UI", "All screens"],
    ["08", "UI Design", "Layout & detail"],
  ];

  useEffect(() => {
    const revealItems = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    revealItems.forEach((item) => observer.observe(item));

    const updateProgress = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;
      setScrollProgress(progress);

      // Background objects move at different speeds while the page scrolls.
      const parallaxObjects = document.querySelectorAll(".parallax-object");
      parallaxObjects.forEach((object) => {
        const speed = Number(object.dataset.speed) || 0.1;
        object.style.transform = `translate3d(0, ${window.scrollY * speed}px, 0)`;
      });
    };

    window.addEventListener("scroll", updateProgress);
    updateProgress();

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", updateProgress);
    };
  }, []);

  function closeMenu() {
    setMenuOpen(false);
  }

  function handleSubmit(event) {
    event.preventDefault();

    const form = event.target;
    const name = form.elements.name.value;
    const email = form.elements.email.value;
    const message = form.elements.message.value;
    const subject = encodeURIComponent("Portfolio message from " + name);
    const body = encodeURIComponent(
      "Name: " + name + "\nEmail: " + email + "\n\nMessage: " + message
    );

    window.location.href =
      "mailto:izaanalikhan123@gmail.com?subject=" + subject + "&body=" + body;

    setFormSent(true);
    form.reset();
  }

  return (
    <div className="portfolio">
      <div className="scroll-progress" style={{ width: scrollProgress + "%" }} />

      <div className="parallax-backdrop" aria-hidden="true">
        <span className="parallax-object parallax-ring" data-speed="0.12" />
        <span className="parallax-object parallax-orb" data-speed="0.22" />
        <span className="parallax-object parallax-diamond" data-speed="0.08" />
        <span className="parallax-object parallax-cross" data-speed="0.16">✳</span>
        <span className="parallax-object parallax-small-orb" data-speed="0.28" />
        <span className="parallax-object parallax-planet" data-speed="0.18"><i /></span>
        <span className="parallax-object parallax-cube" data-speed="0.32"><i /><b /></span>
      </div>

      <header className="navbar">
        <a href="#home" className="logo" onClick={closeMenu} aria-label="Izaan home">
          <span className="logo-mark">i<span>.</span></span>
          <span>izaan<span className="logo-dot">.</span></span>
        </a>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        <nav className={menuOpen ? "nav-links active" : "nav-links"}>
          <a href="#home" onClick={closeMenu}>Home</a>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#skills" onClick={closeMenu}>Skills</a>
          <a href="#projects" onClick={closeMenu}>Projects</a>
        </nav>

        <a href="#contact" className="nav-cta">Let's talk <span>↗</span></a>
      </header>

      <main>
        <section className="hero section" id="home">
          <div className="hero-content">
            <div className="availability reveal">
              <span className="status-dot" />
              <span>CURIOUS BY NATURE · BUILDING EVERY DAY</span>
            </div>

            <p className="eyebrow intro reveal">Hey there, I'm Izaan</p>
            <h1 className="reveal">
              I build things<br />
              for the <span className="hero-highlight">web<span className="period">.</span></span>
            </h1>
            <p className="hero-description reveal">
              A frontend developer in the making, turning ideas into clean,
              thoughtful and responsive digital experiences with code.
            </p>

            <div className="hero-buttons reveal">
              <a href="#projects" className="primary-button">Explore my work <span>↗</span></a>
              <a href="#contact" className="text-button">Say hello <span>↗</span></a>
            </div>

            <div className="hero-meta reveal">
              <span><span className="meta-line" /> Based in Pakistan</span>
              <span>Currently learning React</span>
            </div>
          </div>

          <div className="hero-visual reveal">
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
            <div className="hero-glow" />
            <div className="hero-code-card">
              <div className="code-top">
                <div className="window-dots"><i /><i /><i /></div>
                <span>hello-world.jsx</span>
                <span className="code-top-icon">⌘</span>
              </div>
              <div className="code-body">
                <p><span className="code-muted">01</span> <span className="code-purple">const</span> developer = {"{"}</p>
                <p><span className="code-muted">02</span> &nbsp; name: <span className="code-green">"Izaan Ali"</span>,</p>
                <p><span className="code-muted">03</span> &nbsp; focus: <span className="code-green">"Frontend"</span>,</p>
                <p><span className="code-muted">04</span> &nbsp; learning: <span className="code-green">"React"</span>,</p>
                <p><span className="code-muted">05</span> &nbsp; mindset: <span className="code-green">"Keep building"</span></p>
                <p><span className="code-muted">06</span> {"}"};</p>
                <div className="code-cursor" />
              </div>
              <div className="code-footer"><span className="code-live" /> READY TO CREATE <span>UTF-8</span></div>
            </div>
            <div className="floating-chip chip-react"><span className="chip-symbol">⚛</span> React learner</div>
            <div className="floating-chip chip-ui"><span className="chip-symbol">✳</span> Detail matters</div>
            <div className="visual-index">01 <span /> PORTFOLIO / 2026</div>
          </div>

          <a href="#about" className="scroll-cue"><span className="scroll-mouse" /> Scroll to explore <span>↓</span></a>
        </section>

        <section className="section about-section" id="about">
          <div className="section-kicker reveal"><span>01</span> A LITTLE ABOUT ME</div>
          <div className="about-grid">
            <div className="section-title-wrap reveal">
              <h2>Learning the craft.<br /><span className="muted-heading">Making it real.</span></h2>
            </div>
            <div className="about-copy reveal">
              <p className="about-lead">
                I’m a web development learner who enjoys bringing ideas to life through design and code.
              </p>
              <p>
                I started with HTML and CSS, and I’m now building my skills in JavaScript and React.
                Every project is a chance to try something new, solve a problem and make the next
                version a little better.
              </p>
              <a href="#contact" className="underlined-link">Have something in mind? <span>↗</span></a>
            </div>
          </div>

          <div className="about-stats reveal">
            <div><strong>01<span>+</span></strong><span>Curiosity first</span></div>
            <div><strong>08</strong><span>Skills in progress</span></div>
            <div><strong>∞</strong><span>Things to learn</span></div>
            <div className="stat-note">Small steps.<br /><em>Real progress.</em></div>
          </div>
        </section>

        <section className="section skills-section" id="skills">
          <div className="section-heading reveal">
            <div className="section-kicker"><span>02</span> MY TOOLKIT</div>
            <h2>Tools I’m growing <span className="muted-heading">with.</span></h2>
            <p>My current stack — learning by doing, one project at a time.</p>
          </div>
          <div className="skills-grid">
            {skills.map((skill) => (
              <article className="skill-card reveal" key={skill[1]}>
                <div className="skill-top"><span>{skill[0]}</span><span className="skill-arrow">↗</span></div>
                <h3>{skill[1]}</h3>
                <p>{skill[2]}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section projects-section" id="projects">
          <div className="projects-heading reveal">
            <div className="section-heading">
              <div className="section-kicker"><span>03</span> SELECTED WORK</div>
              <h2>Made while <span className="muted-heading">learning.</span></h2>
              <p>A few concepts and projects from my frontend journey.</p>
            </div>
            <a href="https://github.com/" target="_blank" rel="noreferrer" className="outline-button">
              GitHub profile <span>↗</span>
            </a>
          </div>

          <div className="projects-grid">
            {projects.map((project) => (
              <article className="project-card reveal" key={project.number}>
                <div className={"project-art " + project.tone}>
                  <div className="project-art-top"><span>{project.number} / 03</span><span>↗</span></div>
                  {project.tone === "todo" && (
                    <div className="mock-todo">
                      <div className="mock-heading"><span className="mock-check">✓</span><strong>Today’s focus</strong><span>•••</span></div>
                      <div className="mock-task done"><i>✓</i><span>Plan the week</span></div>
                      <div className="mock-task"><i /> <span>Build something useful</span></div>
                      <div className="mock-task"><i /> <span>Keep learning React</span></div>
                      <div className="mock-add">＋ Add a new task</div>
                    </div>
                  )}
                  {project.tone === "recipe" && (
                    <div className="mock-recipe">
                      <div className="recipe-sun">✳</div>
                      <span className="recipe-small">GOOD FOOD, GOOD MOOD</span>
                      <strong>Made with<br />a little love.</strong>
                      <div className="recipe-pill">Explore recipes ↗</div>
                    </div>
                  )}
                  {project.tone === "shop" && (
                    <div className="mock-shop">
                      <div className="shop-head"><strong>studio<span>.</span></strong><span>⌕　♡　▢</span></div>
                      <div className="shop-feature"><div className="shop-shape" /><div><small>NEW COLLECTION</small><strong>Everyday<br />essentials.</strong><span>Explore the edit ↗</span></div></div>
                      <div className="shop-swatches"><i /><i /><i /><i /></div>
                    </div>
                  )}
                </div>
                <div className="project-info">
                  <p className="project-category">{project.category}</p>
                  <h3>{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                  <a href={project.link} target="_blank" rel="noreferrer" className="project-link">View project <span>↗</span></a>
                </div>
              </article>
            ))}
          </div>
          <p className="projects-note reveal"><span>✳</span> More experiments and projects coming soon.</p>
        </section>

        <section className="section contact-section" id="contact">
          <div className="contact-copy reveal">
            <div className="section-kicker"><span>04</span> LET’S CONNECT</div>
            <h2>Have an idea?<br /><span className="muted-heading">Let’s talk.</span></h2>
            <p>I’m always happy to connect, learn something new or hear about an interesting idea.</p>
            <a href="mailto:izaanalikhan123@gmail.com" className="contact-email">izaanalikhan123@gmail.com <span>↗</span></a>
            <div className="contact-decoration">SAY<br /><span>HELLO.</span></div>
          </div>

          <form className="contact-form reveal" onSubmit={handleSubmit}>
            <div className="form-heading"><span>DROP A MESSAGE</span><span className="form-star">✳</span></div>
            <label htmlFor="name">Your name</label>
            <input type="text" id="name" name="name" placeholder="What should I call you?" required />
            <label htmlFor="email">Your email</label>
            <input type="email" id="email" name="email" placeholder="you@example.com" required />
            <label htmlFor="message">Your message</label>
            <textarea id="message" name="message" placeholder="Tell me what’s on your mind..." rows="4" required />
            <button type="submit" className="primary-button form-button">Send a message <span>↗</span></button>
            {formSent && <p className="form-note">Your email app should open with the message ready to send.</p>}
            <p className="form-small">This opens your default email app — no data is stored here.</p>
          </form>
        </section>
      </main>

      <footer className="footer">
        <a href="#home" className="logo"><span className="logo-mark">i<span>.</span></span><span>izaan<span className="logo-dot">.</span></span></a>
        <p>Designed with curiosity and built with React.</p>
        <a href="#home" className="back-to-top">Back to top ↑</a>
        <span className="footer-year">© {new Date().getFullYear()} Izaan Ali</span>
      </footer>
    </div>
  );
}

export default App;
