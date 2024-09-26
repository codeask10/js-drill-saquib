import { createFile, deleteFile } from "../problem1-Own-promise.js";

const dir_name="random-json-data";
const noOfFiles=3;

console.log("Creating Json file in random-json-data folder.....");
createFile(dir_name,noOfFiles)
.then(()=>{
    console.log("Deleting Json files from random-json-data folder......");
    return deleteFile(dir_name);
})
.then((message)=>{
    console.log(message);
})
.catch((err)=>{
    console.error(err);
})