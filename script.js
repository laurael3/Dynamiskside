const urlParams= new URLSearchParams(window.location.search);
const category = urlParams.get("category");

fetch("https://kea-alt-del.dk/t7/api/products?category=" + category)
    .then(res=> res. json())
    .then(data => showproducts(data));


function showproducts(products){
    products.forEach(showProduct);
}

function showProduct(product) {
    console.log(product);
    //fang template
    const template = document.querySelector("template").content;
    //lav en kopi
    const copy = template.cloneNode(true);
    //Ændre Content

    copy.querySelector("img").src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;
    copy.querySelector(".productName").textContent = product.productdisplayname;
    copy.querySelector(".brand").textContent = product.brandname;
    copy.querySelector(".price").textContent = product.price + " kr";
    
    if (product.soldout) {
        //Produktet er udsolgt
        copy.querySelector("article").classList.add("productSoldout")
    }
    
    copy.querySelector(".readmore").setAttribute("href",`product.html?id=${product.id}`)
        
    const parentElement = document.querySelector(".grid_3-3-3");
    parentElement.appendChild(copy)

}


