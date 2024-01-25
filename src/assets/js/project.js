let dataProject = [];

document.addEventListener("DOMContentLoaded", () => {
  dataProject = JSON.parse(localStorage.getItem("projects")) ?? [];
  renderProject();
});

function submitProject(event) {
  // Agar halaman tidak reload ketika button diklik
  event.preventDefault();

  //   Deklarasi Data
  let tittle = document.getElementById("inputTittle").value;

  let startDate = new Date(document.getElementById("inputStartDate").value);
  let endDate = new Date(document.getElementById("inputEndDate").value);
  let startGet = startDate.getTime();
  let endGet = endDate.getTime();

  let desc = document.getElementById("description").value;

  let react = document.getElementById("inputReact").checked
    ? `<i class="fa-brands fa-react fa-2xl"></i>`
    : "";
  let node = document.getElementById("inputNode").checked
    ? `<i class="fa-brands fa-node-js fa-2xl"></i>`
    : ``;
  let vue = document.getElementById("inputVue").checked
    ? `<i class="fa-brands fa-vuejs fa-2xl"></i>`
    : ``;
  let js = document.getElementById("inputJs").checked
    ? `<i
  class="fa-brands fa-square-js fa-2xl"
  style="color: #000000"></i>`
    : ``;

  let image = document.getElementById("inputImage").files;

  // Time Difference
  let diffTime = endGet - startGet;
  let days = diffTime / (1000 * 60 * 60 * 24);

  let week = Math.floor(days / 7);
  // let weekDays = days % 7;

  let month = Math.floor(days / 30);
  let monthDays = days % 30;

  let years = Math.floor(days / 365);
  let yearsDays = days % 365;

  let timeProject = "";

  if (diffTime < 0) {
    return alert("End Date harus setelah Start Date!");
  }

  if (days <= 6) {
    timeProject = `${days} hari`;
  } else if (years > 0) {
    if (yearsDays > 0) {
      timeProject = `${years} Tahun ${Math.floor(
        yearsDays / 30
      )} Bulan ${Math.floor(yearsDays % 30)} Hari`;
    } else {
      timeProject = `${years} Tahun`;
    }
  } else if (month > 0) {
    if (monthDays > 0) {
      timeProject = `${month} Bulan ${monthDays} Hari`;
    } else {
      timeProject = `${month} Bulan `;
    }
  } else if (days > 0) {
    timeProject = `${days} Hari`;
  } else {
    timeProject = `${week} Minggu`;
  }

  // Validasi data
  if (!tittle) {
    alert("Project Name belum terisi");
    return;
  } else if (!startGet) {
    alert("Start Date belum terisi");
    return;
  } else if (!endGet) {
    alert("End Date belum terisi");
    return;
  } else if (!desc) {
    alert("Description belum terisi");
    return;
  } else if (desc) {
    if (react) {
      react ? react : "";
    }
    if (node) {
      node ? node : "";
    }
    if (vue) {
      vue ? vue : "";
    }
    if (js) {
      js ? js : "";
    } else if (!react && !node && !vue && !js) {
      alert("Anda harus memilih minimal satu Technologies");
      return;
    }
  } else {
    alert("Data berhasil terkirim");
  }

  console.log(timeProject);

  image = URL.createObjectURL(image[0]);

  console.info(
    `Nama : ${tittle}\n
Start Date : ${startDate}\n
End Date : ${endDate}\n
Time Difference : ${timeProject}\n
Description : ${desc}\n
${react}\n
${node}\n
${vue}\n
${js}\n
File image : ${image}`
  );

  const fillProject = {
    tittle,
    timeProject,
    desc,
    image,
    react,
    node,
    vue,
    js,
    postAt: new Date(),
    author: "Malik Mahdi",
  };

  dataProject.unshift(fillProject);
  console.log("Data project : ", dataProject);
  localStorage.setItem("projects", JSON.stringify(dataProject));
  renderProject();
}

function renderProject() {
  document.getElementById("resultProject").innerHTML = "";

  for (let index = 0; index < dataProject.length; index++) {
    document.getElementById(
      "resultProject"
    ).innerHTML += `<div class="col-lg-4 mt-4">
    <!-- Card -->
    <div class="card border-0 shadow">
      <img
        src="${dataProject[index].image}"
        class="card-img-top"
        height="300"
        alt="..."
      />
      <div class="card-body">
        <h5 class="card-title fw-bold">
        <a href="project-detaill.html" target="_blank" class="text-dark text-decoration-none">${dataProject[index].tittle}</a>
        </h5>
        <small class="text-secondary">
        <i class="fa-regular fa-clock"></i> ${dataProject[index].timeProject} | <i class="fa-regular fa-user"></i> ${dataProject[index].author}
        </small>
        <p class="text-paraf mt-2">
        ${dataProject[index].desc}
        </p>
        <div class="ikon mt-4 mb-4">
        ${dataProject[index].react}
        ${dataProject[index].node}
        ${dataProject[index].vue}
        ${dataProject[index].js}
        </div>
        <div class="btn-bottom d-flex justify-content-center mb-2">
          <a href="#" class="btn btn-dark me-1 p-0 w-50">Edit</a
          ><a href="#" class="btn btn-dark p-0 w-50">Delete</a>
        </div>
      </div>
    </div>
    <!-- Close Card -->
  </div>`;
  }
}
