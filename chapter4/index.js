const app = document.querySelector("#app"); //selecting the app id

let langs = ["js", "python", "java", "c++", "c#", "php"]; //array of languages


let nodes = langs.map((Prolamg)=>{
    let li = document.createElement("li"); //create createElement
    li.textContent = Prolamg;
    return li; //return the li element
})
app.append(...nodes);


















// const info = document.querySelector("#divId"); //select


// const h2 = document.createElement("h2"); //create createElement
// h2.textContent = "ths tag used for after method"; //element tvalue  text added


// info.after(h2); //added the eleement after the selected element




















