const SITE_SETTINGS = {
  contactEmail: "hello@uknowwhowebdesign.co.uk",
};

const menuButton = document.querySelector(".menu-button");
const navigation = document.querySelector(".site-nav");

menuButton?.addEventListener("click", () => {
  const isOpen = navigation?.classList.toggle("open") ?? false;
  menuButton.setAttribute("aria-expanded", String(isOpen));
});

navigation?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navigation.classList.remove("open");
    menuButton?.setAttribute("aria-expanded", "false");
  });
});

const pagesInput = document.querySelector("#pages");
const copyHelpInput = document.querySelector("#copy-help");
const pageCount = document.querySelector("#page-count");
const estimatePrice = document.querySelector("#estimate-price");

function updateEstimate() {
  const pages = Number(pagesInput?.value ?? 5);
  const copyHelp = copyHelpInput?.checked ?? true;
  const additionalPages = Math.max(0, pages - 5) * 55;
  const estimate = 349 + additionalPages + (copyHelp ? 95 : 0);

  if (pageCount) pageCount.textContent = String(pages);
  if (estimatePrice) estimatePrice.textContent = `£${estimate}`;
}

pagesInput?.addEventListener("input", updateEstimate);
copyHelpInput?.addEventListener("change", updateEstimate);
updateEstimate();

document.querySelectorAll("[data-contact-email]").forEach((link) => {
  link.textContent = SITE_SETTINGS.contactEmail;
  link.setAttribute("href", `mailto:${SITE_SETTINGS.contactEmail}`);
});

document.querySelector("#contact-form")?.addEventListener("submit", (event) => {
  event.preventDefault();

  const data = new FormData(event.currentTarget);
  const name = String(data.get("name") || "");
  const business = String(data.get("business") || "");
  const email = String(data.get("email") || "");
  const service = String(data.get("service") || "");
  const message = String(data.get("message") || "");
  const subject = encodeURIComponent(
    `Website enquiry${business ? ` — ${business}` : ""}`,
  );
  const body = encodeURIComponent(
    `Hi Cameron,\n\nMy name is ${name}.\nBusiness: ${business || "Not provided"}\nEmail: ${email}\nService: ${service || "Not sure yet"}\n\n${message}\n\nThanks`,
  );

  window.location.href = `mailto:${SITE_SETTINGS.contactEmail}?subject=${subject}&body=${body}`;
});

const year = document.querySelector("#current-year");
if (year) year.textContent = String(new Date().getFullYear());
