const element = document.querySelector("#colheader");

element.addEventListener("mouseover", event => {
  alert("Mouse in");
});

element.addEventListener("mouseout", event => {
  console.log("Mouse out");
});
