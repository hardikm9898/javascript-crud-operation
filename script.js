const form = document.querySelector(".form1");
const tbody = document.querySelector("#tbodyElement");
const tableElement = document.querySelector("table");
const imgInp=document.querySelector("#imgInp")
const blah=document.querySelector("#blah")

imgInp.onchange = () => {
  const [file] = imgInp.files
  if (file) {
    blah.src = URL.createObjectURL(file)
  }
}

function displayEntry() {
  tbody.innerHTML = "";
  const allDatakeys = Object.keys(window.localStorage);


  allDatakeys.forEach((x) => {
    const allLocalStorageData = JSON.parse(window.localStorage.getItem(x));

    const trElement = document.createElement("tr");

    const tdProductId = document.createElement("td");
    const tdProductName = document.createElement("td");
    const tdProductImage = document.createElement("td");
    const tdProductPrice = document.createElement("td");
    const tdProductDescription = document.createElement("td");
    const tdProductOpepation = document.createElement("td");
    tdProductId.textContent = x;
    tdProductName.textContent = allLocalStorageData.productName;

    tdProductImage.innerHTML = `<img style="width:10vw;" src="${allLocalStorageData.productImage}">`;
    tdProductPrice.textContent = allLocalStorageData.productPrice;
    tdProductDescription.textContent = allLocalStorageData.productDescription;

    tdProductOpepation.innerHTML = `<a class="edit" href="http://127.0.0.1:5500/edit.html?id=${x}"> <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title></title> <g id="Complete"> <g id="edit"> <g> <path d="M20,16v4a2,2,0,0,1-2,2H4a2,2,0,0,1-2-2V6A2,2,0,0,1,4,4H8" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path> <polygon fill="none" points="12.5 15.8 22 6.2 17.8 2 8.3 11.5 8 16 12.5 15.8" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></polygon> </g> </g> </g> </g></svg></a> <a class= "remove"href="#"><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M10 11V17" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M14 11V17" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M4 7H20" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M6 7H12H18V18C18 19.6569 16.6569 21 15 21H9C7.34315 21 6 19.6569 6 18V7Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg></a> <a class="view" href="http://127.0.0.1:5500/view.html?id=${x}" >  <svg fill="#000000" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 489.801 489.801" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M484.586,233.212c-5.084-4.578-125.779-111.967-239.689-111.967c-113.903,0-234.598,107.389-239.688,111.967 C1.891,236.194,0,240.452,0,244.909c0,4.455,1.891,8.711,5.208,11.693c5.09,4.58,125.785,111.953,239.688,111.953 c113.911,0,234.606-107.373,239.689-111.953c3.322-2.982,5.215-7.238,5.215-11.693 C489.801,240.452,487.908,236.194,484.586,233.212z M244.896,333.915c-49.068,0-89.005-39.924-89.005-89.006 c0-49.086,39.937-89.01,89.005-89.01c49.072,0,89.011,39.924,89.011,89.01C333.908,293.991,293.969,333.915,244.896,333.915z M144.137,179.042c-12.422,18.949-19.721,41.553-19.721,65.867c0,24.277,7.268,46.855,19.686,65.803 c-45.057-21.207-83.982-49.943-103.822-65.818C60.119,229.003,99.045,200.235,144.137,179.042z M345.664,310.757 c12.416-18.947,19.719-41.551,19.719-65.848c0-24.281-7.285-46.873-19.688-65.822c45.043,21.209,83.969,49.945,103.821,65.822 C429.677,260.8,390.756,289.55,345.664,310.757z"></path> <path d="M244.896,194.259c-27.982,0-50.648,22.664-50.648,50.65c0,27.982,22.666,50.648,50.648,50.648 c27.988,0,50.656-22.666,50.656-50.648C295.553,216.923,272.885,194.259,244.896,194.259z M244.896,226.298 c-10.262,0-18.607,8.346-18.607,18.611c0,4.348-3.533,7.865-7.867,7.865c-4.365,0-7.869-3.518-7.869-7.865 c0-18.934,15.4-34.348,34.344-34.348c4.352,0,7.871,3.52,7.871,7.867C252.768,222.78,249.248,226.298,244.896,226.298z"></path> </g> </g></svg> </a>`;
    tbody.appendChild(trElement);
    trElement.appendChild(tdProductId);
    trElement.appendChild(tdProductName);
    trElement.appendChild(tdProductImage);
    trElement.appendChild(tdProductPrice);
    trElement.appendChild(tdProductDescription);
    trElement.appendChild(tdProductOpepation);
  });
}

const storeRecord = function () {
  const productPrice = document.querySelector(".productPrice").value;
  const productId = document.querySelector(".productID").value;
  const productName = document.querySelector(".productName").value;
  const productImage = document.querySelector(".productImage").files;

  const productDescription = document.querySelector(
    ".productDescription"
  ).value;

  const unique = window.localStorage.getItem(productId);

  if (unique) {
    alert("please pass unique product id");
  } else {
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

      window.localStorage.setItem(productId, JSON.stringify(data));
      displayEntry();
    });
  }
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  storeRecord();
});




// =======================================================remove entry====================================================================

const targetElement = function (e) {
  const target = Object(e.target);

  if (target.className === "remove") {
    const parent = e.target.closest("tr");
    const productIdRemove = parent.firstChild.textContent;

    window.localStorage.removeItem(productIdRemove);
    displayEntry();
  }
};

// editFunction;

tableElement.addEventListener("click", targetElement);

// =========================================================sort function ================================================


