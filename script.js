const nav = document.getElementById("nav");
const navTop = nav.offsetTop;

if (window.location.href.includes("kontakt.html")) {
  document.body.classList.add("sticky-nav");
  document.body.style.paddingTop = "0px";
}

const stickyNav = () => {
  if (window.scrollY >= navTop) {
    document.body.style.paddingTop = nav.offsetHeight + "px";
    document.body.classList.add("sticky-nav");
    if (window.location.href.includes("kontakt.html")) {
      document.body.style.paddingTop = "0px";
    }
  } else {
    document.body.style.paddingTop = 0;
    document.body.classList.remove("sticky-nav");
  }
};

window.addEventListener("scroll", stickyNav);
