

// c . Print the following details name, capital, flag, using forEach method

const API_URL = "https://restcountries.com/v3.1/all";

function reqListener() {
    const countriesData = JSON.parse(this.responseText);

    //for each
      countriesData.forEach((country)=> {
        console.log("Name:",country.name.common)
        console.log("Capital:",country.capital)
        console.log("Flag:",country.flags.png)
       });
  }
  const req = new XMLHttpRequest();
  req.addEventListener("load", reqListener);
  req.open("GET", API_URL);
  req.send();
