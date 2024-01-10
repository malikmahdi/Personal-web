const tittle = document.getElementById("tittle");
const duration = document.getElementById("duration");
const thisTime = document.getElementById("thisTime");
const react = document.getElementById("react");
const node = document.getElementById("node");
const vue = document.getElementById("vue");
const js = document.getElementById("js");
const desc = document.getElementById("desc");

document.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get("id");
  const data = JSON.parse(localStorage.getItem("projects"))[id];

  tittle.innerText = data.tittle;
  duration.innerText = data.timeProject;
  thisTime.innerText = data.postAt;
  react.innerHTML = data.react;
  node.innerHTML = data.node;
  vue.innerHTML = data.vue;
  js.innerHTML = data.js;
  desc.innerHTML = data.desc;
  console.info(id);
});
