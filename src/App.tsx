import { useEffect, useState } from "react";
import "./App.css";
import gr1Pdf from "./assets/Team 7 - Gr 1 Slides 2.0.pdf?url";
import gr1Pptx from "./assets/Team 7 - Gr 1 Slides 2.0.pptx?url";
import gr2Pdf from "./assets/GR2 - Team 7.pdf?url";
import gr2Pptx from "./assets/GR2 - Team 7.pptx?url";
import gr4Pdf from "./assets/Team 7 - GR 4 SLIDES.pdf?url";
import gr4Pptx from "./assets/Team 7 - GR 4 SLIDES.pptx?url";
import gr5Pdf from "./assets/Team 7 - GR 5 SLIDES.pdf?url";
import gr5Pptx from "./assets/Team 7 - GR 5 SLIDES.pptx?url";
import gr6Pdf from "./assets/GR 6 SLIDES (1).pdf?url";
import gr6Pptx from "./assets/GR 6 SLIDES.pptx?url";
import gr8Pdf from "./assets/GR 8.pdf?url";
import gr8Pptx from "./assets/GR 8.pptx?url";
import finalVideoMov from "./assets/final_video (1).mp4?url";
import gr9VideoMp4 from "./assets/2026-03-11_22-58-03_1.mp4?url";
import gr9PitchPdf from "./assets/Team 7 GR9 Pitch (1).pdf?url";
import gr9PitchScriptPdf from "./assets/Team 7 GR9 Pitch Script (1).pdf?url";
import gr9PosterPdf from "./assets/Team 7 GR9 Poster  (1).pdf?url";
import reasonLabReadmePdf from "./assets/ReasonLab README.pdf?url";
import anthonyWongImage from "./assets/anthony_wong.png?url";
import ayalaWangImage from "./assets/ayala_wang.png?url";
import junjieLiuImage from "./assets/junjie_liu.jpg?url";
import logoImage from "./assets/logo.png?url";

type ResourceLink = {
  label: string;
  href: string;
  download?: boolean;
};

type Deliverable = {
  id: string;
  title: string;
  summary: string;
  resources: ResourceLink[];
  note?: string;
  videoSrc?: string;
  videoEmbedUrl?: string;
};

type TeamMember = {
  name: string;
  image: string;
  role: string;
};

type TabId = "home" | "projects" | "team";

const teamDriveFolder =
  "https://drive.google.com/drive/folders/1pJ7-bV4TcJ1GCvZaPrTLhmJrIU3Bazs3";

const googleSlides = (id: string) =>
  `https://docs.google.com/presentation/d/${id}/edit?usp=sharing`;
const googleDoc = (id: string) =>
  `https://docs.google.com/document/d/${id}/edit?usp=sharing`;
const youtubeWatch = (id: string) => `https://www.youtube.com/watch?v=${id}`;
const youtubeEmbed = (id: string) =>
  `https://www.youtube-nocookie.com/embed/${id}`;

const tabs: { id: TabId; label: string }[] = [
  { id: "home", label: "Home" },
  { id: "projects", label: "Projects" },
  { id: "team", label: "Team" },
];

