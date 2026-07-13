/* DVN Synthesis — shared product page data and render logic */

const PRODUCT_OVERVIEW = [
  {
    title: "Secure Knowledge Fabric",
    href: "secure-knowledge-fabric.html",
    icon: "network",
    eyebrow: "Product #1 · Secure",
    summary: "Encrypted RAG and a SecOps knowledge graph for investigations, detections, and evidence-backed deliverables.",
    highlights: [
      "Encrypted local RAG with citations and provenance",
      "SecOps knowledge graph for relationship-aware reasoning",
      "Operational asset factory for investigations and detections",
      "On-premises, air-gapped, and private-cloud deployment",
      "Source-level permissions and governed approval workflows",
    ],
    demoSubject: "Demo Request — DVN Secure Knowledge Fabric",
  },
  {
    title: "Security Transformation Studio",
    href: "security-transformation-studio.html",
    icon: "play",
    eyebrow: "Product #2 · Enable",
    summary: "Study guides, quizzes, walkthroughs, tabletops, simulations, and tutorial videos from your approved knowledge.",
    highlights: [
      "Study guides, quizzes, and flash cards from approved knowledge",
      "SOP walkthroughs, tabletops, and branching simulations",
      "Tutorial video generation with source citations",
      "Role-specific learning paths and competency analytics",
      "Connected to Secure Knowledge Fabric source intelligence",
    ],
    demoSubject: "Demo Request — DVN Security Transformation Studio",
  },
  {
    title: "Digital Twin SimOps",
    href: "digital-twin-simops.html",
    icon: "crosshair",
    eyebrow: "Product #3 · Simulate",
    summary: "Model your environment, run safe purple-team exercises, and continuously validate how people, tools, and controls respond under attack.",
    highlights: [
      "Digital twin of architecture, assets, and attack paths",
      "Automated purple-team and resilience exercises",
      "Real-time integration with knowledge graph and detections",
      "Evidence, reporting, and executive-ready outcomes",
      "Feeds simulations back into training and institutional knowledge",
    ],
    demoSubject: "Demo Request — DVN Digital Twin SimOps",
  },
];

const SCATTERED_SOURCES = [
  "SharePoint & Confluence", "PDFs, Word & spreadsheets", "SIEM searches & detection repos",
  "Case-management systems", "Threat-intelligence feeds", "Ticketing platforms",
  "Analyst notes", "Tribal knowledge",
];

const GRAPH_ENTITIES = [
  "Assets", "Identities", "Alerts", "Incidents", "Vulnerabilities", "Controls",
  "Threat actors", "Malware", "Indicators", "TTPs", "Detection rules",
  "Business systems", "Owners", "Policies", "Evidence", "Remediation actions",
];

const COMPARE = [
  { label: "Enterprise search", answer: "Where is the document?", icon: "file" },
  { label: "Ordinary RAG", answer: "What does the document say?", icon: "brain" },
  { label: "DVN Secure Knowledge Fabric", answer: "What does the organization know, how are entities connected, what approved action should be considered, what evidence supports it, and which deliverables must be produced?", icon: "network", featured: true },
];

const USERS = [
  { icon: "radar", title: "SOC analysts", desc: "Investigate alerts and follow approved procedures with cited evidence and triage guidance." },
  { icon: "crosshair", title: "Threat hunters", desc: "Connect intelligence, behaviors, assets, identities, and historical activity into hunt hypotheses." },
  { icon: "code", title: "Detection engineers", desc: "Develop, test, document, map, and maintain detections with coverage and gap visibility." },
  { icon: "shield", title: "IR & forensic analysts", desc: "Create timelines, investigation plans, evidence summaries, and stakeholder-ready reports." },
  { icon: "scale", title: "GRC teams", desc: "Connect technical activity to frameworks, controls, policies, risks, and audit evidence." },
  { icon: "bar-chart", title: "Security leaders", desc: "Generate executive summaries, metrics, risk narratives, and board-ready reporting." },
];

const MODULES = [
  {
    num: "01",
    icon: "database",
    title: "Secure Knowledge Ingestion",
    summary: "Ingest approved internal sources with rich metadata so expired, unapproved, or irrelevant information is never treated as authoritative.",
    sources: ["SOPs & operational procedures", "Incident-response playbooks", "Detection engineering standards", "Threat-hunting reports", "SIEM detection rules", "Post-incident reviews", "Vulnerability reports", "Risk registers", "Architecture diagrams", "Asset & identity inventories", "Policies & control documentation", "Audit evidence", "Threat-intelligence reports", "MITRE ATT&CK mappings", "Analyst case notes", "Ticket histories"],
    metadata: ["Owner", "Department", "Classification", "Effective & review dates", "Document version", "Approval status", "Applicable systems", "Applicable threat techniques", "Applicable controls", "Retention requirements"],
  },
  {
    num: "02",
    icon: "brain",
    title: "Local Encrypted RAG",
    summary: "Natural-language questions grounded in approved organizational content — with citations, confidence indicators, and conflict warnings.",
    questions: [
      "What is the approved procedure for suspected credential dumping on a domain controller?",
      "Show previous incidents involving this host, user, IP address, or technique.",
      "Which detections cover MITRE ATT&CK T1003?",
      "What evidence is required before escalating this activity?",
      "Which controls and policies are affected by this incident?",
      "What detection gaps were identified during the last ransomware tabletop?",
      "Generate a threat-hunting plan based on our current telemetry.",
      "What systems would be affected if this identity were compromised?",
    ],
    responses: ["Source citations", "Confidence indicators", "Document versions", "Evidence excerpts", "Applicable approvals", "Conflicting-source warnings", "Missing-information notices"],
  },
  {
    num: "03",
    icon: "network",
    title: "SecOps Knowledge Graph",
    summary: "Relationship awareness that ordinary RAG lacks — enabling coverage analysis, attack-path context, and cross-domain reasoning.",
    chains: [
      "Threat actor → technique → telemetry → detection → data source → asset → department → control → evidence",
      "Vulnerability → software → asset → service → business unit → risk → remediation owner",
    ],
    questions: [
      "Which critical assets lack detection coverage for techniques used by priority threat actors?",
      "Which detections depend on telemetry sources scheduled for retirement?",
      "Which open vulnerabilities create attack paths to privileged identities?",
      "Which incidents demonstrate that a control is operating effectively?",
      "Which business units have recurring remediation failures?",
      "What downstream controls are affected by this architecture change?",
    ],
  },
];

