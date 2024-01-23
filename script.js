// async function exibirProdutos() {
//   const resposta = await fetch('dados.json');
//   const dadosJson = await resposta.json();
//   const container = document.getElementById("container-products");

//   if (dadosJson) {
//     const products = dadosJson.map(item => item);

//     container.innerHTML = products.map((item) => {
//       let { name, image, price } = item;
//       return `
//         <div class="product">
//           <img src=${image} />
//           <p>${name}</p>
//           <span>${price}</span>
//           <button id="add-to-cart-btn">Adicionar ao Carrinho</button>
//         </div>
//       `;
//     }).join("");
//   }
// }

// exibirProdutos();




fetch('./dados.json')
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById("container-products");

    if (data) {
      const products = data.map(item => item);

      container.innerHTML = products.map((item) => {
        let { name, image, price } = item;
        return `
          <div class="product">
            <img src=${image} />
            <p>${name}</p>
            <span>${price}</span>
            <button id="add-to-cart-btn" class="add-to-cart-btn">Adicionar ao Carrinho</button>
          </div>
        `;
      }).join("");
    }
  });




const divHeader = document.getElementById("div-header")
const navActive = document.getElementById("nav-active")

divHeader.addEventListener("click", () => {
  navActive.classList.toggle("active")
});





const navUl = document.getElementById("container-carrinho")
document.addEventListener("click", (event) => {
  const targetElement = event.target;

  if (targetElement.classList.contains("add-to-cart-btn")) {
    const target = targetElement.closest(".product")

    const img = target.querySelector("img").src
    const name = target.querySelector("p").innerText
    const price = target.querySelector("span").innerText



    navUl.innerHTML += `
      <li>
        <img src=${img} />
        <div>
        <p>${name}</p>
        <span>${price}</span>
        </div>
        <span class="material-symbols-outlined remove" id="removeTodo">
        close
        </span>
      </li>
    `
  } else if (targetElement.classList.contains("remove")) {
    const targetLi = targetElement.closest("li")

    targetLi.remove("")
  }
});


