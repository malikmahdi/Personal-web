//
const express = require("express");
const app = express();
const port = 3000;
const config = require("./src/config/config.json");
const { Sequelize, QueryTypes } = require("sequelize");
const sequelize = new Sequelize(config.development);

app.set("view engine", "hbs");
app.set("views", "src/views");

app.use("/assets", express.static("src/assets"));
app.use(express.urlencoded({ extended: false }));

// Routing
app.get("/home", home);

app.get("/project", project);
app.post("/project", addProject);

app.get("/delete/:id", delProject);

app.get("/reproject/:id", editProjectView);
app.post("/reproject", editProject);

app.get("/project-detail/:id", projectDetail);

app.get("/testimonial", testimonial);

app.get("/dataTestimonial", dataTesti);

app.get("/register", (req, res) => {
  res.render("register");
});

app.get("/login", (req, res) => {
  res.render("login");
});

app.get("/contact-me", contact);
// routing

// Function
async function home(req, res) {
  const tittleTab = "Home";

  const query = "SELECT * FROM projects";
  const objProjects = await sequelize.query(query, { type: QueryTypes.SELECT });

  res.render("index", { tittleTab, data: objProjects });
}

function project(req, res) {
  const tittleTab = "Add Project";
  res.render("project", { tittleTab });
}

async function addProject(req, res) {
  let { tittle, startDate, endDate, desc, tech } = req.body;
  const author = "Malik Mahdi";

  let startGet = new Date(startDate);
  let endGet = new Date(endDate);

  let diffDate = endGet.getTime() - startGet.getTime();
  let days = diffDate / (1000 * 60 * 60 * 24);

  let week = Math.floor(days / 7);

  let month = Math.floor(days / 30);
  let monthDays = days % 30;

  let years = Math.floor(days / 365);
  let yearsDays = days % 365;

  let time_project = "";

  if (days <= 6) {
    time_project = `${days} hari`;
  } else if (years > 0) {
    if (yearsDays > 0) {
      time_project = `${years} Tahun ${Math.floor(
        yearsDays / 30
      )} Bulan ${Math.floor(yearsDays % 30)} Hari`;
    } else {
      time_project = `${years} Tahun`;
    }
  } else if (month > 0) {
    if (monthDays > 0) {
      time_project = `${month} Bulan ${monthDays} Hari`;
    } else {
      time_project = `${month} Bulan `;
    }
  } else if (days > 0) {
    time_project = `${days} Hari`;
  }

  const query = `INSERT INTO projects (tittle, start_date, end_date, description, technologies,author,distance_date, "createdAt", "updatedAt") VALUES ('${tittle}', '${startDate}' , '${endDate}' , $$${desc}$$,'{${tech}}','${author}','${time_project}', NOW(), NOW())`;
  const objProjects = await sequelize.query(query, { type: QueryTypes.INSERT });

  res.redirect("home#resultProject");
}

async function delProject(req, res) {
  const { id } = req.params;

  const query = `DELETE FROM projects WHERE id= ${id}`;
  const objProjects = await sequelize.query(query, { type: QueryTypes.DELETE });

  res.redirect("/home#resultProject");
}

async function editProjectView(req, res) {
  const { id } = req.params;

  const query = `SELECT * FROM projects WHERE id=${id}`;
  const objProjects = await sequelize.query(query, { type: QueryTypes.SELECT });

  res.render("update-project", { data: objProjects[0] });
}

async function editProject(req, res) {
  let { tittle, startDate, endDate, desc, tech, id } = req.body;

  let startGet = new Date(startDate);
  let endGet = new Date(endDate);

  let diffDate = endGet.getTime() - startGet.getTime();
  let days = diffDate / (1000 * 60 * 60 * 24);

  let week = Math.floor(days / 7);

  let month = Math.floor(days / 30);
  let monthDays = days % 30;

  let years = Math.floor(days / 365);
  let yearsDays = days % 365;

  let time_project = "";

  if (days <= 6) {
    time_project = `${days} hari`;
  } else if (years > 0) {
    if (yearsDays > 0) {
      time_project = `${years} Tahun ${Math.floor(
        yearsDays / 30
      )} Bulan ${Math.floor(yearsDays % 30)} Hari`;
    } else {
      time_project = `${years} Tahun`;
    }
  } else if (month > 0) {
    if (monthDays > 0) {
      time_project = `${month} Bulan ${monthDays} Hari`;
    } else {
      time_project = `${month} Bulan `;
    }
  } else if (days > 0) {
    time_project = `${days} Hari`;
  }

  const query = `UPDATE projects SET tittle='${tittle}', start_date='${startDate}', end_date='${endDate}', description=$$${desc}$$, technologies='{${tech}}',distance_date='${time_project}' WHERE id=${id}`;
  const objProjects = await sequelize.query(query, { type: QueryTypes.UPDATE });
  console.log("ini data edit", objProjects);
  res.redirect("/home#resultProject");
}

async function projectDetail(req, res) {
  const { id } = req.params;
  const tittleTab = "Detail Project";

  const query = `SELECT * FROM projects WHERE id=${id}`;
  const objProjects = await sequelize.query(query, { type: QueryTypes.SELECT });
  const monthList = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec ",
  ];
  let tanggalAwal = new Date(objProjects[0].start_date);
  const dateStart = tanggalAwal.getDate();
  const monthStart = tanggalAwal.getMonth();
  const yearStart = tanggalAwal.getFullYear();

  let tanggalAkhir = new Date(objProjects[0].end_date);
  const dateEnd = tanggalAkhir.getDate();
  const monthEnd = tanggalAkhir.getMonth();
  const yearEnd = tanggalAkhir.getFullYear();

  const fullStartDate = `${dateStart} ${monthList[monthStart]} ${yearStart}`;
  const fullEndDate = `${dateEnd} ${monthList[monthEnd]} ${yearEnd}`;

  res.render("project-detail", {
    tittleTab,
    dataDetail: objProjects[0],
    fullStartDate,
    fullEndDate,
  });
}

function testimonial(req, res) {
  const tittleTab = "Testimonials";
  res.render("testimonial", { tittleTab });
}

function contact(req, res) {
  const tittleTab = "Contact Me";
  res.render("contact", { tittleTab });
}

function dataTesti(req, res) {
  res.json([
    {
      author: "Agun",
      review: "Keren bangetttt",
      image: "assets/img/people1.jpg",
      rating: 5,
    },
    {
      author: "Alif",
      review: "Lumayan",
      image: "assets/img/people1.jpg",
      rating: 3,
    },
    {
      author: "Firdaus",
      review: "Saya kurang suka",
      image: "assets/img/people1.jpg",
      rating: 1,
    },
    {
      author: "Malik",
      review: "Tidak masalah",
      image: "assets/img/people1.jpg",
      rating: 3,
    },
    {
      author: "Lukman",
      review: "Mantap pokoknya",
      image: "assets/img/people1.jpg",
      rating: 5,
    },
  ]);
}
// function

app.listen(port, () => {
  console.log(`Server berjalan di port ${port}`);
});
