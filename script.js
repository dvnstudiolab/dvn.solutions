/* DVN Solutions — shared site logic */

const SITE = {
  name: "DVN Solutions",
  tagline: "Digital Infrastructure as a Service",
  email: "hello@dvnsecurity.com",
};

const NAV = [
  { label: "Services", href: "services.html" },
  { label: "Pricing", href: "pricing.html" },
  { label: "Projects", href: "projects.html" },
  { label: "Careers", href: "careers.html" },
  { label: "About", href: "about.html" },
];

const FOOTER_COLUMNS = [
  {
    title: "Lifecycle",
    links: [
      { label: "Build", href: "services.html#build" },
      { label: "Deploy", href: "services.html#deploy" },
      { label: "Secure", href: "services.html#secure" },
      { label: "Optimize", href: "services.html#optimize" },
      { label: "Automate", href: "services.html#automate" },
      { label: "Pricing", href: "pricing.html" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "The Library", href: "library.html" },
      { label: "Readiness Scorecard", href: "scorecard.html" },
      { label: "Infrastructure Snapshot", href: "security-snapshot.html" },
      { label: "Downloadable Resources", href: "resources.html" },
      { label: "Projects & Case Studies", href: "projects.html" },
      { label: "Careers", href: "careers.html" },
      { label: "About", href: "about.html" },
    ],
  },
  {
    title: "Get Started",
    links: [
      { label: "Book a Call", href: "book.html" },
      { label: "Watch the VSL", href: "vsl.html" },
    ],
  },
];

const LIFECYCLE_PHASES = [
  {
    slug: "build",
    name: "Build",
    summary: "Websites, applications, cloud environments, AI agents, CRM, branding, and identity systems.",
    icon: "🏗️",
    timeline: "Project-based",
    capabilities: ["Websites", "Branding", "CRM", "AI Apps", "Internal Tools"],
  },
  {
    slug: "deploy",
    name: "Deploy",
    summary: "Hosting, cloud, CI/CD, Kubernetes, virtualization, networking, domains, and email.",
    icon: "🚀",
    timeline: "Days to weeks",
    capabilities: ["Cloud", "Hosting", "Networking", "CI/CD", "Containers"],
  },
  {
    slug: "secure",
    name: "Secure",
    summary: "IAM, GRC, vulnerability management, penetration testing, monitoring, and compliance.",
    icon: "🛡️",
    timeline: "1–4 weeks",
    capabilities: ["GRC", "IAM", "Vulnerability Management", "Pen Testing", "SOC"],
  },
  {
    slug: "optimize",
    name: "Optimize",
    summary: "SEO, analytics, cloud cost optimization, performance tuning, and business intelligence.",
    icon: "📈",
    timeline: "Ongoing",
    capabilities: ["SEO", "Performance", "Analytics", "Cost Optimization", "User Experience"],
  },
  {
    slug: "automate",
    name: "Automate",
    summary: "AI agents, workflows, CRM automation, marketing automation, and internal operations.",
    icon: "⚡",
    timeline: "Ongoing",
    capabilities: ["AI Agents", "Workflow Automation", "Marketing Automation", "Business Process Automation", "Reporting"],
  },
];

const SERVICES = LIFECYCLE_PHASES;

const PACKAGES = [
  { slug: "starter", name: "Starter", tagline: "Infrastructure Snapshot", priceRange: "$1,500 – $2,500", billingNote: "one-time", ctaLabel: "Get the Snapshot", featured: false },
  { slug: "professional", name: "Professional", tagline: "Lifecycle Phase Engagement", priceRange: "$8,000 – $25,000", billingNote: "per phase", ctaLabel: "Book a Discovery Call", featured: true },
  { slug: "premium", name: "Premium", tagline: "DIaaS Partner Retainer", priceRange: "$6,000 – $12,000", billingNote: "per month, retainer", ctaLabel: "Talk to Us", featured: false },
  { slug: "enterprise", name: "Enterprise", tagline: "Full-Stack Infrastructure Program", priceRange: "Custom", billingNote: "scoped by engagement", ctaLabel: "Request a Proposal", featured: false },
];

