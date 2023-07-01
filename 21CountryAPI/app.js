const inputEl = document.querySelector("#input");
const searchButton = document.querySelector("#search");
const flag = document.querySelector("#flag");
const country = document.querySelector("#country");
const capital = document.querySelector("#capital");
const currency = document.querySelector("#currency");
const continent = document.querySelector("#continent");
const population = document.querySelector("#population");
const timeZone = document.querySelector("#timezone");
const languages = document.querySelector("#languages");
const countryDetails = document.querySelector("#country-details");
const wrongCountry = document.querySelector("#wrong-country");

inputEl.focus();

if (inputEl.value === "") {
  countryDetails.style.display = "none";
  wrongCountry.style.display = "none";
}

async function displayCountry() {
  const response = await fetch(
    `https://restcountries.com/v3.1/name/${inputEl.value}`
  );
  const country_data = await response.json();

  if (response.status === 404) {
    countryDetails.style.display = "none";
    wrongCountry.style.display = "block";
    inputEl.value = "";
    inputEl.focus();
  } else {
    console.log(country_data);

    countryDetails.style.display = "flex";
    wrongCountry.style.display = "none";
    inputEl.value = "";
    inputEl.focus();

    flag.src = country_data[0].flags.svg;

    country.innerHTML = `${country_data[0].name.common}`;

    capital.innerHTML = `Capital : <b>${country_data[0].capital[0]}</b>`;

    continent.innerHTML = `Continent : <b>${country_data[0].region}</b>`;

    population.innerHTML = `Population : <b>${country_data[0].population}</b>`;

    currency.innerHTML = `Currency: <b>${
      country_data[0].currencies[Object.keys(country_data[0].currencies)].name
    } - ${Object.keys(country_data[0].currencies)[0]}</b>`;

    timeZone.innerHTML = `Timezone : <b>${country_data[0].timezones[0]}</b>`;

    languages.innerHTML = `Languages : <b>${Object.values(
      country_data[0].languages
    )
      .toString()
      .split(",")
      .join(", ")}</b>`;
  }
}

searchButton.addEventListener("click", () => {
  displayCountry();
});
