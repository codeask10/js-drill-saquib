import { convertToLowerCaseAndSentence, convertToUpperCase, deleteAllFiles, readFile, sortContent } from "../problem2-readymade-promise.js"
import fs from 'node:fs/promises';

const path="lipsum.txt";

console.log("Reading file lipsun.txt.....")
readFile(path)
    .then((data) => {
        console.log("After reading, converting the content into uppercase.....")
        convertToUpperCase(data)
            .then((fileName) => {
                fs.appendFile("fileName.txt", fileName)
                console.log("After converting uppercase, converting the content into lowercase and sentence.....")
                // After converting to uppercase, append the filename and proceed converting to lowercase and sentence format
                convertToLowerCaseAndSentence(fileName)
                    .then((fileName) => {
                        fs.appendFile("fileName.txt", "\n" + fileName)
                        console.log("After lowercase and sentence format, sorting the content.....")
                        // After converting to lowercase and sentence format, append the filename and proceed to sorting 
                        sortContent(fileName)
                            .then((fileName) => {
                                // After sorting, append the filename and proceed to delete all new files
                                fs.appendFile("fileName.txt", "\n" + fileName)
                                console.log("After sorting , deleting all the new files that are mentioned in that list simultaneously.....")
                                deleteAllFiles("fileName.txt")
                                    .then((message) => {
                                        console.log(message);
                                    })
                                    .catch((err) => {
                                        console.error("Error occured during deleting files ",err);
                                    });
                            })
                            .catch((err)=>{
                                console.error("Error occured during sorting content",err)
                            })
                    })
                    .catch((err)=>{
                        console.error("Error occured during converting lowercase and sentence",err)
                    })
            })
            .catch((err)=>{
                console.error("Error occured during converting uppercase",err);
            })
    })
    .catch((err) => {
        console.error("Overall error occured", err);

    })