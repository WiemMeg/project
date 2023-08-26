//*let products = [
  { image: "img/smart home.jpg", name: "smart home", price: "540" },
  { image: "img/chateau.jpg", name: "chateau", price: "100000" },
  { image: "img/chateau.jpg", name: "chateau", price: "100000" },
  { image: "img/chateau.jpg", name: "chateau", price: "100000" },
];

function populateTableList() {
  let ListOfProducts = "";
  products.forEach(
    (prod) =>
      (listOfProducts += `<tr class="text-center">
<td class="w-25">${prod.name}</td>
<td class="w-25">${prod.price}</td>
<td><img src ${prod.img} class="img-fluid img-thumbnail w-10"></td>
<td class="w-25"><button class="btn btn-info">View</button></td>`)
  );
  

  document.getElementById("productList"), (innerHTML = listOfProducts);
}
