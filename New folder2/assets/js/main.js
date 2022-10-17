// let test = document.getElementById("alma");
// test.addEventListener("click",()=>{
//    let test2 = document.getElementById("armud");
// //    test2.removeChild(test2.firstChild);
//    test2.append(test);
//    let test3 = document.getElementById("alca");
//    let test4 = document.getElementById("heyva");
//    test3.append(test4);
// });
 
// let help = document.getElementById("alca");
//     help.addEventListener("click",()=>{
//     // help.removeChild(help.firstChild);
//     let help2 = document.getElementsByClassName("big-div");
//     help.append(help2[0].firstChild);
//     help2[0].append(help.firstChild);
    
// });















let danger = document.getElementsByClassName("images");
danger[0].addEventListener("click",()=>{
    let succes = document.getElementById("armud");
    let change = document.getElementsByClassName("dov");
    change[0].append(succes.firstChild);succes.append(danger[0]);
   
}) 

let danger0 = document.getElementsByClassName("images0");
danger0[0].addEventListener("click",()=>{
    let succes0 = document.getElementById("armud");
    let change0 = document.getElementsByClassName("dov");
    change0[0].append(succes0.firstChild);succes0.append(danger0[0]);
}) 

let danger1 = document.getElementsByClassName("images1");
danger1[0].addEventListener("click",()=>{
    let succes0 = document.getElementById("armud");
    let change0 = document.getElementsByClassName("dov");
    change0[0].append(succes0.firstChild);succes0.append(danger1[0]);
}) 

let danger2 = document.getElementsByClassName("images2");
danger2[0].addEventListener("click",()=>{
    let succes0 = document.getElementById("armud");
    let change0 = document.getElementsByClassName("dov");
    change0[0].append(succes0.firstChild);succes0.append(danger2[0]);
}) 

let danger3 = document.getElementsByClassName("images3");
danger3[0].addEventListener("click",()=>{
    let succes0 = document.getElementById("armud");
    let change0 = document.getElementsByClassName("dov");
    change0[0].append(succes0.firstChild);succes0.append(danger3[0]);
}) 

let danger4 = document.getElementsByClassName("images4");
danger4[0].addEventListener("click",()=>{
    let succes0 = document.getElementById("armud");
    let change0 = document.getElementsByClassName("dov");
    change0[0].append(succes0.firstChild);succes0.append(danger4[0]);
}) 


//////////////////////////////////////////////2/////////////////

function mapp(x,y) {
    
    let alma=[];
   
    for (let index = 0; index < x.length; index++) { 
        alma[index] = x[index]*y;
    }
    return alma;
}



let arr = [1,2,3,4,5,6,7,8,9,10];
let array2 =mapp(arr,37);

console.log(array2);