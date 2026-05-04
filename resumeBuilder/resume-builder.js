// =========================
// SAFE INIT (VERY IMPORTANT)
// =========================
document.addEventListener("DOMContentLoaded", function () {

  // =========================
  // DRAWER SYSTEM (FIXED)
  // =========================
  const toggle = document.getElementById("drawerToggle");
  const drawer = document.getElementById("drawerMenu");
  const overlay = document.getElementById("drawerOverlay");

  if (toggle && drawer && overlay) {

    toggle.addEventListener("click", () => {

      const isOpen = drawer.classList.contains("open");

      if (isOpen) {
        drawer.classList.remove("open");
        overlay.classList.remove("show");
      } else {
        drawer.classList.add("open");
        overlay.classList.add("show");
      }

    });

    // overlay click → close
    overlay.addEventListener("click", () => {
      drawer.classList.remove("open");
      overlay.classList.remove("show");
    });

    // ESC key → close
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        drawer.classList.remove("open");
        overlay.classList.remove("show");
      }
    });
  }

});
// =========================
// OTHER QUALIFICATION SYSTEM
// =========================

// Add new qualification row
window.addQualification = function () {
  const container = document.getElementById("otherQualificationContainer");
  if (!container) return;

  const newRow = document.createElement("div");
  newRow.className = "other-qualification-row";

  newRow.innerHTML = `
    <input 
      type="text" 
      class="otherQualificationInput" 
      placeholder="Add another qualification"
    >

    <div class="oq-actions">
      <button type="button" class="add-more-btn" onclick="addQualification()">
        + Add More
      </button>

      <button type="button" class="remove-btn" onclick="removeQualification(this)">
        Remove
      </button>
    </div>
  `;

  container.appendChild(newRow);
  updateOtherQualificationPreview();
};


// Remove qualification row
window.removeQualification = function (btn) {
  const container = document.getElementById("otherQualificationContainer");
  if (!container || !btn) return;

  const row = btn.closest(".other-qualification-row");
  if (!row) return;

  if (container.children.length > 1) {
    row.remove();
  } else {
    const input = row.querySelector(".otherQualificationInput");
    if (input) input.value = "";
  }

  updateOtherQualificationPreview();
};


// Update other qualification preview
function updateOtherQualificationPreview() {
  const previewOtherQualification = document.getElementById("previewOtherQualification");
  if (!previewOtherQualification) return;

  const inputs = document.querySelectorAll(".otherQualificationInput");
  const values = [];

  inputs.forEach(input => {
    const val = input.value.trim();
    if (val !== "") values.push(val);
  });

  if (values.length === 0) {
    previewOtherQualification.textContent = "Your other qualification will appear here.";
    return;
  }

  previewOtherQualification.innerHTML = values
    .map(item => `<div>${item}</div>`)
    .join("");
}


// Live update for qualification inputs
document.addEventListener("input", function (e) {
  if (e.target.classList.contains("otherQualificationInput")) {
    updateOtherQualificationPreview();
  }
});


// =========================
// DECLARATION EDIT SYSTEM
// =========================

const editDeclarationBtn = document.getElementById("editDeclarationBtn");
const declarationField = document.getElementById("declaration");
const previewDeclaration = document.getElementById("previewDeclaration");

if (editDeclarationBtn && declarationField) {
  editDeclarationBtn.addEventListener("click", () => {
    declarationField.removeAttribute("readonly");
    declarationField.focus();
  });
}

if (declarationField && previewDeclaration) {
  declarationField.addEventListener("input", () => {
    previewDeclaration.textContent =
      declarationField.value.trim() ||
      "I hereby declare that the above information given by me is true to the best of my knowledge.";
  });
}


// Run once on load
updateOtherQualificationPreview();
// =========================
// PERSONAL INFORMATION LIVE PREVIEW (SAFE)
// =========================

const fullNameInput = document.getElementById("fullName");
const fatherNameInput = document.getElementById("fatherName");
const dobInput = document.getElementById("dob");
const phoneInput = document.getElementById("phone");
const emailInput = document.getElementById("email");
const locationInput = document.getElementById("location");
const nationalityInput = document.getElementById("nationality");
const maritalStatusInput = document.getElementById("maritalStatus");
const genderInput = document.getElementById("gender");
const languagesInput = document.getElementById("languages");

