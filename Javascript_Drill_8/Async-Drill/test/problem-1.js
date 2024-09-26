import { createDirectory, deleteFiles } from "../problem-1.js";

(async function () {
    try {
        const dir_name='random-json-data';
        const noOfFiles=3;
        await createDirectory(dir_name,noOfFiles ); // Call the function to create 3 JSON files
        await deleteFiles(dir_name);
    } catch (error) {
        console.error("Error occured",error)
    }
})();