const DELIVERABLE_GROUPS = [
  { title: "SOC deliverables", items: ["Alert-triage guides", "Investigation checklists", "Escalation summaries", "Shift handoff reports", "Case narratives", "Incident timelines", "Lessons-learned documents", "Analyst training scenarios", "Tabletop exercises"] },
  { title: "Detection engineering", items: ["Detection requirement documents", "Detection-as-code templates", "Sigma rules", "SIEM query drafts", "MITRE ATT&CK mappings", "Test & validation plans", "Coverage gap assessments", "Detection health reports"] },
  { title: "Threat hunting", items: ["Hunt hypotheses", "Intelligence requirements", "Hunt query packages", "TTP mappings", "Required telemetry lists", "Investigation decision trees", "Findings reports", "Detection opportunities", "Executive hunt briefings"] },
  { title: "DFIR", items: ["Collection plans", "Evidence inventories", "Chain-of-custody templates", "Forensic timelines", "IOC packages", "Root-cause analysis drafts", "Incident reports", "Containment recommendations", "Recovery checklists"] },
  { title: "GRC & leadership", items: ["Control-evidence packages", "Policy-to-technology mappings", "Risk statements", "Audit response packages", "Executive summaries", "Board-ready risk narratives", "Monthly security reports", "Program maturity assessments"] },
];

const WORKFLOW_STEPS = [
  "Identifies the applicable PowerShell investigation SOP.",
  "Retrieves related historical incidents.",
  "Maps the behavior to relevant MITRE ATT&CK techniques.",
  "Identifies available EDR, SIEM, identity, and network telemetry.",
  "Recommends approved investigation steps.",
  "Shows related detection rules and known coverage limitations.",
  "Connects the user, host, parent process, destination, and prior alerts.",
  "Generates a case summary using the organization's reporting format.",
  "Suggests new detection or threat-hunting opportunities.",
  "Maps the incident to affected controls and required evidence.",
  "Creates separate analyst, management, and stakeholder deliverables.",
];

const ARCH_LAYERS = [
  { icon: "database", title: "Data layer", items: ["Encrypted object storage", "Relational database for permissions & metadata", "Vector database for semantic retrieval", "Graph database for relationships", "Immutable audit-log storage", "Secrets management"] },
  { icon: "brain", title: "Intelligence layer", items: ["Local embedding model", "Private language model", "Document parsing & classification", "Entity & relationship extraction", "Hybrid retrieval & reranking", "Policy-aware response generation", "Citation & provenance engine", "Prompt & agent guardrails"] },
  { icon: "layers", title: "Application layer", items: ["Analyst workspace", "Knowledge explorer", "Graph visualization", "Asset-generation studio", "Investigation workspace", "Detection coverage dashboard", "GRC evidence workspace", "Administration console", "API & integration gateway"] },
  { icon: "building", title: "Deployment options", items: ["On-premises", "Air-gapped", "Private cloud", "Customer-controlled VPC", "Hybrid deployment", "High availability (Enterprise)"] },
];

const SECURITY_CONTROLS = [
  "Encryption in transit & at rest", "Customer-managed keys", "RBAC & ABAC", "Document-level permissions",
  "Identity-provider integration", "MFA", "Privileged admin separation", "Prompt & retrieval auditing",
  "DLP controls", "Configurable retention", "Approval workflows", "Model-output labeling",
  "Source-level access enforcement", "Network isolation", "No-training guarantee",
];

const APPROVAL_EXAMPLES = [
  "A case summary may require analyst review.",
  "A new detection may require peer review and testing.",
  "A policy update may require management and legal approval.",
  "An executive report may require security leadership approval.",
];

const GOVERNANCE_FLAGS = [
  "Expired procedures", "Conflicting instructions", "Orphaned documents", "Duplicate content",
  "Missing owners", "Stale detection documentation", "Unmapped controls", "Unsupported assertions", "Knowledge used after its review date",
];

const ROADMAP = [
  { phase: "Phase 1", title: "Private SecOps Assistant", desc: "Secure ingestion, local RAG, citations, templates, and analyst workflows." },
  { phase: "Phase 2", title: "Security Knowledge Graph", desc: "Entities, relationships, graph exploration, attack-path context, and coverage analysis." },
  { phase: "Phase 3", title: "Operational Asset Factory", desc: "Structured generation of detections, hunts, investigation packages, reports, and evidence." },
  { phase: "Phase 4", title: "Integrated Security Workspace", desc: "Connections to SIEM, EDR, SOAR, vulnerability management, IAM, ticketing, GRC, and threat intel." },
  { phase: "Phase 5", title: "Governed Agentic Operations", desc: "Specialized agents for SOC triage, hunting, detection engineering, IR, DFIR, VM, IAM, GRC, and executive reporting — each within defined tools, permissions, and approval requirements." },
];

const FABRIC_PACKAGES = [
  { name: "Secure Knowledge Foundation", desc: "Encrypted local RAG, controlled retrieval, and internal knowledge search for organizations starting their private intelligence layer.", featured: false },
  { name: "SecOps Intelligence", desc: "Adds the security knowledge graph, ATT&CK mapping, investigation support, detection coverage analysis, and operational asset generation.", featured: true },
  { name: "Enterprise Security Fabric", desc: "Integrations, multi-team workflows, air-gapped or private-cloud deployment, high availability, advanced governance, and custom agents.", featured: false },
];

const PRO_SERVICES = [
  "Knowledge-source assessment", "Deployment & hardening", "SOP & playbook normalization",
  "Knowledge-graph design", "SIEM & EDR integration", "Detection-catalog migration",
  "Security-framework mapping", "Custom agent development", "Analyst training", "Ongoing knowledge governance",
];

const FABRIC_NAV = [
  { label: "Users", href: "#users" },
  { label: "Modules", href: "#modules" },
  { label: "Deliverables", href: "#deliverables" },
  { label: "Workflow", href: "#workflow" },
  { label: "Architecture", href: "#architecture" },
  { label: "Governance", href: "#governance" },
  { label: "Roadmap", href: "#roadmap" },
  { label: "Packaging", href: "#packaging" },
];

const STUDIO_SOURCES = [
  "SOPs & playbooks", "Policies & frameworks", "Detection logic", "Incident reports",
  "Threat-hunting findings", "Architecture diagrams", "Analyst conversations",
  "Lessons learned & tabletops",
];

const STUDIO_OUTPUTS = [
  "Study guides", "Flash cards", "Quizzes & assessments", "Interactive walkthroughs",
  "Tabletop exercises", "Scenario-based training", "SOP demonstrations", "Playbook simulations",
  "Tutorial videos", "Microlearning modules", "Role-specific learning paths",
  "Certification practice exams", "Executive awareness content",
];

const STUDIO_RELATIONSHIP = [
  { label: "Product #1: Knowledge & Operations", question: "What does the organization know? Which sources are authoritative? How are assets, threats, controls, and procedures connected?", icon: "network", featured: false },
  { label: "Product #2: Transformation & Learning", question: "How should this knowledge be taught? How can procedures be demonstrated? How can employees practice safely? How can one source become multiple learning assets?", icon: "play", featured: true },
];

