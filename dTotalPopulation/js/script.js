

// d . Print the total population of countries using reduce method

const API_URL = "https://restcountries.com/v3.1/all";

function reqListener() {
    const countriesData = JSON.parse(this.responseText);
    console.log(countriesData);


    //reduce

    const totalPopulation = countriesData.reduce(
        (accumulator, country) => accumulator + country.population,0);
        console.log("Total population of countries:", totalPopulation);
  
 }
  const req = new XMLHttpRequest();
  req.addEventListener("load", reqListener);
  req.open("GET", API_URL);
  req.send();

