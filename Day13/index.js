// const getPromise=()=>{
//     return new Promise ((resolve, reject)=>{
//         console.log("I'am a Promise");
//         resolve("Promise resolved");
//         reject("Something went wrong");
//     });
// }
// let result = getPromise();
// result
// .then(data => {
//     console.log(data);
// });
// result
// .catch(error =>{
//     console.error("Error occurred:",error);
// });



// function asyncFunc1(){
//     return new Promise ((resolve, reject)=>{
//         setTimeout(()=>{
//             console.log("data1");
//             resolve("success");
//         }, 2000);
//     });
// }
// function asyncFunc2(){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             console.log("data2");
//             resolve("success");
//         }, 4000);
//     });
// }
// console.log("fetching data 1....");
// let p1=asyncFunc1();
// p1.then((data)=>{
//     console.log("Data fetched:",data);
//     console.log("fetching data 2....");
//     let p2=asyncFunc2();
//     p2.then((data)=>{
//         console.log("Data fetched:",data);
//     });
// });



// function getData(id) {
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             console.log("Fetching data for id:", id);
//             resolve(id);
//         }, 1000);
//     });
// }
// async function fetchData() {
//     try {
//         const data1 = await getData(101);
//         console.log("First fetch:", data1);
//         const data2 = await getData(102);
//         console.log("Second fetch:", data2);
//         const data3 = await getData(103);
//         console.log("Third fetch:", data3);
//     }catch (error) {
//         console.error("Error occurred:", error);
//     };
// }
// fetchData();
// async function getnextdata() {
//     console.log("getting data1....");
//     await getData(1);
//     console.log("getting data 2....");
//     await getData(2);
//     console.log("getting data 3....");
//     await getData(3);
// }
// getnextdata();