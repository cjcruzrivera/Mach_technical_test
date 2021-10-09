import { getData } from './getData.js';

const height = parseInt(process.argv[2]);

if (isNaN(height)) {
  console.log("Please provide a valid height");
  process.exit(1);
}

getData(height)