// Preview fields
const previewFullName = document.getElementById("previewFullName");
const previewSignatureName = document.getElementById("previewSignatureName");
const previewFatherName = document.getElementById("previewFatherName");
const previewDob = document.getElementById("previewDob");
const previewPhone = document.getElementById("previewPhone");
const previewEmail = document.getElementById("previewEmail");
const previewLocation = document.getElementById("previewLocation");
const previewNationality = document.getElementById("previewNationality");
const previewMaritalStatus = document.getElementById("previewMaritalStatus");
const previewGender = document.getElementById("previewGender");
const previewLanguages = document.getElementById("previewLanguages");


function updatePersonalInfoPreview() {

  if (previewFullName && fullNameInput) {
    previewFullName.textContent = fullNameInput.value.trim() || "Your Name";
  }

  if (previewSignatureName && fullNameInput) {
    previewSignatureName.textContent = fullNameInput.value.trim() || "Your Name";
  }

  if (previewFatherName && fatherNameInput) {
    previewFatherName.textContent = fatherNameInput.value.trim() || "Father's Name";
  }

  if (previewDob && dobInput) {
    previewDob.textContent = dobInput.value || "Date of Birth";
  }

  if (previewPhone && phoneInput) {
    previewPhone.textContent = phoneInput.value.trim() || "+91 0000000000";
  }

  if (previewEmail && emailInput) {
    previewEmail.textContent = emailInput.value.trim() || "your@email.com";
  }

  if (previewLocation && locationInput) {
    previewLocation.textContent = locationInput.value.trim() || "Your Address";
  }

  if (previewNationality && nationalityInput) {
    previewNationality.textContent = nationalityInput.value.trim() || "Indian";
  }

  if (previewMaritalStatus && maritalStatusInput) {
    previewMaritalStatus.textContent = maritalStatusInput.value || "Unmarried";
  }

  if (previewGender && genderInput) {
    previewGender.textContent = genderInput.value || "Gender";
  }

  if (previewLanguages && languagesInput) {
    previewLanguages.textContent = languagesInput.value.trim() || "Hindi, English";
  }
}


// Attach listeners safely
[
  fullNameInput,
  fatherNameInput,
  dobInput,
  phoneInput,
  emailInput,
  locationInput,
  nationalityInput,
  maritalStatusInput,
  genderInput,
  languagesInput
].forEach(input => {
  if (input) {
    input.addEventListener("input", updatePersonalInfoPreview);
    input.addEventListener("change", updatePersonalInfoPreview);
  }
});


// Run once on load
updatePersonalInfoPreview();


// =========================
// CAREER OBJECTIVE (SUMMARY)
// =========================

const summaryInput = document.getElementById("summary");
const previewSummary = document.getElementById("previewSummary");
const editSummaryBtn = document.getElementById("editSummaryBtn");


function updateSummaryPreview() {
  if (!previewSummary || !summaryInput) return;

  previewSummary.textContent =
    summaryInput.value.trim() ||
    "To begin my career in a dynamic organization that offers learning opportunities and professional growth.";
}


// live update
if (summaryInput) {
  summaryInput.addEventListener("input", updateSummaryPreview);
}


// edit toggle
if (editSummaryBtn && summaryInput) {
  editSummaryBtn.addEventListener("click", () => {

    if (summaryInput.hasAttribute("readonly")) {
      summaryInput.removeAttribute("readonly");
      summaryInput.focus();
      editSummaryBtn.textContent = "Lock";
    } else {
      summaryInput.setAttribute("readonly", true);
      editSummaryBtn.textContent = "Edit";
    }

  });
}


// run once
updateSummaryPreview();
// =========================
// SKILLS LIVE PREVIEW
// =========================

const skillsInput = document.getElementById("skills");
const previewSkills = document.getElementById("previewSkills");

function updateSkillsPreview() {

  if (!previewSkills) return;

  const value = skillsInput ? skillsInput.value.trim() : "";

  if (value === "") {
    previewSkills.innerHTML = `
      <li>Computer Knowledge</li>
      <li>MS Office</li>
    `;
    return;
  }

  const skillsArray = value
    .split(",")
    .map(s => s.trim())
    .filter(s => s !== "");

  previewSkills.innerHTML = skillsArray
    .map(skill => `<li>${skill}</li>`)
    .join("");
}

