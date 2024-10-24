// TODO: increment and decrement the count when the buttons are clicked
const counter = document.querySelector(".counter")
console.dir(counter)
const count = document.querySelector("#count")

const increment = document.querySelector("#increment")
const decrement = document.querySelector("#decrement")

increment.addEventListener("click",()=>{
    count.innerText ++;
})

decrement.addEventListener("click",()=>{
    count.innerText --
})

