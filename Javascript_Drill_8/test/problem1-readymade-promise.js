import { createfile, deleteFiles } from "../problem1-readyMade-promise.js";

const dir_name = "random-json-data";
const noOfFiles = 3;

console.log("Creating Json file in random-json-data folder.....");

createfile(dir_name, noOfFiles)
  .then(() => deleteFiles(dir_name))
  .then(() => console.log("Successfully created and deleted JSON files and directory"))
  .catch((error) => console.error("Overall error:", error));