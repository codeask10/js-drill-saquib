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
    return fs.readFile(filePath, "utf-8")
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
    return fs.readFile(filePath, "utf-8")
        .then((data) => {
            const sorted_data = data.split('\n').sort().join('\n');
            fs.writeFile(newFileName, sorted_data, "utf-8")
        })
        .then(() => { return newFileName })
        .catch((err) => { throw err });

}

function deleteAllFiles(fileName) {
    return fs.readFile(fileName, "utf-8")
        .then((data) => {
            console.log("Read file successfully:", fileName);
            const files = data.split('\n') // Filter out any empty lines
            const deletePromises = files.map(file => {
                return fs.unlink(file)
                    .then(() => {
                        console.log("Deleted file:", file);
                    })
                    .catch((err) => {
                        console.error("Error deleting file:", file, err);
                        // Optionally rethrow the error to propagate it
                        throw err;
                    });
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

export {readFile,convertToUpperCase,convertToLowerCaseAndSentence,sortContent,deleteAllFiles}