if (skillsInput) {
  skillsInput.addEventListener("input", updateSkillsPreview);
}

updateSkillsPreview();


// =========================
// WORK EXPERIENCE PREVIEW
// =========================

const expTitleInput = document.getElementById("experienceTitle");
const expCompanyInput = document.getElementById("experienceCompany");
const expDurationInput = document.getElementById("experienceDuration");
const expDescInput = document.getElementById("experienceDescription");

const previewExpTitle = document.getElementById("previewExperienceTitle");
const previewExpCompany = document.getElementById("previewExperienceCompany");
const previewExpDuration = document.getElementById("previewExperienceDuration");
const previewExpDesc = document.getElementById("previewExperienceDescription");

function updateExperiencePreview() {

  if (previewExpTitle && expTitleInput) {
    previewExpTitle.textContent = expTitleInput.value.trim() || "Job Role";
  }

  if (previewExpCompany && expCompanyInput) {
    previewExpCompany.textContent = expCompanyInput.value.trim() || "Company Name";
  }

  if (previewExpDuration && expDurationInput) {
    previewExpDuration.textContent = expDurationInput.value.trim() || "Duration";
  }

  if (previewExpDesc && expDescInput) {
    previewExpDesc.textContent =
      expDescInput.value.trim() ||
      "Your work experience description will appear here.";
  }
}

// listeners
[expTitleInput, expCompanyInput, expDurationInput, expDescInput]
.forEach(input => {
  if (input) input.addEventListener("input", updateExperiencePreview);
});

updateExperiencePreview();


// =========================
// EDUCATION PREVIEW
// =========================

const eduDegreeInput = document.getElementById("educationDegree");
const eduInstituteInput = document.getElementById("educationInstitute");
const eduYearInput = document.getElementById("educationYear");
const eduPercentageInput = document.getElementById("educationPercentage");

const previewEduDegree = document.getElementById("previewEducationDegree");
const previewEduInstitute = document.getElementById("previewEducationInstitute");
const previewEduYear = document.getElementById("previewEducationYear");
const previewEduPercentage = document.getElementById("previewEducationPercentage");

function updateEducationPreview() {

  if (previewEduDegree && eduDegreeInput) {
    previewEduDegree.textContent = eduDegreeInput.value.trim() || "Qualification";
  }

  if (previewEduInstitute && eduInstituteInput) {
    previewEduInstitute.textContent = eduInstituteInput.value.trim() || "Board / University";
  }

  if (previewEduYear && eduYearInput) {
    previewEduYear.textContent = eduYearInput.value.trim() || "Year";
  }

  if (previewEduPercentage && eduPercentageInput) {
    previewEduPercentage.textContent = eduPercentageInput.value.trim() || "Percentage";
  }
}

// listeners
[eduDegreeInput, eduInstituteInput, eduYearInput, eduPercentageInput]
.forEach(input => {
  if (input) input.addEventListener("input", updateEducationPreview);
});

updateEducationPreview();
// =========================
// DATE + PLACE LIVE PREVIEW
// =========================

const dateInput = document.getElementById("date");
const placeInput = document.getElementById("place");

const previewDate = document.getElementById("previewDate");
const previewPlace = document.getElementById("previewPlace");

// format dd/mm/yyyy
function formatDateInput(value) {
  let v = value.replace(/\D/g, "");

  if (v.length > 2 && v.length <= 4) {
    v = v.slice(0, 2) + "/" + v.slice(2);
  } else if (v.length > 4) {
    v = v.slice(0, 2) + "/" + v.slice(2, 4) + "/" + v.slice(4, 8);
  }

  return v;
}

function updateDatePlacePreview() {

  if (previewDate && dateInput) {
    previewDate.textContent = dateInput.value.trim() || "Date";
  }

  if (previewPlace && placeInput) {
    previewPlace.textContent = placeInput.value.trim() || "Your Place";
  }
}

// listeners
if (dateInput) {
  dateInput.addEventListener("input", (e) => {
    e.target.value = formatDateInput(e.target.value);
    updateDatePlacePreview();
  });
}

if (placeInput) {
  placeInput.addEventListener("input", updateDatePlacePreview);
}

updateDatePlacePreview();


// =========================
// EXTRA INFO SYSTEM
// =========================

