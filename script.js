/* =====================================================
   EDIT YOUR CONTENT HERE. You rarely need to touch the code below.
   To add a project / job / certificate: copy one { ... } block, paste it, edit it.
   Use "#" for links you don't have yet.
   ===================================================== */

const EXPERIENCE = [ // TODO: replace with your real experience
  { company: "CD Projekt Red", role: "QA Engineer", date: "May 2025 - Present",
    points: ["Describe what you tested.", "Describe a tool or process you used.", "Describe a result you achieved."] },
  { company: "Paradox Interactive", role: "QA Tester", date: "2024 - 2025",
    points: ["Describe your work here."] },
  { company: "FromSoftware Inc.", role: "QA Tester", date: "2023 - 2024",
    points: ["Describe your work here."] },
  { company: "Bandai Namco", role: "QA Intern", date: "2023",
    points: ["Describe your work here."] },
];

const PROJECTS = [
  { title: "IsThereAnyDeals Web Testing",
    description: "Manual and automated testing of IsThereAnyDeals: search, filters, price tracking and account flows.", // TODO
    tools: ["Playwright", "Postman", "Google Sheets", "GitHub"],
    links: [
      { label: "Test Cases (Sheet)", url: "#" },   // TODO Google Sheets link (view-only)
      { label: "Automation (GitHub)", url: "#" },  // TODO repo link
      { label: "Bug Reports", url: "#" },
      { label: "Test Summary (PDF)", url: "#", primary: true }, // primary = solid button
    ] },
  // Copy the block above to add another project
];

const CERTS = [ // TODO: image is optional, e.g. "assets/istqb.png"
  { name: "Certificate name", issuer: "Issuer, year", url: "#", image: "" },
  { name: "Certificate name", issuer: "Issuer, year", url: "#", image: "" },
  { name: "Certificate name", issuer: "Issuer, year", url: "#", image: "" },
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
    <div class="links">${p.links.map(l => `<a class="btn${l.primary ? " btn-solid" : ""}" href="${l.url}" ${ext}>${l.label}</a>`).join("")}</div>
  </article>`).join("");

// Certifications
$("certList").innerHTML = CERTS.map(c => `
  <a class="cert" href="${c.url}" ${ext}>${c.image ? `<img src="${c.image}" alt="">` : ""}<strong>${c.name}</strong><span>${c.issuer}</span></a>`).join("");

// Navbar: shadow on scroll + highlight current section
const nav = document.querySelector(".nav");
addEventListener("scroll", () => nav.classList.toggle("scrolled", scrollY > 10), { passive: true });
const links = document.querySelectorAll('.nav nav a[href^="#"]:not(.btn)');
const spy = new IntersectionObserver((entries) => entries.forEach(en => {
  if (en.isIntersecting) links.forEach(a => a.classList.toggle("active", a.getAttribute("href") === "#" + en.target.id));
}), { rootMargin: "-40% 0px -55% 0px" });
["about", "experience", "projects", "contact"].forEach(id => spy.observe($(id)));
