let isBars = true;
function openBars() {
  let navMobile = document.getElementById("nav-mobile");
  if (!isBars) {
    navMobile.style.display = "none";
    isBars = true;
  } else {
    navMobile.style.display = "flex";
    isBars = false;
  }

  const bars = document.getElementById("bars");
  document.addEventListener("click", function (e) {
    if (!navMobile.contains(e.target) && !bars.contains(e.target)) {
      navMobile.classList.remove("active");
    }
  });

  console.info(true);
}
