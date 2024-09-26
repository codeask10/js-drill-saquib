import fs from "node:fs/promises";
import generateJsonData from "./random-json-data.js";

const createDirectory=async(dir_path,noOfFiles)=>{
    try {
        await fs.mkdir(dir_path);
        console.log(`Directory created: ${dir_path}`);

        for(let i =0;i<noOfFiles;i++){
            const randomJsonData=generateJsonData();
            const fileName=`json-file-${i+1}.json`
            await fs.writeFile(`${dir_path}/${fileName}`,JSON.stringify(randomJsonData,null,2),"utf-8");
            console.log(`Created random json file at:${dir_path}/${fileName}`);
        }
        console.log("Successfully created all files");

    } catch (error) {
        console.error('Error creating JSON files:');
        throw error
    }
}

const deleteFiles=async(dir_name)=>{
    try {
        const files=await fs.readdir(dir_name);
        files.forEach(async(file)=>{
            const deleteFilePath=`${dir_name}/${file}`
            await fs.unlink(deleteFilePath);
            console.log("Deleted file: ",deleteFilePath);
        })
        await fs.rmdir(dir_name);
        console.log("Successfully deleted all files simultaneously");

    } catch (error) {
        console.error("Error occured deleting files");
        throw error;
    }
}

export {createDirectory,deleteFiles}