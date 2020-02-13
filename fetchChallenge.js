const axios = require("axios");
const sorter = require("sort-nested-json");

const url =
  "https://curio-hosting.s3-ap-southeast-2.amazonaws.com/animals.json";

const displayData = async url => {
  try {
    const response = await axios.get(url);
    const data = response.data;
    const filteredData = data.filter(item => item.pets != null);
    
    filteredData.map(item => {
      console.log(item.gender);
      let onlyCats = item.pets.filter(item => item.type == "Cat");
      onlyCats = sorter.sort(onlyCats).asc("name");
      onlyCats.map(item => {
        console.log(" -" + item.name);
      });
    });
  } catch (error) {
    console.log(error);
  }
};

displayData(url);
