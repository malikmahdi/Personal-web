const janji = new Promise((resolve, reject) => {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://api.npoint.io/138098154e7a6e3e3724", true);
  xhr.onload = () => {
    if (xhr.status === 200) {
      console.info(xhr.response);
      resolve(JSON.parse(xhr.response));
    } else {
      reject("Gagal");
    }
  };
  xhr.onerror = () => {
    reject(alert("Jaringan bermasalah"));
  };
  xhr.send();
});

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

async function allTestimonial() {
  let testimonialHtml = ``;
  const testimonialData = await janji;
  console.info(testimonialData);

  testimonialData.forEach((item) => {
    testimonialHtml += html(item);
  });
  document.getElementById("myTestimonial").innerHTML = testimonialHtml;
}
allTestimonial();

async function testimonialClick(rating) {
  let testimonialHtml = ``;
  const testimonialData = await janji;
  console.info(testimonialData);

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
