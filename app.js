function goToProgram(programId) {
  window.location.href = `program.html?id=${encodeURIComponent(programId)}`;
}

function goToLearning(categoryId) {
  window.location.href = `learning.html?id=${encodeURIComponent(categoryId)}`;
}

function getQueryParam(name) {
  return new URLSearchParams(window.location.search).get(name);
}

function renderProgramPage() {
  const root = document.getElementById("detail-root");
  if (!root) return;

  const id = getQueryParam("id");
  const program = PROGRAMS[id];

  if (!program) {
    root.innerHTML = `
      <div class="not-found">
        <h2>Program Not Found</h2>
        <p>The program you requested does not exist.</p>
        <a class="btn" href="index.html#programs">Back to Programs</a>
      </div>
    `;
    document.title = "Program Not Found | DEV4ED";
    return;
  }

  document.title = `${program.title} | DEV4ED`;

  const subprogramsHtml = program.subprograms
    .map(
      (item) => `
        <article class="subprogram-card">
          <h3>${item.name}</h3>
          <p>${item.description}</p>
        </article>
      `
    )
    .join("");

  root.innerHTML = `
    <div class="breadcrumb">
      <a href="index.html">Home</a> / <a href="index.html#programs">Programs</a> / ${program.title}
    </div>
    <section class="hero compact">
      <div class="container">
        <div class="detail-hero-icon">${program.icon}</div>
        <h1>${program.title}</h1>
        <p>${program.description}</p>
      </div>
    </section>
    <section>
      <div class="container">
        <h2 class="section-title">Program Offerings</h2>
        <p class="section-intro">${program.summary}</p>
        <div class="card-grid">${subprogramsHtml}</div>
        <a class="btn" href="index.html#programs">← Back to All Programs</a>
      </div>
    </section>
  `;
}

function renderLearningPage() {
  const root = document.getElementById("detail-root");
  if (!root) return;

  const id = getQueryParam("id");
  const category = LEARNING_CATEGORIES[id];

  if (!category) {
    root.innerHTML = `
      <div class="not-found">
        <h2>Learning Category Not Found</h2>
        <p>The learning materials page you requested does not exist.</p>
        <a class="btn" href="index.html#materials">Back to Learning Materials</a>
      </div>
    `;
    document.title = "Learning Materials Not Found | DEV4ED";
    return;
  }

  document.title = `${category.title} | DEV4ED Learning`;

  const materialsHtml = category.materials
    .map(
      (item) => `
        <article class="material-item">
          <div class="icon">${category.icon}</div>
          <div>
            <h3>${item.name}</h3>
            <p>${item.description}</p>
          </div>
        </article>
      `
    )
    .join("");

  root.innerHTML = `
    <div class="breadcrumb">
      <a href="index.html">Home</a> / <a href="index.html#materials">Learning Materials</a> / ${category.title}
    </div>
    <section class="hero compact">
      <div class="container">
        <div class="detail-hero-icon">${category.icon}</div>
        <h1>${category.title}</h1>
        <p>${category.description}</p>
      </div>
    </section>
    <section>
      <div class="container">
        <h2 class="section-title">Available Materials</h2>
        <p class="section-intro">${category.summary}</p>
        <div class="card-grid">${materialsHtml}</div>
        <a class="btn" href="index.html#materials">← Back to Learning Materials</a>
      </div>
    </section>
  `;
}

function initHomePage() {
  document.querySelectorAll("[data-program]").forEach((card) => {
    const programId = card.dataset.program;
    card.setAttribute("role", "button");
    card.setAttribute("tabindex", "0");
    card.addEventListener("click", () => goToProgram(programId));
    card.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        goToProgram(programId);
      }
    });
  });

  document.querySelectorAll("[data-learning]").forEach((card) => {
    const categoryId = card.dataset.learning;
    card.setAttribute("role", "button");
    card.setAttribute("tabindex", "0");
    card.addEventListener("click", () => goToLearning(categoryId));
    card.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        goToLearning(categoryId);
      }
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const page = document.body.dataset.page;

  if (page === "program") renderProgramPage();
  else if (page === "learning") renderLearningPage();
  else if (page === "home") initHomePage();
});
