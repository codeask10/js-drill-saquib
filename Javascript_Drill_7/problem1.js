import generateJsonData from './random-JSON-data.js';
import fs from 'fs';
function createfile(dirPath,noOfJSONFiles,callback){
    fs.mkdir(dirPath,(err)=>{
        if(err){
            callback(err);
        }
    });
    for(let i =0;i<noOfJSONFiles;i++){
        const generatedJSONData=generateJsonData();
        const filepath=new URL(`${dirPath}\\file${i+1}.json`, import.meta.url);
        fs.writeFile(filepath,JSON.stringify(generatedJSONData,null,2),(err)=>{
            if(err){
                callback(err);
            }
            if(i===noOfJSONFiles-1){
                callback(null);
            }
        })
    }    
}
function deleteFiles(dirPath,callback){
    fs.readdir(dirPath,(err,data)=>{
        if(err){
            callback(err);
        }
        let deletionTask=data.map((file)=>{
            const fileUrl=dirPath+"\\"+file;
            fs.unlink(new URL(fileUrl,import.meta.url),(err)=>{
                if(err){
                    callback(err);
                }
            })
        })
        let count=0;
        fs.rmdir(new URL(dirPath,import.meta.url),(err)=>{
            if(err){
                callback(err);
            }
        })
        deletionTask.forEach(file=>{
            if(++count===deletionTask.length){
                callback(null,"Sucessfully Deleted");
            }
        })
    })
}

export {createfile,deleteFiles}