const STUDIO_USERS = [
  { icon: "radar", title: "Security analysts", desc: "Guided training based on actual tools, procedures, alerts, and escalation standards used inside the organization." },
  { icon: "code", title: "Detection engineers", desc: "Convert rollout documentation into tutorials, validation exercises, troubleshooting guides, and analyst enablement." },
  { icon: "shield", title: "Incident responders", desc: "Generate scenario walkthroughs, tabletops, decision trees, communications drills, and after-action training." },
  { icon: "crosshair", title: "Threat hunters", desc: "Transform hunts and intel reports into hypothesis-building exercises, investigation scenarios, and workshops." },
  { icon: "scale", title: "GRC teams", desc: "Framework training, control-owner walkthroughs, policy awareness, audit-readiness exercises, and compliance assessments." },
  { icon: "bar-chart", title: "Security leaders", desc: "Executive awareness content, leadership tabletops, metrics-based training plans, and role-based development." },
  { icon: "users", title: "HR & learning teams", desc: "Manage assignments, completion records, assessment results, competency development, and training evidence." },
];

const STUDIO_MODULES = [
  {
    num: "01", icon: "workflow", title: "Knowledge-to-Learning Transformation Engine",
    summary: "Converts approved knowledge from Product #1 into structured educational formats — preserving citations, versions, approval status, and organizational terminology.",
    outputs: ["Study guide", "Glossary", "Flash cards", "Quiz", "Guided walkthrough", "Branching simulation", "Tabletop scenario", "Tutorial script", "Manager summary", "Competency assessment", "Refresher module"],
  },
  {
    num: "02", icon: "file", title: "Adaptive Study Material Generator",
    summary: "Role-specific study content from documents, conversation history, skill gaps, recent incidents, and manager-defined competencies.",
    outputs: ["Chapter summaries", "Key concepts", "Terminology lists", "Process breakdowns", "Case studies", "Common mistakes", "Review questions", "Practical assignments"],
    audiences: ["New analysts", "Senior analysts", "Managers", "Executives", "Technical engineers", "Control owners", "Interns"],
  },
  {
    num: "03", icon: "beaker", title: "Flash Card & Quiz Studio",
    summary: "Interactive assessments directly from approved internal knowledge — with explanations, source references, and remediation topics.",
    outputs: ["Multiple choice", "True/false", "Matching", "Evidence identification", "Alert triage", "Branching scenarios", "Practical lab tasks"],
  },
  {
    num: "04", icon: "brain", title: "Conversational Learning Tutor",
    summary: "Personalized instruction using learning history, role context, and approved internal information.",
    questions: [
      "Explain this detection rule like I am a new SOC analyst.",
      "Quiz me on our ransomware playbook.",
      "Walk me through what I should do after a suspicious login alert.",
      "Give me a harder scenario based on my previous mistakes.",
      "Simulate an incident commander asking me questions.",
    ],
  },
  {
    num: "05", icon: "compass", title: "SOP & Playbook Walkthrough Generator",
    summary: "Static procedures become guided visual walkthroughs with decision points, escalation conditions, and knowledge checks.",
    outputs: ["Interactive click-through guides", "Narrated presentations", "Screen-recording scripts", "AI-generated tutorial videos", "Printable job aids"],
  },
  {
    num: "06", icon: "play", title: "Tutorial Video Generator",
    summary: "Generate tutorial videos from internal procedures with learning objectives, scripts, storyboards, voiceover, and companion quizzes.",
    outputs: ["Tool walkthroughs", "SOP demonstrations", "Detection rollout training", "Threat-hunting tutorials", "GRC evidence guides", "Executive briefings", "New-hire onboarding"],
  },
  {
    num: "07", icon: "users", title: "Tabletop Exercise Builder",
    summary: "Convert risks, incident history, playbooks, assets, and threat intelligence into realistic exercises with injects, facilitator guides, and after-action reports.",
    outputs: ["Executive tabletops", "Technical tabletops", "Cross-functional exercises", "Individual analyst simulations"],
  },
  {
    num: "08", icon: "crosshair", title: "Scenario & Simulation Engine",
    summary: "Branching exercises where user decisions affect outcomes — evaluated against internal procedure, evidence use, escalation accuracy, and documentation quality.",
    questions: ["A privileged account authenticates from an unfamiliar country after an MFA reset. The learner must decide whether to escalate, which logs to review, whether to isolate systems, who to notify, and which playbook applies."],
  },
];

const STUDIO_PATHS = [
  { title: "SOC analyst path", items: ["Alert triage fundamentals", "Escalation standards", "SIEM workflows", "Endpoint investigation", "Identity analysis", "Case documentation", "Incident communication"] },
  { title: "Threat hunter path", items: ["Hypothesis development", "Intelligence analysis", "ATT&CK mapping", "Query development", "Data-source validation", "Findings documentation", "Detection handoff"] },
  { title: "Detection engineer path", items: ["Detection requirements", "Log-source analysis", "Rule development", "Testing & tuning", "Deployment", "Monitoring", "Retirement"] },
  { title: "GRC analyst path", items: ["Framework fundamentals", "Control testing", "Evidence collection", "Risk assessment", "Policy management", "Audit preparation", "Reporting"] },
  { title: "Security leader path", items: ["Risk communication", "Incident command", "Program metrics", "Security strategy", "Regulatory oversight", "Executive decision-making", "Tabletop facilitation"] },
];

const STUDIO_WORKFLOW = [
  "Reads the detection requirements and retrieves related identity SOPs.",
  "Identifies the intended analyst audience.",
  "Generates a concise study guide and flash cards for key concepts.",
  "Produces a ten-question quiz and guided alert investigation.",
  "Builds a branching escalation scenario.",
  "Creates a narrated tutorial script and video storyboard.",
  "Generates a quick-reference analyst job aid and manager rollout briefing.",
  "Tracks completion and quiz performance.",
  "Identifies where analysts are struggling.",
  "Recommends updates to the tutorial or SOP when procedures change.",
];

const STUDIO_OPS = [
  { trigger: "Closed incident", output: "Case study module" },
  { trigger: "Failed escalation", output: "Coaching module" },
  { trigger: "New detection", output: "Rollout tutorial" },
  { trigger: "False positive", output: "Tuning exercise" },
  { trigger: "Threat hunt", output: "Guided lab" },
  { trigger: "Audit finding", output: "Control-owner training" },
  { trigger: "Tabletop weakness", output: "Remediation lesson" },
  { trigger: "Recurring analyst error", output: "Microlearning module" },
];

const STUDIO_INTEGRITY = [
  "Unsupported statements", "Missing citations", "Outdated procedures", "Conflicting instructions",
  "Unapproved source material", "Sensitive information in training", "Content exceeding learner permissions",
  "Quiz questions without verified answers", "Videos based on superseded procedures",
];

const STUDIO_METRICS = [
  "Training completion", "Assessment scores", "Skill progression", "Weak knowledge areas",
  "Escalation accuracy", "Procedure adherence", "Role readiness", "Tabletop performance", "Team coverage gaps",
];

