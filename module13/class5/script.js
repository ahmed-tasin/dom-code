const content = ()=> {
    const content = document.querySelector("#content");
    const hash = window.location.hash.substring(1);




    switch (hash) {
    case "home":
    content.innerHTML = "<h1>Home Page</h1>";
    break;
    case "about":       
    content.innerHTML = "<h1>About Page</h1>";
    break;  
    case "contact": 
    content.innerHTML = "<h1>Contact Page</h1>";
    break;
    }


}


window.addEventListener("hashchange", content);





