const SCORECARD_QUESTIONS = [
  { id: "cloud-accounts", category: "Cloud", question: "How is your cloud environment structured?", options: ["Single account/subscription, no segmentation", "Some separation between prod and non-prod", "Multi-account/subscription with guardrails", "Fully segmented with automated policy enforcement"] },
  { id: "cloud-monitoring", category: "Cloud", question: "Do you monitor for cloud misconfigurations?", options: ["No, we don't actively check", "Manual checks occasionally", "Automated tooling (CSPM) in place", "Automated tooling with enforced auto-remediation"] },
  { id: "identity-sso", category: "Identity", question: "How is identity and access centrally managed?", options: ["No central identity provider", "Central IdP for some systems", "SSO enforced across most systems", "SSO + conditional access enforced everywhere"] },
  { id: "mfa-coverage", category: "MFA", question: "What is your MFA coverage across critical systems?", options: ["MFA not enforced", "MFA enforced for some admins only", "MFA enforced for all employees", "Phishing-resistant MFA (FIDO2/passkeys) enforced"] },
  { id: "endpoint-protection", category: "Endpoint", question: "How are endpoints protected?", options: ["No centralized endpoint protection", "Antivirus on some devices", "EDR deployed across most endpoints", "EDR with automated response and full coverage"] },
  { id: "logging-coverage", category: "Logging", question: "What is your security logging coverage?", options: ["Minimal or no centralized logging", "Some logs collected, not reviewed", "Centralized SIEM with defined use cases", "SIEM with 24/7 monitoring and tuned detections"] },
  { id: "incident-response-plan", category: "Incident Response", question: "Do you have a tested incident response plan?", options: ["No formal IR plan", "Plan exists but untested", "Plan tested via tabletop exercise", "Plan tested + runbooks + on-call rotation"] },
  { id: "compliance-readiness", category: "Compliance", question: "How prepared are you for compliance requirements?", options: ["No compliance framework in place", "Informal controls, no audit", "Controls mapped to a framework (SOC 2, ISO)", "Audit-ready with evidence collection automated"] },
  { id: "ai-usage", category: "AI", question: "How is AI tool usage governed in your org?", options: ["No policy — teams use AI freely", "Informal guidelines only", "Approved tool list with data handling rules", "Formal AI governance with monitoring and DLP"] },
  { id: "backups", category: "Backups", question: "How robust are your backup and recovery processes?", options: ["No regular backups or untested restores", "Backups exist but restore untested", "Regular backups with periodic restore tests", "Automated backups with RTO/RPO targets and tested DR"] },
  { id: "access-reviews", category: "Access Control", question: "How often do you review user access?", options: ["Never — access accumulates over time", "Ad hoc reviews when someone leaves", "Quarterly access reviews for critical systems", "Automated quarterly reviews with attestation workflow"] },
  { id: "vendor-risk", category: "Access Control", question: "How do you assess third-party/vendor security?", options: ["No vendor security assessment", "Basic questionnaire for some vendors", "Tiered vendor risk assessment program", "Continuous vendor monitoring with contract security clauses"] },
  { id: "security-ownership", category: "Access Control", question: "Who owns security architecture in your org?", options: ["No one — it's ad hoc", "IT generalist handles it part-time", "Dedicated security engineer or team", "Security architect with exec/board reporting cadence"] },
  { id: "board-reporting", category: "Access Control", question: "How does leadership track security risk?", options: ["No security reporting to leadership", "Ad hoc updates after incidents", "Quarterly security updates to leadership", "Regular board-level risk reporting with metrics"] },
];

const RISK_TIERS = [
  { min: 85, label: "Strong Posture", desc: "Your infrastructure fundamentals are solid. Focus on optimization and automation to stay ahead." },
  { min: 70, label: "Solid With Gaps", desc: "You have a reasonable foundation but identifiable gaps. A targeted assessment would help prioritize next steps." },
  { min: 50, label: "Elevated Risk", desc: "Several critical areas need attention. Consider an Infrastructure Snapshot to get a clear, prioritized roadmap." },
  { min: 30, label: "High Risk", desc: "Significant gaps across multiple domains. A full lifecycle engagement is recommended before your next growth milestone." },
  { min: 0, label: "Critical", desc: "Your infrastructure has major gaps that could block growth, fail audits, or lead to breach. Let's talk immediately." },
];

function currentPage() {
  const path = window.location.pathname.split("/").pop() || "index.html";
  return path === "" ? "index.html" : path;
}

