//DOM in javascript
document.title="DOM In JavaScript";
document.body.style.backgroundColor="lightblue";
document.getElementById("header").innerHTML="Hello, World!";
document.getElementById("para").style.color="white";
document.getElementById("para").style.fontSize="30px";
document.getElementById("para").innerHTML="Welcome to DOM manipulation";
document.getElementsByTagName("h1")[1].style.color="cyan";
let branch=document.getElementsByClassName("cse");
branch[0].style.color="yellow";
branch[1].style.color="green";
branch[2].style.color="magenta";
branch[3].style.color="orange";
document.querySelector(".dept").style.color="white";
let depts=document.querySelectorAll(".dept");
depts[1].style.color="pink";
depts[2].style.color="violet";
depts[3].style.color="brown";
// function changeBackground() {
//     document.body.style.backgroundColor="red";
//     alert("The Background Color Has Been Changed To Red");
// }
// function changeBackground() {
//     if (document.body.style.backgroundColor==="red") {
//         document.body.style.backgroundColor="green";
//         // alert("The Background Color Has Been Changed To Green");
//     }
//     else if (document.body.style.backgroundColor==="green") {
//         document.body.style.backgroundColor="blue";
//         // alert("The Background Color Has Been Changed To Blue");
//     } 
//     else {
//         document.body.style.backgroundColor="red";
//         // alert("The Background Color Has Been Changed To Red");
//     }
// }
function changeBackground() {
    document.body.style.backgroundColor = document.body.style.backgroundColor === "lightblue" ? "red" : "Green" ;
    // alert("The Background Color Has Been Changed");
}
function changetext() {
    document.getElementById("clg").innerHTML = "CMRCET";
    document.getElementById("clg").style.color = "white";
    document.getElementById("clg").style.backgroundColor="coral";
    document.getElementById("clg").style.padding = "20px";
    document.getElementById("clg").style.border = "2px";
    document.getElementById("clg").style.textAlign = "center";
    document.getElementById("clg").style.fontSize = "20px";
}