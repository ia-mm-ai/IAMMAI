const card = document.querySelector(".registry-card");
const count = document.querySelector("[data-projection-count]");
const status = document.querySelector("[data-registry-status]");
const empty = document.querySelector("[data-registry-empty]");
const list = document.querySelector("[data-projection-list]");
const error = document.querySelector("[data-registry-error]");

const requiredProjectionFields = [
  "projection_id",
  "target",
  "source",
  "hold",
  "effect_ceiling",
];

function renderProjection(projection) {
  const article = document.createElement("article");
  article.className = "projection";

  const title = document.createElement("h2");
  title.textContent = projection.target.public_label;

  const description = document.createElement("p");
  description.textContent = projection.hold.public_summary;

  const meta = document.createElement("div");
  meta.className = "projection-meta";

  const posture = document.createElement("span");
  posture.textContent = projection.hold.progression_posture;
  const recorded = document.createElement("span");
  recorded.textContent = projection.hold.recorded_at;
  const identifier = document.createElement("span");
  identifier.textContent = projection.projection_id;

  meta.append(posture, recorded, identifier);
  article.append(title, description, meta);
  return article;
}

fetch("./data/public-hold-projections.v1.json", { cache: "no-store" })
  .then((response) => {
    if (!response.ok) throw new Error("Registry unavailable");
    return response.json();
  })
  .then((registry) => {
    if (!Array.isArray(registry.projections)) {
      throw new Error("Invalid registry");
    }

    for (const projection of registry.projections) {
      if (!requiredProjectionFields.every((field) => field in projection)) {
        throw new Error("Incomplete public projection");
      }
    }

    count.textContent = String(registry.projections.length).padStart(2, "0");

    if (registry.projections.length === 0) {
      status.textContent = "Empty";
      status.dataset.state = "empty";
      empty.hidden = false;
    } else {
      status.textContent = "Presented";
      status.dataset.state = "presented";
      registry.projections.forEach((projection) => {
        list.append(renderProjection(projection));
      });
    }
  })
  .catch(() => {
    count.textContent = "—";
    status.textContent = "Unverified";
    status.dataset.state = "unverified";
    error.hidden = false;
  })
  .finally(() => {
    card.setAttribute("aria-busy", "false");
  });
