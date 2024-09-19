import fs from "fs";
import { convertToLowerCase, convertToUpperCase, deleteFiles, readFiles, sortContent } from "../Problem2.js";

const path = new URL("../lipsum.txt", import.meta.url);

readFiles(path, (error, data) => {
    if (error) {
        console.error("Error occured", error);
    }
    convertToUpperCase(data, (err, newFileName) => {
        if (err) {
            console.log(err);
        }
        else {
            console.log('Uppercase file created:', newFileName);
            fs.appendFile("./filename.txt", newFileName + "\n", (err) => {
                if (err) {
                    console.log(err);
                }
            })
            convertToLowerCase(newFileName, (err, newFileName) => {
                if (err) {
                    console.error(err);
                }
                else {
                    console.log('lowercase file created:', newFileName);
                    fs.appendFile("filename.txt", newFileName + "\n", (err) => {
                        if (err) {
                            console.error(err);
                        }
                    })
                    sortContent(newFileName, (err, newFileName) => {
                        if (err) {
                            console.error(err);
                        } else {
                            console.log('Sorted file created:', newFileName);
                            fs.appendFile("filename.txt", newFileName + "\n", (err) => {
                                if (err) {
                                    console.error(err);
                                }
                            })
                            deleteFiles("filename.txt",(err,data)=>{
                                if(err){
                                     console.error(err);
                                }
                                else{
                                    console.log(data);
                                }
                            })
                        }

                    })
                }
            })
        }
    })
})