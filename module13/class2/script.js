// const clickMe = document.querySelector("#clickMe");


// clickMe.addEventListener("mousedown", ()=> {
//     console.log("Mouse down event triggered!");
// })


// clickMe.addEventListener("mouseup", ()=> {
//     console.log("Mouse up event triggered!");
// })



// clickMe.addEventListener("click", ()=> {
//     console.log("Mouse up event clicked!");
// })





// clickMe.addEventListener("dblclick", ()=> {
//     console.log("Mouse up event dubbleclicked!");
// })




const clickMe = document.querySelector("#clickMe");
const changeColor = document.querySelector("#changeColor"); 
    let body = document.querySelector("body");
let text = document.querySelector("#text");








clickMe.addEventListener("click", () => {


    body.style.backgroundColor = "black"

})


changeColor.addEventListener("click", () => {

    body.style.backgroundColor = "white"
})





text.addEventListener("dblclick", () => {

text.style.color = "red";

})


