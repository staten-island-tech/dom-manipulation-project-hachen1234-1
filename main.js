const DOMselector = {
  form: document.querySelector("#form"),
  names: document.querySelector(".names"),
  dumbquotes: document.querySelector(".dumb-quotes"),
  h2s: document.querySelectorAll("h2"),
  button: document.querySelector("#addbtn"),
  img: document.querySelector(".pics"),
  dbtn: document.querySelector(".remove"),
};
DOMselector.form.addEventListener("submit", insertcard);

function insertcard(event) {
  event.preventDefault();
  DOMselector.button.insertAdjacentHTML(
    "afterend",
    `
<div class="display-card">
<div class="card"> 
<h2 class="display-name">${DOMselector.names.value}</h2>
<h3 class="display-dumbquotes">${DOMselector.dumbquotes.value}</h3>
<img src="${DOMselector.img.value}" alt="" class="pics">
<button class="remove">Remove</button>
</div>
</div>
`
  );
  function clear() {
    DOMselector.names.value = "";
    DOMselector.dumbquotes.value = "";
    DOMselector.img.value = "";
  }
  clear();
  function del() {
    document.querySelectorAll(".remove").forEach((element) =>
      element.addEventListener("click", function (e) {
        e.target.parentElement.remove(insertcard);
      })
    );
  }
  del();
}
