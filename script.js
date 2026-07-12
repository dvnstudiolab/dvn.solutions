/* DVN Synthesis — shared site logic */

const SITE = {
  name: "DVN Synthesis",
  tagline: "Digital · Virtual · Network",
  motto: "Digital is what you create. Virtual is where it runs. Network is how it connects.",
  lifecycle: "Build · Deploy · Secure · Optimize · Automate",
  email: "hello@dvnsecurity.com",
  phone: "",
  address: "Remote-first · United States",
};

const MAIN_NAV = [
  {
    label: "Products",
    children: [
      { label: "All Products", href: "products.html" },
      { label: "Secure Knowledge Fabric", href: "secure-knowledge-fabric.html" },
      { label: "Security Transformation Studio", href: "security-transformation-studio.html" },
      { label: "Digital Twin SimOps", href: "digital-twin-simops.html" },
      { label: "Pricing", href: "pricing.html" },
    ],
  },
  {
    label: "Industries",
    children: [
      {
        label: "Who We Serve",
        children: [
          { label: "Startups & SMBs", href: "projects.html" },
          { label: "Enterprise", href: "projects.html" },
          { label: "Security & SecOps", href: "projects.html" },
          { label: "Regulated Industries", href: "projects.html" },
        ],
      },
      { label: "Customers", href: "projects.html" },
      { label: "Case Studies", href: "projects.html" },
    ],
  },
  {
    label: "Learn",
    children: [
      { label: "The Library", href: "library.html" },
      { label: "Resources", href: "resources.html" },
      { label: "Readiness Scorecard", href: "scorecard.html" },
      { label: "Infrastructure Snapshot", href: "security-snapshot.html" },
    ],
  },
  { label: "Support", href: "book.html" },
  {
    label: "About",
    children: [
      { label: "About Us", href: "about.html" },
      { label: "Solutions & Services", href: "services.html" },
      { label: "Working at DVN", href: "careers.html" },
      { label: "Search Openings", href: "careers.html#open-roles" },
    ],
  },
];

const WHO_WE_SERVE = [
  { num: "01", title: "Startups & SMBs", desc: "Launch digital products on secure, scalable infrastructure without stitching together vendors." },
  { num: "02", title: "Growth Companies", desc: "Scale cloud, security, and automation as revenue and complexity accelerate." },
  { num: "03", title: "Enterprise", desc: "Integrate Digital, Virtual, and Network across programs, compliance, and procurement." },
  { num: "04", title: "Security & SecOps", desc: "Operational intelligence, knowledge fabric, and workforce readiness for security teams." },
  { num: "05", title: "Technology Orgs", desc: "Engineering, platform, and product teams shipping on modern CI/CD retainers." },
  { num: "06", title: "Regulated Industries", desc: "Healthcare, finance, and compliance-driven environments requiring governed delivery." },
];

const CORE_COMPETENCIES = [
  {
    title: "Cloud & IT Infrastructure",
    slug: "cloud",
    icon: "cloud",
    href: "services.html#deploy",
    imageClass: "comp-cloud",
    summary: "Cloud provisioning, containers, networking, CI/CD, and virtualization — environments deployed with confidence and repeatability.",
  },
  {
    title: "Cyber Security",
    slug: "cyber",
    icon: "shield",
    href: "services.html#secure",
    imageClass: "comp-cyber",
    summary: "IAM, GRC, vulnerability management, detection engineering, SOC operations, and governed SecOps intelligence products.",
  },
  {
    title: "Data Science & Analytics",
    slug: "data",
    icon: "bar-chart",
    href: "services.html#optimize",
    imageClass: "comp-data",
    summary: "SEO, analytics, business intelligence, cost optimization, and data-driven decision support across your digital stack.",
  },
  {
    title: "Software Engineering",
    slug: "software",
    icon: "code",
    href: "services.html#build",
    imageClass: "comp-software",
    summary: "Websites, applications, AI agents, internal tools, and platform engineering — the digital assets your business runs on.",
  },
];

const NAV = [
  { label: "Services", href: "services.html" },
  { label: "Products", href: "products.html" },
  { label: "Pricing", href: "pricing.html" },
  { label: "Projects", href: "projects.html" },
  { label: "Careers", href: "careers.html" },
  { label: "About", href: "about.html" },
];

