//processinfor进程信息

/**
 * process.pid进程的id值，唯一标识
 * process.platform查询使用平台
 * process.argv获取命令行参数
 *               是一个数组，默认有两个数组元素  【0】表示的是node的可执行文件所在路径
 *                                            【1】表示当前执行脚本文件所在的路径
 *                                             【2】2以后的表示的是传入的命令行参数
 * process.cwd()当前标本执行的路径
 * 
 */
console.log(process.pid);

console.log(process.platform);

console.log(process.argv);