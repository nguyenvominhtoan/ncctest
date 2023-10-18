//menu mobile
function menuMobile() {
  const btnmenu = document.querySelector(".btnmenu");
  const nav = document.querySelector(".nav");

  btnmenu.addEventListener("click", function () {
    this.classList.toggle("active");
    nav.classList.toggle("active");
    document.body.classList.toggle("--disable-scroll");
  });
  //hide nav
  function hideNav() {
    btnmenu.classList.remove("active");
    nav.classList.remove("active");
  }
  //resize window
  window.addEventListener("resize", function () {
    let window = this.window.innerWidth;
    if (window > 992) {
      hideNav();
    }
  });
}
menuMobile();
