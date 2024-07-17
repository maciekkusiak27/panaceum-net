document.addEventListener("DOMContentLoaded", function () {
  var hamburgerMenu = document.getElementById("hamburger-menu");
  var pageNav = document.getElementById("page-nav");
  var isOpen = false;

  function toggleMenu() {
    if (isOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  }

  function openMenu() {
    pageNav.style.display = "block";
    hamburgerMenu.src = "./assets/images/svg/close_menu.svg";
    isOpen = true;
  }

  function closeMenu() {
    pageNav.style.display = "none";
    hamburgerMenu.src = "./assets/images/svg/hamburger_menu.svg";
    isOpen = false;
  }

  hamburgerMenu.addEventListener("click", toggleMenu);

  document.querySelectorAll(".page--nav li").forEach(function (navItem) {
    navItem.addEventListener("click", function () {
      if (isOpen && window.innerWidth < 900) {
        closeMenu();
      }
    });
  });

  window.addEventListener("resize", function () {
    if (window.innerWidth > 900) {
      openMenu();
    } else {
      closeMenu();
    }
  });
});
