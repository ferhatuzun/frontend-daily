const shoppingList = document.querySelector(".shopping-list");
const newItemInput = document.querySelector(".form-control");
const addButton = document.querySelector(".btn[type='submit']")
const filterButtons = document.querySelectorAll(".filter-buttons button")
const clearBtn = document.querySelector(".clearBtn")

let shoppingObject;
loadItem();
filterItem("all")
function loadItem() {
    shoppingObject = JSON.parse(localStorage.getItem("shoppingList")) || []
     for (let item of shoppingObject) {
         createElement(item)
     }
     showAlert();
}

saveItemsLS()

function saveItemsLS() {
    const list = document.querySelectorAll("li");
    const shopList = [];
    for (let li of list) {
        let id = li.getAttribute("item-id");
        let name = li.querySelector(".item-name").textContent;
        let complated = li.querySelector(".form-check-input").checked

        shopList.push({ id, name, complated })
    }

    localStorage.setItem("shoppingList", JSON.stringify(shopList))
}


function createElement(item) {
    const li = document.createElement("li");
    li.className = "border rounded p-3 mb-1"
    li.toggleAttribute("item-complated", item.complated)

    const input = document.createElement("input")
    input.className = "form-check-input";
    input.type = "checkbox";
    input.checked = item.complated

    if (item.complated == true) { }
    input.addEventListener("change", toggleComplated)


    const div = document.createElement("div");
    div.className = "item-name";
    div.textContent = item.name;

    div.addEventListener("click", editShoppingItem)
    div.addEventListener("keydown", closeEditMode)
    div.addEventListener("blur", closeEditMode)


    if (item.complated == true) {
        div.classList.toggle("line-through")
    }

    const i = document.createElement("i");
    i.className = "fs-3 bi bi-x text-danger delete-icon";
    li.setAttribute("item-id", item.id)
    i.addEventListener("click", deleteItem)


    li.appendChild(input);
    li.appendChild(div);
    li.appendChild(i);

    shoppingList.appendChild(li)

    updateFilterItems()

}


addButton.addEventListener("click", addNewItem)
function addNewItem(e) {
    e.preventDefault();
    let generatedId = new Date().getMilliseconds() + Math.round(Math.random() * 10000);

    if (newItemInput.value.trim().length == 0) {
        alert("Lütfen bir eleman adı giriniz.")
        return;
    }

    let newItem = { id: generatedId, "name": newItemInput.value.trim(), "complated": false }

    createElement(newItem)
    
    newItemInput.value = ""
    saveItemsLS()
    showAlert();


}

function toggleComplated(e) {

    e.target.nextElementSibling.classList.toggle("line-through")
    e.target.parentElement.toggleAttribute("item-complated", e.target.checked)
    updateFilterItems()
    saveItemsLS()

}
function editShoppingItem(e) {
    e.target.contentEditable = true;
}
function closeEditMode(e) {
    if (e.key == "Enter") {
        e.target.contentEditable = false
    }
    saveItemsLS()
}

function deleteItem(e) {
    e.target.parentElement.remove()
    saveItemsLS()
    showAlert()
}

for (let button of filterButtons) {
    button.addEventListener("click", handleFilterSelection);
}

function handleFilterSelection(e) {
    const filterBtn = e.target;

    for (let button of filterButtons) {
        button.classList.remove("btn-primary");
        button.classList.add("btn-secondary");
    }

    filterBtn.classList.add("btn-primary");
    filterBtn.classList.remove("btn-secondary");
    filterItem(e.target.getAttribute("item-filter"));

}

function filterItem(filter) {
    const listItems = document.querySelectorAll(".shopping-list li")
    for (let item of listItems) {
        if (filter == "all") {
            item.style.display = "flex"
        }
        else if (filter == "incomplete" && item.hasAttribute("item-complated") == false) {
            item.style.display = "flex"
        }
        else if (filter == "completed" && item.hasAttribute("item-complated") == true) {
            item.style.display = "flex"
        }
        else {
            item.style.display = "none"
        }
    }
}

function updateFilterItems() {
    const filterType = document.querySelector(".filter-buttons .btn-primary")
    filterItem(filterType.getAttribute("item-filter"));
}


clearBtn.addEventListener("click",clearList);
function clearList(e){
    shoppingList.innerHTML="";
    localStorage.clear("shoppingList")
     saveItemsLS();
    showAlert()

}
function showAlert(){
   const isEmpty = document.querySelectorAll("li").length===0;
   const alert = document.querySelector(".alert");
   alert.classList.toggle("d-none",!isEmpty)
}