'use strict';

document.addEventListener('DOMContentLoaded', function() {

  
  // element toggle function
  const elementToggleFunc = function (elem) {
    elem.classList.toggle("active");
  }

  

  // sidebar variables
  const sidebar = document.querySelector("[data-sidebar]");
  const sidebarBtn = document.querySelector("[data-sidebar-btn]");

  // sidebar toggle functionality for mobile
  if (sidebarBtn) {
    sidebarBtn.addEventListener("click", function () {
      elementToggleFunc(sidebar);
    });
  }

  // page navigation variables
  const navigationLinks = document.querySelectorAll("[data-nav-link]");
  const pages = document.querySelectorAll("[data-page]");

  

  // add event to all nav links
  navigationLinks.forEach(function(link) {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetPage = this.getAttribute('data-page-target');
  
      pages.forEach(function(page) {
        if (page.dataset.page === targetPage) {
          page.classList.add("active");
        } else {
          page.classList.remove("active");
        }
      });
  
      navigationLinks.forEach(function(navLink) {
        if (navLink === link) {
          navLink.classList.add("active");
        } else {
          navLink.classList.remove("active");
        }
      });
  
      window.scrollTo(0, 0);
    });
  });

  // Asegúrate de que los elementos del navbar tengan el cursor adecuado
  navigationLinks.forEach(function(item) {
    item.style.cursor = 'pointer';
  });

  


});


