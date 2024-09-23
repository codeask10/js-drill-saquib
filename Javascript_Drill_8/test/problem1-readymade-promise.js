import { createfile, deleteFiles } from "../problem1-readyMade-promise.js";

createfile("random_json_data", 3)
  .then(() => deleteFiles("random_json_data"))
  .then(() => console.log("Successfully created and deleted JSON files and directory"))
  .catch((error) => console.error("Overall error:", error));