function renderHeader() {
  const el = document.getElementById("site-header");
  if (!el) return;
  const page = currentPage();
  el.innerHTML = `
    <div class="brand-gradient-bar"></div>
    <div class="container header-inner">
      <a href="index.html" class="logo-link">
        <img src="assets/dvn-logo.png" alt="DVN Solutions logo" width="34" height="34">
        <span>DVN <span class="muted">Solutions</span></span>
      </a>
      <nav class="nav-desktop">
        ${NAV.map((item) => `<a href="${item.href}" class="${page === item.href ? "active" : ""}">${item.label}</a>`).join("")}
      </nav>
      <div class="header-actions">
        <a href="book.html" class="btn btn-primary btn-sm">Book a Call</a>
      </div>
      <button class="menu-toggle" id="menu-toggle" aria-label="Open menu">☰</button>
    </div>
    <div class="mobile-nav" id="mobile-nav">
      <div class="mobile-nav-panel">
        <button class="mobile-nav-close" id="menu-close" aria-label="Close menu">×</button>
        <a href="index.html" class="logo-link" style="margin-bottom:1rem">
          <img src="assets/dvn-logo.png" alt="" width="22" height="22"> DVN Solutions
        </a>
        <nav>
          ${NAV.map((item) => `<a href="${item.href}">${item.label}</a>`).join("")}
        </nav>
        <div class="mobile-nav-actions">
          <a href="book.html" class="btn btn-primary btn-block">Book a Call</a>
        </div>
      </div>
    </div>`;

  document.getElementById("menu-toggle")?.addEventListener("click", () => {
    document.getElementById("mobile-nav")?.classList.add("open");
  });
  document.getElementById("menu-close")?.addEventListener("click", closeMobileNav);
  document.getElementById("mobile-nav")?.addEventListener("click", (e) => {
    if (e.target.id === "mobile-nav") closeMobileNav();
  });
}

function closeMobileNav() {
  document.getElementById("mobile-nav")?.classList.remove("open");
}

function renderFooter() {
  const el = document.getElementById("site-footer");
  if (!el) return;
  el.innerHTML = `
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand">
          <a href="index.html" class="logo-link">
            <img src="assets/dvn-logo.png" alt="" width="32" height="32">
            <span>${SITE.name}</span>
          </a>
          <p>Your AI-native digital infrastructure partner — we design, deploy, secure, optimize, and automate the complete technology stack that powers your business.</p>
        </div>
        ${FOOTER_COLUMNS.map(
          (col) => `
          <div class="footer-col">
            <h4>${col.title}</h4>
            <ul>${col.links.map((l) => `<li><a href="${l.href}">${l.label}</a></li>`).join("")}</ul>
          </div>`
        ).join("")}
      </div>
      <div class="footer-bottom">
        <p>&copy; ${new Date().getFullYear()} ${SITE.name}. All rights reserved.</p>
        <p>Build → Deploy → Secure → Optimize → Automate. Digital infrastructure, managed as one integrated lifecycle.</p>
      </div>
    </div>`;
}

