shoppingCard = document.getElementsByClassName("nav-Card-Shop")[0];
console.log(shoppingCard);
list = document.querySelector(".list");
console.log(list);

// open close shopping card

function openShoppingCard() {
  if (shoppingCard.style.display == "none") {
    shoppingCard.style.display = "block";
  }
}
function closeShoppingCard() {
  if (shoppingCard.style.display != "none") {
    shoppingCard.style.display = "none";
  }
}

// data products database

products = [
  {
    category: "POPULAR HOUSE PLANT",
    name: "CLASSIC PEACE LILY",
    image: "../image/p1.png",
    price: 130,
  },
  {
    category: "POPULAR HOUSE PLANT",
    name: "CLASSIC PEACE LILY",
    image: "../image/p2.png",
    price: 73,
  },
  {
    category: "POPULAR HOUSE PLANT",
    name: "CLASSIC PEACE LILY",
    image: "../image/p3.png",
    price: 63,
  },
  {
    category: "POPULAR HOUSE PLANT",
    name: "PRODUCT NAME 4",
    image: "../image/p4.png",
    price: 40,
  },
  {
    category: "POPULAR HOUSE PLANT",
    name: "CLASSIC PEACE LILY",
    image: "../image/p1.png",
    price: 30,
  },
  {
    category: "POPULAR HOUSE PLANT",
    name: "CLASSIC PEACE LILY",
    image: "../image/p3.png",
    price: 20,
  },
];

function displayData() {
  products.forEach((product, key) => {
    let newDiv = document.createElement("article");
    newDiv.classList.add("Card");
    newDiv.innerHTML = `
    <div class="card-tumb">
    <img src="${product.image}" alt="" />
  </div>
  <div class="card-details">
    <span class="product-catagory">${product.category}</span>
    <h2>${product.name}</h2>
   
    <div class="product-bottom-details">
      <div class="product-price">${product.price}</div>
      <div class="product-links">
        <a href=""> <i class="fas fa-edit"></i></a>
        <a href=""> <i class="fa-solid fa-trash"></i></a>
        <a href=""><i class="fa fa-shopping-cart"></i></a>
      </div>
    </div>
  </div>
    `;
    list.appendChild(newDiv);
  });
}
displayData();
function addToCard(key) {
  if (listCards[key] == null) {
    // copy product form list to list card
    //****JSON.stringify() takes a JavaScript object and
    //transforms it into a JSON string.
    //****JSON.parse() takes a JSON string and transforms
    //it into a JavaScript object.
    listCards[key] = JSON.parse(JSON.stringify(products[key]));
    console.log(listCards);
    listCards[key].quantity = 1;
  }
  reloadCard();
}

function reloadCard() {
  listCard.innerHTML = "";
  let count = 0;
  let totalPrice = 0;
  listCards.forEach((value, key) => {
    totalPrice = totalPrice + value.price;
    count = count + value.quantity;
    if (value != null) {
      let newDiv = document.createElement("li");
      newDiv.classList.add("listCardli");
      newDiv.innerHTML = `
      <div class="img-list">
    <img src="../image/${value.image}" alt="" />
  </div>
    <div class="data-li">
    <div class="product-catagory"> ${value.category} </div>
    <h2> ${value.name} </h2>
    <div class="product-price"> ${value.price.toLocaleString()} dt </div>
    <div class="increment-prod"> <button onclick="changeQuantity( ${key}, ${
        value.quantity - 1
      })">-</button>
          <div style="color:black"> ${value.quantity} </div>
          <button onclick="changeQuantity( ${key}, ${
        value.quantity + 1
      })">+</button>
    </div>
    </div>
    `;
      listCard.appendChild(newDiv);
    }
  });
  total.innerText = totalPrice.toLocaleString();
  quantity.innerText = count;
}
function changeQuantity(key, quantity) {
  if (quantity == 0) {
    delete listCards[key];
  } else {
    listCards[key].quantity = quantity;
    listCards[key].price = quantity * products[key].price;
  }
  reloadCard();
}
function deleteProduct(key) {
  delete products[key];
  console.log(products);
  displayData();
}
// function updateProduct(key) {
//   listCards[i]
// }
function openAddArticle() {
  if (viewArticle.style.display == "none") {
    viewArticle.style.display = "block";
    console.log("hello boy");
  }
  console.log("hello boy");
}
function closeAddArticle() {
  if (viewArticle.style.display !== "none") {
    viewArticle.style.display = "none";
  }
}

function articleValidation() {
  console.log("article name", articleName);
  // let verif = false;
  // if (articleName.value == "") {
  //   articleNameError.innerHTML = `il faut remplir cette champ`;
  //   articleNameError.style.color = "red";
  // } else {
  //
  //   verif = true;
  // }
  // if (articlePrice.value == "" || articlePrice.value < 10) {
  //   articlePriceError.innerHTML = `il faut remplir cette champ`;
  //   articlePriceError.style.color = "red";
  // } else {
  //
  //   verif = true;
  // }
  articleName = document.querySelector("#articleName").value;
  articlePhoto = document.getElementById("articlePhoto").value;
  articlePrice = document.getElementById("articlePrice").value;
  let newArticle = {
    name: articleName,
    image: articlePhoto,
    price: articlePrice,
  };

  console.log(newArticle);
  products.push(newArticle);
  console.log(products);

  displayData();
  closeAddArticle();
  articleName = "";
  articlePhoto = "";
  articlePrice = "";
  //
  // newArticle.photo = articlePhoto.value;
  // newArticle.price = articlePrice.value;
  //

  // ;
  // ;
}
