// let info = document.querySelector("#app")

// let myLanguage = ["js", "py", "es", "c"]

// let nodes = myLanguage.map((para) => {
//     let li = document.createElement("li");
//     li.textContent = para;
//     return li;
// })

// info.prepend(...nodes);




//part2

// let app = document.querySelector("#app")

// app.insertAdjacentHTML("beforebegin", "<h1>before ul list</h1>")
// app.insertAdjacentHTML("afterbegin", "<li>home page</li>")
// app.insertAdjacentHTML("beforeend", "<li>sign up now</li>")
// app.insertAdjacentHTML("afterend", "<h2>after ul list</h2>")


//part3 replace

// let menu = document.querySelector("#menu");

// let h1 = document.createElement("h1");
// h1.textContent = "home";

// menu.replaceChild(h1,menu.firstElementChild)


//part4 clone node
// let menu = document.querySelector("#menu");

// let cloneMenu = menu.cloneNode(true);
// cloneMenu.id = "small-menu";
// document.body.appendChild(cloneMenu);


//part5 remove node
// let menu = document.querySelector("#menu");

// menu.removeChild(menu.lastElementChild);

// menu.innerHTML = ""


// part6 insert before/after
function insertAfter(newNode, referenceNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}

let app = document.querySelector("#menu");

let li = document.createElement("li");
li.textContent = "home";

// app.insertBefore(li, app.firstElementChild);


insertAfter(li, app.lastElementChild);