function initScorecard() {
  const container = document.getElementById("scorecard-app");
  if (!container) return;

  let step = 0;
  let answers = {};
  let phase = "questions";

  function maxScore() {
    return SCORECARD_QUESTIONS.length * 3;
  }

  function render() {
    if (phase === "lead") {
      container.innerHTML = `
        <div class="form-card">
          <h3 style="margin-bottom:0.5rem">Almost done — where should we send your results?</h3>
          <p style="color:var(--muted-foreground);font-size:0.875rem;margin-bottom:1.5rem">We'll email your score and recommendations within one business day.</p>
          <form id="scorecard-lead-form">
            <div class="form-group"><label for="sc-name">Name</label><input id="sc-name" name="name" required></div>
            <div class="form-group"><label for="sc-email">Work email</label><input id="sc-email" name="email" type="email" required></div>
            <div class="form-group"><label for="sc-company">Company</label><input id="sc-company" name="company"></div>
            <button type="submit" class="btn btn-primary btn-block btn-lg">Get My Results</button>
          </form>
        </div>`;
      document.getElementById("scorecard-lead-form")?.addEventListener("submit", handleLeadSubmit);
      return;
    }

    if (phase === "result") {
      const total = Object.values(answers).reduce((a, b) => a + b, 0);
      const pct = Math.round((total / maxScore()) * 100);
      const tier = RISK_TIERS.find((t) => pct >= t.min) || RISK_TIERS[RISK_TIERS.length - 1];
      container.innerHTML = `
        <div class="form-card scorecard-result">
          <p class="eyebrow">Your Score</p>
          <div class="scorecard-score">${pct}</div>
          <div class="scorecard-tier">${tier.label}</div>
          <p class="scorecard-desc">${tier.desc}</p>
          <div style="margin-top:2rem;display:flex;flex-direction:column;gap:0.75rem;align-items:center">
            <a href="book.html" class="btn btn-primary btn-lg">Book a Discovery Call</a>
            <a href="security-snapshot.html" class="btn btn-outline">Get the Infrastructure Snapshot</a>
          </div>
        </div>`;
      return;
    }

    const q = SCORECARD_QUESTIONS[step];
    const progress = ((step + 1) / SCORECARD_QUESTIONS.length) * 100;
    container.innerHTML = `
      <div class="form-card">
        <div class="scorecard-progress"><div class="scorecard-progress-bar" style="width:${progress}%"></div></div>
        <p style="font-size:0.75rem;color:var(--muted-foreground);margin-bottom:1rem">Question ${step + 1} of ${SCORECARD_QUESTIONS.length}</p>
        <div class="scorecard-question">
          <p class="scorecard-category">${q.category}</p>
          <h3>${q.question}</h3>
          <div class="radio-group">
            ${q.options
              .map(
                (opt, i) => `
              <label class="radio-option ${answers[q.id] === i ? "selected" : ""}">
                <input type="radio" name="${q.id}" value="${i}" ${answers[q.id] === i ? "checked" : ""}>
                ${opt}
              </label>`
              )
              .join("")}
          </div>
        </div>
        <div style="display:flex;justify-content:space-between;margin-top:1.5rem">
          <button class="btn btn-outline" id="sc-back" ${step === 0 ? "disabled" : ""}>Back</button>
          <button class="btn btn-primary" id="sc-next" disabled>${step === SCORECARD_QUESTIONS.length - 1 ? "See Results" : "Next"}</button>
        </div>
      </div>`;

    container.querySelectorAll(".radio-option").forEach((label) => {
      label.addEventListener("click", () => {
        const input = label.querySelector("input");
        input.checked = true;
        answers[q.id] = parseInt(input.value, 10);
        container.querySelectorAll(".radio-option").forEach((l) => l.classList.remove("selected"));
        label.classList.add("selected");
        document.getElementById("sc-next").disabled = false;
      });
    });

    document.getElementById("sc-back")?.addEventListener("click", () => {
      if (step > 0) { step--; render(); }
    });
    document.getElementById("sc-next")?.addEventListener("click", () => {
      if (answers[q.id] === undefined) return;
      if (step < SCORECARD_QUESTIONS.length - 1) { step++; render(); }
      else { phase = "lead"; render(); }
    });
  }

  function handleLeadSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const total = Object.values(answers).reduce((a, b) => a + b, 0);
    const pct = Math.round((total / maxScore()) * 100);
    const tier = RISK_TIERS.find((t) => pct >= t.min)?.label || "Unknown";
    const subject = encodeURIComponent("Scorecard submission");
    const body = encodeURIComponent(
      `Name: ${form.name.value}\nEmail: ${form.email.value}\nCompany: ${form.company.value}\nScore: ${pct}/100\nTier: ${tier}`
    );
    window.location.href = `mailto:${SITE.email}?subject=${subject}&body=${body}`;
    phase = "result";
    render();
  }

  render();
}

function initBookingForm() {
  const form = document.getElementById("booking-form");
  if (!form) return;
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const fd = new FormData(form);
    const lines = [];
    fd.forEach((v, k) => lines.push(`${k}: ${v}`));
    const subject = encodeURIComponent("Discovery call request");
    const body = encodeURIComponent(lines.join("\n"));
    window.location.href = `mailto:${SITE.email}?subject=${subject}&body=${body}`;
    form.innerHTML = `
      <div style="text-align:center;padding:2rem 0">
        <p style="font-size:1.25rem;font-weight:600;margin-bottom:0.5rem">Request sent!</p>
        <p style="color:var(--muted-foreground)">Your email client should open with your details. We'll respond within one business day.</p>
      </div>`;
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderHeader();
  renderFooter();
  initScorecard();
  initBookingForm();
});
