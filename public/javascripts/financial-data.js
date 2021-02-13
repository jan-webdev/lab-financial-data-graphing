// const getCountryInfo = countryName => {
//     axios
//       .get(`https://restcountries.eu/rest/v2/name/${countryName}`)
//       .then(response => {
//         console.log('Response from API is: ', response);
//         const countryDetail = response.data[0];
//         console.log('a single country details: ', countryDetail);
//       })
//       .catch(err => console.log(err));
//   };

  const getPrice = bitCoinPriceUSD => {
    axios
      .get(`http://api.coindesk.com/v1/bpi/historical/close.json`)
      .then(response => {
        console.log('Response from API is: ', response['\'bpi\'']);
        // document.getElementById("demo").innerHTML = ;
  console.log("response 1", response);
  console.log("response 1.1", response["2021-01-13"]);
  console.log("response 2", response[2020-10-19]);
  console.log("response 3", response["bpi"]["2020-10-19"]);
        console.log('a single country details: ', bitcoinPriceBPerDay);
  
      })
  
      .catch(err => console.log(err));
  
  };
  
   
  
  document.getElementById('get-country-btn').addEventListener('click', () => {
       getPrice();
  
  });

