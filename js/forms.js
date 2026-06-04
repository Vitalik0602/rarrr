// Год в подвале
document.addEventListener("DOMContentLoaded", () => {
  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // Табы прайса
  const tabButtons = document.querySelectorAll(".tabs__btn");
  const tabContents = {
    studios: document.getElementById("tab-studios"),
    consult: document.getElementById("tab-consult"),
    events: document.getElementById("tab-events"),
  };

  tabButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const tab = btn.dataset.tab;

      tabButtons.forEach((b) => b.classList.remove("tabs__btn--active"));
      btn.classList.add("tabs__btn--active");

      Object.keys(tabContents).forEach((key) => {
        if (tabContents[key]) {
          tabContents[key].classList.toggle(
            "tabs__content--active",
            key === tab
          );
        }
      });
    });
  });

  // Бургер-меню
  const burger = document.getElementById("burger");
  const nav = document.querySelector(".nav");

  if (burger && nav) {
    burger.addEventListener("click", () => {
      nav.classList.toggle("nav--open");
    });

    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        nav.classList.remove("nav--open");
      });
    });
  }

  // Форма диагностики (демо-обработка)
  const form = document.getElementById("diagnostics-form");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      alert(
        "Спасибо! Ваша заявка на бесплатную диагностику отправлена. Мы свяжемся с вами в ближайшее время."
      );
      form.reset();
    });
  }
});
