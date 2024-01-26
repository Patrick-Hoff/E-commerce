let numberCart = 0;
const quantityProducts = document.getElementById("quantity-products")

function numbers() {
  quantityProducts.textContent = numberCart
}



fetch('./dados.json')
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById("container-products");

    if (data) {
      const products = data.map(item => item);

      document.getElementById("search").addEventListener("input", (event) => {
        const targetToLower = event.target.value.toLowerCase()
        const filterProducts = products.filter((item) => {
          return (
            item.name.toLowerCase().includes(targetToLower)
          )
        }); if ( filterProducts.length > 0 ) {
          itemsVariable(filterProducts)
        } else {
          container.innerHTML = `<span class="filter-not-products-json">Não ha produtos com esse nome</span>`
        }
      })

      const itemsVariable = (items) => {
        container.innerHTML = items.map((item) => {
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
      }; itemsVariable(products)
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

    numberCart++
    numbers()

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

    numberCart--
    numbers()
  }
  if (!event.target.closest("nav") && !event.target.classList.contains("cart") && !event.target.classList.contains("remove")) {
    navActive.classList.remove("active");
  }
});


