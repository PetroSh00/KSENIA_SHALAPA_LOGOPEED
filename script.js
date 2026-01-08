/* =====================
   SCROLL ANIMATIONS
===================== */
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("in-view");
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll(".animate").forEach(el => observer.observe(el));

/* =====================
   MODAL
===================== */
const modal = document.querySelector(".modal");
const modalOverlay = document.querySelector(".modal__overlay");

document.querySelectorAll("[data-open-modal]").forEach(btn => {
  btn.addEventListener("click", () => {
    modal.classList.add("open");
  });
});

modalOverlay?.addEventListener("click", () => {
  modal.classList.remove("open");
});

/* =====================
   LANGUAGE SWITCH
===================== */
const translations = {
  ua: {
    heroTitle: "Запуск мовлення з повагою до дитини",
    heroSubtitle: "Авторська методика логопеда з 15-річним досвідом",
    buy: "Придбати курс"
  },
  en: {
    heroTitle: "Speech development with respect for the child",
    heroSubtitle: "Author methodology by a speech therapist with 15 years experience",
    buy: "Buy course"
  }
};

let currentLang = "ua";

document.querySelectorAll("[data-lang]").forEach(btn => {
  btn.addEventListener("click", () => {
    currentLang = btn.dataset.lang;
    document.querySelectorAll("[data-i18n]").forEach(el => {
      el.textContent = translations[currentLang][el.dataset.i18n];
    });
  });
});
