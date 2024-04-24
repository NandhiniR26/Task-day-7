

// a . Get all the countries from Asia continent /region using Filter method


const API_URL = "https://restcountries.com/v3.1/all";

  function reqListener() {
      const countriesData = JSON.parse(this.responseText);
  
    //filter
    const asiaCountries = countriesData.filter((country) => country.region === "Asia");
    console.log("Countries in Asia:", asiaCountries);
         
    }
    const req = new XMLHttpRequest();
    req.addEventListener("load", reqListener);
    req.open("GET", API_URL);
    req.send();
  

  