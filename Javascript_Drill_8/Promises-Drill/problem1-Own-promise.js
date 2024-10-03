import generateJsonData from "./random-json-data.js";
import fs from 'fs';

function createFile(dirPath, noOfFiles) {
    return new Promise((resolve, reject) => {
        fs.mkdir(dirPath, (err) => {
            if (err) {
                reject(err);
            }
        });
        for (let i = 0; i < noOfFiles; i++) {
            const generatedJSonData = generateJsonData();
            fs.writeFile(`${dirPath}/Json-File${i + 1}.json`, JSON.stringify(generatedJSonData, null, 2), "utf-8", (err) => {
                if (err) {
                    reject(err);
                }
            });
            console.log(`${dirPath}/Json-File${i + 1}.json`)
        }
        resolve("Succesfully created json file");
    });
}

function deleteFile(dirPath) {
    return new Promise((resolve, reject) => {
        fs.readdir(dirPath, (err, data) => {
            if (err) {
                reject(err);
            }
            const delete_files = data.map((file) => {
                return new Promise((resolve, reject) => {
                    fs.unlink(`${dirPath}/${file}`, (err) => {
                        if (err) {
                            reject(err);
                        }
                        console.log("Deleted Files...", file);
                        resolve();
                    })
                })
            })
            //waits for all deletions to complete before removing the directory
            Promise.all(delete_files)
                .then(() => {
                    fs.rmdir(dirPath, (err) => {
                        if (err) {
                            reject(err);
                        }
                    })
                    resolve("Successfully deleted all JSON files and directory")
                })
                .catch((err) => {
                    console.error("Error occured", err)
                })
        })
    })
}
export { createFile, deleteFile };

