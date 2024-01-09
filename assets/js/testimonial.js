const testimonialData = [
  {
    author: "Agun",
    review: "Keren bangetttt",
    image: `assets/img/people1.jpg`,
    rating: 5,
  },
  {
    author: "Alif",
    review: "Lumayan",
    image: `assets/img/people1.jpg`,
    rating: 3,
  },
  {
    author: "Firdaus",
    review: "Saya kurang suka",
    image: `assets/img/people1.jpg`,
    rating: 1,
  },
  {
    author: "Malik",
    review: "Tidak masalah",
    image: `assets/img/people1.jpg`,
    rating: 3,
  },
  {
    author: "Lukman",
    review: "Mantap pokoknya",
    image: `assets/img/people1.jpg`,
    rating: 5,
  },
];

function html(item) {
  return `<div class="card-project">
  <div class="col-card-img">
    <img src="${item.image}" alt="Malik Picture" />
  </div>
  <div class="col-card-2">
    <div class="card-text">
      <p class="text-quote"><i>"${item.review}"</i></p>
    </div>

    <div class="card-text-author">
      <p class="author-name">${item.author}</p> 
      <h5>${item.rating} <i class="fa-solid fa-star fa-sm" style="color: #000;"></i></h5> 
    </div>
  </div>
</div>`;
}

function allTestimonial() {
  let testimonialHtml = ``;

  testimonialData.forEach((item) => {
    testimonialHtml += html(item);
  });
  document.getElementById("myTestimonial").innerHTML = testimonialHtml;
}
allTestimonial();

function testimonialClick(rating) {
  let testimonialHtml = ``;

  const filterTestimonial = testimonialData.filter((item) => {
    return item.rating === rating;
  });
  if (filterTestimonial.length === 0) {
    testimonialHtml = `<div class="alert-text">
      <h3 class="text-alert">404 NOT FOUND &#x1F62A;</h3>
    </div>`;
  } else {
    console.info("Data terfilter : ", filterTestimonial);
    filterTestimonial.forEach((item) => {
      testimonialHtml += html(item);
    });
  }
  document.getElementById("myTestimonial").innerHTML = testimonialHtml;
}
