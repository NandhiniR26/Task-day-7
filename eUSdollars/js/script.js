

// e . Print the country that uses US dollars as currency.


const API_URL = "https://restcountries.com/v3.1/all";

function reqListener() {
    const countriesData = JSON.parse(this.responseText);
    console.log(countriesData);

   for ( let ind = 0; ind<countriesData.length; ind++) {
    if(countriesData[ind].currencies?.USD) {
        console.log("country name:", countriesData[ind].name.common);
    }
   }
   
  
 }
  const req = new XMLHttpRequest();
  req.addEventListener("load", reqListener);
  req.open("GET", API_URL);
  req.send();