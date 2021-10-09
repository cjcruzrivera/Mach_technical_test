import fetch from "node-fetch";

export async function getData(height) {
  try {
    const response = await fetch("https://mach-eight.uc.r.appspot.com/");
    const data = await response.json();

    let exists = false;
    let results = [];

    data.values.map((player) => {
      if (parseInt(player.h_in) >= height) {
        const fullname = player.first_name + " " + player.last_name;
        results.push(fullname);
        console.log(fullname);
        exists = true;
      }
    });

    if (!exists) {
      console.log("No matches found");
    }

    return results;
  } catch (error) {
    console.log("Api error");
    return "Error";
  }
}
