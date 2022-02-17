const API_URL = 'https://api.coincap.io/v2/assets';

const fetchCrypto = async () => {
  // const response = await fetch(API_URL);
  // const data = await fetch(response.json());
  // console.log(data.data);

  const coins = await fetch(API_URL)
  .then((response) => response.json())
  .then((data) => data.data);
  
  

  console.log(coins);
};



window.onload = () => fetchCrypto();