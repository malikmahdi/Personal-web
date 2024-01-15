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
  return `
  <div class="col-lg-4 col-sm-12 col-card" >
  <div class="card rounded-0 shadow border-0 px-4 pt-4">
    <img src="${item.image}" class="" alt="..." />
    <div class="card-body p-0 my-3">
      <p class="card-text text-secondary fst-italic">
      ${item.review}
      </p>
      <div class="text-end">
        <p>${item.author}</p>
        <h5 class="text-end mb-0">
        ${item.rating} <i class="fa-solid fa-star fa-sm" style="color: #000"></i>
        </h5>
      </div>
    </div>
  </div>
</div>`;
}

function load() {
  return `
  <div class="loader"></div>
  `;
}

async function allTestimonial() {
  document.getElementById("myTestimonial").innerHTML = load();

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
    testimonialHtml = `<div class="alert-text pb-5 ">
      <h3 class="text-alert fw-bolder fs-1">404 NOT FOUND &#x1F62A;</h3>
    </div>`;
  } else {
    console.info("Data terfilter : ", filterTestimonial);
    filterTestimonial.forEach((item) => {
      testimonialHtml += html(item);
    });
  }
  document.getElementById("myTestimonial").innerHTML = testimonialHtml;
}
