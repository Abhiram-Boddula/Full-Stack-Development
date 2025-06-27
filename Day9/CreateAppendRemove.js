// Create Append Remove Elements Example In JavaScript
let aish=document.createElement("p");
aish.textContent="I'm Chitti";
aish.innerHTML="Memory 1 Tera Byte";
aish.style.color="brown";
aish.style.fontFamily="arial";
aish.style.textAlign="center";
aish.style.fontSize="30px";
document.getElementById("vasi").appendChild(aish);

let rem= document.getElementsByClassName("list")[0];
rem.remove();

setTimeout(()=>{
    let re = document.getElementsByClassName("list")[3];
    if (re) {
        re.remove();
    }
}, 2000);

let newHeading=document.createElement("h2");
newHeading.innerHTML = "This is a new heading added by JavaScript";
newHeading.style.color="purple";
document.body.appendChild(newHeading);

setTimeout(()=>{
    let newText = document.createElement("p");
    newText.textContent = "This text is added after two seconds!";
    newText.style.color = "green";
    document.body.appendChild(newText);
}, 2000);

let tagText = document.createElement("p");
tagText.textContent="This is appended to the tag!";
tagText.style.color="orange";
document.getElementById("vasi").appendChild(tagText);

let myList =document.createElement("ul");
for(let i=1;i<=3;i++) {
    let listitems = document.createElement("li");
    listitems.textContent="Item"+i;
    listitems.style.color="blue";
    listitems.style.fontSize="18px";
    myList.appendChild(listitems);
}
document.body.appendChild(myList);