const STUDIO_ROADMAP = [
  { phase: "Phase 1", title: "Content Transformer", desc: "Study guides, flash cards, quizzes, and job aids from internal knowledge." },
  { phase: "Phase 2", title: "Training Studio", desc: "Structured courses, walkthroughs, presentations, assessments, and role-based learning paths." },
  { phase: "Phase 3", title: "Simulation Engine", desc: "Branching exercises, analyst simulations, incident drills, and tabletop exercises." },
  { phase: "Phase 4", title: "Multimedia Studio", desc: "Narration, storyboards, screen-recording plans, animations, avatars, and finished tutorial videos." },
  { phase: "Phase 5", title: "Adaptive Security Academy", desc: "Personalized training based on role, performance, incidents, competency requirements, and organizational risk." },
];

const STUDIO_COMPARE = [
  { label: "Traditional LMS", answer: "Teams manually create every course, quiz, and presentation from scratch.", icon: "file" },
  { label: "Generic generative AI", answer: "Produces training material disconnected from your procedures, tools, and approval standards.", icon: "brain" },
  { label: "DVN Security Transformation Studio", answer: "Uses approved internal knowledge, your technology stack, conversation context, historical incidents, and competency data to create contextual, traceable, organization-specific learning experiences.", icon: "gem", featured: true },
];

const STUDIO_NAV = [
  { label: "Users", href: "#users" },
  { label: "Modules", href: "#modules" },
  { label: "Learning paths", href: "#paths" },
  { label: "Workflow", href: "#workflow" },
  { label: "Live ops training", href: "#operations" },
  { label: "Governance", href: "#governance" },
  { label: "Roadmap", href: "#roadmap" },
  { label: "Differentiation", href: "#differentiation" },
];

function setHtml(id, html) {
  const el = document.getElementById(id);
  if (el) el.innerHTML = html;
}

function renderProductNav(navId, items) {
  setHtml(navId, items.map((n) =>
    `<a href="${n.href}" class="product-nav-link">${n.label}</a>`
  ).join(""));
}

function renderShowcaseCard(product, featured) {
  const demoHref = `mailto:info@dvnsynthesis.com?subject=${encodeURIComponent(product.demoSubject)}`;
  const highlights = product.highlights.map((h) =>
    `<li style="display:flex;gap:0.5rem;font-size:0.875rem;color:var(--muted-foreground);margin-top:0.625rem"><span class="check-icon">${icon("check", 16)}</span>${h}</li>`
  ).join("");

  return `<div class="card product-showcase-card${featured ? " featured" : ""}" style="display:flex;flex-direction:column">
    <div class="card-icon ${featured ? "accent" : ""}">${icon(product.icon)}</div>
    <span class="${featured ? "badge" : "badge badge-outline"}" style="margin-top:1rem;width:fit-content">${product.eyebrow}</span>
    <h3 style="margin-top:0.75rem;font-size:1.25rem">${product.title}</h3>
    <p style="margin-top:0.5rem;font-size:0.875rem;color:var(--muted-foreground);line-height:1.6;flex:1">${product.summary}</p>
    <ul style="margin-top:1.25rem">${highlights}</ul>
    <div style="display:flex;flex-wrap:wrap;gap:0.75rem;margin-top:1.5rem">
      <a href="${product.href}" class="btn btn-outline">View details</a>
      <a href="${demoHref}" class="btn ${featured ? "btn-primary" : "btn-outline"}">Request demo</a>
    </div>
  </div>`;
}

function renderCompareCards(items) {
  return items.map((c) =>
    `<div class="card ${c.featured ? "featured" : ""}">
      <div class="card-icon ${c.featured ? "accent" : ""}">${icon(c.icon)}</div>
      <p style="margin-top:1rem;font-size:0.75rem;font-weight:600;text-transform:uppercase;letter-spacing:0.05em;color:var(--muted-foreground)">${c.label}</p>
      <p style="margin-top:0.75rem;font-size:0.9375rem;line-height:1.6${c.featured ? ";color:var(--foreground)" : ";color:var(--muted-foreground)"}">${c.answer}</p>
    </div>`
  ).join("");
}

function renderUserCards(items) {
  return items.map((u) =>
    `<div class="card">
      <div class="card-icon accent">${icon(u.icon)}</div>
      <h3 style="margin-top:1rem;font-size:1.0625rem">${u.title}</h3>
      <p style="margin-top:0.5rem;font-size:0.875rem;color:var(--muted-foreground);line-height:1.6">${u.desc}</p>
    </div>`
  ).join("");
}

function renderFabricModules(items) {
  return items.map((m) =>
    `<article class="product-module" id="module-${m.num}">
      <div class="product-module-header">
        <span class="product-module-num">${m.num}</span>
        <div class="card-icon accent">${icon(m.icon)}</div>
        <div>
          <h3>${m.title}</h3>
          <p>${m.summary}</p>
        </div>
      </div>
      ${m.sources ? `<p class="product-module-label">Ingested sources</p><div class="deliverable-tags">${m.sources.map((s) => `<span>${s}</span>`).join("")}</div>
      <p class="product-module-label">Metadata per source</p><div class="deliverable-tags">${m.metadata.map((s) => `<span>${s}</span>`).join("")}</div>` : ""}
      ${m.questions ? `<p class="product-module-label">Example questions</p><ul class="question-list">${m.questions.map((q) => `<li>${q}</li>`).join("")}</ul>
      <p class="product-module-label">Every response includes</p><div class="deliverable-tags">${m.responses.map((s) => `<span>${s}</span>`).join("")}</div>` : ""}
      ${m.chains ? `<p class="product-module-label">Relationship chains</p>${m.chains.map((c) => `<div class="graph-chain">${c}</div>`).join("")}
      <p class="product-module-label">Graph-enabled questions</p><ul class="question-list">${m.questions.map((q) => `<li>${q}</li>`).join("")}</ul>` : ""}
    </article>`
  ).join("");
}

function renderStudioModules(items) {
  return items.map((m) =>
    `<article class="product-module">
      <div class="product-module-header">
        <span class="product-module-num">${m.num}</span>
        <div class="card-icon accent">${icon(m.icon)}</div>
        <div>
          <h3>${m.title}</h3>
          <p>${m.summary}</p>
        </div>
      </div>
      ${m.outputs ? `<p class="product-module-label">Generated outputs</p><div class="deliverable-tags">${m.outputs.map((s) => `<span>${s}</span>`).join("")}</div>` : ""}
      ${m.audiences ? `<p class="product-module-label">Adaptable for</p><div class="deliverable-tags">${m.audiences.map((s) => `<span>${s}</span>`).join("")}</div>` : ""}
      ${m.questions ? `<p class="product-module-label">Example prompts</p><ul class="question-list">${m.questions.map((q) => `<li>${q}</li>`).join("")}</ul>` : ""}
    </article>`
  ).join("");
}

