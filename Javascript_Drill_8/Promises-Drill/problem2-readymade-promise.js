import fs from 'node:fs/promises';

function readFile(path) {
    return fs.readFile(path)
        .then((data) => {
            return data.toString();
        })
        .catch((err) => { throw err });
}

function convertToUpperCase(content) {
    const upperCase = content.toUpperCase();
    const upperCaseFileName = "upperCaseData.txt";
    return fs.writeFile(upperCaseFileName, upperCase, "utf-8")
        .then(() => { return upperCaseFileName })
        .catch((error) => { throw error });

}
function convertToLowerCaseAndSentence(filePath) {
    const newFileName = "lowercaseWithSentence.txt"
    return readFile(filePath)
        .then((data) => {
            const contentWithSentence = data.toLowerCase().split(' ').join('\n');
            fs.writeFile(newFileName, contentWithSentence, "utf-8")
        })
        .then(() => {
            return newFileName;
        })
        .catch((err) => { throw err })
}

function sortContent(filePath) {
    const newFileName = "sort_content.txt"
    return readFile(filePath)
        .then((data) => {
            const sorted_data = data.split('\n').sort().join('\n');
            return fs.writeFile(newFileName, sorted_data, "utf-8").catch((err) => { throw err });
        })
        .then(() => { return newFileName })
        .catch((err) => { throw err });

}
function deleteFile(fileName) {
    return fs.unlink(fileName)
        .then(() => {
            console.log("SuccessFully deleted", fileName);
        })
        .catch(err => { throw err });
}
function deleteAllFiles(fileName) {
    return readFile(fileName)
        .then((data) => {
            console.log("Read file successfully:", fileName);
            const files = data.split('\n') // Filter out any empty lines
            const deletePromises = files.map(file => {
                return deleteFile(file);
            });
            return Promise.all(deletePromises); // Wait for all delete operations to complete
        })
        .then(() => {
            return "Successfully Deleted All files";
        })
        .catch((err) => {
            throw err; // Rethrow the error to handle it in the calling code
        });
}

export { readFile, convertToUpperCase, convertToLowerCaseAndSentence, sortContent, deleteAllFiles }