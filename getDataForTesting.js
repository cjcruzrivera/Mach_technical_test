

async function getData(height) {
  try {
    height = parseInt(height)
    
    if (isNaN(height)) {
      return "Please provide a valid height";
    }

    const data = require('./testData.json')
    let hashMap = {};
    let results = [];
    data.values.map((player) => {
      const fullname = player.first_name + " " + player.last_name;

      if (hashMap[player.h_in]) {
        hashMap[player.h_in].forEach(element => {
          results.push([element, fullname]);
        });
      }

      if (!hashMap[height - player.h_in]) {
        hashMap[height - player.h_in] = []
      }

      hashMap[height - player.h_in].push(fullname);
    });

    if (results.length == 0) {
      console.log("No matches found");
    }

    return results;
  } catch (error) {
    console.log("Api error");
    console.log(error);
    return "Error";
  }
}

module.exports = getData;
