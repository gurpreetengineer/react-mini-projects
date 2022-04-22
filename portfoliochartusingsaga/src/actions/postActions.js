import axios from "axios";

const fetchStocks = async () => {
  const response = await axios.get(
    "https://demo8900446.mockable.io/portfoliochartredux"
  );
  const stocksData = response.data;
  return stocksData;
};

export default fetchStocks;
