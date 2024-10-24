// TODO: get a reference to the .box element and log it to the console
// query selector takes a valid css selector
const box = document.querySelector(".box")
console.dir(box)
// box.style.backgroundColor="red"

// TODO: add an event listener to the .box element that toggles the .left class
    box.addEventListener("toggle",()=>{
        box.classList.toggle(".left")
    })
// TODO: get a reference to #button, #txt and #output
const button = document.querySelector("#button")
const text = document.querySelector("#txt")
const output = document.querySelector("#output")
// TODO: add an event listener to the #button that changes the text in #output to the lowercase value of #txt
button.addEventListener("click",()=>{
    output.innerText = text.value.toLowerCase();
})

