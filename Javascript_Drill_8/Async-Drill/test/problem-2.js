import fs from 'node:fs/promises';
import { convertLowerCaseAndSentence, convertUpperCase, deleteAllFile, readFile, sortFileData } from '../problem-2.js';

(async function () {
    try {
        const addNewFileName = "filename.txt"

        const filePath = "lipsum.txt";

        console.log("Reading file lipsun.txt.....")
        const data = await readFile(filePath);

        console.log("After reading, converting the content into uppercase.....")
        let newFileName = await convertUpperCase(data);
        await fs.appendFile(addNewFileName, newFileName);

        console.log("After converting uppercase, converting the content into lowercase and sentence.....")
        newFileName = await convertLowerCaseAndSentence(newFileName);
        await fs.appendFile(addNewFileName, "\n" + newFileName);

        console.log("After lowercase and sentence format, sorting the content.....")
        newFileName = await sortFileData(newFileName);
        await fs.appendFile(addNewFileName, "\n" + newFileName);

        console.log("After sorting , deleting all the new files that are mentioned in that list simultaneously.....")
        const message = await deleteAllFile(addNewFileName);
        console.log(message);

    } catch (error) {
        console.error("Error occur", error);
    }
})();