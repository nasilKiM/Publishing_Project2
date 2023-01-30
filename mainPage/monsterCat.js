let btn1 = document.querySelector(".btn1");
// console.log(btn1);
// console.log(btn1.children);

let btn2 = document.querySelector(".btn2");

btn1.addEventListener("mouseover", () => {
  for (let el of btn1.children) {
    console.log(el);
    el.style.color = "black";
  }
});

btn1.addEventListener("mouseout", () => {
  for (let el of btn1.children) {
    console.log(el);
    el.style.color = "white";
  }
});

btn2.addEventListener("mouseover", () => {
  for (let el of btn1.children) {
    console.log(el);
    el.style.color = "black";
  }
});

btn2.addEventListener("mouseout", () => {
  for (let el of btn1.children) {
    console.log(el);
    el.style.color = "white";
  }
});
