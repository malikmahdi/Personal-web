const express = require("express");
const app = express();
const port = 3000;

app.set("view engine", "hbs");
app.set("views", "src/views");

app.use("/assets", express.static("src/assets"));

app.get("/home", home);
app.get("/project", project);
app.get("/project/:id", projectDetail);
app.get("/testimonial", testimonial);
app.get("/dataTestimonial", dataTesti);
app.get("/contact-me", contact);

function home(req, res) {
  res.render("index");
}

function project(req, res) {
  const dataProj = [
    {
      id: 0,
      image: `assets/img/people1.jpg`,
      tittle: `Judul 1`,
      timeProject: `1 month ago`,
      author: `Malik Mahdi`,
      desc: `ini deskirpsi 1`,
      react: `<i class="fa-brands fa-react fa-2xl"></i>`,
      node: `<i class="fa-brands fa-node-js fa-2xl"></i>`,
      vue: `<i class="fa-brands fa-vuejs fa-2xl"></i>`,
      js: `<i
      class="fa-brands fa-square-js fa-2xl"
      style="color: #000000"></i>`,
    },
    {
      id: 1,
      image: `assets/img/laptop.jpg`,
      tittle: `Judul 2`,
      timeProject: `18 days ago`,
      author: `Malik Mahdi`,
      desc: `ini deskirpsi 2`,
      react: `<i class="fa-brands fa-react fa-2xl"></i>`,
      js: `<i
      class="fa-brands fa-square-js fa-2xl"
      style="color: #000000"></i>`,
    },
    {
      id: 2,
      image: `assets/img/laptop.jpg`,
      tittle: `Judul 3`,
      timeProject: `1 year ago`,
      author: `Malik Mahdi`,
      desc: `ini deskirpsi 3`,
      node: `<i class="fa-brands fa-node-js fa-2xl"></i>`,
      vue: `<i class="fa-brands fa-vuejs fa-2xl"></i>`,
      js: `<i
      class="fa-brands fa-square-js fa-2xl"
      style="color: #000000"></i>`,
    },
    {
      id: 3,
      image: `assets/img/people1.jpg`,
      tittle: `Judul 4`,
      timeProject: `1 month 2 days ago`,
      author: `Malik Mahdi`,
      desc: `ini deskirpsi 4`,
      vue: `<i class="fa-brands fa-vuejs fa-2xl"></i>`,
      js: `<i
      class="fa-brands fa-square-js fa-2xl"
      style="color: #000000"></i>`,
    },
  ];
  res.render("project", { dataProj });
}

function projectDetail(req, res) {
  const { id } = req.params;
  res.render("project-detail", { id });
}

function testimonial(req, res) {
  res.render("testimonial");
}

function contact(req, res) {
  res.render("contact");
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

app.listen(port, () => {
  console.log(`Server berjalan di port ${port}`);
});
