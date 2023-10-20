const DOMselector = {
  form: document.querySelector("#form"),
  names: document.querySelector(".names"),
  age: document.querySelector(".age"),
  dumbquotes: document.querySelector(".dumb-quotes"),
  h2s: document.querySelectorAll("h2"),
  button: document.querySelector("#button"),
};
DOMselector.button.addEventListener("click", function (event) {
  event.preventDefault;
  function insertcard() {
    DOMselector.form.insertAdjacentHTML(
      "afterend",
      `
  <div class="display-card">
  
  <h1 class="display-name" src="${DOMselector.names.value}/>
  <h2 class="display-age">${DOMselector.age.value}</h2>
  <h3 class="display-dumbquotes">${DOMselector.dumbquotes.value}</h3>
  <button onclick"clear" class="remove">Remove</button>
  </div>
  `
    );
  }
  insertcard();
  document.querySelectorAll(".remove").forEach((element) =>
    element.addEventListener("click", function (e) {
      e.target.parentElement.remove(insertcard);
    })
  );
  clear();
});
