/* =====================================================
   EDIT YOUR CONTENT HERE. You rarely need to touch the code below.
   To add a project / job / certificate: copy one { ... } block, paste it, edit it.
   Use "#" for links you don't have yet.
   ===================================================== */

const EXPERIENCE = [ // TODO: replace with your real experience
  { company: "CD Projekt Red", role: "QA Engineer", date: "May 25 - Present",
    points: ["Describe what you tested.", "Describe a tool or process you used.", "Describe a result you achieved."] },
  { company: "Paradox Interactive", role: "QA Tester", date: "2024 - 2025", points: ["Describe your work here."] },
  { company: "FromSoftware Inc.", role: "QA Tester", date: "2023 - 2024", points: ["Describe your work here."] },
  { company: "Bandai Namco", role: "QA Intern", date: "2023", points: ["Describe your work here."] },
];

const PROJECTS = [ // 3 cards. Add or remove blocks freely
  { title: "IsThereAnyDeals",
    description: "Manual and automated testing of IsThereAnyDeals: search, filters, price tracking and account flows.", // TODO
    tools: ["Playwright", "Postman"],
    links: [
      { label: "Test Case", url: "#" },            // TODO Google Sheets link (view-only)
      { label: "Automation (Github)", url: "#" },  // TODO repo link
      { label: "Bug Reports", url: "#" },
      // { label: "Test Summary", url: "#" },      // remove the // to add a 4th button
    ] },
  { title: "Project Two", description: "Short description of what you tested.", tools: ["Tool A", "Tool B"],
    links: [{ label: "Test Case", url: "#" }, { label: "Bug Reports", url: "#" }] },
  { title: "Project Three", description: "Short description of what you tested.", tools: ["Tool A", "Tool B"],
    links: [{ label: "Test Case", url: "#" }, { label: "Bug Reports", url: "#" }] },
];

const CERTS = [ // url = your "Show credential" link
  { name: "ISTQB Foundation Level", issued: "Apr 2026", url: "#",
    description: "Short description of what this certificate covers.", tags: ["Testing", "STLC", "Agile"] },
  { name: "Certificate Two", issued: "Apr 2026", url: "#",
    description: "Short description of what this certificate covers.", tags: ["Tag", "Tag"] },
  { name: "Certificate Three", issued: "Apr 2026", url: "#",
    description: "Short description of what this certificate covers.", tags: ["Tag", "Tag"] },
];

/* ================= CODE (no need to edit) ================= */
const $ = (id) => document.getElementById(id);
const ext = 'target="_blank" rel="noopener noreferrer"'; // opens links in a new tab

// Experience tabs
$("jobTabs").innerHTML = EXPERIENCE.map((j, i) =>
  `<button role="tab" aria-selected="${i === 0}" data-i="${i}">${j.company}</button>`).join("");
function showJob(i) {
  const j = EXPERIENCE[i];
  $("jobPanel").innerHTML = `<h4>${j.role} @ ${j.company}</h4><p class="job-date">${j.date}</p><ul>${j.points.map(p => `<li>${p}</li>`).join("")}</ul>`;
  document.querySelectorAll("#jobTabs button").forEach((b, n) => b.setAttribute("aria-selected", n === i));
}
$("jobTabs").addEventListener("click", (e) => { if (e.target.dataset.i) showJob(+e.target.dataset.i); });
showJob(0);

// Project cards
$("projectList").innerHTML = PROJECTS.map(p => `
  <article class="card">
    <h4>${p.title}</h4><p>${p.description}</p>
    <ul class="tags">${p.tools.map(t => `<li>${t}</li>`).join("")}</ul>
    <div class="links">${p.links.map(l => `<a class="btn-card" href="${l.url}" ${ext}>${l.label}</a>`).join("")}</div>
  </article>`).join("");

// Certifications (the arrow icon = show credential)
const ICON = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><path d="M15 3h6v6"/><path d="M10 14 21 3"/></svg>';
$("certList").innerHTML = CERTS.map(c => `
  <article class="cert">
    <div class="cert-head"><h4>${c.name}</h4>
      <a class="cert-link" href="${c.url}" ${ext} aria-label="Show credential: ${c.name}" title="Show credential">${ICON}</a></div>
    <span class="cert-issued">Issued ${c.issued}</span>
    <p>${c.description}</p>
    <ul class="cert-tags">${c.tags.map(t => `<li>${t}</li>`).join("")}</ul>
  </article>`).join("");

// Navbar: shadow on scroll + highlight current section
const nav = document.querySelector(".nav");
addEventListener("scroll", () => nav.classList.toggle("scrolled", scrollY > 10), { passive: true });
const links = document.querySelectorAll('.nav nav a[href^="#"]:not(.btn-nav)');
const spy = new IntersectionObserver((entries) => entries.forEach(en => {
  if (en.isIntersecting) links.forEach(a => a.classList.toggle("active", a.getAttribute("href") === "#" + en.target.id));
}), { rootMargin: "-40% 0px -55% 0px" });
["about", "experience", "projects", "contact"].forEach(id => spy.observe($(id)));