const FOOTER_COLUMNS = [
  {
    title: "DVN",
    links: [
      { label: "About", href: "about.html" },
      { label: "Products", href: "products.html" },
      { label: "Knowledge Fabric", href: "secure-knowledge-fabric.html" },
      { label: "Transformation Studio", href: "security-transformation-studio.html" },
      { label: "Digital Twin SimOps", href: "digital-twin-simops.html" },
      { label: "Cloud & IT Infrastructure", href: "services.html#deploy" },
      { label: "Cyber Security", href: "services.html#secure" },
      { label: "Data Science & Analytics", href: "services.html#optimize" },
      { label: "Software Engineering", href: "services.html#build" },
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
    summary: "Create digital assets — brand, websites, software, AI, and data.",
    icon: "build",
    timeline: "Project-based",
    capabilities: ["Brand", "Websites", "Software", "AI", "Data"],
  },
  {
    slug: "deploy",
    name: "Deploy",
    summary: "Bring digital systems online across cloud, containers, networking, and CI/CD.",
    icon: "rocket",
    timeline: "Days to weeks",
    capabilities: ["Cloud", "Containers", "Networking", "CI/CD", "Edge"],
  },
  {
    slug: "secure",
    name: "Secure",
    summary: "Protect trust across identity, GRC, vulnerability management, and detection.",
    icon: "shield",
    timeline: "1–4 weeks",
    capabilities: ["IAM", "GRC", "Vuln Mgmt", "Pen Testing", "SOC"],
  },
  {
    slug: "optimize",
    name: "Optimize",
    summary: "Improve continuously — SEO, performance, analytics, cost, and user experience.",
    icon: "trending-up",
    timeline: "Ongoing",
    capabilities: ["SEO", "Performance", "Analytics", "Cost", "UX"],
  },
  {
    slug: "automate",
    name: "Automate",
    summary: "Scale intelligently with AI agents, workflows, and business operations automation.",
    icon: "zap",
    timeline: "Ongoing",
    capabilities: ["AI Agents", "Workflows", "Marketing", "Reporting", "Operations"],
  },
];

const DVN_PILLARS = [
  {
    letter: "D",
    name: "Digital",
    tagline: "What you create.",
    summary: "The digital representation of your business — everything that creates, communicates, stores, or transforms information.",
    icon: "gem",
    groups: [
      { label: "Brand", items: ["Brand Identity", "Design Systems", "UI/UX", "Motion Graphics"] },
      { label: "Marketing", items: ["Websites", "SEO", "CRM", "Marketing Automation", "Analytics"] },
      { label: "Software", items: ["Web Apps", "Mobile Apps", "SaaS", "APIs", "Internal Tools"] },
      { label: "Data & AI", items: ["Databases", "Business Intelligence", "AI Agents", "RAG Systems", "Workflow Automation"] },
    ],
  },
  {
    letter: "V",
    name: "Virtual",
    tagline: "Where it operates.",
    summary: "The environments where digital systems live — scalable, repeatable, resilient, and automated through abstraction.",
    icon: "cloud",
    groups: [
      { label: "Cloud", items: ["AWS", "Azure", "GCP", "OCI"] },
      { label: "Virtualization", items: ["VMware", "Hyper-V", "Proxmox", "Containers"] },
      { label: "Networking", items: ["VPC", "VPN", "SD-WAN", "Zero Trust", "Service Mesh"] },
      { label: "DevOps", items: ["Git", "CI/CD", "Terraform", "Ansible", "GitHub Actions"] },
    ],
  },
  {
    letter: "N",
    name: "Network",
    tagline: "How everything connects.",
    summary: "Everything valuable moves through networks — of systems, trust, people, knowledge, and opportunity.",
    icon: "network",
    groups: [
      { label: "Security Networks", items: ["Identity", "Authentication", "PKI", "Zero Trust", "PAM"] },
      { label: "Business Networks", items: ["Customers", "Vendors", "Partners", "Supply Chains"] },
      { label: "Information Networks", items: ["Wikis", "Knowledge Graphs", "RAG", "Documentation"] },
      { label: "AI Networks", items: ["Multi-Agent Systems", "MCP Servers", "APIs", "Event Buses"] },
    ],
  },
];

const SERVICES = LIFECYCLE_PHASES;

const PACKAGES = [
  { slug: "starter", name: "Starter", tagline: "Infrastructure Snapshot", priceRange: "$1,500 – $2,500", billingNote: "one-time", ctaLabel: "Get the Snapshot", featured: false },
  { slug: "professional", name: "Professional", tagline: "Lifecycle Phase Engagement", priceRange: "$8,000 – $25,000", billingNote: "per phase", ctaLabel: "Book a Discovery Call", featured: true },
  { slug: "premium", name: "Premium", tagline: "CI/CD Retainer Partner", priceRange: "$6,000 – $12,000", billingNote: "per month, retainer", ctaLabel: "Talk to Us", featured: false },
  { slug: "enterprise", name: "Enterprise", tagline: "Full-Stack DVN Program", priceRange: "Custom", billingNote: "scoped by engagement", ctaLabel: "Request a Proposal", featured: false },
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

function isProductsSection(page) {
  return page === "products.html"
    || page === "secure-knowledge-fabric.html"
    || page === "security-transformation-studio.html"
    || page === "digital-twin-simops.html";
}

function navItemActive(href, page, productsActive) {
  if (!href) return false;
  const base = href.split("#")[0];
  if (base === page) return true;
  if (productsActive && base === "products.html") return true;
  return false;
}

function renderNavDropdown(children, page, productsActive, depth = 0) {
  return children.map((child) => {
    if (child.children) {
      return `<div class="nav-dropdown-group${depth ? " nested" : ""}">
        <span class="nav-dropdown-label">${child.label}</span>
        ${child.children.map((sub) =>
          `<a href="${sub.href}" class="${navItemActive(sub.href, page, productsActive) ? "active" : ""}">${sub.label}</a>`
        ).join("")}
      </div>`;
    }
    return `<a href="${child.href}" class="${navItemActive(child.href, page, productsActive) ? "active" : ""}">${child.label}</a>`;
  }).join("");
}

function renderMobileNavItems(items, page, productsActive) {
  return items.map((item) => {
    if (item.children) {
      return `<div class="mobile-nav-group">
        <button class="mobile-nav-group-toggle" type="button" aria-expanded="false">${item.label}${icon("chevron-down", 16)}</button>
        <div class="mobile-nav-group-panel">
          ${item.children.map((child) => {
            if (child.children) {
              return `<div class="mobile-nav-subgroup">
                <span class="mobile-nav-subgroup-label">${child.label}</span>
                ${child.children.map((sub) =>
                  `<a href="${sub.href}">${sub.label}</a>`
                ).join("")}
              </div>`;
            }
            return `<a href="${child.href}">${child.label}</a>`;
          }).join("")}
        </div>
      </div>`;
    }
    return `<a href="${item.href}">${item.label}</a>`;
  }).join("");
}

function bindMobileNavGroups(root) {
  root?.querySelectorAll(".mobile-nav-group-toggle").forEach((btn) => {
    btn.addEventListener("click", () => {
      const group = btn.closest(".mobile-nav-group");
      const open = group?.classList.toggle("open");
      btn.setAttribute("aria-expanded", open ? "true" : "false");
    });
  });
}

function renderHeader() {
  const el = document.getElementById("site-header");
  if (!el) return;
  const page = currentPage();
  const productsActive = isProductsSection(page);
  el.innerHTML = `
    <div class="header-main">
      <div class="container header-inner">
        <a href="index.html" class="logo-link">
          <img src="assets/dvn-logo.png" alt="DVN Synthesis logo" width="40" height="40">
          <span class="logo-text">DVN <span class="logo-muted">Synthesis</span></span>
        </a>
        <nav class="nav-desktop" aria-label="Main">
          ${MAIN_NAV.map((item) => item.children ? `
            <div class="nav-item has-dropdown">
              <button class="nav-trigger" type="button" aria-expanded="false">${item.label}${icon("chevron-down", 14)}</button>
              <div class="nav-dropdown">${renderNavDropdown(item.children, page, productsActive)}</div>
            </div>` : `
            <div class="nav-item">
              <a href="${item.href}" class="nav-trigger nav-link${navItemActive(item.href, page, productsActive) ? " active" : ""}">${item.label}</a>
            </div>`).join("")}
        </nav>
        <div class="header-actions">
          <button class="header-icon-btn" type="button" aria-label="Search" onclick="location.href='careers.html#open-roles'">${icon("search", 18)}</button>
          <span class="header-lang">${icon("globe", 16)} EN</span>
          <a href="book.html" class="btn btn-header-cta">Contact Us</a>
        </div>
        <button class="menu-toggle" id="menu-toggle" aria-label="Open menu" aria-expanded="false" aria-controls="mobile-nav">${icon("menu", 22)}</button>
      </div>
    </div>`;

  el.querySelectorAll(".nav-item.has-dropdown").forEach((item) => {
    item.addEventListener("click", (e) => e.stopPropagation());
    const trigger = item.querySelector(".nav-trigger");
    trigger?.addEventListener("click", (e) => {
      e.stopPropagation();
      const open = item.classList.toggle("open");
      trigger.setAttribute("aria-expanded", open ? "true" : "false");
      el.querySelectorAll(".nav-item.has-dropdown").forEach((other) => {
        if (other !== item) {
          other.classList.remove("open");
          other.querySelector(".nav-trigger")?.setAttribute("aria-expanded", "false");
        }
      });
    });
  });

  document.addEventListener("click", () => {
    el.querySelectorAll(".nav-item.has-dropdown").forEach((item) => {
      item.classList.remove("open");
      item.querySelector(".nav-trigger")?.setAttribute("aria-expanded", "false");
    });
  });

  let mobileNav = document.getElementById("mobile-nav");
  if (!mobileNav) {
    mobileNav = document.createElement("div");
    mobileNav.id = "mobile-nav";
    document.body.appendChild(mobileNav);
  }
  mobileNav.className = "mobile-nav";
  mobileNav.classList.remove("open");

  mobileNav.innerHTML = `
    <div class="mobile-nav-panel">
      <div class="mobile-nav-top">
        <a href="index.html" class="logo-link">
          <img src="assets/dvn-logo.png" alt="" width="28" height="28">
          <span class="logo-text">DVN Synthesis</span>
        </a>
        <button class="mobile-nav-close" id="menu-close" aria-label="Close menu">${icon("close", 22)}</button>
      </div>
      <nav class="mobile-nav-links">${renderMobileNavItems(MAIN_NAV, page, productsActive)}</nav>
      <div class="mobile-nav-actions">
        <a href="careers.html" class="btn btn-outline btn-block">Search Careers</a>
        <a href="book.html" class="btn btn-primary btn-block">Contact Us</a>
      </div>
    </div>`;

  bindMobileNavGroups(mobileNav);

  document.getElementById("menu-toggle")?.addEventListener("click", openMobileNav);
  document.getElementById("menu-close")?.addEventListener("click", closeMobileNav);
  mobileNav.addEventListener("click", (e) => {
    if (e.target === mobileNav) closeMobileNav();
  });
  mobileNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMobileNav);
  });
}

