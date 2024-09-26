import { convertToLowerCaseAndSentence, convertToUpperCase, deleteAllFiles, readFile, sortContent } from "../problem2-readymade-promise.js"

import fs from 'node:fs/promises';

const path = "lipsum.txt";

console.log("Reading file lipsun.txt.....")

readFile(path)
    .then((data) => {
        console.log("After reading, converting the content into uppercase.....")
        
        return convertToUpperCase(data)
    })
    .then((newFile) => {
        console.log("After converting uppercase, converting the content into lowercase and sentence.....")

        fs.appendFile("fileName.txt", newFile).catch((err) => { throw err });

        return convertToLowerCaseAndSentence(newFile)
    })
    .then((newFile) => {
        console.log("After lowercase and sentence format, sorting the content.....")

        fs.appendFile("fileName.txt", "\n" + newFile).catch((err) => { throw err });

        return sortContent(newFile);
    })
    .then((newFile) => {
        console.log("After sorting , deleting all the new files that are mentioned in that list simultaneously.....")

        fs.appendFile("fileName.txt", "\n" + newFile).catch((err) => { throw err });

        return deleteAllFiles("fileName.txt");
    })
    .then((message) => {
        console.log(message);
    })
    .catch((err) => {
        console.error(err);
    })