const DOMselector = {
  form: document.querySelector("#form"),
  textbox: document.querySelector(".first-name"),
  h2s: document.querySelectorAll("h2"),
  //select the text box
  //select all the h2
};
DOMselector.form.addEventListener("submit", function (event) {
  event.preventDefault;
  console.log(DOMselector.textbox.value);
});
