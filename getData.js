import fetch from "node-fetch";

export async function getData(height) {
  try {
    const response = await fetch("https://mach-eight.uc.r.appspot.com/");
    const data = await response.json();

    let hashMap = {};
    let results = [];
    data.values.map((player) => {
      const fullname = player.first_name + " " + player.last_name;

      if (hashMap[player.h_in]) {
        hashMap[player.h_in].forEach(element => {
          results.push([element, fullname]);
          console.log(`- ${element} \t ${fullname}`);
        });
      }

      if(!hashMap[height - player.h_in]){
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
