var a = 1;
var b = 2;
var c = 3;
var d = 4;
export{a,b,c,d}
export default {
    a,b,c,d                       //default只能暴露一个  可向外暴露任何形式的变量s
};
// export {
//     a,b             //export 一个模块可以有多个export  可以暴露多个变量  必须以对象解构赋值这种形式  不支持其他形式
// };
// export {
//     c,d
// };