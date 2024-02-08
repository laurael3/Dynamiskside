const urlParams= new URLSearchParams(window.location.search);
const id = urlParams.get("id");

fetch("https://kea-alt-del.dk/t7/api/products/" + id)
    .then(res=> res.json())
    .then(data => showProduct(data));

function showProduct(product) {
    document.querySelector("h1").textContent = product.productdisplayname;
    document.querySelector("img").src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;
    document.querySelector(".name").textContent = product.productdisplayname;
    document.querySelector(".brand").textContent = product.brandname;
    document.querySelector(".category").textContent = product.category;
    document.querySelector(".price").textContent = product.price + " kr";
    
}

