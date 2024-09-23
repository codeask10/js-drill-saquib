import { createFile, deleteFile } from "../problem1-Own-promise.js";

console.log("Creating Json file in random-json-data folder.....");
createFile("random-json-data", 3)
    .then((res) => {
        console.log(res);
        console.log("Deleting Json files from random-json-data folder......");
        deleteFile("random-json-data")
            .then((res) => {
                console.log(res);
            })
            .catch((error) => {
                console.error("Error Occurred during deleting files", error);
            })
    })
    .catch((err) => {
        console.error("Error Occured", err);
    });