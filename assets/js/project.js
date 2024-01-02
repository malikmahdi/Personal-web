let dataProject = [];

function submitProject(event) {
  // Agar halaman tidak reload ketika button diklik
  event.preventDefault();

  //   Deklarasi Data
  let tittle = document.getElementById("inputTittle").value;
  let startDate = document.getElementById("inputStartDate").value;
  let endDate = document.getElementById("inputEndDate").value;
  let desc = document.getElementById("description").value;

  let react = document.getElementById("inputReact").checked
    ? `<i class="fa-brands fa-react fa-2xl"></i>`
    : "";
  let node = document.getElementById("inputNode").checked
    ? ` <i class="fa-brands fa-node-js fa-2xl"></i>`
    : ``;
  let vue = document.getElementById("inputVue").checked
    ? `<i class="fa-brands fa-vuejs fa-2xl"></i>`
    : ``;
  let js = document.getElementById("inputJs").checked
    ? ` <i
  class="fa-brands fa-square-js fa-2xl"
  style="color: #000000"></i>`
    : ``;

  let image = document.getElementById("inputImage").files;

  // Validasi data
  if (!tittle) {
    alert("Project Name belum terisi");
  } else if (!startDate) {
    alert("Start Date belum terisi");
  } else if (!endDate) {
    alert("End Date belum terisi");
  } else if (!desc) {
    alert("Description belum terisi");
  } else {
    // alert("Data berhasil terkirim");
  }

  image = URL.createObjectURL(image[0]);

  console.info(
    `Nama : ${tittle}\n
Start Date : ${startDate}\n
End Date : ${endDate}\n
Description : ${desc}\n
${react}\n
${node}\n
${vue}\n
${js}\n
File image : ${image}`
  );

  const fillProject = {
    tittle,
    startDate,
    endDate,
    desc,
    image,
    react,
    node,
    vue,
    js,
    postAt: new Date(),
    author: "Malik Mahdi",
  };

  dataProject.push(fillProject);
  console.log("Data project : ", dataProject);
  renderProject();
}

function renderProject() {
  document.getElementById("contentProject").innerHTML = "";

  for (let index = 0; index < dataProject.length; index++) {
    document.getElementById(
      "contentProject"
    ).innerHTML += `  <!-- Column Card -->
    <div class="col-card">
      <!-- Card -->
      <div class="card">
        <div class="img-card">
          <img src="${dataProject[index].image}" alt="" />
        </div>
        <div class="content-card">
          <h2 class="title-card"><a href="project-detail.html">${dataProject[index].tittle}</a></h2>
          <small>${dataProject[index].startDate}/${dataProject[index].endDate} | ${dataProject[index].author}</small>

          <p>
            ${dataProject[index].desc}
          </p>

          <div class="icon-checkbox">
          ${dataProject[index].react}
          ${dataProject[index].node}
          ${dataProject[index].vue}
          ${dataProject[index].js}
          </div>

          <div class="btn-card">
            <button class="btn-edit">Edit</button>
            <button class="btn-delete">Delete</button>
          </div>
        </div>
      </div>
      <!-- Close Card -->
    </div>
    <!-- Close Column Card -->`;
  }
}
