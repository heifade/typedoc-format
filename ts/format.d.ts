/**
 * typedoc生成的文件，发到github中gh-pages 里，文件名如果包含"_"会有问题。
 * 此方法是将文件名的"_"替换成"."并更新所有相并引用
 *
 * @export
 * @param {string} docPath
 */
export declare function format(docPath: string): void;
