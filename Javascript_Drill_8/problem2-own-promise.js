import fs from 'fs';

// Function to read file content asynchronously
function readFile(filePath) {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, "utf-8", (err, data) => {
            if (err) {
                reject(err);
            }
            console.log(`Successfully read file: ${filePath}`);
            resolve(data);
        });
    });
}

// Function to convert content to uppercase and save to a new file
function convertToUpperCase(content) {
    return new Promise((resolve, reject) => {
        content = content.toUpperCase();
        const newFileName = "upper-case.txt";
        fs.writeFile(newFileName, content, "utf-8", (err) => {
            if (err) {
                reject(err);
            }
            console.log(`Content converted to uppercase and saved to: ${newFileName}`);
            resolve(newFileName);
        });
    });
}

// Function to convert file content to lowercase and format it with line breaks
function convertToLowerCaseAndSentence(fileName) {
    return new Promise((resolve, reject) => {
        readFile(fileName)
            .then((data) => {
                data = data.toLowerCase().split(' ').join('\n');
                const newFileName = "lowercase-&-Sentence.txt";
                fs.writeFile(newFileName, data, "utf-8", (err) => {
                    if (err) {
                        reject(err);
                    }
                    console.log(`Content converted to lowercase and sentence format and saved to: ${newFileName}`);
                    resolve(newFileName);
                });
            })
            .catch((err) => {
                reject(err);
            });
    });
}

// Function to sort file content alphabetically and save to a new file
function sortingContent(fileName) {
    return new Promise((resolve, reject) => {
        readFile(fileName)
            .then((data) => {
                data = data.split('\n').sort().join('\n');
                const newFileName = "sort-content.txt";
                fs.writeFile(newFileName, data, "utf-8", (err) => {
                    if (err) {
                        reject(err);
                    }
                    console.log(`Content sorted alphabetically and saved to: ${newFileName}`);
                    resolve(newFileName);
                });
            })
            .catch((err) => {
                reject(err);
            });
    });
}

// Function to delete all files listed in a text file
function deleteAllFiles(fileName) {
    return new Promise((resolve, reject) => {
        readFile(fileName)
            .then((data) => {
                const files = data.split('\n');
                const promises = files.map((file) => {
                    return new Promise((resolve, reject) => {
                        fs.unlink(file, (err) => {
                            if (err) {
                                reject(err);
                            }
                            console.log(`Deleted file: ${file}`);
                            resolve();
                        });
                    });
                });
                Promise.all(promises).then(() => {
                    resolve("Successfully deleted all files.");
                });
            })
            .catch((err) => {
                reject(err);
            });
    });
}

export{readFile,convertToUpperCase,convertToLowerCaseAndSentence,sortingContent,deleteAllFiles}