const sortData = function (sortArrayData) {
  tbody.innerHTML = "";
  sortArrayData.forEach((x) => {
    const allLocalStorageData = JSON.parse(window.localStorage.getItem(x));

    const trElement = document.createElement("tr");

    const tdProductId = document.createElement("td");
    const tdProductName = document.createElement("td");
    const tdProductImage = document.createElement("td");
    const tdProductPrice = document.createElement("td");
    const tdProductDescription = document.createElement("td");
    const tdProductOpepation = document.createElement("td");
    tdProductId.textContent = x;
    tdProductName.textContent = allLocalStorageData.productName;

    tdProductImage.innerHTML = `<img style="width:10vw;" src="${allLocalStorageData.productImage}">`;
    tdProductPrice.textContent = allLocalStorageData.productPrice;
    tdProductDescription.textContent = allLocalStorageData.productDescription;

    tdProductOpepation.innerHTML = `<a class="edit" href="http://127.0.0.1:5500/edit.html?id=${x}"> <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title></title> <g id="Complete"> <g id="edit"> <g> <path d="M20,16v4a2,2,0,0,1-2,2H4a2,2,0,0,1-2-2V6A2,2,0,0,1,4,4H8" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path> <polygon fill="none" points="12.5 15.8 22 6.2 17.8 2 8.3 11.5 8 16 12.5 15.8" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></polygon> </g> </g> </g> </g></svg></a> <a class= "remove"href="#"><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M10 11V17" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M14 11V17" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M4 7H20" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M6 7H12H18V18C18 19.6569 16.6569 21 15 21H9C7.34315 21 6 19.6569 6 18V7Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg></a> <a class="view" href="http://127.0.0.1:5500/view.html?id=${x}" >  <svg fill="#000000" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 489.801 489.801" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M484.586,233.212c-5.084-4.578-125.779-111.967-239.689-111.967c-113.903,0-234.598,107.389-239.688,111.967 C1.891,236.194,0,240.452,0,244.909c0,4.455,1.891,8.711,5.208,11.693c5.09,4.58,125.785,111.953,239.688,111.953 c113.911,0,234.606-107.373,239.689-111.953c3.322-2.982,5.215-7.238,5.215-11.693 C489.801,240.452,487.908,236.194,484.586,233.212z M244.896,333.915c-49.068,0-89.005-39.924-89.005-89.006 c0-49.086,39.937-89.01,89.005-89.01c49.072,0,89.011,39.924,89.011,89.01C333.908,293.991,293.969,333.915,244.896,333.915z M144.137,179.042c-12.422,18.949-19.721,41.553-19.721,65.867c0,24.277,7.268,46.855,19.686,65.803 c-45.057-21.207-83.982-49.943-103.822-65.818C60.119,229.003,99.045,200.235,144.137,179.042z M345.664,310.757 c12.416-18.947,19.719-41.551,19.719-65.848c0-24.281-7.285-46.873-19.688-65.822c45.043,21.209,83.969,49.945,103.821,65.822 C429.677,260.8,390.756,289.55,345.664,310.757z"></path> <path d="M244.896,194.259c-27.982,0-50.648,22.664-50.648,50.65c0,27.982,22.666,50.648,50.648,50.648 c27.988,0,50.656-22.666,50.656-50.648C295.553,216.923,272.885,194.259,244.896,194.259z M244.896,226.298 c-10.262,0-18.607,8.346-18.607,18.611c0,4.348-3.533,7.865-7.867,7.865c-4.365,0-7.869-3.518-7.869-7.865 c0-18.934,15.4-34.348,34.344-34.348c4.352,0,7.871,3.52,7.871,7.867C252.768,222.78,249.248,226.298,244.896,226.298z"></path> </g> </g></svg> </a>`;
    tbody.appendChild(trElement);
    trElement.appendChild(tdProductId);
    trElement.appendChild(tdProductName);
    trElement.appendChild(tdProductImage);
    trElement.appendChild(tdProductPrice);
    trElement.appendChild(tdProductDescription);
    trElement.appendChild(tdProductOpepation);
  });
};


document.querySelector("select").selectedIndex = -1;

const select = document.querySelector("select");

select.addEventListener("change", ()=>{
  if(select.value==="sortId"){
    const sortArrayData = Object.keys(window.localStorage);
    sortArrayData.sort((a, b) => a - b);
    sortData(sortArrayData)
  }
  else if(select.value==="sortPrice"){
    
    
    const sortArrayData = Object.keys(window.localStorage);
    sortArrayData.sort((a, b) =>
    Number(JSON.parse(localStorage.getItem(a)).productPrice) >
    Number(JSON.parse(localStorage.getItem(b)).productPrice)
      ? 1
      : -1
      );
      
      sortData(sortArrayData)
      
    }
    else if(select.value==="sortName"){
      
      
      const sortArrayData = Object.keys(window.localStorage);
      sortArrayData.sort((a, b) =>
      JSON.parse(localStorage.getItem(a)).productName >
      JSON.parse(localStorage.getItem(b)).productName
      ? 1
      : -1
      );
      
      sortData(sortArrayData)
      
    }
  });
  
  displayEntry();
  
  // ==============================================================filter=======================================================




const form2=document.querySelector(".form2")
form2.addEventListener("submit",(e)=>{
  e.preventDefault()
  const search =(document.querySelector(".search").value).trim()
    
  const allDataLocalStorageKeys = Object.keys(window.localStorage)



if(search===""){
  sortData(allDataLocalStorageKeys)
}
else{
const displaydataKeyArray=allDataLocalStorageKeys.filter(x=> search===x )
sortData(displaydataKeyArray)
}})


