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
        results.push([hashMap[player.h_in], fullname]);
        console.log(`- ${hashMap[player.h_in]} \t ${fullname}`);
      }
      
      hashMap[height - player.h_in] = fullname;
    });

    if (results.length == 0) {
      console.log("No matches found");
    }

    return results;
  } catch (error) {
    console.log("Api error");
    return "Error";
  }
}
