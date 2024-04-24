

// b . Get all the countries with a population of less than 2 lakhs using Filter method


const API_URL = "https://restcountries.com/v3.1/all";

function reqListener() {
    const countriesData = JSON.parse(this.responseText);

     //filter
     const populationLessThan2Lakh = countriesData.filter((country) => country.population < 200000 );
     console.log( "Countries with population less than 2 lakhs:",populationLessThan2Lakh);
       
  }
  const req = new XMLHttpRequest();
  req.addEventListener("load", reqListener);
  req.open("GET", API_URL);
  req.send();