function renderCheckListItems(items) {
  return items.map((item) =>
    `<li style="display:flex;gap:0.5rem;font-size:0.875rem;color:var(--muted-foreground);margin-top:0.5rem"><span class="check-icon">${icon("check", 16)}</span>${item}</li>`
  ).join("");
}

function renderRoadmap(items) {
  return items.map((r) =>
    `<div class="roadmap-phase">
      <span class="roadmap-phase-label">${r.phase}</span>
      <div>
        <h4>${r.title}</h4>
        <p>${r.desc}</p>
      </div>
    </div>`
  ).join("");
}

function initProductsOverview() {
  setHtml("product-showcase", PRODUCT_OVERVIEW.map((product, index) =>
    renderShowcaseCard(product, index === 2)
  ).join(""));
}

/* ── Home long-scroll content (Octave-style, company level) ─────── */

const HOME_BENEFITS = [
  {
    title: "Reduce costs with smart workflows",
    bullets: ["Cut costs", "Improve workflows", "Deliver measurable bottom line value", "Scale with confidence"],
  },
  {
    title: "Gain real-time insights",
    bullets: ["Single pane of glass", "Better, faster decisions", "Enhanced operational efficiency", "Ensure regulatory compliance"],
  },
  {
    title: "Accelerate decision-making",
    bullets: ["Central, organized documentation", "Smart tools to simplify processes", "Boost cross-departmental collaboration", "Enhance overall safety"],
  },
];

const HOME_FEATURES = [
  {
    icon: "network",
    title: "Real-time data integration",
    caption: "Engineers and analysts monitor live telemetry across the environment.",
    summary: "Seamlessly integrate real-time data across the entire asset lifecycle, enabling faster and more accurate decision-making. Improve operational efficiency, minimize costly downtime, and empower teams with instant access to critical information when they need it most.",
    image: "assets/stock-technicians-hardhat.jpg",
    imageAlt: "Technician in hard hat and PPE inspecting industrial equipment",
  },
  {
    icon: "users",
    title: "Enhance collaboration between internal and external stakeholders",
    caption: "Operators working across multiple displays in a control room.",
    summary: "Facilitate seamless teamwork between internal teams and external stakeholders. Align goals, streamline communication and boost project success through collaborative workflows that keep everyone synchronized and working toward shared objectives.",
    image: "assets/stock-control-room.jpg",
    imageAlt: "Security operators monitoring multiple screens in a control room",
  },
  {
    icon: "layers",
    title: "Advanced visualization tools for deeper asset insights",
    caption: "Interactive models bring complex environments to life on any device.",
    summary: "Deliver intuitive 2D/3D models and panoramic views that provide deeper insights into assets and engineering data. Empower teams with visual clarity that transforms complex information into actionable intelligence for better planning and execution.",
    image: "assets/stock-ipad-blueprints.jpg",
    imageAlt: "Engineer reviewing diagrams and schematics on a tablet",
  },
  {
    icon: "cpu",
    title: "Digital twin creation for predictive asset management",
    caption: "A living digital twin mirrors the real environment for safe experimentation.",
    summary: "Transform physical assets into virtual counterparts using digital twin technology. Improve monitoring, predict potential issues before they occur and support smarter, data-driven decisions that optimize asset performance and extend lifecycle value.",
    image: "assets/stock-ppe-workers.jpg",
    imageAlt: "PPE-equipped workers coordinating on an industrial site",
  },
  {
    icon: "file",
    title: "Document management and control for complete oversight",
    caption: "Automated workflows route, review and approve documentation end to end.",
    summary: "Control document routing, status tracking, redlining, markup and inconsistency checking. Efficiently manage transmittals, submittals, change requests and more through centralized workflows that ensure accuracy and compliance throughout projects.",
    image: "assets/stock-computers-analytics.jpg",
    imageAlt: "Analyst reviewing operational data on computer displays",
  },
  {
    icon: "radar",
    title: "Design review and issue management for faster resolution",
    caption: "Shared review workflows shorten cycles and centralize remediation.",
    summary: "Transform engineering design reviews with integrated, shared workflows. Reduce review cycles, improve consistency and centralize compliance-driven changes for faster issue resolution. Streamline the entire review process from identification to completion.",
    image: "assets/stock-tablet-review.jpg",
    imageAlt: "Technicians collaborating over plans and tablets on site",
  },
];

const HOME_STATS = [
  { value: "30%", label: "reduction in overall project costs" },
  { value: "20%", label: "time savings in data collection & validation" },
  { value: "30%", label: "cost & timeline reduction across projects" },
];

const HOME_PORTFOLIO = [
  { name: "DVN Secure Knowledge Fabric", href: "secure-knowledge-fabric.html", desc: "Our information management solution centralizes engineering, operations and maintenance data, enabling digital twins and smarter decisions." },
  { name: "DVN Synthesis Assistant", href: "secure-knowledge-fabric.html", desc: "The AI assistant for DVN Synthesis. Built on a contextualized data foundation. Delivering accurate, validated answers." },
];

const HOME_CASES = [
  {
    tab: "SaaS",
    title: "SaaS startup: full-stack launch from zero to production",
    summary: "Built the marketing site, deployed AWS infrastructure with CI/CD, configured IAM and monitoring, and automated onboarding workflows — all in 6 weeks.",
    tags: ["Build", "Deploy", "Automate"],
  },
  {
    tab: "Healthcare",
    title: "Healthcare platform: closing identity gaps before a HIPAA audit",
    summary: "Identified 14 stale privileged accounts and missing MFA on a legacy VPN. Delivered a prioritized remediation plan executed in 3 weeks ahead of an external audit.",
    tags: ["Secure", "IAM"],
  },
  {
    tab: "E-commerce",
    title: "E-commerce brand: SEO and cloud cost optimization",
    summary: "Improved organic traffic 45% through technical SEO fixes and reduced AWS spend 30% through rightsizing and reserved instance planning.",
    tags: ["Optimize", "SEO"],
  },
];

const HOME_RESOURCES = [
  { type: "Blog", title: "Building trust: Why DVN Synthesis is a game changer", desc: "DVN Synthesis transforms asset information management with trusted, connected data — reducing risk, improving handover and enabling smarter decisions." },
  { type: "Webinar", title: "Transforming management of change in operations", desc: "Discover how DVN Synthesis and visualization tools are transforming management of change for safer, smarter operations." },
  { type: "Blog", title: "AI-driven asset management: Transforming operations", desc: "Learn how DVN Synthesis uses AI to streamline operations, empower teams with real-time insights, automate data extraction and future-proof defense." },
  { type: "Webinar", title: "Reimagining engineering and projects with DVN Synthesis", desc: "Explore how DVN Synthesis transforms engineering and project management by enhancing workflow efficiency, data integration and standards compliance." },
];

