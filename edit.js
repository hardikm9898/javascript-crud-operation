const searchString = window.location.href;

const fullSearchString = new URL(searchString).searchParams.get("id");

const form = document.querySelector("form");

const productData = JSON.parse(window.localStorage.getItem(fullSearchString));

const imgInp = document.querySelector("#imgInp");
const blah = document.querySelector("#blah");
imgInp.onchange = () => {
  const [file] = imgInp.files;
  if (file) {
    blah.src = URL.createObjectURL(file);
  }
};
const productIdEdit = document.querySelector(".productID");

const productPriceEdit = document.querySelector(".productPrice");
const productDescriptionEdit = document.querySelector(".productDescription");
const productNameEdit = document.querySelector(".productName");
productIdEdit.value = fullSearchString;

blah.setAttribute("src", productData.productImage);
productPriceEdit.value = productData.productPrice;
productDescriptionEdit.value = productData.productDescription;
productNameEdit.value = productData.productName;

const productCondition = function () {
  const productPrice = document.querySelector(".productPrice").value;
  const productId = document.querySelector(".productID").value;
  const productName = document.querySelector(".productName").value;
  const productImage = document.querySelector(".productImage").files;

  const productDescription = document.querySelector(
    ".productDescription"
  ).value;

  const imageSrc = URL.createObjectURL(productImage[0]);

  const toDataURL = function (url, callback) {
    const xhr = new XMLHttpRequest();
    xhr.onload = function () {
      const reader = new FileReader();

      reader.onloadend = function () {
        callback(reader.result);
      };
      reader.readAsDataURL(xhr.response);
    };
    xhr.open("GET", url);
    xhr.responseType = "blob";
    xhr.send();
  };

  toDataURL(imageSrc, (dataUrl) => {
    const data = {
      "productName": productName,
      "productPrice": productPrice,
      "productImage": dataUrl,
      "productDescription": productDescription,
    };
    window.localStorage.removeItem(fullSearchString);
    window.localStorage.setItem(productId, JSON.stringify(data));
    alert("Entry Updated");
  });
};

const storeRecord = function () {
  const productId = document.querySelector(".productID").value;
  const unique = window.localStorage.getItem(productId);
  if (fullSearchString === productId) {
    productCondition();
  } else if (unique) {
    alert("please pass unique product id try again ");
  } else {
    productCondition();
  }
};
form.addEventListener("submit", storeRecord);
