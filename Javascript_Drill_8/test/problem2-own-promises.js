import fs from "fs";
import { convertToLowerCaseAndSentence, convertToUpperCase, deleteAllFiles, readFile, sortingContent } from "../problem2-own-promise.js";

// Main workflow: read, convert, sort, and delete files
readFile("lipsum.txt")
    .then((data) => {
        console.log("Converting content to uppercase...");
        convertToUpperCase(data)
            .then((fileName) => {
                fs.appendFile("fileName.txt", fileName, (err) => {
                    if (err) {
                        console.error(err);
                    }
                    console.log(`Appended filename ${fileName} to fileName.txt`);
                });
                
                console.log("Converting content to lowercase and sentence format...");
                convertToLowerCaseAndSentence(fileName)
                    .then((fileName) => {
                        fs.appendFile("fileName.txt", "\n" + fileName, (err) => {
                            if (err) {
                                console.error(err);
                            }
                            console.log(`Appended filename ${fileName} to fileName.txt`);
                        });

                        console.log("Sorting content...");
                        sortingContent(fileName)
                            .then((fileName) => {
                                fs.appendFile("fileName.txt", "\n" + fileName, (err) => {
                                    if (err) {
                                        console.error(err);
                                    }
                                    console.log(`Appended filename ${fileName} to fileName.txt`);
                                });

                                console.log("Deleting all files listed in fileName.txt...");
                                deleteAllFiles("fileName.txt")
                                    .then((message) => {
                                        console.log(message);
                                    })
                                    .catch((err) => {
                                        console.error("Error occurred during file deletion", err);
                                    });
                            })
                            .catch((err) => {
                                console.error("Error occurred during sorting content", err);
                            });
                    })
                    .catch((err) => {
                        console.error("Error occurred during converting to lowercase and sentence format", err);
                    });
            })
            .catch((err) => {
                console.error("Error occurred during converting to uppercase", err);
            });
    })
    .catch((err) => {
        console.log("Error occurred during reading the file", err);
    });
