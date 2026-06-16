function goToProgram(programId) {
  window.location.href = `program.html?id=${encodeURIComponent(programId)}`;
}

function goToLearning(categoryId) {
  window.location.href = `learning.html?id=${encodeURIComponent(categoryId)}`;
}

function getQueryParam(name) {
  return new URLSearchParams(window.location.search).get(name);
}

function buildImageTag(src, alt, className) {
  return `<img src="${src}" alt="${alt}" class="${className}" loading="lazy">`;
}

function buildDetailHero(item) {
  return `
    <section class="detail-hero">
      <img src="${item.image}" alt="${item.title}" class="detail-hero-bg" loading="lazy">
      <div class="detail-hero-content container">
        <div class="detail-hero-icon">${item.icon}</div>
        <h1>${item.title}</h1>
        <p>${item.description}</p>
      </div>
    </section>
  `;
}

function injectCardImages(selector, dataMap, dataKey) {
  document.querySelectorAll(selector).forEach((card) => {
    const item = dataMap[card.dataset[dataKey]];
    if (!item?.image) return;

    card.classList.add("has-image");
    card.insertAdjacentHTML(
      "afterbegin",
      buildImageTag(item.image, item.title, "card-image")
    );
  });
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
          <img src="${program.image}" alt="${item.name}" class="subprogram-image" loading="lazy">
          <h3>${item.name}</h3>
          <p>${item.description}</p>
        </article>
      `
    )
    .join("");

  root.innerHTML = `
    <div class="container breadcrumb-wrap">
      <div class="breadcrumb">
        <a href="index.html">Home</a> / <a href="index.html#programs">Programs</a> / ${program.title}
      </div>
    </div>
    ${buildDetailHero(program)}
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
          <img src="${category.image}" alt="${item.name}" class="material-thumb" loading="lazy">
          <div>
            <h3>${item.name}</h3>
            <p>${item.description}</p>
          </div>
        </article>
      `
    )
    .join("");

  root.innerHTML = `
    <div class="container breadcrumb-wrap">
      <div class="breadcrumb">
        <a href="index.html">Home</a> / <a href="index.html#materials">Learning Materials</a> / ${category.title}
      </div>
    </div>
    ${buildDetailHero(category)}
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
  injectCardImages("[data-program]", PROGRAMS, "program");
  injectCardImages("[data-learning]", LEARNING_CATEGORIES, "learning");

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