const deliverables: Deliverable[] = [
  {
    id: "GR1",
    title: "Needfinding",
    summary: "Initial interviews, problem discovery, and early opportunity framing.",
    resources: [
      { label: "PDF", href: gr1Pdf },
      { label: "PPTX", href: gr1Pptx },
      { label: "Google Slides", href: googleSlides("1nBjcG8Fekon2OWGzjiJQ__aN9x5BAtol6B7MVjcqcCs") },
    ],
  },
  {
    id: "GR2",
    title: "Additional Needfinding, POVs, HMWs, and Experience Prototypes",
    summary: "Research synthesis, framing statements, brainstorms, and prototype experiments.",
    resources: [
      { label: "PDF", href: gr2Pdf },
      { label: "PPTX", href: gr2Pptx },
      { label: "Google Slides", href: googleSlides("1wbPoS7rR2Bed9Iitcimq1TYqcIEhBZ9pCC2XE6FtaH8") },
    ],
  },
  {
    id: "GR3",
    title: "Project Website",
    summary: "Responsive course website for project storytelling, deliverables, and media.",
    resources: [{ label: "Live website", href: "./" }],
  },
  {
    id: "GR4",
    title: "Concept Video",
    summary: "Concept framing video with streaming, embedding, and downloadable access path.",
    resources: [
      { label: "PDF", href: gr4Pdf },
      { label: "PPTX", href: gr4Pptx },
      { label: "Google Slides", href: googleSlides("1gaej_uOVAdJrvRsjxhEvXjTjkVRdPpfx9r8Ud2b1F6M") },
      { label: "YouTube", href: youtubeWatch("S2MIHdP-X6g") },
      { label: "Video download", href: finalVideoMov, download: true },
    ],
    videoEmbedUrl: youtubeEmbed("S2MIHdP-X6g"),
  },
  {
    id: "GR5",
    title: "Sketching, Low-Fi Prototyping, and Usability Testing",
    summary: "Sketch exploration, low-fidelity prototypes, and early usability findings.",
    resources: [
      { label: "PDF", href: gr5Pdf },
      { label: "PPTX", href: gr5Pptx },
      { label: "Google Slides", href: googleSlides("1tbj_LXBQgGJs8Qx35_h6vt9mAH73oC7VkW2u3V8dRwk") },
    ],
  },
  {
    id: "GR6",
    title: "Interactive Medium-Fi Prototype",
    summary: "Medium-fidelity prototype, walkthrough deck, and README documentation.",
    resources: [
      { label: "PDF", href: gr6Pdf },
      { label: "PPTX", href: gr6Pptx },
      { label: "Google Slides", href: googleSlides("1o7ppEgYzCGKg5QnGRBqFQD0NL2mugsxjANso_2oVB6w") },
      {
        label: "Figma prototype",
        href: "https://www.figma.com/proto/opkcW6BeK0JjkM0HPgC6SX/Team-09-Figma?node-id=40-245&p=f&t=qDgxZdQ5bEcnvSJN-1&scaling=contain&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=40%3A245",
      },
      { label: "README", href: googleDoc("17wcCk6OcoAjR2aXT5ny_Kp05eYBQzVGj3tCwxZFsFl4") },
      { label: "README (PDF)", href: reasonLabReadmePdf },
    ],
  },
  {
    id: "GR7",
    title: "Individual Heuristic Evaluation",
    summary: "Individual heuristic evaluation of the other teams' designs.",
    resources: [],
  },
  {
    id: "GR8",
    title: "Interactive High-Fi Prototype",
    summary: "High-fidelity prototype, presentation deck, and final README handoff.",
    resources: [
      { label: "PDF", href: gr8Pdf },
      { label: "PPTX", href: gr8Pptx },
      { label: "Google Slides", href: googleSlides("19wWdvqQielsveo-0APxbmNmAQ94Xf-urn4ND3287K9A") },
      {
        label: "Figma prototype",
        href: "https://www.figma.com/proto/opkcW6BeK0JjkM0HPgC6SX/Team-09-Figma?node-id=476-100&t=eYk5kIDy9YIGXuEw-1&scaling=scale-down&content-scaling=fixed&page-id=358%3A210&starting-point-node-id=476%3A100",
      },
      { label: "README", href: googleDoc("17wcCk6OcoAjR2aXT5ny_Kp05eYBQzVGj3tCwxZFsFl4") },
      { label: "README (PDF)", href: reasonLabReadmePdf },
    ],
  },
  {
    id: "GR9",
    title: "Poster, Pitch, and Demo Video",
    summary: "Final storytelling assets for the pitch, poster, and recorded demo.",
    resources: [
      { label: "Pitch Slides", href: googleSlides("1atLV0jFbv3xlDoRVvcuGJL5kzx0XCHs-w5FnWBiNhUQ") },
      { label: "Pitch Slides (PDF)", href: gr9PitchPdf },
      { label: "Pitch script", href: googleDoc("1NZFs2nbqZfhhM1WTPi6pAD6XnLxB2SVoPHv8txemM0s") },
      { label: "Pitch Script (PDF)", href: gr9PitchScriptPdf },
      { label: "Poster", href: googleSlides("1kF8-_RbP4fpK3zc0qIGL5gahetu0xKc--MizYMqNmDA") },
      { label: "Poster (PDF)", href: gr9PosterPdf },
      { label: "Video link", href: youtubeWatch("R0fqb1uiPHE") },
      { label: "Video download", href: gr9VideoMp4, download: true },
    ],
    videoEmbedUrl: youtubeEmbed("R0fqb1uiPHE"),
  },
  {
    id: "GR10",
    title: "Final Report",
    summary: "Final written report in Google Docs plus a downloadable PDF export.",
    resources: [
      { label: "Google Doc", href: googleDoc("1uircCp_UmHFFdJD6MgpU0qMGmSPjrrjZIrxkdnEi8Wg") },
    ],
  },
];

