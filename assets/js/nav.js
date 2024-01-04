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
  console.info(true);
}
