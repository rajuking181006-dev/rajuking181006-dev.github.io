// =========================
// TEMPLATE LIST (ALL FREE)
// =========================
const templates = [
  { id: 1, name: "Classic Simple", style: "classic" },
  { id: 2, name: "Modern Clean", style: "modern" },
  { id: 3, name: "Minimal Black", style: "black" },
  { id: 4, name: "Fresh Blue", style: "blue" },
  { id: 5, name: "Student Resume", style: "student" },
  { id: 6, name: "Fresher Compact", style: "compact" },
  { id: 7, name: "Elegant One Column", style: "elegant" },

  { id: 8, name: "Professional Sidebar", style: "sidebar" },
  { id: 9, name: "Corporate Gray", style: "gray" },
  { id: 10, name: "Creative Split", style: "split" },
  { id: 11, name: "Executive Clean", style: "executive" },
  { id: 12, name: "Accent Color Resume", style: "accent" },
  { id: 13, name: "ATS Friendly Pro", style: "ats" },
  { id: 14, name: "Two Column Pro", style: "two" },
  { id: 15, name: "Bold Modern", style: "bold" },

  { id: 16, name: "Luxury Gold", style: "gold" },
  { id: 17, name: "Dark Professional", style: "dark" },
  { id: 18, name: "International CV", style: "international" },
  { id: 19, name: "Designer Resume", style: "designer" },
  { id: 20, name: "Startup Style", style: "startup" },
  { id: 21, name: "Premium Mono", style: "mono" },
  { id: 22, name: "Recruiter Focused", style: "recruiter" },
  { id: 23, name: "Premium Blue Sidebar", style: "blueSide" },
  { id: 24, name: "Elite Executive", style: "elite" },
  { id: 25, name: "AI Smart Resume", style: "ai" }
];


// =========================
// CREATE TEMPLATE CARD
// =========================
function createTemplateCard(template) {

  const card = document.createElement("div");
  card.className = `template-card ${template.style}`;

  card.innerHTML = `
    <div class="template-preview">
      <div class="mini-head"></div>
      <div class="mini-body">
        <span></span><span></span><span></span>
      </div>
    </div>

    <h3>${template.id}. ${template.name}</h3>
    <p>FREE TEMPLATE</p>

    <button class="use-btn">Use Template</button>
  `;

  // ✅ Click event (simple flow)
  card.addEventListener("click", () => {

    localStorage.setItem("selectedTemplate", `template${template.id}`);

    window.location.href = "../resumeBuilder/resume-builder.html";

  });

  return card;
}


// =========================
// RENDER TEMPLATES
// =========================
function renderTemplates() {

  const freeBox = document.getElementById("freeTemplates");

  if (!freeBox) return;

  freeBox.innerHTML = "";

  templates.forEach(template => {
    freeBox.appendChild(createTemplateCard(template));
  });
}


// =========================
// START
// =========================
document.addEventListener("DOMContentLoaded", () => {
  renderTemplates();
});