const num = document.querySelector(".num");
const second = document.querySelector(".second");
const dab = document.querySelector(".dabaf");
const num1 = document.querySelector(".num1");




dab.addEventListener('click', ()=>{
  let nemm = 0;
  nemm = num.value
  num1.innerHTML = nemm;
  console.log(nemm);
})