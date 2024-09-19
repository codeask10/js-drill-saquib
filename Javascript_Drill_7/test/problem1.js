import { createfile, deleteFiles} from "../problem1.js";

const dirPath = new URL('random_json_files',import.meta.url);
createfile(dirPath,3,(err)=>{
    if(err){
        console.error(err);
    }
    else{
        console.log("Succesfully Created Json file in directory");
        deleteFiles(dirPath,(err)=>{
            if(err){
                console.error("Error occured:",err);
            }
            else{
                console.log("Succesfully deleted")
            }
        })
    }
});