const extraInfoContainer = document.getElementById("extraInfoContainer");
const addExtraInfoBtn = document.getElementById("addExtraInfoBtn");

function createExtraRow() {

  const row = document.createElement("div");
  row.className = "extra-info-row";

  row.innerHTML = `
    <input type="text" placeholder="Title (e.g. Hobby)">
    <input type="text" placeholder="Value (e.g. Reading)">
    <button type="button" class="remove-extra-btn">X</button>
  `;

  row.querySelector(".remove-extra-btn").addEventListener("click", () => {
    row.remove();
  });

  if (extraInfoContainer) {
    extraInfoContainer.appendChild(row);
  }
}

// add button
if (addExtraInfoBtn) {
  addExtraInfoBtn.addEventListener("click", createExtraRow);
}


// =========================
// CLEAR RESUME (RESET SYSTEM)
// =========================

const clearBtn = document.getElementById("clearResumeBtn");

if (clearBtn) {
  clearBtn.addEventListener("click", () => {

    // reset inputs
    document.querySelectorAll("input, textarea, select").forEach(el => {
      if (el.type === "checkbox" || el.type === "radio") {
        el.checked = false;
      } else {
        el.value = "";
      }
    });

    // restore defaults
    const summary = document.getElementById("summary");
    const declaration = document.getElementById("declaration");

    if (summary) {
      summary.value = "To begin my career in a dynamic organization that offers learning opportunities and professional growth. I aim to contribute positively while developing my skills.";
    }

    if (declaration) {
      declaration.value = "I hereby declare that the above information given by me is true to the best of my knowledge.";
    }

    // clear dynamic sections
    if (extraInfoContainer) extraInfoContainer.innerHTML = "";

    const oq = document.getElementById("otherQualificationContainer");
    if (oq) oq.innerHTML = "";

    // reset preview safely
    if (typeof updatePersonalInfoPreview === "function") updatePersonalInfoPreview();
    if (typeof updateSummaryPreview === "function") updateSummaryPreview();
    if (typeof updateSkillsPreview === "function") updateSkillsPreview();
    if (typeof updateExperiencePreview === "function") updateExperiencePreview();
    if (typeof updateEducationPreview === "function") updateEducationPreview();
    if (typeof updateOtherQualificationPreview === "function") updateOtherQualificationPreview();

    // reset date/place preview
    if (previewDate) previewDate.textContent = "Date";
    if (previewPlace) previewPlace.textContent = "Your Place";

  });
}
// =========================
// APPLY SELECTED TEMPLATE
// =========================

document.addEventListener("DOMContentLoaded", () => {

  const resume = document.getElementById("resumePreview");

if (resume) {
  // sirf template classes remove karo
  for (let i = 1; i <= 25; i++) {
    resume.classList.remove(`template${i}`);
  }
}
  const savedTemplate = localStorage.getItem("selectedTemplate");

  if (resume && savedTemplate) {
resume.className = "resume resume-preview";
resume.classList.add(savedTemplate);

console.log("Applied Template:", savedTemplate);
console.log("Resume Classes:", resume.className);
  }

});
// =========================
// DOWNLOAD PDF - SINGLE PAGE A4 FIT
// =========================

const downloadBtn = document.getElementById("downloadPdfBtn");

if (downloadBtn) {
  downloadBtn.onclick = async function () {
    const resume = document.getElementById("resumePreview");
    if (!resume) return;

    try {
      const canvas = await html2canvas(resume, {
        scale: 2,
        useCORS: true,
        backgroundColor: "#ffffff"
      });

      const imgData = canvas.toDataURL("image/png");
      const { jsPDF } = window.jspdf;

      const pdf = new jsPDF("p", "mm", "a4");

      const pageWidth = 210;
      const pageHeight = 297;

      const margin = 5;
      const usableWidth = pageWidth - margin * 2;
      const usableHeight = pageHeight - margin * 2;

      const imgHeight = (canvas.height * usableWidth) / canvas.width;

      const finalHeight = Math.min(imgHeight, usableHeight);

      pdf.addImage(
        imgData,
        "PNG",
        margin,
        margin,
        usableWidth,
        finalHeight
      );

      pdf.save("My_Resume.pdf");

    } catch (error) {
      console.error("PDF Error:", error);
      alert("PDF download failed. Please try again.");
    }
  };
}
