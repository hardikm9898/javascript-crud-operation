const searchString = window.location.href;


const productImage=document.querySelector(".productImage")
const productId=document.querySelector(".productId")
const productPrice=document.querySelector(".productPrice")
const productName=document.querySelector(".productName")
const productDescription=document.querySelector(".productDescription")


const fullsearchString = new URL(searchString).searchParams.get("id");


const productData = JSON.parse(window.localStorage.getItem(fullsearchString));



const imgTag = document.createElement("img")

imgTag.setAttribute("src",productData.productImage)

productImage.appendChild(imgTag)

const h4Id=document.createElement("h4")
const h4Price=document.createElement("h4")
const h4Name=document.createElement("h4")
const h4Description=document.createElement("h4")

h4Id.innerHTML=fullsearchString
h4Price.innerHTML=productData.productPrice
h4Name.innerHTML=productData.productName

h4Description.innerHTML=productData.productDescription

productDescription.appendChild(h4Description)
productName.appendChild(h4Name)
productPrice.appendChild(h4Price)
productId.appendChild(h4Id)
