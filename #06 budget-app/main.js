const totalBudgetInput = document.querySelector(".totalBudget");
const btnTotalBudget = document.querySelector(".btnTotalBudget");
const money = document.querySelector(".money");
const productName = document.querySelector(".productName");
const productPrice = document.querySelector(".productPrice");
const btnAddExpenses = document.querySelector(".btnAddExpenses");
const expensesTitle = document.querySelector(".expenses");
const balanceTitle = document.querySelector(".balance");
const expensesDetail = document.querySelector(".expensesDetail");
let expensesList = [];
let totalBudget;
let expenses;
let updatedId;

let deleteItem = (e) => {
    expenses = JSON.parse(localStorage.getItem("expenses"));
    expensesList = expenses.filter(exp => e.target.getAttribute("item-id") != exp.id);
    localStorage.setItem("expenses", JSON.stringify(expensesList));
    loadData();
}

let updateItem = (e) => {
    expenses = JSON.parse(localStorage.getItem("expenses"));
    btnAddExpenses.textContent="Güncelle"
    for (let exp of expenses) {
        if (exp.id == e.target.getAttribute("item-id")) {
            productName.value = exp.productName;
            productPrice.value = exp.productPrice;
            updatedId=exp.id;
        }
    }
    btnAddExpenses.setAttribute("type", "updated")
}

let loadElements = () => {
    expenses = JSON.parse(localStorage.getItem("expenses"));
    expensesDetail.innerHTML = "";
    if (expenses && expenses[0] != null) {
        for (let exp of expenses) {
            let div = document.createElement("div")
            let productTitle = document.createElement("p");
            let productPrice = document.createElement("p");
            let updateProduct = document.createElement("i");
            let deleteProduct = document.createElement("i");
            productTitle.className = "productTitle";
            productTitle.textContent = exp.productName;
            productPrice.className = "price";
            productPrice.textContent = exp.productPrice;
            updateProduct.className = "fa-solid fa-pen-to-square";
            updateProduct.setAttribute("item-id", exp.id);
            updateProduct.addEventListener("click", updateItem);

            deleteProduct.className = "fa-solid fa-trash-can";
            deleteProduct.setAttribute("item-id", exp.id);
            deleteProduct.addEventListener("click", deleteItem);


            div.appendChild(productTitle)
            div.appendChild(productPrice)
            div.appendChild(updateProduct)
            div.appendChild(deleteProduct)
            expensesDetail.appendChild(div)
        }
    }
}

let loadData = () => {
    totalBudget = JSON.parse(localStorage.getItem("totalBudget"));
    money.textContent = totalBudget ? totalBudget : "0";
    expenses = JSON.parse(localStorage.getItem("expenses"));
    expensesList = expenses ? expenses : [];
    let totalExpenses = 0;
    if (expenses && expenses[0] != null) {
        for (let exp of expenses) {
            totalExpenses += Number(exp.productPrice);
        }
    }

    let balance = totalBudget - totalExpenses;
    expensesTitle.textContent = totalExpenses;
    balanceTitle.textContent = balance;
    loadElements();
}
loadData()

let setTotalBudget = () => {
    if (totalBudgetInput.value == "") {
        alert("Lütfen bir değer giriniz.")
        return;
    }
    let budget = totalBudgetInput.value;
    money.textContent = budget;
    localStorage.setItem("totalBudget", budget)
    totalBudgetInput.value = "";
    loadData()
}
btnTotalBudget.addEventListener("click", setTotalBudget);

let randomIdGenerator = () => {
    let id = Math.floor(Math.random() * 10000) + new Date().getMilliseconds();
    return id;
}

let addNewExpenses = (e) => {
    if (e.target.getAttribute("type") != "updated") {
        if (productName.value == "" || productPrice.value == 0) {
            alert("Lütfen boş alanları doldurunuz.")
            return;
        }
        let newExpenses = {
            id: randomIdGenerator(),
            productName: productName.value,
            productPrice: productPrice.value
        }
        expensesList.push(newExpenses)
        localStorage.setItem("expenses", JSON.stringify(expensesList))
    } else if (e.target.getAttribute("type") == "updated") {

        expenses = JSON.parse(localStorage.getItem("expenses"));
        let updateExpenses = expenses.filter((exp)=>{
            if(exp.id==updatedId){
                exp.productName=productName.value;
                exp.productPrice=productPrice.value;
            }
            return exp
        })

         localStorage.setItem("expenses",JSON.stringify(updateExpenses))


        btnAddExpenses.setAttribute("type", "push")
        btnAddExpenses.textContent ="Harcama Ekle"

    }

    productName.value = ""; productPrice.value = "";
    loadData()

}
btnAddExpenses.addEventListener("click", addNewExpenses)