function openMobileNav() {
  const mobileNav = document.getElementById("mobile-nav");
  const toggle = document.getElementById("menu-toggle");
  mobileNav?.classList.add("open");
  document.body.classList.add("mobile-menu-open");
  toggle?.setAttribute("aria-expanded", "true");
}

function closeMobileNav() {
  const mobileNav = document.getElementById("mobile-nav");
  const toggle = document.getElementById("menu-toggle");
  mobileNav?.classList.remove("open");
  document.body.classList.remove("mobile-menu-open");
  toggle?.setAttribute("aria-expanded", "false");
}

function renderFooter() {
  const el = document.getElementById("site-footer");
  if (!el) return;
  el.innerHTML = `
    <div class="footer-main">
      <div class="container footer-main-grid">
        <div class="footer-brand-block">
          <a href="index.html" class="logo-link footer-logo">
            <img src="assets/dvn-logo.png" alt="" width="36" height="36">
            <span class="logo-text">${SITE.name}</span>
          </a>
          <p class="footer-tagline">${SITE.motto}</p>
          <p class="footer-lifecycle">${SITE.lifecycle}</p>
          <div class="footer-contact">
            <p>${SITE.address}</p>
            <p><a href="mailto:${SITE.email}">${SITE.email}</a></p>
          </div>
        </div>
        <div class="footer-links-grid">
          <div class="footer-col">
            <h4>What We Do</h4>
            <ul>
              <li><a href="services.html">Solutions</a></li>
              <li><a href="services.html#deploy">Cloud & IT Infrastructure</a></li>
              <li><a href="services.html#secure">Cyber Security</a></li>
              <li><a href="services.html#optimize">Data Science & Analytics</a></li>
              <li><a href="services.html#build">Software Engineering</a></li>
              <li><a href="products.html">Products</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>Who We Are</h4>
            <ul>
              <li><a href="about.html">About Us</a></li>
              <li><a href="careers.html">Working at DVN</a></li>
              <li><a href="book.html">Contact</a></li>
              <li><a href="pricing.html">Pricing</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>Who We Serve</h4>
            <ul>
              <li><a href="projects.html">Customers</a></li>
              <li><a href="projects.html">Case Studies</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>Careers</h4>
            <ul>
              <li><a href="careers.html">Career Opportunities</a></li>
              <li><a href="careers.html#internships">Internships</a></li>
              <li><a href="intern-apply.html">Apply</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-legal">
      <div class="container footer-legal-inner">
        <p>&copy; ${new Date().getFullYear()} ${SITE.name}. All rights reserved.</p>
        <div class="footer-legal-links">
          <a href="about.html">About</a>
          <a href="book.html">Contact</a>
          <a href="careers.html">Careers</a>
        </div>
      </div>
    </div>`;
}