const HOME_FAQ = [
  {
    q: "What is DVN Synthesis?",
    a: "DVN Synthesis is a cloud-native partner for excellence across Digital, Virtual, and Network. By contextualizing, visualizing and enhancing work processes across the entire lifecycle, we unlock more intelligent and autonomous \"digital projects\" and \"digital assets\" for your organization — bridging the physical and digital worlds.",
  },
  {
    q: "Who will benefit from DVN Synthesis?",
    a: "We serve organizations developing intricate infrastructure and security programs throughout their entire lifecycle — from planning, design and build to operations and maintenance. We're ideal for teams looking to unlock unprecedented value across facilities, projects and entire enterprises, such as Security & SecOps teams, asset owners and operators, and managed service partners.",
  },
  {
    q: "What is DVN Synthesis used for?",
    a: "Enriching lifecycle work processes, DVN Synthesis advances a best-in-class collection of core capabilities by connecting to a powerful digital backbone. It unites critical data to form a Digital Thread that drives transparency, efficiency, productivity and informed decision-making while reducing risk and cost — across data & information management, modelling & visualization, change management, work packaging, document control, and design review.",
  },
  {
    q: "How does it relate to the Digital · Virtual · Network vision?",
    a: "We collaborate with customers to accelerate their transformation journey toward a Smart Digital Reality — a virtual representation of physical assets, infused with real-time and time-series intelligence and context to automate processes and analytics, increasingly removing the need for manual intervention.",
  },
  {
    q: "What are some of the benefits gained by working with DVN Synthesis?",
    a: "We excel at optimizing the performance of projects and operations — delivering efficiency, productivity, quality and safety while improving fiscal and environmental sustainability. Benefits include project cost & schedule reduction, improved design quality, increased safety, immediate access to real-time data, operational efficiency and reduced maintenance costs.",
  },
  {
    q: "Is DVN Synthesis cloud-native or on-premises?",
    a: "DVN Synthesis is cloud-native by design and can also be deployed on-premises, air-gapped or in a private cloud — so your most sensitive environments stay under your control while still benefiting from real-time integration and collaboration.",
  },
];

const HOME_RELATED = [
  { name: "DVN Secure Knowledge Fabric", href: "secure-knowledge-fabric.html", desc: "Encrypted local RAG and a SecOps knowledge graph — the organization's memory for investigations and institutional intelligence." },
  { name: "DVN Security Transformation Studio", href: "security-transformation-studio.html", desc: "Turns approved knowledge into training, tabletops, walkthroughs and tutorial content — built to scale with your teams." },
  { name: "DVN Digital Twin SimOps", href: "digital-twin-simops.html", desc: "Models your environment, runs safe purple-team exercises and continuously validates how people, tools and controls respond." },
  { name: "DVN Readiness Scorecard", href: "scorecard.html", desc: "Benchmark where you stand across your stack in minutes and see the highest-impact next steps." },
];

const HOME_INDUSTRIES = [
  "Financial Services", "Healthcare", "Government & Public Sector", "Energy & Utilities",
  "Technology", "Manufacturing", "Retail", "Education", "Other",
];

const HOME_INTERESTS = [
  "Cloud & IT infrastructure", "Cyber security", "Data science & analytics",
  "Software engineering", "Continuous security validation", "Digital twin of my environment",
  "Not sure — help me decide",
];

function renderHomeCaseStudy(caseStudy) {
  return `
    <div class="cases-detail">
      <h3>${caseStudy.title}</h3>
      <p>${caseStudy.summary}</p>
      <div class="deliverable-tags">${caseStudy.tags.map((tag) => `<span>${tag}</span>`).join("")}</div>
    </div>`;
}

function initHomeScroll() {
  setHtml("home-benefits", HOME_BENEFITS.map((b) => `
    <div class="benefit-card">
      <h3>${b.title}</h3>
      <ul>${b.bullets.map((item) => `<li><span class="check-icon">${icon("check", 16)}</span>${item}</li>`).join("")}</ul>
    </div>`).join(""));

  setHtml("home-features", HOME_FEATURES.map((f, i) => `
    <article class="feature-row${i % 2 ? " reverse" : ""}">
      <div class="feature-row-media">
        <img src="${f.image}" alt="${f.imageAlt}" loading="lazy" width="1400" height="875">
        <span class="feature-row-caption">${f.caption}</span>
      </div>
      <div class="feature-row-copy">
        <h3>${f.title}</h3>
        <p>${f.summary}</p>
      </div>
    </article>`).join(""));

  setHtml("home-portfolio", HOME_PORTFOLIO.map((p) => `
    <a href="${p.href}" class="portfolio-card">
      <h3>${p.name}</h3>
      <p>${p.desc}</p>
      <span class="comp-card-link">Learn More ${icon("arrow-right", 16)}</span>
    </a>`).join(""));

  setHtml("home-stats", HOME_STATS.map((s) => `
    <div class="stat-card">
      <div class="stat-card-value">${s.value}</div>
      <p>${s.label}</p>
    </div>`).join(""));

  setHtml("home-cases", `
    <div class="cases-layout">
      <div class="cases-visual">
        <img src="assets/stock-case-study.jpg" alt="Operations team reviewing live systems on workstation displays" loading="lazy" width="1400" height="875">
      </div>
      <div class="cases-copy">
        <div class="cases-tabs">${HOME_CASES.map((c, i) =>
          `<button type="button" class="cases-tab${i === 0 ? " active" : ""}" data-case-index="${i}">${c.tab}</button>`).join("")}</div>
        <div id="home-case-detail">${renderHomeCaseStudy(HOME_CASES[0])}</div>
      </div>
    </div>`);

  const caseTabs = document.querySelectorAll(".cases-tab");
  const caseDetail = document.getElementById("home-case-detail");
  caseTabs.forEach((tab) => tab.addEventListener("click", () => {
    caseTabs.forEach((t) => t.classList.remove("active"));
    tab.classList.add("active");
    const index = Number(tab.dataset.caseIndex);
    if (caseDetail && HOME_CASES[index]) {
      caseDetail.innerHTML = renderHomeCaseStudy(HOME_CASES[index]);
    }
  }));

  setHtml("home-resources", HOME_RESOURCES.map((r) => `
    <article class="resource-card">
      <span class="resource-type">${r.type}</span>
      <h3>${r.title}</h3>
      <p>${r.desc}</p>
    </article>`).join(""));

  setHtml("home-faq", HOME_FAQ.map((f) => `
    <div class="faq-item">
      <button type="button" class="faq-question" aria-expanded="false">
        <span>${f.q}</span>${icon("chevron-down", 18)}
      </button>
      <div class="faq-answer"><p>${f.a}</p></div>
    </div>`).join(""));

  document.querySelectorAll(".faq-question").forEach((btn) => {
    btn.addEventListener("click", () => {
      const item = btn.closest(".faq-item");
      const open = item.classList.toggle("open");
      btn.setAttribute("aria-expanded", open ? "true" : "false");
    });
  });

  setHtml("home-related", HOME_RELATED.map((p) => `
    <a href="${p.href}" class="portfolio-card">
      <h3>${p.name}</h3>
      <p>${p.desc}</p>
      <span class="comp-card-link">Learn More ${icon("arrow-right", 16)}</span>
    </a>`).join(""));

  initSalesForm(HOME_INDUSTRIES, HOME_INTERESTS, "Talk to Sales — DVN Synthesis");
  initSectionNav();
}

