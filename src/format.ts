// 替换 doc 目录下面所有"_" 打头的文件
import { renameSync, readFileSync, writeFileSync } from "fs";
import { getAllFiles } from "fs-i";

let renameFileList: {
  sourceName: string;
  targetName: string;
}[] = [];
function rename(fileName: string) {
  return fileName
    .replace(/\/_/, "/")
    .replace(/_\//g, "/")
    .replace(/\/_/g, "/")
    .replace(/_\./g, ".")
    .replace(/_/g, ".");
  // .replace(/_(.)/g, (word, a, b, c) => {
  //   return a.toUpperCase();
  // });
}

/**
 * 遍历目录，重命名所有带"_"的文件
 * 
 * @param {string} path 
 */
async function renameFile(path: string) {
  let fileList = await getAllFiles(path);
  for (let fileName of fileList) {
    var toName = rename(fileName);

    if (fileName != toName) {
      renameSync(fileName, toName);
      renameFileList.push({
        sourceName: fileName.substr(fileName.lastIndexOf("/") + 1),
        targetName: toName.substr(toName.lastIndexOf("/") + 1)
      });
    }
  }
}

/**
 * 在文件中更新文件引用
 * 
 * @param {string} path 
 */
async function replaceFile(path: string) {
  let fileList = await getAllFiles(path);
  for (let fileName of fileList) {
    if (
      fileName.endsWith(".html") ||
      fileName.endsWith(".js") ||
      fileName.endsWith(".htm")
    ) {
      var content = readFileSync(fileName, "utf-8");
      renameFileList.map(h => {
        content = content.replace(new RegExp(h.sourceName, "g"), h.targetName);
      });
      writeFileSync(fileName, content);
    }
  }
}

/**
 * typedoc生成的文件，发到github中gh-pages 里，文件名如果包含"_"会有问题。
 * 此方法是将文件名的"_"替换成"."并更新所有相并引用
 * 
 * @export
 * @param {string} docPath 
 */
export function format(docPath: string) {
  (async function() {
    await renameFile(docPath);
    await replaceFile(docPath);
  })()
    .then()
    .catch(err => {
      console.log(err);
    });
}