function initHomepage() {
  const motto = document.getElementById("lifecycle-motto");
  if (motto) motto.textContent = SITE.lifecycle;

  const serve = document.getElementById("who-we-serve");
  if (serve) {
    serve.innerHTML = WHO_WE_SERVE.map((item) => `
      <article class="serve-item">
        <span class="serve-num">${item.num}.</span>
        <div>
          <h3>${item.title}</h3>
          <p>${item.desc}</p>
        </div>
      </article>`).join("");
  }

  const comps = document.getElementById("core-competencies-grid");
  if (comps) {
    comps.innerHTML = CORE_COMPETENCIES.map((c) => `
      <a href="${c.href}" class="comp-card">
        <div class="comp-card-media ${c.imageClass}">${icon(c.icon, 40)}</div>
        <div class="comp-card-body">
          <h3>${c.title}</h3>
          <p>${c.summary}</p>
          <span class="comp-card-link">Learn More ${icon("arrow-right", 16)}</span>
        </div>
      </a>`).join("");
  }
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

function initInternForm() {
  const form = document.getElementById("intern-form");
  if (!form) return;

  const params = new URLSearchParams(window.location.search);
  const role = params.get("role");
  const roleSelect = document.getElementById("role");
  if (role && roleSelect) {
    const match = [...roleSelect.options].find((o) => o.value === role || o.text === role);
    if (match) roleSelect.value = match.value;
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const fd = new FormData(form);
    const lines = [];
    fd.forEach((v, k) => lines.push(`${k}: ${v}`));
    const roleLabel = fd.get("role") || "Internship";
    const subject = encodeURIComponent(`Internship application: ${roleLabel}`);
    const body = encodeURIComponent(lines.join("\n"));
    window.location.href = `mailto:${SITE.email}?subject=${subject}&body=${body}`;
    form.innerHTML = `
      <div style="text-align:center;padding:2rem 0">
        <p style="font-size:1.25rem;font-weight:600;margin-bottom:0.5rem">Application ready to send!</p>
        <p style="color:var(--muted-foreground)">Your email client should open with your details. We'll review your application and respond within one week.</p>
        <a href="careers.html#internships" class="btn btn-outline" style="margin-top:1.5rem">Back to Careers</a>
      </div>`;
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initIcons();
  renderHeader();
  renderFooter();
  initHomepage();
  initScorecard();
  initBookingForm();
  initInternForm();
});