function initSectionNav() {
  const nav = document.getElementById("section-nav");
  if (!nav) return;
  const links = Array.from(nav.querySelectorAll(".section-nav-link"));
  const sections = links
    .map((l) => document.querySelector(l.getAttribute("href")))
    .filter(Boolean);
  if (!sections.length) return;

  function scrollOffset() {
    const header = document.querySelector(".site-header");
    return (header?.offsetHeight || 72) + (nav.offsetHeight || 56) + 12;
  }

  function onScroll() {
    const offset = scrollOffset();
    let activeIndex = 0;
    sections.forEach((sec, i) => {
      if (sec.getBoundingClientRect().top <= offset) activeIndex = i;
    });
    links.forEach((l, i) => l.classList.toggle("active", i === activeIndex));
  }

  links.forEach((link) => {
    link.addEventListener("click", (e) => {
      const target = document.querySelector(link.getAttribute("href"));
      if (!target) return;
      e.preventDefault();
      const top = target.getBoundingClientRect().top + window.scrollY - scrollOffset() + 4;
      window.scrollTo({ top, behavior: "smooth" });
    });
  });

  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll, { passive: true });
}

function initSalesForm(industries, interests, subject) {
  const industry = document.getElementById("sales-industry");
  if (industry) industry.innerHTML = `<option value="">Select</option>` +
    industries.map((i) => `<option>${i}</option>`).join("");
  const interest = document.getElementById("sales-interest");
  if (interest) interest.innerHTML = `<option value="">Select</option>` +
    interests.map((i) => `<option>${i}</option>`).join("");

  const form = document.getElementById("sales-form");
  if (!form) return;
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const body = [
      `Industry: ${data.get("industry") || "—"}`,
      `Interested in: ${data.get("interest") || "—"}`,
      `Name: ${data.get("first") || ""} ${data.get("last") || ""}`.trim(),
      `Work email: ${data.get("email") || "—"}`,
      `Phone: ${data.get("phone") || "—"}`,
      `Company: ${data.get("company") || "—"}`,
      `Country: ${data.get("country") || "—"}`,
      "",
      `${data.get("comments") || ""}`,
    ].join("\n");
    window.location.href = `mailto:info@dvnsynthesis.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  });
}

/* ── Digital Twin SimOps product page (security-specific) ───────── */

const TWIN_BENEFITS = [
  {
    title: "Reduce costs with continuous validation",
    bullets: ["Cut reliance on one-off assessments", "Improve purple-team workflows", "Deliver measurable resilience value", "Scale validation with confidence"],
  },
  {
    title: "Gain real-time security insights",
    bullets: ["Single pane for architecture and risk", "Better, faster security decisions", "Enhanced operational efficiency", "Support regulatory and audit evidence"],
  },
  {
    title: "Accelerate decision-making",
    bullets: ["Central, organized security documentation", "Smart tools to simplify exercises", "Boost cross-team collaboration", "Enhance overall safety and readiness"],
  },
];

const TWIN_FEATURES = [
  {
    icon: "network",
    title: "Real-time environment integration",
    summary: "Seamlessly integrate architecture, assets, identities, telemetry, and controls across the security lifecycle — enabling faster, more accurate decisions when assessing attack paths and response readiness.",
    imageClass: "twin-feature-a",
  },
  {
    icon: "users",
    title: "Enhance collaboration between stakeholders",
    summary: "Facilitate seamless teamwork between SecOps, engineering, GRC, and leadership. Align goals, streamline communications, and boost program success through collaborative purple-team workflows.",
    imageClass: "twin-feature-b",
  },
  {
    icon: "layers",
    title: "Advanced visualization for deeper asset insights",
    summary: "Deliver intuitive architecture models, attack-path views, and coverage maps that transform complex security data into actionable intelligence for planning and executive reporting.",
    imageClass: "twin-feature-c",
  },
  {
    icon: "cpu",
    title: "Digital twin creation for predictive security",
    summary: "Transform physical and virtual environments into security digital twins. Improve monitoring, predict exploitation outcomes, and support smarter decisions that optimize detection and response.",
    imageClass: "twin-feature-d",
  },
  {
    icon: "file",
    title: "Evidence and document management",
    summary: "Control exercise routing, findings status, evidence packages, and remediation tracking through centralized workflows that ensure accuracy, auditability, and compliance throughout engagements.",
    imageClass: "twin-feature-e",
  },
  {
    icon: "radar",
    title: "Purple-team orchestration and issue management",
    summary: "Transform security exercises with integrated, shared workflows. Reduce cycle times, improve consistency, and centralize compliance-driven remediation from identification to validation.",
    imageClass: "twin-feature-f",
  },
];

const TWIN_STATS = [
  { value: "40%", label: "reduction in repeat assessment effort" },
  { value: "30%", label: "faster detection and control validation" },
  { value: "50%", label: "improvement in executive-ready reporting speed" },
];

const TWIN_PORTFOLIO = [
  { name: "Secure Knowledge Fabric", href: "secure-knowledge-fabric.html", desc: "Encrypted local RAG and SecOps knowledge graph — the memory layer for investigations and institutional intelligence." },
  { name: "Security Transformation Studio", href: "security-transformation-studio.html", desc: "Transforms approved knowledge into training, simulations, and multimedia learning assets." },
];

const TWIN_PLATFORM = [
  {
    product: "Product #1",
    name: "Secure Knowledge Fabric",
    href: "secure-knowledge-fabric.html",
    desc: "Provides the organization's memory — SOPs, detections, architecture, and institutional knowledge that inform every simulation.",
    icon: "network",
  },
  {
    product: "Product #2",
    name: "Security Transformation Studio",
    href: "security-transformation-studio.html",
    desc: "Turns knowledge into training, tabletop exercises, walkthroughs, flashcards, and documentation generated from real operations.",
    icon: "play",
  },
  {
    product: "Product #3",
    name: "Digital Twin SimOps",
    href: "digital-twin-simops.html",
    desc: "Models the environment, continuously assesses it, attacks safely, and improves defenses through automated purple-team exercises.",
    icon: "crosshair",
    featured: true,
  },
];

function initDigitalTwinSimopsPage() {
  setHtml("twin-benefits", TWIN_BENEFITS.map((b) => `
    <div class="benefit-card">
      <h3>${b.title}</h3>
      <ul>${b.bullets.map((item) => `<li><span class="check-icon">${icon("check", 16)}</span>${item}</li>`).join("")}</ul>
    </div>`).join(""));

  setHtml("twin-features", TWIN_FEATURES.map((f, i) => `
    <article class="feature-row${i % 2 ? " reverse" : ""}">
      <div class="feature-row-media ${f.imageClass}">${icon(f.icon, 48)}</div>
      <div class="feature-row-copy">
        <h3>${f.title}</h3>
        <p>${f.summary}</p>
      </div>
    </article>`).join(""));

  setHtml("twin-stats", TWIN_STATS.map((s) => `
    <div class="stat-card">
      <div class="stat-card-value">${s.value}</div>
      <p>${s.label}</p>
    </div>`).join(""));

  setHtml("twin-platform", TWIN_PLATFORM.map((p) => `
    <div class="card ${p.featured ? "featured" : ""}">
      <div class="card-icon accent">${icon(p.icon)}</div>
      <p class="product-phase-label">${p.product}</p>
      <h3 style="margin-top:0.5rem"><a href="${p.href}">${p.name}</a></h3>
      <p style="margin-top:0.75rem;font-size:0.875rem;color:var(--muted-foreground);line-height:1.65">${p.desc}</p>
    </div>`).join(""));

  setHtml("twin-portfolio", TWIN_PORTFOLIO.map((p) => `
    <a href="${p.href}" class="portfolio-card">
      <h3>${p.name}</h3>
      <p>${p.desc}</p>
      <span class="comp-card-link">Learn More ${icon("arrow-right", 16)}</span>
    </a>`).join(""));
}

function initKnowledgeFabricPage() {
  setHtml("scattered-sources", SCATTERED_SOURCES.map((s) =>
    `<div class="card" style="padding:1.25rem"><p style="font-size:0.875rem">${s}</p></div>`
  ).join(""));

  setHtml("graph-entities", GRAPH_ENTITIES.map((e) => `<span>${e}</span>`).join(""));

  setHtml("compare-grid", renderCompareCards(COMPARE));

  renderProductNav("product-nav", FABRIC_NAV);

  setHtml("users-list", renderUserCards(USERS));

  setHtml("modules-list", renderFabricModules(MODULES));

  setHtml("deliverables-list", DELIVERABLE_GROUPS.map((g) =>
    `<div class="card" style="margin-bottom:1.5rem">
      <h3 style="font-size:1.0625rem">${g.title}</h3>
      <div class="deliverable-tags">${g.items.map((i) => `<span>${i}</span>`).join("")}</div>
    </div>`
  ).join(""));

  setHtml("workflow-steps", WORKFLOW_STEPS.map((s) => `<li>${s}</li>`).join(""));

  setHtml("arch-layers", ARCH_LAYERS.map((a) =>
    `<div class="card">
      <div class="card-icon accent">${icon(a.icon)}</div>
      <h3 style="margin-top:1rem">${a.title}</h3>
      <ul style="margin-top:1rem">${a.items.map((i) => `<li style="display:flex;gap:0.5rem;font-size:0.875rem;color:var(--muted-foreground);margin-top:0.5rem"><span class="check-icon">${icon("check", 16)}</span>${i}</li>`).join("")}</ul>
    </div>`
  ).join(""));

  setHtml("security-controls", SECURITY_CONTROLS.map((c) => `<span>${c}</span>`).join(""));

  setHtml("approval-examples", renderCheckListItems(APPROVAL_EXAMPLES));

  setHtml("governance-flags", renderCheckListItems(GOVERNANCE_FLAGS));

  setHtml("roadmap-list", renderRoadmap(ROADMAP));

  setHtml("packaging-list", FABRIC_PACKAGES.map((p) =>
    `<div class="card ${p.featured ? "featured" : ""}" style="display:flex;flex-direction:column">
      ${p.featured ? '<span class="badge">Most popular</span>' : '<div style="height:1.25rem"></div>'}
      <h3 style="margin-top:0.5rem;font-size:1.125rem">${p.name}</h3>
      <p style="margin-top:0.75rem;flex:1;font-size:0.875rem;color:var(--muted-foreground);line-height:1.6">${p.desc}</p>
      <a href="book.html" class="btn ${p.featured ? "btn-primary" : "btn-outline"} btn-block" style="margin-top:1.5rem">Contact Sales</a>
    </div>`
  ).join(""));

  setHtml("pro-services", PRO_SERVICES.map((s) => `<span>${s}</span>`).join(""));
}

function initTransformationStudioPage() {
  setHtml("studio-relationship", STUDIO_RELATIONSHIP.map((r) =>
    `<div class="card ${r.featured ? "featured" : ""}">
      <div class="card-icon ${r.featured ? "accent" : ""}">${icon(r.icon)}</div>
      <p style="margin-top:1rem;font-size:0.75rem;font-weight:600;text-transform:uppercase;letter-spacing:0.05em;color:var(--muted-foreground)">${r.label}</p>
      <p style="margin-top:0.75rem;font-size:0.9375rem;line-height:1.6;color:var(--muted-foreground)">${r.question}</p>
    </div>`
  ).join(""));

  setHtml("studio-sources", STUDIO_SOURCES.map((s) =>
    `<div class="card" style="padding:1.25rem"><p style="font-size:0.875rem">${s}</p></div>`
  ).join(""));

  setHtml("studio-outputs", STUDIO_OUTPUTS.map((o) => `<span>${o}</span>`).join(""));

  renderProductNav("product-nav", STUDIO_NAV);

  setHtml("studio-users-list", renderUserCards(STUDIO_USERS));

  setHtml("studio-modules-list", renderStudioModules(STUDIO_MODULES));

  setHtml("studio-paths-list", STUDIO_PATHS.map((p) =>
    `<div class="card" style="margin-bottom:1.25rem">
      <h3 style="font-size:1.0625rem">${p.title}</h3>
      <div class="deliverable-tags">${p.items.map((i) => `<span>${i}</span>`).join("")}</div>
    </div>`
  ).join(""));

  setHtml("studio-workflow-steps", STUDIO_WORKFLOW.map((s) => `<li>${s}</li>`).join(""));

  setHtml("studio-ops-list", STUDIO_OPS.map((o) =>
    `<div class="card" style="padding:1.25rem">
      <p style="font-size:0.75rem;font-weight:600;text-transform:uppercase;letter-spacing:0.05em;color:var(--accent)">${o.trigger}</p>
      <p style="margin-top:0.5rem;font-size:0.9375rem">→ ${o.output}</p>
    </div>`
  ).join(""));

  setHtml("studio-integrity", renderCheckListItems(STUDIO_INTEGRITY));

  setHtml("studio-metrics", STUDIO_METRICS.map((m) => `<span>${m}</span>`).join(""));

  setHtml("studio-roadmap-list", renderRoadmap(STUDIO_ROADMAP));

  setHtml("studio-compare", renderCompareCards(STUDIO_COMPARE));
}
