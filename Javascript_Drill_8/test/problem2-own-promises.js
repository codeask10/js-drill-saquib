import fs from "fs";
import { convertToLowerCaseAndSentence, convertToUpperCase, deleteAllFiles, readFile, sortingContent } from "../problem2-own-promise.js";

const filePath="lipsum.txt";
const fileName="fileName.txt"

// Main workflow: read, convert, sort, and delete files
readFile(filePath)
.then((data)=>{
    return convertToUpperCase(data)
})
.then((newFileName)=>{
    fs.appendFile(fileName,newFileName,(err)=>{
        if(err)console.error(err)
    });
    return convertToLowerCaseAndSentence(newFileName);
})
.then((newFileName)=>{
    fs.appendFile(fileName,"\n"+newFileName,(err)=>{
        if(err)console.error(err)
    });
    return sortingContent(newFileName);
})
.then((newFileName)=>{
    fs.appendFile(fileName,"\n"+newFileName,(err)=>{
        if(err)console.error(err)
    });
    return deleteAllFiles(fileName);
})
.then((message)=>{
    console.log(message);
})
.catch((err)=>{
    console.error("OverAll Error Occurred ",err);
})
