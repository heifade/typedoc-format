'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var fs = require('fs');
require('path');

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

function __awaiter$1(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator$1(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}
/**
 * 是否是目录
 *
 * @export
 * @param {string} dir
 * @returns
 */
function isDirectory(dir) {
    return fs.statSync(dir).isDirectory();
}

/**
 * 递归指定目录下的所有子目录，找出所有文件
 *
 * @export
 * @param {string} path - 指定目录
 * @returns
 */
function getAllFiles(path$$1) {
    return __awaiter$1(this, void 0, void 0, function () {
        return __generator$1(this, function (_a) {
            return [2 /*return*/, getAllFilesSync(path$$1)];
        });
    });
}
/**
 * 递归指定目录下的所有子目录，找出所有文件，(同步)
 *
 * @export
 * @param {string} path - 指定目录
 * @returns
 */
function getAllFilesSync(path$$1) {
    path$$1 = path$$1.replace(/\/$/, "");
    var files = fs.readdirSync(path$$1);
    var fileList = [];
    for (var _i = 0, files_1 = files; _i < files_1.length; _i++) {
        var file = files_1[_i];
        var fileFullName = path$$1 + "/" + file;
        if (isDirectory(fileFullName)) {
            fileList = fileList.concat(getAllFilesSync(fileFullName + "/"));
        }
        else {
            fileList.push("" + fileFullName);
        }
    }
    return fileList;
}
/**
 * 以utf8编码读取文件,(同步)
 *
 * @export
 * @param {string} fileName
 * @returns
 */
function readFileUtf8Sync(fileName) {
    return fs.readFileSync(fileName, { encoding: "utf-8" });
}
/**
 * 以utf8编码读取文件,(同步)
 *
 * @export
 * @param {string} fileName
 * @param {string} content
 */
function saveFileUtf8Sync(fileName, content) {
    fs.writeFileSync(fileName, content, { encoding: "utf-8" });
}

var renameFileList = [];
function rename(fileName) {
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
function renameFile(path$$1) {
    return __awaiter(this, void 0, void 0, function () {
        var fileList, _i, fileList_1, fileName, toName;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, getAllFiles(path$$1)];
                case 1:
                    fileList = _a.sent();
                    for (_i = 0, fileList_1 = fileList; _i < fileList_1.length; _i++) {
                        fileName = fileList_1[_i];
                        toName = rename(fileName);
                        if (fileName != toName) {
                            fs.renameSync(fileName, toName);
                            renameFileList.push({
                                sourceName: fileName.substr(fileName.lastIndexOf("/") + 1),
                                targetName: toName.substr(toName.lastIndexOf("/") + 1)
                            });
                        }
                    }
                    return [2 /*return*/];
            }
        });
    });
}
/**
 * 在文件中更新文件引用
 *
 * @param {string} path
 */
function replaceFile(path$$1) {
    return __awaiter(this, void 0, void 0, function () {
        var fileList, _i, fileList_2, fileName, content;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, getAllFiles(path$$1)];
                case 1:
                    fileList = _a.sent();
                    for (_i = 0, fileList_2 = fileList; _i < fileList_2.length; _i++) {
                        fileName = fileList_2[_i];
                        if (fileName.endsWith(".html") || fileName.endsWith(".js") || fileName.endsWith(".htm")) {
                            content = readFileUtf8Sync(fileName);
                            renameFileList.map(function (h) {
                                content = content.replace(new RegExp(h.sourceName, "g"), h.targetName);
                            });
                            saveFileUtf8Sync(fileName, content);
                        }
                    }
                    return [2 /*return*/];
            }
        });
    });
}
/**
 * typedoc生成的文件，发到github中gh-pages 里，文件名如果包含"_"会有问题。
 * 此方法是将文件名的"_"替换成"."并更新所有相并引用
 *
 * @export
 * @param {string} docPath
 */
function format(docPath) {
    (function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, renameFile(docPath)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, replaceFile(docPath)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    })()
        .then()["catch"](function (err) {
        console.log(err);
    });
}

exports.format = format;
