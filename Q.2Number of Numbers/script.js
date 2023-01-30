let str = "This is the javascript 123";

// let s = 0;
// let n = 0;
let data = str.split(" ");
// console.log(sp);
// for (let i = 0 ; i < sp.length ; i++ ){
//     if(Number.isInteger(i)){
//         s += 1;
//     }else{
//         n += 1;
//     }
//     console.log(i);
// }
// console.log(s);
// console.log(n);
// let text="This is the javascript";
// let data=text.split("")

const counteNames = data.reduce((allNames, name) => {
    const currCount = allNames[name] ?? 0;
    return {
      ...allNames,
      [name]: currCount + 1,
    };
  },[]);
console.log(counteNames);