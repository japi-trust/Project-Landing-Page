
// Define Global Variables

let navBar = document.getElementById("navbar__list");
let sections = document.querySelectorAll("section");
let navbarColor = document.querySelector(".navbar__menu");


// End Global Variables
function dynamicNavBar() {
    for (let i = 0; i < sections.length; i++) {
      let section = sections[i];
      let sectionID = section.id;
      let listItem = document.createElement("li");
      let anchor = document.createElement("a");
      anchor.href = "#" + sectionID;
      anchor.textContent = `${sectionID}`;
      anchor.classList.add("menu__link");
      listItem.appendChild(anchor);
      navBar.appendChild(listItem);
      listItem.addEventListener("click", scrollToSection);
    }
  
    function scrollToSection(e) {
      e.preventDefault();
      let targetSection = e.target.parentElement.querySelector("a").hash.slice(1);
      document.getElementById(targetSection).scrollIntoView({
        behavior: "smooth"
      });
    }
  }
  dynamicNavBar();

//Add event listerner
window.addEventListener("scroll", () => {
    sections.forEach(section => {
      const dimension = section.getBoundingClientRect().top;
      dimension >= 0 && sectionDimension <= 100
        ? section.classList.add("your-active-class")
        : section.classList.remove("your-active-class");
    });
  });


function toggleMenu() {
    navBar.classList.toggle("menu");
}

// Add a simple color change to the navbar when scrolling down the page. This is done by using the onscroll event listener and the window.scrollY property. If the window.scrollY is greater than 200px, the navbar will change to a light color.this is an optional feature.
window.onscroll = () => {
    if (window.scrollY > 200) {
        navbarColor.classList.add("nav-active");
    } else {
        navbarColor.classList.remove("nav-active");
    }
};


// Add a function to highlight the navbar link when the user scrolls to the section.
function activeStateNav() {
    let scroll = window.pageYOffset;
    sections.forEach(section => {

        let sectionID = section.getAttribute("id");
        if (scroll > section.offsetTop - 50 && scroll <= section.offsetTop - 50 + section.offsetHeight) {
            navbarColor.querySelector(`a[href*=${sectionID}]`).classList.add("active");
        } else {
            navbarColor.querySelector(`a[href*=${sectionID}]`).classList.remove("active");
        };
    }); 
};
window.addEventListener('scroll', activeStateNav);


