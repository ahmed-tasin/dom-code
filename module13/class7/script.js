


// const myButton = document.querySelector('#myButton');


// myButton.addEventListener('click', ()=> {
//     alert('Button clicked!');
// });


// const event = new Event("click");
// myButton.dispatchEvent(event);

document.addEventListener("Notify", ()=> {
    alert('Custom event triggered!');
});


const myButton = document.querySelector('#myButton');

myButton.addEventListener('click', ()=> {
    let event = new CustomEvent("Notify");

    document.dispatchEvent(event);
});















