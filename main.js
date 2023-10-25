const DOMselector = {
  form: document.querySelector("#form"),
  names: document.querySelector(".names"),
  dumbquotes: document.querySelector(".dumb-quotes"),
  h2s: document.querySelectorAll("h2"),
  button: document.querySelector("#button"),
  img: document.querySelector(".pics"),
};

DOMselector.form.addEventListener("submit", function (event) {
  event.preventDefault;
  function insertcard() {
    DOMselector.button.insertAdjacentHTML(
      "afterend",
      `
   
  <div class="display-card">
  <div class="card"> 
  <h2 class="display-name">${DOMselector.names.value}</h2>
  <h3 class="display-dumbquotes">${DOMselector.dumbquotes.value}</h3>
  <img src="${DOMselector.img.value}" alt="" class="pic">
  <button class="remove">Remove</button>
  </div>
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
});
