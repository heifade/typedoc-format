"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const fs_i_1 = require("fs-i");
let renameFileList = [];
function rename(fileName) {
    return fileName
        .replace(/\/_/, "/")
        .replace(/_\//g, "/")
        .replace(/\/_/g, "/")
        .replace(/_\./g, ".")
        .replace(/_/g, ".");
}
function renameFile(path) {
    return __awaiter(this, void 0, void 0, function* () {
        let fileList = yield fs_i_1.getAllFiles(path);
        for (let fileName of fileList) {
            var toName = rename(fileName);
            if (fileName != toName) {
                fs_1.renameSync(fileName, toName);
                renameFileList.push({
                    sourceName: fileName.substr(fileName.lastIndexOf("/") + 1),
                    targetName: toName.substr(toName.lastIndexOf("/") + 1)
                });
            }
        }
    });
}
function replaceFile(path) {
    return __awaiter(this, void 0, void 0, function* () {
        let fileList = yield fs_i_1.getAllFiles(path);
        for (let fileName of fileList) {
            if (fileName.endsWith(".html") ||
                fileName.endsWith(".js") ||
                fileName.endsWith(".htm")) {
                var content = fs_1.readFileSync(fileName, "utf-8");
                renameFileList.map(h => {
                    content = content.replace(new RegExp(h.sourceName, "g"), h.targetName);
                });
                fs_1.writeFileSync(fileName, content);
            }
        }
    });
}
function format(docPath) {
    (function () {
        return __awaiter(this, void 0, void 0, function* () {
            yield renameFile(docPath);
            yield replaceFile(docPath);
        });
    })()
        .then()
        .catch(err => {
        console.log(err);
    });
}


format('./docs');