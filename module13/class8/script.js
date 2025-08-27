// const btn = document.querySelector("#btn");

// const radioButton = document.querySelectorAll('input[type="radio"]');

// const output = document.querySelector("#output");

// // console.log(radioButton);


// btn.addEventListener("click", () => {
//     let selectedLanguage;
//     for(const RadioBTN of radioButton)
//     {
//         if(RadioBTN.checked)
//         {
//             selectedLanguage = RadioBTN.value;
//             break;
//         }
//     }

//     output.innerHTML = selectedLanguage ;
// });


//*2nd


// const accept = document.querySelector("#accept");


// accept.addEventListener("click", ()=> {
//     accept.checked = true;

//     if(accept.checked){
//     alert("You are accepted");
// }

// });



//*3rd


const LanguageName = document.querySelector("#LanguageName");

const btn = document.querySelector("#btn");


btn.addEventListener("click", () => {

    alert(LanguageName.value);
}); 





