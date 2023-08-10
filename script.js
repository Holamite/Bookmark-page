"use strict";
//////////////////////////////////////////////
// Tabbbed component
const tabs = document.querySelectorAll(".feature__tab");
const tabsContainer = document.querySelector(".feature__tab-container");
const tabsContent = document.querySelectorAll(".feature__content");

tabsContainer.addEventListener("click", function (e) {
  const clicked = e.target.closest(".feature__tab");

  // Guard clause
  if (!clicked) return;

  // Remove active tab
  tabs.forEach((t) => t.classList.remove("feature__tab--active"));
  tabsContent.forEach((c) => c.classList.remove("feature__content--active"));

  // Activate tab
  clicked.classList.add("feature__tab--active");

  // Activate content area
  document
    .querySelector(`.feature__content--${clicked.dataset.tab}`)
    .classList.add("feature__content--active");
});

//////////////////////////////////////////////
// Accordion component

// Get all accordion items
const accordionItems = document.querySelectorAll(".item");

// Add click event listener to each accordion item
accordionItems.forEach(function (item) {
  const accordionText = item.querySelector(".accordion-text");
  const hiddenBox = item.querySelector(".hidden-box");
  const accordionIcon = item.querySelector(".accordion-icon");

  accordionText.addEventListener("click", function () {
    // Toggle open class on accordion text
    accordionText.classList.toggle("open");

    // Toggle open class on hidden box
    hiddenBox.classList.toggle("open");

    // Toggle rotate class on accordion icon
    accordionIcon.classList.toggle("rotate");
  });

  accordionIcon.addEventListener("click", function () {
    // Toggle rotate class on accordion icon
    accordionIcon.classList.toggle("rotate");

    // Toggle open class on accordion text
    accordionText.classList.toggle("open");

    // Toggle open class on hidden box
    hiddenBox.classList.toggle("open");
  });
});

//////////////////////////////////////////////
// Navigation component
// Store the elements in variables
const menu = document.querySelector(".menu");
const btnNav = document.querySelector(".btn-nav");
const openIcon = document.querySelector(".open-icon");
const closeIcon = document.querySelector(".close-icon");

// Function to handle the menu toggle
function toggleMenu() {
  menu.classList.toggle("active");
  openIcon.classList.toggle("hidden");
  closeIcon.classList.toggle("hidden");
}

// Toggle the menu when the button is clicked
btnNav.addEventListener("click", toggleMenu);
