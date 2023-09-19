
const number = document.querySelector("#number");
const second = document.querySelector("#second");
const btn = document.querySelector(".btn");
const num = document.querySelector(".num");

btn.addEventListener("click", () => {
   setTimeout(() => {
  num.innerText = eval(`${num.innerText}+${number.value}`);
  }, `${second.value}000`);
 
})



