const DOMselector = {
  form: document.querySelector("#form"),
  names: document.querySelector(".names"),
  dumbquotes: document.querySelector(".dumb-quotes"),
  h2s: document.querySelectorAll("h2"),
  button: document.querySelector("#button"),
  img: document.querySelector(".pics"),
};

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
  insertcard();
  document.querySelectorAll(".remove").forEach((element) =>
    element.addEventListener("submit", function (e) {
      e.target.parentElement.remove(insertcard);
    })
  );
}
DOMselector.form.addEventListener("submit", insertcard);
