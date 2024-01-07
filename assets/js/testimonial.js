class Testi {
  constructor(image, review, author) {
    this.image = image;
    this.review = review;
    this.author = author;
  }

  html() {
    return ` <div class="card-project">
    <div class="col-card-img">
      <img src="${this.image}" alt="Malik Picture" />
    </div>
    <div class="col-card-2">
      <div class="card-text">
        <p class="text-quote"><i>"${this.review}"</i></p>
      </div>

      <div class="card-text-author">
        <p class="author-name">${this.author}</p>
      </div>
    </div>
  </div>`;
  }
}

// Mengambil nilai turunan dari class Testi
class CardFirst extends Testi {
  getValue() {
    return `${this.image} ${this.quote} ${this.author}`;
  }
}

// Bisa menggunakan class parentnya(Testi) atau anakannya(CardFirst)
let testimonial1 = new Testi(
  "assets/img/people1.jpg",
  "Keren bangettt",
  "Agun"
);
let testimonial2 = new Testi("assets/img/people1.jpg", "Good job", "Alif");
let testimonial3 = new Testi(
  "assets/img/people1.jpg",
  "Suka sekali",
  "Firdaus"
);
let testimonial4 = new Testi("assets/img/people1.jpg", "Sangat baik", "Malik");
let testimonial5 = new Testi(
  "assets/img/people1.jpg",
  "Mantap deh pokoknya",
  "Lukman"
);
// let testimonial6 = new CardFirst("assets/img/people1.jpg", "Waw", "Enang");

let testimonials = [
  testimonial1,
  testimonial2,
  testimonial3,
  testimonial4,
  testimonial5,
];
console.info(testimonials);

let testimonialHtml = "";
for (let index = 0; index < testimonials.length; index++) {
  testimonialHtml += testimonials[index].html();
}
document.getElementById("myTestimonial").innerHTML = testimonialHtml;
