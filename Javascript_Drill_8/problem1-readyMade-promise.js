import fs from 'node:fs/promises';
import generateJsonData from './random-json-data.js';

function createfile(dirPath, noOfJSONFiles) {
  return fs.mkdir(dirPath)
    .then(() => {
      const fileWritePromises = [];
      for (let i = 0; i < noOfJSONFiles; i++) {
        const generatedJSONData = generateJsonData();
        const filepath = `${dirPath}/file${i + 1}.json`;

        fileWritePromises.push(
          fs.writeFile(filepath, JSON.stringify(generatedJSONData, null, 2))
            .then(() => {
              console.log(`successfully created json file${i + 1}`);
            })
            .catch((err) => {
              console.error("Error occurred during file creation:", err);
            })
        );
      }

      return Promise.all(fileWritePromises);
    })
    .catch((err) => {
      console.error("Error occurred during directory creation:", err);
    });
}

function deleteFiles(dirPath) {
  return fs.readdir(dirPath)
    .then((data) => {
      const deletePromises = data.map((file) => {
        return fs.unlink(`${dirPath}/${file}`)
          .then(() => console.log("Deleted file:", file))
          .catch((error) => console.error("Error occurred during file deletion:", error));
      });

      return Promise.all(deletePromises)
        .then(() => {
          return fs.rmdir(dirPath)
            .then(() => {
              console.log("Successfully deleted directory:", dirPath);
            })
            .catch((error) => {
              console.error("Error occurred during directory deletion:", error);
            });
        });
    })
    .catch((err) => {
      console.error("Error occurred during file reading or directory deletion:", err);
    });
}

export {createfile,deleteFiles};