// initial readings
let ratings = {
  onePlus: 4.7,
  samsung: 2.3,
  redmi: 3.6,
  iqoo: 4.2,
  realme: 4.5,
};

// Check if ratings exist in local storage and retrieve them
if (localStorage.getItem("ratings")) {
  ratings = JSON.parse(localStorage.getItem("ratings"));
}

// total stars
const starsTotal = 5;

// run getRatings when DOM loads
document.addEventListener("DOMContentLoaded", getRatings);

// form elements
const productSelect = document.getElementById("product-select");
const ratingControl = document.getElementById("rating-control");

// init product
let product;

// Product select change
productSelect.addEventListener("change", (e) => {
  product = e.target.value;
  // enable rating control
  ratingControl.disabled = false;
  ratingControl.value = ratings[product];
});

// rating control change
ratingControl.addEventListener("blur", (e) => {
  const rating = e.target.value;

  // Make sure 5 or under
  if (rating > 5) {
    alert("Please rate 1-5");
    return;
  }

  // Change rating
  ratings[product] = rating;

  // Save ratings to local storage
  localStorage.setItem("ratings", JSON.stringify(ratings));

  getRatings();
});

// get ratings
function getRatings() {
  for (let rating in ratings) {
    // get %age value
    const starPercentage = (ratings[rating] / starsTotal) * 100;

    // round to nearest 10
    const starPercentageRounded = `${Math.round(starPercentage / 10) * 10}%`;

    // set width of stars-inner to %age
    document.querySelector(`.${rating} .stars-inner`).style.width =
      starPercentageRounded;

    // Add number rating
    document.querySelector(`.${rating} .number-rating`).innerHTML =
      ratings[rating];
  }
}
