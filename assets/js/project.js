let dataProject = [];

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
    : "";
  let vue = document.getElementById("inputVue").checked
    ? `<i class="fa-brands fa-vuejs fa-2xl"></i>`
    : "";
  let js = document.getElementById("inputJs").checked
    ? `<i
  class="fa-brands fa-square-js fa-2xl"
  style="color: #000000"></i>`
    : "";

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
        
          <small>
          <i class="fa-regular fa-clock"></i> ${dataProject[index].timeProject} | <i class="fa-regular fa-user"></i> ${dataProject[index].author}
          </small>
          
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
