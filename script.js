"use strict";

const header = document.querySelector(".header");
const headerOverlay = document.querySelector(".header__overlay");

const navItems = document.querySelectorAll(".header__nav-list-item");
const navLinks = document.querySelectorAll(".header__nav-link");

const mobileBtnOpen = document.querySelector(".header__mobile-btn-open");
const mobileBtnClose = document.querySelector(".header__mobile-btn-close");

const containers = document.querySelectorAll(".container");
const sections = document.querySelectorAll(".section");

const popupOverlay = document.querySelector(".popup");
const popupContent = document.querySelector(".popup__content");
const popupBtnsOpen = document.querySelectorAll(".header__btn");
const popupBtnClose = document.querySelector(".popup__btn-close");

const faqQuestions = document.querySelectorAll(
  ".FAQ-section__accordion-question--box"
);
const faqContentBox = document.querySelectorAll(
  ".FAQ-section__accordion-content--box"
);

// *************************************
// *************** NAVIGATION & POPUP MODAL**********************
// *************************************

// Navigation active state
document.addEventListener("DOMContentLoaded", () => {
  // const currentPath = window.location.pathname.slice(1);
  const currentPath = window.location.pathname.split("/").pop();

  navItems.forEach((item, i) => {
    const linkPath = navLinks[i].getAttribute("href");

    if (linkPath === currentPath || (currentPath === "" && linkPath === "index.html")) {
      item.classList.add("header__nav-list-item--active");
    }
  });
});

// Open and close mobile navigation
mobileBtnOpen.addEventListener("click", () => {
  header.classList.add("open");
});

const closeMobileNav = () => {
  header.classList.remove("open");
};

mobileBtnClose.addEventListener("click", closeMobileNav);
headerOverlay.addEventListener("click", closeMobileNav);

// Open and close popup modal

// open modal
const openPopup = () => {
  popupOverlay.classList.remove("popup-hidden");
};

// close modal
const removePopup = () => {
  popupOverlay.classList.add("popup-hidden");
};

popupContent.addEventListener("click", (event) => {
  event.stopPropagation();
});

popupBtnsOpen.forEach((btn) => {
  btn.addEventListener("click", openPopup);
});
popupBtnClose.addEventListener("click", removePopup);
popupOverlay.addEventListener("click", removePopup);

// *************************************
// ***************SECTIONS SCROLL EFFECT**********************
// *************************************

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.remove("section-fade");
      }
    });
  },
  {
    root: null,
    threshold: 0.1,
  }
);

sections.forEach((section) => {
  console.log(section);
  section.classList.add("section-fade");
  observer.observe(section);
});

// *************************************
// *************************************
// *************************************

faqQuestions.forEach((question) => {
  question.addEventListener("click", () => {
    faqContentBox.forEach((content, i) => {
      if (+question.dataset.id === i) {
        content.classList.contains("FAQ-section__accordion-content--box-active")
          ? content.classList.remove(
              "FAQ-section__accordion-content--box-active"
            )
          : content.classList.add("FAQ-section__accordion-content--box-active");
      } else {
        content.classList.remove("FAQ-section__accordion-content--box-active");
      }
    });
  });
});
