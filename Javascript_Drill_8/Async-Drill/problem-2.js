import fs from 'node:fs/promises';

const readFile = async (filePath) => {
    try {
        const data = await fs.readFile(filePath, "utf-8");
        return data;
    } catch (error) {
        console.error("Error occured reading file");
        throw error;
    }
}
const convertUpperCase = async (data) => {
    try {
        const upperCaseData = data.toUpperCase();
        const newFileName = "upper-case.txt";
        await fs.writeFile(newFileName, upperCaseData, "utf-8");
        return newFileName;

    } catch (error) {
        console.error("Error occured converting upper case");
        throw error;
    }

}
const convertLowerCaseAndSentence = async (filePath) => {
    try {
        let data = await readFile(filePath);
        data = data.toLowerCase().split(" ").join('\n');
        const newFileName = "lower-case-and-sentence.txt";
        await fs.writeFile(newFileName, data, "utf-8");
        return newFileName;
    } catch (error) {
        console.error("Error occured converting lower case and sentence");
        throw error;
    }
}

const sortFileData = async (filePath) => {
    try {
        let data = await readFile(filePath);
        data = data.split('\n').sort().join('\n');
        const newFileName = "sortContent.txt";
        await fs.writeFile(newFileName, data, "utf-8");
        return newFileName;

    } catch (error) {
        console.error("Error occured sorting the file data");
        throw error;
    }
}

const deleteAllFile = async (filePath) => {
    try {
        let data = await readFile(filePath);
        console.log("Read file successfully:", filePath);
        data = data.split('\n');
        const promises = await data.map(async (file) => {
            await fs.unlink(file);
            console.log("Deleted file....", file)
        });
        await Promise.all(promises);

        return "Deleted All files simultaneously";


    } catch (error) {
        console.error("Error occured deleting the file");
        throw error;
    }
}

export{readFile,convertUpperCase,convertLowerCaseAndSentence,sortFileData,deleteAllFile};