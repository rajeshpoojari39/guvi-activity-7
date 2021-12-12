var request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all");
request.send();
request.onload = function () {
  var Countriesdata = JSON.parse(this.response);
  var AsiaRegionCountriesdata = Countriesdata.filter(
    (country) => country.region === "Asia"
  );

  //Asia region Countries
  AsiaRegionCountriesdata.map((country) =>
    console.log(
      `Country Name - ${country.name.official}, Region - ${country.region}`
    )
  );

  //Countries with Population less than 2 lakh
  var populationLessThen2Lakh = Countriesdata.filter(
    (country) => country.population < 200000
  );

  populationLessThen2Lakh.map((country) =>
    console.log(
      `Country Name - ${country.name.official}, Population - ${country.population}`
    )
  );

  //Country Name with Capital Name and Flag
  Countriesdata.forEach((country) => {
    console.log(
      `Country Name - ${country.name.official}, Capital - ${country.capital}, Flag - ${country.flag}`
    );
  });

  // Total Population of the World
  var totalPolulation = Countriesdata.reduce((total, country) => {
    return total + country.population;
  }, 0);

  console.log(`Total Population - ${totalPolulation}`);
};

var request2 = new XMLHttpRequest();
request2.open("GET", "https://restcountries.com/v2/currency/usd");
request2.send();
request2.onload = function () {
  var countriesCurrencyUSD = JSON.parse(this.response);

  //Country with uses USD as currency
  countriesCurrencyUSD.map((country) => {
    console.log(
      `Country name - ${country.name} , Currency - ${country.currencies.map(
        (currency) => currency.name
      )}`
    );
  });
};