const teamMembers: TeamMember[] = [
  {
    name: "Ayala W.",
    image: ayalaWangImage,
    role: "Product Manager",
  },
  {
    name: "Anthony W.",
    image: anthonyWongImage,
    role: "UX Researcher",
  },
  {
    name: "Junjie L.",
    image: junjieLiuImage,
    role: "Mobile Developer",
  },
];

const shouldOpenInNewTab = (href: string) => href !== "./";

function App() {
  const [activeTab, setActiveTab] = useState<TabId>("home");
  const [showIntro, setShowIntro] = useState(true);
  const [introExiting, setIntroExiting] = useState(false);

  useEffect(() => {
    const fadeTimer = window.setTimeout(() => {
      setIntroExiting(true);
    }, 1800);

    const removeTimer = window.setTimeout(() => {
      setShowIntro(false);
    }, 2400);

    return () => {
      window.clearTimeout(fadeTimer);
      window.clearTimeout(removeTimer);
    };
  }, []);

  return (
    <div className="page">
      {showIntro ? (
        <div className={`intro-overlay${introExiting ? " is-exiting" : ""}`} aria-hidden="true">
          <div className="intro-logo-shell">
            <img className="intro-logo" src={logoImage} alt="" />
          </div>
        </div>
      ) : null}

      <header className="topbar">
        <button className="topbar-brand" type="button" onClick={() => setActiveTab("home")}>
          <span className="topbar-copy">
            <strong>Reason Lab</strong>
            <span>Team 07</span>
          </span>
        </button>

        <nav className="topbar-nav" aria-label="Primary">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`nav-tab${activeTab === tab.id ? " is-active" : ""}`}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              aria-current={activeTab === tab.id ? "page" : undefined}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </header>

      <main className="content">
        {activeTab === "home" ? (
          <>
            <header className="hero">
              <div className="hero-backdrop" aria-hidden="true" />
              <div className="hero-copy">
                <div className="brand-lockup">
                  <div>
                    <p className="eyebrow">Team 07 - UCSB CS185</p>
                    <h1>Reason Lab</h1>
                    <p className="hero-tagline">Better learning begins with you.</p>
                  </div>
                </div>

                <p className="value-prop">
                  An AI learning companion that helps students turn confusion into clear,
                  supportive next steps.
                </p>

                <div className="hero-nav">
                  <button
                    className="button button-primary"
                    type="button"
                    onClick={() => setActiveTab("projects")}
                  >
                    View projects
                  </button>
                  <button
                    className="button button-secondary"
                    type="button"
                    onClick={() => setActiveTab("team")}
                  >
                    Meet the team
                  </button>
                  <a
                    className="button button-secondary"
                    href={teamDriveFolder}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Open drive folder
                  </a>
                </div>
              </div>

              <div className="hero-logo-panel" aria-hidden="true">
                <div className="hero-logo-frame">
                  <img className="hero-logo" src={logoImage} alt="" />
                </div>
              </div>
            </header>

            <section className="section section-grid">
              <article className="card spotlight-card home-summary-card">
                <p className="section-kicker">About the project</p>
                <h2>Our App</h2>
                <p>
                  Reason Lab is a mobile learning app for learners working through
                  difficult material. It is designed for people who may be leaning too
                  heavily on AI shortcuts and need support that strengthens reasoning
                  instead of bypassing it.
                </p>
                <p>
                  Instead of giving instant answers, Reason Lab requires students to
                  attempt a problem before receiving help. The system responds with
                  adaptive hints, structured feedback, and visual progress cues so that
                  users build durable conceptual understanding through active learning.
                </p>

                <div className="summary-detail-grid">
                  <div className="summary-detail">
                    <h3>Who it is for</h3>
                    <p>
                      Students who are stuck on homework, want a hint instead of a full
                      solution, or want to turn class materials into a guided study
                      structure.
                    </p>
                  </div>

                  <div className="summary-detail">
                    <h3>How it is used</h3>
                    <p>
                      Users move through guided problem-solving flows, review hint
                      responses, adjust difficulty, import materials, and track
                      progress through a structured mobile experience.
                    </p>
                  </div>

                  <div className="summary-detail">
                    <h3>What users can do</h3>
                    <p>
                      Attempt a problem, unlock incremental hints, adjust difficulty,
                      import materials for guided assistance, generate study guides, and
                      monitor progress toward receiving help.
                    </p>
                  </div>
                </div>
              </article>
            </section>
          </>
        ) : null}

        {activeTab === "projects" ? (
          <section className="section">
            <div className="section-header">
              <p className="section-kicker">Projects</p>
              <h2>Project Deliverables</h2>
            </div>

            <div className="deliverable-grid">
              {deliverables.map((deliverable, index) => (
                <article
                  className="deliverable-card"
                  key={deliverable.id}
                  style={{ animationDelay: `${index * 70}ms` }}
                >
                  <div className="deliverable-head">
                    <span className="deliverable-id">{deliverable.id}</span>
                    <h3>{deliverable.title}</h3>
                  </div>
                  <p className="deliverable-summary">{deliverable.summary}</p>

                  {deliverable.videoEmbedUrl ? (
                    <div className="deliverable-video-frame">
                      <iframe
                        className="deliverable-video"
                        src={deliverable.videoEmbedUrl}
                        title={`${deliverable.title} video`}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                        loading="lazy"
                      />
                    </div>
                  ) : null}

                  {deliverable.videoSrc ? (
                    <div className="deliverable-video-frame">
                      <video className="deliverable-video" controls preload="metadata">
                        <source src={deliverable.videoSrc} type="video/quicktime" />
                        Your browser does not support embedded video playback.
                      </video>
                    </div>
                  ) : null}

                  {deliverable.note ? <p className="deliverable-note">{deliverable.note}</p> : null}

                  <div className="resource-tab-grid">
                    {deliverable.resources.map((resource, resourceIndex) => (
                      <a
                        key={resource.label}
                        className={`resource-tab${
                          deliverable.resources.length % 2 === 1 &&
                          resourceIndex === deliverable.resources.length - 1
                            ? " resource-tab-wide"
                            : ""
                        }`}
                        href={resource.href}
                        target={
                          !resource.download && shouldOpenInNewTab(resource.href) ? "_blank" : undefined
                        }
                        rel={
                          !resource.download && shouldOpenInNewTab(resource.href) ? "noreferrer" : undefined
                        }
                        download={resource.download ? "" : undefined}
                      >
                        {resource.label}
                      </a>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </section>
        ) : null}

        {activeTab === "team" ? (
          <section className="section">
            <article className="card team-card">
              <p className="section-kicker">Team</p>
              <h2>Meet the team</h2>
              <div className="team-grid">
                {teamMembers.map((member) => (
                  <div className="team-member" key={member.name}>
                    <div className="team-image-frame">
                      <img className="team-image" src={member.image} alt={member.name} />
                    </div>
                    <h3>{member.name}</h3>
                    <p className="team-role">{member.role}</p>
                  </div>
                ))}
              </div>
            </article>
          </section>
        ) : null}
      </main>

      <footer className="footer">
        <p>Reason Lab - Team 07 - UCSB CS185</p>
        <button className="footer-link" type="button" onClick={() => setActiveTab("home")}>
          Back to Home
        </button>
      </footer>
    </div>
  );
}

export default App;
