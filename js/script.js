document.addEventListener("DOMContentLoaded", function () {
  var hamburgerMenu = document.getElementById("hamburger-menu");
  var pageNav = document.getElementById("page-nav");
  var isOpen = false;

  hamburgerMenu.addEventListener("click", function () {
    if (isOpen) {
      pageNav.style.display = "none";
      hamburgerMenu.src = "./assets/images/svg/hamburger_menu.svg";
    } else {
      pageNav.style.display = "block";
      hamburgerMenu.src = "./assets/images/svg/close_menu.svg";
    }

    isOpen = !isOpen;
  });

  document.querySelectorAll(".page--nav li").forEach(function (navItem) {
    navItem.addEventListener("click", function () {
      if (isOpen) {
        pageNav.style.display = "none";
        hamburgerMenu.src = "./assets/images/svg/hamburger_menu.svg";
        isOpen = false;
      }
    });
  });

  window.addEventListener("resize", function () {
    if (window.innerWidth > 900) {
      pageNav.style.display = "block";
      isOpen = true
    }
    else{
      pageNav.style.display = "none";
      isOpen = false
    }
  });
});
