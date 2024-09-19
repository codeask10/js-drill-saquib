import fs from 'fs';

function readFiles(path, callback) {
    fs.readFile(path, (err, data) => {
        if (err) {
            callback(err);
        }
        else {
            callback(null, data.toString());
        }
    });
}

function convertToUpperCase(content, callback) {
    const data = content.toUpperCase();
    // const file_path=new URL("./upper_case.txt",import.meta.url);
    fs.writeFile("upper_case.txt", data, (err) => {
        if (err) {
            console.error(err);
        }
        callback(null, ("upper_case.txt"));
    })
}
function convertToLowerCase(path, callback) {
    readFiles(path, (err, data) => {
        if (err) {
            callback(err);
        }
        const lowercaseData = data.toLowerCase();
        const sentences = lowercaseData.split(' ').join('\n');
        const newFileName = "lowercase.txt"
        fs.writeFile(newFileName, sentences, (err) => {
            if (err) {
                callback(err);
            }
            else {
                callback(null, newFileName);
            }
        })
    })
}

function sortContent(path,callback){
    readFiles(path,(err,data)=>{
        if(err){
            callback(err);
        }
        const sortedData=data.split('\n').sort().join('\n');
        const fileNamePath="sort_content.txt";
        fs.writeFile(fileNamePath,sortedData,(err)=>{
            if(err){
                callback(err);
            }
            else{
                callback(null,fileNamePath);
            }
        })
    })
}
function deleteFiles(path,callback){
    readFiles(path,(err,data)=>{
        if(err){
            callback(err);
        }

        const file_names=data.split('\n').filter(Boolean);
        const deltedFiles=file_names.map((fileName)=>{
            fs.unlink(fileName, (err)=>{
                if(err){
                    callback(err);
                }
            })
        })
        let count=0;
        deltedFiles.forEach(element => {
            if(++count===deltedFiles.length){
                callback(null,"Sucessfully Deleted all the files");
            } 
        });
    })
}

export {readFiles,convertToUpperCase,convertToLowerCase,sortContent,deleteFiles};