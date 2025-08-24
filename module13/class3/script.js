// const input = document.querySelector("#input");        
// const text = document.querySelector("#text");

// input.addEventListener("keypress", (e)=> {
// text.innerHTML += e.key;
// })


// const scrollExample = document.querySelector("#scrollExample");


let control = document.querySelector("#control");


control.addEventListener("click", function (e) {
    let div = document.getElementById("scrollDemo")
    // console.log(scrollExample)
    let target = e.target;

    switch(target.id){
        case "btnScrollLeft":
            div.scrollLeft += 50;
            break;
        case "btnScrollTop":
            div.scrollTop += 50;
            break;
    }

    
})





























