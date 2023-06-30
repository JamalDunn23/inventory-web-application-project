const form = document.getElementById("user_input");
let ul = document.querySelector("ul");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  //prevents default major tool used to delay refresh to page

  let li = document.createElement("li");
  let name = form.querySelector("#name").value;
  let price = form.querySelector("#price").value;
  let inStock = form.querySelector("#stock").value;
  let image = form.querySelector("#img").value;
  let shirtColor = form.querySelector("#shirt-color").value;

  li.innerHTML = `<h3>Name: </h3> <p> ${name} </p>
  <h3>Price:<h3/> <p>${price}<p>
  <h3>In Stock:</h3> <p>${inStock}</p>
<h3>Color:<h3/><p>${shirtColor}</p>
  <img src = ${image} alt="image" /> `;

  ul.append(li);
});

form.addEventListener("delete", (e) => {
  e.preventDefaulr();
});
