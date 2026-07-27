const SITE_SETTINGS = {
  contactEmail: "hudsoncameron0808@proton.me",
};

const menuButton = document.querySelector(".menu-button");
const navigation = document.querySelector(".site-nav");

menuButton?.addEventListener("click", () => {
  const isOpen = navigation?.classList.toggle("open") ?? false;
  menuButton.setAttribute("aria-expanded", String(isOpen));
  menuButton.setAttribute(
    "aria-label",
    isOpen ? "Close navigation" : "Open navigation",
  );
});

navigation?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navigation.classList.remove("open");
    menuButton?.setAttribute("aria-expanded", "false");
    menuButton?.setAttribute("aria-label", "Open navigation");
  });
});

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
  const message = String(data.get("message") || "");
  const subject = encodeURIComponent(
    `Website enquiry${business ? ` - ${business}` : ""}`,
  );
  const body = encodeURIComponent(
    `Hi Cameron,\n\nMy name is ${name}.\nBusiness: ${business || "Not provided"}\nEmail: ${email}\n\n${message}\n\nThanks`,
  );

  window.location.href = `mailto:${SITE_SETTINGS.contactEmail}?subject=${subject}&body=${body}`;
});

const year = document.querySelector("#current-year");
if (year) year.textContent = String(new Date().getFullYear());
