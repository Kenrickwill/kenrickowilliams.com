import Image from "next/image";
import TechSculpture from "@/components/ui/TechSculpture";
import ContactForm from "@/components/sections/ContactForm";
import Header from "@/components/layout/Header";
import Reveal from "@/components/ui/Reveal";

const projects = [
  {
    number: "01",
    discipline: "Security automation",
    title: "Defender policy deployment, rebuilt for scale.",
    description:
      "Designed an automated workflow for deploying Microsoft Defender exclusions across entire technology sectors, replacing a slow, error-prone process of contacting users and updating devices individually.",
    result: "Sector-wide coverage",
  },
  {
    number: "02",
    discipline: "Security intelligence",
    title: "One operational view for an entire security team.",
    description:
      "Co-created a centralized dashboard at Global Payments that brought alerts, threat intelligence, and working resources into one place while helping the team reduce false-positive noise.",
    result: "Faster, clearer response",
  },
  {
    number: "03",
    discipline: "Enterprise automation",
    title: "Device updates without the manual cycle.",
    description:
      "Built scripts that updated devices across a Fortune 100 fleet through a controlled, repeatable workflow—turning repetitive support work into dependable infrastructure.",
    result: "Hundreds of hours returned",
  },
];

const credentials = [
  ["CompTIA Security+", "Cybersecurity foundation"],
  ["Microsoft AZ-900 + SC-900", "Cloud and security fundamentals"],
  ["AWS Cloud Practitioner", "Cloud foundation"],
  ["Splunk Power User", "Search, analytics, and dashboards"],
];

export default function Home() {
  return (
    <main>
      <Header />

      {/* ── Hero ── */}
      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Security engineer · Automation builder</p>
          <h1>I engineer secure systems and automate the work around them.</h1>
        </div>
        <div className="hero-detail">
          <p className="hero-intro">
            I&apos;m Kenrick Williams—a platform security engineer and entrepreneur who
            turns manual, fragile processes into tools that teams can trust.
          </p>
          <div className="hero-actions">
            <a className="button button-light" href="#work">View selected work</a>
            <a className="text-link" href="#contact">Start a conversation <span>↗</span></a>
          </div>
        </div>
        <div className="hero-visual">
          <Image
            src="/kenrick.jpg"
            alt="Kenrick Williams"
            width={1086}
            height={1448}
            className="hero-portrait"
            priority
          />
          <TechSculpture />
          <div className="visual-caption">
            <span>Kenrick Williams</span>
            <span>Security · Systems · Automation</span>
          </div>
        </div>
      </section>

      {/* ── About ── */}
      <section className="profile-section" id="about">
        <Reveal>
          <div className="profile-heading">
            <p className="section-label">Who I am</p>
            <h2>Technical depth, with an operator&apos;s point of view.</h2>
          </div>
        </Reveal>
        <Reveal delay={80}>
          <div className="profile-copy">
            <p className="lead">
              My background spans threat detection, platform architecture, and
              enterprise security operations. The common thread is simple: I notice
              where work breaks down, then build a better way through it.
            </p>
            <p>
              At Publix, I work on the security of large-scale platform infrastructure.
              Before that, I helped improve security operations at Global Payments and
              built automation for enterprise device fleets. Outside of engineering, I
              own and operate businesses of my own—so I care about the practical outcome,
              not just the technical one.
            </p>
            <div className="profile-facts" aria-label="Professional summary">
              <div><strong>4+</strong><span>Years in cybersecurity</span></div>
              <div><strong>F100</strong><span>Enterprise experience</span></div>
              <div><strong>100s</strong><span>Hours automated</span></div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ── Work ── */}
      <section className="work-section" id="work">
        <Reveal>
          <div className="section-heading">
            <div>
              <p className="section-label">Selected work</p>
              <h2>Proof over promises.</h2>
            </div>
            <p>
              A few examples of how I approach complicated, high-friction problems:
              understand the system, remove the weak point, and leave the operation
              stronger than I found it.
            </p>
          </div>
        </Reveal>

        <div className="project-list">
          {projects.map((project, i) => (
            <Reveal key={project.number} delay={i * 60}>
              <article className="project">
                <div className="project-number">{project.number}</div>
                <div className="project-main">
                  <p className="project-discipline">{project.discipline}</p>
                  <h3>{project.title}</h3>
                </div>
                <p className="project-description">{project.description}</p>
                <div className="project-result">
                  <span>Outcome</span>
                  <strong>{project.result}</strong>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── Credentials ── */}
      <section className="credentials-section" id="credentials">
        <Reveal>
          <div className="credentials-intro">
            <p className="section-label">Credentials</p>
            <h2>A foundation built across security, cloud, and data.</h2>
            <p>
              B.S. in Computer Science &amp; Cybersecurity from Columbus State University,
              supported by industry certifications across the platforms I use.
            </p>
          </div>
        </Reveal>
        <Reveal delay={80}>
          <div className="credential-list">
            {credentials.map(([name, focus], index) => (
              <div className="credential" key={name}>
                <span className="credential-number">0{index + 1}</span>
                <strong>{name}</strong>
                <span>{focus}</span>
              </div>
            ))}
          </div>
          <p className="credentials-cta">
            Open to senior security engineering roles and advisory work —{" "}
            <a href="#contact" className="credentials-cta-link">let&apos;s talk ↗</a>
          </p>
        </Reveal>
      </section>

      {/* ── Contact ── */}
      <section className="contact-section" id="contact">
        <Reveal>
          <div className="contact-copy">
            <p className="section-label">Contact</p>
            <h2>Have a problem worth solving?</h2>
            <p>
              I&apos;m open to thoughtful conversations about security, automation,
              partnerships, and ambitious technical work.
            </p>
            <a href="mailto:kenrickwilliamspro@gmail.com" className="email-link">
              kenrickwilliamspro@gmail.com
            </a>
          </div>
        </Reveal>
        <Reveal delay={80}>
          <ContactForm />
        </Reveal>
      </section>

      {/* ── Footer ── */}
      <footer>
        <a className="wordmark" href="#top">Kenrick Williams<span>.</span></a>
        <p>Built by Kenrick Williams · Atlanta, GA</p>
        <div className="social-links">
          <a
            href="https://www.linkedin.com/in/kenrick-williams-086247204/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn ↗
          </a>
          <a
            href="https://github.com/Kenrickwill"
            target="_blank"
            rel="noreferrer"
          >
            GitHub ↗
          </a>
        </div>
      </footer>
    </main>
  );
}
