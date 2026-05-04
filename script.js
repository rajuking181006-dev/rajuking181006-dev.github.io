// =========================
// EXPERIENCE + PROJECT SYSTEM
// =========================

const experienceContainer = document.getElementById("experienceContainer");
const projectContainer = document.getElementById("projectContainer");

const addExperienceBtn = document.getElementById("addExperienceBtn");
const addProjectBtn = document.getElementById("addProjectBtn");

const previewExperienceList = document.getElementById("previewExperienceList");
const previewProjectList = document.getElementById("previewProjectList");

// =========================
// ADD EXPERIENCE
// =========================
let expCount = 1;

addExperienceBtn.addEventListener("click", () => {
  expCount++;

  const card = document.createElement("div");
  card.className = "dynamic-card experience-card";
  card.setAttribute("data-experience-item", "");

  card.innerHTML = `
    <div class="dynamic-card-top">
      <h4>Experience ${expCount}</h4>
      <button type="button" class="remove-btn" data-remove-experience>Remove</button>
    </div>

    <div class="input-group">
      <label>Job Title</label>
      <input type="text" class="experience-title" />
    </div>

    <div class="input-group">
      <label>Company</label>
      <input type="text" class="experience-company" />
    </div>

    <div class="input-group">
      <label>Duration</label>
      <input type="text" class="experience-duration" />
    </div>

    <div class="input-group">
      <label>Description</label>
      <textarea class="experience-description"></textarea>
    </div>
  `;

  experienceContainer.appendChild(card);
  attachEvents();
});

// =========================
// ADD PROJECT
// =========================
let projCount = 1;

addProjectBtn.addEventListener("click", () => {
  projCount++;

  const card = document.createElement("div");
  card.className = "dynamic-card project-card";
  card.setAttribute("data-project-item", "");

  card.innerHTML = `
    <div class="dynamic-card-top">
      <h4>Project ${projCount}</h4>
      <button type="button" class="remove-btn" data-remove-project>Remove</button>
    </div>

    <div class="input-group">
      <label>Project Title</label>
      <input type="text" class="project-title" />
    </div>

    <div class="input-group">
      <label>Description</label>
      <textarea class="project-description"></textarea>
    </div>
  `;

  projectContainer.appendChild(card);
  attachEvents();
});

// =========================
// REMOVE HANDLING
// =========================
function attachEvents() {
  document.querySelectorAll("[data-remove-experience]").forEach(btn => {
    btn.onclick = () => {
      btn.closest(".dynamic-card").remove();
      updatePreview();
      saveData();
    };
  });

  document.querySelectorAll("[data-remove-project]").forEach(btn => {
    btn.onclick = () => {
      btn.closest(".dynamic-card").remove();
      updatePreview();
      saveData();
    };
  });

  // Input change listener
  document.querySelectorAll("input, textarea").forEach(input => {
    input.oninput = () => {
      updatePreview();
      saveData();
    };
  });
}

// =========================
// UPDATE PREVIEW
// =========================
function updatePreview() {
  // Experience
  previewExperienceList.innerHTML = "";

  document.querySelectorAll("[data-experience-item]").forEach(card => {
    const title = card.querySelector(".experience-title").value;
    const company = card.querySelector(".experience-company").value;
    const duration = card.querySelector(".experience-duration").value;
    const desc = card.querySelector(".experience-description").value;

    if (title || company || duration || desc) {
      previewExperienceList.innerHTML += `
        <div class="preview-item">
          <h4>${title}</h4>
          <p>${company}</p>
          <span>${duration}</span>
          <p>${desc}</p>
        </div>
      `;
    }
  });

  // Projects
  previewProjectList.innerHTML = "";

  document.querySelectorAll("[data-project-item]").forEach(card => {
    const title = card.querySelector(".project-title").value;
    const desc = card.querySelector(".project-description").value;

    if (title || desc) {
      previewProjectList.innerHTML += `
        <div class="preview-item">
          <h4>${title}</h4>
          <p>${desc}</p>
        </div>
      `;
    }
  });
}

// =========================
// SAVE DATA (localStorage)
// =========================
function saveData() {
  const experiences = [];
  document.querySelectorAll("[data-experience-item]").forEach(card => {
    experiences.push({
      title: card.querySelector(".experience-title").value,
      company: card.querySelector(".experience-company").value,
      duration: card.querySelector(".experience-duration").value,
      desc: card.querySelector(".experience-description").value
    });
  });

  const projects = [];
  document.querySelectorAll("[data-project-item]").forEach(card => {
    projects.push({
      title: card.querySelector(".project-title").value,
      desc: card.querySelector(".project-description").value
    });
  });

  localStorage.setItem("resume_experience", JSON.stringify(experiences));
  localStorage.setItem("resume_projects", JSON.stringify(projects));
}

// =========================
// LOAD DATA
// =========================
function loadData() {
  const expData = JSON.parse(localStorage.getItem("resume_experience")) || [];
  const projData = JSON.parse(localStorage.getItem("resume_projects")) || [];

  // Clear default
  experienceContainer.innerHTML = "";
  projectContainer.innerHTML = "";

  expCount = 0;
  projCount = 0;

  expData.forEach(data => {
    addExperienceBtn.click();
    const last = experienceContainer.lastElementChild;

    last.querySelector(".experience-title").value = data.title;
    last.querySelector(".experience-company").value = data.company;
    last.querySelector(".experience-duration").value = data.duration;
    last.querySelector(".experience-description").value = data.desc;
  });

  projData.forEach(data => {
    addProjectBtn.click();
    const last = projectContainer.lastElementChild;

    last.querySelector(".project-title").value = data.title;
    last.querySelector(".project-description").value = data.desc;
  });

  attachEvents();
  updatePreview();
}

// =========================
// INIT
// =========================
document.addEventListener("DOMContentLoaded", () => {
  attachEvents();
  loadData();
});