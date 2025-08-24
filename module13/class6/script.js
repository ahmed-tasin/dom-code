
const menu = document.querySelector("#menu");



menu.addEventListener("click", (event)=> {
    let targrt = event.target;

    switch(targrt.id) {
        case "home":
            console.log("Home clicked");
            break;          
        case "about":
            console.log("About clicked");
            break;
        case "report": 
            console.log("report clicked");
            break;

    }

})











